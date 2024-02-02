"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,f=p["".concat(m,".").concat(u)]||p[u]||d[u]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),r=n(6010),l=n(9960),i=n(3438),o=n(3919),m=n(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){let{href:t,children:n}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",c.cardContainer)},n)}function p(e){let{href:t,icon:n,title:l,description:i}=e;return a.createElement(s,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",c.cardTitle),title:l},n," ",l),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:i},i))}function d(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??(null==r?void 0:r.description)})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(u,{item:t});case"category":return a.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},2022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),l=n(1564);const i={sidebar_position:2,title:"Types",description:"PixelBuy exectuable actions types."},o=void 0,m={unversionedId:"pixelbuy/action/types",id:"pixelbuy/action/types",title:"Types",description:"PixelBuy exectuable actions types.",source:"@site/docs/pixelbuy/action/types.md",sourceDirName:"pixelbuy/action",slug:"/pixelbuy/action/types",permalink:"/pixelbuy/action/types",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/default/action/types.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706881391,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Types",description:"PixelBuy exectuable actions types."},sidebar:"pixelbuy",previous:{title:"Format",permalink:"/pixelbuy/action/format"},next:{title:"Developers",permalink:"/pixelbuy/developers/"}},c={},s=[{value:"Command",id:"command",level:2},{value:"Item",id:"item",level:2},{value:"Message",id:"message",level:2},{value:"Broadcast",id:"broadcast",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PixelBuy contains different action types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every action has a RegEx name pattern, this means the action name can be written differently."),(0,r.kt)("li",{parentName:"ul"},"Every RegEx pattern is case-insensitive.")),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("p",null,"Run a command to server console or as the player itself."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"command")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiple:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"multi-command")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RegEx:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"((run|execute)-?)?(multi(ples)?-?)?(command|cmd)s?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Single command:")," Every command will be executed only one time (ignore order item amount)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Simple\n'command: cmd'\n\ncommand: 'cmd'\n\n# Run multiple commands\ncommand:\n  - 'cmd1'\n  - 'cmd2'\n\ncommand:\n  value:\n    - 'cmd1'\n    - 'cmd2'\n\n# Advanced configuration\ncommand:\n  value: 'cmd'\n  console: true\n  multiple: false # <-- Set true to NOT ignore order item amount\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiple command:")," Every command will be executed the same times or order item amount."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Simple\n'multi-command: cmd'\n\nmulti-command: 'cmd'\n\n# Run multiple commands\nmulti-command:\n  - 'cmd1'\n  - 'cmd2'\n\nmulti-command:\n  value:\n    - 'cmd1'\n    - 'cmd2'\n\n# Advanced configuration\nmulti-command:\n  value: 'cmd'\n  console: true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," (",(0,r.kt)("inlineCode",{parentName:"li"},"(value|command|cmd)s?"),") - Is the command value itself, can be a single or multiple commands."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console")," (",(0,r.kt)("inlineCode",{parentName:"li"},"console(-?sender)?"),") - Set to false to execute the command as the player."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multiple")," (",(0,r.kt)("inlineCode",{parentName:"li"},"multiples?"),") - Set true to NOT ignore order item amount (only affect single command configuration).")),(0,r.kt)("h2",{id:"item"},"Item"),(0,r.kt)("p",null,"Give item to player."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"item")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RegEx:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(give-?)?items?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Simple\n'item: DIAMOND'\n\nitem: 'DIAMOND'\n\n# Give items from provider\n'item: oraxen:storm_sword'\n\nitem: 'oraxen:storm_sword'\n\n# Advanced configuration\nitem:\n  material: DIAMOND_PICKAXE\n  amount: 1\n  name: '&9&lSuper Pickaxe'\n  lore:\n    - '&7Custom pickaxe'\n    - '&7from server store'\n    - ''\n    - '&6Buyer: &7%player_name%'\n    - '&6Order ID: &7{order_id}'\n  enchants:\n    SHARPNESS: 10\n    DIG_SPEED: 5\n    LOOT_BONUS_BLOCKS: 20\n")),(0,r.kt)("p",null,"For more information about item format:"),(0,r.kt)(l.Z,{item:{type:"link",href:"/pixelbuy/usage/item-config/",label:"Item Configuration",description:"Information about PixelBuy item configuration format"},mdxType:"DocCard"}),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("p",null,"Send a colored text message only to player."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"message")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RegEx:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(send-?)?messages?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Simple\n'message: &eHello'\n\nmessage: '&eHello'\n\n# Send multiple line message\nmessage:\n  - '&eHello'\n  - '&aWorld'\n\n# Advanced configuration\nmessage:\n  value: '&eHello'\n  centered: false\n  color: false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," (",(0,r.kt)("inlineCode",{parentName:"li"},"(value|msg|message)s?"),") - The message value itself, can be a single or multiple messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"centered")," (",(0,r.kt)("inlineCode",{parentName:"li"},"center(ed)?(-?text)?|chat-?width"),") - Set to true to make a chat-centered message, or set a number to specify the chat pixel width."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color")," (",(0,r.kt)("inlineCode",{parentName:"li"},"color(ed)?(-?after)?"),") - Set to true to re-color message before sending it to the player (this is useful if a placeholder returns a value that is not colored yet).")),(0,r.kt)("h2",{id:"broadcast"},"Broadcast"),(0,r.kt)("p",null,"Send a colored text message to all online players."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RegEx:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast(-?messages?)?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Simple\n'broadcast: &eHello'\n\nbroadcast: '&eHello'\n\n# Send multiple line message\nbroadcast:\n  - '&eHello'\n  - '&aWorld'\n\n# Advanced configuration\nbroadcast:\n  value: '&eHello'\n  centered: false\n  color: false\n  parse: false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," (",(0,r.kt)("inlineCode",{parentName:"li"},"(value|msg|message)s?"),") - The message value itself, can be a single or multiple messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"centered")," (",(0,r.kt)("inlineCode",{parentName:"li"},"center(ed)?(-?text)?|chat-?width"),") - Set to true to make a chat-centered message, or set a number to specify the chat pixel width."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color")," (",(0,r.kt)("inlineCode",{parentName:"li"},"color(ed)?(-?after)?"),") - Set to true to re-color message before broadcast to players (this is useful if a placeholder returns a value that is not colored yet)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parse")," (",(0,r.kt)("inlineCode",{parentName:"li"},"(viewer-?)?parse(able)?"),") - Parse bracket placeholders inside a message using the current player that receives the broadcast.")))}u.isMDXComponent=!0}}]);