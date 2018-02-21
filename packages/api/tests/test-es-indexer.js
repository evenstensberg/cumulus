'use strict';

const test = require('ava');
const indexer = require('../es/indexer');
const { Search } = require('../es/search');
const { bootstrapElasticSearch } = require('../lambdas/bootstrap');
const { randomString } = require('@cumulus/common/test-utils');
const granuleSuccess = require('./data/granule_success.json');
const granuleFailure = require('./data/granule_failed.json');
const pdrFailure = require('./data/pdr_failure.json');
const pdrSuccess = require('./data/pdr_success.json');

const esIndex = randomString();
let esClient;


test.before(async () => {
  // create the elasticsearch index and add mapping
  await bootstrapElasticSearch('fakehost', esIndex);
  esClient = await Search.es();
});

test.after.always(async () => {
  // remove elasticsearch index
  await esClient.indices.delete({ index: esIndex });
});

test('indexing a successful granule record', async (t) => {
  const type = 'granule';
  const granule = granuleSuccess.payload.granules[0];
  const collection = granuleSuccess.meta.collection;
  const r = await indexer.granule(esClient, granuleSuccess, esIndex, type);

  // make sure record is created
  t.is(r[0].result, 'created');

  const collectionId = indexer.constructCollectionId(collection.name, collection.version);

  // check the record exists
  const record = await esClient.get({
    index: esIndex,
    type,
    id: granule.granuleId,
    parent: collectionId
  });

  t.deepEqual(record._source.files, granule.files);
  t.is(record._source.status, 'completed');
  t.is(record._parent, collectionId);
  t.is(record._id, granule.granuleId);
  t.is(record._source.cmrLink, granule.cmrLink);
  t.is(record._source.published, granule.published);

  const { name: deconstructed } = indexer.deconstructCollectionId(record._parent);
  t.is(deconstructed, collection.name);
});

test('indexing multiple successful granule records', async (t) => {
  const newPayload = JSON.parse(JSON.stringify(granuleSuccess));
  const type = 'granule';
  const granule = newPayload.payload.granules[0];
  granule.granuleId = randomString();
  const granule2 = Object.assign({}, granule);
  granule2.granuleId = randomString();
  newPayload.payload.granules.push(granule2);
  const collection = newPayload.meta.collection;
  const response = await indexer.granule(esClient, newPayload, esIndex, type);

  const collectionId = indexer.constructCollectionId(collection.name, collection.version);

  t.is(response.length, 2);
  const promises = response.map((r) => {
    t.is(r.result, 'created');

    // check the record exists
    return esClient.get({
      index: esIndex,
      type,
      id: r._id,
      parent: collectionId
    });
  });

  const records = await Promise.all(promises);
  records.forEach((record) => {
    t.is(record._source.status, 'completed');
    t.is(record._parent, collectionId);
    t.is(record._source.cmrLink, granule.cmrLink);
    t.is(record._source.published, granule.published);
  });
});

test('indexing a failed granule record', async (t) => {
  const type = 'granule';
  const granule = granuleFailure.payload.granules[0];
  const collection = granuleFailure.meta.collection;
  const r = await indexer.granule(esClient, granuleFailure, esIndex, type);

  // make sure record is created
  t.is(r[0].result, 'created');

  const collectionId = indexer.constructCollectionId(collection.name, collection.version);

  // check the record exists
  const record = await esClient.get({
    index: esIndex,
    type,
    id: granule.granuleId,
    parent: collectionId
  });

  t.deepEqual(record._source.files, granule.files);
  t.is(record._source.status, 'failed');
  t.is(record._id, granule.granuleId);
  t.is(record._source.published, false);
  t.is(record._source.error, JSON.stringify(granuleFailure.exception));
});

test('indexing a granule record without state_machine info', async (t) => {
  const newPayload = JSON.parse(JSON.stringify(granuleSuccess));
  const type = 'granule';
  delete newPayload.cumulus_meta.state_machine;

  const r = await indexer.granule(esClient, newPayload, esIndex, type);
  t.is(r, undefined);
});

