(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{6418:function(e,a,t){"use strict";t.d(a,{Z:function(){return D}});var s=t(7294),n=t.n(s),i=t(1385),l=t(809),r=t.n(l),c=t(2447),o=t(4047),m=t(4706),p=t(2700),d=t(8127),u=t(4102),y=t(775),h=t(6265),f=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"imageData","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"url","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"images","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approveNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"approveForSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"nftSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setbaseURIs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"QW":{}}'),N=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_price","type":"uint256"}],"name":"BoughtNFT","type":"event"},{"inputs":[],"name":"MNWToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftContract","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyImage","outputs":[],"stateMutability":"nonpayable","type":"function"}],"QW":{}}'),b=t(7918),g=t.n(b),v=function(){return new Promise((function(e,a){window.addEventListener("load",(0,c.Z)(r().mark((function t(){var s,n,i,l;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=13;break}return s=new(g())(window.ethereum),t.prev=2,t.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:e(s),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a(t.t0);case 11:t.next=14;break;case 13:window.web3?(n=window.web3,console.log("Injected web3 detected."),e(n)):(i=new(g().providers.HttpProvider)("https://bsc-dataseed1.ninicoin.io"),l=new(g())(i),console.log("No web3 instance injected, using Local web3."),e(l));case 14:case"end":return t.stop()}}),t,null,[[2,8]])}))))}))},_=n().createElement;function x(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,y.Z)(e);if(a){var n=(0,y.Z)(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return(0,u.Z)(this,t)}}var w=new(t(8945)),T=t(7918),k=new T,M=k.utils.BN,B=function(e){(0,d.Z)(t,e);var a=x(t);function t(e){var s;return(0,o.Z)(this,t),s=a.call(this,e),(0,h.Z)((0,m.Z)(s),"ethEnabled",(0,c.Z)(r().mark((function e(){var a,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=9;break}return e.next=3,ethereum.request({method:"eth_requestAccounts"});case 3:return a=e.sent,t=a[0],s.setState({account:t}),window.web3=new T(window.ethereum),s.web3=window.web3,e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})))),s.state={account:"",balanceInBNB:0,BNBinUSD:0,walletAddress:"",contract:null,sale_contract:null,sale_address:null,totalSupply:0,images:[],owners:[],imageData_name:[],imageData_url:[],imageData_price:[],new_price:null,token_sale_contract:null,token_price:0,approved:[]},s}return(0,p.Z)(t,[{key:"render",value:function(){var e=this,a="none",t="block";return this.state.account?(a="flex",t="none"):(a="none",t="block"),_("div",{className:"overflow-hidden"},_("header",{className:"header__1 js-header",id:"header"},_("div",{className:"container"},_("div",{className:"wrapper js-header-wrapper"},_("div",{className:"header__logo"},_("a",{href:"index.html"},_("img",{className:"header__logo",id:"logo_js",src:"assets/img/logos/logo-white.png",alt:"logo"}))),_("div",{className:"header__menu"},_("ul",{className:"d-flex space-x-20"},_("li",null,_("a",{className:"color_black",href:"Explore.html"}," Explore")),_("li",null,_("a",{className:"color_black",href:"Marketplace.html"}," Marketplace")),_("li",{style:{display:a}},_("a",{className:"color_black",href:"Collections.html"}," My Collections")))),_("div",{className:"header__search"},_("input",{type:"text",placeholder:"Search"}),_("button",{className:"header__result"},_("i",{className:"ri-search-line"}))),_("div",{style:{display:a},className:"header__avatar"},_("div",{className:"price"},_("span",null,this.state.balanceInBNB," ",_("strong",null,"BNB")," ")),_("img",{className:"avatar",src:"assets/img/avatars/avatar_2.png",alt:"avatar"}),_("div",{className:"avatar_popup space-y-20"},_("div",{className:"d-flex align-items-center justify-content-between"},_("span",null,this.state.walletAddress),_("a",{href:"/",className:"ml-2"},_("i",{className:"ri-file-copy-line"}))),_("div",{className:"d-flex align-items-center space-x-10"},_("img",{className:"coin",src:"assets/img/logos/coin.svg",alt:"/"}),_("div",{className:"info"},_("p",{className:"w-full text-sm font-bold text-green-500"},this.state.balanceInBNB," BNB"))),_("div",{className:"hr"}),_("div",{className:"links space-y-10"},_("a",{href:"Collections.html"},_("i",{className:"ri-landscape-line"})," ",_("span",null," My items"))))),_("div",{style:{display:a},className:"header__btns"},_("a",{className:"btn btn-primary btn-sm",href:"create-nft.html"},"Create")),_("div",{style:{display:t},className:"header__btns"},_("a",{className:"btn btn-grad btn-sm",href:"#",onClick:this.ethEnabled},_("i",{className:"ri-wallet-3-line"}),"Connect wallet"),_("a",{href:"#",id:"connectbtn"},_("img",{width:"45",src:"assets/img/icons/metamask.svg",alt:""}))),_("div",{className:"header__burger js-header-burger"}),_("div",{className:"header__mobile js-header-mobile"},_("div",{className:"header__mobile__menu space-y-40"},_("ul",{className:"d-flex space-y-20"},_("li",null," ",_("a",{className:"color_black",href:"Explore.html"}," Explore")," "),_("li",null," ",_("a",{className:"color_black",href:"Marketplace.html"}," Marketplace")," "),_("li",{style:{display:a}}," ",_("a",{className:"color_black",href:"Collections.html"}," Collections")," ")),_("div",{style:{display:t},className:"space-y-20"},_("a",{className:"btn btn-grad btn-sm",href:"#",onClick:this.ethEnabled},_("i",{className:"ri-wallet-3-line"}),"Connect wallet")),_("div",{style:{display:a},className:"space-y-20"},_("a",{className:"btn btn-grad btn-sm",href:"create-nft.html",onClick:this.ethEnabled},"Create"))))))),_("div",{className:"hero_marketplace bg_white"},_("div",{className:"container"},_("h1",{className:"text-center"},"My Collection"))),_("div",{className:"bg_white border-b py-20"},_("div",{className:"container"},_("div",{className:"d-flex justify-content-center"},_("ul",{className:"menu_categories space-x-20"},_("li",null,_("a",{href:"#",className:"color_brand"},_("span",null," All "))),_("li",null," ",_("a",{href:"#"},_("i",{className:"ri-gamepad-line"})," ",_("span",null," Games "))),_("li",null," ",_("a",{href:"#"},_("i",{className:"ri-brush-line"})," ",_("span",null," Art "))),_("li",null," ",_("a",{href:"#"},_("i",{className:"ri-stock-line"})," ",_("span",null," Trading Cards "))),_("li",null," ",_("a",{href:"#"},_("i",{className:"ri-music-line"})," ",_("span",null," Music "))),_("li",null," ",_("a",{href:"#"},_("i",{className:"ri-global-line"})," ",_("span",null," Domain Names "))),_("li",null," ",_("a",{href:"#"},_("i",{className:"ri-emotion-laugh-line"})," ",_("span",null," Memes "))),_("li",null," ",_("a",{href:"#"},_("i",{className:"ri-layout-4-line"})," ",_("span",null," Collectibles ")))),"        "))),_("div",{className:"container"},_("div",{className:"section mt-100"},_("div",{className:"section__head"},_("h2",{className:"section__title mb-20"}," Artworks"),_("div",{className:"row justify-content-between align-items-center"},_("div",{className:"col-lg-auto"},_("div",{className:"d-flex space-x-10 align-items-center"},_("span",{className:"color_text txt_sm",style:{minWidth:"max-content"}},"FILTER BY:"),_("ul",{className:"menu_categories space-x-20"},_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch1"}),_("label",{for:"switch1"},"Toggle"),_("span",null," Has list price ")),_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch2",checked:!0}),_("label",{for:"switch2"},"Toggle"),_("span",null," Has open offer ")),_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch3"}),_("label",{for:"switch3"},"Toggle"),_("span",null," Owned by creator ")),_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch4"}),_("label",{for:"switch4"},"Toggle"),_("span",null," Has sold "))),"                    ")),_("div",{className:"col-lg-auto"},_("div",{className:"d-flex space-x-10 align-items-center sm:mt-20"},_("span",{className:"color_text txt_sm"}," SORT BY: "),_("div",{className:"dropdown"},_("button",{className:"btn btn-dark btn-sm dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Recent Active"),_("div",{className:"dropdown-menu"},_("a",{className:"dropdown-item",href:"#"},"Action"),_("a",{className:"dropdown-item",href:"#"},"Another action"),_("a",{className:"dropdown-item",href:"#"},"Something else here"))))))),_("div",{className:"modal fade popup",id:"popup_bid_success",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",{className:"text-center"},"Your Bidding Successfuly Added"),_("p",{className:"text-center"},"your bid ",_("span",{className:"color_text txt\r _bold"},"(16ETH) ")," has been listing to our database"),_("a",{href:"#",className:"btn btn-dark w-full"}," Watch the listings"))))),_("div",{className:"modal fade popup",id:"popup_history",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h4",null," History "),_("div",{className:"creator_item creator_card space-x-10"},_("div",{className:"avatars space-x-10"},_("div",{className:"media"},_("div",{className:"badge"},_("img",{src:"assets/img/icons/Badge.svg",alt:""})),_("a",{href:"#"},_("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar avatar-md"}))),_("div",null,_("p",{className:"color_black"},"Bid accepted ",_("span",{className:"color_brand"},"1 ETH")," by ",_("a",{className:"color_black txt\r _bold",href:"#"},"ayoub")),_("span",{className:"date color_text"},"28/06/2021, 12:08")))),_("div",{className:"creator_item creator_card space-x-10"},_("div",{className:"avatars space-x-10"},_("div",{className:"media"},_("div",{className:"badge"},_("img",{src:"assets/img/icons/Badge.svg",alt:""})),_("a",{href:"#"},_("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar avatar-md"}))),_("div",null,_("p",{className:"color_black"},"Bid accepted ",_("span",{className:"color_brand"},"3 ETH")," by ",_("a",{className:"color_black txt\r _bold",href:"#"},"monir")),_("span",{className:"date color_text"},"22/05/2021, 12:08")))))))),_("div",{className:"row mb-30_reset"},this.state.images.map((function(a,t){return e.state.owners[t]===e.state.account?_(n().Fragment,null,_("div",{className:"modal fade popup",id:"popup_approve"+t,tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",null,"Approve for sale"),_("p",null,e.state.imageData_name[t]," ",_("span",{className:"color_black"},e.state.imageData_price[t]," BNB")),_("input",{type:"number",className:"form-control",value:e.state.new_price,placeholder:e.state.imageData_price[t]}),_("div",{className:"hr"}),_("div",{className:"d-flex justify-content-between"},_("p",null," You'r paying listing fee for sale approval:")),_("div",{className:"d-flex justify-content-between"},_("p",null," listing fee:"),_("p",{className:"text-right color_black txt _bold"}," 0.045 BNB/$",parseFloat(.045*e.state.BNBinUSD).toFixed(2)," ")),_("div",{className:"d-flex justify-content-between"},_("p",null," Current price:"),_("p",{className:"text-right color_black txt _bold"}," ",e.state.imageData_price[t]," BNB/$",parseFloat(e.state.BNBinUSD*e.state.imageData_price[t]).toFixed(2)," ")),_("a",{href:"#",className:"btn btn-primary w-full","data-toggle":"modal","data-target":"#popup_bid_success","data-dismiss":"modal","aria-label":"Close"}," Approve"))))),_("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},_("div",{className:"card__item four"},_("div",{className:"card_body space-y-10"},_("div",{className:"creators space-x-10"},_("div",{className:"avatars space-x-3"},_("a",{href:"#"},_("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar avatar-sm"})),_("a",{href:"#"},_("p",{className:"avatars_name txt_xs"},e.state.walletAddress)))),_("div",{className:"card_head"},_("a",{href:"nft-detail.html?item_id="+t},_("img",{src:e.state.imageData_url[t],alt:""})),_("a",{href:"#",className:"likes space-x-3"},_("i",{className:"ri-heart-3-fill"}),_("span",{className:"txt_sm"},"1.2k"))),_("h6",{className:"card_title"},e.state.imageData_name[t]),_("div",{className:"card_footer d-block space-y-10"},_("div",{className:"card_footer justify-content-between"},_("a",{href:"#",className:""},_("p",{className:"txt_sm"},"Price: ",_("span",{className:"color_green\r txt_sm"},e.state.imageData_price[t]," MNW/$",parseFloat(0).toFixed(2))))),_("div",{className:"hr"}),_("div",{className:"d-flex align-items-center space-x-10\r justify-content-between"},_("div",{className:"d-flex align-items-center\r space-x-10"},_("i",{className:"ri-history-line"}),_("a",{className:"view_history",href:"#","data-toggle":"modal","data-target":"#popup_history"},_("p",{className:"color_text txt_sm",style:{width:"auto"}},"View History"))),_("a",{className:"btn btn-sm btn-primary",href:"nft-detail.html?item_id="+t},"View"))))))):null})))),_("div",{className:"section mt-100"},_("div",{className:"section__head"},_("h2",{className:"section__title mb-20"}," Collections"),_("div",{className:"row justify-content-between align-items-center"},_("div",{className:"col-lg-auto"},_("div",{className:"d-flex align-items-center space-x-10"},_("span",{className:"color_text txt_sm",style:{minWidth:"max-content"}},"FILTER BY:"),_("ul",{className:"menu_categories space-x-20"},_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch7"}),_("label",{for:"switch7"},"Toggle"),_("span",null," Has list price ")),_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch8",checked:!0}),_("label",{for:"switch8"},"Toggle"),_("span",null," Has open offer ")),_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch9"}),_("label",{for:"switch9"},"Toggle"),_("span",null," Owned by creator ")),_("li",{className:"d-flex space-x-10 switch_item"},_("input",{type:"checkbox",id:"switch10"}),_("label",{for:"switch10"},"Toggle"),_("span",null," Has sold "))))),_("div",{className:"col-lg-auto"},_("div",{className:"d-flex space-x-10 align-items-center sm:mt-20"},_("span",{className:"color_text txt_sm"}," SORT BY: "),_("div",{className:"dropdown"},_("button",{className:"btn btn-dark btn-sm dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Recent Active"),_("div",{className:"dropdown-menu"},_("a",{className:"dropdown-item",href:"#"},"Action"),_("a",{className:"dropdown-item",href:"#"},"Another action"),_("a",{className:"dropdown-item",href:"#"},"Something else here"))))))),_("div",{className:"row justify-content-center mb-30_reset"},_("div",{className:"col-lg-4 col-md-6 col-sm-8"},_("div",{className:"collections space-y-10 mb-30"},_("a",{href:"#"},_("div",{className:"collections_item"},_("div",{className:"images-box space-y-10"},_("div",{className:"top_imgs"},_("img",{src:"assets/img/items/item_9.png",alt:""}),_("img",{src:"assets/img/items/item_10.png",alt:""}),_("img",{src:"assets/img/items/item_11.png",alt:""})),_("img",{src:"assets/img/items/item_12.png",alt:""})))),_("div",{className:"collections_footer justify-content-between"},_("h5",{className:"collection_title"},_("a",{href:"#"},"Creative Art collection")),_("a",{href:"#",className:"likes space-x-3"},_("i",{className:"ri-heart-3-fill"}),_("span",{className:"txt_md"},"2.1k"))),_("div",{className:"creators space-x-10"},_("span",{className:"color_text txt_md"}," 5 items \xb7 Created by"),_("div",{className:"avatars space-x-5"},_("a",{href:"#"},_("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar avatar-sm"}))),_("a",{href:"#"},_("p",{className:"avatars_name txt_sm"}," @william_jamy... "))))),_("div",{className:"col-lg-4 col-md-6 col-sm-8"},_("div",{className:"collections space-y-10 mb-30"},_("a",{href:"#"},_("div",{className:"collections_item"},_("div",{className:"images-box space-y-10"},_("div",{className:"top_imgs"},_("img",{src:"assets/img/items/item_13.png",alt:""}),_("img",{src:"assets/img/items/item_14.png",alt:""}),_("img",{src:"assets/img/items/item_15.png",alt:""})),_("img",{src:"assets/img/items/item_16.png",alt:""})))),_("div",{className:"collections_footer justify-content-between"},_("h5",{className:"collection_title"},_("a",{href:"#"},"Colorful Abstract Painting")),_("a",{href:"#",className:"likes space-x-3"},_("i",{className:"ri-heart-3-fill"}),_("span",{className:"txt_md"},"3.5k"))),_("div",{className:"creators space-x-10"},_("span",{className:"color_text txt_md"}," 7 items \xb7 Created by"),_("div",{className:"avatars space-x-5"},_("a",{href:"#"},_("img",{src:"assets/img/avatars/avatar_3.png",alt:"Avatar",className:"avatar avatar-sm"}))),_("a",{href:"#"},_("p",{className:"avatars_name txt_sm"}," @alexis_fenn... "))))),_("div",{className:"col-lg-4 col-md-6 col-sm-8"},_("div",{className:"collections space-y-10 mb-30"},_("a",{href:"#"},_("div",{className:"collections_item"},_("div",{className:"images-box space-y-10"},_("div",{className:"top_imgs"},_("img",{src:"assets/img/items/item_17.png",alt:""}),_("img",{src:"assets/img/items/item_18.png",alt:""}),_("img",{src:"assets/img/items/item_19.png",alt:""})),_("img",{src:"assets/img/items/item_20.png",alt:""})))),_("div",{className:"collections_footer justify-content-between"},_("h5",{className:"collection_title"},_("a",{href:"#"},"Modern Art collection")),_("a",{href:"#",className:"likes space-x-3"},_("i",{className:"ri-heart-3-fill"}),_("span",{className:"txt_md"},"7.2k"))),_("div",{className:"creators space-x-10"},_("span",{className:"color_text txt_md"}," 2 items \xb7 Created by"),_("div",{className:"avatars space-x-5"},_("a",{href:"#"},_("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar avatar-sm"}))),_("a",{href:"#"},_("p",{className:"avatars_name txt_sm"}," @Joshua_Bren... ")))))))))}}]),(0,p.Z)(t,[{key:"componentDidMount",value:function(){var e=(0,c.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="My Collections | NFT Marketplace",e.next=3,this.loadBlockchainData();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadBlockchainData",value:function(){var e=(0,c.Z)(r().mark((function e(){var a,t,s,n,l,c,o,m,p,d,u,y,h,b,g,_;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:return this.web3=e.sent,e.next=6,this.web3.eth.getAccounts();case 6:return a=e.sent,this.setState({account:a[0]}),e.next=10,k.eth.net.getId();case 10:this.networkId=e.sent,e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),t=new T.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"),this.web3=new T(t),this.networkId=97;case 18:if(!this.state.account){e.next=26;break}return e.next=21,this.web3.eth.getBalance(this.state.account);case 21:return s=e.sent,e.next=24,k.utils.fromWei(new M(s),"ether");case 24:n=e.sent,this.setState({balanceInBNB:parseFloat(n).toFixed(2),walletAddress:this.state.account.substring(0,6)+"..."+this.state.account.substring(38)});case 26:return f.QW[this.networkId],l=f.Mt,"0xD39fcf1713616B4eE420F683BB43c3B20eC776f6",c=new this.web3.eth.Contract(l,"0xD39fcf1713616B4eE420F683BB43c3B20eC776f6"),this.setState({contract:c}),e.next=33,c.methods.totalSupply().call();case 33:o=e.sent,this.setState({totalSupply:o}),m=1;case 36:if(!(m<=o)){e.next=44;break}return e.next=39,c.methods.images(m-1).call();case 39:p=e.sent,this.setState({images:[].concat((0,i.Z)(this.state.images),[p])});case 41:m++,e.next=36;break;case 44:m=1;case 45:if(!(m<=o)){e.next=53;break}return e.next=48,c.methods.ownerOf(m-1).call();case 48:d=e.sent,this.setState({owners:[].concat((0,i.Z)(this.state.owners),[d])});case 50:m++,e.next=45;break;case 53:m=1;case 54:if(!(m<=o)){e.next=73;break}return e.next=57,c.methods.imageData(m-1).call();case 57:return u=e.sent,e.t1=this,e.t2=[].concat((0,i.Z)(this.state.imageData_name),[u.name]),e.t3=[],e.t4=(0,i.Z)(this.state.imageData_price),e.next=64,k.utils.fromWei(u.price,"Ether");case 64:e.t5=e.sent,e.t6=[e.t5],e.t7=e.t3.concat.call(e.t3,e.t4,e.t6),e.t8=[].concat((0,i.Z)(this.state.imageData_url),[u.url]),e.t9={imageData_name:e.t2,imageData_price:e.t7,imageData_url:e.t8},e.t1.setState.call(e.t1,e.t9);case 70:m++,e.next=54;break;case 73:N.QW[this.networkId],y=N.Mt,h="0xa4FeD78dF255F78231aEDBcbF4C1ae947DF70acF",b=new this.web3.eth.Contract(y,h),this.setState({sale_contract:b,sale_address:h}),m=1;case 79:if(!(m<=this.state.totalSupply)){e.next=87;break}return e.next=82,this.state.contract.methods.isApprovedOrOwner(this.state.sale_contract._address,m-1).call();case 82:g=e.sent,this.setState({approved:[].concat((0,i.Z)(this.state.approved),[g])});case 84:m++,e.next=79;break;case 87:return e.prev=87,e.next=90,w.simple.price({ids:["binancecoin"],vs_currencies:["usd"]});case 90:_=e.sent,this.setState({BNBinUSD:Math.round(_.data.binancecoin.usd)}),e.next=96;break;case 94:e.prev=94,e.t10=e.catch(87);case 96:case"end":return e.stop()}}),e,this,[[0,13],[87,94]])})));return function(){return e.apply(this,arguments)}}()}]),t}(s.Component),A=n().createElement;function C(){return A(n().Fragment,null,A("footer",{className:"footer__1"},A("div",{className:"container"},A("div",{className:"row"},A("div",{className:"col-lg-6 space-y-20"},A("div",{className:"footer__logo"},A("a",{href:"index.html"},A("img",{width:"100",src:"assets/img/logos/logo-white.png",alt:"logo",id:"logo_js_f"}))),A("p",{className:"footer__text"},"A New Chain of Art, Music and Gaming characters."),A("div",null,A("ul",{className:"footer__social space-x-10 mb-40"},A("li",null," ",A("a",{href:"#"}," ",A("i",{className:"ri-facebook-line"})," ")),A("li",null," ",A("a",{href:"#"}," ",A("i",{className:"ri-messenger-line"})," ")),A("li",null," ",A("a",{href:"#"}," ",A("i",{className:"ri-whatsapp-line"})," ")),A("li",null," ",A("a",{href:"#"}," ",A("i",{className:"ri-youtube-line"})," "))))),A("div",{className:"col-lg-3 col-6"},A("h6",{className:"footer__title"},"METANFTWORLD"),A("ul",{className:"footer__list"},A("li",null," ",A("a",{href:"Explore.html"}," Explore ")),A("li",null," ",A("a",{href:"Marketplace.html"}," Marketplace")))),A("div",{className:"col-lg-3 col-6"},A("h6",{className:"footer__title"},"Assets"),A("ul",{className:"footer__list"},A("li",null," ",A("a",{href:"Profile.html"}," Profile ")),A("li",null," ",A("a",{href:"Collections.html"}," Colletctions "))))),A("p",{className:"copyright text-center"},"Copyright \xa9 2021."))))}var I=n().createElement,D=function(e){return I(n().Fragment,null,I(B,null),e.children,I(C,null))}},2361:function(){},4616:function(){}}]);