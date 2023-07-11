"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[820],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>g});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?t.createElement(g,s(s({ref:a},d),{},{components:n})):t.createElement(g,s({ref:a},d))}));function g(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2793:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,title:"Info B\xe1sica",description:"Informaci\xf3n b\xe1sica para entender Rtag"},s=void 0,i={unversionedId:"rtag/basics",id:"rtag/basics",title:"Info B\xe1sica",description:"Informaci\xf3n b\xe1sica para entender Rtag",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/basics.md",sourceDirName:"rtag",slug:"/rtag/basics",permalink:"/es/rtag/basics",draft:!1,editUrl:"https://github.com/saicone/docs/blob/master/docs/rtag/basics.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1689095987,formattedLastUpdatedAt:"11 jul 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Info B\xe1sica",description:"Informaci\xf3n b\xe1sica para entender Rtag"},sidebar:"rtag",previous:{title:"Rtag",permalink:"/es/rtag/"},next:{title:"Estructura",permalink:"/es/rtag/structure"}},c={},l=[{value:"NMS",id:"nms",level:2},{value:"NBT",id:"nbt",level:2}],d={toc:l},u="wrapper";function p(e){let{components:a,...n}=e;return(0,o.kt)(u,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Si ya conoces conceptos como NBT y NMS te puedes saltar esta parte de la documentaci\xf3n, ya que solo muestra informaci\xf3n b\xe1sica sobre estas cosas.")),(0,o.kt)("p",null,"Para empezar a usar Rtag es debido conocer un poco sobre como funciona Minecraft y de esta manera tener una idea clara de como editar algunas cosas."),(0,o.kt)("h2",{id:"nms"},"NMS"),(0,o.kt)("p",null,'El acronimo "NMS" hace referencia a un package en el c\xf3digo de las versiones viejas de Bukkit, el cual estaba designado como "net.minecraft.server" seguido por la versi\xf3n actual del juego, dentro de esta ruta se encontraban las classes que trae el servidor de Minecraft original programado por los desarrolladores de Mojang, el cual Bukkit utiliza para funcionar.'),(0,o.kt)("p",null,'Las versiones m\xe1s recientes de Bukkit tienen cada una de las classes del servidor de Minecraft original en rutas respectivas seg\xfan su funcionamiento, por ejemplo "net.minecraft.world.level.World". Esto quiere decir que "NMS" perdi\xf3 su significado, pero se sigue usando popularmente para referirse al lugar donde est\xe1n las classes del servidor de Minecraft original.'),(0,o.kt)("p",null,"El NMS es conocido popularmente por usarse mediante ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/technical-resources/articles/java/javareflection.html"},"reflection"),", ya que Mojang cambia constantemente los nombres de los methods adem\xe1s de usar ",(0,o.kt)("a",{parentName:"p",href:"https://www.javatpoint.com/java-obfuscator"},"ofuscadores"),", as\xed que si desarrollas un plugin compatible con m\xfaltiples versiones, al querer usar cosas del servidor de minecraft original deber\xe1s preparte con el uso de reflection."),(0,o.kt)("h2",{id:"nbt"},"NBT"),(0,o.kt)("p",null,'Conocido por sus siglas en ingl\xe9s "Named Binary Tag", su traducci\xf3n directa al espa\xf1ol ser\xeda "Etiqueta Binaria Denominada", lo cual no significa mucho. Visto desde una manera simple el NBT se refiere a una forma de guardar datos (String, Integer, List.. etc) en objetos denominados por una key, estos objetos tienen la opci\xf3n de convertir los datos en bytes, por ejemplo un NBT simple ser\xeda un String "hola" guardado con la key "dato1", as\xed que luego para obtener ese dato solamente debes buscarlo por su key.'),(0,o.kt)("p",null,"El NBT es tan simple como un objeto com\xfan en Java, solo que trae opciones adicionales para el almacenamiento de datos complejos (Mundos, Items, Entidades)."),(0,o.kt)("p",null,"Las classes de NBT se encuentran dentro del NMS y hacen referencia a los objetos comunes de Java: NBTTagString, NBTTagInt, NBTTagLong, NBTTagList... etc. Cada .class haciendo referencia al tipo de dato que puede almacenar, pero el principal ser\xeda ",(0,o.kt)("strong",{parentName:"p"},"NBTTagCompound")," el cual hace referencia a un Map de Java y es la base para almacenar los NBT asociados con su respectiva key (como un map conformado por keys y values donde los values son otros NBT)."),(0,o.kt)("p",null,"Para facilitar el entendimiento de los NBTTagCompound, se sugiera pensar en estos como si fueran un archivo .yml donde cada cosa tiene su ubicaci\xf3n. Por ejemplo pensando que un NBTTagCompound es un Map y los datos que tiene almacenados tambi\xe9n son objetos normales quedar\xeda un archivo YAML as\xed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Esto ser\xeda un Map o NBTTagCompound el cual tiene valores dentro\npath:\n  # Esto ser\xeda un String o NBTTagString.\n  # La key ser\xeda "asd" mientras que la ruta completa ser\xeda "path" -> "asd"\n  asd: "Texto guardado"\n  # Integer o NBTTagInteger\n  numb: 123\n  # Inclusive otro Map o NBTTagCompound dentro\n  otherpath:\n    # La key es "deep" y se encuentra dentro del compound designado por la key "other path"\n    # La ruta entera de este objeto ser\xeda "path" -> "otherpath" -> "deep"\n    deep: "Otro texto"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"No es necesario conocer el funcionamiento del NBT a fondo ya que Rtag se encarga de convertir los NBT en datos normales (String, Integer, List.. etc) y viceversa, lo \xfanico importante ser\xeda el tema de las rutas para guardar y obtener datos.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"B\xe1sicamente todas las cosas de Minecraft que son almacenadas, son manejadas como un NBTTagCompound. Esto incluye mundos, \xedtems, entidades y hasta la propia data del jugador.")))}p.isMDXComponent=!0}}]);