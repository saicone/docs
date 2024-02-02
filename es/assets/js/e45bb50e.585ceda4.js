"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6189],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3,title:"Rutas funcionales",description:"Como manejar rutas con funciones"},i=void 0,u={unversionedId:"rtag/feature/functions",id:"rtag/feature/functions",title:"Rutas funcionales",description:"Como manejar rutas con funciones",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/feature/functions.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/functions",permalink:"/es/rtag/feature/functions",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/feature/functions.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706881391,formattedLastUpdatedAt:"2 feb 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Rutas funcionales",description:"Como manejar rutas con funciones"},sidebar:"rtag",previous:{title:"Objectos custom",permalink:"/es/rtag/feature/custom-objects"},next:{title:"Tag Stream",permalink:"/es/rtag/feature/stream"}},l={},s=[{value:"Como usarlo",id:"como-usarlo",level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Antes de continuar",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Esta es una caracter\xedstica avanzada, puedes ignorar esto ya que es raramente utilizado."),(0,r.kt)("p",{parentName:"admonition"},"Para entender esta p\xe1gina deber\xedas ver la informaci\xf3n sobre ",(0,r.kt)("a",{parentName:"p",href:"../../advanced/tags/"},"Objetos de Tag"),".")),(0,r.kt)("p",null,"Las rutas con una estructura de datos de \xe1rbol utilizadas en Rtag son bastante simples, as\xed que hay una forma m\xe1s compleja de manejar las ediciones mediante funciones que aceptan cualquier objeto de ",(0,r.kt)("inlineCode",{parentName:"p"},"NBTTagCompound")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"NBTTagList")," mientras la ruta es resuelta."),(0,r.kt)("h2",{id:"como-usarlo"},"Como usarlo"),(0,r.kt)("p",null,"Por ejemplo, supongamos que tenemos la siguiente data en un NBT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'main:\n  list:\n    - id: EPIC\n      value: 40\n    - id: RARE\n      value: 30\n    - id: LEGENDARY\n      value: 50\nmy:\n  custom:\n    list:\n      - 15\n      - 40\n      - 39\n  path: "Hello"\n')),(0,r.kt)("p",null,"Es imposible para una estructura de datos de \xe1rbol obtener el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," o el ID ",(0,r.kt)("inlineCode",{parentName:"p"},"EPIC"),", esto debido a que est\xe1 dentro de una lista de objetos complejos."),(0,r.kt)("p",null,"En un caso normal deber\xedas obtener la lista entera e iterar sobre esta para revisar cual valor tiene ",(0,r.kt)("inlineCode",{parentName:"p"},"EPIC")," en el ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", lo cual gastar\xeda muchos recursos debido a que Rtag convetir\xe1 la lista entera en objetos normales incluyendo valores que no se utilizar\xe1n en la operaci\xf3n."),(0,r.kt)("p",null,"Para resolver eso puedes utilizar rutas funcionales al proveer una funci\xf3n que itera el ",(0,r.kt)("inlineCode",{parentName:"p"},"NBTTagList")," directamente."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Preparar la funci\xf3n\nThrowableFunction<Object, Object> function = nbtList -> {\n    for (Object nbtCompound : TagList.getValue(nbtList)) {\n        Object id = TagCompound.get(nbtCompound, "id");\n        if ("EPIC".equals(TagBase.getValue(id))) {\n            return nbtCompound;\n        }\n    }\n    return null;\n};\n\n\n// --- Usando una instancia de Rtag\nRtag rtag = ...;\nObject compound = ...;\n// Obtener la ruta del \'value\' para el objeto con el id `EPIC`\nint value = rtag.get(compound, "main", "list", function, "value");\n// O reemplazar el \'value\'\nrtag.set(compound, 45, "main", "list", function, "value");\n\n\n// --- Usando una instancia de RtagEditor\nRtagEditor tag = ...;\n// Obtener la ruta del \'value\' para el objeto con el id `EPIC`\nint value = tag.get("main", "list", function, "value");\n// O reemplazar el \'value\'\ntag.set(45, "main", "list", function, "value");\n')),(0,r.kt)("p",null,"Si quieres obtener el ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," desde objetos cuyo id es ",(0,r.kt)("inlineCode",{parentName:"p"},"RARE")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGENDARY")," puedes registrar una funci\xf3n proporcionada con un m\xe9todo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private ThrowableFunction<Object, Object> getFunction(String type) {\n    return nbtList -> {\n        for (Object nbtCompound : TagList.getValue(nbtList)) {\n            Object id = TagCompound.get(nbtCompound, "id");\n            if (type.equals(TagBase.getValue(id))) {\n                return nbtCompound;\n            }\n        }\n        return null;\n    };\n}\n')),(0,r.kt)("p",null,"Y usarla as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// --- Usando una instancia de Rtag\nRtag rtag = ...;\nObject compound = ...;\n// Obtener la ruta del \'value\' para el objeto con el id `RARE`\nint value = rtag.get(compound, "main", "list", getFunction("RARE"), "value");\n// O reemplazar el \'value\'\nrtag.set(compound, 35, "main", "list", getFunction("RARE"), "value");\n\n\n// --- Usando una instancia de RtagEditor\nRtagEditor tag = ...;\n// Obtener la ruta del \'value\' para el objeto con el id `LEGENDARY`\nint value = tag.get("main", "list", getFunction("LEGENDARY"), "value");\n// O reemplazar el \'value\'\ntag.set(55, "main", "list", getFunction("LEGENDARY"), "value");\n')))}d.isMDXComponent=!0}}]);