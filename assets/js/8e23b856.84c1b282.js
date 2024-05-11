"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[6952],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(y,s(s({ref:t},l),{},{components:r})):o.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:n,s[1]=u;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var o=r(58168),n=r(98587),a=(r(96540),r(15680)),s=["components"],u={id:"about-operator-docs",title:"About Operator Docs",hide_title:!1},c=void 0,i={unversionedId:"operator-docs/about-operator-docs",id:"version-v12.0.0/operator-docs/about-operator-docs",title:"About Operator Docs",description:"Purpose",source:"@site/versioned_docs/version-v12.0.0/operator-docs/about-operator-docs.md",sourceDirName:"operator-docs",slug:"/operator-docs/about-operator-docs",permalink:"/cumulus/docs/v12.0.0/operator-docs/about-operator-docs",draft:!1,tags:[],version:"v12.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"about-operator-docs",title:"About Operator Docs",hide_title:!1},sidebar:"Operator Docs",next:{title:"Locating S3 Access Logs",permalink:"/cumulus/docs/v12.0.0/operator-docs/locating-access-logs"}},l={},p=[{value:"Purpose",id:"purpose",level:2},{value:"What Is A Cumulus Operator",id:"what-is-a-cumulus-operator",level:2}],d={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,n.A)(e,s);return(0,a.yg)(m,(0,o.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"purpose"},"Purpose"),(0,a.yg)("p",null,"Operator Docs are an augmentation to Cumulus documentation and Data Cookbooks. These documents will walk step-by-step through common Cumulus activities (that aren't necessarily as use-case directed as what you'd see in Data Cookbooks)."),(0,a.yg)("h2",{id:"what-is-a-cumulus-operator"},"What Is A Cumulus Operator"),(0,a.yg)("p",null,"Cumulus operators are those who work within Cumulus to ingest/archive data and manage collections. They may perform the following functions via the operator dashboard or API:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Configure providers and collections"),(0,a.yg)("li",{parentName:"ul"},"Configure rules and monitor workflow executions"),(0,a.yg)("li",{parentName:"ul"},"Monitor granule ingestion"),(0,a.yg)("li",{parentName:"ul"},"Monitor system metrics")))}y.isMDXComponent=!0}}]);