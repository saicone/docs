"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2929:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:7,title:"Compatible APIs",description:"List of compatible APIs that can be used with Rtag"},o=void 0,l={unversionedId:"rtag/feature/compatible",id:"rtag/feature/compatible",title:"Compatible APIs",description:"List of compatible APIs that can be used with Rtag",source:"@site/docs/rtag/feature/compatible.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/compatible",permalink:"/rtag/feature/compatible",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/feature/compatible.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1704582820,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Compatible APIs",description:"List of compatible APIs that can be used with Rtag"},sidebar:"rtag",previous:{title:"Chat Component",permalink:"/rtag/feature/chat-component"},next:{title:"Guides",permalink:"/rtag/guides/"}},s={},c=[{value:"Bukkit PersistentDataContainer",id:"bukkit-persistentdatacontainer",level:2},{value:"Example",id:"example",level:3},{value:"NBT Injector from Item-NBT-API",id:"nbt-injector-from-item-nbt-api",level:2},{value:"Example",id:"example-1",level:3}],p={toc:c},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are some compatible APIs that Rtag can interact with."),(0,r.kt)("h2",{id:"bukkit-persistentdatacontainer"},"Bukkit PersistentDataContainer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer")," API was introduced in Bukkit 1.14 to save custom tags at different objects like items, entities and tile entities, making NBT tag editor easier for most developers, basically the same utility as Rtag but limited to custom tags, only with ",(0,r.kt)("a",{parentName:"p",href:"../../intro/#compatible-objects"},"compatible objects")," and plugin instance usage, so you need to understand NBT tags to make something functional."),(0,r.kt)("p",null,"With Rtag it's possible to edit objects from ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer")," because are saved in the path ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicBukkitValues -> <plugin>:<key>"),"."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,'For example, if a plugin named "CoolPlugin" save a ',(0,r.kt)("inlineCode",{parentName:"p"},"String"),' value into "asd" key using ',(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer")," API, you can edit it by using the following method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Using item\nRtagItem tag = new RtagItem(item);\n// Using entity\nRtagEntity tag = new RtagEntity(entity);\n// Using block\nRtagBlock tag = new RtagBlock(block);\n\n// Get\nString value = tag.get("PublicBukkitValues", "coolplugin:asd");\n\n// Set\nString str = "Hello";\ntag.get(str, "PublicBukkitValues", "coolplugin:asd");\n')),(0,r.kt)("h2",{id:"nbt-injector-from-item-nbt-api"},"NBT Injector from Item-NBT-API"),(0,r.kt)("p",null,"The NBT injector feature from Item-NBT-API allows to save custom tags to entities and tile entities, same has ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer")," but it's compatible with versions older than Bukkit 1.14."),(0,r.kt)("p",null,"With Rtag it's possible to edit those custom tags because are saved at ",(0,r.kt)("inlineCode",{parentName:"p"},"__extraData")," path."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"Edits are the same, but all paths start with ",(0,r.kt)("inlineCode",{parentName:"p"},"__extraData"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Using entity\nRtagEntity tag = new RtagEntity(entity);\n// Using block\nRtagBlock tag = new RtagBlock(block);\n\nString str = "My String";\n// Set into "my -> saved -> object" path\ntag.set(str, "__extraData", "my", "saved", "object");\n\n// Get from "my <- save <- object"\nString sameStr = tag.get("__extraData", "my", "saved", "object");\n\n// Remove from path\ntag.remove("__extraData", "my", "saved", "object");\n')))}m.isMDXComponent=!0}}]);