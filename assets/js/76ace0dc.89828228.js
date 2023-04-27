"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[91274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),f=n,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return a?i.createElement(h,r(r({ref:t},c),{},{components:a})):i.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},26173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var i=a(87462),n=a(63366),o=(a(67294),a(3905)),r=["components"],s={id:"workflows-readme",title:"Workflows Overview",hide_title:!1},l=void 0,d={unversionedId:"workflows/workflows-readme",id:"workflows/workflows-readme",title:"Workflows Overview",description:"Workflows are comprised of one or more AWS Lambda Functions and ECS Activities to discover, ingest, process, manage and archive data.",source:"@site/../docs/workflows/README.md",sourceDirName:"workflows",slug:"/workflows/",permalink:"/cumulus/docs/next/workflows/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Juanisa McCoy",lastUpdatedAt:1679162209,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{id:"workflows-readme",title:"Workflows Overview",hide_title:!1},sidebar:"docs",previous:{title:"Workflows",permalink:"/cumulus/docs/next/category/workflows"},next:{title:"Workflow Protocol",permalink:"/cumulus/docs/next/workflows/protocol"}},c={},u=[{value:"Goals",id:"goals",level:2},{value:"Flexibility and Composability",id:"flexibility-and-composability",level:3},{value:"Scalable",id:"scalable",level:3},{value:"Data Provenance",id:"data-provenance",level:3},{value:"Operator Visibility and Control",id:"operator-visibility-and-control",level:3},{value:"A Reconfigurable Workflow Architecture",id:"a-reconfigurable-workflow-architecture",level:2},{value:"Workflows",id:"workflows",level:3},{value:"Benefits of AWS Step Functions",id:"benefits-of-aws-step-functions",level:4},{value:"Workflow Scheduler",id:"workflow-scheduler",level:4},{value:"Tasks",id:"tasks",level:3},{value:"Ingest Deploy",id:"ingest-deploy",level:3},{value:"Tradeoffs, and Benefits",id:"tradeoffs-and-benefits",level:2},{value:"Tradeoffs",id:"tradeoffs",level:3},{value:"Workflow execution is handled completely by AWS",id:"workflow-execution-is-handled-completely-by-aws",level:4},{value:"Workflow Configuration is specified in AWS Step Function States Language",id:"workflow-configuration-is-specified-in-aws-step-function-states-language",level:4},{value:"Collection Configuration Flexibility vs Complexity",id:"collection-configuration-flexibility-vs-complexity",level:4},{value:"Benefits",id:"benefits",level:3},{value:"Simplicity",id:"simplicity",level:4},{value:"Composability",id:"composability",level:4},{value:"Scalability",id:"scalability",level:4},{value:"Monitoring and Auditing",id:"monitoring-and-auditing",level:4},{value:"Data Provenance",id:"data-provenance-1",level:4},{value:"Appendix",id:"appendix",level:2},{value:"Example GIBS Ingest Architecture",id:"example-gibs-ingest-architecture",level:3},{value:"GIBS Ingest Workflows",id:"gibs-ingest-workflows",level:4},{value:"GIBS Ingest Granules Workflow",id:"gibs-ingest-granules-workflow",level:4}],p={toc:u},f="wrapper";function h(e){var t=e.components,s=(0,n.Z)(e,r);return(0,o.kt)(f,(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Workflows are comprised of one or more AWS Lambda Functions and ECS Activities to discover, ingest, process, manage and archive data."),(0,o.kt)("p",null,"Provider data ingest and GIBS have a set of common needs in getting data from a source system and into the cloud where they can be distributed to end users. These common needs are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Discovery")," - Crawling, polling, or detecting changes from a variety of sources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Transformation")," - Taking data files in their original format and extracting and transforming them into another desired format such as visible browse images."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Archival")," - Storage of the files in a location that's accessible to end users.")),(0,o.kt)("p",null,"The high level view of the architecture and many of the individual steps are the same but the details of ingesting each type of collection differs. Different collection types and different providers have different needs. The individual ",(0,o.kt)("em",{parentName:"p"},"boxes")," of a workflow are not only different. The branching, error handling, and multiplicity of the ",(0,o.kt)("em",{parentName:"p"},"arrows")," connecting the boxes are also different. Some need visible images rendered from component data files from multiple collections. Some need to contact the CMR with updated metadata. Some will have different retry strategies to handle availability issues with source data systems."),(0,o.kt)("p",null,"AWS and other cloud vendors provide an ideal solution for parts of these problems but there needs to be a higher level solution to allow the composition of AWS components into a full featured solution. The Ingest Workflow Architecture is designed to meet the needs for Earth Science data ingest and transformation."),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("h3",{id:"flexibility-and-composability"},"Flexibility and Composability"),(0,o.kt)("p",null,"The steps to ingest and process data is different for each collection within a provider. Ingest should be as flexible as possible in the rearranging of steps and configuration."),(0,o.kt)("p",null,"We want to use lego-like individual steps that can be composed by an operator."),(0,o.kt)("p",null,"Individual steps should ..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Be as ignorant as possible of the overall flow. They should not be aware of previous steps."),(0,o.kt)("li",{parentName:"ul"},"Be runnable on their own."),(0,o.kt)("li",{parentName:"ul"},"Define their input and output in simple data structures."),(0,o.kt)("li",{parentName:"ul"},"Be domain agnostic."),(0,o.kt)("li",{parentName:"ul"},"Not make assumptions of specifics of what goes into a granule for example.")),(0,o.kt)("h3",{id:"scalable"},"Scalable"),(0,o.kt)("p",null,"The ingest architecture needs to be scalable both to handle ingesting hundreds of millions of granules and interpret dozens of different workflows."),(0,o.kt)("h3",{id:"data-provenance"},"Data Provenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We should have traceability for how data was produced and where it comes from."),(0,o.kt)("li",{parentName:"ul"},"Use immutable representations of data. Data once received is not overwritten. Data can be removed for cleanup."),(0,o.kt)("li",{parentName:"ul"},"All software is versioned. We can trace transformation of data by tracking the immutable source data and the versioned software applied to it.")),(0,o.kt)("h3",{id:"operator-visibility-and-control"},"Operator Visibility and Control"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operators should be able to see and understand everything that is happening in the system."),(0,o.kt)("li",{parentName:"ul"},"It should be obvious why things are happening and straightforward to diagnose problems."),(0,o.kt)("li",{parentName:"ul"},"We generally assume that the operators know best in terms of the limits on a providers infrastructure, how often things need to be done, and details of a collection. The architecture should defer to their decisions and knowledge while providing safety nets to prevent problems.")),(0,o.kt)("h2",{id:"a-reconfigurable-workflow-architecture"},"A Reconfigurable Workflow Architecture"),(0,o.kt)("p",null,"The Ingest Workflow Architecture is defined by two entity types, ",(0,o.kt)("a",{parentName:"p",href:"#workflows"},"Workflows")," and ",(0,o.kt)("a",{parentName:"p",href:"#tasks"},"Tasks"),". A Workflow is a set of composed Tasks to complete an objective such as ingesting a granule. Tasks are the individual steps of a Workflow that perform one job. The workflow is responsible for executing the right task based on the current state and response from the last task executed. Tasks are completely decoupled in that they don't call each other or even need to know about the presence of other tasks."),(0,o.kt)("p",null,"Workflows and tasks are configured as Terraform resources, which are triggered via configured ",(0,o.kt)("inlineCode",{parentName:"p"},"rules")," within Cumulus."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram showing the Step Function execution path through workflow tasks for a collection ingest",src:a(48485).Z,width:"1120",height:"820"})),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"#example-gibs-ingest-architecture"},"Example GIBS Ingest Architecture")," showing how workflows and tasks are used to define the GIBS Ingest Architecture."),(0,o.kt)("h3",{id:"workflows"},"Workflows"),(0,o.kt)("p",null,"A workflow is a provider-configured set of steps that describe the process to ingest data. Workflows are defined using ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/documentation/step-functions/"},"AWS Step Functions"),"."),(0,o.kt)("h4",{id:"benefits-of-aws-step-functions"},"Benefits of AWS Step Functions"),(0,o.kt)("p",null,"AWS Step functions are described in detail in the AWS documentation but they provide several benefits which are applicable to AWS."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prebuilt solution"),(0,o.kt)("li",{parentName:"ul"},"Operations Visibility",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Visual diagram"),(0,o.kt)("li",{parentName:"ul"},"Every execution is recorded with both inputs and output for every step."))),(0,o.kt)("li",{parentName:"ul"},"Composability",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Allow composing AWS Lambdas and code running in other steps. Code can be run in EC2 to interface with it or even on premise if desired."),(0,o.kt)("li",{parentName:"ul"},"Step functions allow specifying when steps run in parallel or choices between steps based on data from the previous step."))),(0,o.kt)("li",{parentName:"ul"},"Flexibility",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Step functions are designed to be easy to build new applications and reconfigure. We're exposing that flexibility directly to the provider."))),(0,o.kt)("li",{parentName:"ul"},"Reliability and Error Handling",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Step functions allow configuration of retries and adding handling of error conditions."))),(0,o.kt)("li",{parentName:"ul"},"Described via data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This makes it easy to save the step function in configuration management solutions."),(0,o.kt)("li",{parentName:"ul"},"We can build simple interfaces on top of the flexibility provided.")))),(0,o.kt)("h4",{id:"workflow-scheduler"},"Workflow Scheduler"),(0,o.kt)("p",null,"The scheduler is responsible for initiating a step function and passing in the relevant data for a collection. This is currently configured as an interval for each collection. The scheduler service creates the initial event by combining the collection configuration with the AWS execution context defined via the ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus")," terraform module."),(0,o.kt)("h3",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,"A workflow is composed of tasks. Each task is responsible for performing a discrete step of the ingest process. These can be activities like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Crawling a provider website for new data."),(0,o.kt)("li",{parentName:"ul"},"Uploading data from a provider to S3."),(0,o.kt)("li",{parentName:"ul"},"Executing a process to transform data.")),(0,o.kt)("p",null,"AWS Step Functions permit ",(0,o.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/step-functions/latest/dg/concepts-tasks.html#concepts-tasks"},"tasks")," to be code running anywhere, even on premise. We expect most tasks will be written as Lambda functions in order to take advantage of the easy deployment, scalability, and cost benefits provided by AWS Lambda."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Leverages Existing Work"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The design leverages the existing work of Amazon by defining workflows using the ",(0,o.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language.html#amazon-states-language"},"AWS Step Function State Language"),". This is the language that was created for describing the state machines used in AWS Step Functions."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Open for Extension"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Both ",(0,o.kt)("inlineCode",{parentName:"li"},"meta")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"task_config")," which are used for configuring at the collection and task levels do not dictate the fields and structure of the configuration. Additional task specific JSON schemas can be used for extending the validation of individual steps."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data-centric Configuration"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The use of a single JSON configuration file allows this to be added to a workflow. We build additional support on top of the configuration file for simpler domain specific configuration or interactive GUIs.")))),(0,o.kt)("p",null,"For more details on Task Messages and Configuration, visit ",(0,o.kt)("a",{parentName:"p",href:"/cumulus/docs/next/workflows/cumulus-task-message-flow"},"Cumulus configuration and message protocol documentation"),"."),(0,o.kt)("h3",{id:"ingest-deploy"},"Ingest Deploy"),(0,o.kt)("p",null,"To view deployment documentation, please see the ",(0,o.kt)("a",{parentName:"p",href:"/cumulus/docs/next/deployment/"},"Cumulus deployment documentation"),"."),(0,o.kt)("h2",{id:"tradeoffs-and-benefits"},"Tradeoffs, and Benefits"),(0,o.kt)("p",null,"This section documents various tradeoffs and benefits of the Ingest Workflow Architecture."),(0,o.kt)("h3",{id:"tradeoffs"},"Tradeoffs"),(0,o.kt)("h4",{id:"workflow-execution-is-handled-completely-by-aws"},"Workflow execution is handled completely by AWS"),(0,o.kt)("p",null,"This means we can't add our own code into the orchestration of the workflow. We can't add new features not supported by Step Functions. We can't do things like enforce that the responses from tasks always conform to a schema or extract the configuration for a task ahead of it's execution."),(0,o.kt)("p",null,"If we implemented our own orchestration we'd be able to add all of these. We save significant amounts of development effort and gain all the features of Step Functions for this trade off. One workaround is by providing a library of common task capabilities. These would optionally be available to tasks that can be implemented with Node.js and are able to include the library."),(0,o.kt)("h4",{id:"workflow-configuration-is-specified-in-aws-step-function-states-language"},"Workflow Configuration is specified in AWS Step Function States Language"),(0,o.kt)("p",null,"The current design combines the states language defined by AWS with Ingest specific configuration. This means our representation has a tight coupling with their standard. If they make backwards incompatible changes in the future we will have to deal with existing projects written against that."),(0,o.kt)("p",null,"We avoid having to develop our own standard and code to process it. The design can support new features in AWS Step Functions without needing to update the Ingest library code changes. It is unlikely they will make a backwards incompatible change at this point. One mitigation for this is writing data transformations to a new format if that were to happen."),(0,o.kt)("h4",{id:"collection-configuration-flexibility-vs-complexity"},"Collection Configuration Flexibility vs Complexity"),(0,o.kt)("p",null,"The Collections Configuration File is very flexible but requires more knowledge of AWS step functions to configure. A person modifying this file directly would need to comfortable editing a JSON file and configuring AWS Step Functions state transitions which address AWS resources."),(0,o.kt)("p",null,"The configuration file itself is not necessarily meant to be edited by a human directly. Since we are developing a reconfigurable, composable architecture that specified entirely in ",(0,o.kt)("em",{parentName:"p"},"data")," additional tools can be developed on top of it. The existing ",(0,o.kt)("inlineCode",{parentName:"p"},"recipes.json")," files can be mapped to this format. Operational Tools like a GUI can be built that provide a usable interface for customizing workflows but it will take time to develop these tools."),(0,o.kt)("h3",{id:"benefits"},"Benefits"),(0,o.kt)("p",null,"This section describes benefits of the Ingest Workflow Architecture."),(0,o.kt)("h4",{id:"simplicity"},"Simplicity"),(0,o.kt)("p",null,"The concepts of Workflows and Tasks are simple ones that should make sense to providers. Additionally, the implementation will only consist of a few components because the design leverages existing services and capabilities of AWS. The Ingest implementation will only consist of some reusable task code to make task implementation easier, Ingest deployment, and the Workflow Scheduler."),(0,o.kt)("h4",{id:"composability"},"Composability"),(0,o.kt)("p",null,"The design aims to satisfy the needs for ingest integrating different workflows for providers. It's flexible in terms of the ability to arrange tasks to meet the needs of a collection. Providers have developed and incorporated open source tools over the years. All of these are easily integrable into the workflows as tasks."),(0,o.kt)("p",null,"There is low coupling between task steps. Failures of one component don't bring the whole system down. Individual tasks can be deployed separately."),(0,o.kt)("h4",{id:"scalability"},"Scalability"),(0,o.kt)("p",null,"AWS Step Functions scale up as needed and aren't limited by a set of number of servers. They also easily allow you to leverage the inherent scalability of serverless functions."),(0,o.kt)("h4",{id:"monitoring-and-auditing"},"Monitoring and Auditing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every execution is captured."),(0,o.kt)("li",{parentName:"ul"},"Every task run has captured input and outputs."),(0,o.kt)("li",{parentName:"ul"},"CloudWatch Metrics can be ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/step-functions/latest/dg/procedure-cw-metrics.html"},"used for monitoring")," many of the events with the StepFunctions. It can also generate alarms for the whole process."),(0,o.kt)("li",{parentName:"ul"},"Visual report of the entire configuration.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Errors and success states are highlighted visually in the flow.")))),(0,o.kt)("h4",{id:"data-provenance-1"},"Data Provenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitoring and auditing ensures we know the data that was given to a task."),(0,o.kt)("li",{parentName:"ul"},"Workflows are versioned and the state machines stored in AWS Step Functions are immutable. Once created they cannot change."),(0,o.kt)("li",{parentName:"ul"},"Versioning of data in S3 or using immutable records in S3 will mean we always know what data was created as the result of a step or fed into a step.")),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("h3",{id:"example-gibs-ingest-architecture"},"Example GIBS Ingest Architecture"),(0,o.kt)("p",null,"This shows the GIBS Ingest Architecture as an example of the use of the Ingest Workflow Architecture."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The GIBS Ingest Architecture consists of two workflows per collection type. There is one for discovery and one for ingest. The final stage of discovery triggers multiple ingest workflows for each MRF granule that needs to be generated."),(0,o.kt)("li",{parentName:"ul"},"It demonstrates both lambdas as tasks and a container used for MRF generation.")),(0,o.kt)("h4",{id:"gibs-ingest-workflows"},"GIBS Ingest Workflows"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram showing the AWS Step Function execution path for a GIBS ingest workflow",src:a(20985).Z,width:"1140",height:"908"})),(0,o.kt)("h4",{id:"gibs-ingest-granules-workflow"},"GIBS Ingest Granules Workflow"),(0,o.kt)("p",null,"This shows a visualization of an execution of the ingets granules workflow in step functions. The steps highlighted in green are the ones that executed and completed successfully."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram showing the AWS Step Function execution path for a GIBS ingest granules workflow",src:a(91851).Z,width:"518",height:"568"})))}h.isMDXComponent=!0},91851:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gibs_ingest_granules_workflow-7e9c145055a97be24d5d73daad1b1a33.png"},48485:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ingest_diagram-4512e9fefbe5d1cfda2d4aaf76c7b9ff.png"},20985:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ingest_diagram_gibs-8785b6bc1f7e482c6acfb780a1ba0b16.png"}}]);