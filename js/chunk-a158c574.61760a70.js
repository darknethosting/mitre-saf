(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a158c574"],{"10d5":function(e,t,a){e.exports=a.p+"img/inspec-white-back-border.c1041c70.svg"},"262f":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ml-4"},[a("p",{staticClass:"google-font primary--text pa-0 ma-0",staticStyle:{"font-weight":"350","font-size":"200%"}},[e._t("title")],2),e._t("subtitle")],2)},s=[],i=a("2877"),o={},n=Object(i["a"])(o,r,s,!1,null,null,null);t["a"]=n.exports},"2af8":function(e,t,a){e.exports=a.p+"img/chef-2.e2e87707.svg"},"546b":function(e,t,a){e.exports=a.p+"img/inspec-blue-back-border.a1e9ab06.svg"},"57ae":function(e,t,a){var r={"./ansible.svg":"6056","./bg.svg":"c50c","./chef-2.svg":"2af8","./contact.svg":"c797","./heimdall.svg":"b163","./inspec-blue-back-border.svg":"546b","./inspec-white-back-border.svg":"10d5","./inspec-white-border.svg":"9ea2","./team.svg":"aea7","./terraform.svg":"d0c2"};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="57ae"},6056:function(e,t,a){e.exports=a.p+"img/ansible.31da5345.svg"},"72ca":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"pa-0"},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},e._l(e.categoryOrder,(function(t){return r("v-col",{key:t,staticClass:"ma-0 pa-1 ",class:e.$vuetify.breakpoint.smAndDown?"flex-grow-1":"d-flex",attrs:{xs:"12",sm:"6",md:"auto",lg:"auto",xl:"auto",outlined:""}},[r("v-card",{staticClass:"ma-0 pa-1",class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-3",attrs:{outlined:""}},[r("h2",{staticClass:"font-weight-bold break-word justify-center text-center google-font ma-1"},[e._v(e._s(t))]),e._l(e.getByCategory(e.profiles,[t]),(function(t,s){return r("v-card",{key:t.category+t.longName+s,staticClass:"google-font break-word text-none ma-1",class:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",attrs:{href:t.link,target:"_blank",label:"",outlined:""}},[r("v-list",{staticClass:"pa-0"},[r("v-list-item",{staticClass:"ma-0 pa-0"},[r("v-list-item-action",{staticClass:"ma-0 pa-0"},[r("v-img",{directives:[{name:"show",rawName:"v-show",value:t.svg,expression:"entry.svg"}],staticClass:"mx-2",staticStyle:{"max-width":"28px","max-height":"28px"},attrs:{src:a("57ae")("./"+t.svg+".svg"),"svg-inline":"",contain:""}})],1),r("v-list-item-title",{staticClass:"ml-1 pa-1 ",staticStyle:{"font-size":"90%"}},[e._v(e._s(t.shortName))])],1)],1)],1)}))],2)],1)})),1)],1)],1)},s=[],i={props:{profiles:Array,categoryOrder:Array},data:function(){return{fab:!1}},methods:{make_linkable:function(e){return e.replace(/\s+/g,"-").toLowerCase()},onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>200}},toTop:function(){this.$vuetify.goTo(0)},getByCategory:function(e,t){var a,r,s=[];for(a=0;a<e.length;a++)for(r=0;r<e[a].category.length;r++)e[a].category[r]==t&&s.push(e[a]);return s.sort((function(e,t){return e["shortName"]>t["shortName"]?1:e["shortName"]<t["shortName"]?-1:0}))}},computed:{moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}}},o=i,n=(a("acd7"),a("2877")),c=a("6544"),l=a.n(c),m=a("b0af"),g=a("62ad"),b=a("a523"),u=a("a75b"),p=a("adda"),d=a("8860"),v=a("da13"),h=a("1800"),S=a("5d23"),f=a("0fd9"),y=Object(n["a"])(o,r,s,!1,null,"28cc7ed7",null);t["a"]=y.exports;l()(y,{VCard:m["a"],VCol:g["a"],VContainer:b["a"],VContent:u["a"],VImg:p["a"],VList:d["a"],VListItem:v["a"],VListItemAction:h["a"],VListItemTitle:S["b"],VRow:f["a"]})},"9ea2":function(e,t,a){e.exports=a.p+"img/inspec-white-border.076afbe5.svg"},acd7:function(e,t,a){"use strict";var r=a("b395"),s=a.n(r);s.a},aea7:function(e,t,a){e.exports=a.p+"img/team.bcdbf0b8.svg"},af6a:function(e){e.exports=JSON.parse('{"baselines":[{"shortName":"Red Hat 6 STIG","longName":"Red Hat 6 STIG","link":"https://github.com/mitre/red-hat-enterprise-linux-6-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"]},{"shortName":"Red Hat 7 STIG","longName":"Red Hat 7 STIG","link":"https://github.com/mitre/redhat-enterprise-linux-7-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"]},{"shortName":"Red Hat CVE Scan","longName":"Red Hat CVE Vulnerability Scan","link":"https://github.com/CMSgov/rhel_cve_vulnerability_scan_baseline","svg":"inspec-blue-back-border","category":["Operating Systems"]},{"shortName":"Windows 2012 STIG","longName":"Microsoft Windows 2012r2 Member Server STIG","link":"https://github.com/mitre/microsoft-windows-2012r2-memberserver-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"]},{"shortName":"Windows 2016 STIG","longName":"Microsoft Windows Server 2016 STIG","link":"https://github.com/mitre/microsoft-windows-server-2016-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"]},{"shortName":"Docker CE CIS","longName":"Docker CE CIS","link":"https://github.com/mitre/docker-ce-cis-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"]},{"shortName":"Ubuntu 16.04 STIG","longName":"Canonical Ubuntu 16.04 STIG","link":"https://github.com/mitre/canonical-ubuntu-16.04-lts-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"]},{"shortName":"Windows 10 STIG","longName":"Microsoft Windows 10 STIG v1r19","link":"https://github.com/mitre/microsoft-windows-10-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"]},{"shortName":"RSA Archer 6 SCG","longName":"RSA Archer 6 Security Configuration Guide","link":"https://github.com/mitre/rsa-archer-6-security-configuration-guide-baseline","svg":"inspec-blue-back-border","category":["Application Logic"]},{"shortName":"Red Hat Jboss 6.3 STIG","longName":"Red Hat Jboss Enterprise Application Server 6.3 STIG","link":"https://github.com/mitre/red-hat-jboss-eap-6.3-stig-baseline","svg":"inspec-blue-back-border","category":["Application Logic"]},{"shortName":"JRE 7 STIG","longName":"Oracle Java Runtime Environment 7 Unix STIG","link":"https://github.com/mitre/oracle-java-runtime-environment-7-unix-stig-baseline","svg":"inspec-blue-back-border","category":["Application Logic"]},{"shortName":"JRE 8 STIG","longName":"Oracle Java Runtime Environment 8 Unix STIG","link":"https://github.com/mitre/oracle-java-runtime-environment-8-unix-stig-baseline","svg":"inspec-blue-back-border","category":["Application Logic"]},{"shortName":"IIS 8.5 Server STIG","longName":"Microsoft IIS 8.5 Server STIG","link":"https://github.com/mitre/microsoft-iis-8.5-server-stig-baseline","svg":"inspec-blue-back-border","category":["Web Servers"]},{"shortName":"IIS 8.5 Site STIG","longName":"Microsoft IIS 8.5 Site STIG","link":"https://github.com/mitre/microsoft-iis-8.5-site-stig-baseline","svg":"inspec-blue-back-border","category":["Web Servers"]},{"shortName":"NGINX","longName":"NGINX","link":"https://github.com/mitre/nginx-baseline","svg":"inspec-blue-back-border","category":["Web Servers"]},{"shortName":"Oracle MySQL 5.7 CIS","longName":"Oracle MySQL Enterprise Edition 5.7 CIS","link":"https://github.com/mitre/oracle-mysql-ee-5.7-cis-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"AWS RDS MySQL 5.7 CIS","longName":"AWS RDS MySQL Enterprise Edition 5.7 CIS","link":"https://github.com/mitre/aws-rds-oracle-mysql-ee-5.7-cis-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"PostgreSQL 9.x STIG","longName":"Crunchy Data PostgreSQL 9.x STIG","link":"https://github.com/CrunchyData/pgstigcheck-inspec","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"AWS RDS PostgreSQL 9.x STIG","longName":"AWS RDS Crunchy Data PostgreSQL 9.x STIG","link":"https://github.com/mitre/aws-rds-crunchy-data-postgresql-9-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"MSQL 2014 Database STIG","longName":"Microsoft SQL Server 2014 Database STIG","link":"https://github.com/mitre/microsoft-sql-server-2014-database-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"MSQL 2014 Instance STIG","longName":"Microsoft SQL Server 2014 Database STIG","link":"https://github.com/mitre/microsoft-sql-server-2014-instance-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"AWS MSQL 2014 STIG","longName":"AWS RDS Microsoft SQL 2014 Server STIG Instance","link":"https://github.com/mitre/aws-rds-microsoft-sql-server-2014-instance-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"Oracle Database 12c STIG","longName":"Oracle Database 12c STIG","link":"https://github.com/mitre/oracle-database-12c-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"MongoDB STIG","longName":"MongoDB STIG","link":"https://github.com/mitre/mongodb-enterprise-advanced-3-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"]},{"shortName":"AWS CIS","longName":"AWS CIS Foundations","link":"https://github.com/mitre/cis-aws-foundations-baseline","svg":"inspec-blue-back-border","category":["Cloud Service Providers"]},{"shortName":"AWS S3","longName":"AWS S3","link":"https://github.com/mitre/aws-s3-baseline","svg":"inspec-blue-back-border","category":["Cloud Service Providers"]},{"shortName":"AWS RDS CIS","longName":"AWS RDS Infrastructure CIS","link":"https://github.com/mitre/aws-rds-infrastructure-cis-baseline","svg":"inspec-blue-back-border","category":["Cloud Service Providers"]},{"shortName":"GCP PCI-DSS 3.2.1","longName":"Google Cloud Platform PCI-DSS 3.2.1","link":"https://github.com/GoogleCloudPlatform/inspec-gcp-pci-profile","svg":"inspec-blue-back-border","category":["Cloud Service Providers"]},{"shortName":"GCP CIS Benchmark","longName":"Google Cloud Platform CIS Benchmark","link":"https://github.com/GoogleCloudPlatform/inspec-gcp-cis-benchmark","svg":"inspec-blue-back-border","category":["Cloud Service Providers"]},{"shortName":"DRAFT: VMWare ESXI 6.7 STIG","longName":"DRAFT: VMWare ESXI 6.7 STIG","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-esxi-6.7-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"]},{"shortName":"DRAFT: VMWare vSphere VM 6.7 STIG","longName":"DRAFT: VMware vSphere Virtual Machines version 6.7 STIG","link":"    https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-vm-6.7-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"]},{"shortName":"VMWare vSphere VM 6.5 STIG","longName":"VMware vSphere Virtual Machines version 6.5 STIG","link":"https://github.com/kclinden/vmware-vsphere-65-virtual-machine-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"]},{"shortName":"VMWare ESXI 6.5 STIG","longName":"VMWare ESXI 6.5 STIG","link":"https://github.com/kclinden/vmware-esxi-6.5-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"]},{"shortName":"DRAFT: VMWare VCSA 6.7 STIG","longName":"DRAFT: VMware vCenter Service Appliance version 6.7","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vcsa/inspec/vmware-vcsa-6.7-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"]}]}')},b163:function(e,t,a){e.exports=a.p+"img/heimdall.97a3f78f.svg"},b395:function(e,t,a){},c50c:function(e,t,a){e.exports=a.p+"img/bg.7ef974da.svg"},c797:function(e,t,a){e.exports=a.p+"img/contact.c1b03809.svg"},d0c2:function(e,t,a){e.exports=a.p+"img/terraform.5a638e21.svg"},d4f4:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",{staticClass:"pa-0"},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{staticClass:"pa-2",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{md:"12",lg:"10",xs:"12"}},[a("Header",[a("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Validation")])]),a("div",{staticClass:"mx-4 google-font"},[a("p",{staticClass:"ma-0"},[e._v("\n            These open-source community-based InSpec profiles validate the security of\n            common system components. MITRE is helping to provide stewardship over\n            these profiles, hosted here and at other community vendor sites. If you\n            are interested in new profiles, please contact us at\n            "),a("a",{attrs:{href:e.mail_link}},[e._v(e._s(e.db.communityEmail))]),e._v(". If you are interested in developing and contributing your own\n            profiles, please see our\n            "),a("router-link",{attrs:{to:"training"}},[e._v("training material")]),e._v(".\n          ")],1)])],1)],1),a("profileTemplateCompact",{staticClass:"mx-1",attrs:{profiles:e.baselines.baselines,categoryOrder:e.categoryOrder}})],1)],1)},s=[],i=a("72ca"),o=a("262f"),n=a("af6a"),c=a("d67c"),l=a("2f62");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={components:{profileTemplateCompact:i["a"],Header:o["a"]},data:function(){return{baselines:n,db:c,isCompact:!1,categoryOrder:["Cloud Service Providers","Virtual Platforms","Operating Systems","Databases","Application Logic","Web Servers"]}},computed:{mail_link:function(){return"mailto:"+c.communityEmail},showCompact:function(){return this.$store.state.isCompact}},methods:g({},Object(l["c"])(["toggleCompact"]))},p=u,d=a("2877"),v=a("6544"),h=a.n(v),S=a("62ad"),f=a("a523"),y=a("a75b"),k=a("0fd9"),I=Object(d["a"])(p,r,s,!1,null,null,null);t["default"]=I.exports;h()(I,{VCol:S["a"],VContainer:f["a"],VContent:y["a"],VRow:k["a"]})}}]);