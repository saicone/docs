"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1,title:"Objetos opcionales",description:"Informaci\xf3n sobre el OptionalType y sus classes principales"},i=void 0,l={unversionedId:"rtag/feature/types",id:"rtag/feature/types",title:"Objetos opcionales",description:"Informaci\xf3n sobre el OptionalType y sus classes principales",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/feature/types.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/types",permalink:"/es/rtag/feature/types",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/feature/types.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1721275328,formattedLastUpdatedAt:"18 jul 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Objetos opcionales",description:"Informaci\xf3n sobre el OptionalType y sus classes principales"},sidebar:"rtag",previous:{title:"Caracter\xedsticas",permalink:"/es/rtag/feature/"},next:{title:"Objectos custom",permalink:"/es/rtag/feature/custom-objects"}},p={},s=[{value:"Revisi\xf3n de tipo",id:"revisi\xf3n-de-tipo",level:2},{value:"Conversi\xf3n",id:"conversi\xf3n",level:2},{value:"Conversi\xf3n \xfanica",id:"conversi\xf3n-\xfanica",level:3},{value:"Conversi\xf3n m\xfaltiple",id:"conversi\xf3n-m\xfaltiple",level:3},{value:"Conversi\xf3n custom",id:"conversi\xf3n-custom",level:3},{value:"Iterator",id:"iterator",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"La librer\xeda Rtag prove\xe9 el class OptionalType, cuya instancia permite manejar de manera flexible los tags mediante diferentes tipos de objetos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Crear directamente con cualquier tipo de objeto\nOptionalType type = OptionalType.of("123");\n\n// --- Obtenerlo desde una instancia de Rtag\nRtag rtag = ...;\nObject compount = ...;\nOptionalType type = rtag.getOptional(compound, "my", "object", "path");\n\n\n// --- Obtenerlo desde una instancia de RtagEditor\nRtagEditor tag = ...;\nOptionalType type = tag.getOptional("my", "object", "path");\n')),(0,r.kt)("h2",{id:"revisi\xf3n-de-tipo"},"Revisi\xf3n de tipo"),(0,r.kt)("p",null,"Obtener el valor del OptionalType como si fuera el tipo de dato que quieres o proveer un objeto por defecto."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"OptionalType type = ...;\n\n// Obtener como el objeto requerido, este m\xe9todo asume que sabes el tipo del dato\n// Si el valor no es del tipo que requieres, se devolver\xe1 null\nString string = type.value();\n// Especificar el class (opcional)\nString string = type.value(String.class);\n\n// Obtener como el objeto requerido o especificar un objeto por defecto\nint num = type.or(-1); // default: -1\n// Especificar el class (opcional)\nint num = type.or(int.class, -1);\n")),(0,r.kt)("h2",{id:"conversi\xf3n"},"Conversi\xf3n"),(0,r.kt)("p",null,"Convertir el valor del ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalType")," en diferentes tipos de objetos, bastante \xfatil si no sabes el tipo de dato es o simplemente requieres convertir cualquier objeto, por ejemplo obtener un ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," como si fuera un ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer")," al proveer un valor por defecto en caso de fallar en la conversi\xf3n."),(0,r.kt)("h3",{id:"conversi\xf3n-\xfanica"},"Conversi\xf3n \xfanica"),(0,r.kt)("p",null,"Por defecto el ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalType")," tiene las siguientes conversiones de objetos \xfanicos para obtener el valor como:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object"),(0,r.kt)("li",{parentName:"ul"},"String - Convertir cualquier objeto no nulo en ",(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},"Char - Extraer el primer car\xe1cter de cualquier objeto no nulo convertido en ",(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},"Boolean - Revisar si el objeto no nulo convertido en ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," es ",(0,r.kt)("inlineCode",{parentName:"li"},'"true"')," o ",(0,r.kt)("inlineCode",{parentName:"li"},'"false"')," (",(0,r.kt)("inlineCode",{parentName:"li"},'"1"')," o ",(0,r.kt)("inlineCode",{parentName:"li"},'"0"')," | ",(0,r.kt)("inlineCode",{parentName:"li"},'"yes"')," o ",(0,r.kt)("inlineCode",{parentName:"li"},'"no"')," | ",(0,r.kt)("inlineCode",{parentName:"li"},'"on"')," o ",(0,r.kt)("inlineCode",{parentName:"li"},'"off"')," | ",(0,r.kt)("inlineCode",{parentName:"li"},'"y"')," o ",(0,r.kt)("inlineCode",{parentName:"li"},'"n"'),")"),(0,r.kt)("li",{parentName:"ul"},"Byte"),(0,r.kt)("li",{parentName:"ul"},"Short"),(0,r.kt)("li",{parentName:"ul"},"Integer (Int)"),(0,r.kt)("li",{parentName:"ul"},"Float"),(0,r.kt)("li",{parentName:"ul"},"Long"),(0,r.kt)("li",{parentName:"ul"},"Double"),(0,r.kt)("li",{parentName:"ul"},"UUID - Convertir un ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," o un ",(0,r.kt)("inlineCode",{parentName:"li"},"int[]")," de 4 valores como un ",(0,r.kt)("inlineCode",{parentName:"li"},"UUID")),(0,r.kt)("li",{parentName:"ul"},"Cualquier tipo de objeto serializable - Utilizando Gson")),(0,r.kt)("p",null,"Y solo si el valor es un bit field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set<? extends Enum>")," - Convertir al proveer un class de Enum."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set<E>")," - Convertir al proveer los valores ordinales de un tipo de elemento mediante el uso de una funci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set<Integer>")," - Convertir al proveer el m\xe1ximo valor ordinal.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'OptionalType type = OptionalType.of("1");\n\n// Convertir en objetos normales\nString string = type.asString();\nint num = type.asInt(-1); // por defecto: -1\nboolean bool = type.asBoolean(); // devuelve true\n\n// Convertir en un objeto serializable como MyObject\nMyObject myObj = type.getAs(MyObject.class);\n')),(0,r.kt)("admonition",{title:"Compatibilidad con Boolean",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si el tipo de dato requerido es una instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," y el valor actual es un ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),", ser\xe1 convertido en ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," al ser ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," al ser ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("h3",{id:"conversi\xf3n-m\xfaltiple"},"Conversi\xf3n m\xfaltiple"),(0,r.kt)("p",null,"La instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalType"),' permite convertir cualquier tipo de valor en uno "coleccionable" (Collection o Array), al iterar sobre el y nunca devolver un valor nulo del tipo de colecci\xf3n o array requerido.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'OptionalType type = OptionalType.of(List.of("1", "value2", "2", "3", "3"));\n\n// Convertir a cualquier tipo de array (debes proveer una muestra del array)\n// Resultado: ["1", "value2", "2", "3", "3"]\nString[] array = type.asArray(new String[0], OptionalType::asString);\n\n// Convertir en cualquier tipo de lista\n// Resultado: [1, 2, 3, 3]\nList<Short> list = type.asList(OptionalType::asShort);\n\n// Convertir en cualquier tipo de colecci\xf3n (debes proveer el Collection para agregarle los valores)\n// Resultado: [1, 2, 3]\nSet<Integer> set = type.asCollection(new HashSet(), OptionalType::asInt);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Tomar en cuenta que la conversi\xf3n de m\xfaltiples objetos no hace "magia" para convertir los objetos, est\xe1 limitada a convertirlos seg\xfan la funci\xf3n proporcionada, y cualquier valor que no pueda ser convertido ser\xe1 ignorado.')),(0,r.kt)("admonition",{title:"Conversi\xf3n de objeto \xfanico",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Si quieres que la instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalType")," sea un objeto \xfanico solamente utiliza el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalType#single()"),", si el tipo de objeto actual es una colecci\xf3n o array el primer valor ser\xe1 utilizado ",(0,r.kt)("strong",{parentName:"p"},"de manera recursiva"),"."),(0,r.kt)("p",{parentName:"admonition"},'Para tener solo "el primer valor" utiliza en cambio el m\xe9todo ',(0,r.kt)("inlineCode",{parentName:"p"},"OptionalType#first()"),".")),(0,r.kt)("h3",{id:"conversi\xf3n-custom"},"Conversi\xf3n custom"),(0,r.kt)("p",null,"Adem\xe1s puedes implementar tu propia funci\xf3n de conversi\xf3n con diferentes tipos de m\xe9todos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"OptionalType type = ...;\n\n// Convertir simplemente en MyObject\nMyObject myObj = type.by(value -> {\n    // Conversi\xf3n\n});\n")),(0,r.kt)("p",null,"Regresar un valor por defecto si:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El valor actual es ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"La conversi\xf3n produce una excepci\xf3n"),(0,r.kt)("li",{parentName:"ul"},"La conversi\xf3n devuelve ",(0,r.kt)("inlineCode",{parentName:"li"},"null"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"MyObject def = ...;\nMyObject myObj = type.by(value -> {\n    // Conversi\xf3n\n}, def);\n")),(0,r.kt)("p",null,"Proporcionar un class para revisar si el valor actual es una instancia del tipo de objeto requerido y de esta manera evitar la funci\xf3n de conversi\xf3n (por ser redundante)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"MyObject def = ...;\nMyObject myObj = type.by(MyObject.class, value -> {\n    // Conversi\xf3n\n}, def);\n")),(0,r.kt)("h2",{id:"iterator"},"Iterator"),(0,r.kt)("p",null,"La instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalType")," se extiende del ",(0,r.kt)("inlineCode",{parentName:"p"},"IterableType"),", el cual permite iterar sobre el tipo de valor:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Array: Iterar sobre los valores del array"),(0,r.kt)("li",{parentName:"ul"},"Colecci\xf3n: Iterar sobre los valores de la colecci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Objeto \xfanico: Iterar 1 vez sobre el \xfanico valor dentro del ",(0,r.kt)("inlineCode",{parentName:"li"},"OptionalType"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"OptionalType type = ...;\n\nfor (Object o : type) {\n    // Valores del Array|Collection o simplemente el objeto \xfanico\n}\n\ntype.forEach(o -> {\n    // Valores del Array|Collection o simplemente el objeto \xfanico\n});\n")))}d.isMDXComponent=!0}}]);