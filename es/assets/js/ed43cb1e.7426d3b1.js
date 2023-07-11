"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[281],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6,title:"Ejemplos",description:"Como utilizar Rtag"},l=void 0,i={unversionedId:"rtag/example",id:"rtag/example",title:"Ejemplos",description:"Como utilizar Rtag",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/example.md",sourceDirName:"rtag",slug:"/rtag/example",permalink:"/es/rtag/example",draft:!1,editUrl:"https://github.com/saicone/docs/blob/master/docs/rtag/example.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1689095987,formattedLastUpdatedAt:"11 jul 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Ejemplos",description:"Como utilizar Rtag"},sidebar:"rtag",previous:{title:"Extra",permalink:"/es/rtag/extra"}},s={},c=[{value:"ObjectTag",id:"objecttag",level:2},{value:"Item",id:"item",level:2},{value:"Entity",id:"entity",level:2},{value:"Block",id:"block",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rtag se puede utilizar de diversas formas, en esta p\xe1gina ver\xe1s algunas."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Para entender de una manera m\xe1s amplia los tags que contiene cada cosa dentro de Minecraft se sugiere visitar sus p\xe1ginas respectivas en la wiki del juego, algunas como:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minecraft.fandom.com/wiki/Entity_format"},"Entidades")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minecraft.fandom.com/wiki/Player.dat_format#Item_structure"},"Items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minecraft.fandom.com/wiki/Chunk_format#Block_entity_format"},"Bloques")))),(0,r.kt)("h2",{id:"objecttag"},"ObjectTag"),(0,r.kt)("p",null,"La forma m\xe1s simple de conocer Rtag es aprendiendo a usar las instancias del RtagEditor, las cuales tienen m\xe9todos para editar de manera f\xe1cil y simple objetos como items, entidades y bloques."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// -- Crear un editor de tag\n\n// Con un item\nRtagItem tag = new RtagItem(item);\n// Con una entidad\nRtagEntity tag = new RtagEntity(entity);\n// Con un bloque\nRtagBlock tag = new RtagBlock(block);\n\n\n// -- Editar el tag del objeto\n\n// - Introducir valores\n// value = "Custom Value"\n// ruta = "deep" -> "path"\ntag.set("Custom Value", "deep", "path");\ntag.set(40, "somekey");\ntag.set("Item name!", "display", "name");\n\n// Incluso puedes a\xf1adir listas\ntag.set(new ArrayList(), "list", "path");\n// Y a\xf1adir cosas dentro de las listas en la ruta designada\ntag.add((short) 3, "list", "path");\n// O reemplazar valores de una isla existente\ntag.set((short) 5, "list", "path", 0); // index 0\n\n// - Obtener valores\n// Obtener el valor que est\xe1 en la ruta "deep" -> "path"\nString value = tag.get("deep", "path");\nString name = tag.get("display", "name");\n\n// Obtener un valor de manera segura\n// Valor en la ruta "somekey", en caso de que no exista se obtendra -1\nint intValue = tag.getOptional("somekey").or(-1);\n\n// Obtener listas completas\nList<Short> list = tag.get("list", "path");\n// Obtener un valor de una isla en cierto index\nshort listValue = tag.get("list", "path", 0);\n\n// Incluso puedes obtener el tag entero del objeto en forma de Map\nMap<String, Object> map = tag.get();\n\n\n// -- Cargar los cambios dentro del objeto\n\n// Cargar los cambios en el objeto original\ntag.load();\n\n// El RtagItem tiene la opci\xf3n de copiar el item y cargar los datos dentro de la copia\nItemStack item = tag.loadCopy();\n')),(0,r.kt)("h2",{id:"item"},"Item"),(0,r.kt)("p",null,"Aqu\xed ver\xe1s un ejemplo de como darle un nombre custom a un item y hacerlo irrompible usando Rtag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagItem tag = new RtagItem(new ItemStack(Material.DIAMOND_SWORD));\n\n// Value = "Nombre custom"\n// Ruta = "display" -> "name"\ntag.set("Nombre custom", "display", "name");\n\n// Hacerlo irrompible\ntag.set(true, "Unbreakable");\n\n// Cargar los cambios\ntag.load();\n')),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"Aqu\xed ver\xe1s un ejemplo de como darle el efecto de brillo y levitaci\xf3n a una entidad usando Rtag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagEntity tag = new RtagEntity(entity);\n\n// Hacer que brille\ntag.set(true, "Glowing");\n\n// En caso de que sea un mob o jugador\n// Darle le efecto de levitaci\xf3n\nMap<String, Object> effect = Map.of(\n    "Ambient", false,\n    "Amplifier", false,\n    "Duration", 200, // 10 segundos = 200 ticks\n    "Id", (byte) 25,\n    "ShowIcon", false,\n    "ShowParticles", true,\n    );\ntag.add(effect, "ActiveEffects");\n\n// Cargar los cambios\ntag.load();\n')),(0,r.kt)("h2",{id:"block"},"Block"),(0,r.kt)("p",null,"Aqu\xed ver\xe1s un ejemplo de como hacer que un cofre tenga un nombre custom adem\xe1s de una restricci\xf3n al tratar de abrirlo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagBlock tag = new RtagBlock(block);\n\n// Nombre custom\ntag.set("Nombre custom al abrir el cofre", "CustomName");\n// El cofre solo se abrir\xe1 si el jugador tiene en su mano\n// un item que contenga en el nombre "llave 123"\ntag.set("llave 123", "Lock");\n\n// Cargar los cambios\ntag.load();\n')))}d.isMDXComponent=!0}}]);