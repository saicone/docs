"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(b,i(i({ref:t},s),{},{components:n})):l.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,title:"Installation",description:"How to install PixelBuy"},i=void 0,o={unversionedId:"pixelbuy/installation",id:"pixelbuy/installation",title:"Installation",description:"How to install PixelBuy",source:"@site/docs/pixelbuy/installation.md",sourceDirName:"pixelbuy",slug:"/pixelbuy/installation",permalink:"/pixelbuy/installation",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/default/installation.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706881391,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Installation",description:"How to install PixelBuy"},sidebar:"pixelbuy",previous:{title:"PixelBuy",permalink:"/pixelbuy/"},next:{title:"Frequently asked questions",permalink:"/pixelbuy/faq"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Download",id:"download",level:2},{value:"Stable version",id:"stable-version",level:3},{value:"Latest build",id:"latest-build",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"Install",id:"install",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At least Minecraft 1.8.8."),(0,a.kt)("li",{parentName:"ul"},"Minimum Java 11.")),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("h3",{id:"stable-version"},"Stable version"),(0,a.kt)("p",null,"There's no download link."),(0,a.kt)("h3",{id:"latest-build"},"Latest build"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/saicone/PixelBuy/actions/workflows/build.yml"},"repository actions"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on latest workflow run."),(0,a.kt)("li",{parentName:"ol"},'Download the file "PixelBuy Artifact".'),(0,a.kt)("li",{parentName:"ol"},"Open the downloaded zip file and any subfolder inside."),(0,a.kt)("li",{parentName:"ol"},"Extract PixelBuy ",(0,a.kt)("inlineCode",{parentName:"li"},".jar")," file from zip.")),(0,a.kt)("h2",{id:"compatibility"},"Compatibility"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Server"),(0,a.kt)("th",{parentName:"tr",align:null},"Compatible"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bukkit"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Spigot"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Paper"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Folia"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to server file browser."),(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," folder."),(0,a.kt)("li",{parentName:"ol"},"Drag and drop PixelBuy ",(0,a.kt)("inlineCode",{parentName:"li"},".jar")," file.")))}c.isMDXComponent=!0}}]);