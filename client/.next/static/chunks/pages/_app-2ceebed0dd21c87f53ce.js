(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{1979:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return B}});var s=t(7294),n=t.n(s),l=t(1385),i=t(809),r=t.n(i),o=t(2447),c=t(4047),m=t(4706),d=t(2700),p=t(8127),u=t(4102),y=t(775),h=t(6265),b=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"imageData","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"url","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"images","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approveNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"approveForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"approveForAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"nftSold","outputs":[],"stateMutability":"nonpayable","type":"function"}],"QW":{"97":{"events":{},"links":{},"address":"0xd0F78aC766D8Af1D13e9C36e25cC8C93Ed709837","transactionHash":"0x36b9dd898c4b8a9b982505f8ad8431576268a27c3c40389a7f9dde603f8dbf3a"}}}'),f=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract ImageContract","name":"_imageContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_price","type":"uint256"}],"name":"BoughtNFT","type":"event"},{"inputs":[],"name":"imageContract","outputs":[{"internalType":"contract ImageContract","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyImage","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"bid","outputs":[],"stateMutability":"payable","type":"function","payable":true}],"QW":{"97":{"events":{},"links":{},"address":"0x515BC7b77CCc1cd12BB4f68D6B23D1Ed40Ad9AAA","transactionHash":"0x2bf98ba7dec9630a2b8fcd8eaf936216585b9aac58023a2c6248a07c3c026f8f"}}}'),N=t(7918),v=t.n(N),g=function(){return new Promise((function(e,a){window.addEventListener("load",(0,o.Z)(r().mark((function t(){var s,n,l,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=13;break}return s=new(v())(window.ethereum),t.prev=2,t.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:e(s),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a(t.t0);case 11:t.next=14;break;case 13:window.web3?(n=window.web3,console.log("Injected web3 detected."),e(n)):(l=new(v().providers.HttpProvider)("https://data-seed-prebsc-1-s1.binance.org:8545"),i=new(v())(l),console.log("No web3 instance injected, using Local web3."),e(i));case 14:case"end":return t.stop()}}),t,null,[[2,8]])}))))}))},_=n().createElement;function w(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,y.Z)(e);if(a){var n=(0,y.Z)(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return(0,u.Z)(this,t)}}var x=new(t(8945)),k=t(7918),T=new k,C=T.utils.BN,M=function(e){(0,p.Z)(t,e);var a=w(t);function t(e){var s;return(0,c.Z)(this,t),s=a.call(this,e),(0,h.Z)((0,m.Z)(s),"ethEnabled",(0,o.Z)(r().mark((function e(){var a,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=9;break}return e.next=3,ethereum.request({method:"eth_requestAccounts"});case 3:return a=e.sent,t=a[0],s.setState({account:t}),window.web3=new k(window.ethereum),s.web3=window.web3,e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})))),s.state={account:"",balanceInBNB:0,BNBinUSD:0,walletAddress:"",contract:null,sale_contract:null,sale_address:null,totalSupply:0,images:[],owners:[],imageData_name:[],imageData_url:[],imageData_price:[],new_price:null,token_sale_contract:null,token_price:0,approved:[]},s}return(0,d.Z)(t,[{key:"render",value:function(){var e=window.location.pathname.split("/"),a=e[e.length-1];alert(a);return this.state.account?("flex","none"):("none","block"),_("div",{className:"overflow-hidden"},_("div",{className:"bg-dark py-10"},_("div",{className:"container"},_("div",{className:"text-center\r d-flex\r justify-content-between\r space-x-10\r align-items-center"},_("div",{className:"space-x-10 d-flex align-items-center"},_("lottie-player",{src:"https://assets6.lottiefiles.com/private_files/lf30_kqshlcsx.json",background:"404.html",speed:"2",style:{width:"50px",height:"50px"},loop:!0,autoplay:!0}),_("p",{className:"color_white"},"Dark mode is now",_("span",{style:{color:"rgb(0, 255, 170)"}},"Available "))),_("div",{className:"mode_switcher space-x-10"},_("a",{href:"#",className:"light d-flex align-items-center is_active"},_("i",{className:"ri-sun-fill"})," Light"),_("a",{href:"#",className:"dark d-flex align-items-center"},_("i",{className:"ri-moon-fill"})," Dark"))))),_("header",{className:"header__1 js-header"},_("div",{className:"container"},_("div",{className:"wrapper js-header-wrapper space-x-10"},_("div",{className:"header__logo"},_("a",{href:"index.html"},_("img",{className:"header__logo",id:"logo_js",src:"assets/img/logos/Logo.svg",alt:"logo"}))),_("div",{className:"header__menu"},_("ul",{className:"d-flex space-x-20"},_("li",{className:"has_popup"},_("a",{className:"color_black",href:"#"},"Homes ",_("i",{className:"ri-more-2-fill"})),_("ul",{className:"menu__popup space-y-20"},_("li",null,_("a",{href:"Home1.html"},_("i",{className:"ri-home-smile-2-line"}),"Home page 1")),_("li",null,_("a",{href:"Home2.html"},_("i",{className:"ri-home-2-line"})," Home page 2")),_("li",null,_("a",{href:"Home3.html"},_("i",{className:"ri-home-5-line"})," Home page 3")))),_("li",null," ",_("a",{className:"color_black",href:"Marketplace.html"}," Marketplace")," "),_("li",null," ",_("a",{className:"color_black",href:"Collections.html"}," Collections")," "),_("li",null," ",_("a",{className:"color_black",href:"Profile.html"}," Profile")," "),_("li",null," ",_("a",{className:"color_black",href:"Creators.html"}," Creators")," "),_("li",null," ",_("a",{className:"color_black",href:"kit.html"}," Ui Kit ")," "),_("li",{className:"has_popup2"},_("a",{className:"color_black is_new",href:"#"},"Pages ",_("i",{className:"ri-more-2-fill"})),_("ul",{className:"menu__popup2 space-y-20"},_("div",{className:"row sub_menu_row"},_("div",{className:"col-lg-6 space-y-10"},_("li",null,_("a",{href:"Activity.html"},_("i",{className:"ri-line-chart-line"}),"Activity")),_("li",null,_("a",{className:"is_new",href:"edit_profile.html"},_("i",{className:"ri-edit-line"}),"Edit Profile")),_("li",null,_("a",{href:"Item-details.html"},_("i",{className:"ri-gallery-line"}),"Item details")),_("li",null,_("a",{className:"is_new",href:"Live_Auctions.html"},_("i",{className:"ri-auction-line"}),"Live Auctions")),_("li",null,_("a",{href:"Upcoming_projects.html"},_("i",{className:"ri-upload-line"}),"Upcoming projects")),_("li",null,_("a",{className:"is_new",href:"ranking.html"},_("i",{className:"ri-funds-line"}),"Ranking")),_("li",null,_("a",{className:"is_new",href:"newsletter.html"},_("i",{className:"ri-mail-open-line"}),"Newsletter")),_("li",null,_("a",{href:"forum.html"},_("i",{className:"ri-discuss-line"}),"Forum & community")),_("li",null,_("a",{href:"post_details.html"},_("i",{className:"ri-chat-check-line"}),"Forum details")),_("li",null,_("a",{href:"no_results.html"},_("i",{className:"ri-file-search-line"}),"No Result")),_("li",null,_("a",{className:"is_new",href:"Contact.html"},_("i",{className:"ri-customer-service-2-line"}),"Contact"))),_("div",{className:"col-lg-6 space-y-10"},_("li",null,_("a",{href:"Upload-type.html"},_("i",{className:"ri-upload-line"}),"Upload Types")),_("li",null,_("a",{href:"Connect-wallet.html"},_("i",{className:"ri-wallet-3-line"}),"Connect wallet")),_("li",null,_("a",{href:"questions.html"},_("i",{className:"ri-question-line"}),"FAQ")),_("li",null,_("a",{className:"is_new",href:"Submit_request.html"},_("i",{className:"ri-share-forward-line"}),"Submit request")),_("li",null,_("a",{className:"is_new",href:"Submit_request.html"},_("i",{className:"ri-message-3-line"}),"Request chat")),_("li",null,_("a",{className:"is_new",href:"blog.html"},_("i",{className:"ri-layout-line"}),"Blog")),_("li",null,_("a",{className:"is_new",href:"article.html"},_("i",{className:"ri-newspaper-line"}),"Article")),_("li",null,_("a",{href:"register.html"},_("i",{className:"ri-lock-line"}),"Register")),_("li",null,_("a",{href:"login.html"},_("i",{className:"ri-shield-user-line"}),"Login")),_("li",null,_("a",{href:"Privacy.html"},_("i",{className:"ri-file-text-line"}),"Privacy Policy")),_("li",null,_("a",{c:!0,href:"404-2.html"},_("i",{className:"ri-file-damage-line"}),"404")))),"      ")))),_("div",{className:"header__search"},_("input",{type:"text",placeholder:"Search"}),_("button",{className:"header__result"},_("i",{className:"ri-search-line"}))),_("div",{className:"d-flex align-items-center space-x-20"},_("div",{className:"header__notifications"},_("div",{className:"js-notifications-icon"},_("i",{className:"ri-notification-3-line"})),_("div",{className:"notifications_popup space-y-20"},_("div",{className:"d-flex justify-content-between"},_("h5",null," Notifications"),_("a",{href:"Activity.html",className:"badge color_white"},"View all")),_("div",{className:"item\r space-x-20\r d-flex\r justify-content-between\r align-items-center"},_("img",{className:"thumb",src:"assets/img/notifications/1.png",alt:"..."}),_("div",{className:"details"},_("a",{href:"404-3.html"}," ",_("h6",null,"Money revieved")," "),_("p",null,"0.6 ETH")),_("span",{className:"circle"})))),_("div",{className:"header__avatar"},_("div",{className:"price"},_("span",null,"2.45 ",_("strong",null,"ETH")," ")),_("img",{className:"avatar",src:"assets/img/avatars/avatar_2.png",alt:"avatar"}),_("div",{className:"avatar_popup space-y-20"},_("div",{className:"d-flex align-items-center justify-content-between"},_("span",null," 13b9ebda035r178... "),_("a",{href:"index.html",className:"ml-2"},_("i",{className:"ri-file-copy-line"}))),_("div",{className:"d-flex align-items-center space-x-10"},_("img",{className:"coin",src:"assets/img/logos/coin.svg",alt:"/"}),_("div",{className:"info"},_("p",{className:"text-sm font-book text-gray-400"},"Balance"),_("p",{className:"w-full text-sm font-bold text-green-500"},"16.58 ETH"))),_("div",{className:"hr"}),_("div",{className:"links space-y-10"},_("a",{href:"#"},_("i",{className:"ri-landscape-line"})," ",_("span",null," My items")),_("a",{href:"edit_profile.html"},_("i",{className:"ri-pencil-line"})," ",_("span",null," Edit Profile")),_("a",{href:"#"},_("i",{className:"ri-logout-circle-line"})," ",_("span",null," Logout"))))),_("div",{className:"header__btns"},_("a",{className:"btn btn-primary btn-sm",href:"Upload-type.html"},"Create")),_("div",{className:"header__burger js-header-burger"})),_("div",{className:"header__mobile js-header-mobile"},_("div",{className:"header__mobile__menu space-y-40"},_("ul",{className:"d-flex space-y-20"},_("li",null," ",_("a",{className:"color_black",href:"Marketplace.html"}," Marketplace")," "),_("li",null," ",_("a",{className:"color_black",href:"Collections.html"}," Collections")," "),_("li",null," ",_("a",{className:"color_black",href:"Profile.html"}," Profile")," "),_("li",null," ",_("a",{className:"color_black",href:"Creators.html"}," Creators")," ")),_("div",{className:"space-y-20"},_("div",{className:"header__search in_mobile w-full"},_("input",{type:"text",placeholder:"Search"}),_("button",{className:"header__result"},_("i",{className:"ri-search-line"}))),_("a",{className:"btn btn-grad btn-sm",href:"Connect-wallet.html"},"Connect wallet"))))))),_("div",{className:"modal fade popup",id:"popup_bid_success",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",{className:"text-center"},"Your Bidding Successfuly Added"),_("p",{className:"text-center"},"your bid ",_("span",{className:"color_text txt\r _bold"},"(16ETH) ")," has been listing to our database"),_("a",{href:"#",className:"btn btn-dark w-full"}," Watch the listings"))))),_("div",{className:"modal fade popup",id:"popup_bid",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",null,"Place a Bid"),_("p",null,"You must bid at least ",_("span",{className:"color_black"},"15 ETH")),_("input",{type:"text",className:"form-control",placeholder:"00.00 ETH"}),_("p",null,"Enter quantity. ",_("span",{className:"color_green"},"5 available")),_("input",{type:"text",className:"form-control",value:"1"}),_("div",{className:"hr"}),_("div",{className:"d-flex justify-content-between"},_("p",null," You must bid at least:"),_("p",{className:"text-right color_black txt _bold"}," 67,000 ETH ")),_("div",{className:"d-flex justify-content-between"},_("p",null," service free:"),_("p",{className:"text-right color_black txt _bold"}," 0,901 ETH ")),_("div",{className:"d-flex justify-content-between"},_("p",null," Total bid amount:"),_("p",{className:"text-right color_black txt _bold"}," 56,031 ETH ")),_("a",{href:"#",className:"btn btn-primary w-full","data-toggle":"modal","data-target":"#popup_bid_success","data-dismiss":"modal","aria-label":"Close"}," Place a bid"))))),_("div",{className:"modal fade popup",id:"popup_bid_success",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",{className:"text-center"},"Your Bidding Successfuly Added"),_("p",{className:"text-center"},"your bid ",_("span",{className:"color_text txt\r _bold"},"(16ETH) ")," has been listing to our database"),_("a",{href:"#",className:"btn btn-dark w-full"}," Watch the listings"))))),_("div",{className:"modal fade popup",id:"popup_buy",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",null,"Checkout"),_("p",null,"You are about to purchase a ",_("span",{className:"color_black"},"SHADOW #7")," from",_("span",{className:"color_black"},"Lona")),_("div",{className:"space-y-10"},_("p",null,"You pay"),_("input",{type:"text",className:"form-control",placeholder:"00.00 ETH"})),_("div",{className:"space-y-10"},_("p",null,"Enter quantity. ",_("span",{className:"color_green"},"5 available")),_("input",{type:"text",className:"form-control",value:"1"})),_("div",{className:"hr"}),_("div",{className:"d-flex justify-content-between"},_("p",null," You must bid at least:"),_("p",{className:"text-right color_black txt _bold"}," 67,000 ETH ")),_("div",{className:"d-flex justify-content-between"},_("p",null," service free:"),_("p",{className:"text-right color_black txt _bold"}," 0,901 ETH ")),_("div",{className:"d-flex justify-content-between"},_("p",null," Total bid amount:"),_("p",{className:"text-right color_black txt _bold"}," 56,031 ETH ")),_("a",{href:"https://pay.sendwyre.com/",className:"btn btn-primary\r w-full","aria-label":"Close"},"Add funds"))))),_("div",{className:"modal fade popup",id:"popup_bid_success",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",{className:"text-center"},"Your Bidding Successfuly Added"),_("p",{className:"text-center"},"your bid ",_("span",{className:"color_text txt\r _bold"},"(16ETH) ")," has been listing to our database"),_("a",{href:"#",className:"btn btn-dark w-full"}," Watch the listings"))))),_("div",{className:"modal fade popup",id:"popup_report",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-40"},_("h3",null,"Report this item"),_("div",{className:"hr"}),_("div",{className:"form-group space-y-10"},_("span",{className:"variationInput"},"reason:"),_("select",{className:"form-select custom-select","aria-label":"Default select example"},_("option",null," Select a reason"),_("option",null,"Purchase"),_("option",null,"Support"),_("option",null,"Technique"),_("option",null,"Service Request"))),_("div",{className:"form-group space-y-10"},_("span",{className:"variationInput"},"Additional comments:"),_("textarea",{name:"...",cols:"30",rows:"10",placeholder:"Explain why you are concerned about it."})),_("a",{href:"#",className:"btn btn-dark"}," Report"))))),_("div",{className:"container"},_("a",{href:"index.html",className:"btn btn-white btn-sm my-40"},"Back to home"),_("div",{className:"item_details"},_("div",{className:"row sm:space-y-20"},_("div",{className:"col-lg-6"},_("img",{className:"item_img",src:"assets/img/items/item_2.png",alt:""})),_("div",{className:"col-lg-6"},_("div",{className:"space-y-20"},_("h3",null,"Creative girl illustration"),_("div",{className:"d-flex justify-content-between"},_("div",{className:"space-x-10 d-flex align-items-center"},_("p",null,"1 of 1"),_("a",{href:"#",className:"likes space-x-3"},_("i",{className:"ri-heart-3-fill"}),_("span",{className:"txt_sm"},"2.1k"))),_("div",{className:"space-x-10 d-flex align-items-center"},_("div",{className:"share"},_("div",{className:"icon"},_("a",{href:"#"}," ",_("i",{className:"ri-share-line"}))),_("div",{className:"dropdown__popup"},_("ul",{className:"space-y-10"},_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-facebook-line"}))),_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-messenger-line"}))),_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-whatsapp-line"}))),_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-youtube-line"})))))),_("div",{className:"more"},_("div",{className:"icon"},_("a",{href:"#"}," ",_("i",{className:"ri-more-fill"}))),_("div",{className:"dropdown__popup"},_("ul",{className:"space-y-10"},_("li",null,_("a",{href:"#",className:"space-x-10\r d-flex","data-toggle":"modal","data-target":"#popup_report"},_("i",{className:"ri-flag-line"}),_("span",null," Report")))))))),_("div",{className:"dropdown"},_("button",{className:"btn btn-white btn-sm\r dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"View proof of authenticity"),_("div",{className:"dropdown-menu"},_("a",{className:"dropdown-item",href:"https://ipfs.io/",target:"_blank"},_("span",null,_("img",{src:"assets/img/icons/ipfs.svg",width:"20",alt:""}),"View on IPFS"),_("i",{className:"ri-external-link-line color_brand"})),_("a",{className:"dropdown-item",href:"https://etherscan.io/",target:"_blank"},_("span",null,_("img",{src:"assets/img/icons/ether.png",width:"20",alt:""}),"View on Etherscan"),_("i",{className:"ri-external-link-line color_brand"})))),_("div",{className:"box"},_("div",{className:"space-y-20"},_("div",{className:"d-flex justify-content-between\r mb-30_reset"},_("ul",{className:"nav nav-tabs d-flex space-x-10 mb-30",role:"tablist"},_("li",{className:"nav-item"},_("a",{className:"btn btn-white btn-sm active","data-toggle":"tab",href:"#tabs-1",role:"tab"},"Details")),_("li",{className:"nav-item"},_("a",{className:"btn btn-white btn-sm","data-toggle":"tab",href:"#tabs-2",role:"tab"},"Bids")),_("li",{className:"nav-item"},_("a",{className:"btn btn-white btn-sm","data-toggle":"tab",href:"#tabs-3",role:"tab"},"History"))),_("div",{className:"dropdown d-none d-sm-block"},_("button",{className:"btn btn-white btn-sm\r dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Recent Active"),_("div",{className:"dropdown-menu"},_("a",{className:"dropdown-item",href:"#"},"Action"),_("a",{className:"dropdown-item",href:"#"},"Another action"),_("a",{className:"dropdown-item",href:"#"},"Something else here")))),_("div",{className:"hr"}),_("div",{className:"tab-content"},_("div",{className:"tab-pane active",id:"tabs-1",role:"tabpanel"},_("p",null,"Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Rarible (with crypto payment)! What do you think?")),_("div",{className:"tab-pane",id:"tabs-2",role:"tabpanel"},_("p",null,"No active bids yet. Be the first to make a bid!")),_("div",{className:"tab-pane space-y-20",id:"tabs-3",role:"tabpanel"},_("div",{className:"creator_item creator_card\r space-x-10"},_("div",{className:"avatars space-x-10"},_("div",{className:"media"},_("div",{className:"badge"},_("img",{src:"assets/img/icons/Badge.svg",alt:""})),_("a",{href:"Profile.html"},_("img",{src:"assets/img/avatars/avatar_1.png",alt:"Avatar",className:"avatar\r avatar-md"}))),_("div",null,_("p",{className:"color_black"},"Bid accepted ",_("span",{className:"color_brand"},"1 ETH")," by ",_("a",{className:"color_black txt\r _bold",href:"Profile.html"},"ayoub")),_("span",{className:"date color_text"},"28/06/2021, 12:08")))),_("div",{className:"creator_item creator_card\r space-x-10"},_("div",{className:"avatars space-x-10"},_("div",{className:"media"},_("div",{className:"badge"},_("img",{src:"assets/img/icons/Badge.svg",alt:""})),_("a",{href:"Profile.html"},_("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar\r avatar-md"}))),_("div",null,_("p",{className:"color_black"},"Bid accepted ",_("span",{className:"color_brand"},"3 ETH")," by ",_("a",{className:"color_black txt\r _bold",href:"Profile.html"},"monir")),_("span",{className:"date color_text"},"22/05/2021, 12:08")))))))),_("div",{className:"numbers"},_("div",{className:"row"},_("div",{className:"col-lg-6"},_("div",{className:"space-y-5"},_("p",{className:"color_text"},"Minimum bid"),_("h4",null,"2.4000 ",_("span",{className:"txt_sm color_text"},"ETH/ $4769.88")))),_("div",{className:"col-lg-6"},_("div",{className:"space-y-5"},_("p",{className:"color_text"},"countdown"),_("div",{className:"d-flex countdown_item\r align-items-center"},_("div",{className:"item"},_("div",{className:"number hours"},"22",_("span",null))),_("div",{className:"dots"},":"),_("div",{className:"item"},_("div",{className:"number minutes"},"04",_("span",null))),_("div",{className:"dots"},":"),_("div",{className:"item"},_("div",{className:"number seconds"},"35",_("span",null)))))))),_("div",{className:"hr2"}),_("div",{className:"creators"},_("div",{className:"row"},_("div",{className:"col-lg-6"},_("div",{className:"avatars space-x-5"},_("div",{className:"media"},_("a",{href:"Profile.html"},_("img",{src:"assets/img/avatars/avatar_3.png",alt:"Avatar",className:"avatar\r avatar-sm"}))),_("div",null,_("a",{href:"Profile.html"},_("p",{className:"avatars_name color_black"},"@ayoub_fennouni / fouzi..."))))),_("div",{className:"col-lg-6"},_("div",{className:"avatars space-x-5"},_("div",{className:"media"},_("div",{className:"badge"},_("img",{className:"badge",src:"assets/img/icons/Badge.svg",alt:""})),_("a",{href:"Profile.html"},_("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar\r avatar-sm"}))),_("div",null,_("a",{href:"Profile.html"},_("p",{className:"avatars_name color_black"},"@makinzi_jamy..."))))))),_("div",{className:"d-flex space-x-20"},_("a",{href:"#",className:"btn btn-primary btn-lg","data-toggle":"modal","data-target":"#popup_buy"}," Buy Now"),_("a",{href:"#",className:"btn btn-grad btn-lg","data-toggle":"modal","data-target":"#popup_bid"}," Place bid"))))))),_("footer",{className:"footer__1"},_("div",{className:"container"},_("div",{className:"row"},_("div",{className:"col-lg-6 space-y-20"},_("div",{className:"footer__logo"},_("a",{href:"index.html"},_("img",{src:"assets/img/logos/Logo.svg",alt:"logo",id:"logo_js_f"}))),_("p",{className:"footer__text"},"raroin is a shared liquidity NFT market smart contract"),_("div",null,_("ul",{className:"footer__social space-x-10 mb-40"},_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-facebook-line"})," ")),_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-messenger-line"})," ")),_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-whatsapp-line"})," ")),_("li",null," ",_("a",{href:"#"}," ",_("i",{className:"ri-youtube-line"})," "))))),_("div",{className:"col-lg-2 col-6"},_("h6",{className:"footer__title"},"Raroin"),_("ul",{className:"footer__list"},_("li",null," ",_("a",{href:"Home1.html"}," Home1 ")),_("li",null," ",_("a",{href:"Home2.html"}," Home2")," "),_("li",null," ",_("a",{href:"Home3.html"}," Home3 ")," "),_("li",null," ",_("a",{href:"Marketplace.html"}," Marketplace")))),_("div",{className:"col-lg-2 col-6"},_("h6",{className:"footer__title"},"Assets"),_("ul",{className:"footer__list"},_("li",null," ",_("a",{href:"Profile.html"}," Profile ")),_("li",null," ",_("a",{href:"Creators.html"}," Creators ")),_("li",null," ",_("a",{href:"Collections.html"}," Colletctions ")),_("li",null," ",_("a",{href:"Activity.html"}," Activity")," "))),_("div",{className:"col-lg-2 col-6"},_("h6",{className:"footer__title"},"Company"),_("ul",{className:"footer__list"},_("li",null," ",_("a",{href:"Upload-type.html"}," Upload Types ")),_("li",null," ",_("a",{href:"Upload.html"}," Upload ")," "),_("li",null," ",_("a",{href:"Connect-wallet.html"}," Connect wallet")," "),_("li",null," ",_("a",{href:"Item-details.html"}," Item details "))))),_("p",{className:"copyright text-center"},"Copyright \xa9 2021. Created with love by creabik."))),"  ")}}]),(0,d.Z)(t,[{key:"componentWillMount",value:function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadBlockchainData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadBlockchainData",value:function(){var e=(0,o.Z)(r().mark((function e(){var a,t,s,n,i,o,c,m,d,p,u,y,h,N,v,_,w,M,A;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:return this.web3=e.sent,e.next=6,this.web3.eth.getAccounts();case 6:return a=e.sent,this.setState({account:a[0]}),e.next=10,T.eth.net.getId();case 10:this.networkId=e.sent,e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),t=new k.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"),this.web3=new k(t),this.networkId=97;case 18:if(!this.state.account){e.next=26;break}return e.next=21,this.web3.eth.getBalance(this.state.account);case 21:return s=e.sent,e.next=24,T.utils.fromWei(new C(s),"ether");case 24:n=e.sent,this.setState({balanceInBNB:parseFloat(n).toFixed(2),walletAddress:this.state.account.substring(0,6)+"..."+this.state.account.substring(38)});case 26:if(!(i=b.QW[this.networkId])){e.next=76;break}return o=b.Mt,c=i.address,m=new this.web3.eth.Contract(o,c),this.setState({contract:m}),e.next=34,m.methods.totalSupply().call();case 34:d=e.sent,this.setState({totalSupply:d}),p=1;case 37:if(!(p<=d)){e.next=45;break}return e.next=40,m.methods.images(p-1).call();case 40:u=e.sent,this.setState({images:[].concat((0,l.Z)(this.state.images),[u])});case 42:p++,e.next=37;break;case 45:p=1;case 46:if(!(p<=d)){e.next=54;break}return e.next=49,m.methods.ownerOf(p-1).call();case 49:y=e.sent,this.setState({owners:[].concat((0,l.Z)(this.state.owners),[y])});case 51:p++,e.next=46;break;case 54:p=1;case 55:if(!(p<=d)){e.next=74;break}return e.next=58,m.methods.imageData(p-1).call();case 58:return h=e.sent,e.t1=this,e.t2=[].concat((0,l.Z)(this.state.imageData_name),[h.name]),e.t3=[],e.t4=(0,l.Z)(this.state.imageData_price),e.next=65,T.utils.fromWei(h.price,"Ether");case 65:e.t5=e.sent,e.t6=[e.t5],e.t7=e.t3.concat.call(e.t3,e.t4,e.t6),e.t8=[].concat((0,l.Z)(this.state.imageData_url),[h.url]),e.t9={imageData_name:e.t2,imageData_price:e.t7,imageData_url:e.t8},e.t1.setState.call(e.t1,e.t9);case 71:p++,e.next=55;break;case 74:e.next=77;break;case 76:window.alert("Smart contract not deployed to detected network.");case 77:if(!(N=f.QW[this.networkId])){e.next=94;break}v=f.Mt,_=N.address,w=new this.web3.eth.Contract(v,_),this.setState({sale_contract:w,sale_address:_}),p=1;case 84:if(!(p<=this.state.totalSupply)){e.next=92;break}return e.next=87,this.state.contract.methods.isApprovedOrOwner(this.state.sale_contract._address,p-1).call();case 87:M=e.sent,this.setState({approved:[].concat((0,l.Z)(this.state.approved),[M])});case 89:p++,e.next=84;break;case 92:e.next=95;break;case 94:window.alert("Smart contract not deployed to detected network.");case 95:return e.prev=95,e.next=98,x.simple.price({ids:["binancecoin"],vs_currencies:["usd"]});case 98:A=e.sent,this.setState({BNBinUSD:Math.round(A.data.binancecoin.usd)}),e.next=104;break;case 102:e.prev=102,e.t10=e.catch(95);case 104:case"end":return e.stop()}}),e,this,[[0,13],[95,102]])})));return function(){return e.apply(this,arguments)}}()}]),t}(s.Component),A=n().createElement;function I(){return A("div",null)}var S=n().createElement;function E(e){var a=e.children;return S(n().Fragment,null,S(M,null),a,S(I,null),S("div",{className:"nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i"},S("div",{className:"ovm-line"})),S("div",{className:"preloader preloader-alt no-split"},S("span",{className:"spinner spinner-alt"},S("img",{className:"spinner-brand",src:"images/logo.png",alt:""}))),S("div",{className:"alert_list"}),S("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},S("div",{className:"modal-dialog modal-dialog-centered",role:"document"},S("div",{className:"modal-content footer-color"},S("div",{className:"modal-header"},S("h5",{className:"modal-title footer-color",id:"exampleModalLongTitle"},"Select wallet:"),S("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},S("span",{"aria-hidden":"true",className:"footer-color"},"\xd7"))),S("div",{className:"modal-body footer-color"},S("button",{id:"btn_metamask",className:"btn btn-md btn-round btn-thin btn-primary btn-auto no-change wallet-btn","data-dismiss":"modal"},S("span",null,"Connect to Metamask")),S("button",{id:"btn_binance",className:"btn btn-md btn-round btn-thin btn-primary btn-auto no-change wallet-btn","data-dismiss":"modal",style:{marginTop:"20px"}},S("span",null,"Connect to Binance Smart Chain")))))))}var H=n().createElement;var B=function(e){var a=e.Component,t=e.pageProps;return H(E,null,H(a,t))}},1780:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1979)}])},4453:function(){},2361:function(){},4616:function(){}},function(e){var a=function(a){return e(e.s=a)};e.O(0,[774,543,351,433,935],(function(){return a(1780),a(2441)}));var t=e.O();_N_E=t}]);