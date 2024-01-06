"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,title:"Tag Objects",description:"Information about Rtag handling NBT"},i=void 0,s={unversionedId:"rtag/advanced/tags",id:"rtag/advanced/tags",title:"Tag Objects",description:"Information about Rtag handling NBT",source:"@site/docs/rtag/advanced/tags.md",sourceDirName:"rtag/advanced",slug:"/rtag/advanced/tags",permalink:"/rtag/advanced/tags",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/advanced/tags.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1704582820,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tag Objects",description:"Information about Rtag handling NBT"},sidebar:"rtag",previous:{title:"Explanation",permalink:"/rtag/advanced/explanation"},next:{title:"Minecraft Objects",permalink:"/rtag/advanced/minecraft"}},l={},p=[{value:"TagBase",id:"tagbase",level:2},{value:"Create",id:"create",level:3},{value:"Get values",id:"get-values",level:3},{value:"TagList",id:"taglist",level:2},{value:"TagCompound",id:"tagcompound",level:2}],c={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here some utility classes to handle NBT objects using simple methods."),(0,o.kt)("h2",{id:"tagbase"},"TagBase"),(0,o.kt)("p",null,"It's tha main class to handle any type of NBT object."),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase")," class you can create NBT objects with any type of (normal java) object, by default it only provide support to ",(0,o.kt)("a",{parentName:"p",href:"../../intro/#compatible-objects"},"compatible objects"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"Byte")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Not compatible with Map or List\nObject nbtObject = TagBase.newTag("Hello");\n\n// Compatible with Map, List, and any deserializable object using Gson\nRtagMirror mirror = ...;\nObject nbtObject = TagBase.newTag(mirror, Map.of("greeting", "Hello"));\n\n// Copy nbt object\nObject nbtCopy = TagBase.clone(nbtObject);\n')),(0,o.kt)("h3",{id:"get-values"},"Get values"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase")," class provide different methods to get the java object value from any NBT object, ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," is get as ",(0,o.kt)("inlineCode",{parentName:"p"},"Byte")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," is get as ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"int[]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// NBT object\nObject nbtObject = ...;\n\n// Get type ID\nbyte type = TagBase.getTypeId(nbtObject);\n\n// Get value inside NBT, not compatible with Map or List\nObject value = TagBase.getValue(nbtObject);\n\n// Get value inside NBT, compatible with Map or List\n// but it only provide conversion to serializable objects\n// if the RtagMirror instance allows it.\nRtagMirror mirror = ...;\nObject value = TagBase.getValue(mirror, nbtObject);\n")),(0,o.kt)("h2",{id:"taglist"},"TagList"),(0,o.kt)("p",null,"It's a more specific class to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagList")," objects as java ",(0,o.kt)("inlineCode",{parentName:"p"},"List<NBTBase>"),", so it has the same methods mentioned on ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase")," but only for NBT lists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Create NBTTagList object\nObject nbtList = TagList.newTag();\n\n// Add value\nTagList.add(nbtList, TagBase.newTag("Hello"));\n\n// Get size\nint size = TagList.size(nbtList);\n\n// Get from index\nObject nbtObject = TagList.get(nbtList, 0); // index: 0\n\n// Get the value inside NBTTagList, a List of NBTBase\nList<Object> value = TagList.getValue(nbtList);\n\n// Clear list\nTagList.clear(nbtList);\n')),(0,o.kt)("h2",{id:"tagcompound"},"TagCompound"),(0,o.kt)("p",null,"It's a more specific class to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagCompound")," objects as java ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, NBTBase>"),", so it has the same methods mentioned on ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase")," but only for NBT compounds."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Create NBTTagCompound object\nObject nbtCompound = TagCompound.newTag();\n// Or create NBTTagCompound using SNBT (it\'s also compatible with Json)\nObject nbtCompound = TagCompound.newTag("{greeting:\\"Hello\\",someValue:123}");\n\n// Add value\nTagCompound.set(nbtCompound, "greeting", TagBase.newTag("Hello"));\n\n// Get size\nint size = TagCompound.getValue(nbtCompound).size();\n\n// Get from key\nObject nbtObject = TagCompound.get(nbtCompound, "greeting");\n\n// Get the value inside NBTTagCompound, a Map of NBTBase\nMap<String, Object> value = TagCompound.getValue(nbtCompound);\n\n// Get the NBTTagCompound as Json String\nString json = TagCompound.getJson(nbtCompound);\n\n// Clear compound\nTagCompound.clear(nbtCompound);\n')))}g.isMDXComponent=!0}}]);