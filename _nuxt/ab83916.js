(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{489:function(t,e,r){"use strict";r.r(e);var n=r(484),o=(r(475),{data:function(){return{pageTitle:"",functionKeys:["taiwan_invoice","multi_account_and_multi_currency","project_and_budget","dynamic_chart","periodic_event","reminders_and_notifications","backup_import_and_export","other_functions"],swiper:null}},computed:{themeType:function(){return this.$vuetify.theme.dark?"dark":"light"},borderColor:function(){return this.$vuetify.theme.dark?"border_color_dark":"border_color_light"},snapshotSuffix:function(){return"en"===this.$i18n.locale?"en":"zh"}},mounted:function(){this.swiper=new n.a(".swiper-container",{slidesPerView:1,spaceBetween:5,breakpoints:{480:{slidesPerView:2,spaceBetween:5},720:{slidesPerView:3,spaceBetween:5},900:{slidesPerView:4,spaceBetween:5},1200:{slidesPerView:5,spaceBetween:10},1400:{slidesPerView:6,spaceBetween:10}}})},created:function(){this.$nuxt.$emit("pageTitle",this.pageTitle)}}),c=r(86),l=r(103),d=r.n(l),_=r(213),v=r(216),m=r(470),h=r(462),w=r(451),f=r(181),C=r(463),x=r(455),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"text-center",staticStyle:{"min-height":"calc(100vh - 88px)"},attrs:{cols:"12",sm:"8",md:"6"}},[r("v-img",{staticClass:"mx-auto mt-10",attrs:{src:"/adaptive_icon_foreground.png","max-width":"200",contain:""}}),t._v(" "),r("div",{staticClass:"text-h3 font-weight-bold mb-8"},[t._v(t._s(t.$t("hoya_money")))]),t._v(" "),r("div",{staticClass:"text-h6 mb-8"},[t._v(t._s(t.$t("hoya_money_intro")))]),t._v(" "),r("v-btn",{staticClass:"text-h6 px-8 mt-10",attrs:{color:"primary",rounded:"",large:"",outlined:"",target:"_blank",href:"https://play.google.com/store/apps/details?id=com.hoya_money"}},[t._v("\n      "+t._s(t.$t("download"))+"\n    ")])],1),t._v(" "),r("v-col",{staticClass:"text-center mt-10",attrs:{cols:"12"}},[r("div",{staticClass:"text-h4 font-weight-bold mb-8"},[r("span",{class:"pb-3 px-3 title_border_bottom "+t.borderColor},[t._v("\n        "+t._s(t.$t("features"))+"\n      ")])]),t._v(" "),r("v-row",t._l(t.functionKeys,(function(e){return r("v-col",{key:e,staticClass:"mb-n5",attrs:{cols:"12",sm:"6",lg:"4"}},[r("v-col",{staticClass:"text-center"},[r("v-avatar",{staticClass:"mb-n16",staticStyle:{"z-index":"1"},attrs:{color:"#FFFFFF",size:"60"}},[r("v-avatar",{attrs:{color:"primary",size:"58"}},[r("fa",{staticClass:"icon-4",attrs:{icon:t.$t(e+"_icon"),color:"#FFFFFF"}})],1)],1)],1),t._v(" "),r("v-col",[r("v-card",{attrs:{color:"content_background"}},[r("v-card-title",{staticClass:"justify-space-between pb-3"},[r("v-spacer")],1),t._v(" "),r("v-card-title",{staticClass:"justify-center mb-2",domProps:{innerHTML:t._s(t.$t(e+"_title").replaceAll("\n","<br>"))}}),t._v(" "),r("v-card-subtitle",{staticClass:"text-center",domProps:{innerHTML:t._s(t.$t(e+"_content").replaceAll("\n","<br>"))}}),t._v(" "),r("v-card-actions",[r("v-spacer")],1)],1)],1)],1)})),1)],1),t._v(" "),r("v-col",{staticClass:"text-center mt-10",attrs:{cols:"12"}},[r("div",{staticClass:"text-h4 font-weight-bold mb-8"},[r("span",{class:"pb-3 px-3 title_border_bottom "+t.borderColor},[t._v("\n        "+t._s(t.$t("snapshots"))+"\n      ")])]),t._v(" "),r("div",{staticClass:"swiper-container"},[r("div",{staticClass:"swiper-wrapper"},t._l(10,(function(i){return r("div",{key:i,staticClass:"swiper-slide"},[r("v-img",{staticClass:"mx-auto",attrs:{src:"/snapshots/"+t.snapshotSuffix+i+".png",contain:""}})],1)})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:_.a,VBtn:v.a,VCard:m.a,VCardActions:h.a,VCardSubtitle:h.b,VCardTitle:h.c,VCol:w.a,VImg:f.a,VRow:C.a,VSpacer:x.a})}}]);