(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{93367:function(a,e,s){"use strict";var t;e.__esModule=!0,e.AmpStateContext=void 0;var l=((t=s(67294))&&t.__esModule?t:{default:t}).default.createContext({});e.AmpStateContext=l},7845:function(a,e,s){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(l.default.useContext(r.AmpStateContext))};var t,l=(t=s(67294))&&t.__esModule?t:{default:t},r=s(93367);function c(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.ampFirst,s=void 0!==e&&e,t=a.hybrid,l=void 0!==t&&t,r=a.hasQuery,c=void 0!==r&&r;return s||l&&c}},57947:function(a,e,s){"use strict";var t=s(61682);function l(a,e){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.push.apply(s,t)}return s}e.__esModule=!0,e.defaultHead=p,e.default=void 0;var r,c=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!==typeof a&&"function"!==typeof a)return{default:a};var e=d();if(e&&e.has(a))return e.get(a);var s={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in a)if(Object.prototype.hasOwnProperty.call(a,l)){var r=t?Object.getOwnPropertyDescriptor(a,l):null;r&&(r.get||r.set)?Object.defineProperty(s,l,r):s[l]=a[l]}s.default=a,e&&e.set(a,s);return s}(s(67294)),i=(r=s(60617))&&r.__esModule?r:{default:r},m=s(93367),o=s(74287),n=s(7845);function d(){if("function"!==typeof WeakMap)return null;var a=new WeakMap;return d=function(){return a},a}function p(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[c.default.createElement("meta",{charSet:"utf-8"})];return a||e.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(a,e){return"string"===typeof e||"number"===typeof e?a:e.type===c.default.Fragment?a.concat(c.default.Children.toArray(e.props.children).reduce((function(a,e){return"string"===typeof e||"number"===typeof e?a:a.concat(e)}),[])):a.concat(e)}var v=["name","httpEquiv","charSet","itemProp"];function h(a,e){return a.reduce((function(a,e){var s=c.default.Children.toArray(e.props.children);return a.concat(s)}),[]).reduce(f,[]).reverse().concat(p(e.inAmpMode)).filter(function(){var a=new Set,e=new Set,s=new Set,t={};return function(l){var r=!0,c=!1;if(l.key&&"number"!==typeof l.key&&l.key.indexOf("$")>0){c=!0;var i=l.key.slice(l.key.indexOf("$")+1);a.has(i)?r=!1:a.add(i)}switch(l.type){case"title":case"base":e.has(l.type)?r=!1:e.add(l.type);break;case"meta":for(var m=0,o=v.length;m<o;m++){var n=v[m];if(l.props.hasOwnProperty(n))if("charSet"===n)s.has(n)?r=!1:s.add(n);else{var d=l.props[n],p=t[n]||new Set;"name"===n&&c||!p.has(d)?(p.add(d),t[n]=p):r=!1}}}return r}}()).reverse().map((function(a,s){var r=a.key||s;if(!e.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css"].some((function(e){return a.props.href.startsWith(e)}))){var i=function(a){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){t(a,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(s,e))}))}return a}({},a.props||{});return i["data-href"]=i.href,i.href=void 0,c.default.cloneElement(a,i)}return c.default.cloneElement(a,{key:r})}))}function N(a){var e=a.children,s=(0,c.useContext)(m.AmpStateContext),t=(0,c.useContext)(o.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:h,headManager:t,inAmpMode:(0,n.isInAmpMode)(s)},e)}N.rewind=function(){};var u=N;e.default=u},60617:function(a,e,s){"use strict";var t=s(83115),l=s(2553),r=s(62012),c=(s(50450),s(9807)),i=s(27690),m=s(99828);function o(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,t=m(a);if(e){var l=m(this).constructor;s=Reflect.construct(t,arguments,l)}else s=t.apply(this,arguments);return i(this,s)}}e.__esModule=!0,e.default=void 0;var n=s(67294),d=function(a){c(s,a);var e=o(s);function s(a){var r;return l(this,s),(r=e.call(this,a))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(t(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(s,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),s}(n.Component);e.default=d},71313:function(a,e,s){"use strict";s.r(e);var t=s(809),l=s.n(t),r=s(92447),c=s(74047),i=s(52700),m=s(4706),o=s(8127),n=s(44102),d=s(20775),p=s(26265),f=s(67294),v=s.n(f),h=(s(9008),s(41101),v().createElement);function N(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,t=(0,d.Z)(a);if(e){var l=(0,d.Z)(this).constructor;s=Reflect.construct(t,arguments,l)}else s=t.apply(this,arguments);return(0,n.Z)(this,s)}}var u=function(a){(0,o.Z)(s,a);var e=N(s);function s(){var a;(0,c.Z)(this,s);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return a=e.call.apply(e,[this].concat(i)),(0,p.Z)((0,m.Z)(a),"componentDidMount",(0,r.Z)(l().mark((function a(){return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}}),a)})))),a}return(0,i.Z)(s,[{key:"render",value:function(){return h(v().Fragment,null,h("div",{className:"hero_marketplace bg_white"},h("div",{className:"container"},h("h1",{className:"text-center"},"NFT Marketplace"))),h("div",{className:"bg_white border-b py-20"},h("div",{className:"container"},h("div",{className:"d-flex justify-content-center"},h("ul",{className:"menu_categories space-x-20"},h("li",null,h("a",{href:"#",className:"color_brand"},h("span",null," All "))),h("li",null," ",h("a",{href:"#"},h("i",{className:"ri-gamepad-line"})," ",h("span",null," Games "))),h("li",null," ",h("a",{href:"#"},h("i",{className:"ri-brush-line"})," ",h("span",null," Art "))),h("li",null," ",h("a",{href:"#"},h("i",{className:"ri-stock-line"})," ",h("span",null," Trading Cards "))),h("li",null," ",h("a",{href:"#"},h("i",{className:"ri-music-line"})," ",h("span",null," Music "))),h("li",null," ",h("a",{href:"#"},h("i",{className:"ri-global-line"})," ",h("span",null," Domain Names "))),h("li",null," ",h("a",{href:"#"},h("i",{className:"ri-emotion-laugh-line"})," ",h("span",null," Memes "))),h("li",null," ",h("a",{href:"#"},h("i",{className:"ri-layout-4-line"})," ",h("span",null," Collectibles ")))),"        "))),h("div",{className:"container"},h("div",{className:"section mt-100"},h("div",{className:"section__head"},h("h2",{className:"section__title mb-20"}," Artworks"),h("div",{className:"row justify-content-between align-items-center"},h("div",{className:"col-lg-auto"},h("div",{className:"d-flex space-x-10 align-items-center"},h("span",{className:"color_text txt_sm",style:{minWidth:"max-content"}},"FILTER BY:"),h("ul",{className:"menu_categories space-x-20"},h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch1"}),h("label",{for:"switch1"},"Toggle"),h("span",null," Has list price ")),h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch2",checked:!0}),h("label",{for:"switch2"},"Toggle"),h("span",null," Has open offer ")),h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch3"}),h("label",{for:"switch3"},"Toggle"),h("span",null," Owned by creator ")),h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch4"}),h("label",{for:"switch4"},"Toggle"),h("span",null," Has sold "))),"                    ")),h("div",{className:"col-lg-auto"},h("div",{className:"d-flex space-x-10 align-items-center sm:mt-20"},h("span",{className:"color_text txt_sm"}," SORT BY: "),h("div",{className:"dropdown"},h("button",{className:"btn btn-dark btn-sm dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Recent Active"),h("div",{className:"dropdown-menu"},h("a",{className:"dropdown-item",href:"#"},"Action"),h("a",{className:"dropdown-item",href:"#"},"Another action"),h("a",{className:"dropdown-item",href:"#"},"Something else here"))))))),h("div",{className:"modal fade popup",id:"popup_bid_success",tabindex:"-1",role:"dialog","aria-hidden":"true"},h("div",{className:"modal-dialog modal-dialog-centered",role:"document"},h("div",{className:"modal-content"},h("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},h("span",{"aria-hidden":"true"},"\xd7")),h("div",{className:"modal-body space-y-20 p-40"},h("h3",{className:"text-center"},"Your Bidding Successfuly Added"),h("p",{className:"text-center"},"your bid ",h("span",{className:"color_text txt _bold"},"(16ETH) ")," has been listing to our database"),h("a",{href:"#",className:"btn btn-dark w-full"}," Watch the listings"))))),h("div",{className:"modal fade popup",id:"popup_bid",tabindex:"-1",role:"dialog","aria-hidden":"true"},h("div",{className:"modal-dialog modal-dialog-centered",role:"document"},h("div",{className:"modal-content"},h("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},h("span",{"aria-hidden":"true"},"\xd7")),h("div",{className:"modal-body space-y-20 p-40"},h("h3",null,"Place a Bid"),h("p",null,"You must bid at least ",h("span",{className:"color_black"},"15 ETH")),h("input",{type:"text",className:"form-control",placeholder:"00.00 ETH"}),h("p",null,"Enter quantity. ",h("span",{className:"color_green"},"5 available")),h("input",{type:"text",className:"form-control",value:"1"}),h("div",{className:"hr"}),h("div",{className:"d-flex justify-content-between"},h("p",null," You must bid at least:"),h("p",{className:"text-right color_black txt _bold"}," 67,000 ETH ")),h("div",{className:"d-flex justify-content-between"},h("p",null," service free:"),h("p",{className:"text-right color_black txt _bold"}," 0,901 ETH ")),h("div",{className:"d-flex justify-content-between"},h("p",null," Total bid amount:"),h("p",{className:"text-right color_black txt _bold"}," 56,031 ETH ")),h("a",{href:"#",className:"btn btn-primary w-full","data-toggle":"modal","data-target":"#popup_bid_success","data-dismiss":"modal","aria-label":"Close"}," Place a bid"))))),h("div",{className:"modal fade popup",id:"popup_history",tabindex:"-1",role:"dialog","aria-hidden":"true"},h("div",{className:"modal-dialog modal-dialog-centered",role:"document"},h("div",{className:"modal-content"},h("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},h("span",{"aria-hidden":"true"},"\xd7")),h("div",{className:"modal-body space-y-20 p-40"},h("h4",null," History "),h("div",{className:"creator_item creator_card space-x-10"},h("div",{className:"avatars space-x-10"},h("div",{className:"media"},h("div",{className:"badge"},h("img",{src:"assets/img/icons/Badge.svg",alt:""})),h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar avatar-md"}))),h("div",null,h("p",{className:"color_black"},"Bid accepted ",h("span",{className:"color_brand"},"1 ETH")," by ",h("a",{className:"color_black txt _bold",href:"Profile.html"},"ayoub")),h("span",{className:"date color_text"},"28/06/2021, 12:08")))),h("div",{className:"creator_item creator_card space-x-10"},h("div",{className:"avatars space-x-10"},h("div",{className:"media"},h("div",{className:"badge"},h("img",{src:"assets/img/icons/Badge.svg",alt:""})),h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar avatar-md"}))),h("div",null,h("p",{className:"color_black"},"Bid accepted ",h("span",{className:"color_brand"},"3 ETH")," by ",h("a",{className:"color_black txt _bold",href:"Profile.html"},"monir")),h("span",{className:"date color_text"},"22/05/2021, 12:08")))))))),h("div",{className:"row mb-30_reset"},h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@mickel_fenn"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@danil_pannini")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_1.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"1.2k"))),h("h6",{className:"card_title"},"Colorful Abstract Painting"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 4 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"2.45 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid")))))),h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_3.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@mazanov_sky"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_4.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@mucky_fennouni")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_2.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"13.2k"))),h("h6",{className:"card_title"},"The girl with the firefly"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 12 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"2.55 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid")))))),h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_5.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@jimmy_dom"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_6.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@kristian_sefroui")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_3.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"1.2k"))),h("h6",{className:"card_title"},"Dodo hide the seek"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 6 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"2.45 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid")))))),h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@Alvin_nov"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_7.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@mucky_holiman")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_4.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"4.1k"))),h("h6",{className:"card_title"},"Liquid Forest Princess"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 34 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"0.55 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid")))))),h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_8.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@stivan_rominok"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_9.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@danil_pan")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_5.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"6.4k"))),h("h6",{className:"card_title"},"Spider Eyes Modern Art"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 7 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"1.45 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid")))))),h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_10.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@mazanov_sky"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_11.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@mucky_art")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_6.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"13.2k"))),h("h6",{className:"card_title"},"Synthwave Painting"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 2 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"0.055 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid")))))),h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_12.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@jimmy_dom"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_5.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@kristian_fel")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_7.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"1.6k"))),h("h6",{className:"card_title"},"Contemporary Abstract"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 34 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"0.95 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid")))))),h("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},h("div",{className:"card__item four"},h("div",{className:"card_body space-y-10"},h("div",{className:"creators space-x-10"},h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_13.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@Alvin_nov"))),h("div",{className:"avatars space-x-3"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_14.png",alt:"Avatar",className:"avatar avatar-sm"})),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_xs"},"@mucky_art")))),h("div",{className:"card_head"},h("a",{href:"Item-details.html"},h("img",{src:"assets/img/items/item_8.png",alt:""})),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_sm"},"11.5k"))),h("h6",{className:"card_title"},"Valkyrie Abstract Art"),h("div",{className:"card_footer d-block space-y-10"},h("div",{className:"card_footer justify-content-between"},h("div",{className:"creators"},h("p",{className:"txt_sm"}," 9 in stock")),h("a",{href:"#",className:""},h("p",{className:"txt_sm"},"Price: ",h("span",{className:"color_green txt_sm"},"3.55 ETH")))),h("div",{className:"hr"}),h("div",{className:"d-flex align-items-center space-x-10 justify-content-between"},h("div",{className:"d-flex align-items-center space-x-10"},h("i",{className:"ri-history-line"}),h("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},h("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),h("a",{className:"btn btn-sm btn-primary",href:"#","data-toggle":"modal","data-target":"#popup_bid"},"Place Bid"))))))),"    "),h("div",{className:"section mt-100"},h("div",{className:"section__head"},h("h2",{className:"section__title mb-20"}," Collections"),h("div",{className:"row justify-content-between align-items-center"},h("div",{className:"col-lg-auto"},h("div",{className:"d-flex align-items-center space-x-10"},h("span",{className:"color_text txt_sm",style:{minWidth:"max-content"}},"FILTER BY:"),h("ul",{className:"menu_categories space-x-20"},h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch7"}),h("label",{for:"switch7"},"Toggle"),h("span",null," Has list price ")),h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch8",checked:!0}),h("label",{for:"switch8"},"Toggle"),h("span",null," Has open offer ")),h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch9"}),h("label",{for:"switch9"},"Toggle"),h("span",null," Owned by creator ")),h("li",{className:"d-flex space-x-10 switch_item"},h("input",{type:"checkbox",id:"switch10"}),h("label",{for:"switch10"},"Toggle"),h("span",null," Has sold "))))),h("div",{className:"col-lg-auto"},h("div",{className:"d-flex space-x-10 align-items-center sm:mt-20"},h("span",{className:"color_text txt_sm"}," SORT BY: "),h("div",{className:"dropdown"},h("button",{className:"btn btn-dark btn-sm dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Recent Active"),h("div",{className:"dropdown-menu"},h("a",{className:"dropdown-item",href:"#"},"Action"),h("a",{className:"dropdown-item",href:"#"},"Another action"),h("a",{className:"dropdown-item",href:"#"},"Something else here"))))))),h("div",{className:"row justify-content-center mb-30_reset"},h("div",{className:"col-lg-4 col-md-6 col-sm-8"},h("div",{className:"collections space-y-10 mb-30"},h("a",{href:"404-4.html"},h("div",{className:"collections_item"},h("div",{className:"images-box space-y-10"},h("div",{className:"top_imgs"},h("img",{src:"assets/img/items/item_9.png",alt:""}),h("img",{src:"assets/img/items/item_10.png",alt:""}),h("img",{src:"assets/img/items/item_11.png",alt:""})),h("img",{src:"assets/img/items/item_12.png",alt:""})))),h("div",{className:"collections_footer justify-content-between"},h("h5",{className:"collection_title"},h("a",{href:"Collections.html"},"Creative Art collection")),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_md"},"2.1k"))),h("div",{className:"creators space-x-10"},h("span",{className:"color_text txt_md"}," 5 items \xb7 Created by"),h("div",{className:"avatars space-x-5"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar avatar-sm"}))),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_sm"}," @william_jamy... "))))),h("div",{className:"col-lg-4 col-md-6 col-sm-8"},h("div",{className:"collections space-y-10 mb-30"},h("a",{href:"404-4.html"},h("div",{className:"collections_item"},h("div",{className:"images-box space-y-10"},h("div",{className:"top_imgs"},h("img",{src:"assets/img/items/item_13.png",alt:""}),h("img",{src:"assets/img/items/item_14.png",alt:""}),h("img",{src:"assets/img/items/item_15.png",alt:""})),h("img",{src:"assets/img/items/item_16.png",alt:""})))),h("div",{className:"collections_footer justify-content-between"},h("h5",{className:"collection_title"},h("a",{href:"Collections.html"},"Colorful Abstract Painting")),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_md"},"3.5k"))),h("div",{className:"creators space-x-10"},h("span",{className:"color_text txt_md"}," 7 items \xb7 Created by"),h("div",{className:"avatars space-x-5"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_3.png",alt:"Avatar",className:"avatar avatar-sm"}))),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_sm"}," @alexis_fenn... "))))),h("div",{className:"col-lg-4 col-md-6 col-sm-8"},h("div",{className:"collections space-y-10 mb-30"},h("a",{href:"404-4.html"},h("div",{className:"collections_item"},h("div",{className:"images-box space-y-10"},h("div",{className:"top_imgs"},h("img",{src:"assets/img/items/item_17.png",alt:""}),h("img",{src:"assets/img/items/item_18.png",alt:""}),h("img",{src:"assets/img/items/item_19.png",alt:""})),h("img",{src:"assets/img/items/item_20.png",alt:""})))),h("div",{className:"collections_footer justify-content-between"},h("h5",{className:"collection_title"},h("a",{href:"Collections.html"},"Modern Art collection")),h("a",{href:"#",className:"likes space-x-3"},h("i",{className:"ri-heart-3-fill"}),h("span",{className:"txt_md"},"7.2k"))),h("div",{className:"creators space-x-10"},h("span",{className:"color_text txt_md"}," 2 items \xb7 Created by"),h("div",{className:"avatars space-x-5"},h("a",{href:"Profile.html"},h("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar avatar-sm"}))),h("a",{href:"Profile.html"},h("p",{className:"avatars_name txt_sm"}," @Joshua_Bren... ")))))))))}}]),s}(f.Component);e.default=u},78581:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(71313)}])},9008:function(a,e,s){s(57947)},38164:function(a,e,s){var t=s(54360);a.exports=function(a){if(Array.isArray(a))return t(a)}},61682:function(a){a.exports=function(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}},27381:function(a){a.exports=function(a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}},95725:function(a){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},83115:function(a,e,s){var t=s(38164),l=s(27381),r=s(73585),c=s(95725);a.exports=function(a){return t(a)||l(a)||r(a)||c()}}},function(a){a.O(0,[774,543,351,935,409],(function(){return e=78581,a(a.s=e);var e}));var e=a.O();_N_E=e}]);