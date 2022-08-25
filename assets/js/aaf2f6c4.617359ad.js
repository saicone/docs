"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>O,default:()=>x,frontMatter:()=>E,metadata:()=>w,toc:()=>k});var n=r(7462),a=r(7294),o=r(3905),i=r(6010),c=r(3438),l=r(9960),s=r(3919),u=r(5999);const p="cardContainer_fWXF",d="cardTitle_rnsV",f="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return a.createElement(l.Z,{href:t,className:(0,i.Z)("card padding--lg",p)},r)}function g(e){let{href:t,icon:r,title:n,description:o}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:n},r," ",n),o&&a.createElement("p",{className:(0,i.Z)("text--truncate",f),title:o},o))}function y(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?a.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t;let{item:r}=e;const n=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=r.docId)?t:void 0);return a.createElement(g,{href:r.href,icon:n,title:r.label,description:null==o?void 0:o.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(b,{item:t});case"category":return a.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){let{items:t,className:r}=e;return a.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,c.Wl)(e)))}(t).map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e})))))}const E={sidebar_position:4,title:"Features",description:"Additional Rtag features"},O=void 0,w={unversionedId:"rtag/feature/README",id:"rtag/feature/README",title:"Features",description:"Additional Rtag features",source:"@site/docs/rtag/feature/README.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/",permalink:"/rtag/feature/",draft:!1,editUrl:"https://github.com/saicone/docs/blob/master/docs/rtag/feature/README.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1661450657,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Features",description:"Additional Rtag features"},sidebar:"rtag",previous:{title:"Structure",permalink:"/rtag/structure"},next:{title:"Custom Objects",permalink:"/rtag/feature/custom-objects"}},j={},k=[],D={toc:k};function x(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rtag has a variety of features to handle NBT compounds."),(0,o.kt)(v,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}x.isMDXComponent=!0}}]);