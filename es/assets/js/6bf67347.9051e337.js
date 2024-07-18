"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1564:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7294),i=r(6010),o=r(9960),c=r(3438),a=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c},c))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??(null==i?void 0:i.description)})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9268:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),i=r(6010),o=r(3438),c=r(1564);function a(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(s,{items:r.items,className:t})}function s(e){const{items:t,className:r}=e;if(!t)return n.createElement(a,e);const s=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(c.Z,{item:e})))))}},2067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),o=r(9268),c=r(3438);const a={sidebar_position:4,title:"Configuraciones",description:"Como configurar PixelBuy."},s=void 0,l={unversionedId:"pixelbuy/setup/README",id:"pixelbuy/setup/README",title:"Configuraciones",description:"Como configurar PixelBuy.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/pixelbuy/setup/README.md",sourceDirName:"pixelbuy/setup",slug:"/pixelbuy/setup/",permalink:"/es/pixelbuy/setup/",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/es/setup/README.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1721275328,formattedLastUpdatedAt:"18 jul 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Configuraciones",description:"Como configurar PixelBuy."},sidebar:"pixelbuy",previous:{title:"Preguntas frecuentes",permalink:"/es/pixelbuy/faq"},next:{title:"Configuraci\xf3n",permalink:"/es/pixelbuy/setup/configuration"}},u={},p=[],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PixelBuy tiene varios archivos de configuraci\xf3n."),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);