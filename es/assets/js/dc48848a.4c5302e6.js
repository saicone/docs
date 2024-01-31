"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8688],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>k});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=r.createContext({}),p=function(e){var a=r.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=p(e.components);return r.createElement(d.Provider,{value:a},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=t,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||o;return n?r.createElement(k,i(i({ref:a},u),{},{components:n})):r.createElement(k,i({ref:a},u))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[m]="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8612:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),t=(n(7294),n(3905));const o={sidebar_position:2,title:"Comandos",description:"Informaci\xf3n sobre los comandos en PixelBuy."},i=void 0,l={unversionedId:"pixelbuy/usage/commands",id:"pixelbuy/usage/commands",title:"Comandos",description:"Informaci\xf3n sobre los comandos en PixelBuy.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/pixelbuy/usage/commands.md",sourceDirName:"pixelbuy/usage",slug:"/pixelbuy/usage/commands",permalink:"/es/pixelbuy/usage/commands",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/es/usage/commands.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"31 ene 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Comandos",description:"Informaci\xf3n sobre los comandos en PixelBuy."},sidebar:"pixelbuy",previous:{title:"Permisos",permalink:"/es/pixelbuy/usage/permissions"},next:{title:"Placeholders",permalink:"/es/pixelbuy/usage/placeholders"}},d={},p=[{value:"Recargar",id:"recargar",level:2},{value:"Usuario",id:"usuario",level:2},{value:"Informaci\xf3n",id:"informaci\xf3n",level:3},{value:"Calcular",id:"calcular",level:3},{value:"Proveedor",id:"proveedor",level:3},{value:"\xd3rden de compra",id:"\xf3rden-de-compra",level:2},{value:"Informaci\xf3n",id:"informaci\xf3n-1",level:3},{value:"Arreglar",id:"arreglar",level:3},{value:"Ejecutar",id:"ejecutar",level:3},{value:"Entregar",id:"entregar",level:3},{value:"Eliminar",id:"eliminar",level:3},{value:"Buscar",id:"buscar",level:3},{value:"Item de orden de compra",id:"item-de-orden-de-compra",level:2},{value:"Informaci\xf3n",id:"informaci\xf3n-2",level:3},{value:"Estado",id:"estado",level:3},{value:"Precio",id:"precio",level:3},{value:"Cantidad",id:"cantidad",level:3},{value:"Agregar",id:"agregar",level:3},{value:"Eliminar",id:"eliminar-1",level:3}],u={toc:p},m="wrapper";function s(e){let{components:a,...n}=e;return(0,t.kt)(m,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"PixelBuy tiene una variedad de comandos para manejar el plugin y sus datos."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Argumentos del comando:")," Cualquier argumento denomidado por ",(0,t.kt)("inlineCode",{parentName:"p"},"<>")," es requerido, mientras que ",(0,t.kt)("inlineCode",{parentName:"p"},"[]")," es opcional."),(0,t.kt)("h2",{id:"recargar"},"Recargar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy reload <tipo>")),(0,t.kt)("p",null,"Recarga el plugin en base a los tipos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"files")," - Recarga la configuraci\xf3n y archivos de idioma (no incluye la tienda)."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"store")," - Recargar la tienda de PixelBuy."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"database")," - Recarga la conexi\xf3n con la base de datos."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"command")," - Recarga la configuraci\xf3n de los comandos."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"all")," - Recarga todos los tipos mencionados anteriormente.")),(0,t.kt)("h2",{id:"usuario"},"Usuario"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy user <jugador> <comando>")),(0,t.kt)("p",null,"Comandos relacionados con usuarios, el argumento ",(0,t.kt)("inlineCode",{parentName:"p"},"<jugador>")," puede ser un nombre de jugador o id \xfanica."),(0,t.kt)("h3",{id:"informaci\xf3n"},"Informaci\xf3n"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy user <jugador> info [p\xe1gina] [grupo]")),(0,t.kt)("p",null,"Obtener la informaci\xf3n sobre el jugador especificado, las \xf3rdenes de compra est\xe1n separadas en grupos de 5, por lo que se pueden mostrar diferentes grupos al especificar una p\xe1gina distinta."),(0,t.kt)("p",null,"Adem\xe1s las \xf3rdenes de compra tienen items dependiendo el nombre del grupo de servidor, para mostrar items de un grupo en espec\xedfico se puede a\xf1adir el grupo despu\xe9s del argumento de la p\xe1gina."),(0,t.kt)("h3",{id:"calcular"},"Calcular"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy user <jugador> calculate")),(0,t.kt)("p",null,"Calcula la cantidad de donada del usuario de la tienda, este comando tambi\xe9n actualiza la data del usuario en caso de que la cantidad donada calculada no se igual a la que figura en la base de datos."),(0,t.kt)("h3",{id:"proveedor"},"Proveedor"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy user <jugador> provided")),(0,t.kt)("p",null,"Obtener informaci\xf3n del jugador seg\xfan el proveedor de jugadores especificado en la configuraci\xf3n del plugin."),(0,t.kt)("h2",{id:"\xf3rden-de-compra"},"\xd3rden de compra"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> <comando>")),(0,t.kt)("p",null,"Comandos relacionados con \xf3rdenes de compra, el argumento ",(0,t.kt)("inlineCode",{parentName:"p"},"<orden>")," utiliza en formato ",(0,t.kt)("inlineCode",{parentName:"p"},"proveedor:id:grupo"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"proveedor")," (Opcional) - Es el proveedor de donde vino la orden de compra, por defecto es el supervisor web especificado en la configuraci\xf3n de la tienda de PixelBuy."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"id")," - Es el ID ennumerado de la orden de compra."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"grupo")," (Opcional) - Es el nombre de group de servidor asociado con la orden de compra, por defecto es el nombre de grupo de servidor especificado en la configuraci\xf3n de la tienda de PixelBuy.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Formato de fecha:")," Cualquier argumento de fecha utiliza el formato ",(0,t.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),", por ejemplo ",(0,t.kt)("inlineCode",{parentName:"p"},"2024-03-21"),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Tipos de ejecuciones de \xf3rden de compra:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"BUY")," - La \xf3rden ser\xe1 marcada como si se hubiera comprado y los items deben ser entregados."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"RECOVER")," - La \xf3rden ser\xe1 marcada como si se hubiera comprado, pero ahora los items requieren ser entregados nuevamente debido a alguna p\xe9rdida o compensaci\xf3n."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"REFUND")," - Ejecuta un reembolso para la \xf3rden de compra especificada.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Tipos de estados para los items pertenecientes a una \xf3rden de compra:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"DONE")," - El item ya fue entregado."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"PENDING")," - El item no ha sido entregado."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"ERROR")," - El item no puede ser entregado.")),(0,t.kt)("h3",{id:"informaci\xf3n-1"},"Informaci\xf3n"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> info [grupo]")),(0,t.kt)("p",null,"Obtener informaci\xf3n sobre la orden de compra especificada, por defecto solo muestra los items con el mismo grupo de la orden de compra, para mostrar items de un grupo en espec\xedfico se puede especificar al nombre del grupo como un argumento en el comando."),(0,t.kt)("h3",{id:"arreglar"},"Arreglar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> fix")),(0,t.kt)("p",null,"Cambia todos los items marcados como ",(0,t.kt)("inlineCode",{parentName:"p"},"ERROR"),", al estado ",(0,t.kt)("inlineCode",{parentName:"p"},"PENDING")," significando que cualquier error producido mientras la orden de compra era entregada ahora est\xe1 solucionado."),(0,t.kt)("h3",{id:"ejecutar"},"Ejecutar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> execute <execution> [fecha]")),(0,t.kt)("p",null,"Ejecuta una acci\xf3n en base a la orden de compra utilizando la fecha actual o una especificada en el comando."),(0,t.kt)("h3",{id:"entregar"},"Entregar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> give <jugador> <items...> [par\xe1metros...]")),(0,t.kt)("p",null,"Crea y entrega la orden especificada al jugador con una lista de items de la tienda."),(0,t.kt)("p",null,"Todos los items utilizan el formato ",(0,t.kt)("inlineCode",{parentName:"p"},"nombre|cantidad")," donde la cantidad es opcional (junto con el separador ",(0,t.kt)("inlineCode",{parentName:"p"},"|"),")."),(0,t.kt)("p",null,"Los par\xe1metros afectan cualquier item especificado despu\xe9s del par\xe1metro y utilizan el formato ",(0,t.kt)("inlineCode",{parentName:"p"},"--<tipo>=<value>")," con los tipos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"group")," - El grupo donde los items ser\xe1n a\xf1adidos."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"date")," - Cambia la fecha de la orden de compra."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"execution")," - Establece la ejecuci\xf3n de la orden de compra."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"state")," - El estado de los items que ser\xe1n a\xf1adidos.")),(0,t.kt)("h3",{id:"eliminar"},"Eliminar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> delete")),(0,t.kt)("p",null,"Elimina la orden de compra de la base de datos."),(0,t.kt)("h3",{id:"buscar"},"Buscar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> lookup <jugador>")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Entregar:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> lookup run")),(0,t.kt)("p",null,"Busca cualquier orden del supervisor web al que pertenece en base al jugador especificado, para luego mostrar la informaci\xf3n de la orden encontrada."),(0,t.kt)("p",null,"Si la orden es encontrada, el par\xe1metro ",(0,t.kt)("inlineCode",{parentName:"p"},"run")," env\xe9s del jugador procesar\xe1 la orden encontrada como si fuera una orden del propio supervisor web."),(0,t.kt)("h2",{id:"item-de-orden-de-compra"},"Item de orden de compra"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> <comando>")),(0,t.kt)("p",null,"Este es un sub comando del comando de la orden de compra para editar la informaci\xf3n de los items de compra."),(0,t.kt)("p",null,"El par\xe1metro ",(0,t.kt)("inlineCode",{parentName:"p"},"<item>")," utiliza el formato ",(0,t.kt)("inlineCode",{parentName:"p"},"nombre:grupo")," donde el grupo es opciona (junto con el separador ",(0,t.kt)("inlineCode",{parentName:"p"},":"),")."),(0,t.kt)("h3",{id:"informaci\xf3n-2"},"Informaci\xf3n"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> info")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Ver el error guardado:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> info error")),(0,t.kt)("p",null,"Obtener informaci\xf3n sobre el item especificado, se puede utilizar el par\xe1metro ",(0,t.kt)("inlineCode",{parentName:"p"},"error")," para mostrar el mensaje de error en caso de que item tenga el estado de ",(0,t.kt)("inlineCode",{parentName:"p"},"ERROR"),"."),(0,t.kt)("h3",{id:"estado"},"Estado"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> state <estado> [mensaje]")),(0,t.kt)("p",null,"Cambia el estado del item especificado, en caso de que el estado sea ",(0,t.kt)("inlineCode",{parentName:"p"},"ERROR")," puedes agregar el mensaje de error como el \xfaltimo par\xe1metro del comando."),(0,t.kt)("h3",{id:"precio"},"Precio"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> price <precio>")),(0,t.kt)("p",null,"Cambia el precio del item especificado."),(0,t.kt)("h3",{id:"cantidad"},"Cantidad"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> amount <cantidad>")),(0,t.kt)("p",null,"Cambia la cantidad del item especificado."),(0,t.kt)("h3",{id:"agregar"},"Agregar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> add [estado] [precio]")),(0,t.kt)("p",null,"Agrega el item especificado en la orden de compra con los par\xe1metros del comando."),(0,t.kt)("h3",{id:"eliminar-1"},"Eliminar"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Utilizaci\xf3n:")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/pbuy order <orden> item <item> delete")),(0,t.kt)("p",null,"Elimina el item especificado de la orden de compra."))}s.isMDXComponent=!0}}]);