test('indexing a granule record without a granule', async (t) => {
  const newPayload = JSON.parse(JSON.stringify(granuleSuccess));
  const type = 'granule';
  delete newPayload.payload;
  delete newPayload.meta;

  const r = await indexer.granule(esClient, newPayload, esIndex, type);
  t.is(r, undefined);
});

test('indexing a granule record in meta section', async (t) => {
  const newPayload = JSON.parse(JSON.stringify(granuleSuccess));
  const type = 'granule';
  delete newPayload.payload;
  newPayload.meta.status = 'running';
  const collection = newPayload.meta.collection;
  const granule = newPayload.meta.input_granules[0];
  granule.granuleId = randomString();

  const r = await indexer.granule(esClient, newPayload, esIndex, type);

  // make sure record is created
  t.is(r[0].result, 'created');

  const collectionId = indexer.constructCollectionId(collection.name, collection.version);

  // check the record exists
  const record = await esClient.get({
    index: esIndex,
    type,
    id: granule.granuleId,
    parent: collectionId
  });

  t.deepEqual(record._source.files, granule.files);
  t.is(record._source.status, 'running');
  t.is(record._parent, collectionId);
  t.is(record._id, granule.granuleId);
  t.is(record._source.published, false);
});

test('indexing a rule record', async (t) => {
  const testRecord = {
    name: randomString()
  };

  const r = await indexer.indexRule(esClient, testRecord, esIndex);

  // make sure record is created
  t.is(r.result, 'created');

  // check the record exists
  const record = await esClient.get({
    index: esIndex,
    type: 'rule',
    id: testRecord.name
  });

  t.is(record._id, testRecord.name);
  t.is(typeof record._source.timestamp, 'number');
});

test('indexing a provider record', async (t) => {
  const testRecord = {
    id: randomString()
  };

  const r = await indexer.indexProvider(esClient, testRecord, esIndex);

  // make sure record is created
  t.is(r.result, 'created');

  // check the record exists
  const record = await esClient.get({
    index: esIndex,
    type: 'provider',
    id: testRecord.id
  });

  t.is(record._id, testRecord.id);
  t.is(typeof record._source.timestamp, 'number');
});

test('indexing a collection record', async (t) => {
  const collection = {
    name: randomString(),
    version: '001'
  };

  const collectionId = indexer.constructCollectionId(collection.name, collection.version);
  const r = await indexer.indexCollection(esClient, collection, esIndex);

  // make sure record is created
  t.is(r.result, 'created');

  // check the record exists
  const record = await esClient.get({
    index: esIndex,
    type: 'collection',
    id: collectionId
  });

  t.is(record._id, collectionId);
  t.is(record._source.name, collection.name);
  t.is(record._source.version, collection.version);
  t.is(typeof record._source.timestamp, 'number');
});

test('indexing a failed pdr record', async (t) => {
  const type = 'pdr';
  const payload = pdrFailure.payload;
  payload.pdr.name = randomString();
  const collection = pdrFailure.meta.collection;
  const r = await indexer.pdr(esClient, pdrFailure, esIndex, type);

  // make sure record is created
  t.is(r.result, 'created');

  const collectionId = indexer.constructCollectionId(collection.name, collection.version);

  // check the record exists
  const response = await esClient.get({
    index: esIndex,
    type,
    id: payload.pdr.name
  });
  const record = response._source;

  t.is(record.status, 'failed');
  t.is(record.collectionId, collectionId);
  t.is(response._id, payload.pdr.name);
  t.is(record.pdrName, payload.pdr.name);

  // check stats
  const stats = record.stats;
  t.is(stats.total, 1);
  t.is(stats.failed, 1);
  t.is(stats.processing, 0);
  t.is(stats.completed, 0);
  t.is(record.progress, 100);
});

test('indexing a successful pdr record', async (t) => {
  const type = 'pdr';
  pdrSuccess.meta.pdr.name = randomString();
  const pdr = pdrSuccess.meta.pdr;
  const collection = pdrSuccess.meta.collection;
  const r = await indexer.pdr(esClient, pdrSuccess, esIndex, type);

  // make sure record is created
  t.is(r.result, 'created');

  const collectionId = indexer.constructCollectionId(collection.name, collection.version);

  // check the record exists
  const response = await esClient.get({
    index: esIndex,
    type,
    id: pdr.name
  });
  const record = response._source;

  t.is(record.status, 'completed');
  t.is(record.collectionId, collectionId);
  t.is(response._id, pdr.name);
  t.is(record.pdrName, pdr.name);

  // check stats
  const stats = record.stats;
  t.is(stats.total, 3);
  t.is(stats.failed, 1);
  t.is(stats.processing, 0);
  t.is(stats.completed, 2);
  t.is(record.progress, 100);
});

