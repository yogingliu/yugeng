(window.webpackJsonp=window.webpackJsonp||[]).push([[38,15,39],{244:function(t,e,o){var content=o(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("4d9c5f1a",content,!0,{sourceMap:!1})},245:function(t,e,o){"use strict";o.r(e);var l={props:{titleText:String}},n=(o(246),o(28)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section-title-block"},[o("h2",{staticClass:"section-title-text"},[t._v(t._s(t.titleText))])])}),[],!1,null,"12387d65",null);e.default=component.exports},246:function(t,e,o){"use strict";o(244)},247:function(t,e,o){var l=o(52)(!1);l.push([t.i,".section-title-block[data-v-12387d65]{width:540px;height:64px;margin:80px auto;display:flex;align-items:center;justify-content:center}",""]),t.exports=l},252:function(t,e,o){"use strict";o.r(e);var l,n=o(0),c=(o(191),o(19),o(41),o(48),"WOMAN_FACE_RIGHT"),r="LEFT",d=(l={},Object(n.a)(l,c,"./svgTemplate/SvgWomanFaceRightRound"),Object(n.a)(l,"MAN_FACE_LEFT","./svgTemplate/SvgManFaceLeftRound"),l),f={data:function(){return{PLACE_TYPE_LEFT:r,PLACE_TYPE_RIGHT:"RIGHT"}},props:{placeType:{type:String,default:r},photoType:{type:String,default:c},photoText:{type:String,default:""},dialogTexts:{type:Array,default:[]},dialogBlockIndex:{type:Number,required:!0}},computed:{photoComponent:function(){var t=this;return function(){return o(248)("".concat(d[t.photoType],".vue"))}}}},h=(o(286),o(28)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{class:{"d-flex":!0,"my-4":!0,"flex-row-reverse":t.placeType===t.PLACE_TYPE_RIGHT}},[o("div",{staticClass:"horizontal-vertical-center-flex"},[o("div",{staticClass:"horizontal-vertical-center-flex flex-column"},[o("div",[o(t.photoComponent,{tag:"component",staticClass:"dialog-photo"})],1),t._v(" "),o("div",{staticClass:"mt-2"},[t._v("\n                    "+t._s(t.photoText)+"\n                ")])])]),t._v(" "),o("div",{staticClass:"d-flex flex-column mx-5"},[t._l(t.dialogTexts,(function(e,l){return[o("div",{key:"dialog-text-"+t.dialogBlockIndex+"-"+l,staticClass:"dialog-content-block my-2 text-left"},[o("span",[t._v(t._s(e))])])]}))],2)])])}),[],!1,null,"8d0afd44",null);e.default=component.exports},256:function(t,e,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("6b15e62e",content,!0,{sourceMap:!1})},262:function(t,e,o){"use strict";o.r(e);var l=o(245),n=o(252),c="WOMAN_FACE_RIGHT",r="LEFT",d={components:{SectionTitle:l.default,DialogWithPhoto:n.default},data:function(){return{dialogWithPhotoBodys:[{placeType:r,photoType:c,photoText:"雨耕書堂製作專員",dialogTexts:["之前在擔任採編助理時有沒有遇到什麼困難呢？","為了解決這個困難，你運用什麼方法去克服？","因為這次的經歷，你獲得甚麼樣的成長？"]},{placeType:"RIGHT",photoType:"MAN_FACE_LEFT",photoText:"想要上榜的小明",dialogTexts:["一開始我會抓不到文章重點，導致稿件常常被退件","後來在不斷學習跟向老師請教下，學會猜測讀者的心境","最後除了在稿件的進步外，我自己在處理事情、與同事溝通上\n                        面都有大幅的進步！"]},{placeType:r,photoType:c,photoText:"雨耕書堂製作專員",dialogTexts:["在2020年7月25日到2020年8月24日期間，我於「某某某」公司實習，並擔任採編助理。實習期間，我跟著報社編輯和記者，進行新聞採訪、稿件撰寫以及版面編輯等工作，其中，我認為最困難，也是讓我磨練最多的，便是撰寫新聞稿件。一開始，我時常抓不到一篇文章的主題，也容易放錯重點，更不清楚讀者想要看的是什麼，也因為如此，導致稿件常常被退件，但是在我努力不懈的學習和報社老師們的指導下，我慢慢開始掌握一些寫作的技巧，並且會去揣摩讀者的心境，去思考他們會對什麼樣的內容有興趣，同時，在閱讀他人的文章後，也會去分析文章內容和寫作的優劣之處，並且向其學習。此外，每當我撰寫完一篇新聞稿時，我會請老師們指點我的不足，並反覆修改，且謹記這次犯的錯誤，讓每次都比前一次更進步。經過一段時間後，我的撰寫能力大幅提升，且對於如何引起讀者的興趣，也有了更多的心得和體悟。除此之外，我也必須處理報社相關業務，並進行人員的對接等相關事宜，在這過程中，也逐漸培養了我處理事情的能力以及溝通表達能力，同時，也因為工作內容事務眾多，讓我學會如何妥善的分配時間和規畫行程，讓我能在期限內完成分內的事。"]}]}}},f=o(28),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("SectionTitle",{attrs:{titleText:"經典範例"}}),t._v(" "),t._l(t.dialogWithPhotoBodys,(function(e,l){return[o("DialogWithPhoto",t._b({key:"dialog-with-photo-component-"+l,attrs:{dialogBlockIndex:l}},"DialogWithPhoto",e,!1))]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogWithPhoto:o(252).default})},286:function(t,e,o){"use strict";o(256)},287:function(t,e,o){var l=o(52)(!1);l.push([t.i,".dialog-photo[data-v-8d0afd44]{width:225px;height:225px}.dialog-content-block[data-v-8d0afd44]{border-radius:.5rem;box-shadow:0 .2rem .2rem rgba(0,0,0,.25);padding:.5rem 1.8rem;font-size:.9rem;white-space:pre-line}",""]),t.exports=l}}]);