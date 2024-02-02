"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[436],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),m=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(l.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=m(n),u=i,k=s["".concat(l,".").concat(u)]||s[u]||p[u]||r;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[s]="string"==typeof t?t:i,o[1]=c;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3126:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3,title:"Minecraft Objects",description:"Information about minecraft objects in Rtag"},o=void 0,c={unversionedId:"rtag/advanced/minecraft",id:"rtag/advanced/minecraft",title:"Minecraft Objects",description:"Information about minecraft objects in Rtag",source:"@site/docs/rtag/advanced/minecraft.md",sourceDirName:"rtag/advanced",slug:"/rtag/advanced/minecraft",permalink:"/rtag/advanced/minecraft",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/advanced/minecraft.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706881391,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Minecraft Objects",description:"Information about minecraft objects in Rtag"},sidebar:"rtag",previous:{title:"Tag Objects",permalink:"/rtag/advanced/tags"},next:{title:"Features",permalink:"/rtag/feature/"}},l={},m=[{value:"Item Object",id:"item-object",level:2},{value:"Create",id:"create",level:3},{value:"Convert",id:"convert",level:3},{value:"Edit",id:"edit",level:3},{value:"Entity Object",id:"entity-object",level:2},{value:"Convert",id:"convert-1",level:3},{value:"Edit",id:"edit-1",level:3},{value:"Block Object",id:"block-object",level:2},{value:"Convert",id:"convert-2",level:3},{value:"Edit",id:"edit-2",level:3}],d={toc:m},s="wrapper";function p(t){let{components:e,...n}=t;return(0,i.kt)(s,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here some utility classes to handle Minecraft server and Craftbukkit objects using simple methods."),(0,i.kt)("h2",{id:"item-object"},"Item Object"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemObject")," is an utility class that allow to handle Bukkit and Minecraft items with simple methods across supported versions."),(0,i.kt)("h3",{id:"create"},"Create"),(0,i.kt)("p",null,"Create Minecraft ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"NBTTagCompound"),", so it allow to get from different formats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create from compound\nObject compound = ...;\nObject item = ItemObject.newItem(compound);\n\n// Create from SNBT (or json)\nString snbt = "{id:\\"minecraft:diamond_sword\\"}";\nObject item = ItemObject.newItem(TagCompound.newTag(snbt));\n')),(0,i.kt)("h3",{id:"convert"},"Convert"),(0,i.kt)("p",null,"Convert items from Bukkit and Minecraft."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convert to Minecraft ItemStack\nObject mcItem = ItemObject.asNMSCopy(item);\n\n// Convert to Bukkit ItemStack\nItemStack sameItem = ItemObject.asBukkitCopy(mcItem);\n")),(0,i.kt)("h3",{id:"edit"},"Edit"),(0,i.kt)("p",null,"Edit various things of Bukkit and Minecraft ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Object item = ItemObject.newItem(TagCompound.newTag("{id:\\"minecraft:diamond_sword\\"}"));\n\n// Save into NBTTagCompound\nObject compound = ItemObject.save(item);\n// Load NBTTagCompound into item\nItemObject.load(item, compound);\n\n// Get item tag as NBTTagCompound\nObject tag = ItemObject.getTag(item);\n// Set item tag\nItemObject.setTag(item, tag);\n\n\n// Normal ItemStack or CraftItemStack\nItemStack item = ...;\n\n// Get handle from CraftItemStack or convert Bukkit ItemStack to Minecraft ItemStack\nObject mcItem = ItemObject.getHandle(item);\n// Override handle of CraftItemStack or load Minecraft ItemStack into Bukkit ItemStack\nItemObject.setHandle(item, mcItem);\n')),(0,i.kt)("h2",{id:"entity-object"},"Entity Object"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityObject")," is an utility class that allow to handle Bukkit and Minecraft entities with simple methods across supported versions."),(0,i.kt)("h3",{id:"convert-1"},"Convert"),(0,i.kt)("p",null,"Convert entities from Bukkit and Minecraft."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Entity entity = ...;\n\n// Convert to Minecraft Entity\nObject mcEntity = EntityObject.getHandle(entity);\n\n// Convert to Bukkit Entity\nEntity sameEntity = EntityObject.getEntity(mcEntity);\n")),(0,i.kt)("h3",{id:"edit-1"},"Edit"),(0,i.kt)("p",null,"Edit various things of Minecraft ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Object entity = ...;\n\n// Save into NBTTagCompound\nObject compound = EntityObject.save(entity);\n// Load NBTTagCompound into entity\nEntityObject.load(entity, compound);\n")),(0,i.kt)("h2",{id:"block-object"},"Block Object"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockObject")," is an utility class that allow to handle Bukkit and Minecraft blocks and tile entities with simple methods across supported versions."),(0,i.kt)("h3",{id:"convert-2"},"Convert"),(0,i.kt)("p",null,"Convert Bukkit ",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," into Minecraft ",(0,i.kt)("inlineCode",{parentName:"p"},"TileEntity")," (if it's aplicable)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\n\n// Convert to Minecraft TileEntity\nObject mcTileEntity = BlockObject.getTileEntity(block);\n")),(0,i.kt)("h3",{id:"edit-2"},"Edit"),(0,i.kt)("p",null,"Edit various things of Minecraft ",(0,i.kt)("inlineCode",{parentName:"p"},"TileEntity"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Object tileEntity = ...;\n\n// Save into NBTTagCompound\nObject compound = BlockObject.save(tileEntity);\n// Load NBTTagCompound into tileEntity\nBlockObject.load(tileEntity, compound);\n")))}p.isMDXComponent=!0}}]);