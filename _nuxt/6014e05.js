(window.webpackJsonp=window.webpackJsonp||[]).push([[31,15,32,37,41],{243:function(e,t,c){var content=c(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(53).default)("4d9c5f1a",content,!0,{sourceMap:!1})},244:function(e,t,c){"use strict";c.r(t);var n={props:{titleText:String}},o=(c(245),c(32)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"section-title-block"},[c("h2",{staticClass:"section-title-text"},[e._v(e._s(e.titleText))])])}),[],!1,null,"12387d65",null);t.default=component.exports},245:function(e,t,c){"use strict";c(243)},246:function(e,t,c){var n=c(52)(!1);n.push([e.i,".section-title-block[data-v-12387d65]{width:540px;height:64px;margin:80px auto;display:flex;align-items:center;justify-content:center}",""]),e.exports=n},247:function(e,t,c){var map={"./ClassicSampleBlock.vue":[261,38],"./CommonQuestion.vue":[266,16],"./CustomerFeedback.vue":[265,17],"./CustomerFeedbackCard.vue":[258,18],"./DescriptionTopBlock.vue":[262,19],"./DialogWithPhoto.vue":[251,39],"./EffectiveValueBlock.vue":[286,20],"./LittleFeatureBlock.vue":[256,40],"./ProductFeature.vue":[259,36],"./ServicePlanBlock.vue":[264,21],"./ServicePlanCard.vue":[257,22],"./ServiceProcess.vue":[260,37],"./ServiceProcessCard.vue":[250,41],"./TipDemoBlock.vue":[263,24],"./baseComponents/SectionTitle.vue":[244,15],"./layout/FooterDefault.vue":[132],"./layout/HeaderDefault.vue":[131],"./svgTemplate/SvgLogoShopee.vue":[97],"./svgTemplate/SvgLogoYugengWithName.vue":[98],"./svgTemplate/SvgManFaceLeftRound.vue":[267,9],"./svgTemplate/SvgPersonFaceRightRound1.vue":[268,10],"./svgTemplate/SvgPersonFaceRightRound2.vue":[269,11],"./svgTemplate/SvgPersonFaceRightRound3.vue":[270,12],"./svgTemplate/SvgTopRightBackgroud.vue":[252,13],"./svgTemplate/SvgWomanFaceRightRound.vue":[271,14],"./svgTemplate/icon/SvgIconFile.vue":[272,0],"./svgTemplate/icon/SvgIconFolder.vue":[273,1],"./svgTemplate/icon/SvgIconHeart.vue":[274,2],"./svgTemplate/icon/SvgIconMoney.vue":[275,3],"./svgTemplate/icon/SvgIconPencil.vue":[276,4],"./svgTemplate/icon/SvgIconPhone.vue":[277,5],"./svgTemplate/icon/SvgIconPhonePlus.vue":[278,6],"./svgTemplate/icon/SvgIconQuote.vue":[249,23],"./svgTemplate/icon/SvgIconThumbUp.vue":[279,7],"./svgTemplate/icon/SvgIconTick.vue":[248,8]};function n(e){if(!c.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return Promise.all(t.slice(1).map(c.e)).then((function(){return c(n)}))}n.keys=function(){return Object.keys(map)},n.id=247,e.exports=n},250:function(e,t,c){"use strict";c.r(t);c(19),c(41),c(48);var n={props:{indexNum:String,titleIconUrl:String,titleText:String,descriptionText:String},computed:{titleIconComponent:function(){var e=this;return function(){return c(247)("".concat(e.titleIconUrl,".vue"))}}}},o=(c(282),c(32)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"service-process-card row"},[c("div",{staticClass:"left-index-block-service-process col-4"},[c("div",{staticClass:"circle-index-service-process"},[e._v(e._s(e.indexNum))])]),e._v(" "),c("div",{staticClass:"right-main-block-service-process col-8"},[c("div",{staticClass:"title-block-service-process"},[c("div",{staticClass:"service-process-card-icon-block"},[c(e.titleIconComponent,{tag:"component",staticClass:"card-title-icon-service-process"})],1),e._v(" "),c("p",{staticClass:"card-title-text-service-process"},[e._v(e._s(e.titleText))])]),e._v(" "),c("div",{staticClass:"card-decription-text-block-service-process"},[c("p",{staticClass:"card-decription-text-service-process"},[e._v(e._s(e.descriptionText))])])])])}),[],!1,null,"3948d173",null);t.default=component.exports},254:function(e,t,c){var content=c(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(53).default)("00cc4b44",content,!0,{sourceMap:!1})},260:function(e,t,c){"use strict";c.r(t);var n=c(244),o=c(250),r={components:{SectionTitle:n.default,ServiceProcessCard:o.default},data:function(){return{serviceProcessCardBodys:[{indexNum:"01",titleIconUrl:"./svgTemplate/icon/SvgIconPhonePlus",titleText:"專業諮詢",descriptionText:"透過蝦皮賣場聯繫雨耕書堂\n                        討論最適合你的製作方案  \n                    "},{indexNum:"02",titleIconUrl:"./svgTemplate/icon/SvgIconMoney",titleText:"下單付款",descriptionText:"雨耕書堂提供多種付款方式\n                        蝦皮付款、銀行轉帳、\n                        無卡存款及超商代碼繳費\n                    "},{indexNum:"03",titleIconUrl:"./svgTemplate/icon/SvgIconPencil",titleText:"填寫表單",descriptionText:"填寫雨耕書堂設計的問卷\n                        提供個人資料及特殊經歷\n                    "},{indexNum:"04",titleIconUrl:"./svgTemplate/icon/SvgIconFile",titleText:"傳送資料",descriptionText:"將需要放入備審的證明文件\n                        都一併傳給雨耕書堂\n                    "},{indexNum:"05",titleIconUrl:"./svgTemplate/icon/SvgIconTick",titleText:"完成製作",descriptionText:"完成客製化備審資料製作\n                        提供一個月的售後服務\n                    "}]}}},l=(c(295),c(32)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("SectionTitle",{attrs:{titleText:"服務流程"}}),e._v(" "),c("div",{staticClass:"service-process-section-block"},[e._l(e.serviceProcessCardBodys,(function(t,n){return[c("div",{key:"ServiceProcessCard-"+t.indexNum,style:{marginLeft:200*n+"px"}},[c("ServiceProcessCard",e._b({},"ServiceProcessCard",t,!1)),e._v(" "),c("br")],1)]}))],2)],1)}),[],!1,null,"f9f4e0d6",null);t.default=component.exports;installComponents(component,{ServiceProcessCard:c(250).default})},282:function(e,t,c){"use strict";c(254)},283:function(e,t,c){var n=c(52)(!1);n.push([e.i,".service-process-card[data-v-3948d173]{width:355px;height:180px;border-radius:24px;box-shadow:0 24px 48px rgba(57,57,57,.1);margin:15px 0}.service-process-card-icon-block[data-v-3948d173]{width:20px;height:100%;margin:0 5px;display:flex;justify-content:center;align-items:center}.card-title-icon-service-process[data-v-3948d173]{width:20px;height:20px;fill:#000;display:flex;align-items:center;justify-content:center}.circle-index-service-process[data-v-3948d173]{width:80px;height:80px;border-radius:50%;background-color:#fff0de;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:400}.left-index-block-service-process[data-v-3948d173]{height:100%;display:flex;align-items:center;justify-content:center}.title-block-service-process[data-v-3948d173]{display:flex;justify-content:center;margin-top:35px;height:40px}.card-title-text-service-process[data-v-3948d173]{font-size:22px;display:flex;align-items:center;justify-content:center}.card-decription-text-service-process[data-v-3948d173]{font-size:15px;white-space:pre-line}.card-decription-text-block-service-process[data-v-3948d173]{margin-top:6px}.right-main-block-service-process[data-v-3948d173]{padding-left:0}",""]),e.exports=n},288:function(e,t,c){var content=c(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(53).default)("7ff19ae2",content,!0,{sourceMap:!1})},295:function(e,t,c){"use strict";c(288)},296:function(e,t,c){var n=c(52)(!1);n.push([e.i,".service-process-section-block[data-v-f9f4e0d6]{display:inline-block}",""]),e.exports=n}}]);