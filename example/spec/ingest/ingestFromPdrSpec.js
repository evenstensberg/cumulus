'use strict';

/**
 * End to end
 *
 * Kick off discover and queue pdrs which:
 * Discovers 1 PDR
 * Queues that PDR
 * Kicks off the ParsePDR workflow
 *
 * Parse PDR workflow:
 * parses pdr
 * queues a granule
 * pdr status check
 * This will kick off the ingest workflow
 *
 * Ingest worklow:
 * runs sync granule - saves file to file staging location
 * performs the fake processing step - generates CMR metadata
 * Moves the file to the final location
 * Does not post to CMR (that is in a separate test)
 */

const { Collection, Execution } = require('@cumulus/api/models');
const {
  buildAndExecuteWorkflow,
  waitForCompletedExecution,
  LambdaStep,
  addProviders,
  cleanupProviders,
  addCollections,
  cleanupCollections,
  api: apiTestUtils
} = require('@cumulus/integration-tests');

const {
  loadConfig,
  updateAndUploadTestDataToBucket,
  deleteFolder,
  createTimestampedTestId,
  createTestDataPath,
  createTestSuffix
} = require('../helpers/testUtils');

const config = loadConfig();
const lambdaStep = new LambdaStep();
const taskName = 'DiscoverAndQueuePdrs';
const pdrFilename = 'MOD09GQ_1granule_v3.PDR';

const s3data = [
  '@cumulus/test-data/pdrs/MOD09GQ_1granule_v3.PDR'
];

