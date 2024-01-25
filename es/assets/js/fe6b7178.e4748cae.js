"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,title:"Objectos custom",description:"Como guardar y obtener objetos custom con Rtag"},i=void 0,s={unversionedId:"rtag/feature/custom-objects",id:"rtag/feature/custom-objects",title:"Objectos custom",description:"Como guardar y obtener objetos custom con Rtag",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/feature/custom-objects.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/custom-objects",permalink:"/es/rtag/feature/custom-objects",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/feature/custom-objects.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1706195441,formattedLastUpdatedAt:"25 ene 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Objectos custom",description:"Como guardar y obtener objetos custom con Rtag"},sidebar:"rtag",previous:{title:"Objetos opcionales",permalink:"/es/rtag/feature/types"},next:{title:"Rutas funcionales",permalink:"/es/rtag/feature/functions"}},l={},u=[{value:"Serializador Gson",id:"serializador-gson",level:2},{value:"Registro en Rtag",id:"registro-en-rtag",level:2},{value:"Ejemplo",id:"ejemplo",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Con Rtag puedes establecer objetos custom como NBT y obtenerlos seg\xfan el tipo de objeto requerido, dependiendo en tus necesdiades existen diferentes opciones para (de)serializar objetos."),(0,r.kt)("h2",{id:"serializador-gson"},"Serializador Gson"),(0,r.kt)("p",null,"Al usar la librer\xeda Gson dentro del c\xf3digo de Bukkit, es posible (de)serializar objetos mediante el siguiente proceso:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Serializer (establecer)"),": Objeto custom -> String en Json -> Map -> NBTTagCompound"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deserializer (obtener)"),": NBTTagCompound -> Map -> String en Json -> Objeto custom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Crear tu objeto custom\nMyObject myObj = ...;\n\n// --- Obtenerlo desde una instancia de Rtag\nRtag rtag = ...;\nObject compount = ...;\n// Establecer en "my -> object -> path"\nrtag.set(compound, myObj, "my", "object", "path");\n// Obtener desde "my <- object <- path"\nMyObject sameObj = rtag.getOptional(compount, "my", "object", "path").as(MyObject.class);\n\n\n// --- Obtenerlo desde una instancia de RtagEditor\nRtagEditor tag = ...;\n// Establecer en "my -> object -> path"\ntag.set(myObj, "my", "object", "path");\n// Obtener desde "my <- object <- path"\nMyObject sameObj = tag.getOptional("my", "object", "path").as(MyObject.class);\n')),(0,r.kt)("h2",{id:"registro-en-rtag"},"Registro en Rtag"),(0,r.kt)("p",null,"Rtag por defecto solo tiene soporte con objetos normales de Java (String, Integer, List... etc), si quieres establecer y obtener objetos custom puedes registrar un (de)serializador en la instancia de Rtag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RtagSerializer"),": Instancia para convertir el objeto custom en un Map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RtagDeserializer"),": Instancia para converir el Map en un objeto custom."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Esta conversi\xf3n establece un key adicional en el tag guardado para detectarlo usando el ID proporcionado.")),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("p",null,"Supongamos que tienes un objeto custom llamado ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomData")," para guardar datos adicionales en tus items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package my.plugin;\n\npublic class CustomData {\n\n    private final String type;\n    private int level;\n    private boolean broken;\n\n    public CustomData(String type, int level, boolean broken) {\n        this.type = type;\n        this.level = level;\n        this.broken = broken;\n    }\n\n    public String getType() {\n        return type;\n    }\n\n    public int getLevel() {\n        return level;\n    }\n\n    public boolean isBroken() {\n        return broken;\n    }\n\n    public void setLevel(int level) {\n        this.level = level;\n    }\n\n    public void setBroken(boolean broken) {\n        this.broken = broken;\n    }\n\n    public boolean equals(Object object) {\n        if (object instanceof CustomData) {\n            CustomData data = (CustomData) object;\n            return data.getType().equals(type) && data.getLevel == level && data.isBroken == broken;\n        }\n        return false;\n    }\n}\n")),(0,r.kt)("p",null,"Ahora debes crear un class que funcione como serializador y deserializador:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package my.plugin;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class CustomDataSerializer implements RtagSerializer<CustomData>, RtagDeserializer<CustomData> {\n    \n    // ID usado para convertir el objeto custom en un Map\n    // CustomData -> Map\n    @Override\n    public String getInID() {\n        return "myplugin:CustomData";\n    }\n    \n    // ID usado para convertir un Map en un objeto custom\n    // Map -> CustomData\n    @Override\n    public String getOutID() {\n        return "myplugin:CustomData";\n    }\n\n    // Convertir el objeto de CustomData en un Map\n    @Override\n    public Map<String, Object> serialize(CustomData data) {\n        Map<String, Object> map = new HashMap();\n        map.put("type", data.getType());\n        map.put("level", data.getLevel());\n        map.put("broken", data.isBroken());\n        return map;\n    }\n    \n    // Convertir el Map en un objeto de CustomData\n    @Override\n    public CustomData deserialize(Map<String, Object> map) {\n        String type = map.get("type");\n        Integer level = map.get("level");\n        Boolean broken = map.get("broken");\n\n        if (type == null || level == null || broken == null) {\n            return null;\n        } else {\n            return new CustomData(type, level, broken);\n        }\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Se sugiere usar un ID con el formado de ",(0,r.kt)("inlineCode",{parentName:"p"},"<plugin>:<objeto>")," para evitar incompatibilidad con otros plugins.")),(0,r.kt)("p",null,"Luego debes registrar el class en la instancia de Rtag que est\xe1s utilizando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Rtag rtag = ...;\nCustomDataSerializer serializer = new CustomDataSerializer();\n\nrtag.putSerializer(CustomData.class, serializer);\nrtag.putDeserializer(serializer);\n")),(0,r.kt)("p",null,"Ahora al utilizar la instancia de Rtag donde registraste el ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomDataSerializer")," podr\xe1s guardar y almacenar el objeto de CustomData."),(0,r.kt)("p",null,"En este ejemplo se usar\xe1 un RtagItem con la instancia de Rtag que tiene registrado el ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomDataSerializer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private final Rtag rtag = initRtag();\n\nprivate Rtag initRtag() {\n    Rtag rtag = new Rtag();\n    CustomDataConversion serializer = new CustomDataConversion();\n    rtag.putSerializer(CustomData.class, serializer);\n    rtag.putDeserializer(serializer);\n    return rtag;\n}\n\npublic void example(ItemStack item) {\n    RtagItem tag = new RtagItem(rtag, item);\n    \n    // -- Guardar data custom en el ItemStack\n    \n    // Data para el item\n    CustomData data = new CustomData("EPIC", 30, false);\n    // Establecer en la ruta "custom -> data"\n    tag.set(data, "custom", "data");\n    \n    // Los cambios ser\xe1n cargados en el item original\n    tag.load();\n    \n    \n    // -- Obtener la data custom desde un ItemStack\n    \n    // Obtener la data desde "custom" -> "data" sin una conversi\xf3n expl\xedcita\n    CustomData itemData = tag.get("custom", "data");\n    // Revisar si son iguales\n    System.out.println(data.equals(itemData));\n}\n')))}m.isMDXComponent=!0}}]);