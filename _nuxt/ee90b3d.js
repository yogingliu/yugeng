(window.webpackJsonp=window.webpackJsonp||[]).push([[22,8],{249:function(t,e,c){"use strict";c.r(e);var n=c(28),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{attrs:{width:"100%",height:"100%",display:"block",viewBox:"0 0 23 24",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.4188 5.71866C19.7887 6.08863 19.7887 6.67679 19.4188 7.04676L8.66117 17.8043C8.2912 18.1743 7.70305 18.1743 7.33308 17.8043L3.34879 13.8201C2.97882 13.4501 2.97882 12.8619 3.34879 12.492C3.71876 12.122 4.30691 12.122 4.67688 12.492L7.99713 15.8122L18.0907 5.71866C18.4606 5.34869 19.0488 5.34869 19.4188 5.71866ZM17.4171 3.70754L7.99713 13.1275L5.35042 10.4808C4.61048 9.7409 3.40571 9.7409 2.66577 10.4808L1.33767 11.8089C0.59773 12.5489 0.59773 13.7536 1.33767 14.4936L6.65006 19.806C7.39 20.5459 8.59477 20.5459 9.33471 19.806L21.4299 7.72029C22.1698 6.98035 22.1698 5.77558 21.4299 5.03564L20.1018 3.70754C19.3524 2.9676 18.1571 2.9676 17.4171 3.70754Z"}})])])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,c){"use strict";c.r(e);c(191);var n={components:{SvgIconTick:c(249).default},props:{planRepresentColor:String,planPrice:Number,planTitle:String,planDescription:String,featuresOfProject:Array,extraPriceConditions:Array,suitableText:String}},r=(c(298),c(28)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"service-plan-card"},[c("div",{staticClass:"service-plan-border-bottom-block text-left mx-4 px-3 height-30"},[c("div",{staticClass:"font-size-2 font-size-little-1-point-8 py-3"},[t._v("NT$"+t._s(t.planPrice))]),t._v(" "),c("div",{staticClass:"font-size-1-point-4 my-2",style:{color:""+t.planRepresentColor}},[t._v(t._s(t.planTitle))]),t._v(" "),c("p",{staticClass:"white-space-pre-line my-3 text-description-service-plan-card"},[t._v(t._s(t.planDescription))])]),t._v(" "),c("div",{staticClass:"service-plan-border-bottom-block p-5  mx-4  text-left height-50 font-size-little-point-9"},t._l(t.featuresOfProject,(function(e){return c("div",{key:"feature-"+e.featureId,staticClass:"d-flex"},[c("div",{staticClass:"feature-tick-icon-block mr-2"},[e.isHavingFeature?c("SvgIconTick",{staticClass:"feature-tick-icon"}):t._e()],1),t._v(" "),c("div",[c("span",{style:{fontWeight:e.isHavingFeature?"bold":"normal"}},[t._v(t._s(e.featureText))])])])})),0),t._v(" "),c("div",{staticClass:"height-20"},[c("div",{staticClass:"mx-4 px-4 py-4"},[c("div",{staticClass:"d-flex justify-content-around my-2"},t._l(t.extraPriceConditions,(function(e){return c("div",{key:e.id},[c("span",[t._v(t._s(e.isPlus?"+":"-"))]),c("span",[t._v("NT$")]),c("span",[t._v(t._s(e.price))]),t._v(" "),c("p",{staticClass:"my-2",style:{color:""+t.planRepresentColor}},[t._v(t._s(e.conditionText))])])})),0),t._v(" "),c("div",{staticClass:"plan-suitable-for-customer-block",style:{backgroundColor:""+t.planRepresentColor}},[c("p",[t._v(t._s(t.suitableText))])])])])])}),[],!1,null,"43c2dc61",null);e.default=component.exports;installComponents(component,{SvgIconTick:c(249).default})},290:function(t,e,c){var content=c(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(53).default)("4674ae56",content,!0,{sourceMap:!1})},298:function(t,e,c){"use strict";c(290)},299:function(t,e,c){var n=c(52)(!1);n.push([t.i,".service-plan-card[data-v-43c2dc61]{width:345px;height:790px;border-radius:42px;box-shadow:0 5px 5px rgba(0,0,0,.25);background-color:#fff}@media screen and (max-width:576px){.service-plan-card[data-v-43c2dc61]{margin:30px auto}}@media screen and (max-width:420px){.service-plan-card[data-v-43c2dc61]{width:300PX;height:850px}}.service-plan-border-bottom-block[data-v-43c2dc61]{border-bottom:1px solid #e6e6e6}.font-size-2[data-v-43c2dc61]{font-size:2rem}@media screen and (max-width:420px){.font-size-little-1-point-8[data-v-43c2dc61]{font-size:1.8rem}}.font-size-1-point-4[data-v-43c2dc61]{font-size:1.4rem}@media screen and (max-width:420px){.font-size-little-1-point-2[data-v-43c2dc61]{font-size:1.2rem}}.text-description-service-plan-card[data-v-43c2dc61]{font-size:.8rem;line-height:1.8rem}@media screen and (max-width:420px){.text-description-service-plan-card[data-v-43c2dc61]{font-size:.7rem}}@media screen and (max-width:420px){.font-size-little-point-9[data-v-43c2dc61]{font-size:.9rem}}.white-space-pre-line[data-v-43c2dc61]{white-space:pre-line}.feature-tick-icon[data-v-43c2dc61]{width:24px;height:17px;fill:#f3b007}.feature-tick-icon-block[data-v-43c2dc61]{width:28px;height:28px;display:flex;align-items:center;justify-content:center}.plan-suitable-for-customer-block[data-v-43c2dc61]{color:#fff;width:100%;height:42px;border-radius:6px;display:flex;align-items:center;justify-content:center}.height-30[data-v-43c2dc61]{height:40%}.height-50[data-v-43c2dc61]{height:35%}.height-20[data-v-43c2dc61]{height:25%}",""]),t.exports=n}}]);