"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[661],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return a?n.createElement(m,i(i({ref:e},u),{},{components:a})):n.createElement(m,i({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9152:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3,title:"Structure",description:"Information about Rtag structure"},i=void 0,l={unversionedId:"rtag/structure",id:"rtag/structure",title:"Structure",description:"Information about Rtag structure",source:"@site/docs/rtag/structure.md",sourceDirName:"rtag",slug:"/rtag/structure",permalink:"/rtag/structure",draft:!1,editUrl:"https://github.com/saicone/docs/blob/master/docs/rtag/structure.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1661450028,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Structure",description:"Information about Rtag structure"},sidebar:"rtag",previous:{title:"Basics",permalink:"/rtag/basics"},next:{title:"Features",permalink:"/rtag/feature/"}},s={},c=[{value:"TagObject",id:"tagobject",level:2},{value:"RtagMirror",id:"rtagmirror",level:2},{value:"Rtag",id:"rtag",level:2},{value:"RtagEditor",id:"rtageditor",level:2},{value:"RtagItem",id:"rtagitem",level:3},{value:"RtagEntity",id:"rtagentity",level:3},{value:"RtagBlock",id:"rtagblock",level:3}],u={toc:c};function g(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rtag is made of multiple classes that work together to handle NBT."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rtag Instances",src:a(5137).Z,width:"1810",height:"750"})),(0,r.kt)("h2",{id:"tagobject"},"TagObject"),(0,r.kt)("p",null,"Rtag contains multiple classes to handle NBT objects maintaining a cross-version compatibility, including the conversion of respective object to Java and vice versa:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TagCompound:")," To handle NBTTagCompound."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TagList:")," To handle NBTTagList."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TagBase:")," To handle every other NBT class not mentioned before.")),(0,r.kt)("h2",{id:"rtagmirror"},"RtagMirror"),(0,r.kt)("p",null,"It's the main instance of Rtag to convert every normal Java object (String, Integer, List, Map) into NBT and vice versa in a simple way without using TagObject classes."),(0,r.kt)("h2",{id:"rtag"},"Rtag"),(0,r.kt)("p",null,"It's the Rtag itself, with this instance you can edit the NBTTagCompound and NBTTagList in the most simple way, you can add and remove objects using a tree-like path format."),(0,r.kt)("p",null,"Including compatibility with custom objects by registering an object (de)serializer, for more information visit the ",(0,r.kt)("a",{parentName:"p",href:"/rtag/feature/custom-objects"},"custom object")," feature page."),(0,r.kt)("h2",{id:"rtageditor"},"RtagEditor"),(0,r.kt)("p",null,"Abstract class with options to edit in a safe way the NBT inside objects."),(0,r.kt)("h3",{id:"rtagitem"},"RtagItem"),(0,r.kt)("p",null,"Allow you to edit any ItemStack tag, every non-vanilla tag will be saved after load the changes."),(0,r.kt)("p",null,"To load the changes inside ItemStack it is possible to create a copy with the changes, or implement it directly using the original ItemStack object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = new ItemStack(Material.DIAMOND_SWORD);\n\nRtagItem rtag = new RtagItem(item);\n// Value = "Text 123"\n// Path = "deep" -> "path"\nrtag.set("Text 123", "deep", "path");\n\n// You can load the changes into original ItemStack\nrtag.load();\n// Or load them into a copy of original ItemStack\nItemStack newItem = rtag.loadCopy();\n')),(0,r.kt)("h3",{id:"rtagentity"},"RtagEntity"),(0,r.kt)("p",null,"Allow you to edit an entity NBTTagCompound, without entity id because it can't be changed, if you try to change it the entity will still be the same."),(0,r.kt)("p",null,"The non-vanilla tags will be deleted after load changes into Entity."),(0,r.kt)("p",null,"It's not possible to load changes as a copy of the original Entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Entity entity = // Entity from anywhere;\n\nRtagEntity rtag = new RtagEntity(entity);\n// Edit vanilla tags\nrtag.set((byte) 1, "Glowing");\n// Value = "1"\n// Path = "HasVisualFire"\nrtag.set((byte) 1, "HasVisualFire");\n\n// Load the changes\nrtag.load();\n')),(0,r.kt)("h3",{id:"rtagblock"},"RtagBlock"),(0,r.kt)("p",null,"Allow you to edit an block NBTTagCompound, the blocks with NBT data are tiles (chest, enchanting table... etc)."),(0,r.kt)("p",null,"The non-vanilla tags will be deleted after load changes into Block."),(0,r.kt)("p",null,"It's not possible to load changes as a copy of the original Block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Block block = // Block from anywhere;\n\nRtagBlock rtag = new RtagBlock(block);\n// Assuming the block is a chest, you can edit the title when you open it\nrtag.set("{\\"color\\":\\"dark_purple\\",\\"text\\":\\"Chest custom title\\"}", "CustomName");\n\n// Load the changes\nrtag.load();\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'If you want to add non-vanilla tags to entities & blocks, you can use the "',(0,r.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/threads/guide.371200/"},"persistent data container"),'" that was added in MC 1.14.'),(0,r.kt)("p",{parentName:"admonition"},'For now Rtag does not offer a "safe way" to save non-vanilla tags in old Bukkit versions.')))}g.isMDXComponent=!0},5137:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/rtag-instances-8cdc923d1b20875d9071af314c76a103.png"}}]);