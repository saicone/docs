"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[176],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=l,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||r;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:2,title:"Installation",description:"How to download & install UClanSync"},o=void 0,i={unversionedId:"uclansync/installation",id:"uclansync/installation",title:"Installation",description:"How to download & install UClanSync",source:"@site/docs/uclansync/installation.md",sourceDirName:"uclansync",slug:"/uclansync/installation",permalink:"/uclansync/installation",draft:!1,editUrl:"https://github.com/saicone/docs/blob/master/docs/uclansync/installation.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1689095987,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Installation",description:"How to download & install UClanSync"},sidebar:"uclansync",previous:{title:"UClanSync",permalink:"/uclansync/"},next:{title:"Setup",permalink:"/uclansync/setup"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Download",id:"download",level:2},{value:"Install",id:"install",level:2},{value:"UClanSync",id:"uclansync",level:3},{value:"UClanSync Bungee",id:"uclansync-bungee",level:3},{value:"UClanSync Velocity",id:"uclansync-velocity",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At least ",(0,l.kt)("strong",{parentName:"li"},"Minecraft 1.8.8")),(0,l.kt)("li",{parentName:"ul"},"Minimum ",(0,l.kt)("strong",{parentName:"li"},"Java 8"))),(0,l.kt)("h2",{id:"download"},"Download"),(0,l.kt)("p",null,"Download UClanSync from Github releases:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/saicone/UClanSync/releases"},"https://github.com/saicone/UClanSync/releases")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"There are 3 different versions of UClanSync:"),(0,l.kt)("h3",{id:"uclansync"},"UClanSync"),(0,l.kt)("p",null,"The original version that acts like UltimateClans addon, you need to put UClanSync.jar into ",(0,l.kt)("strong",{parentName:"p"},"plugins/UltimateClans/addons")),(0,l.kt)("h3",{id:"uclansync-bungee"},"UClanSync Bungee"),(0,l.kt)("p",null,"It's the version that works like Bungeecord plugin to forward messages."),(0,l.kt)("p",null,'If you are not using the "PLUGIN" messaging system, don\'t use this version of UClanSync.'),(0,l.kt)("h3",{id:"uclansync-velocity"},"UClanSync Velocity"),(0,l.kt)("p",null,"It's the version that works like Velocity plugin to forward messages."),(0,l.kt)("p",null,'If you are not using the "PLUGIN" messaging system, don\'t use this version of UClanSync.'),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"On the first time when UClanSync is loaded like an addon, it requires internet connection to download some libraries.")))}d.isMDXComponent=!0}}]);