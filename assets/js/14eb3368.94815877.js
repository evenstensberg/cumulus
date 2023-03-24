"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[9817],{1310:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(87462),r=a(67294),i=a(86010),l=a(35281),c=a(78425),s=a(48596),o=a(39960),m=a(95999),d=a(44996);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){var e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(o.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function p(e){var t=e.children,a=e.active,l=e.index,c=e.addMicrodata;return r.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){var e=(0,c.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(h,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:n},t.label))})))):null}},52991:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),r=a(86010),i=a(78425),l=a(39960),c=a(13919),s=a(95999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){var t=e.href,a=e.children;return n.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",o.cardContainer)},a)}function d(e){var t=e.href,a=e.icon,i=e.title,l=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",o.cardTitle),title:i},a," ",i),l&&n.createElement("p",{className:(0,r.Z)("text--truncate",o.cardDescription),title:l},l))}function u(e){var t,a=e.item,r=(0,i.Wl)(a);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(t=a.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function v(e){var t,a,r=e.item,l=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:l,title:r.label,description:null!=(a=r.description)?a:null==s?void 0:s.description})}function h(e){var t=e.item;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,a=(0,i.jA)();return n.createElement(g,{items:a.items,className:t})}function g(e){var t=e.items,a=e.className;if(!t)return n.createElement(b,e);var l=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},l.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e}))})))}},55541:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(67294),r=a(10833),i=a(78425),l=a(44996),c=a(52991),s=a(4966),o=a(23120),m=a(44364),d=a(1310),u=a(92503);const v={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function h(e){var t=e.categoryGeneratedIndex;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function b(e){var t=e.categoryGeneratedIndex,a=(0,i.jA)();return n.createElement("div",{className:v.generatedIndexPage},n.createElement(o.Z,null),n.createElement(d.Z,null),n.createElement(m.Z,null),n.createElement("header",null,n.createElement(u.Z,{as:"h1",className:v.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(c.Z,{items:a.items,className:v.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(s.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function g(e){return n.createElement(n.Fragment,null,n.createElement(h,e),n.createElement(b,e))}},4966:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(67294),i=a(95999),l=a(86010),c=a(39960);function s(e){var t=e.permalink,a=e.title,n=e.subLabel,i=e.isNext;return r.createElement(c.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(s,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(s,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010),i=a(95999),l=a(35281),c=a(74477);function s(e){var t=e.className,a=(0,c.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},23120:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),r=a(86010),i=a(52263),l=a(39960),c=a(95999),s=a(80143),o=a(35281),m=a(60373),d=a(74477);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,l=e.versionMetadata,c=(0,i.Z)().siteConfig.title,d=(0,s.gA)({failfast:!0}).pluginId,u=(0,m.J)(d).savePreferredVersionName,b=(0,s.Jo)(d),g=b.latestDocSuggestion,p=b.latestVersionSuggestion,E=null!=g?g:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:c,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return u(p.name)}})))}function g(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}},92503:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),r=a(63366),i=a(67294),l=a(86010),c=a(95999),s=a(86668),o=a(39960);const m={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var d=["as","id"];function u(e){var t=e.as,a=e.id,u=(0,r.Z)(e,d),v=(0,s.L)().navbar.hideOnScroll;if("h1"===t||!a)return i.createElement(t,(0,n.Z)({},u,{id:void 0}));var h=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:a});return i.createElement(t,(0,n.Z)({},u,{className:(0,l.Z)("anchor",v?m.anchorWithHideOnScrollNavbar:m.anchorWithStickyNavbar,u.className),id:a}),u.children,i.createElement(o.Z,{className:"hash-link",to:"#"+a,"aria-label":h,title:h},"\u200b"))}}}]);