"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[902],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,title:"RtagEditor",description:"El objeto principal para editar NBT f\xe1cilmente"},i=void 0,s={unversionedId:"rtag/usage/editor",id:"rtag/usage/editor",title:"RtagEditor",description:"El objeto principal para editar NBT f\xe1cilmente",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/usage/editor.md",sourceDirName:"rtag/usage",slug:"/rtag/usage/editor",permalink:"/es/rtag/usage/editor",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/usage/editor.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1692292343,formattedLastUpdatedAt:"17 ago 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"RtagEditor",description:"El objeto principal para editar NBT f\xe1cilmente"},sidebar:"rtag",previous:{title:"Usar Rtag",permalink:"/es/rtag/usage/"},next:{title:"RtagItem",permalink:"/es/rtag/usage/item"}},l={},d=[{value:"Editar",id:"editar",level:2},{value:"M\xe9todos simples",id:"m\xe9todos-simples",level:3},{value:"Colecciones",id:"colecciones",level:3},{value:"Revisar",id:"revisar",level:3},{value:"Enums",id:"enums",level:3},{value:"Cargar",id:"cargar",level:2},{value:"Guardar ediciones",id:"guardar-ediciones",level:3},{value:"Actualizar",id:"actualizar",level:2},{value:"Obtener cambios",id:"obtener-cambios",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Las instancias de ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagEditor")," (editor de tags) convierten un objeto de Bukkit en uno del servidor de Minecraft y proveen una forma de editar el tag (NBTTagCompound) dentro, usando una instancia de Rtag para manejar las operaciones con NBT."),(0,r.kt)("h2",{id:"editar"},"Editar"),(0,r.kt)("p",null,"Para entender el ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagEditor")," primero es necesario que conozcas la forma de editar el tag actual."),(0,r.kt)("h3",{id:"m\xe9todos-simples"},"M\xe9todos simples"),(0,r.kt)("p",null,"La instancia del editor simplifica cualquier edici\xf3n mediante una conversi\xf3n autom\xe1tica con el uso de una estructura de datos de arbol para obtener, establecer y remover objetos utilizando rutas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Cualquier instancia de RtagEditor (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\nString str = "My String";\n// Establecer en la ruta "my -> saved -> object"\ntag.set(str, "my", "saved", "object");\n\n// Obtener desde "my <- save <- object"\nString sameStr = tag.get("my", "saved", "object");\n\n// Eliminar desde la ruta\ntag.remove("my", "saved", "object");\n')),(0,r.kt)("p",null,"Probablemente notaste que no existe un establecimiento u obtenci\xf3n expl\xedcita como ",(0,r.kt)("inlineCode",{parentName:"p"},"setString")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"getString"),', eso es porque Rtag hace "magia" al convertir cualquier objeto NBT en un objeto normal de java.'),(0,r.kt)("p",null,"Tomar en cuenta que Rtag solo devuelve el objeto convertido, por s\xed mismo el no sabe si quieres un String, Integer, Float... etc, por lo que en operaci\xf3n normales de obtenci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"debes saber con seguridad que tipo objeto es el que est\xe1s obteniendo")," o de lo contrario el objeto obtenido ser\xe1 null luego de fallar su conversi\xf3n o sencillamente no existe un objeto en la ruta especificada."),(0,r.kt)("p",null,"Si no sabes cual tipo de objeto est\xe1s obteniendo, o la instancia de Rtag sencillamente no tiene una conversi\xf3n ya que los ",(0,r.kt)("a",{parentName:"p",href:"../../intro/#objetos-compatibles"},"objetos compatibles")," son limitados, puedes utilizar una obtenci\xf3n de ",(0,r.kt)("a",{parentName:"p",href:"../../feature/types/"},"objeto opcional")," la cual tiene una amplia variedad de conversiones para objetos adem\xe1s de revisiones para tus necesidades."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Cualquier instancia de RtagEditor (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\nString str = "123";\n// Establecer en la ruta "my -> saved -> object"\ntag.set(str, "my", "saved", "object");\n\n// Trata de obtener el objeto como String (cast) o devuelve "456" en caso de fallar\nString s = tag.getOptional("my", "saved", "object").or("456");\n\n// Lo mismo de arriba, pero el objeto opcional tratar\xe1 de convertir cualquier\n// tipo de objeto obtenido en un String\nString s = tag.getOptional("my", "saved", "object").asString("456");\n\n// Tambi\xe9n funciona para convertirlo en otros tipos de objetos\nint numValue = tag.getOptional("my", "saved", "object").asInt(-1); // -1 por defecto\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Revisa la ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../../feature/custom-objects/"},"gu\xeda de objetos custom"))," si quieres guardar cualquier clase de objeto serializable.")),(0,r.kt)("h3",{id:"colecciones"},"Colecciones"),(0,r.kt)("p",null,"Con Rtag es bastante f\xe1cil manejar listas de objetos, con el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," puedes agregar objetos dentro de las listas en las rutas establecidas, adem\xe1s que si la lista no existe se encargar\xe1 de crear una nueva."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Cualquier instancia de RtagEditor (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\n// Crear una lista en la ruta "my -> saved -> list"\ntag.set(new ArrayList(), "my", "saved", "list");\n\nbyte num = 3;\n// A\xf1adirlo en la lista\ntag.add(num, "my", "saved", "list");\n\n// Obtener la lista\nList<Byte> list = tag.get("my", "saved", "list");\n\n// Si no sabes que tipo de lista es, puedes hacer una conversi\xf3n con un objeto opcional\nList<Byte> list = tag.getOptional("my", "saved", "list").asList(OptionalType::asByte);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Tomar en cuenta que las listas de NBT aceptan cualquier tipo de objeto al estar vac\xedas, esto es debido a la regla de que ",(0,r.kt)("strong",{parentName:"p"},"el primer objeto define el tipo de NBT que tendr\xe1 la lista"),".")),(0,r.kt)("h3",{id:"revisar"},"Revisar"),(0,r.kt)("p",null,"Para revisar si cualquier tag existe o no dentro de la ruta establecida, puedes utilizar los m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"p"},"hasTag")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"hasNotTag"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Cualquier instancia de RtagEditor (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\n// Revisar SI existe\nboolean exist = tag.hasTag("my", "saved", "object");\n// Revisar si NO existe\nboolean notExist = tag.notHasTag("my", "saved", "object");\n')),(0,r.kt)("h3",{id:"enums"},"Enums"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Esta es una caracter\xedstica avanzada, puedes ignorar esta parte ya que es raramente utilizada.")),(0,r.kt)("p",null,"Las instancias de ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagEditor"),' pueden manejar Enums como si fueran "bit fields", al tener una forma f\xe1cil de leer y guardar cualquier tipo de objeto con un valor ordinal establecido.'),(0,r.kt)("p",null,"Por ejemplo, si ",(0,r.kt)("inlineCode",{parentName:"p"},"MyEnum")," tiene los valores ",(0,r.kt)("inlineCode",{parentName:"p"},"FIRE, GLOW, INVISIBLE")," puedes tener un ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," de esos valores en el mismo lugar guardados como un Integer empezando con la definici\xf3n de que el valor ordinal de ",(0,r.kt)("inlineCode",{parentName:"p"},"FIRE")," es ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", el de ",(0,r.kt)("inlineCode",{parentName:"p"},"GLOW")," es ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," y el de ",(0,r.kt)("inlineCode",{parentName:"p"},"INVISIBLE")," es ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Cualquier instancia de RtagEditor (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\n// Agregar los valores en un Set del enum en la ruta "my -> saved -> enum"\ntag.addEnum(MyEnum.FIRE, "my", "saved", "enum");\ntag.addEnum(MyEnum.INVISIBLE, "my", "saved", "enum");\n\n// Obtener el Set del enum\nSet<MyEnum> set = tag.getOptional("my", "saved", "enum").asEnumSet(MyEnum.class);\n')),(0,r.kt)("h2",{id:"cargar"},"Cargar"),(0,r.kt)("p",null,"Luego de editar el tag es necesario cargar los cambios dentro del objeto del servidor de Minecraft y el objeto de Bukkit."),(0,r.kt)("h3",{id:"guardar-ediciones"},"Guardar ediciones"),(0,r.kt)("p",null,"El m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," guarda los cambios (los carga dentro)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Cualquier instancia de RtagEditor (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\nString str = "My String";\n// Establecer en la ruta "my -> saved -> object"\ntag.set(str, "my", "saved", "object");\n\n// Cargarlo en el objeto proporcionado\ntag.load();\n')),(0,r.kt)("h2",{id:"actualizar"},"Actualizar"),(0,r.kt)("p",null,"Si quieres editar el objeto proporcionado (dependiendo la instancia de RtagEditor), es necesario actualizar el tag actual para seguirlo editando en la misma instancia del ",(0,r.kt)("inlineCode",{parentName:"p"},"RtagEditor"),"."),(0,r.kt)("h3",{id:"obtener-cambios"},"Obtener cambios"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cualquier instancia de RtagEditor (RtagItem, RtagEntity, RtagBlock)\nRtagEditor tag = ...;\n\n// <El objeto proporcionado fue editado (item, entidad o bloque)>\n\n// Actualizar el tag que se est\xe1 editando en el RtagEditor\ntag.update();\n")))}p.isMDXComponent=!0}}]);