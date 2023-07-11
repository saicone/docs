"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[439],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(b,i(i({ref:t},p),{},{components:o})):n.createElement(b,i({ref:t},p))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3279:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2,title:"Usage",description:"How to use Ezlib"},i=void 0,l={unversionedId:"ezlib/usage",id:"ezlib/usage",title:"Usage",description:"How to use Ezlib",source:"@site/docs/ezlib/usage.md",sourceDirName:"ezlib",slug:"/ezlib/usage",permalink:"/ezlib/usage",draft:!1,editUrl:"https://github.com/saicone/docs/blob/master/docs/ezlib/usage.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1689095987,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Usage",description:"How to use Ezlib"},sidebar:"ezlib",previous:{title:"Ezlib",permalink:"/ezlib/"}},s={},c=[{value:"Basic",id:"basic",level:2},{value:"Parent ClassLoader",id:"parent-classloader",level:2},{value:"Relocation",id:"relocation",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ezlib uses a gradle-like dependency format to load them.")),(0,r.kt)("h2",{id:"basic"},"Basic"),(0,r.kt)("p",null,"Ezlib provides an easy method to load all needed dependencies at runtime into class loaders."),(0,r.kt)("p",null,"Here is an example to load dependencies into a child class loader."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Create ezlib with default "libs" folder\nEzlib ezlib = new Ezlib();\n// Or specify a folder\nEzlib ezlib = new Ezlib(new File("folder/path"));\n\n// Load from maven repository (default)\nezlib.load("commons-io:commons-io:2.11.0");\n\n// Load from specified repository\nezlib.load("com.saicone.rtag:rtag:1.1.0", "https://jitpack.io/");\n\n// You can change default repository\nezlib.setDefaultRepository("repo URL");\n')),(0,r.kt)("h2",{id:"parent-classloader"},"Parent ClassLoader"),(0,r.kt)("p",null,'Ezlib allows you to append dependencies into the parent class loader by just setting "true" at the end of the load method.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Ezlib ezlib = new Ezlib();\n\n// Load from maven repository (default)\nezlib.load("commons-io:commons-io:2.11.0", true);\n\n// Load from specified repository\nezlib.load("com.saicone.rtag:rtag:1.1.0", "https://jitpack.io/", true);\n')),(0,r.kt)("h2",{id:"relocation"},"Relocation"),(0,r.kt)("p",null,"Ezlib uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lucko/jar-relocator"},"jar-relocator"),", so you can load dependencies with package relocation."),(0,r.kt)("p",null,"Here an example with Redis library and all the needed dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> relocations = new HashMap();\nrelocations.put("com.google.gson", "myproject.path.libs.gson");\nrelocations.put("org.apache.commons.pool2", "myproject.path.libs.pool2");\nrelocations.put("org.json", "myproject.path.libs.json");\nrelocations.put("org.slf4j", "myproject.path.libs.slf4j");\nrelocations.put("redis.clients.jedis", "myproject.path.libs.jedis");\n\nEzlib ezlib = new Ezlib();\n\n// Load all the needed dependencies first\nezlib.load("com.google.gson:gson:2.8.9", relocations, true);\nezlib.load("org.apache.commons:commons-pool2:2.11.1", relocations, true);\nezlib.load("org.json:json:20211205", relocations, true);\nezlib.load("org.slf4j:slf4j-api:1.7.32", relocations, true);\n\n// Then load redis dependency\nezlib.load("redis.clients:jedis:4.2.2", relocations, true);\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to relocate the imports during compile time, while excluding the class that you use to load the dependencies because the strings will be relocated too.")))}u.isMDXComponent=!0}}]);