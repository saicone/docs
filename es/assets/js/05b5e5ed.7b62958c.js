"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1083],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2,title:"RtagItem",description:"Editar el NBT de los items"},o=void 0,l={unversionedId:"rtag/usage/item",id:"rtag/usage/item",title:"RtagItem",description:"Editar el NBT de los items",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/usage/item.md",sourceDirName:"rtag/usage",slug:"/rtag/usage/item",permalink:"/es/rtag/usage/item",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/usage/item.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"31 ene 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"RtagItem",description:"Editar el NBT de los items"},sidebar:"rtag",previous:{title:"RtagEditor",permalink:"/es/rtag/usage/editor"},next:{title:"RtagEntity",permalink:"/es/rtag/usage/entity"}},s={},d=[{value:"Crear",id:"crear",level:2},{value:"Instancia",id:"instancia",level:3},{value:"M\xe9todo",id:"m\xe9todo",level:3},{value:"Funci\xf3n",id:"funci\xf3n",level:3},{value:"Editar",id:"editar",level:2},{value:"Funci\xf3n",id:"funci\xf3n-1",level:3},{value:"M\xe9todos de instancia",id:"m\xe9todos-de-instancia",level:3},{value:"Cargar",id:"cargar",level:2},{value:"Obtener una copia",id:"obtener-una-copia",level:3}],m={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Antes de continuar",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Para entender esta p\xe1gina primero debes ver ",(0,r.kt)("a",{parentName:"p",href:"../../usage/editor/"},"la gu\xeda de RtagEditor"),"."),(0,r.kt)("p",{parentName:"admonition"},"Para entender sobre los tags comunes en los items se sugiere visitar la ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Player.dat_format#Item_structure"},"p\xe1gina de la wiki de Minecraft"),".")),(0,r.kt)("p",null,"El ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagItem")," es una instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagEditor"),", as\xed que utiliza los mismos m\xe9todos para editar, cargar y actualizar los cambios como un editor de tags."),(0,r.kt)("h2",{id:"crear"},"Crear"),(0,r.kt)("p",null,"Existen multiples maneras de crear una instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagItem"),"."),(0,r.kt)("h3",{id:"instancia"},"Instancia"),(0,r.kt)("p",null,"Usando un constructor simple que acepta cualquier tipo de ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\nRtagItem tag = new RtagItem(item);\n")),(0,r.kt)("p",null,"O especificando la instancia de Rtag que se utilizar\xe1 para manejar el NBT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\nRtag rtag = ...;\n\nRtagItem tag = new RtagItem(rtag, item);\n")),(0,r.kt)("h3",{id:"m\xe9todo"},"M\xe9todo"),(0,r.kt)("p",null,"Usando un m\xe9todo simple que acepta cualquier tipo de ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\nRtagItem tag = RtagItem.of(item);\n")),(0,r.kt)("p",null,"O especificando la instancia de Rtag que se utilizar\xe1 para manejar el NBT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\nRtag rtag = ...;\n\nRtagItem tag = RtagItem.of(rtag, item);\n")),(0,r.kt)("h3",{id:"funci\xf3n"},"Funci\xf3n"),(0,r.kt)("p",null,"Usando funciones es la forma m\xe1s f\xe1cil de editar NBT manejando el ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagItem"),"."),(0,r.kt)("p",null,"Puedes editar el ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack")," proporcionado sin necesidad de reemplazarlo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = ...;\n\n// Editar el item\nRtagItem.edit(item, tag -> {\n    tag.set(123, "path");\n});\n\n// Especificar la instancia de Rtag\nRtag rtag = ...;\nRtagItem.edit(rtag, item, tag -> {\n    tag.set(123, "path");\n});\n')),(0,r.kt)("p",null,"Tomar en cuenta que el m\xe9todo devuelve el propio ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack")," con los cambios cargados."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = ...;\n\n// Editar el item\nItemStack sameItem = RtagItem.edit(item, tag -> {\n    tag.set(123, "path");\n});\n\n// Especificar la instancia de Rtag\nRtag rtag = ...;\nItemStack sameItem = RtagItem.edit(rtag, item, tag -> {\n    tag.set(123, "path");\n});\n')),(0,r.kt)("p",null,"Adem\xe1s puedes devolver cualquier tipo de objeto especificado en la funci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = ...;\n\n// Obtener una copia del item con los cambios cargados\nItemStack itemWithChanges = RtagItem.edit(item, tag -> {\n    tag.set(123, "path");\n    return tag.loadCopy();\n});\n\n// Obtenerlo como quieras desde la instancia del RtagEditor\nint number = RtagItem.edit(item, tag -> {\n    return tag.get("path");\n});\n')),(0,r.kt)("h2",{id:"editar"},"Editar"),(0,r.kt)("p",null,"Existen algunos m\xe9todos dentro de ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagItem")," que el ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagEditor")," no tiene."),(0,r.kt)("h3",{id:"funci\xf3n-1"},"Funci\xf3n"),(0,r.kt)("p",null,"Como las funciones explicadas anteriormente, el ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagItem")," actual puede se editado utilizando una funci\xf3n que devuelve su propia instancia."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagItem tag = ...;\n\ntag.edit(tag -> {\n    tag.set(123, "path");\n    tag.set("Hello", "greeting");\n});\n')),(0,r.kt)("h3",{id:"m\xe9todos-de-instancia"},"M\xe9todos de instancia"),(0,r.kt)("p",null,"Existen algunos m\xe9todos ",(0,r.kt)("strong",{parentName:"p"},"f\xe1ciles de utilizar")," para editar ",(0,r.kt)("strong",{parentName:"p"},"tags conocidos del item")," de una manera simple, teniendo soporte para una amplia variedad de versiones de Minecraft."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flags"),": Mejor conocidas como HideFlags, en el RtagItem las flags son manejadas por sus valores ordinales."),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Enchantments - Encantamientos"),(0,r.kt)("li",{parentName:"ol"},"AttributeModifiers - Modificadores (como el da\xf1o)"),(0,r.kt)("li",{parentName:"ol"},"Unbreakable - Estado de irrompibilidad"),(0,r.kt)("li",{parentName:"ol"},"CanDestroy - Informaci\xf3n sobre posibilidad de romper algo"),(0,r.kt)("li",{parentName:"ol"},"CanPlaceOn - Informaci\xf3n sobre posibilidad de colocarse en alg\xfan lugar"),(0,r.kt)("li",{parentName:"ol"},"Other information - Encantamientos en libros, efectos de poci\xf3n, generaci\xf3n, autor del libro, tipo de explosi\xf3n y efectos de fuego artificial."),(0,r.kt)("li",{parentName:"ol"},"Dyed - Tintado del item"),(0,r.kt)("li",{parentName:"ol"},"Palette information - El trim de las armaduras")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.addHideFlags(2, 4, 6);\n\nboolean bool = tag.hasHideFlags(2, 6); // devuelve true\n\ntag.removeHideFlags(6);\n\ntag.setHideFlags(4);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Encantamientos"),": El RtagItem tiene soporte para cualquier encantamiento, ya sea manejado por el enum de ",(0,r.kt)("inlineCode",{parentName:"p"},"Enchantment"),", el nombre en ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," o el id como un ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," en cualquier versi\xf3n de Minecraft compatible con Rtag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagItem tag = ...;\n\ntag.addEnchantment("Mending", 1);\n\nboolean bool = tag.hasEnchantment(70); // Devuelve true porque el ID del Mending es 70\n// Lo mismo de arriba pero utilizando el nombre del encantamiento\nboolean bool = tag.hasEnchantment("Mending");\n\n// Tambi\xe9n puedes utilizar el enum Enchantment de Bukkit correctamente\ntag.removeEnchantment(Enchantment.MENDING);\n\ntag.addEnchantment("Mending", 1);\n\nint level = tag.getEnchantmentLevel("Mending");\n\n// Obtener todos los encantamientos como un Map\nMap<EnchantmentTag, Integer> enchants = tag.getEnchantments();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Irrompibilidad"),": Manejar el estado de irrompibilidad del item (fue agregado en la versi\xf3n 1.7 de Minecraft, pero solo puede ser editado con Bukkit desde la versi\xf3n 1.11)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.setUnbreakable(true);\n\nboolean bool = tag.isUnbreakable();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CustomModelData"),": Editar el custom model data introducido en la versi\xf3n 1.14 desde cualquier versi\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.setCustomModelData(40);\n\nint model = tag.getCustomModelData();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Costo de reparaci\xf3n"),": Editar el costo de reparaci\xf3n del item en el yunque."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.setRepairCost(10);\n\nint cost = tag.getRepairCost();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Serializaci\xf3n"),": Arreglar cualquier item mal serializado en Bukkit 1.14 o superior."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"En Minecraft 1.14, los strings del lore del item fueron movidos a utilizar el formato de ",(0,r.kt)("a",{parentName:"p",href:"../../feature/chat-component/"},"componente de chat"),", as\xed que los items serializados en Bukkit de alguna forma no pueden ser comparados con otros items utilizando el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack#isSimilar()")," ya que el componente de chat del lore del item serializado no contiene varios tags sin utilizar.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.fixSerialization();\n")),(0,r.kt)("h2",{id:"cargar"},"Cargar"),(0,r.kt)("p",null,"Los cambios realizados en el ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagItem")," pueden ser cargados de formas diferentes a diferencia del ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagEditor"),"."),(0,r.kt)("h3",{id:"obtener-una-copia"},"Obtener una copia"),(0,r.kt)("p",null,"Env\xe9s de cargar los cambios en el ItemStack proporcionado, puedes crear una copia del item con los cambios cargados."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack original = ...;\n\n// Crear el editor\nRtagItem tag = new RtagItem(original);\n\n// Editar el tag\ntag.set(123, "path");\n\n// Obtener una copia del item con los cambios cargados\nItemStan newItem = tag.loadCopy();\n')))}c.isMDXComponent=!0}}]);