"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,title:"Usage",description:"How to use Ezlib"},i=void 0,l={unversionedId:"ezlib/usage",id:"ezlib/usage",title:"Usage",description:"How to use Ezlib",source:"@site/docs/ezlib/usage.md",sourceDirName:"ezlib",slug:"/ezlib/usage",permalink:"/ezlib/usage",draft:!1,editUrl:"https://github.com/saicone/ezlib/blob/main/docs/default/usage.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1704582820,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Usage",description:"How to use Ezlib"},sidebar:"ezlib",previous:{title:"Ezlib",permalink:"/ezlib/"}},s={},p=[{value:"Basic",id:"basic",level:2},{value:"Parent ClassLoader",id:"parent-classloader",level:2},{value:"Relocation",id:"relocation",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ezlib uses a gradle-like dependency format to load them.")),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)("p",null,"Ezlib provides an easy method to load all needed dependencies at runtime into class loaders."),(0,a.kt)("p",null,"Here is an example to load dependencies into a child class loader."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Create ezlib with default "libs" folder\nEzlib ezlib = new Ezlib();\n// Or specify a folder\nEzlib ezlib = new Ezlib(new File("folder/path"));\n\n// Initialize ezlib\nezlib.init();\n\n// Load from maven repository into child class loader\nezlib.dependency("commons-io:commons-io:2.11.0").load();\n\n// Load from specified repository\nezlib.dependency("com.saicone.rtag:rtag:1.3.0").repository("https://jitpack.io/").load();\n\n// You can change default repository\nezlib.setDefaultRepository("repo URL");\n')),(0,a.kt)("h2",{id:"parent-classloader"},"Parent ClassLoader"),(0,a.kt)("p",null,"Ezlib allow you to append dependencies into parent class loader and specify repository before load method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Ezlib ezlib = new Ezlib();\n// Initialize ezlib\nezlib.init();\n\n// Load from maven repository into parent class loader\nezlib.dependency("commons-io:commons-io:2.11.0").parent(true).load();\n\n// Load from specified repository\nezlib.dependency("com.saicone.rtag:rtag:1.1.0")\n        .repository("https://jitpack.io/")\n        .parent(false)\n        .load();\n')),(0,a.kt)("h2",{id:"relocation"},"Relocation"),(0,a.kt)("p",null,"Ezlib uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lucko/jar-relocator"},"jar-relocator"),", so you can load dependencies with package relocation."),(0,a.kt)("p",null,"Here an example with Redis library and all the needed dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> map = new HashMap();\nmap.put("com.google.gson", "myproject.path.libs.gson");\nmap.put("org.apache.commons.pool2", "myproject.path.libs.pool2");\nmap.put("org.json", "myproject.path.libs.json");\nmap.put("org.slf4j", "myproject.path.libs.slf4j");\nmap.put("redis.clients.jedis", "myproject.path.libs.jedis");\n\nEzlib ezlib = new Ezlib();\nezlib.init();\n\n// Load all the needed dependencies first\nezlib.dependency("com.google.gson:gson:2.8.9").relocations(map).parent(true).load();\nezlib.dependency("org.apache.commons:commons-pool2:2.11.1").relocations(map).parent(true).load();\nezlib.dependency("org.json:json:20211205").relocations(map).parent(true).load();\nezlib.dependency("org.slf4j:slf4j-api:1.7.32").relocations(map).parent(true).load();\n\n// Then load redis dependency\nezlib.dependency("redis.clients:jedis:4.2.2").relocations(map).parent(true).load();\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to relocate the imports during compile time, while excluding the class that you use to load the dependencies because the strings will be relocated too.")))}u.isMDXComponent=!0}}]);