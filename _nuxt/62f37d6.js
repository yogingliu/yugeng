(window.webpackJsonp=window.webpackJsonp||[]).push([[17,15,18,23],{243:function(e,t,o){var content=o(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(53).default)("4d9c5f1a",content,!0,{sourceMap:!1})},244:function(e,t,o){"use strict";o.r(t);var n={props:{titleText:String}},c=(o(245),o(32)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"section-title-block"},[o("h2",{staticClass:"section-title-text"},[e._v(e._s(e.titleText))])])}),[],!1,null,"12387d65",null);t.default=component.exports},245:function(e,t,o){"use strict";o(243)},246:function(e,t,o){var n=o(52)(!1);n.push([e.i,".section-title-block[data-v-12387d65]{width:540px;height:64px;margin:80px auto;display:flex;align-items:center;justify-content:center}",""]),e.exports=n},249:function(e,t,o){"use strict";o.r(t);var n=o(32),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 16 14",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{opacity:"0.3"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z"}})])])])}),[],!1,null,null,null);t.default=component.exports},258:function(e,t,o){"use strict";o.r(t);o(190),o(19),o(41),o(48);var n={components:{SvgIconQuote:o(249).default},props:{customerFeedbackCardIndex:{type:Number,default:1},customerName:{type:String,default:"顧客"},customerRemark:{type:String,default:""},feedbackContent:{type:String,default:"載入內容錯誤"}},computed:{customerPhotoComponent:function(){var e="";return e=this.customerFeedbackCardIndex%3==0?"SvgPersonFaceRightRound3":this.customerFeedbackCardIndex%3==2?"SvgPersonFaceRightRound2":"SvgPersonFaceRightRound1",function(){return o(300)("./".concat(e,".vue"))}}}},c=(o(301),o(32)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"customer-feedback-card flex-grow-1 mx-3 w-100"},[o("div",{staticClass:"d-flex w-100 p-4"},[o(e.customerPhotoComponent,{tag:"component",staticClass:"customer-feedback-card-photo"}),e._v(" "),o("div",{staticClass:"ml-4 text-left d-flex"},[o("div",{staticClass:"m-auto"},[o("div",[o("span",[e._v(e._s(e.customerName))])]),e._v(" "),o("div",[o("span",{staticClass:"text-muted font-size-point-nine"},[e._v(e._s(e.customerRemark))])])])])],1),e._v(" "),o("div",{staticClass:"d-flex px-5"},[o("div",{staticClass:"mt-3 mx-2"},[o("SvgIconQuote",{staticClass:"feedback-card-quote-icon"})],1),e._v(" "),o("div",{staticClass:"pl-4 py-4 text-left font-size-point-nine"},[e._v("\n            "+e._s(e.feedbackContent)+"\n        ")])])])}),[],!1,null,"64f8c4cc",null);t.default=component.exports;installComponents(component,{SvgIconQuote:o(249).default})},265:function(e,t,o){"use strict";o.r(t);var n=o(244),c=o(258),r={components:{SectionTitle:n.default,CustomerFeedbackCard:c.default},data:function(){return{customerFeedbackCardBodys:[{customerName:"K*****6",customerRemark:"顧客蝦皮賣場回饋",feedbackContent:"一級棒的賣家，孩子因為要邊準備指考沒時間做資料，只好找代製的。真的是非常幫忙的賣家，一定幫你介紹客人！"},{customerName:"F*****s",customerRemark:"顧客LINE回饋",feedbackContent:"謝謝你們的協助，我順利上榜了！！！！謝謝你們在製作過程中不斷和我分享撰寫內容的小技巧，也幫我解決很多申請上的問題。"},{customerName:"W*****1",customerRemark:"顧客蝦皮賣場回饋",feedbackContent:"以前最不會寫自己的優缺點，但是賣家很有耐心的引導和我討論我的優點，並且把它描繪得非常好，感覺對我來說只是一件小小的事情，卻被寫得很凸顯自己並能在眾多自傳履歷中被看到的感覺。謝謝賣家，有機會會在光顧。"}]}}},d=o(32),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-100"},[o("SectionTitle",{attrs:{titleText:"顧客回饋"}}),e._v(" "),o("div",{staticClass:"d-flex w-100"},[e._l(e.customerFeedbackCardBodys,(function(t,n){return[o("CustomerFeedbackCard",e._b({key:"customerFeedbackCard-"+n,attrs:{customerFeedbackCardIndex:n}},"CustomerFeedbackCard",t,!1))]}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomerFeedbackCard:o(258).default})},290:function(e,t,o){var content=o(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(53).default)("67e0c7b2",content,!0,{sourceMap:!1})},300:function(e,t,o){var map={"./SvgLogoShopee.vue":[97],"./SvgLogoYugengWithName.vue":[98],"./SvgManFaceLeftRound.vue":[267,9],"./SvgPersonFaceRightRound1.vue":[268,10],"./SvgPersonFaceRightRound2.vue":[269,11],"./SvgPersonFaceRightRound3.vue":[270,12],"./SvgTopRightBackgroud.vue":[252,13],"./SvgWomanFaceRightRound.vue":[271,14],"./icon/SvgIconFile.vue":[272,0],"./icon/SvgIconFolder.vue":[273,1],"./icon/SvgIconHeart.vue":[274,2],"./icon/SvgIconMoney.vue":[275,3],"./icon/SvgIconPencil.vue":[276,4],"./icon/SvgIconPhone.vue":[277,5],"./icon/SvgIconPhonePlus.vue":[278,6],"./icon/SvgIconQuote.vue":[249],"./icon/SvgIconThumbUp.vue":[279,7],"./icon/SvgIconTick.vue":[248,8]};function n(e){if(!o.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return Promise.all(t.slice(1).map(o.e)).then((function(){return o(n)}))}n.keys=function(){return Object.keys(map)},n.id=300,e.exports=n},301:function(e,t,o){"use strict";o(290)},302:function(e,t,o){var n=o(52)(!1);n.push([e.i,".customer-feedback-card[data-v-64f8c4cc]{min-width:5rem;min-height:5rem;box-shadow:0 .8rem 1.2rem rgba(41,41,42,.07);border-radius:.5rem}.customer-feedback-card-photo[data-v-64f8c4cc]{width:6rem;height:6rem}.feedback-card-quote-icon[data-v-64f8c4cc]{fill:#2ec5ce;width:1.6rem;height:1.6rem}",""]),e.exports=n}}]);