test('indexing a running pdr record', async (t) => {
  const type = 'pdr';
  const newPayload = JSON.parse(JSON.stringify(pdrSuccess));
  newPayload.meta.pdr.name = randomString();
  newPayload.meta.status = 'running';
  newPayload.payload.running.push('arn');
  const pdr = newPayload.meta.pdr;
  const r = await indexer.pdr(esClient, newPayload, esIndex, type);

  // make sure record is created
  t.is(r.result, 'created');

  // check the record exists
  const response = await esClient.get({
    index: esIndex,
    type,
    id: pdr.name
  });
  const record = response._source;

  t.is(record.status, 'running');

  // check stats
  const stats = record.stats;
  t.is(stats.total, 4);
  t.is(stats.failed, 1);
  t.is(stats.processing, 1);
  t.is(stats.completed, 2);
  t.is(record.progress, 75);
});

test('indexing a running pdr when pdr is missing', async (t) => {
  const type = 'pdr';
  delete pdrSuccess.meta.pdr;
  const r = await indexer.pdr(esClient, pdrSuccess, esIndex, type);

  // make sure record is created
  t.is(r, undefined);
});

test('indexing a step function with missing arn', async(t) => {
  const newPayload = JSON.parse(JSON.stringify(granuleSuccess));
  delete newPayload.cumulus_meta.state_machine;

  const promise = indexer.indexStepFunction(esClient, newPayload, esIndex);
  const error = await t.throws(promise);
  t.is(error.message, 'State Machine Arn is missing. Must be included in the cumulus_meta');
});

test('indexing a successful step function', async (t) => {
  const newPayload = JSON.parse(JSON.stringify(pdrSuccess));
  newPayload.cumulus_meta.execution_name = randomString();

  const r = await indexer.indexStepFunction(esClient, newPayload, esIndex);

  // make sure record is created
  t.is(r.result, 'created');

  // check the record exists
  const response = await esClient.get({
    index: esIndex,
    type: 'execution',
    id: r._id
  });
  const record = response._source;

  t.is(record.status, 'completed');
  t.is(record.type, newPayload.meta.workflow_name);
  t.is(record.createdAt, newPayload.cumulus_meta.workflow_start_time);
});

test('indexing a failed step function', async (t) => {
  const newPayload = JSON.parse(JSON.stringify(pdrFailure));
  newPayload.cumulus_meta.execution_name = randomString();

  const r = await indexer.indexStepFunction(esClient, newPayload, esIndex);

  // make sure record is created
  t.is(r.result, 'created');

  // check the record exists
  const response = await esClient.get({
    index: esIndex,
    type: 'execution',
    id: r._id
  });
  const record = response._source;

  t.is(record.status, 'failed');
  t.is(record.type, newPayload.meta.workflow_name);
  t.is(typeof record.error, 'string');
  t.is(record.createdAt, newPayload.cumulus_meta.workflow_start_time);
});

test('partially updating a provider record', async (t) => {
  const testRecord = {
    id: randomString()
  };
  const type = 'provider';

  let r = await indexer.indexProvider(esClient, testRecord, esIndex, type);

  // make sure record is created
  t.is(r.result, 'created');
  t.is(r._id, testRecord.id);

  // now partially update it
  const updatedRecord = {
    host: 'example.com'
  };
  r = await indexer.partialRecordUpdate(
    esClient,
    testRecord.id,
    type,
    updatedRecord,
    undefined,
    esIndex
  );

  t.is(r.result, 'updated');
  // check the record exists
  const record = await esClient.get({
    index: esIndex,
    type,
    id: testRecord.id
  });

  t.is(record._id, testRecord.id);
  t.is(record._source.host, updatedRecord.host);
});
