"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[93225],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),m=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),p=r,y=d["".concat(g,".").concat(p)]||d[p]||u[p]||l;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},54353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>y,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var n=a(58168),r=a(98587),l=(a(96540),a(15680)),i=["components"],o={id:"message_granule_writes",title:"Workflow Message Granule Writes",hide_title:!1},g=void 0,m={unversionedId:"workflows/message_granule_writes",id:"version-v16.1.3/workflows/message_granule_writes",title:"Workflow Message Granule Writes",description:"Overview",source:"@site/versioned_docs/version-v16.1.3/workflows/message_granule_writes.md",sourceDirName:"workflows",slug:"/workflows/message_granule_writes",permalink:"/cumulus/docs/workflows/message_granule_writes",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1705422865,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{id:"message_granule_writes",title:"Workflow Message Granule Writes",hide_title:!1},sidebar:"docs",previous:{title:"Workflow Triggers",permalink:"/cumulus/docs/workflows/workflow-triggers"},next:{title:"Workflow Tasks",permalink:"/cumulus/docs/category/workflow-tasks"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Granule Write Constraints",id:"granule-write-constraints",level:2},{value:"Message Granule Write Behavior",id:"message-granule-write-behavior",level:2},{value:"CMR Temporal Values",id:"cmr-temporal-values",level:3}],u={toc:d},p="wrapper";function y(e){var t=e.components,a=(0,r.A)(e,i);return(0,l.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"overview"},"Overview"),(0,l.yg)("p",null,"When an ",(0,l.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/cw-events.html"},"AWS Step Function Event")," occurs for a ",(0,l.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/docs/next/workflows/"},"Cumulus workflow")," ",(0,l.yg)("em",{parentName:"p"},"or")," a write is attempted via the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tasks/sf-sqs-report"},"sf-sqs-report task")," a message is dispatched to the ",(0,l.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecordsInputQueue")," for processing."),(0,l.yg)("p",null,"Messages on the ",(0,l.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecordsInputQueue")," (which correspond to lambda invocations or workflow events) are processed in batches of 10 and the ",(0,l.yg)("inlineCode",{parentName:"p"},"sfEventSqsToDbRecords")," Lambda is triggered for each. The corresponding execution/PDR is attempted to write, then the granule records associated with the message are also attempted to be written."),(0,l.yg)("p",null,"For each granule in the batch of granules ",(0,l.yg)("strong",{parentName:"p"},"one of the following")," occurs:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The granule is written successfully."),(0,l.yg)("li",{parentName:"ul"},"The granule write is dropped, due to asynchronous write constraints."),(0,l.yg)("li",{parentName:"ul"},"The lambda fails to write the granule in an unexpected way (e.g. lambda failure, AWS outage, etc).   In this case, the granule will become visible again after the ",(0,l.yg)("inlineCode",{parentName:"li"},"sfEventSqsToDbRecordsInputQueue")," visibility timeout (currently set as a function of the rds_connection_timing_configuration terraform variable:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-terraform"},"var.rds_connection_timing_configuration.acquireTimeoutMillis / 1000) + 60\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The granule fails to write due to a schema violation, database connection issue or other expected/caught error.    The message is immediately written to the ",(0,l.yg)("a",{parentName:"li",href:"https://nasa.github.io/cumulus/docs/features/dead_letter_archive/"},"Dead Letter Archive")," for manual intervention/investigation.")),(0,l.yg)("h3",{id:"caveats"},"Caveats"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"All non-bulk ",(0,l.yg)("a",{parentName:"li",href:"https://nasa.github.io/cumulus-api/"},"Cumulus API")," granule operations are ",(0,l.yg)("em",{parentName:"li"},"not")," constrained by this logic and do not utilize the SQS update queue.  They are instead invoked synchronously and follow expected RESTful logic without any asynchronous write constraints ",(0,l.yg)("em",{parentName:"li"},"or")," default message values."),(0,l.yg)("li",{parentName:"ul"},"This information is correct as of release v16 of Cumulus Core.   Please review the ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/blob/master/CHANGELOG.md"},"CHANGELOG")," and migration instructions for updated features/changes/bugfixes.")),(0,l.yg)("h2",{id:"granule-write-constraints"},"Granule Write Constraints"),(0,l.yg)("p",null,"For each granule to be written, the following constraints apply:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"granuleId")," must be unique."),(0,l.yg)("p",{parentName:"li"},"Granule write will not be allowed if ",(0,l.yg)("inlineCode",{parentName:"p"},"granuleId")," already exists in the database for another collection, granules in this state will be rejected to write and wind up in the ",(0,l.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/docs/features/dead_letter_archive/"},"Dead Letter Archive"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Message granule must match the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lib/schemas.js"},"API Granule schema"),"."),(0,l.yg)("p",{parentName:"li"},"If not the write will be rejected, the granule status will be updated to ",(0,l.yg)("inlineCode",{parentName:"p"},"failed"),", and the message will wind up in the ",(0,l.yg)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/docs/features/dead_letter_archive/"},"Dead Letter Archive"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If the granule is being updated to a ",(0,l.yg)("inlineCode",{parentName:"p"},"running"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"queued")," status:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Only ",(0,l.yg)("inlineCode",{parentName:"li"},"status"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"timestamp"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"updated_at")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"created_at")," are updated.   All other values are retained as they currently exist in the database."),(0,l.yg)("li",{parentName:"ul"},"The write will only be allowed if the following are true, else the write request will be ignored as out-of-order/stale:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The granule createdAt value is newer or the same as the existing record."),(0,l.yg)("li",{parentName:"ul"},"If the granule is being updated to ",(0,l.yg)("inlineCode",{parentName:"li"},"running"),", the execution the granule is being associated with doesn\u2019t already exist in the following states: ",(0,l.yg)("inlineCode",{parentName:"li"},"completed"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"failed"),"."),(0,l.yg)("li",{parentName:"ul"},"If the granule is being updated to ",(0,l.yg)("inlineCode",{parentName:"li"},"queued"),", the execution the granule is being associated with does not exist in any state in the database."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If the granule is being updated to a failed/completed state:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"All fields provided will override existing values in the database, if any."),(0,l.yg)("li",{parentName:"ul"},"The write will only be allowed if the following are true, else the write request will be ignored as out-of-order/stale:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The granule createdAt value is newer or the same as the existing record.")))))),(0,l.yg)("h2",{id:"message-granule-write-behavior"},"Message Granule Write Behavior"),(0,l.yg)("p",null,"The granule object values are set based on the incoming Cumulus Message values (unless otherwise specified the ",(0,l.yg)("em",{parentName:"p"},"message")," values overwrite the granule payload values):"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Column"),(0,l.yg)("th",{parentName:"tr",align:null},"Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"collection"),(0,l.yg)("td",{parentName:"tr",align:null},"Derived from meta.collection.name and meta.collection.version")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"createdAt"),(0,l.yg)("td",{parentName:"tr",align:null},"Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"cumulus_meta.workflow_start_time"),", else ",(0,l.yg)("inlineCode",{parentName:"td"},"payload.granule.createdAt"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"duration"),(0,l.yg)("td",{parentName:"tr",align:null},"Calculated based on the delta between ",(0,l.yg)("inlineCode",{parentName:"td"},"cumulus_meta.workflow_start_time")," and when the database message writes")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"error"),(0,l.yg)("td",{parentName:"tr",align:null},"Object taken directly from the ",(0,l.yg)("inlineCode",{parentName:"td"},"message.error")," object")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"execution"),(0,l.yg)("td",{parentName:"tr",align:null},"Derived from ",(0,l.yg)("inlineCode",{parentName:"td"},"cumulus_meta.state_machine")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"cumulus_meta.execution_name"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"files"),(0,l.yg)("td",{parentName:"tr",align:null},"Taken directly from ",(0,l.yg)("inlineCode",{parentName:"td"},"payload.granule.files"),".   If files is ",(0,l.yg)("inlineCode",{parentName:"td"},"null"),", set it to an empty list ",(0,l.yg)("inlineCode",{parentName:"td"},"[]"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"pdrName"),(0,l.yg)("td",{parentName:"tr",align:null},"Taken directly from payload.pdr.name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"processingEndDateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"Derived from AWS API interrogation (",(0,l.yg)("inlineCode",{parentName:"td"},"sfn().describeExecution"),")  based on ",(0,l.yg)("inlineCode",{parentName:"td"},"execution")," value")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"processingStartDateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"Derived from AWS API interrogation (",(0,l.yg)("inlineCode",{parentName:"td"},"sfn().describeExecution"),")  based on ",(0,l.yg)("inlineCode",{parentName:"td"},"execution")," value")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"productVolume"),(0,l.yg)("td",{parentName:"tr",align:null},"Sums the values of the passed in ",(0,l.yg)("inlineCode",{parentName:"td"},"payload.granules.files.size"),".   Does not validate against S3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"provider"),(0,l.yg)("td",{parentName:"tr",align:null},"Inferred from ",(0,l.yg)("inlineCode",{parentName:"td"},"meta.provider")," value in cumulus message")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"published"),(0,l.yg)("td",{parentName:"tr",align:null},"Taken directly from ",(0,l.yg)("inlineCode",{parentName:"td"},"granule.published"),", if not specified or null is specified, defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"queryFields"),(0,l.yg)("td",{parentName:"tr",align:null},"Object taken directly from meta.granule.queryFields")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"status"),(0,l.yg)("td",{parentName:"tr",align:null},"Taken directly from ",(0,l.yg)("inlineCode",{parentName:"td"},"meta.status"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"status"),(0,l.yg)("td",{parentName:"tr",align:null},"Uses ",(0,l.yg)("inlineCode",{parentName:"td"},"meta.status")," if provided, else ",(0,l.yg)("inlineCode",{parentName:"td"},"payload.granule.status"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timeStamp"),(0,l.yg)("td",{parentName:"tr",align:null},"Set to the date-time value for the ",(0,l.yg)("inlineCode",{parentName:"td"},"sfEventSqsToDbRecords")," invocation")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timeToArchive"),(0,l.yg)("td",{parentName:"tr",align:null},"Taken from ",(0,l.yg)("inlineCode",{parentName:"td"},"payload.granule.post_to_cmr_duration"),"/1000, provided by Core task or user task.  Value will be set to zero if no value set")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timeToPreprocess"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"payload.granule.sync_granule_duration"),", provided by core or user task. Will set to 0 if value is not set")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"updatedAt"),(0,l.yg)("td",{parentName:"tr",align:null},"Set to the date-time value for the ",(0,l.yg)("inlineCode",{parentName:"td"},"sfEventSqsToDbRecords")," invocation")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"beginningDateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"See: CMR Temporal Values section below")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"endingDateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"See: CMR Temporal Values section below")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"productionDateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"See: CMR Temporal Values section below")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"lastUpdateDateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"See: CMR Temporal Values section below")))),(0,l.yg)("h3",{id:"cmr-temporal-values"},"CMR Temporal Values"),(0,l.yg)("p",null,"The following fields are generated based on values in the associated granule CMR file, if available:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"beginningDateTime"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If there is a beginning and end DateTime:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"UMMG: ",(0,l.yg)("inlineCode",{parentName:"li"},"TemporalExtent.RangeDateTime.BeginningDateTime")),(0,l.yg)("li",{parentName:"ul"},"ISO: ",(0,l.yg)("inlineCode",{parentName:"li"},"gmd:MD_DataIdentification.gmd:extent.gmd:EX_Extent.gmd:temporalElement.gmd:EX_TemporalExtent.gmd:extent.gml:TimePeriod:gml:beginPosition")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If not:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"UMMG: ",(0,l.yg)("inlineCode",{parentName:"li"},"TemporalExtent.SingleDateTime")),(0,l.yg)("li",{parentName:"ul"},"ISO: ",(0,l.yg)("inlineCode",{parentName:"li"},"gmd:MD_DataIdentification.gmd:extent.gmd:EX_Extent.gmd:temporalElement.gmd:EX_TemporalExtent.gmd:extent.gml:TimeInstant.gml:timePosition")))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"endingDateTime"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If there is a beginning and end DateTime:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"UMMG: ",(0,l.yg)("inlineCode",{parentName:"li"},"TemporalExtent.RangeDateTime.BeginningDateTime")),(0,l.yg)("li",{parentName:"ul"},"ISO: ",(0,l.yg)("inlineCode",{parentName:"li"},"gmd:MD_DataIdentification.gmd:extent.gmd:EX_Extent.gmd:temporalElement.gmd:EX_TemporalExtent.gmd:extent.gml:TimePeriod:gml:beginPosition")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If not:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"UMMG: ",(0,l.yg)("inlineCode",{parentName:"li"},"TemporalExtent.SingleDateTime")),(0,l.yg)("li",{parentName:"ul"},"ISO: ",(0,l.yg)("inlineCode",{parentName:"li"},"gmd:MD_DataIdentification.gmd:extent.gmd:EX_Extent.gmd:temporalElement.gmd:EX_TemporalExtent.gmd:extent.gml:TimeInstant.gml:timePosition")))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"productionDateTime"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"UMMG: ",(0,l.yg)("inlineCode",{parentName:"li"},"DataGranule.ProductionDateTime")),(0,l.yg)("li",{parentName:"ul"},"ISO: ",(0,l.yg)("inlineCode",{parentName:"li"},"gmd:identificationInfo:gmd:dataQualityInfo.gmd:DQ_DataQuality.gmd:lineage.gmd:LI_Lineage.gmd:processStep.gmi:LE_ProcessStep.gmd:dateTime.gco:DateTime")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"lastUpdateDateTime"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"UMMG:")),(0,l.yg)("p",{parentName:"li"},"Given DataGranule.ProductionDateTime values where Type is in ",(0,l.yg)("inlineCode",{parentName:"p"},"Update"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"Insert"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"Create")," , select most recent value."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"ISO: Given a node matching ",(0,l.yg)("inlineCode",{parentName:"li"},"gmd:MD_DataIdentification.gmd:citation.gmd:CI_Citation.gmd:title.gco:CharacterString")," === ",(0,l.yg)("inlineCode",{parentName:"li"},"UpdateTime"),", use ",(0,l.yg)("inlineCode",{parentName:"li"},"gmd:identificationInfo:gmd:MD_DataIdentification.gmd:citation.gmd:CI_Citation.gmd:date.gmd:CI_Date.gmd:date.gco:DateTime"))))))}y.isMDXComponent=!0}}]);