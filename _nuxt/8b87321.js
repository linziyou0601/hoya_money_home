(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{447:function(t,e,n){"use strict";n(6),n(7),n(10),n(11);var r=n(1),c=(n(32),n(45),n(20),n(8),n(28),n(64),n(210),n(19),n(36),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(38),n(9),n(224),n(2)),o=n(78),l=n(0);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],d=["start","end","center"];function h(t,e){return _.reduce((function(n,r){return n[t+Object(l.s)(r)]=e(),n}),{})}var v=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},j=h("align",(function(){return{type:String,default:null,validator:v}})),O=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},k=h("justify",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},m=h("alignContent",(function(){return{type:String,default:null,validator:w}})),z={align:Object.keys(j),justify:Object.keys(k),alignContent:Object.keys(m)},C={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=C[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},j),{},{justify:{type:String,default:null,validator:O}},k),{},{alignContent:{type:String,default:null,validator:w}},m),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var y in n)l+=String(n[y]);var f=S.get(l);return f||function(){var t,e;for(e in f=[],z)z[e].forEach((function(t){var r=n[t],c=x(e,t,r);c&&f.push(c)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,f)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:f}),c)}})},472:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{pageTitle:this.$t("privacy_policy_page"),textlines:[{key:"policy_preface",size:"h7"},{key:"policy_1_title",size:"h6"},{key:"policy_1_content",size:"h7"},{key:"policy_2_title",size:"h6"},{key:"policy_2_content",size:"h7",children:["policy_2_content_1","policy_2_content_2","policy_2_content_3","policy_2_content_4"]},{key:"policy_3_title",size:"h6"},{key:"policy_3_content",size:"h7"},{key:"policy_4_title",size:"h6"},{key:"policy_4_content",size:"h7"},{key:"policy_5_title",size:"h6"},{key:"policy_5_content",size:"h7"}]}},computed:{borderColor:function(){return this.$vuetify.theme.dark?"border_color_dark":"border_color_light"}},created:function(){this.$nuxt.$emit("pageTitle",this.pageTitle)}},c=n(84),o=n(99),l=n.n(o),y=n(433),f=n(447),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("div",{staticClass:"text-h4 font-weight-bold mb-8 text-center"},[n("span",{class:"pb-3 px-3 title_border_bottom "+t.borderColor},[t._v("\n        "+t._s(t.$t("privacy_policy_page"))+"\n      ")])]),t._v(" "),t._l(t.textlines,(function(line){return n("div",{key:line.key,class:"text-"+line.size+" my-4"},[Array.isArray(line.children)&&line.children.length?n("ul",t._l(line.children,(function(e){return n("li",{key:e},[t._v(t._s(t.$t(e)))])})),0):n("span",[t._v("\n        "+t._s(t.$t(line.key))+"\n      ")])])}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:y.a,VRow:f.a})}}]);