describe('Ingesting from PDR', () => {
  const testId = createTimestampedTestId(config.stackName, 'IngestFromPdr');
  const testSuffix = createTestSuffix(testId);
  const testDataFolder = createTestDataPath(testId);
  const providersDir = './data/providers/s3/';
  const collectionsDir = './data/collections/s3_MOD09GQ_006';
  const collection = { name: `MOD09GQ${testSuffix}`, version: '006' };
  const provider = { id: `s3_provider${testSuffix}` };
  process.env.ExecutionsTable = `${config.stackName}-ExecutionsTable`;
  process.env.CollectionsTable = `${config.stackName}-CollectionsTable`;
  const executionModel = new Execution();
  const collectionModel = new Collection();

  beforeAll(async () => {
    // delete pdr from old tests
    await apiTestUtils.deletePdr({
      prefix: config.stackName,
      pdr: pdrFilename
    });
    // populate collections, providers and test data
    await Promise.all([
      updateAndUploadTestDataToBucket(config.bucket, s3data, testDataFolder, [{ old: 'cumulus-test-data/pdrs', new: testDataFolder }, { old: 'DATA_TYPE = MOD09GQ;', new: `DATA_TYPE = MOD09GQ${testSuffix};` }]),
      addCollections(config.stackName, config.bucket, collectionsDir, testSuffix),
      addProviders(config.stackName, config.bucket, providersDir, config.bucket, testSuffix)
    ]);
    // update provider path
    await collectionModel.update(collection, { provider_path: testDataFolder });
  });

  afterAll(async () => {
    // clean up stack state added by test
    await Promise.all([
      deleteFolder(config.bucket, testDataFolder),
      cleanupCollections(config.stackName, config.bucket, collectionsDir, testSuffix),
      cleanupProviders(config.stackName, config.bucket, providersDir, testSuffix),
      apiTestUtils.deletePdr({
        prefix: config.stackName,
        pdr: pdrFilename
      })
    ]);
  });

  describe('The Discover and Queue PDRs workflow', () => {
    let workflowExecution;
    let queuePdrsOutput;

    beforeAll(async () => {
      // delete pdr from old tests
      await apiTestUtils.deletePdr({
        prefix: config.stackName,
        pdr: pdrFilename
      });
      // populate collections, providers and test data
      await Promise.all([
        updateAndUploadTestDataToBucket(config.bucket, s3data, testDataFolder, [{ old: 'cumulus-test-data/pdrs', new: testDataFolder }, { old: 'DATA_TYPE = MOD09GQ;', new: `DATA_TYPE = MOD09GQ${testSuffix};` }]),
        addCollections(config.stackName, config.bucket, collectionsDir, testSuffix),
        addProviders(config.stackName, config.bucket, providersDir, config.bucket, testSuffix)
      ]);
      // update provider path
      await collectionModel.update(collection, { provider_path: testDataFolder });

      workflowExecution = await buildAndExecuteWorkflow(
        config.stackName,
        config.bucket,
        taskName,
        collection,
        provider
      );

      queuePdrsOutput = await lambdaStep.getStepOutput(
        workflowExecution.executionArn,
        'QueuePdrs'
      );
    });

    it('executes successfully', () => {
      expect(workflowExecution.status).toEqual('SUCCEEDED');
    });

    describe('the DiscoverPdrs Lambda', () => {
      let lambdaOutput = null;

      beforeAll(async () => {
        lambdaOutput = await lambdaStep.getStepOutput(workflowExecution.executionArn, 'DiscoverPdrs');
      });

      it('has expected path and name output', () => {
        expect(lambdaOutput.payload.pdrs[0].path).toEqual(testDataFolder);
        expect(lambdaOutput.payload.pdrs[0].name).toEqual(pdrFilename);
      });
    });

    describe('the QueuePdrs Lambda', () => {
      it('has expected output', () => {
        expect(queuePdrsOutput.payload.pdrs_queued).toEqual(1);
        expect(queuePdrsOutput.payload.running.length).toEqual(1);
      });
    });

    /**
     * The DiscoverAndQueuePdrs workflow kicks off a ParsePdr workflow, so check that the
     * ParsePdr workflow completes successfully. Above, we checked that there is
     * one running task, which is the ParsePdr workflow. The payload has the arn of the
     * running workflow, so use that to get the status.
     */
    describe('The ParsePdr workflow', () => {
      let parsePdrWorkflowArn;
      let parsePdrExecutionStatus;
      let parseLambdaOutput;
      let queueGranulesOutput;

      beforeAll(async () => {
        parsePdrWorkflowArn = queuePdrsOutput.payload.running[0];
        console.log(`Wait for execution ${parsePdrWorkflowArn}`);
        parsePdrExecutionStatus = await waitForCompletedExecution(parsePdrWorkflowArn);

        queueGranulesOutput = await lambdaStep.getStepOutput(
          workflowExecution.executionArn,
          'QueueGranules'
        );
      });

      afterAll(async () => {
        // wait for child executions to complete
        const queueGranulesOutput = await lambdaStep.getStepOutput(
          parsePdrWorkflowArn,
          'QueueGranules'
        );
        await Promise.all(queueGranulesOutput.payload.running.map(async (arn) => {
          await waitForCompletedExecution(arn);
        }));
        await apiTestUtils.deleteGranule({
          prefix: config.stackName,
          granuleId: parseLambdaOutput.payload.granules[0].granuleId
        });
      });

      it('executes successfully', () => {
        expect(parsePdrExecutionStatus).toEqual('SUCCEEDED');
      });

      describe('ParsePdr lambda function', () => {
        it('successfully parses a granule from the PDR', async () => {
          parseLambdaOutput = await lambdaStep.getStepOutput(
            parsePdrWorkflowArn,
            'ParsePdr'
          );
          expect(parseLambdaOutput.payload.granules.length).toEqual(1);
        });
      });

      describe('QueueGranules lambda function', () => {
        it('has expected pdr and arns output', () => {
          expect(queueGranulesOutput.payload.running.length).toEqual(1);
          expect(queueGranulesOutput.payload.pdr).toEqual(expectedParsePdrOutput.pdr);
        });
      });

      describe('PdrStatusCheck lambda function', () => {
        let lambdaOutput = null;

        beforeAll(async () => {
          lambdaOutput = await lambdaStep.getStepOutput(
            workflowExecution.executionArn,
            'PdrStatusCheck'
          );
        });

        it('has expected output', () => {
          const payload = lambdaOutput.payload;
          expect(payload.running.concat(payload.completed, payload.failed).length).toEqual(1);
          expect(payload.pdr).toEqual(expectedParsePdrOutput.pdr);
        });
      });

      describe('SfSnsReport lambda function', () => {
        let lambdaOutput;
        beforeAll(async () => {
          lambdaOutput = await lambdaStep.getStepOutput(workflowExecution.executionArn, 'SfSnsReport');
        });

        // SfSnsReport lambda is used in the workflow multiple times, appearantly, only the first output
        // is retrieved which is the first step (StatusReport)
        it('has expected output message', () => {
          expect(lambdaOutput.payload).toEqual(inputPayload);
        });
      });

      /**
       * The parse pdr workflow kicks off a granule ingest workflow, so check that the
       * granule ingest workflow completes successfully. Above, we checked that there is
       * one running task, which is the sync granule workflow. The payload has the arn of the
       * running workflow, so use that to get the status.
       */
      describe('IngestGranule workflow', () => {
        let ingestGranuleWorkflowArn;
        let ingestGranuleExecutionStatus;

        beforeAll(async () => {
          // wait for IngestGranule execution to complete
          ingestGranuleWorkflowArn = queueGranulesOutput.payload.running[0];
          ingestGranuleExecutionStatus = await waitForCompletedExecution(ingestGranuleWorkflowArn);
        });

        afterAll(async () => {
          // cleanup
          const finalOutput = await lambdaStep.getStepOutput(ingestGranuleWorkflowArn, 'SfSnsReport');
          // delete ingested granule(s)
          await Promise.all(
            finalOutput.payload.granules.map((g) =>
              apiTestUtils.deleteGranule({
                prefix: config.stackName,
                granuleId: g.granuleId
              }))
          );
        });

        it('executes successfully', () => {
          expect(ingestGranuleExecutionStatus).toEqual('SUCCEEDED');
        });

        describe('SyncGranule lambda function', () => {
          it('outputs 1 granule and pdr', async () => {
            const lambdaOutput = await lambdaStep.getStepOutput(
              ingestGranuleWorkflowArn,
              'SyncGranule'
            );
            expect(lambdaOutput.payload.granules.length).toEqual(1);
            expect(lambdaOutput.payload.pdr).toEqual(lambdaOutput.payload.pdr);
          });
        });
      });

      /** This test relies on the previous 'IngestGranule workflow' to complete */
      describe('When accessing an execution via the API that was triggered from a parent step function', () => {
        it('displays a link to the parent', async () => {
          const ingestGranuleWorkflowArn = queueGranulesOutput.payload.running[0];
          const ingestGranuleExecution = await apiTestUtils.getExecution({
            prefix: config.stackName,
            arn: ingestGranuleWorkflowArn
          });

          expect(ingestGranuleExecution.parentArn).toEqual(workflowExecution.executionArn);
        });
      });

      describe('When accessing an execution via the API that was not triggered from a parent step function', () => {
        it('does not display a parent link', async () => {
          const parsePdrExecution = await apiTestUtils.getExecution({
            prefix: config.stackName,
            arn: workflowExecution.executionArn
          });

          expect(parsePdrExecution.parentArn).toBeUndefined();
        });
      });

      describe('the sf-sns-report task has published a sns message and', () => {
        it('the pdr record is added to DynamoDB', async () => {
          const record = await pdrModel.get({ pdrName: inputPayload.pdr.name });
          expect(record.execution).toEqual(getExecutionUrl(workflowExecution.executionArn));
          expect(record.status).toEqual('completed');
        });

        it('the execution record is added to DynamoDB', async () => {
          const record = await executionModel.get({ arn: workflowExecution.executionArn });
          expect(record.status).toEqual('completed');
        });
      });

      describe('When a workflow is configured to make a choice based on the output of a Cumulus task', () => {
        let executionStatus;

        beforeAll(async () => {
          const executionArn = workflowExecution.executionArn;
          executionStatus = await apiTestUtils.getExecutionStatus({
            prefix: config.stackName,
            arn: executionArn
          });
        });

        it('branches according to the CMA output', async () => {
          expect(executionStatus.executionHistory).toBeTruthy();
          const events = executionStatus.executionHistory.events;

          // the output of the CheckStatus is used to determine the task of choice
          const checkStatusTaskName = 'CheckStatus';
          const stopStatusTaskName = 'StopStatus';
          const pdrStatusReportTaskName = 'PdrStatusReport';

          let choiceVerified = false;
          for (let i = 0; i < events.length; i += 1) {
            const currentEvent = events[i];
            if (currentEvent.type === 'TaskStateExited' &&
            get(currentEvent, 'name') === checkStatusTaskName) {
              const output = get(currentEvent, 'output');
              const isFinished = output.payload.isFinished;

              // get the next task executed
              let nextTask;
              while (!nextTask && i < events.length - 1) {
                i += 1;
                const nextEvent = events[i];
                if (nextEvent.type === 'TaskStateEntered' &&
                  get(nextEvent, 'name')) {
                  nextTask = get(nextEvent, 'name');
                }
              }

              expect(nextTask).toBeTruthy();

              if (isFinished === true) {
                expect(nextTask).toEqual(stopStatusTaskName);
              }
              else {
                expect(nextTask).toEqual(pdrStatusReportTaskName);
              }
              choiceVerified = true;
            }
          }

          expect(choiceVerified).toBe(true);
        });
      });
    });

    /** This test relies on the previous 'ParsePdr workflow' to complete */
    describe('When accessing an execution via the API that was triggered from a parent step function', () => {
      it('displays a link to the parent', async () => {
        const parsePdrWorkflowArn = queuePdrsOutput.payload.running[0];
        const parsePdrExecution = await apiTestUtils.getExecution({
          prefix: config.stackName,
          arn: parsePdrWorkflowArn
        });

        expect(parsePdrExecution.parentArn).toEqual(workflowExecution.executionArn);
      });
    });

    describe('When accessing an execution via the API that was not triggered from a parent step function', () => {
      it('does not display a parent link', async () => {
        const queuePdrsExecution = await apiTestUtils.getExecution({
          prefix: config.stackName,
          arn: workflowExecution.executionArn
        });

        expect(queuePdrsExecution.parentArn).toBeUndefined();
      });
    });


    describe('the sf-sns-report task has published a sns message and', () => {
      it('the execution record is added to DynamoDB', async () => {
        const record = await executionModel.get({ arn: workflowExecution.executionArn });
        expect(record.status).toEqual('completed');
      });
    });
  });
});
