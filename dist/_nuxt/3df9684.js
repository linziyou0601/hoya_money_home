(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{430:function(e,t,n){"use strict";n(6),n(7),n(10),n(11);var r=n(1),c=(n(30),n(41),n(20),n(8),n(27),n(57),n(199),n(19),n(33),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(35),n(9),n(213),n(2)),o=n(74),_=n(0);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],d=["start","end","center"];function y(e,t){return v.reduce((function(n,r){return n[e+Object(_.s)(r)]=t(),n}),{})}var h=function(e){return[].concat(d,["baseline","stretch"]).includes(e)},m=y("align",(function(){return{type:String,default:null,validator:h}})),j=function(e){return[].concat(d,["space-between","space-around"]).includes(e)},O=y("justify",(function(){return{type:String,default:null,validator:j}})),k=function(e){return[].concat(d,["space-between","space-around","stretch"]).includes(e)},w=y("alignContent",(function(){return{type:String,default:null,validator:k}})),z={align:Object.keys(m),justify:Object.keys(O),alignContent:Object.keys(w)},C={align:"align",justify:"justify",alignContent:"align-content"};function x(e,t,n){var r=C[e];if(null!=n){if(t){var c=t.replace(e,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;t.a=c.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},m),{},{justify:{type:String,default:null,validator:j}},O),{},{alignContent:{type:String,default:null,validator:k}},w),render:function(e,t){var n=t.props,data=t.data,c=t.children,_="";for(var l in n)_+=String(n[l]);var f=S.get(_);return f||function(){var e,t;for(t in f=[],z)z[t].forEach((function(e){var r=n[e],c=x(t,e,r);c&&f.push(c)}));f.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(e,"align-".concat(n.align),n.align),Object(r.a)(e,"justify-".concat(n.justify),n.justify),Object(r.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),S.set(_,f)}(),e(n.tag,Object(o.a)(data,{staticClass:"row",class:f}),c)}})},456:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{pageTitle:this.$t("terms_of_service_page"),textlines:[{key:"terms_of_service_preface",size:"h7"},{key:"terms_of_service_1_title",size:"h6"},{key:"terms_of_service_1_content",size:"h7",children:["terms_of_service_1_content_1","terms_of_service_1_content_2"]},{key:"terms_of_service_2_title",size:"h6"},{key:"terms_of_service_2_content",size:"h7",children:["terms_of_service_2_content_1","terms_of_service_2_content_2","terms_of_service_2_content_3","terms_of_service_2_content_4"]},{key:"terms_of_service_3_title",size:"h6"},{key:"terms_of_service_3_content",size:"h7",children:["terms_of_service_3_content_1","terms_of_service_3_content_2","terms_of_service_3_content_3"]},{key:"terms_of_service_4_title",size:"h6"},{key:"terms_of_service_4_content",size:"h7"},{key:"terms_of_service_5_title",size:"h6"},{key:"terms_of_service_5_content",size:"h7"}]}},computed:{borderColor:function(){return this.$vuetify.theme.dark?"border_color_dark":"border_color_light"}},created:function(){this.$nuxt.$emit("pageTitle",this.pageTitle)}},c=n(78),o=n(93),_=n.n(o),l=n(416),f=n(430),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("div",{staticClass:"text-h4 font-weight-bold mb-8 text-center"},[n("span",{class:"pb-3 px-3 title_border_bottom "+e.borderColor},[e._v("\n        "+e._s(e.$t("terms_of_service_page"))+"\n      ")])]),e._v(" "),e._l(e.textlines,(function(line){return n("div",{key:line.key,class:"text-"+line.size+" my-4"},[Array.isArray(line.children)&&line.children.length?n("ul",e._l(line.children,(function(t){return n("li",{key:t},[e._v(e._s(e.$t(t)))])})),0):n("span",[e._v("\n        "+e._s(e.$t(line.key))+"\n      ")])])}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VCol:l.a,VRow:f.a})}}]);