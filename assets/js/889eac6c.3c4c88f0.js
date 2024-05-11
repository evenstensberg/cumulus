"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[99040],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,d=m["".concat(o,".").concat(c)]||m[c]||p[c]||i;return a?n.createElement(d,s(s({ref:t},g),{},{components:a})):n.createElement(d,s({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),s=["components"],l={id:"logging-esdis-metrics",title:"Writing logs for ESDIS Metrics",hide_title:!1},o=void 0,u={unversionedId:"features/logging-esdis-metrics",id:"version-v18.0.0/features/logging-esdis-metrics",title:"Writing logs for ESDIS Metrics",description:"This feature is only available for Cumulus deployments in NGAP environments.",source:"@site/versioned_docs/version-v18.0.0/features/logging-esdis-metrics.md",sourceDirName:"features",slug:"/features/logging-esdis-metrics",permalink:"/cumulus/docs/v18.0.0/features/logging-esdis-metrics",draft:!1,tags:[],version:"v18.0.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1693496758,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{id:"logging-esdis-metrics",title:"Writing logs for ESDIS Metrics",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Distribution Metrics",permalink:"/cumulus/docs/v18.0.0/features/distribution-metrics"},next:{title:"How to replay Kinesis messages after an outage",permalink:"/cumulus/docs/v18.0.0/features/replay-kinesis-messages"}},g={},m=[{value:"Expected log format",id:"expected-log-format",level:2},{value:"Using Cumulus Message Adapter libraries",id:"using-cumulus-message-adapter-libraries",level:2},{value:"Writing logs using custom code",id:"writing-logs-using-custom-code",level:2},{value:"Node.js",id:"nodejs",level:3}],p={toc:m},c="wrapper";function d(e){var t=e.components,a=(0,r.A)(e,s);return(0,i.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"This feature is only available for Cumulus deployments in NGAP environments.")),(0,i.yg)("admonition",{title:"prerequisite",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"You must ",(0,i.yg)("a",{parentName:"p",href:"../deployment/cloudwatch-logs-delivery"},"configure your Cumulus deployment to deliver your logs to the correct shared logs destination for ESDIS metrics"),".")),(0,i.yg)("p",null,"Log messages delivered to the ESDIS metrics logs destination conforming to an expected format will be automatically ingested and parsed to enable helpful searching/filtering of your logs via the ESDIS metrics Kibana dashboard."),(0,i.yg)("h2",{id:"expected-log-format"},"Expected log format"),(0,i.yg)("p",null,"The ESDIS metrics pipeline expects a log message to be a JSON string representation of an object (",(0,i.yg)("inlineCode",{parentName:"p"},"dict")," in Python or ",(0,i.yg)("inlineCode",{parentName:"p"},"map")," in Java). An example log message might look like:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "level": "info",\n  "executions": "arn:aws:states:us-east-1:000000000000:execution:MySfn:abcd1234",\n  "granules": "[\\"granule-1\\",\\"granule-2\\"]",\n  "message": "hello world",\n  "sender": "greetingFunction",\n  "stackName": "myCumulus",\n  "timestamp": "2018-10-19T19:12:47.501Z"\n}\n')),(0,i.yg)("p",null,"A log message can contain the following properties:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"executions"),": The AWS Step Function execution name in which this task is executing, if any"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"granules"),": A JSON string of the array of granule IDs being processed by this code, if any"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"level"),": A string identifier for the type of message being logged. Possible values:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"debug")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"error")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"fatal")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"info")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"warn")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"trace")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"message"),": String containing your actual log message"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"parentArn"),": The parent AWS Step Function execution ARN that triggered the current execution, if any"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"sender"),": The name of the resource generating the log message (e.g. a library name, a Lambda function name, an ECS activity name)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"stackName"),": The unique prefix for your Cumulus deployment"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"timestamp"),": An ISO-8601 formatted timestamp"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"version"),": The version of the resource generating the log message, if any")),(0,i.yg)("p",null,"None of these properties are explicitly required for ESDIS metrics to parse your log correctly. However, a log without a ",(0,i.yg)("inlineCode",{parentName:"p"},"message")," has no informational  content. And having ",(0,i.yg)("inlineCode",{parentName:"p"},"level"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"sender"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp")," properties is very useful for filtering your logs. Including a ",(0,i.yg)("inlineCode",{parentName:"p"},"stackName")," in your logs is helpful as it allows you to distinguish between logs generated by different deployments."),(0,i.yg)("h2",{id:"using-cumulus-message-adapter-libraries"},"Using Cumulus Message Adapter libraries"),(0,i.yg)("p",null,"If you are writing a custom task that is integrated with the Cumulus Message Adapter, then some of language specific client libraries can be used to write logs compatible with ESDIS metrics."),(0,i.yg)("p",null,"The usage of each library differs slightly, but in general a logger is initialized with a ",(0,i.yg)("a",{parentName:"p",href:"/cumulus/docs/v18.0.0/workflows/cumulus-task-message-flow#cumulus-message-format"},"Cumulus workflow message")," to determine the contextual information for the task (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"granules"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"executions"),"). Then, after the logger is initialized, writing logs only requires specifying a message, but the logged output will include the contextual information as well."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-message-adapter-java"},"cumulus-message-adapter-java"),": ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-message-adapter-java/blob/master/message_parser/src/main/java/cumulus_message_adapter/message_parser/AdapterLogger.java"},(0,i.yg)("inlineCode",{parentName:"a"},"AdapterLogger.java"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-message-adapter-python"},"cumulus-message-adapter-python"),": ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-message-adapter-python/blob/master/cumulus_logger.py"},(0,i.yg)("inlineCode",{parentName:"a"},"cumulus_logger.py")))),(0,i.yg)("h2",{id:"writing-logs-using-custom-code"},"Writing logs using custom code"),(0,i.yg)("p",null,"Any code that produces logs matching the ",(0,i.yg)("a",{parentName:"p",href:"#expected-log-format"},"expected log format")," can be processed by ESDIS metrics."),(0,i.yg)("h3",{id:"nodejs"},"Node.js"),(0,i.yg)("p",null,"Cumulus core provides a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/packages/logger"},(0,i.yg)("inlineCode",{parentName:"a"},"@cumulus/logger"))," library that writes logs in the expected format for ESDIS metrics."))}d.isMDXComponent=!0}}]);