(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-546f324f"],{"169a":function(t,e,i){"use strict";i("368e");var a=i("480e"),n=i("4ad4"),s=i("b848"),o=i("75eb"),r=i("e707"),l=i("e4d3"),c=i("21be"),d=i("f2e7"),h=i("a293"),u=i("58df"),m=i("d9bd"),p=i("80d2");const g=Object(u["a"])(n["a"],s["a"],o["a"],r["a"],l["a"],c["a"],d["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(m["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===p["v"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(t.style={maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"36d6":function(t){t.exports=JSON.parse('{"items":[{"name":"InSpec","desc":"InSpec is a free and open-source Chef framework for testing and auditing applications and infrastructure. InSpec is designed to integrate very easily into existing DevOps pipelines. MITRE has partnered with the open-source community to create a growing number of baseline testing profiles to make it easy for developers to jump right in.","values":[{"name":"InSpec Documentation","desc":"InSpec\'s main webpage containing all written documentation and walkthroughs of the tool","link":"https://www.inspec.io/docs/"},{"name":"InSpec Profile Resources Reference","desc":"List of the existing systems InSpec available for the user to search through (known as InSpec \\"resources\\")","link":"https://www.inspec.io/docs/reference/resources/"},{"name":"Introduction to InSpec Video Courses","desc":"Video tutorials demonstrating and explaining how InSpec operates","link":"https://www.youtube.com/playlist?list=PLSZbtIlMt5rcbXOpMRucKzRMXR7HX7awy"},{"name":"InSpec Profile Developers Course","desc":"Reviews the basics on how to write and run tests","link":"https://mitre-inspec-developer.netlify.com/"},{"name":"InSpec Advanced Developer Course","desc":"In depth explaination of some of the higher functionalities provided by InSpec","link":"https://mitre-inspec-advanced-developer.netlify.com/"},{"name":"InSpec Tools and Utilization","desc":"Guide to installation of InSpec Tools","link":"https://mitre.github.io/inspec_tools/"}]}],"videos":[{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"}]}')},"480e":function(t,e,i){"use strict";var a=i("7560");e["a"]=a["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:a["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},"504b":function(t){t.exports=JSON.parse('{"pastTraining":{"introTraining":[{"name":"Introductory InSpec Profile Developer Training","date":"March 7-8th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"March 13-14th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"August 28-29th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"November 13-14 2019","description":"","link":""}],"advTraining":[{"name":"Adavanced InSpec Profile Developer Training","date":"September 5-6th 2019","description":"","link":""}]},"upcomingTraining":{"introTraining":[{"name":"Upcoming Training Sessions will appear here as they are announced!","date":"TBD","description":"","link":""}]}}')},b707:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",{staticClass:"pa-0 "},[i("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[i("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[i("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[i("trainingHeader")],1)],1)],1),i("v-container",{staticClass:"pa-0 py-2",attrs:{fluid:""}},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"10",xs:"12"}},[i("pastTraining")],1)],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("br"),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[i("p",{staticClass:"google-font mb-0",staticStyle:{"font-weight":"350",color:"#616161","font-size":"200%"}},[i("b",{style:this.$vuetify.theme.dark?"color: white":"color:#616161"},[t._v("\n          Our "),i("span",{staticStyle:{color:"#1a73e8"}},[t._v("Training")])])]),i("p",{staticClass:"google-font mt-0",staticStyle:{"font-size":"120%"}},[t._v("\n        Questions? Please contact\n        "),i("a",{staticStyle:{color:"#1565C0","text-decoration":"none"},attrs:{href:"mailto:"+t.communityData.communityEmail}},[t._v(t._s(t.communityData.communityEmail))])])])],1),i("br")],1)},o=[],r=i("d67c"),l={data(){return{communityData:r}}},c=l,d=i("2877"),h=i("6544"),u=i.n(h),m=i("62ad"),p=i("a523"),g=i("0fd9"),v=Object(d["a"])(c,s,o,!1,null,null,null),f=v.exports;u()(v,{VCol:m["a"],VContainer:p["a"],VRow:g["a"]});var b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Training Courses Currently Offered")]),i("br"),i("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"100%"}},[i("span",{staticStyle:{color:"#1a73e8"}},[i("a",{attrs:{href:"https://mitre-inspec-developer.netlify.com/",target:"_blank"}},[t._v("InSpec Profile Developers Course")])]),t._v("\n    - Reviews the basics on how to write and run tests\n  ")]),i("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"100%"}},[i("span",{staticStyle:{color:"#1a73e8"}},[i("a",{attrs:{href:"https://mitre-inspec-advanced-developer.netlify.com/",target:"_blank"}},[t._v("InSpec Advanced Developer Course")])]),t._v("\n    - In depth explaination of some of the higher functionalities provided by InSpec\n  ")]),i("br"),i("br"),i("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Upcoming Training Sessions")]),i("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"95%"}},[t._v("Trainings are listed in chronological order by date.")]),i("br"),i("v-row",t._l(t.trainingData.upcomingTraining.introTraining,(function(e,a){return i("v-col",{key:"upcoming"+a,staticClass:"pa-2",attrs:{md:"12",lg:"10",sm:"12"}},[i("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(a){a.on;return[i("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"100%"}},[t._v(t._s(e.name))])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)})),1),i("br"),i("br"),i("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Past Training Sessions")]),i("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"95%"}},[t._v("Trainings are listed in chronological order by date.")]),i("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"95%"}},[i("b",[t._v("Note:")]),t._v(" Video recordings of these trainings will be made available once they are edited for presentability.\n  ")]),i("v-row",{staticClass:"ma-2",class:t.color_mode,attrs:{justify:"center"}},[i("v-slide-group",{staticClass:"pa-2 ma-2",attrs:{"show-arrows":""}},t._l(t.trainingData.pastTraining.introTraining,(function(e,a){return i("v-col",{key:"past"+a,staticClass:"pa-2",attrs:{md:"3",lg:"3",sm:"3",cols:"3"}},[i("v-dialog",{attrs:{dialogData:e,width:"700"},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[i("div",t._g({staticClass:"pa-2",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",staticStyle:{cursor:"pointer",width:"275px",height:"150px","white-space":"initial"},on:{click:function(i){return t.passItemData(e)}}},n),[i("p",{staticClass:"google-font mt-1 mb-0 break-word",staticStyle:{"font-size":"90%"}},[t._v(t._s(e.date))]),i("p",{staticClass:"google-font ma-0 mt-0 break-word",staticStyle:{"font-size":"120%"}},[t._v(t._s(e.name))]),i("p",{staticClass:"mb-0 mt-2 google-font",staticStyle:{color:"#1a73e8"}},[t._v("See More")])])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.dialog,expression:"dialog"}],attrs:{color:"",data:t.dialogData}},[i("v-card-title",{staticClass:"px-5 py-5 google-font break-word",class:{"x-small":t.$vuetify.breakpoint.mdAndDown},staticStyle:{"background-position":"right bottom"}},[t._v(t._s(t.dialogData.name))]),i("v-card-text",{staticClass:"pa-5"},[i("p",{staticClass:"google-font mt-3 mb-0 break-word",staticStyle:{"font-size":"110%"}},[i("b",[t._v("Name:")]),t._v("\n                "+t._s(t.dialogData.name)+"\n              ")]),i("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"110%"}},[i("b",[t._v("Date:")]),t._v("\n                "+t._s(t.dialogData.date)+"\n              ")]),i("v-spacer",{staticClass:"ma-2"}),""!=t.dialogData.link?i("a",{attrs:{href:t.dialogData.link,target:"_blank"}},[t._v("Link to Recording")]):i("p",[i("b",[t._v("Link to Recording -")]),i("span",{staticStyle:{color:"red"}},[t._v(" Video still being edited! Please check back later.")])])],1),i("v-divider")],1)],1)],1)})),1)],1)],1)},y=[],w=i("504b"),k=i("36d6"),C={name:"App",data:()=>({communityData:r,trainingData:w,resources:k,dialog:!1,dialogData:{name:"",date:"",link:""}}),computed:{color_mode(){return this.$vuetify.theme.dark?"darkModeContainer":"lightModeContainer"},moveForBottomNavStyle(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}},methods:{make_linkable(t){return t.replace(/\s+/g,"-").toLowerCase()},passItemData(t){this.dialogData=t}}},S=C,_=i("b0af"),I=i("99d9"),x=i("169a"),A=i("ce7e"),D=i("7efd"),T=i("2fa4"),$=Object(d["a"])(S,b,y,!1,null,null,null),V=$.exports;u()($,{VCard:_["a"],VCardText:I["c"],VCardTitle:I["d"],VCol:m["a"],VContainer:p["a"],VDialog:x["a"],VDivider:A["a"],VRow:g["a"],VSlideGroup:D["b"],VSpacer:T["a"]});var O={components:{trainingHeader:f,pastTraining:V},created(){let t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd")}},z=O,R=i("a75b"),j=Object(d["a"])(z,a,n,!1,null,null,null);e["default"]=j.exports;u()(j,{VCol:m["a"],VContainer:p["a"],VContent:R["a"],VRow:g["a"]})},e4d3:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})}}]);