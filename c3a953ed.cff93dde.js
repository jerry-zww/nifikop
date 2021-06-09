(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),b=(a(0),a(290)),l={id:"4_roadmap",title:"Roadmap",sidebar_label:"Roadmap"},c={unversionedId:"1_concepts/4_roadmap",id:"version-v0.6.1/1_concepts/4_roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Available",source:"@site/versioned_docs/version-v0.6.1/1_concepts/4_roadmap.md",slug:"/1_concepts/4_roadmap",permalink:"/nifikop/docs/v0.6.1/1_concepts/4_roadmap",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.6.1/1_concepts/4_roadmap.md",version:"v0.6.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1621194888,sidebar_label:"Roadmap",sidebar:"version-v0.6.1/docs",previous:{title:"Features",permalink:"/nifikop/docs/v0.6.1/1_concepts/3_features"},next:{title:"Getting Started",permalink:"/nifikop/docs/v0.6.1/2_setup/1_getting_started"}},i=[{value:"Available",id:"available",children:[{value:"NiFi cluster installation",id:"nifi-cluster-installation",children:[]},{value:"Graceful NiFi Cluster Scaling",id:"graceful-nifi-cluster-scaling",children:[]},{value:"Communication via SSL",id:"communication-via-ssl",children:[]},{value:"Dataflow lifecycle management via CRD",id:"dataflow-lifecycle-management-via-crd",children:[]},{value:"Users &amp; access policies management",id:"users--access-policies-management",children:[]}]},{value:"Backlog",id:"backlog",children:[{value:"Monitoring via Prometheus",id:"monitoring-via-prometheus",children:[]},{value:"Reacting on Alerts",id:"reacting-on-alerts",children:[]},{value:"Seamless Istio mesh support",id:"seamless-istio-mesh-support",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"available"},"Available"),Object(b.b)("h3",{id:"nifi-cluster-installation"},"NiFi cluster installation"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Done")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jan 2020")))),Object(b.b)("h3",{id:"graceful-nifi-cluster-scaling"},"Graceful NiFi Cluster Scaling"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Done")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jan 2020")))),Object(b.b)("p",null,"Apache NiFi is a good candidate to create an operator, because everything is made to orchestrate it through REST Api calls. With this comes automation of actions such as scaling, following all required steps : ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"}),"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"),"."),Object(b.b)("h3",{id:"communication-via-ssl"},"Communication via SSL"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Done")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"May 2020")))),Object(b.b)("p",null,"The operator fully automates NiFi's SSL support.\nThe operator can provision the required secrets and certificates for you, or you can provide your own."),Object(b.b)("h3",{id:"dataflow-lifecycle-management-via-crd"},"Dataflow lifecycle management via CRD"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Done")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aug 2020")))),Object(b.b)("h3",{id:"users--access-policies-management"},"Users & access policies management"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Done")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"November 2020")))),Object(b.b)("p",null,"The operator fully automates NiFi's user and access policies management."),Object(b.b)("h2",{id:"backlog"},"Backlog"),Object(b.b)("h3",{id:"monitoring-via-prometheus"},"Monitoring via Prometheus"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To Do")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Oct 2020")))),Object(b.b)("p",null,"The NiFi operator exposes NiFi JMX metrics to Prometheus."),Object(b.b)("h3",{id:"reacting-on-alerts"},"Reacting on Alerts"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To Do")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Low")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("p",null,"The NiFi Operator acts as a ",Object(b.b)("strong",{parentName:"p"},"Prometheus Alert Manager"),". It receives alerts defined in Prometheus, and creates actions based on Prometheus alert annotations."),Object(b.b)("p",null,"Currently, there are three actions expected :"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"upscale cluster (add a new Node)"),Object(b.b)("li",{parentName:"ul"},"downscale cluster (remove a Node)"),Object(b.b)("li",{parentName:"ul"},"add additional disk to a Node")),Object(b.b)("h3",{id:"seamless-istio-mesh-support"},"Seamless Istio mesh support"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To Do")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Low")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Targeted Start date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Operator allows to use ClusterIP services instead of Headless, which still works better in case of Service meshes."),Object(b.b)("li",{parentName:"ul"},"To avoid too early nifi initialization, which might lead to unready sidecar container. The operator will use a small script to\nmitigate this behaviour. All NiFi image can be used the only one requirement is an available ",Object(b.b)("strong",{parentName:"li"},"wget")," command."),Object(b.b)("li",{parentName:"ul"},"To access a NiFi cluster which runs inside the mesh. Operator will supports creating Istio ingress gateways.")))}p.isMDXComponent=!0},290:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,m=d["".concat(l,".").concat(s)]||d[s]||O[s]||b;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);