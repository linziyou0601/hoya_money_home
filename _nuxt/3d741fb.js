(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{462:function(e,t,n){"use strict";n(8),n(9),n(13),n(14);var r=n(2),o=(n(3),n(34),n(48),n(23),n(10),n(22),n(62),n(222),n(32),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(39),n(11),n(236),n(1)),l=n(78),c=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=["sm","md","lg","xl"],f=["start","end","center"];function _(e,t){return y.reduce((function(n,r){return n[e+Object(c.u)(r)]=t(),n}),{})}var v=function(e){return[].concat(f,["baseline","stretch"]).includes(e)},m=_("align",(function(){return{type:String,default:null,validator:v}})),w=function(e){return[].concat(f,["space-between","space-around"]).includes(e)},O=_("justify",(function(){return{type:String,default:null,validator:w}})),x=function(e){return[].concat(f,["space-between","space-around","stretch"]).includes(e)},F=_("alignContent",(function(){return{type:String,default:null,validator:x}})),z={align:Object.keys(m),justify:Object.keys(O),alignContent:Object.keys(F)},I={align:"align",justify:"justify",alignContent:"align-content"};function S(e,t,n){var r=I[e];if(null!=n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var j=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},m),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:x}},F),render:function(e,t){var n=t.props,data=t.data,o=t.children,c="";for(var d in n)c+=String(n[d]);var h=j.get(c);return h||function(){var e,t;for(t in h=[],z)z[t].forEach((function(e){var r=n[e],o=S(t,e,r);o&&h.push(o)}));h.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(e,"align-".concat(n.align),n.align),Object(r.a)(e,"justify-".concat(n.justify),n.justify),Object(r.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),j.set(c,h)}(),e(n.tag,Object(l.a)(data,{staticClass:"row",class:h}),o)}})},480:function(e){e.exports=JSON.parse('[{"version":"1.3.3 (+55)","release_date":"2022/08/18","zh_TW":[{"type":"改進","list":["改進電子發票讀取訊息"]},{"type":"修復","list":["修正部分情況在實現當日紀錄時無法帶入正確時間的問題"]}],"en_US":[{"type":"IMPROVE","list":["Improved loading message for e-invoice"]},{"type":"FIX","list":["Fixed the problem of filling in the wrong time while realizing record of the day in some situation"]}]},{"version":"1.3.2 (+54)","release_date":"2022/08/09","zh_TW":[{"type":"改進","list":["改進電子發票同步之錯誤訊息"]},{"type":"修復","list":["修正電子發票無法刪除的錯誤"]}],"en_US":[{"type":"IMPROVE","list":["Improved error message for e-invoice synchronization"]},{"type":"FIX","list":["Fixed the bug that the e-invoice could not be deleted"]}]},{"version":"1.3.1 (+45 ~ +53)","release_date":"2022/07/27","last_patched":"2022/07/30","zh_TW":[{"type":"改進","list":["改善交易紀錄讀取速度","優化使用者介面","改善資料轉換錯誤的提醒流程","調整電子發票同步邏輯"]},{"type":"新增","list":["新增公告頁"]},{"type":"修復","list":["修正子預算達標時無法新增資料的錯誤","修正帳戶交易明細每日金額加總顯示錯誤","修正單一類別且多子類別之名稱顯示錯誤","修正自定義圖表條件顯示錯誤","修正多類別交易之子紀錄金額顯示錯誤","修正部分情況專案及預算無法成功升級資料格式"]}],"en_US":[{"type":"IMPROVE","list":["Improve transaction record loading speed","Improve user interface","Improve notification process for data conversion errors","Adjust the invoice synchronization logic"]},{"type":"ADD","list":["Add announcement page"]},{"type":"FIX","list":["Fix the error that cannot add data when sub-budget meets budget","Fix the incorrect display of the daily sub-record amount of Account Page","Fix the incorrect display of multi-sub-category with single category","Fix the incorrect display of the custom chart conditions","Fix the incorrect display of the sub-record amount of multi-category transactions","Fix the errors where projects and budgets data could not be successfully upgraded to the new data format in some cases"]}]},{"version":"1.2.4 (1.2.3b) (+44)","release_date":"2022/07/25","zh_TW":[{"type":"修復","list":["追蹤1.3.0版本資料庫轉換錯誤"]}],"en_US":[{"type":"FIX","list":["Tracking v1.3.0 database conversion errors"]}]},{"version":"1.3.0 (+40 ~ +43)","release_date":"2022/07/24","last_patched":"2022/07/25","zh_TW":[{"type":"改進","list":["優化程式碼","改善應用程式啟動速度","更新使用者介面","優化搜尋功能","更新資料格式","調整電子發票同步邏輯"]},{"type":"新增","list":["新增單筆交易跨類別功能","新增自定義圖表條件功能","新增交易備註可加入HashTag"]},{"type":"修復","list":["修正子類別選項過多時無法選擇的問題"]}],"en_US":[{"type":"IMPROVE","list":["Optimize the code","Improve application startup speed","Update user interface","Optimize searching function","Update database format","Adjust the invoice synchronization logic"]},{"type":"ADD","list":["Add the feature that a transaction record can have multiple sub-records","Add the feature that customizable chart condition","Add the feature of HashTag for transaction record comment"]},{"type":"FIX","list":["Fix the problem that the sub-category cannot be selected when there are too many options"]}]},{"version":"1.2.3 (+39)","release_date":"2022/05/08","zh_TW":[{"type":"改進","list":["改善發票讀取提示文字","調整發票同步功能於跨入次月一週內仍可同步前一月發票"]},{"type":"修復","list":["修正QR Code掃描失敗問題"]}],"en_US":[{"type":"IMPROVE","list":["Improve invoice loading dialog prompt text","Adjust the invoice synchronization feature that the invoice of the previous month can still be synchronized while within a week of next month"]},{"type":"FIX","list":["Fixed QR Code scan failure problem"]}]},{"version":"1.2.2 (+38)","release_date":"2022/05/03","zh_TW":[{"type":"修復","list":["修正QR Code掃描器卡住的問題","修正紀錄搜尋時列表錯位的問題","修復螢幕大小不同導致電子發票跑版的問題"]}],"en_US":[{"type":"FIX","list":["Fixed QR Code scanner stuck issue","Fixed an issue where the list was misplaced when searching for money records","Fixed the problem that the Taiwan electronic invoice layout error due to different screen sizes"]}]},{"version":"1.2.1 (+36 ~ +37)","release_date":"2022/05/03","last_patched":"2022/05/03","zh_TW":[{"type":"修復","list":["修復螢幕大小不同導致電子發票跑版的問題"]}],"en_US":[{"type":"FIX","list":["Fixed the problem that the Taiwan electronic invoice layout error due to different screen sizes"]}]},{"version":"1.2.0 (+32 ~ +35)","release_date":"2022/05/02","last_patched":"2022/05/03","zh_TW":[{"type":"改進","list":["優化程式碼","改善資料存取安全性","改善應用程式啟動速度"]},{"type":"新增","list":["新增台灣電子發票掃描及匯入功能"]}],"en_US":[{"type":"IMPROVE","list":["Optimize the code","Improve data access security","Improve application startup speed"]},{"type":"ADD","list":["Added Taiwan electronic invoice scanning and import feature"]}]},{"version":"1.1.1 (+31)","release_date":"2022/04/17","zh_TW":[{"type":"改進","list":["優化程式碼"]},{"type":"修復","list":["修復部分情況備份時無法正確覆蓋舊檔的問題"]}],"en_US":[{"type":"IMPROVE","list":["Optimize the code"]},{"type":"FIX","list":["Fix the problem that the backup cannot override old file correctly in some situations"]}]},{"version":"1.1.0 (+30)","release_date":"2022/03/19","zh_TW":[{"type":"改進","list":["優化程式碼","優化Android 12之相容性"]}],"en_US":[{"type":"IMPROVE","list":["Optimize the code","Optimize the compatibility of Android 12"]}]},{"version":"1.1.0 (+29)","release_date":"2022/01/31","zh_TW":[{"type":"改進","list":["優化程式碼","優化使用者介面及應用程式穩定性","優化Android 11、12之相容性","備份及復原按鈕加入確認視窗避免誤觸","匯出CSV功能可選擇匯出方式","匯入CSV功能加入錯誤提示訊息"]},{"type":"修復","list":["修復以期間檢視帳戶餘額時會包含未來值的問題"]}],"en_US":[{"type":"IMPROVE","list":["Optimize the code","Optimize the user interface and application stability","Optimize the compatibility of Android 11 and 12","Add confirmation window for the backup and restore to avoid accidental touches","Option to choose export method of Export CSV function","Add detail error message for Import CSV function"]},{"type":"FIX","list":["Fixed an issue where future values were included when viewing account balances by period"]}]},{"version":"1.0.10 (+27 ~ +28)","release_date":"2021/10/29","last_patched":"2021/11/01","zh_TW":[{"type":"修復","list":["修復部分情況瀏覽記帳明細會出現錯誤的問題","修復主頁特定月份之紀錄計數顯示錯誤問題"]}],"en_US":[{"type":"FIX","list":["Fix the problem that there will be errors when viewing the records in some situations","Fix the problem that the records count on the homepage is displayed incorrectly in specific months"]}]},{"version":"1.0.9 (+26)","release_date":"2021/10/04","zh_TW":[{"type":"改進","list":["優化程式碼"]}],"en_US":[{"type":"IMPROVE","list":["Optimize the code"]}]},{"version":"1.0.8 (+25)","release_date":"2021/09/22","zh_TW":[{"type":"修復","list":["修復部分情況繳款截止日提醒錯誤問題"]}],"en_US":[{"type":"FIX","list":["Fix the problem that the payment due date cannot be reminded in some situations"]}]},{"version":"1.0.7 (+23 ~ +24)","release_date":"2021/09/03","last_patched":"2021/09/04","zh_TW":[{"type":"修復","list":["修復總餘額統計期間錯誤問題","修復子類別在主類別重新選擇時的偶發性錯誤問題","修復一些問題"]}],"en_US":[{"type":"FIX","list":["Fix the error of total balance statistics period","Fix the occasional error of sub-type when main-type is re-selected","Fix some bugs"]}]},{"version":"1.0.6 (+20 ~ +22)","release_date":"2021/08/28","last_patched":"2021/08/29","zh_TW":[{"type":"修復","list":["修復部分情況無法進行備份的問題","修復搜尋頁帳戶及專案餘額錯誤的問題","修復一些問題"]},{"type":"新增","list":["新增主題"]},{"type":"改進","list":["加入目前備份資料的資訊卡","優化使用者介面"]}],"en_US":[{"type":"FIX","list":["Fix the error of account and project balance on the Search Page","Fix the problem that backup cannot be performed in some situations","Fix some bugs"]},{"type":"ADD","list":["Add new theme"]},{"type":"IMPROVE","list":["Add the information card of the current backed-up data","Optimize the user interface"]}]},{"version":"1.0.5 (+19)","release_date":"2021/08/06","zh_TW":[{"type":"修復","list":["修復一些問題"]},{"type":"改進","list":["新增子類別篩選搜尋功能"]}],"en_US":[{"type":"FIX","list":["Fix some bugs"]},{"type":"IMPROVE","list":["Add sub-type filter search function"]}]},{"version":"1.0.4 (+16 ~ +18)","release_date":"2021/08/04","last_patched":"2021/08/04","zh_TW":[{"type":"修復","list":["修復圖表頁圓餅圖錯誤","修復一些問題"]},{"type":"改進","list":["新增可換背景色的圖標"]}],"en_US":[{"type":"FIX","list":["Fix pie chart error on Chart Page","Fix some bugs"]},{"type":"IMPROVE","list":["Add icons that can change the background color"]}]},{"version":"1.0.3 (+15)","release_date":"2021/08/03","zh_TW":[{"type":"修復","list":["修復一些問題"]},{"type":"改進","list":["新增使用說明","新增預設類別匯入功能"]}],"en_US":[{"type":"FIX","list":["Fix some bugs"]},{"type":"IMPROVE","list":["Add documents of how to use","Add import function of default types"]}]},{"version":"1.0.2 (+14)","release_date":"2021/08/02","zh_TW":[{"type":"修復","list":["修復一些問題"]},{"type":"改進","list":["加入篩選搜尋功能","加入餘額隱藏功能","優化使用者介面"]}],"en_US":[{"type":"FIX","list":["Fix some bugs"]},{"type":"IMPROVE","list":["Add filter search function","Add balance hiding function","Optimize the user interface"]}]},{"version":"1.0.1 (+12 ~ +13)","release_date":"2021/07/30","last_patched":"2021/07/30","zh_TW":[{"type":"修復","list":["修正圖表資訊錯誤問題"]},{"type":"改進","list":["優化使用者介面"]}],"en_US":[{"type":"FIX","list":["Fix the problem of chart information error"]},{"type":"IMPROVE","list":["Optimize the user interface"]}]},{"version":"1.0.0 (+11)","release_date":"2021/07/28","zh_TW":[{"type":"發布"}],"en_US":[{"type":"RELEASED"}]}]')},497:function(e,t,n){"use strict";n.r(t);var r=n(480),o={layout:"document",data:function(){return{pageTitle:this.$t("docs_version_title"),versionsJson:r}},computed:{localeSuffix:function(){return"en"===this.$i18n.locale?"en_US":"zh_TW"},borderColor:function(){return this.$vuetify.theme.dark?"border_color_dark":"border_color_light"},releaseDateColor:function(){return this.$vuetify.theme.dark?"blue-grey--text text--lighten-1":"blue-grey--text text--lighten-2"}},created:function(){this.$nuxt.$emit("pageTitle",this.pageTitle)}},l=n(86),c=n(103),d=n.n(c),h=n(451),y=n(452),f=n(462),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10"}},[n("div",{staticClass:"text-h4 font-weight-bold mb-14 text-center"},[n("span",{class:"pb-3 px-3 title_border_bottom "+e.borderColor},[e._v("\n        "+e._s(e.$t("docs_version_title"))+"\n      ")])]),e._v(" "),e._l(e.versionsJson,(function(t,r){return n("div",{key:r},[n("v-divider",{directives:[{name:"show",rawName:"v-show",value:0!==e.index,expression:"index !== 0"}],staticClass:"my-8"}),e._v(" "),n("div",{staticClass:"text-h5 font-weight-bold mb-1"},[e._v("\n        "+e._s(t.version)+"\n      ")]),e._v(" "),n("div",{class:"d-block mb-3 "+e.releaseDateColor},[n("small",[e._v("\n          "+e._s(e.$t("docs_version_released_on"))+" "+e._s(t.release_date)+"\n        ")]),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:t.last_patched,expression:"version.last_patched"}],staticClass:"ml-2"},[e._v("\n          "+e._s(e.$t("docs_version_last_updated_on"))+" "+e._s(t.last_patched)+"\n        ")])]),e._v(" "),e._l(t[e.localeSuffix],(function(t,r){return n("div",{key:r},[n("div",{staticClass:"font-weight-bold mb-3"},[e._v(e._s(t.type))]),e._v(" "),n("ul",{staticClass:"mb-4"},e._l(t.list,(function(content,t){return n("li",{key:t},[e._v("\n            "+e._s(content)+"\n          ")])})),0)])}))],2)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:h.a,VDivider:y.a,VRow:f.a})}}]);