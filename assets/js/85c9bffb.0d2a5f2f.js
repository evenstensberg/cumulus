"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[81012],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(a),d=o,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"api-gateway-logging",title:"API Gateway Logging",hide_title:!1},c=void 0,s={unversionedId:"deployment/api-gateway-logging",id:"version-v16.0.0/deployment/api-gateway-logging",title:"API Gateway Logging",description:"Enabling API Gateway Logging",source:"@site/versioned_docs/version-v16.0.0/deployment/api_gateway_logging.md",sourceDirName:"deployment",slug:"/deployment/api-gateway-logging",permalink:"/cumulus/docs/v16.0.0/deployment/api-gateway-logging",draft:!1,tags:[],version:"v16.0.0",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1689363144,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"api-gateway-logging",title:"API Gateway Logging",hide_title:!1},sidebar:"docs",previous:{title:"Logs",permalink:"/cumulus/docs/v16.0.0/category/logs"},next:{title:"Share S3 Access Logs",permalink:"/cumulus/docs/v16.0.0/deployment/share-s3-access-logs"}},p={},g=[{value:"Enabling API Gateway Logging",id:"enabling-api-gateway-logging",level:2},{value:"Configure Permissions for API Gateway Logging to CloudWatch",id:"configure-permissions-for-api-gateway-logging-to-cloudwatch",level:2},{value:"Instructions: Enabling Account Level Logging from API Gateway to CloudWatch",id:"instructions-enabling-account-level-logging-from-api-gateway-to-cloudwatch",level:3},{value:"Configure API Gateway CloudWatch Logs Delivery",id:"configure-api-gateway-cloudwatch-logs-delivery",level:2}],u={toc:g},d="wrapper";function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enabling-api-gateway-logging"},"Enabling API Gateway Logging"),(0,r.kt)("p",null,"In order to enable distribution API Access and execution logging, configure the TEA deployment by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"log_api_gateway_to_cloudwatch")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"thin_egress_app")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},"log_api_gateway_to_cloudwatch = true\n")),(0,r.kt)("p",null,"This enables the distribution API to send its logs to the default CloudWatch location: ",(0,r.kt)("inlineCode",{parentName:"p"},"API-Gateway-Execution-Logs_<RESTAPI_ID>/<STAGE>")),(0,r.kt)("h2",{id:"configure-permissions-for-api-gateway-logging-to-cloudwatch"},"Configure Permissions for API Gateway Logging to CloudWatch"),(0,r.kt)("h3",{id:"instructions-enabling-account-level-logging-from-api-gateway-to-cloudwatch"},"Instructions: Enabling Account Level Logging from API Gateway to CloudWatch"),(0,r.kt)("p",null,"This is a one time operation that must be performed on each AWS account to allow API Gateway to push logs to CloudWatch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h3",{parentName:"li",id:"create-a-policy-document"},"Create a policy document"),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AmazonAPIGatewayPushToCloudWatchLogs")," managed policy, with an ARN of ",(0,r.kt)("inlineCode",{parentName:"p"},"arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"),", has all the required permissions to enable API Gateway logging to CloudWatch.  To grant these permissions to your account, first create an IAM role with ",(0,r.kt)("inlineCode",{parentName:"p"},"apigateway.amazonaws.com")," as its trusted entity."),(0,r.kt)("p",{parentName:"li"},"Save this snippet as ",(0,r.kt)("inlineCode",{parentName:"p"},"apigateway-policy.json"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "",\n            "Effect": "Allow",\n            "Principal": {\n                "Service": "apigateway.amazonaws.com"\n            },\n            "Action": "sts:AssumeRole"\n        }\n    ]\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h3",{parentName:"li",id:"create-an-account-role-to-act-as-apigateway-and-write-to-cloudwatchlogs"},"Create an account role to act as ApiGateway and write to CloudWatchLogs"),(0,r.kt)("admonition",{parentName:"li",title:"in NGAP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"NASA users in NGAP"),": Be sure to use your account's permission boundary.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"    aws iam create-role \\\n    --role-name ApiGatewayToCloudWatchLogs \\\n    [--permissions-boundary <permissionBoundaryArn>] \\\n    --assume-role-policy-document file://apigateway-policy.json\n")),(0,r.kt)("p",{parentName:"li"},"Note the ARN of the returned role for the last step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h3",{parentName:"li",id:"attach-correct-permissions-to-role"},"Attach correct permissions to role"),(0,r.kt)("p",{parentName:"li"},"Next attach the ",(0,r.kt)("inlineCode",{parentName:"p"},"AmazonAPIGatewayPushToCloudWatchLogs")," policy to the IAM role."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'aws iam attach-role-policy \\\n--role-name ApiGatewayToCloudWatchLogs \\\n--policy-arn "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h3",{parentName:"li",id:"update-account-api-gateway-settings-with-correct-permissions"},"Update Account API Gateway settings with correct permissions"),(0,r.kt)("p",{parentName:"li"},"Finally, set the IAM role ARN on the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudWatchRoleArn")," property on your API Gateway Account settings."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws apigateway update-account \\\n--patch-operations op='replace',path='/cloudwatchRoleArn',value='<ApiGatewayToCloudWatchLogs ARN>'\n")))),(0,r.kt)("h2",{id:"configure-api-gateway-cloudwatch-logs-delivery"},"Configure API Gateway CloudWatch Logs Delivery"),(0,r.kt)("p",null,"For details about configuring the API Gateway CloudWatch Logs delivery, see ",(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/v16.0.0/deployment/cloudwatch-logs-delivery"},"Configure Cloudwatch Logs Delivery"),"."))}m.isMDXComponent=!0}}]);