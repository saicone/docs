"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8856],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(r),c=n,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||i;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3,title:"Placeholders",description:"Information about PixelBuy placeholders."},l=void 0,o={unversionedId:"pixelbuy/usage/placeholders",id:"pixelbuy/usage/placeholders",title:"Placeholders",description:"Information about PixelBuy placeholders.",source:"@site/docs/pixelbuy/usage/placeholders.md",sourceDirName:"pixelbuy/usage",slug:"/pixelbuy/usage/placeholders",permalink:"/pixelbuy/usage/placeholders",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/default/usage/placeholders.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706881391,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Placeholders",description:"Information about PixelBuy placeholders."},sidebar:"pixelbuy",previous:{title:"Commands",permalink:"/pixelbuy/usage/commands"},next:{title:"Colored text",permalink:"/pixelbuy/usage/colored-text"}},p={},m=[{value:"Internal placeholders",id:"internal-placeholders",level:2},{value:"PlaceholderAPI compatibility",id:"placeholderapi-compatibility",level:2},{value:"Object parameters",id:"object-parameters",level:2},{value:"User",id:"user",level:3},{value:"Top",id:"top",level:3},{value:"Order",id:"order",level:3},{value:"Order item",id:"order-item",level:3},{value:"Store",id:"store",level:3},{value:"Store item",id:"store-item",level:3},{value:"Action",id:"action",level:3}],u={toc:m},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"PixelBuy has a lot of information that can be accessed using placeholders provided by the plugin interactions or get them using PlaceholderAPI."),(0,n.kt)("h2",{id:"internal-placeholders"},"Internal placeholders"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"{<object>_<parameter>}")),(0,n.kt)("p",null,"The internal placeholders are available on order delivery interactions (like order actions) and the available object parameters are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User"),(0,n.kt)("li",{parentName:"ul"},"Order"),(0,n.kt)("li",{parentName:"ul"},"Order item"),(0,n.kt)("li",{parentName:"ul"},"Store"),(0,n.kt)("li",{parentName:"ul"},"Store item"),(0,n.kt)("li",{parentName:"ul"},"Action")),(0,n.kt)("h2",{id:"placeholderapi-compatibility"},"PlaceholderAPI compatibility"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"%<name>_[object]_<parameter>%")),(0,n.kt)("p",null,"The placeholder name can be changed on PixelBuy configuration."),(0,n.kt)("p",null,"The available object parameters to use on PlaceholderAPI placeholders are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'User (it used by default, doesn\'t require to specify "user" on ',(0,n.kt)("inlineCode",{parentName:"li"},"[object]")," parameter)."),(0,n.kt)("li",{parentName:"ul"},"Top")),(0,n.kt)("p",null,"To get current player position on top calculation: ",(0,n.kt)("inlineCode",{parentName:"p"},"%<name>_top%")),(0,n.kt)("h2",{id:"object-parameters"},"Object parameters"),(0,n.kt)("p",null,"The parameters that can be used to get object information."),(0,n.kt)("h3",{id:"user"},"User"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"user_<parameter>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uuid"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"uniqueid")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"unique_id")," - User unique id."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," - User unique id without ",(0,n.kt)("inlineCode",{parentName:"li"},"-"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," - User name (in lowercase), also can be ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"donated")," - User donated amount."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"orders")," - Orders size.")),(0,n.kt)("h3",{id:"top"},"Top"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"top_<position>_<parameter>")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<position>")," is a number from cached top calculation and ",(0,n.kt)("inlineCode",{parentName:"p"},"<parameter>")," is a parameter from the user."),(0,n.kt)("h3",{id:"order"},"Order"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"order_<parameter>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data_id")," - Database associated id, can be ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"provider")," - Order web supervisor/provider."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," - Order id."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"group")," - Order group."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"buyer")," - Order buyer unique id."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"buyer_id")," - Order byter unique id without ",(0,n.kt)("inlineCode",{parentName:"li"},"-"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date")," - Order date for current order execution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date_buy")," - Order date when order was bought."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date_recover")," - Order date when order was redelivered."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"date_refund")," - Order date when order was refunded."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"execution")," - Current order execution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"items")," - Items size.")),(0,n.kt)("h3",{id:"order-item"},"Order item"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"order_item_<parameter>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," - The item name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"amount")," - The amount of times this item is repeated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"price")," - Item price."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"state")," - Current item state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error")," - Current item error message if state is ",(0,n.kt)("inlineCode",{parentName:"li"},"ERROR"),".")),(0,n.kt)("h3",{id:"store"},"Store"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"store_<parameter>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," - Store name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"group")," - Server group name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"supervisor")," - Default web supervisor name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"categories")," - Store categories names separated by ",(0,n.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"categories_size")," - Store categories size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"supervisors")," - Store web supervisors names separated by ",(0,n.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"supervisors_size")," - Store web supervisors size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"items")," - Store items separated by ",(0,n.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"items_size")," - Store items size.")),(0,n.kt)("h3",{id:"store-item"},"Store item"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"store_item_<parameter>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," - The item name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"category")," - Current item category."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"categories")," - Item categories names separated by ",(0,n.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"categories_size")," - Item categories size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"price")," - Item price.")),(0,n.kt)("h3",{id:"action"},"Action"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Format:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"action_<parameter>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"count")," - The current number of times the action has been executed.")))}s.isMDXComponent=!0}}]);