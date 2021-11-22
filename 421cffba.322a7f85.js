(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return j}));var n=a(2),r=a(6),b=(a(0),a(389)),l={id:"1_nifi_cluster",title:"NiFi cluster",sidebar_label:"NiFi cluster"},i={unversionedId:"5_references/1_nifi_cluster/1_nifi_cluster",id:"version-v0.7.5/5_references/1_nifi_cluster/1_nifi_cluster",isDocsHomePage:!1,title:"NiFi cluster",description:"NifiCluster describes the desired state of the NiFi cluster we want to setup through the operator.",source:"@site/versioned_docs/version-v0.7.5/5_references/1_nifi_cluster/1_nifi_cluster.md",slug:"/5_references/1_nifi_cluster/1_nifi_cluster",permalink:"/nifikop/docs/5_references/1_nifi_cluster/1_nifi_cluster",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.7.5/5_references/1_nifi_cluster/1_nifi_cluster.md",version:"v0.7.5",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1637577530,sidebar_label:"NiFi cluster",sidebar:"version-v0.7.5/docs",previous:{title:"Provisioning NiFi Users and Groups",permalink:"/nifikop/docs/3_tasks/4_nifi_user_group"},next:{title:"Read only configurations",permalink:"/nifikop/docs/5_references/1_nifi_cluster/2_read_only_config"}},c=[{value:"NifiCluster",id:"nificluster",children:[]},{value:"NifiClusterSpec",id:"nificlusterspec",children:[]},{value:"NifiClusterStatus",id:"nificlusterstatus",children:[]},{value:"ServicePolicy",id:"servicepolicy",children:[]},{value:"PodPolicy",id:"podpolicy",children:[]},{value:"ManagedUsers",id:"managedusers",children:[]},{value:"DisruptionBudget",id:"disruptionbudget",children:[]},{value:"LdapConfiguration",id:"ldapconfiguration",children:[]},{value:"NifiClusterTaskSpec",id:"nificlustertaskspec",children:[]},{value:"ClusterState",id:"clusterstate",children:[]}],O={rightToc:c};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"NifiCluster")," describes the desired state of the NiFi cluster we want to setup through the operator."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  service:\n    headlessEnabled: true\n  zkAddress: 'zookeepercluster-client.zookeeper:2181'\n  zkPath: '/simplenifi'\n  clusterImage: 'apache/nifi:1.11.3'\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      storageConfigs:\n        - mountPath: '/opt/nifi/nifi-current/logs'\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: 'standard'\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: 'default'\n      resourcesRequirements:\n        limits:\n          cpu: '2'\n          memory: 3Gi\n        requests:\n          cpu: '1'\n          memory: 1Gi\n  nodes:\n    - id: 1\n      nodeConfigGroup: 'default_group'\n    - id: 2\n      nodeConfigGroup: 'default_group'\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: 'http'\n        name: 'http'\n        containerPort: 8080\n      - type: 'cluster'\n        name: 'cluster'\n        containerPort: 6007\n      - type: 's2s'\n        name: 's2s'\n        containerPort: 10000\n  externalServices:\n    - name: 'clusterip'\n      spec:\n        type: ClusterIP\n        portConfigs:\n          - port: 8080\n            internalListenerName: 'http'\n      serviceAnnotations:\n        toto: tata\n")),Object(b.b)("h2",{id:"nificluster"},"NifiCluster"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metadata"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"}),"ObjectMetadata")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"is metadata that all persisted resources must have, which includes all objects users must create."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spec"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#nificlusterspec"}),"NifiClusterSpec")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the desired state of NifiCluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#nificlusterstatus"}),"NifiClusterStatus")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the observed state of NifiCluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(b.b)("h2",{id:"nificlusterspec"},"NifiClusterSpec"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clientType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Enum={"tls","basic"}'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines if the operator will use basic or tls authentication to query the NiFi cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tls"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Enum={"external","internal"}'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines if the cluster is internal (i.e manager by the operator) or external."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"internal"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodeURITemplate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"used to dynamically compute node uri."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if external type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nifiURI"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stringused access through a LB uri."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if external type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rootProcessGroupId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the uuid of the root process group for this cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if external type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secretRef"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../4_nifi_parameter_context#secretreference"}),"SecretReference")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reference the secret containing the informations required to authentiticate to the cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if external type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"proxyUrl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the proxy required to query the NiFi cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if external type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"service"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#servicepolicy"}),"ServicePolicy")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the policy for services owned by NiFiKop operator."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pod"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#podpolicy"}),"PodPolicy")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the policy for pod owned by NiFiKop operator."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zkAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the ZooKeeper connection string in the form hostname:port where host and port are those of a Zookeeper server."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zkPath"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the Zookeeper chroot path as part of its Zookeeper connection string which puts its data under same path in the global ZooKeeper namespace."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"/"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initContainerImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"can override the default image used into the init container to check if ZoooKeeper server is reachable.."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"busybox"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initContainers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]","string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines additional initContainers configurations."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clusterImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"can specify the whole nificluster image in one place."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"oneNifiNodePerNode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if set to true every nifi node is started on a new node, if there is not enough node to do that it will stay in pending state. If set to false the operator also tries to schedule the nifi node to a unique node but if the node number is insufficient the nifi node will be scheduled to a node where a nifi node is already running."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"propagateLabels"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"managedAdminUsers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#managedusers"}),"ManagedUser")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the list of users that will be added to the managed admin group (with all rights)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"managedReaderUsers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#managedusers"}),"ManagedUser")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the list of users that will be added to the managed admin group (with all rights)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readOnlyConfig"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/2_read_only_config"}),"ReadOnlyConfig")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodeConfigGroups"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map","[","string","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/3_node_config"}),"NodeConfig")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies multiple node configs with unique name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/3_node_config"}),"Node")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the list of cluster nodes, all node requires an image, unique id, and storageConfigs settings"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"disruptionBudget"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#disruptionbudget"}),"DisruptionBudget")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the configuration for PodDisruptionBudget."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ldapConfiguration"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ldapconfiguration"}),"LdapConfiguration")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the configuration if you want to use LDAP."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nifiClusterTaskSpec"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#nificlustertaskspec"}),"NifiClusterTaskSpec")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the configuration of the nifi cluster Tasks."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"listenersConfig"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/6_listeners_config"}),"ListenersConfig")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies nifi's listener specifig configs."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sidecarConfigs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#Container"}),"Container")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines additional sidecar configurations. ","[Check documentation for more informations]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"externalServices"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/7_external_service_config"}),"ExternalServiceConfigs")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies settings required to access nifi externally."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"nificlusterstatus"},"NifiClusterStatus"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodesState"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map","[","string","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/5_node_state"}),"NodeState")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Store the state of each nifi node."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"State"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#clusterstate"}),"ClusterState")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Store the state of each nifi node."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rootProcessGroupId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the uuid of the root process group for this cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"servicepolicy"},"ServicePolicy"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"headlessEnabled"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies if the cluster should use headlessService for Nifi or individual services using service per nodes may come an handy case of service mesh."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"annotations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map","[","string","]","string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Annotations specifies the annotations to attach to services the NiFiKop operator creates"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"podpolicy"},"PodPolicy"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"annotations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map","[","string","]","string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Annotations specifies the annotations to attach to pods the NiFiKop operator creates"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"managedusers"},"ManagedUsers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"create"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if set to true, will create a podDisruptionBudget."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name field is use to name the NifiUser resource, if not identity is provided it will be used to name the user on NiFi cluster side."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"disruptionbudget"},"DisruptionBudget"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"identity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"identity field is use to define the user identity on NiFi cluster side, it use full when the user's name doesn't suite with Kubernetes resource name."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"budget"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the budget to set for the PDB, can either be static number or a percentage."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"ldapconfiguration"},"LdapConfiguration"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enabled"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if set to true, we will enable ldap usage into nifi.properties configuration."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"space-separated list of URLs of the LDAP servers (i.e. ldap://${hostname}:${port})."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"searchBase"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"base DN for searching for users (i.e. CN=Users,DC=example,DC=com)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"searchFilter"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter for searching for users against the 'User Search Base'. (i.e. sAMAccountName={0}). The user specified name is inserted into '{0}'."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')))),Object(b.b)("h2",{id:"nificlustertaskspec"},"NifiClusterTaskSpec"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retryDurationMinutes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the amount of time the Operator waits for the task."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5")))),Object(b.b)("h2",{id:"clusterstate"},"ClusterState"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NifiClusterInitializing"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ClusterInitializing"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the cluster is still in initializing stage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NifiClusterInitialized"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ClusterInitialized"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the cluster is initialized")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NifiClusterReconciling"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ClusterReconciling"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the cluster is still in reconciling stage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NifiClusterRollingUpgrading"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ClusterRollingUpgrading"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the cluster is rolling upgrading")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NifiClusterRunning"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ClusterRunning"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the cluster is in running state")))))}j.isMDXComponent=!0},389:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),j=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=j(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,O=c(e,["components","mdxType","originalType","parentName"]),p=j(a),u=n,o=p["".concat(l,".").concat(u)]||p[u]||d[u]||b;return a?r.a.createElement(o,i(i({ref:t},O),{},{components:a})):r.a.createElement(o,i({ref:t},O))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var O=2;O<b;O++)l[O]=a[O];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);