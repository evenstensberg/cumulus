"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[39025],{15680:(e,o,t)=>{t.d(o,{xA:()=>c,yg:()=>k});var n=t(96540);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var o=n.useContext(u),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=s(e.components);return n.createElement(u.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,k=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(k,i(i({ref:o},c),{},{components:t})):n.createElement(k,i({ref:o},c))}));function k(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in o)hasOwnProperty.call(o,u)&&(l[u]=o[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78759:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=t(58168),r=t(98587),a=(t(96540),t(15680)),i=["components"],l={id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},u=void 0,s={unversionedId:"data-cookbooks/about-cookbooks",id:"version-v11.1.0/data-cookbooks/about-cookbooks",title:"About Cookbooks",description:"Introduction",source:"@site/versioned_docs/version-v11.1.0/data-cookbooks/about-cookbooks.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/about-cookbooks",permalink:"/cumulus/docs/v11.1.0/data-cookbooks/about-cookbooks",draft:!1,tags:[],version:"v11.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},sidebar:"Data Cookbooks",next:{title:"HelloWorld Workflow",permalink:"/cumulus/docs/v11.1.0/data-cookbooks/hello-world"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding a page",id:"adding-a-page",level:2},{value:"More about workflows",id:"more-about-workflows",level:2}],p={toc:d},f="wrapper";function k(e){var o=e.components,t=(0,r.A)(e,i);return(0,a.yg)(f,(0,n.A)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The following data cookbooks are documents containing examples and explanations of workflows in the Cumulus framework. Additionally, the following data cookbooks should serve to help unify an institution/user group on a set of terms."),(0,a.yg)("h2",{id:"setup"},"Setup"),(0,a.yg)("p",null,"The data cookbooks assume you can configure providers, collections, and rules to run workflows. Visit ",(0,a.yg)("a",{parentName:"p",href:"../configuration/data-management-types"},"Cumulus data management types")," for information on how to configure Cumulus data management types."),(0,a.yg)("h2",{id:"adding-a-page"},"Adding a page"),(0,a.yg)("p",null,'As shown in detail in the "Add a New Page and Sidebars" section in ',(0,a.yg)("a",{parentName:"p",href:"docs-how-to.md"},"Cumulus Docs: How To's"),", you can add a new page to the data cookbook by creating a markdown (",(0,a.yg)("inlineCode",{parentName:"p"},".md"),") file in the ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/data-cookbooks")," directory. The new page can then be linked to the sidebar by adding it to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Data-Cookbooks")," object in the ",(0,a.yg)("inlineCode",{parentName:"p"},"website/sidebar.json")," file as ",(0,a.yg)("inlineCode",{parentName:"p"},"data-cookbooks/${id}"),"."),(0,a.yg)("h2",{id:"more-about-workflows"},"More about workflows"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v11.1.0/workflows/"},"Workflow general information")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v11.1.0/workflows/input_output"},"Input & Output")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v11.1.0/workflows/developing-workflow-tasks"},"Developing Workflow Tasks")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/cumulus/docs/v11.1.0/workflows/workflow-configuration-how-to"},"Workflow Configuration How-to's")))}k.isMDXComponent=!0}}]);