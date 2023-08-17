"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var d=n.createContext({}),l=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=l(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,d=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(a),u=o,m=p["".concat(d,".").concat(u)]||p[u]||g[u]||i;return a?n.createElement(m,r(r({ref:e},c),{},{components:a})):n.createElement(m,r({ref:e},c))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[p]="string"==typeof t?t:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9099:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:1,title:"RtagEditor",description:"Main object to edit NBT easily"},r=void 0,s={unversionedId:"rtag/usage/editor",id:"rtag/usage/editor",title:"RtagEditor",description:"Main object to edit NBT easily",source:"@site/docs/rtag/usage/editor.md",sourceDirName:"rtag/usage",slug:"/rtag/usage/editor",permalink:"/rtag/usage/editor",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/usage/editor.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1692292343,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"RtagEditor",description:"Main object to edit NBT easily"},sidebar:"rtag",previous:{title:"Usage",permalink:"/rtag/usage/"},next:{title:"RtagItem",permalink:"/rtag/usage/item"}},d={},l=[{value:"Edit",id:"edit",level:2},{value:"Simple methods",id:"simple-methods",level:3},{value:"Collections",id:"collections",level:3},{value:"Check",id:"check",level:3},{value:"Enums",id:"enums",level:3},{value:"Load",id:"load",level:2},{value:"Save edits",id:"save-edits",level:3},{value:"Update",id:"update",level:2},{value:"Get changes",id:"get-changes",level:3}],c={toc:l},p="wrapper";function g(t){let{components:e,...a}=t;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagEditor")," instances convert a Bukkit object into Minecraft server object and provide an easy way to edit the tag (NBTTagCompound) inside, using a Rtag instance as helper."),(0,o.kt)("h2",{id:"edit"},"Edit"),(0,o.kt)("p",null,"To understand ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagEditor")," you first need known how to edit the current tag."),(0,o.kt)("h3",{id:"simple-methods"},"Simple methods"),(0,o.kt)("p",null,"The editor instance simplify any edit with automatic conversion and providing an tree-like format to set, get and remove objects using paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Any RtagEditor instance (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\nString str = "My String";\n// Set into "my -> saved -> object" path\ntag.set(str, "my", "saved", "object");\n\n// Get from "my <- save <- object"\nString sameStr = tag.get("my", "saved", "object");\n\n// Remove from path\ntag.remove("my", "saved", "object");\n')),(0,o.kt)("p",null,"You probably noticed there's not an explicit setter and getter like ",(0,o.kt)("inlineCode",{parentName:"p"},"setString")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"getString"),', that because Rtag do "magic" by convert any NBT object into normal java object.'),(0,o.kt)("p",null,"Take in count Rtag only return the converted object, it doesn't known if you want a String, Integer, Float... etc, on normal getter operations ",(0,o.kt)("strong",{parentName:"p"},"you should be sure that the object you want is that type of object")," or the returned object will be null after fail cast or simply it doesn't exist at provided path."),(0,o.kt)("p",null,"If you don't known what type of object is it, or the Rtag instance doesn't provide a conversion because the ",(0,o.kt)("a",{parentName:"p",href:"../../intro/#compatible-objects"},"compatible objects")," are limited, you can use an ",(0,o.kt)("a",{parentName:"p",href:"../../feature/types/"},"optional type")," getter that provide a wide variety of conversions and null check for your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Any RtagEditor instance (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\nString str = "123";\n// Set into "my -> saved -> object" path\ntag.set(str, "my", "saved", "object");\n\n// Cast the object as String (original) or get "456" if doesn\'t exist or cast fails\nString s = tag.getOptional("my", "saved", "object").or("456");\n\n// Same as above, but the optional type try to convert any type of object to String\nString s = tag.getOptional("my", "saved", "object").asString("456");\n\n// So it works to convert as other object type\nint numValue = tag.getOptional("my", "saved", "object").asInt(-1); // -1 as default int\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../../feature/custom-objects/"},"custom objects guide"))," if you want to save any type of serializable object.")),(0,o.kt)("h3",{id:"collections"},"Collections"),(0,o.kt)("p",null,"With Rtag is easy to handle list of objects, with ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," method you can add objects to list at provided path, so if the List doesn't exist it will be created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Any RtagEditor instance (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\n// Create list at "my -> saved -> list" path\ntag.set(new ArrayList(), "my", "saved", "list");\n\nbyte num = 3;\n// Add into list\ntag.add(num, "my", "saved", "list");\n\n// Get the list\nList<Byte> list = tag.get("my", "saved", "list");\n\n// If you don\'t known what type of list is, you can make a conversion with optional type\nList<Byte> list = tag.getOptional("my", "saved", "list").asList(OptionalType::asByte);\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Take in count the NBT lists accept any type of object if the list is empty, because ",(0,o.kt)("strong",{parentName:"p"},"the first object define the NBT list type"),".")),(0,o.kt)("h3",{id:"check"},"Check"),(0,o.kt)("p",null,"To check if any tag exist or not at defined path, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"hasTag")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"hasNotTag")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Any RtagEditor instance (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\nboolean exist = tag.hasTag("my", "saved", "object");\nboolean notExist = tag.notHasTag("my", "saved", "object");\n')),(0,o.kt)("h3",{id:"enums"},"Enums"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is an advanced feature, you can ignore this because is rarely used.")),(0,o.kt)("p",null,"RtagEditor instances can handle Enums as bit fields, providing an easy way to read and write any type of object with ordinal value."),(0,o.kt)("p",null,"For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"MyEnum")," has the values ",(0,o.kt)("inlineCode",{parentName:"p"},"FIRE, GLOW, INVISIBLE")," you can have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," of those enum values in the same field saved as Integer starting with the definition that ",(0,o.kt)("inlineCode",{parentName:"p"},"FIRE")," ordinal is ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GLOW")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"INVISIBLE")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Any RtagEditor instance (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\n// Add values to enum set at "my -> saved -> enum" path\ntag.addEnum(MyEnum.FIRE, "my", "saved", "enum");\ntag.addEnum(MyEnum.INVISIBLE, "my", "saved", "enum");\n\n// Get enum set of values\nSet<MyEnum> set = tag.getOptional("my", "saved", "enum").asEnumSet(MyEnum.class);\n')),(0,o.kt)("h2",{id:"load"},"Load"),(0,o.kt)("p",null,"After edit tag is necessary to load changes into Minecraft server object and provided Bukkit object."),(0,o.kt)("h3",{id:"save-edits"},"Save edits"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," method save the changes (load into)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Any RtagEditor instance (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\nString str = "My String";\n// Set into "my -> saved -> object" path\ntag.set(str, "my", "saved", "object");\n\n// Load into provided object\ntag.load();\n')),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("p",null,"If you edit the provided object, is need to update the current tag to continue to use it in the same ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagEditor")," instance."),(0,o.kt)("h3",{id:"get-changes"},"Get changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Any RtagEditor instance (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\n// <The provided object (item, entity or block) was edited>\n\n// Update current tag\ntag.update();\n")))}g.isMDXComponent=!0}}]);