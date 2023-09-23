"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[c]="string"==typeof e?e:r,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"Custom items",description:"Guide to create basic custom items with Rtag"},o=void 0,m={unversionedId:"rtag/guides/custom-items",id:"rtag/guides/custom-items",title:"Custom items",description:"Guide to create basic custom items with Rtag",source:"@site/docs/rtag/guides/custom-items.md",sourceDirName:"rtag/guides",slug:"/rtag/guides/custom-items",permalink:"/rtag/guides/custom-items",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/guides/custom-items.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1695441337,formattedLastUpdatedAt:"Sep 23, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Custom items",description:"Guide to create basic custom items with Rtag"},sidebar:"rtag",previous:{title:"Guides",permalink:"/rtag/guides/"},next:{title:"Save items data",permalink:"/rtag/guides/save-items"}},s={},l=[{value:"Simple data",id:"simple-data",level:2},{value:"Vouchers",id:"vouchers",level:3},{value:"Number count",id:"number-count",level:3},{value:"Item owner",id:"item-owner",level:3},{value:"Interactions",id:"interactions",level:2},{value:"Save item on death",id:"save-item-on-death",level:3}],u={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's talk about real examples with item and custom NBT."),(0,r.kt)("h2",{id:"simple-data"},"Simple data"),(0,r.kt)("p",null,"Make simple items with NBT data."),(0,r.kt)("h3",{id:"vouchers"},"Vouchers"),(0,r.kt)("p",null,"Save voucher information inside item tag instead of comparing it with a large amount of items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private Map<String, List<String>> vouchers = new HashMap();\n\npublic ItemStack setVoucher(ItemStack item, String voucherId) {\n    return RtagItem.edit(item, tag -> {\n        tag.set(voucherId, "voucher");\n    });\n}\n\npublic String getVoucherId(ItemStack item) {\n    return new RtagItem(item).get("voucher");\n}\n\npublic boolean handleVoucher(Player player, ItemStack item) {\n    final String id = getVoucherId(item);\n    if (id == null || !vouchers.containsKey(id)) {\n        return false;\n    }\n    for (String cmd : vouchers.get(id)) {\n        Bukkit.dispatchCommand(Bukkit.getConsoleSender(), cmd.replace("%player%", player.getName));\n    }\n    return true;\n}\n')),(0,r.kt)("h3",{id:"number-count"},"Number count"),(0,r.kt)("p",null,"Count some number inside item tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public ItemStack addCount(ItemStack item, int amount) {\n    return RtagItem.edit(item, tag -> {\n        int i = tag.getOptional("myplugin", "count").or(0);\n        i = i + amount;\n        tag.set(i, "myplugin", "count");\n    });\n}\n\npublic int getCount(ItemStack item) {\n    return new RtagItem(item).getOptional("myplugin", "count").or(0);\n}\n')),(0,r.kt)("h3",{id:"item-owner"},"Item owner"),(0,r.kt)("p",null,"Save item owner as custom tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public ItemStack setOwner(ItemStack item, OfflinePlayer player) {\n    return RtagItem.edit(item, tag -> {\n        tag.set(player.getName(), "owner", "name");\n        tag.set(player.getUniqueId(), "owner", "uuid");\n    });\n}\n\npublic String getOwnerName(ItemStack item) {\n    return new RtagItem(item).get("owner", "name");\n}\n\npublic UUID getOwnerUuid(ItemStack item) {\n    return new RtagItem(item).getOptional("owner", "uuid").asUuid();\n}\n')),(0,r.kt)("h2",{id:"interactions"},"Interactions"),(0,r.kt)("p",null,"Modify item interactions using NBT data and event handling."),(0,r.kt)("h3",{id:"save-item-on-death"},"Save item on death"),(0,r.kt)("p",null,"Let's make a custom tag like ",(0,r.kt)("inlineCode",{parentName:"p"},"keepItem"),", set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to save that item on death."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public ItemStack setKeepItem(ItemStack item, boolean value) {\n    return RtagItem.edit(item, tag -> {\n        tag.set(value, "keepItem");\n    });\n}\n\npublic boolean keepItem(ItemStack item) {\n    return new RtagItem(item).getOptional("keepItem").or(false);\n}\n')),(0,r.kt)("p",null,"And handle it with ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerDeathEvent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerRespawnEvent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private final Map<String, List<ItemStack>> savedItems = new HashMap<>();\n\n@EventHandler\npublic void onDeath(PlayerDeathEvent e) {\n    if (e.getKeepInventory()) {\n        return;\n    }\n\n    List<ItemStack> matches = new ArrayList<>();\n    e.getDrops().forEach(item -> {\n        if (keepItem(item)) {\n            matches.add(item);\n        }\n    });\n\n    if (matches.isEmpty()) {\n        return;\n    }\n\n    String name = e.getEntity().getName();\n    if (savedItems.containsKey(name)) {\n        savedItems.get(name).addAll(matches);\n    } else {\n        savedItems.put(name, matches);\n    }\n\n    e.getDrops().removeAll(matches);\n}\n\n@EventHandler\npublic void onRespawn(PlayerRespawnEvent e) {\n    String name = e.getPlayer().getName();\n    if (savedItems.containsKey(name)) {\n        e.getPlayer().getInventory().addItem(savedItems.get(name).toArray(new ItemStack[0]));\n        savedItems.remove(name);\n    }\n}\n")))}p.isMDXComponent=!0}}]);