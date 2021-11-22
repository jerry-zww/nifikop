(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(389)),c=n(393),o=n(394),l={id:"2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns",title:"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["gke","nifikop","secured","oidc","google cloud platform","google cloud","gcp","kubernetes"]},s={permalink:"/nifikop/blog/2020/06/30/secured_nifi_cluster_on_gcp_with_external_dns",source:"@site/blog/2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns.md",description:"Objectives",date:"2020-06-30T00:00:00.000Z",tags:[{label:"gke",permalink:"/nifikop/blog/tags/gke"},{label:"nifikop",permalink:"/nifikop/blog/tags/nifikop"},{label:"secured",permalink:"/nifikop/blog/tags/secured"},{label:"oidc",permalink:"/nifikop/blog/tags/oidc"},{label:"google cloud platform",permalink:"/nifikop/blog/tags/google-cloud-platform"},{label:"google cloud",permalink:"/nifikop/blog/tags/google-cloud"},{label:"gcp",permalink:"/nifikop/blog/tags/gcp"},{label:"kubernetes",permalink:"/nifikop/blog/tags/kubernetes"}],title:"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform",readingTime:8.085,truncated:!1,nextItem:{title:"Secured NiFi cluster with NiFiKop on the Google Cloud Platform",permalink:"/nifikop/blog/2020/05/20/secured_nifi_cluster_on_gcp"}},u=[{value:"Objectives",id:"objectives",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[{value:"Disclaimer",id:"disclaimer",children:[]},{value:"Create OAuth Credentials",id:"create-oauth-credentials",children:[]},{value:"Create service account",id:"create-service-account",children:[]}]},{value:"Deploy secured cluster",id:"deploy-secured-cluster",children:[{value:"Deploy GKE cluster with Terraform",id:"deploy-gke-cluster-with-terraform",children:[]},{value:"Deploy NiFiKop",id:"deploy-nifikop",children:[]},{value:"Deploy Let&#39;s encrypt issuer",id:"deploy-lets-encrypt-issuer",children:[]},{value:"Deploy Secured NiFi cluster",id:"deploy-secured-nifi-cluster",children:[]},{value:"Access to your secured NiFi Cluster",id:"access-to-your-secured-nifi-cluster",children:[]}]},{value:"Cleaning",id:"cleaning",children:[]}],b={rightToc:u};function p(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"objectives"},"Objectives"),Object(r.b)("p",null,"This article is pretty similar to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nifikop/blog/2020/05/20/secured_nifi_cluster_on_gcp"}),"Secured NiFi cluster with NiFiKop on the Google Cloud Platform")," one."),Object(r.b)("p",null,"This time, we will also use ",Object(r.b)("strong",{parentName:"p"},"NiFiKop")," and ",Object(r.b)("strong",{parentName:"p"},"Terraform")," to quickly : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"a GKE cluster")," to host our NiFi cluster,"),Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"a ",Object(r.b)("inlineCode",{parentName:"strong"},"cert-manager")," issuer")," as a convenient way to generate TLS certificates,"),Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"a zookeeper instance")," to manage cluster coordination and state across the cluster, "),Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"X secured NiFi instances in cluster mode")),Object(r.b)("li",{parentName:"ul"},"configure ",Object(r.b)("strong",{parentName:"li"},"NiFi to use OpenId connect")," for authentication"),Object(r.b)("li",{parentName:"ul"},"configure ",Object(r.b)("strong",{parentName:"li"},"HTTPS loadbalancer with Client Ip affinity")," to access the NiFi cluster"),Object(r.b)("li",{parentName:"ul"},"dynamically re-size the cluster")),Object(r.b)("p",null,"We will  :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kubernetes-sigs/external-dns"}),"external DNS")," instead of manually declare our DNS names."),Object(r.b)("li",{parentName:"ul"},"delegate the certificates authority to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://letsencrypt.org/"}),"Let's Encrypt"))),Object(r.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have your own domain (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://domains.google/"}),"you can create one with Google"),") : it will be used to map a domain on the NiFi's web interface. In this post, we will use : ",Object(r.b)("inlineCode",{parentName:"li"},"trycatchlearn.fr"),". ")),Object(r.b)("h3",{id:"disclaimer"},"Disclaimer"),Object(r.b)("p",null,"This article can get you started for a production deployment, but should not used as so. There are still some steps needed such as Zookeeper, GKE configuration etc."),Object(r.b)("h3",{id:"create-oauth-credentials"},"Create OAuth Credentials"),Object(r.b)("p",null,"First step is to create the OAuth Credential : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to your GCP project, and in the left bar : ",Object(r.b)("strong",{parentName:"li"},"APIs & Services > Credentials")),Object(r.b)("li",{parentName:"ul"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"CREATE CREDENTIALS : OAuth client ID")),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"Web Application")),Object(r.b)("li",{parentName:"ul"},"Give a name such as ",Object(r.b)("inlineCode",{parentName:"li"},"SecuredNifi"),". "),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"Authorised JavaScript origins"),", use your own domain. I'm using : ",Object(r.b)("inlineCode",{parentName:"li"},"https://nifi.orange.trycatchlearn.fr:8443")),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"Authorised redirect URIs")," it's your previous URI + ",Object(r.b)("inlineCode",{parentName:"li"},"/nifi-api/access/oidc/callback"),", for me : ",Object(r.b)("inlineCode",{parentName:"li"},"https://nifi.orange.trycatchlearn.fr:8443/nifi-api/access/oidc/callback"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"OAuth credentials",src:n(424).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create the OAuth credentials")),Object(r.b)("p",null,"Once the credentials are created, you will get a client ID and a client secret that you will need in ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," definition."),Object(r.b)("h3",{id:"create-service-account"},"Create service account"),Object(r.b)("p",null,"For the GKE cluster deployment you need a service account with ",Object(r.b)("inlineCode",{parentName:"p"},"Editor")," role, and ",Object(r.b)("inlineCode",{parentName:"p"},"Kubernetes Engine Admin"),"."),Object(r.b)("h2",{id:"deploy-secured-cluster"},"Deploy secured cluster"),Object(r.b)("p",null,"Once you have completed the above prerequisites, deploying you NiFi cluster will only take three steps and few minutes."),Object(r.b)("p",null,"Open your Google Cloud Console in your GCP project and run : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/Orange-OpenSource/nifikop/nifikop.git\ncd nifikop/docs/tutorials/secured_nifi_cluster_on_gcp_with_external_dns\n")),Object(r.b)("h3",{id:"deploy-gke-cluster-with-terraform"},"Deploy GKE cluster with Terraform"),Object(r.b)("h4",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"You can configure variables before running the deployment in the file ",Object(r.b)("inlineCode",{parentName:"p"},"terraform/env/demo.tfvars")," : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"project")," : GCP project ID"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"region")," : GCP region"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"zone")," : GCP zone"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"cluster_machines_types")," : defines the machine type for GKE cluster nodes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"min_node")," : minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"max_node")," : maximum number of nodes in the NodePool. Must be >= min_node_count."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"initial_node_count")," : the number of nodes to create in this cluster's default node pool."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"preemptible")," : true/false using preemptibles nodes.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd terraform\n./start.sh <service account key's path>\n")),Object(r.b)("p",null,"This operation could take 15 minutes (time to the GKE cluster and its nodes to setup)"),Object(r.b)("p",null,"Once the deployment is ready load the GKE configuration : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"gcloud container clusters get-credentials nifi-cluster --zone <configured gcp zone> --project <GCP project's id>\n")),Object(r.b)("h4",{id:"explanations"},"Explanations"),Object(r.b)("p",null,"The first step is to deploy a GKE cluster, with the required configuration, you can for example check the nodes configuration : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl get nodes\nNAME                                                  STATUS   ROLES    AGE    VERSION\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-2dl3   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5bzb   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5t3l   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-w86j   Ready    <none>   110m   v1.15.9-gke.24\n")),Object(r.b)("p",null,"Once the cluster is deployed, we created all the required namespaces : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl get namespaces\nNAME              STATUS   AGE\ncert-manager      Active   16m\ndefault           Active   27m\nkube-node-lease   Active   27m\nkube-public       Active   27m\nkube-system       Active   27m\nnifikop           Active   16m\nzookeeper         Active   16m\n")),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," namespace we deployed a ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," stack in a cluster-wide scope, which will be responsible for all the certificates generation."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"in this post, we will let ",Object(r.b)("inlineCode",{parentName:"p"},"let's encrypt")," act as certificate authority.\nFor more informations check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nifikop/docs/3_tasks/2_security/1_ssl#using-an-existing-issuer"}),"documentation page")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl -n cert-manager get pods\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-55fff7f85f-74nf5              1/1     Running   0          72m\ncert-manager-cainjector-54c4796c5d-mfbbx   1/1     Running   0          72m\ncert-manager-webhook-77ccf5c8b4-m6ws4      1/1     Running   2          72m\n")),Object(r.b)("p",null,"It will also deploy the Zookeeper cluster based on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper"}),"bitnami helm chart")," : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl -n zookeeper get pods\nNAME          READY   STATUS    RESTARTS   AGE\nzookeeper-0   1/1     Running   0          74m\nzookeeper-1   1/1     Running   0          74m\nzookeeper-2   1/1     Running   0          74m\n")),Object(r.b)("p",null,"And finally it deploys the ",Object(r.b)("inlineCode",{parentName:"p"},"NiFiKop")," operator which is ready to create NiFi clusters : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl -n nifikop get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nexternal-dns-5d588c6cd6-dw44f   1/1     Running   0          2m58s\n")),Object(r.b)("h3",{id:"deploy-nifikop"},"Deploy NiFiKop"),Object(r.b)("p",null,"Now we have to deploy the ",Object(r.b)("inlineCode",{parentName:"p"},"NiFiKop")," operator : "),Object(r.b)("p",null,"Deploy the NiFiKop crds : "),Object(r.b)(c.a,{defaultValue:"k8s16+",values:[{label:"k8s version 1.16+",value:"k8s16+"},{label:"k8s previous versions",value:"k8sprev"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"k8s16+",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/nifi.orange.com_nificlusters_crd.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/nifi.orange.com_nifiusers_crd.yaml\n"))),Object(r.b)(o.a,{value:"k8sprev",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/v1beta1/nifi.orange.com_nificlusters_crd.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/v1beta1/nifi.orange.com_nifiusers_crd.yaml\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add orange-incubator https://orange-kubernetes-charts-incubator.storage.googleapis.com/\nhelm repo update\n")),Object(r.b)(c.a,{defaultValue:"helm3",values:[{label:"helm 3",value:"helm3"},{label:"helm previous",value:"helm"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"helm3",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# You have to create the namespace before executing following command\nhelm install nifikop \\\n    --namespace=nifikop \\\n    --set image.tag=v0.2.1-release \\\n    orange-incubator/nifikop\n"))),Object(r.b)(o.a,{value:"helm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm install --name=nifikop \\\n    --namespace=nifikop \\\n    --set image.tag=v0.2.1-release \\\n    orange-incubator/nifikop\n")))),Object(r.b)("h3",{id:"deploy-lets-encrypt-issuer"},"Deploy Let's encrypt issuer"),Object(r.b)("p",null,"As mentioned at the start of the article, we want to delegate the certificate authority to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://letsencrypt.org/"}),"Let's Encrypt"),", so to do this with ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," we have to create an issuer.\nSo edit the ",Object(r.b)("inlineCode",{parentName:"p"},"kubernetes/nifi/letsencryptissuer.yaml")," and set it with your own values :  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: cert-manager.io/v1alpha2\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let\'s Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: <your email>\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account\'s private key.\n      name: example-issuer-account-key\n    # Add a single challenge solver, HTTP01 using nginx\n    solvers:\n      - http01:\n          ingress:\n            ingressTemplate:\n              metadata:\n                annotations:\n                  "external-dns.alpha.kubernetes.io/ttl": "5"\n')),Object(r.b)("p",null,"You just have to change the ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.Acme.Email")," field with your own email.\nYou can also change the acme server to prod one ",Object(r.b)("inlineCode",{parentName:"p"},"https://acme-v02.api.letsencrypt.org/directory")),Object(r.b)("p",null,"Once the configuration is ok, you can deploy the ",Object(r.b)("inlineCode",{parentName:"p"},"Issuer")," : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"cd ..\nkubectl create -f kubernetes/nifi/letsencryptissuer.yaml\n")),Object(r.b)("h3",{id:"deploy-secured-nifi-cluster"},"Deploy Secured NiFi cluster"),Object(r.b)("p",null,"You will now deploy your secured cluster to do so edit the ",Object(r.b)("inlineCode",{parentName:"p"},"kubernetes/nifi/secured_nifi_cluster.yaml")," and set with your own values : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: securednificluster\n  namespace: nifi\nspec:\n  ...\n  initialAdminUser: <your google account email>\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - <nifi's hostname>:8443\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        ...\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        ...\n    ...\n  ...\n  listenersConfig:\n    useExternalDNS: true\n    clusterDomain: <nifi's domain name>\n    sslSecrets:\n      tlsSecretName: \"test-nifikop\"\n      create: true\n      issuerRef:\n        name: letsencrypt-staging\n        kind: Issuer\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Spec.InitialAdminUser")," : Your GCP account email (this will give you the admin role into the NiFi cluster), in my case ",Object(r.b)("inlineCode",{parentName:"li"},"alexandre.guitton@orange.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Spec.ReadOnlyConfig.NifiProperties.WebProxyHosts","[","0","]")," : The web hostname configured in the Oauth section, in my case ",Object(r.b)("inlineCode",{parentName:"li"},"nifi.orange.trycatchlearn.fr")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Spec.ReadOnlyConfig.NifiProperties.OverrideConfigs")," : you have to set the following properties : ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"nifi.security.user.oidc.client.id")," : OAuth Client ID"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"nifi.security.user.oidc.client.secret")," : OAuth Client secret"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Spec.ListenersConfig.ClusterDomain")," : This the domain name you configure into your ",Object(r.b)("inlineCode",{parentName:"li"},"External DNS")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Cloud DNS")," zone. In my case ",Object(r.b)("inlineCode",{parentName:"li"},"orange.trycatchlearn.fr"))),Object(r.b)("p",null,"Once the configuration is ok, you can deploy the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl create -f kubernetes/nifi/secured_nifi_cluster.yaml\n")),Object(r.b)("p",null,"The first time can take some time, the ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Let's encrypt")," will check that you are able to manage the dns zone, so if you check the pods :  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl get pods -n nifikop\nNAME                            READY   STATUS    RESTARTS   AGE\ncm-acme-http-solver-4fg5b       1/1     Running   0          18s\ncm-acme-http-solver-6sw9x       1/1     Running   0          20s\ncm-acme-http-solver-bpzvm       1/1     Running   0          20s\ncm-acme-http-solver-f8xvs       1/1     Running   0          19s\ncm-acme-http-solver-k997c       1/1     Running   0          17s\ncm-acme-http-solver-l5fzz       1/1     Running   0          18s\nexternal-dns-569bf79b57-hjmtt   1/1     Running   0          9h\nnifikop-56cb587d96-p8vdf        1/1     Running   0          29s\n")),Object(r.b)("p",null,"And check the ingresses : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get ingresses -n nifikop\nNAME                        HOSTS                                                 ADDRESS          PORTS   AGE\ncm-acme-http-solver-4pff9   nifi-2-node.nifi-headless.orange.trycatchlearn.fr                      80      2m27s\ncm-acme-http-solver-cfsf4   nifi-0-node.nifi-headless.orange.trycatchlearn.fr     34.120.24.109    80      2m30s\ncm-acme-http-solver-hn8jj   nifi-controller.nifikop.mgt.orange.trycatchlearn.fr   34.120.90.24     80      2m29s\ncm-acme-http-solver-llhsp   nifi-1-node.nifi-headless.orange.trycatchlearn.fr                      80      2m27s\ncm-acme-http-solver-v8dmm   nifi-headless.orange.trycatchlearn.fr                 34.120.201.215   80      2m28s\ncm-acme-http-solver-xvs9f   nifi.orange.trycatchlearn.fr                          35.244.202.176   80      2m27s\n")),Object(r.b)("p",null,"You can see some ngnix instances that are used to validate all the dns names you required into your certificates (for nodes and services)."),Object(r.b)("p",null,"After some times your cluster should be running : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl get pods -n nifikop\nNAME                            READY   STATUS    RESTARTS   AGE\nexternal-dns-569bf79b57-hjmtt   1/1     Running   0          9h\nnifi-0-nodekmhgz                1/1     Running   0          27m\nnifi-1-node4465q                1/1     Running   0          27m\nnifi-2-node5jwwx                1/1     Running   0          27m\nnifikop-56cb587d96-p8vdf        1/1     Running   0          40m\n")),Object(r.b)("h3",{id:"access-to-your-secured-nifi-cluster"},"Access to your secured NiFi Cluster"),Object(r.b)("p",null,"You can now access the NiFi cluster using the loadbalancer service hostname ",Object(r.b)("inlineCode",{parentName:"p"},"<nifi's cluster name>.<DNS name>"),", in my case it's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nifi.orange.trycatchlearn.fr:8443/nifi"}),"https://nifi.orange.trycatchlearn.fr:8443/nifi")," and authenticate on the cluster using the admin account email address configured in the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," resource."),Object(r.b)("p",null,"Here is my 3-nodes secured NiFi cluster up and running : "),Object(r.b)("p",null,Object(r.b)("img",{alt:"3 nodes cluster",src:n(425).default})),Object(r.b)("p",null,"3-nodes secured NiFi cluster : "),Object(r.b)("p",null,Object(r.b)("img",{alt:"3 nodes",src:n(426).default})),Object(r.b)("p",null,"You can now update the authorizations and add additional users/groups."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Just have a look on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://orange-opensource.github.io/nifikop/docs/3_tasks/2_security/1_ssl#operator-access-policies"}),"documentation's page")," to finish cleaning setup.\nAnd you can now start to play with scaling, following the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://orange-opensource.github.io/nifikop/docs/3_tasks/2_security/1_ssl#scale-up---node-declaration"}),"documentation's page")))),Object(r.b)("h2",{id:"cleaning"},"Cleaning"),Object(r.b)("p",null,"Start to remove you NiFi cluster and NiFiKop operator : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete nificlusters.nifi.orange.com nifi -n nifikop\nhelm del nifikop\nkubectl delete crds nificlusters.nifi.orange.com\nkubectl delete crds nifiusers.nifi.orange.com\nkubectl delete issuers.cert-manager.io letsencrypt-staging -n nifikop\n")),Object(r.b)("p",null,"To destroy all resources you created, you just need to run : "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-consol"}),"cd terraform\n./destroy.sh <service account key's path>\n")))}p.isMDXComponent=!0},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||r;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},390:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},391:function(e,t,n){"use strict";var a=n(0),i=n(392);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},392:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},393:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(391),c=n(390),o=n(52),l=n.n(o),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(r.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(a.useState)(o),O=h[0],j=h[1],y=Object(a.useState)(!1),N=y[0],v=y[1];if(null!=p){var k=f[p];null!=k&&k!==O&&b.some((function(e){return e.value===k}))&&j(k)}var w=function(e){j(e),null!=p&&g(p,e)},C=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},A=function(){v(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",_),window.addEventListener("mousedown",A),function(){window.removeEventListener("keydown",_),window.removeEventListener("mousedown",A)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),_(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},394:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},424:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oauth_credentials-531aa57e08dcc1e4a0a0bace39d779c3.png"},425:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3_nodes_cluster-97f4c386a2bec5bd0ab11c3b90ca1f7d.png"},426:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3_nodes-09ddf2fa04ee827ae2632a3019ca2aab.png"}}]);