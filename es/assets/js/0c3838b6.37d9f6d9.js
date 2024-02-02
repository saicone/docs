"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9903],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5112:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2,title:"Supervisor web.",description:"Como configurar los supervisores web en PixelBuy."},i=void 0,l={unversionedId:"pixelbuy/store/web-supervisor",id:"pixelbuy/store/web-supervisor",title:"Supervisor web.",description:"Como configurar los supervisores web en PixelBuy.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/pixelbuy/store/web-supervisor.md",sourceDirName:"pixelbuy/store",slug:"/pixelbuy/store/web-supervisor",permalink:"/es/pixelbuy/store/web-supervisor",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/es/store/web-supervisor.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706881391,formattedLastUpdatedAt:"2 feb 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Supervisor web.",description:"Como configurar los supervisores web en PixelBuy."},sidebar:"pixelbuy",previous:{title:"Configuraci\xf3n",permalink:"/es/pixelbuy/store/configuration"},next:{title:"Items",permalink:"/es/pixelbuy/store/items"}},s={},c=[{value:"Tipos",id:"tipos",level:2},{value:"Valores globales",id:"valores-globales",level:3},{value:"WooMinecraft",id:"woominecraft",level:2},{value:"Integraci\xf3n con WooCommerce",id:"integraci\xf3n-con-woocommerce",level:3}],p={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Los supervisores de web son un tipo de sistema que obtiene datos desde la web de la tienda para aplicar cualquier entrega necesaria dentro del servidor de Minecraft."),(0,a.kt)("h2",{id:"tipos"},"Tipos"),(0,a.kt)("p",null,"Pixelbuy actualmente tiene soporte a diferentes conceptos de entregas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WOOMINECRAFT")," - Hosteado propiamente en WordPress utilizando el plugin ",(0,a.kt)("strong",{parentName:"li"},"WooMinecraft"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TEBEX")," - Una entrega de items como BuyCraft utilizando la tienda de ",(0,a.kt)("strong",{parentName:"li"},"Tebex"),".")),(0,a.kt)("h3",{id:"valores-globales"},"Valores globales"),(0,a.kt)("p",null,"Cualquier supervisor web tiene configuraciones en com\xfan."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Group: 'servername'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"group")," - Es el grupo de servidor al que el supervisor est\xe1 a\xf1adiendo las \xf3rdenes de compra encontradas.")),(0,a.kt)("h2",{id:"woominecraft"},"WooMinecraft"),(0,a.kt)("p",null,"El supervisor de WooMinecraft hace revisiones cada cierto tiempo para cuales comandos de \xf3rden de compra deben ser entregados (como el plugin WooMinecraft), pero este supervisor procesa todos los comandos separados por coma, como si fueran nombre de items de la tienda."),(0,a.kt)("p",null,"La instalaci\xf3n del plugin WooMinecraft en WordPress es la misma que en la ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WooMinecraft/WooMinecraft/wiki/Step-2:-Setting-up-the-wordpress-side"},"wiki de WooMinecraft")," y tambi\xe9n la ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WooMinecraft/WooMinecraft/wiki/Step-3:-Creating-A-Package"},"especificaci\xf3n de los comandos"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Check-Interval: 7\nURL: 'http://shop.mysite.com'\nKey: 'asdUniqueKeyForServer'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Check-Interval")," - Es el intervalo en segundos para verificar la api utilizando el url de la tienda."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URL")," - Es el url de la tienda."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Key")," - Is la key del servidor utilizado en la ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/WooMinecraft/WooMinecraft/wiki/Step-2:-Setting-up-the-wordpress-side"},"configuraci\xf3n de WooMinecraft"),".")),(0,a.kt)("h3",{id:"integraci\xf3n-con-woocommerce"},"Integraci\xf3n con WooCommerce"),(0,a.kt)("p",null,"Env\xe9s del plugin WooMinecraft, este supervisor de web tiene una integraci\xf3n directamente con el plugin WooCommerce instalado en la p\xe1gina de WordPress para obetener m\xe1s informaci\xf3n sobre los items de la tienda (y realizar un mejor c\xe1lculo sobre los precios de los items de la tienda)."),(0,a.kt)("p",null,"Para generar una nueva key y as\xed utilizar la API de WooCommerce."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ir al panel administrativo de tu sitio WordPress."),(0,a.kt)("li",{parentName:"ol"},"Mover el mouse sobre la secci\xf3n de WooCommerce."),(0,a.kt)("li",{parentName:"ol"},"Ir a ajustes/configuraci\xf3n."),(0,a.kt)("li",{parentName:"ol"},'Darle click a "Avanzado" para ir a la configuraci\xf3n avanzada.'),(0,a.kt)("li",{parentName:"ol"},"Ir a la secci\xf3n de API Keys."),(0,a.kt)("li",{parentName:"ol"},"Generar una nueva key con permisos de lectura.")),(0,a.kt)("admonition",{title:"importante",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Es importante generar \xfanicamente una key con ",(0,a.kt)("strong",{parentName:"p"},"permisos de lectura"),", si le das ",(0,a.kt)("strong",{parentName:"p"},"permisos de escritura")," estar\xe1s dejando una brecha de seguridad de tu sitio WordPress en caso de que no protejas la instancia de servidor donde PixelBuy est\xe1 instalado.")),(0,a.kt)("p",null,"Ahora solo debes poner la key generada y el secret en la configuraci\xf3n del supervisor de web."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"WooCommerce:\n  ConsumerKey: 'ck_theGeneratedConsumerKey'\n  ConsumerSecret: 'cs_theGeneratedConsumerSecret'\n")),(0,a.kt)("p",null,"Tomar en cuenta que toda key de consumidor empieza con ",(0,a.kt)("inlineCode",{parentName:"p"},"ck_")," y todo secret de consumidor empieza con ",(0,a.kt)("inlineCode",{parentName:"p"},"cs_"),"."))}d.isMDXComponent=!0}}]);