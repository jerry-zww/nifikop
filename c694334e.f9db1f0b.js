(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{313:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),r=(a(0),a(389)),o={id:"3_features",title:"Features",sidebar_label:"Features"},s={unversionedId:"1_concepts/3_features",id:"version-v0.7.5/1_concepts/3_features",isDocsHomePage:!1,title:"Features",description:"To highligt some of the features we needed and were not possible with the operators available, please keep reading",source:"@site/versioned_docs/version-v0.7.5/1_concepts/3_features.md",slug:"/1_concepts/3_features",permalink:"/nifikop/docs/1_concepts/3_features",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.7.5/1_concepts/3_features.md",version:"v0.7.5",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1637577530,sidebar_label:"Features",sidebar:"version-v0.7.5/docs",previous:{title:"Design Principes",permalink:"/nifikop/docs/1_concepts/2_design_principes"},next:{title:"Roadmap",permalink:"/nifikop/docs/1_concepts/4_roadmap"}},l=[{value:"Fine Grained Node Config Support",id:"fine-grained-node-config-support",children:[]},{value:"Graceful NiFi Cluster Scaling",id:"graceful-nifi-cluster-scaling",children:[]},{value:"Graceful Rolling Upgrade",id:"graceful-rolling-upgrade",children:[]},{value:"Dynamic Configuration Support",id:"dynamic-configuration-support",children:[]},{value:"Dataflow lifecycle management via CRD",id:"dataflow-lifecycle-management-via-crd",children:[]},{value:"Users and access policies management",id:"users-and-access-policies-management",children:[]}],c={rightToc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To highligt some of the features we needed and were not possible with the operators available, please keep reading "),Object(r.b)("h2",{id:"fine-grained-node-config-support"},"Fine Grained Node Config Support"),Object(r.b)("p",null,"We needed to be able to react to events in a fine-grained way for each Node - and not in the limited way StatefulSet does (which, for example, removes the most recently created Nodes). Some of the available solutions try to overcome these deficits by placing scripts inside the container to generate configs at runtime (a good example is our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop"}),"Cassandra Operator"),"), whereas the Orange NiFi operator's configurations are deterministically placed in specific Configmaps."),Object(r.b)("h2",{id:"graceful-nifi-cluster-scaling"},"Graceful NiFi Cluster Scaling"),Object(r.b)("p",null,"Apache NiFi is a good candidate to create an operator, because everything is made to orchestrate it through REST Api calls. With this comes automation of actions such as scaling, following all required steps : ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"}),"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"),"."),Object(r.b)("h2",{id:"graceful-rolling-upgrade"},"Graceful Rolling Upgrade"),Object(r.b)("p",null,"Operator supports graceful rolling upgrade. It means the operator will check if the cluster is healthy."),Object(r.b)("h2",{id:"dynamic-configuration-support"},"Dynamic Configuration Support"),Object(r.b)("p",null,"NiFi operates with two type of configs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Read-only"),Object(r.b)("li",{parentName:"ul"},"PerNode")),Object(r.b)("p",null,"Read only config requires node restart to update all the others may be updated dynamically.\nOperator CRD distinguishes these fields, and proceed with the right action. It can be a rolling upgrade, or\na dynamic reconfiguration."),Object(r.b)("h2",{id:"dataflow-lifecycle-management-via-crd"},"Dataflow lifecycle management via CRD"),Object(r.b)("p",null,"In a cloud native approach, we are looking for important management features, which we have applied to NiFi Dataflow : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Automated deployment :")," Based on the NiFi registry, you can describe your ",Object(r.b)("inlineCode",{parentName:"li"},"NiFiDataflow")," resource that will be deployed and run on the targeted NiFi cluster."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Portability :")," On kubernetes everything is a yaml file, so with NiFiKop we give you the ability to describe your clusters but also the ",Object(r.b)("inlineCode",{parentName:"li"},"registry clients"),", ",Object(r.b)("inlineCode",{parentName:"li"},"parameter contexts")," and ",Object(r.b)("inlineCode",{parentName:"li"},"dataflows")," of your NiFi application, so that you can redeploy the same thing in a different namespace or cluster."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"State management :")," With NiFiKop resources, you can describe what you want, and the operator deals with the NiFi Rest API to make sure the resource stays in sync (even if someone manually makes changes directly on NiFi cluster)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Configurations :")," Based on the ",Object(r.b)("inlineCode",{parentName:"li"},"Parameter Contexts"),", NiFiKop allows you to associate to your ",Object(r.b)("inlineCode",{parentName:"li"},"Dataflow")," (= your applications) with a different configuration depending on the environment !")),Object(r.b)("h2",{id:"users-and-access-policies-management"},"Users and access policies management"),Object(r.b)("p",null,"Without the management of users and access policies associated, it was not possible to have a fully automated NiFi cluster setup due to : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Node scaling :")," when a new node joins the cluster it needs to have some roles like ",Object(r.b)("inlineCode",{parentName:"li"},"proxy user request"),", ",Object(r.b)("inlineCode",{parentName:"li"},"view data")," etc., by managing users and access policies we can easily create a user for this node with the right accesses."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Operator admin rigth :")," For the operator to manage efficiently the cluster it needs a lot of rights as ",Object(r.b)("inlineCode",{parentName:"li"},"deploying process groups"),", ",Object(r.b)("inlineCode",{parentName:"li"},"empty the queues")," etc., these rights are not available by default when you set a user as ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#initial-admin-identity"}),"InitialAdmin"),". Once again by giving the ability to define users and access policies we go through this."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"User's access :")," as seen just below we need to define the operator as ",Object(r.b)("inlineCode",{parentName:"li"},"InitialAdmin"),", in this situation there is no more users that can access to the web UI to manually give access to other users. That's why we extend the ",Object(r.b)("inlineCode",{parentName:"li"},"InitialAdmin")," concept into the operator, giving the ability to define a list of users as admins.")),Object(r.b)("p",null,"In addition to these requirements to have a fully automated and managed cluster, we introduced some useful features : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"User management :")," using ",Object(r.b)("inlineCode",{parentName:"li"},"NifiUser")," resource, you are able to create (or bind an existing) user in NiFi cluster and apply some access policies that will be managed and continuously synced by the operator."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Group management :")," using ",Object(r.b)("inlineCode",{parentName:"li"},"NifiUserGroup")," resource, you can create groups in NiFi cluster and apply access policies and a list of ",Object(r.b)("inlineCode",{parentName:"li"},"NifiUser")," that will be managed and continuously synced by the operator."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Default group :")," As the definition of ",Object(r.b)("inlineCode",{parentName:"li"},"NifiUser")," and ",Object(r.b)("inlineCode",{parentName:"li"},"NifiUserGroup")," resources could be heavy for some simple use cases, we also decided to define two default groups that you can feed with a list of users that will be created and managed by the operator (no kubernetes resources to create) : ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Admins :")," a group giving access to everything on the NiFi Cluster,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Readers :")," a group giving access as viewer on the NiFi Cluster.")))),Object(r.b)("p",null,"By introducing this feature we are giving you the ability to fully automate your deployment, from the NiFi Cluster to your managed NiFi Dataflow."))}u.isMDXComponent=!0},389:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return a?i.a.createElement(m,s(s({ref:t},c),{},{components:a})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);