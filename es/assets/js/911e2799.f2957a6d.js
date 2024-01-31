"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[u]="string"==typeof e?e:r,o[1]=m;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"Items custom",description:"Gu\xeda b\xe1sica para crear items custom con Rtag"},o=void 0,m={unversionedId:"rtag/guides/custom-items",id:"rtag/guides/custom-items",title:"Items custom",description:"Gu\xeda b\xe1sica para crear items custom con Rtag",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/guides/custom-items.md",sourceDirName:"rtag/guides",slug:"/rtag/guides/custom-items",permalink:"/es/rtag/guides/custom-items",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/guides/custom-items.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"31 ene 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Items custom",description:"Gu\xeda b\xe1sica para crear items custom con Rtag"},sidebar:"rtag",previous:{title:"Gu\xedas",permalink:"/es/rtag/guides/"},next:{title:"Guardar data de items",permalink:"/es/rtag/guides/save-items"}},l={},s=[{value:"Data simple",id:"data-simple",level:2},{value:"Vouchers",id:"vouchers",level:3},{value:"Conteo de n\xfamero",id:"conteo-de-n\xfamero",level:3},{value:"Due\xf1o del item",id:"due\xf1o-del-item",level:3},{value:"Interacciones",id:"interacciones",level:2},{value:"Guardar item al morir",id:"guardar-item-al-morir",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Vamos a hablar de ejemplos reales con items y NBT custom."),(0,r.kt)("h2",{id:"data-simple"},"Data simple"),(0,r.kt)("p",null,"Hacer items simples con data NBT."),(0,r.kt)("h3",{id:"vouchers"},"Vouchers"),(0,r.kt)("p",null,"Guardar la informaci\xf3n de un voucher dentro del tag de un item, env\xe9s de compararlo con una larga cantidad de items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private Map<String, List<String>> vouchers = new HashMap();\n\npublic ItemStack setVoucher(ItemStack item, String voucherId) {\n    return RtagItem.edit(item, tag -> {\n        tag.set(voucherId, "voucher");\n    });\n}\n\npublic String getVoucherId(ItemStack item) {\n    return new RtagItem(item).get("voucher");\n}\n\npublic boolean handleVoucher(Player player, ItemStack item) {\n    final String id = getVoucherId(item);\n    if (id == null || !vouchers.containsKey(id)) {\n        return false;\n    }\n    for (String cmd : vouchers.get(id)) {\n        Bukkit.dispatchCommand(Bukkit.getConsoleSender(), cmd.replace("%player%", player.getName));\n    }\n    return true;\n}\n')),(0,r.kt)("h3",{id:"conteo-de-n\xfamero"},"Conteo de n\xfamero"),(0,r.kt)("p",null,"Contar alg\xfan n\xfamero dentro del tag del item."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public ItemStack addCount(ItemStack item, int amount) {\n    return RtagItem.edit(item, tag -> {\n        int i = tag.getOptional("myplugin", "count").or(0);\n        i = i + amount;\n        tag.set(i, "myplugin", "count");\n    });\n}\n\npublic int getCount(ItemStack item) {\n    return new RtagItem(item).getOptional("myplugin", "count").or(0);\n}\n')),(0,r.kt)("h3",{id:"due\xf1o-del-item"},"Due\xf1o del item"),(0,r.kt)("p",null,"Guardar informaci\xf3n sobre el due\xf1o del item en un tag custom."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public ItemStack setOwner(ItemStack item, OfflinePlayer player) {\n    return RtagItem.edit(item, tag -> {\n        tag.set(player.getName(), "owner", "name");\n        tag.set(player.getUniqueId(), "owner", "uuid");\n    });\n}\n\npublic String getOwnerName(ItemStack item) {\n    return new RtagItem(item).get("owner", "name");\n}\n\npublic UUID getOwnerUuid(ItemStack item) {\n    return new RtagItem(item).getOptional("owner", "uuid").asUuid();\n}\n')),(0,r.kt)("h2",{id:"interacciones"},"Interacciones"),(0,r.kt)("p",null,"Modificar las interacciones con el item utilizando data en NBT adem\xe1s de manejo de eventos."),(0,r.kt)("h3",{id:"guardar-item-al-morir"},"Guardar item al morir"),(0,r.kt)("p",null,"Ahora hagamos un tag custom como ",(0,r.kt)("inlineCode",{parentName:"p"},"keepItem"),", que al ponerlo en ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," se guarde el item al morir."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public ItemStack setKeepItem(ItemStack item, boolean value) {\n    return RtagItem.edit(item, tag -> {\n        tag.set(value, "keepItem");\n    });\n}\n\npublic boolean keepItem(ItemStack item) {\n    return new RtagItem(item).getOptional("keepItem").or(false);\n}\n')),(0,r.kt)("p",null,"Y manejar los eventos ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerDeathEvent")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerRespawnEvent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private final Map<String, List<ItemStack>> savedItems = new HashMap<>();\n\n@EventHandler\npublic void onDeath(PlayerDeathEvent e) {\n    if (e.getKeepInventory()) {\n        return;\n    }\n\n    List<ItemStack> matches = new ArrayList<>();\n    e.getDrops().forEach(item -> {\n        if (keepItem(item)) {\n            matches.add(item);\n        }\n    });\n\n    if (matches.isEmpty()) {\n        return;\n    }\n\n    String name = e.getEntity().getName();\n    if (savedItems.containsKey(name)) {\n        savedItems.get(name).addAll(matches);\n    } else {\n        savedItems.put(name, matches);\n    }\n\n    e.getDrops().removeAll(matches);\n}\n\n@EventHandler\npublic void onRespawn(PlayerRespawnEvent e) {\n    String name = e.getPlayer().getName();\n    if (savedItems.containsKey(name)) {\n        e.getPlayer().getInventory().addItem(savedItems.get(name).toArray(new ItemStack[0]));\n        savedItems.remove(name);\n    }\n}\n")))}d.isMDXComponent=!0}}]);