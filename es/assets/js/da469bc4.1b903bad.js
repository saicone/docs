"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[391],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=n,g=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return t?r.createElement(g,i(i({ref:a},c),{},{components:t})):r.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2755:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_position:2,title:"Guardar data de items",description:"Como guardar items en bases de datos o archivos de configuraci\xf3n"},i=void 0,s={unversionedId:"rtag/guides/save-items",id:"rtag/guides/save-items",title:"Guardar data de items",description:"Como guardar items en bases de datos o archivos de configuraci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/guides/save-items.md",sourceDirName:"rtag/guides",slug:"/rtag/guides/save-items",permalink:"/es/rtag/guides/save-items",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/guides/save-items.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1706195441,formattedLastUpdatedAt:"25 ene 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Guardar data de items",description:"Como guardar items en bases de datos o archivos de configuraci\xf3n"},sidebar:"rtag",previous:{title:"Items custom",permalink:"/es/rtag/guides/custom-items"},next:{title:"Mobs custom",permalink:"/es/rtag/guides/custom-mobs"}},l={},d=[{value:"Guardar en base de datos",id:"guardar-en-base-de-datos",level:2},{value:"Guardar como configurable",id:"guardar-como-configurable",level:2}],c={toc:d},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Al manejar los items probablemente has experimentado problemas al momento de guardarlos, eso es debido a que los items no est\xe1n hechos para ser utilizados como objetos de una base de datos o archivos configurables en Minecraft vanilla."),(0,n.kt)("p",null,"As\xed que Rtag ofrece una forma f\xe1cil de manejar items en diferentes tipos de data utilizando la instancia de ",(0,n.kt)("a",{parentName:"p",href:"../../feature/stream/#itemtagstream"},"item stream"),", manteniendo compatibilidad a trav\xe9s de versiones a diferencia del serializador de Bukkit que no puede convertir el nuevo formato de los items en sus versiones viejas."),(0,n.kt)("h2",{id:"guardar-en-base-de-datos"},"Guardar en base de datos"),(0,n.kt)("p",null,"Por ejemplo: tienes alg\xfan sistema de database en tu plugin como MySQL o archivos ",(0,n.kt)("inlineCode",{parentName:"p"},".json"),", as\xed que necesitas guardar los items de una manera eficiente."),(0,n.kt)("p",null,"Al convertir los items en el formato de Base64 puedes tener toda la data de los items comprimida para ser utilizada cuando sea solicitada."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"List<ItemStack> items = ...;\n\n// Comprimir\nString data = ItemTagStream.INSTANCE.listToBase64(items);\n\n// [ Para luego guardar la data en la base de datos ]\n")),(0,n.kt)("p",null,"Ahora convertir la data guardada en el formato original"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Obtener desde la base de datos\nString data = ...;\n\nList<ItemStack> sameItems = ItemTagStream.INSTANCE.listFromBase64(base64);\n")),(0,n.kt)("h2",{id:"guardar-como-configurable"},"Guardar como configurable"),(0,n.kt)("p",null,"Para permitir que los usuarios vean los items como un archivo configurable (y configurarlo sin problema) puedes utilizar la conversi\xf3n de map legible para convertir el nombre y lore del item como un string con color env\xe9s del formato de componente de chat, y as\xed convertir ese ",(0,n.kt)("inlineCode",{parentName:"p"},"Map")," en un objeto configurable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convertir\nMap<String, Object> map = ItemTagStream.INSTANCE.toReadableMap(item);\n\n// [ Luego guardarlo en una configuraci\xf3n ]\n")),(0,n.kt)("p",null,"Ahora convertir el ",(0,n.kt)("inlineCode",{parentName:"p"},"Map")," en el item original"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Obtener desde la configuraci\xf3n\nMap<String, Object> map = ...;\n\nItemStack item = ItemTagStream.INSTANCE.fromReadableMap(map);\n")))}m.isMDXComponent=!0}}]);