"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[148],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3,title:"Setup",description:"How configure UClanSync"},s=void 0,i={unversionedId:"uclansync/setup",id:"uclansync/setup",title:"Setup",description:"How configure UClanSync",source:"@site/docs/uclansync/setup.md",sourceDirName:"uclansync",slug:"/uclansync/setup",permalink:"/uclansync/setup",draft:!1,editUrl:"https://github.com/saicone/uclansync/blob/main/docs/default/setup.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1704582820,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Setup",description:"How configure UClanSync"},sidebar:"uclansync",previous:{title:"Installation",permalink:"/uclansync/installation"},next:{title:"Commands",permalink:"/uclansync/commands"}},l={},c=[{value:"Server",id:"server",level:2},{value:"Addon",id:"addon",level:2},{value:"Messenger",id:"messenger",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The UClanSync configuration is divided into parts:"),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("p",null,"This is the most important part of configuration, it's suggested to edit it when you start UClanSync."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Current server configuration\nServer:\n  # Each server must have the SAME NAME has proxy configuration to make\n  # clan homes work properly across servers\n  Name: 'MySurvival1'\n")),(0,a.kt)("h2",{id:"addon"},"Addon"),(0,a.kt)("p",null,"This configuration part allows you to edit the general options of the addon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Addon configuration\nAddon:\n  # Logging level to see messages in console, set 0 to disable all logs\n  # 1 = errors\n  # 2 = errors, warnings\n  # 3 = errors, warnings, info\n  # 4 = errors, warnings, info, debug information\n  LogLevel: 3\n  # Clan updater configuration\n  ClanUpdater:\n    # Delay in ticks to process a clan update (To avoid multiple updates at the same time)\n    # 20 ticks = 1 second\n    Update-Delay: 40\n    # Time in ticks to save an teleport request\n    # 20 ticks = 1 second\n    Teleport-Cache: 200\n    # Time in ticks to tell other servers the players that are connected on current server\n    # 20 ticks = 1 seconds\n    Player-Update: 80\n  # Addon feature list to enable or disable\n  Feature:\n    # Clan homes sync\n    Homes: true\n    # Clan chat sync\n    Chat: true\n")),(0,a.kt)("h2",{id:"messenger"},"Messenger"),(0,a.kt)("p",null,"This configuration part allows you to edit the UClanSync messenger."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Messenger configuration\nMessenger:\n  # Messaging channel, servers who you want to synchronize clan changes\n  # must have the same channel ID\n  Channel: 'survival:uclansync'\n  # Available messenger types:\n  # - PROXY    = Don't require any type of installation, but your servers\n  #              must be in the same proxy (Bungee or Velocity).\n  # - PLUGIN   = Same has PROXY but require to put UClanSync plugin in\n  #              your proxy instance (And is faster than PROXY type).\n  # - REDIS    = Use a Redis server for messaging (Configure it below).\n  # - RABBITMQ = Use a RabbitMQ server for messaging (Configure it below).\n  Type: 'PROXY'\n  # Redis configuration\n  Redis:\n    # Redis url connection\n    #\n    # URL: redis://[user]:[password@]host[:port][/databaseNumber]\n    url: 'redis://:password@localhost:6379/0'\n  # RabbitMQ configuration\n  RabbitMQ:\n    exchange: 'uclansync'\n    # RabbitMQ url connection\n    # Documentation: https://www.rabbitmq.com/uri-spec.html\n    #\n    # URL: amqp://userName:password@hostName:portNumber/virtualHost\n    # If the virtual host is \"/\", set has \"%2F\"\n    url: 'amqp://guest:guest@localhost:5672/%2F'\n")))}d.isMDXComponent=!0}}]);