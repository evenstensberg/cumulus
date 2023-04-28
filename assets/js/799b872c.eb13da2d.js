"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[92404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(a),d=o,k=p["".concat(u,".").concat(d)]||p[d]||c[d]||n;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<n;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),l=["components"],s={id:"faqs",title:"Frequently Asked Questions",hide_title:!1},u=void 0,i={unversionedId:"faqs",id:"version-v15.0.2/faqs",title:"Frequently Asked Questions",description:"Below are some commonly asked questions that you may encounter that can assist you along the way when working with Cumulus.",source:"@site/versioned_docs/version-v15.0.2/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/cumulus/docs/faqs",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"faqs",title:"Frequently Asked Questions",hide_title:!1},sidebar:"docs",previous:{title:"Glossary",permalink:"/cumulus/docs/glossary"},next:{title:"Architecture",permalink:"/cumulus/docs/architecture"}},m={},p=[{value:"General",id:"general",level:3},{value:"Workflows",id:"workflows",level:3},{value:"Integrators &amp; Developers",id:"integrators--developers",level:3},{value:"Operators",id:"operators",level:3}],c={toc:p},d="wrapper";function k(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Below are some commonly asked questions that you may encounter that can assist you along the way when working with Cumulus."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#general"},"General")," | ",(0,n.kt)("a",{parentName:"p",href:"#workflows"},"Workflows")," | ",(0,n.kt)("a",{parentName:"p",href:"#integrators--developers"},"Integrators & Developers")," | ",(0,n.kt)("a",{parentName:"p",href:"#operators"},"Operators")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"general"},"General"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What prerequisites are needed to setup Cumulus?"),"Answer: Here is a list of the tools and access that you will need in order to get started. To maintain the up-to-date versions that we are using please visit our [Cumulus main README](https://github.com/nasa/cumulus) for details.",(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/creationix/nvm"},"NVM")," for node versioning"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/cli/latest/userguide/installing.html"},"AWS CLI")),(0,n.kt)("li",{parentName:"ul"},"Bash"),(0,n.kt)("li",{parentName:"ul"},"Docker (only required for testing)"),(0,n.kt)("li",{parentName:"ul"},"docker-compose (only required for testing ",(0,n.kt)("inlineCode",{parentName:"li"},"pip install docker-compose"),")"),(0,n.kt)("li",{parentName:"ul"},"Python"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pypi.org/project/pipenv/"},"pipenv"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Keep in mind you will need access to the AWS console and an ",(0,n.kt)("a",{parentName:"p",href:"https://urs.earthdata.nasa.gov/"},"Earthdata account")," before you can deploy Cumulus."))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is the preferred web browser for the Cumulus environment?"),(0,n.kt)("p",null,"  Answer: Our preferred web browser is the latest version of ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"Google Chrome"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I deploy a new instance in Cumulus?"),(0,n.kt)("p",null,"  Answer: For steps on the Cumulus deployment process go to ",(0,n.kt)("a",{parentName:"p",href:"deployment"},"How to Deploy Cumulus"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Where can I find Cumulus release notes?"),(0,n.kt)("p",null,"  Answer: To get the latest information about updates to Cumulus go to ",(0,n.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/versions"},"Cumulus Versions"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I quickly troubleshoot an issue in Cumulus?"),(0,n.kt)("p",null,"  Answer: To troubleshoot and fix issues in Cumulus reference our recommended solutions in ",(0,n.kt)("a",{parentName:"p",href:"troubleshooting"},"Troubleshooting Cumulus"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Where can I get support help?"),(0,n.kt)("p",null,"  Answer: The following options are available for assistance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cumulus: Outside NASA users should file a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus/issues"},"GitHub issue")," and inside NASA users should file a Cumulus JIRA ticket."),(0,n.kt)("li",{parentName:"ul"},"AWS: You can create a case in the ",(0,n.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/support/home"},"AWS Support Center"),", accessible via your AWS Console.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information on how to submit an issue or contribute to Cumulus follow our guidelines at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/CONTRIBUTING.md"},"Contributing")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"workflows"},"Workflows"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is a Cumulus workflow?"),(0,n.kt)("p",null,"  Answer: A workflow is a provider-configured set of steps that describe the process to ingest data. Workflows are defined using\xa0",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/index.html"},"AWS Step Functions"),". For more details, we suggest visiting the\xa0",(0,n.kt)("a",{parentName:"p",href:"workflows"},"Workflows")," section.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I set up a Cumulus workflow?"),(0,n.kt)("p",null,"  Answer: You will need to create a provider, have an associated collection (add a new one), and generate a new rule first. Then you can set up a Cumulus workflow by following these steps ",(0,n.kt)("a",{parentName:"p",href:"workflows/developing-a-cumulus-workflow"},"here"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Where can I find a list of workflow tasks?"),(0,n.kt)("p",null,"  Answer: You can access a list of reusable tasks for Cumulus development at ",(0,n.kt)("a",{parentName:"p",href:"tasks"},"Cumulus Tasks"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Are there any third-party workflows or applications that I can use with Cumulus?"),(0,n.kt)("p",null,"  Answer: The Cumulus team works with various partners to help build a robust framework. You can visit our ",(0,n.kt)("a",{parentName:"p",href:"/cumulus/docs/external-contributions/"},"External Contributions")," section to see what other options are available to help you customize Cumulus for your needs.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"integrators--developers"},"Integrators & Developers"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is a Cumulus integrator?"),(0,n.kt)("p",null,"  Answer: Those who are working within Cumulus and AWS for deployments and to manage workflows. They may perform the following functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure and deploy Cumulus to the AWS environment"),(0,n.kt)("li",{parentName:"ul"},"Configure Cumulus workflows"),(0,n.kt)("li",{parentName:"ul"},"Write custom workflow tasks"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are the steps if I run into an issue during deployment?"),(0,n.kt)("p",null,"  Answer: If you encounter an issue with your deployment go to the ",(0,n.kt)("a",{parentName:"p",href:"/cumulus/docs/troubleshooting/troubleshooting-deployment"},"Troubleshooting Deployment")," guide.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Is Cumulus customizable and flexible?"),(0,n.kt)("p",null,"  Answer: Yes. Cumulus is a modular architecture that allows you to decide which components that you want/need to deploy. These components are maintained as Terraform modules.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are Terraform modules?"),(0,n.kt)("p",null,"  Answer: They are modules that are composed to create a Cumulus deployment, which gives integrators the flexibility to choose the components of Cumulus that want/need. To view Cumulus maintained modules or steps on how to create a module go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules"},"Terraform modules"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Where do I find Terraform module variables"),(0,n.kt)("p",null,"  Answer: Go ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/cumulus/variables.tf"},"here")," for a list of Cumulus maintained variables.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are the common use cases that a Cumulus integrator encounters?"),(0,n.kt)("p",null,"  Answer: The following are some examples of possible use cases you may see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"configuration/data-management-types"},"Creating Cumulus Data Management Types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"integrator-guide/workflow-add-new-lambda"},"Workflow: Add New Lambda")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"integrator-guide/workflow-ts-failed-step"},"Workflow: Troubleshoot Failed Step(s)")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"operators"},"Operators"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is a Cumulus operator?"),(0,n.kt)("p",null,"  Answer: Those that ingests, archives, and troubleshoots datasets (called collections in Cumulus). Your daily activities might include but not limited to the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ingesting datasets"),(0,n.kt)("li",{parentName:"ul"},"Maintaining historical data ingest"),(0,n.kt)("li",{parentName:"ul"},"Starting and stopping data handlers"),(0,n.kt)("li",{parentName:"ul"},"Managing collections"),(0,n.kt)("li",{parentName:"ul"},"Managing provider definitions"),(0,n.kt)("li",{parentName:"ul"},"Creating, enabling, and disabling rules"),(0,n.kt)("li",{parentName:"ul"},"Investigating errors for granules and deleting or re-ingesting granules"),(0,n.kt)("li",{parentName:"ul"},"Investigating errors in executions and isolating failed workflow step(s)"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are the common use cases that a Cumulus operator encounters?"),(0,n.kt)("p",null,"  Answer: The following are some examples of possible use cases you may see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"operator-docs/kinesis-stream-for-ingest"},"Kinesis Stream For Ingest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"operator-docs/create-rule-in-cumulus"},"Create Rule In Cumulus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"operator-docs/granule-workflows"},"Granule Workflows"))),(0,n.kt)("p",null,"Explore more Cumulus operator best practices and how-tos in the dedicated ",(0,n.kt)("a",{parentName:"p",href:"operator-docs/about-operator-docs"},"Operator Docs"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Can you re-run a workflow execution in AWS?"),(0,n.kt)("p",null,"  Answer: Yes. For steps on how to re-run a workflow execution go to ",(0,n.kt)("a",{parentName:"p",href:"troubleshooting/rerunning-workflow-executions"},"Re-running workflow executions")," in the ",(0,n.kt)("a",{parentName:"p",href:"operator-docs/about-operator-docs"},"Cumulus Operator Docs"),".")))}k.isMDXComponent=!0}}]);