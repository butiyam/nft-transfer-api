(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{19134:function(e,t,a){"use strict";a.d(t,{Z:function(){return D}});var n=a(67294),s=a.n(n),i=a(809),r=a.n(i),l=a(92447),o=a(74047),c=a(52700),p=a(4706),u=a(8127),d=a(44102),m=a(20775),y=a(26265),f=a(37918),h=a.n(f),b=function(){return new Promise((function(e,t){window.addEventListener("load",(0,l.Z)(r().mark((function a(){var n,s,i,l;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.ethereum){a.next=13;break}return n=new(h())(window.ethereum),a.prev=2,a.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:e(n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),t(a.t0);case 11:a.next=14;break;case 13:window.web3?(s=window.web3,console.log("Injected web3 detected."),e(s)):(i=new(h().providers.HttpProvider)("https://data-seed-prebsc-1-s1.binance.org:8545"),l=new(h())(i),console.log("No web3 instance injected, using Local web3."),e(l));case 14:case"end":return a.stop()}}),a,null,[[2,8]])}))))}))},N=a(85241),v=a.n(N),g=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"imageData","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"url","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"images","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"listingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approveNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"approveForSale","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"approveForAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"nftSold","outputs":[],"stateMutability":"nonpayable","type":"function"}],"QW":{"97":{"events":{},"links":{},"address":"0x1aD95f794400e03DC28E18D2f81bbac16F35Ad13","transactionHash":"0x71f3326208fc3ac3ba25b4b9556197e9c72fa4daa985f34e5ab8f699df159c3f"}}}'),w=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract ImageContract","name":"_imageContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_price","type":"uint256"}],"name":"BoughtNFT","type":"event"},{"inputs":[],"name":"imageContract","outputs":[{"internalType":"contract ImageContract","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyImage","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"bid","outputs":[],"stateMutability":"payable","type":"function","payable":true}],"QW":{"97":{"events":{},"links":{},"address":"0xEfe51f10daa8F8BD48bc76c5dfEE524849377D80","transactionHash":"0x5c23fed1d3de406424287c55b8dde897b67fee58fd90929e9b055f16f1d0d1bd"}}}'),_=s().createElement;function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,m.Z)(e);if(t){var s=(0,m.Z)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return(0,d.Z)(this,a)}}var T=a(98945),k=a(37918),C=new k,I=C.utils.BN,M=new T,P=v()("https://ipfs.infura.io:5001/api/v0"),A=function(e){(0,u.Z)(a,e);var t=x(a);function a(e){var n;return(0,o.Z)(this,a),n=t.call(this,e),(0,y.Z)((0,p.Z)(n),"state",{loaded:!1,balanceInBNB:0,walletAddress:null,nftName:"",nftDescription:"",nftPrice:0,nftURL:"assets/img/items/item_4.png",ethToParticipate:.1,BNBPerEntery:0,buttonText:"Connect",buybuttonText:"Unlock Wallet",winingAmount:0,marketingAmount:0,buyerName:"",tabView:"none",createView:"none",partView:"block",winnerName:"",winnerEnteries:0,winnerPrize:0,noOfEnteries:1,myEnteries:0,drawButton:"none",roundNo:1,roundEnteries:0,roundWinner:"",roundPrize:"",roundDate:"",tokenSold:0,totalPrizePot:0,BNBpriceinUSD:0,totalPrizeDistributed:0,lotteriesLength:0,searchroundNo:1,isOwner:!1,ownerView:"none",userView:"block",showWhitelist:"none",titleHeading:""}),(0,y.Z)((0,p.Z)(n),"onChange",function(){var e=(0,l.Z)(r().mark((function e(t){var a,s,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],e.prev=1,e.next=4,P.add(a,{progress:function(e){return console.log("received: ".concat(e))}});case 4:return s=e.sent,i="https://ipfs.infura.io/ipfs/".concat(s.path),console.log(i),e.next=9,n.setState({nftURL:i});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error uploading file:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()),(0,y.Z)((0,p.Z)(n),"createNFT",(0,l.Z)(r().mark((function e(){var t,a,s,i,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.currentAccount?(t=n.state.nftName,a=n.state.nftDescription,s=n.state.nftURL,1e18,i=n.state.nftPrice,l=parseInt(1e18*i).toString(),n.ImageContract.methods.mint(t,a,s,l).send({from:n.currentAccount}).once("receipt",(function(e){console.log("nft created")}))):n.ethEnabled();case 1:case"end":return e.stop()}}),e)})))),(0,y.Z)((0,p.Z)(n),"ethEnabled",(0,l.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=8;break}return e.next=3,ethereum.request({method:"eth_requestAccounts"});case 3:return t=e.sent,n.currentAccount=t[0],window.web3=new k(window.ethereum),n.web3=window.web3,e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})))),n.state={render:!1},n}return(0,c.Z)(a,[{key:"componentDidMount",value:function(){var e=(0,l.Z)(r().mark((function e(){var t,a,n,s,i,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.title="Create NFT | NFT Marketplace","undefined"!==typeof window.ethereum){e.next=8;break}t=new k.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"),this.web3=new k(t),this.networkId=97,e.next=30;break;case 8:return e.prev=8,e.next=11,b();case 11:return this.web3=e.sent,e.next=14,this.web3.eth.net.getId();case 14:return this.networkId=e.sent,e.next=17,this.web3.eth.getAccounts();case 17:this.accounts=e.sent,this.currentAccount=this.accounts[0],e.next=26;break;case 21:e.prev=21,e.t0=e.catch(8),a=new k.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"),this.web3=new k(a),this.networkId=97;case 26:return e.next=28,this.web3.eth.net.getId();case 28:this.getId=e.sent,97!=this.networkId&&(n=new k.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"),this.web3=new k(n),this.networkId=97);case 30:return this.ImageContract=new this.web3.eth.Contract(g.Mt,g.QW[this.networkId].address),this.ImageSaleContract=new this.web3.eth.Contract(w.Mt,w.QW[this.networkId].address),e.next=34,this.ImageContract.methods.totalSupply().call();case 34:return e.sent,e.next=37,M.simple.price({ids:["binancecoin"],vs_currencies:["usd"]});case 37:if(s=e.sent,this.setState({BNBpriceinUSD:Math.round(s.data.binancecoin.usd)}),!this.currentAccount){e.next=47;break}return e.next=42,this.web3.eth.getBalance(this.currentAccount);case 42:return i=e.sent,e.next=45,C.utils.fromWei(new I(i),"ether");case 45:l=e.sent,this.setState({balanceInBNB:parseFloat(l).toFixed(2),walletAddress:this.currentAccount.substring(0,6)+"..."+this.currentAccount.substring(38)});case 47:case"end":return e.stop()}}),e,this,[[8,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t="none",a="block";return this.currentAccount?(t="flex",a="none"):(t="none",a="block"),_(s().Fragment,null,_("div",{className:"overflow-hidden"},_("div",{className:"bg-dark py-10"},_("div",{className:"container"},_("div",{className:"text-center\r d-flex\r justify-content-between\r space-x-10\r align-items-center"},_("div",{className:"space-x-10 d-flex align-items-center"},_("lottie-player",{src:"https://assets6.lottiefiles.com/private_files/lf30_kqshlcsx.json",background:"404.html",speed:"2",style:{width:"50px",height:"50px"},loop:!0,autoplay:!0}),_("p",{className:"color_white"},"Dark mode is now",_("span",{style:{color:"rgb(0, 255, 170)"}},"Available "))),_("div",{className:"mode_switcher space-x-10"},_("a",{href:"#",className:"light d-flex align-items-center is_active"},_("i",{className:"ri-sun-fill"})," Light"),_("a",{href:"#",className:"dark d-flex align-items-center"},_("i",{className:"ri-moon-fill"})," Dark"))))),_("header",{className:"header__1 js-header",id:"header"},_("div",{className:"container"},_("div",{className:"wrapper js-header-wrapper"},_("div",{className:"header__logo"},_("a",{href:"index.html"},_("img",{className:"header__logo",id:"logo_js",src:"assets/img/logos/Logo.svg",alt:"logo"}))),_("div",{className:"header__menu"},_("ul",{className:"d-flex space-x-20"},_("li",null,_("a",{className:"color_black",href:"Explore.html"}," Explore")),_("li",null,_("a",{className:"color_black",href:"Marketplace.html"}," Marketplace")),_("li",{style:{display:t}},_("a",{className:"color_black",href:"Collections.html"}," My Collections")),_("li",{style:{display:t}},_("a",{className:"color_black",href:"Profile.html"}," Profile")),_("li",null,_("a",{className:"color_black",href:"Creators.html"}," Creators")))),_("div",{className:"header__search"},_("input",{type:"text",placeholder:"Search"}),_("button",{className:"header__result"},_("i",{className:"ri-search-line"}))),_("div",{style:{display:t},className:"header__avatar"},_("div",{className:"price"},_("span",null,this.state.balanceInBNB," ",_("strong",null,"BNB")," ")),_("img",{className:"avatar",src:"assets/img/avatars/avatar_2.png",alt:"avatar"}),_("div",{className:"avatar_popup space-y-20"},_("div",{className:"d-flex align-items-center justify-content-between"},_("span",null,this.state.walletAddress),_("a",{href:"/",className:"ml-2"},_("i",{className:"ri-file-copy-line"}))),_("div",{className:"d-flex align-items-center space-x-10"},_("img",{className:"coin",src:"assets/img/logos/coin.svg",alt:"/"}),_("div",{className:"info"},_("p",{className:"w-full text-sm font-bold text-green-500"},this.state.balanceInBNB," BNB"))),_("div",{className:"hr"}),_("div",{className:"links space-y-10"},_("a",{href:"Collections.html"},_("i",{className:"ri-landscape-line"})," ",_("span",null," My items")),_("a",{href:"edit_profile.html"},_("i",{className:"ri-pencil-line"})," ",_("span",null," Edit Profile"))))),_("div",{style:{display:t},className:"header__btns"},_("a",{className:"btn btn-primary btn-sm",href:"create-nft.html"},"Create")),_("div",{style:{display:a},className:"header__btns"},_("a",{className:"btn btn-grad btn-sm",href:"#",onClick:this.ethEnabled},_("i",{className:"ri-wallet-3-line"}),"Connect wallet"),_("a",{href:"#",id:"connectbtn"},_("img",{width:"45",src:"assets/img/icons/metamask.svg",alt:""}))),_("div",{className:"header__burger js-header-burger"}),_("div",{className:"header__mobile js-header-mobile"},_("div",{className:"header__mobile__menu space-y-40"},_("ul",{className:"d-flex space-y-20"},_("li",null," ",_("a",{className:"color_black",href:"Explore.html"}," Explore")," "),_("li",null," ",_("a",{className:"color_black",href:"Marketplace.html"}," Marketplace")," "),_("li",{style:{display:t}}," ",_("a",{className:"color_black",href:"Collections.html"}," Collections")," "),_("li",{style:{display:t}}," ",_("a",{className:"color_black",href:"Profile.html"}," Profile")," "),_("li",null," ",_("a",{className:"color_black",href:"Creators.html"}," Creators")," ")),_("div",{style:{display:a},className:"space-y-20"},_("a",{className:"btn btn-grad btn-sm",href:"#",onClick:this.ethEnabled},_("i",{className:"ri-wallet-3-line"}),"Connect wallet")),_("div",{style:{display:t},className:"space-y-20"},_("a",{className:"btn btn-grad btn-sm",href:"create-nft.html",onClick:this.ethEnabled},"Create"))))))),_("div",{className:"hero__upload"},_("div",{className:"container"},_("div",{className:"space-y-20"},_("a",{href:"404-8.html",className:"btn btn-white btn-sm\r switch"},"Switch to Multiple"),_("h2",{className:"title"},"Create single collectible")))),_("div",{className:"modal fade popup",id:"popup_preview",tabindex:"-1",role:"dialog","aria-hidden":"true"},_("div",{className:"modal-dialog modal-dialog-centered",role:"document"},_("div",{className:"modal-content"},_("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},_("span",{"aria-hidden":"true"},"\xd7")),_("div",{className:"modal-body space-y-20 p-0"},_("div",{className:"card__item three m-0 in__popup"},_("div",{className:"card_body space-y-10"},_("div",{className:"card_head"},_("img",{src:this.state.nftURL,alt:""}),_("a",{href:"#",className:"likes space-x-3"},_("i",{className:"ri-heart-3-fill"}),_("span",{className:"txt_sm"},"2.1k")),_("div",{className:"action"},_("a",{href:"#",className:"btn btn-primary btn-sm"},_("i",{className:"ri-pie-chart-line color_white"}),"Place Your Bid"))),_("h6",{className:"card_title"},this.state.nftName),_("div",{className:"card_footer d-block space-y-10"},_("div",{className:"d-flex justify-content-between"},_("div",{className:"creators space-x-10"},_("div",{className:"avatars -space-x-20"},_("a",{href:"Profile.html"},_("img",{src:"assets/img/avatars/avatar_3.png",alt:"Avatar",className:"avatar\r avatar-sm"})),_("a",{href:"Profile.html"},_("img",{src:"assets/img/avatars/avatar_2.png",alt:"Avatar",className:"avatar\r avatar-sm"}))),_("a",{href:"Profile.html"},_("p",{className:"avatars_name txt_sm"},this.state.walletAddress," "))),_("a",{href:"#",className:"space-x-3"},_("p",{className:"color_green txt_sm"},this.state.nftPrice," BNB"))),_("div",{className:"hr"}),_("a",{href:"#",className:"d-flex align-items-center\r space-x-10"},_("i",{className:"ri-vip-crown-line"}),_("p",{className:"color_text txt_sm",style:{width:"auto"}},"Highest bid"),_("span",{className:"color_black txt_sm"},"0.001 ETH"))))))))),_("div",{className:"container"},_("div",{className:"box in__upload mb-120"},_("div",{className:"row"},_("div",{className:"col-lg-6"},_("div",{className:"left__part space-y-40 md:mb-20 upload_file"},_("div",{className:"space-y-20"},_("img",{className:"icon",src:"assets/img/icons/upload.svg",alt:""}),_("h5",null,"Drag and drop your file"),_("p",{className:"color_text"},"PNG, GIF, WEBP, MP4 or MP3. Max 100mb.")),_("div",{className:"space-y-20"},_("p",{className:"color_text"},"or choose a file"),_("a",{href:"#",className:"btn btn-white"}," Browse files "),_("input",{onChange:this.onChange,type:"file"})))),_("div",{className:"col-lg-6"},_("div",{className:"form-group space-y-10"},_("div",{className:"space-y-20"},_("div",{className:"space-y-10"},_("span",{className:"nameInput"},"Title"),_("input",{type:"text",className:"form-control",onChange:function(t){return e.setState({nftName:t.target.value})},placeholder:"e. g. `raroin design art`"})),_("div",{className:"space-y-10"},_("span",{className:"nameInput"},"Description ",_("span",{className:"color_text"},"(optional) ")),_("input",{type:"text",className:"form-control",onChange:function(t){return e.setState({nftDescription:t.target.value})},placeholder:"e. g. `raroin design art`"})),_("div",{className:"space-y-10"},_("span",{className:"variationInput"},"Price"),_("input",{type:"number",className:"form-select custom-select",onChange:function(t){return e.setState({nftPrice:t.target.value})},"aria-label":"Default select example",placeholder:"e. g. `0.1 BNB`"})),_("div",{className:"space-y-10"},_("span",{className:"variationInput"},"Choose collection"),_("div",{className:"d-flex flex-column flex-md-row"},_("a",{href:"#",className:"choose_collection mb-10\r mb-md-0 mr-0 mr-md-3"},_("div",{className:"icon"},_("i",{className:"ri-add-line"})),"New collection"),_("a",{href:"#",className:"choose_collection is_brand"},_("img",{src:"assets/img/icons/raroin_icon.svg",alt:""}),"Raroin Collection "))))),_("p",{className:"color_black"},_("span",{className:"color_text text-bold"}," Service fee : "),"2.5%")," ",_("p",{className:"color_black"},_("span",{className:"color_text text-bold"}," You will receive :"),"22.425 ETH $41,637.78"),_("p",null))))),_("div",{className:"fixed_row bottom-0 left-0 right-0"},_("div",{className:"container"},_("div",{className:"row content justify-content-between mb-20_reset"},_("div",{className:"col-md-auto col-12 mb-20"},_("div",{className:"space-x-10"},_("a",{href:"Upload.html",className:"btn btn-white\r others_btn"}," Cancel"),_("a",{href:"#",className:"btn btn-dark others_btn","data-toggle":"modal","data-target":"#popup_preview"}," Preview"))),_("div",{className:"col-md-auto col-12 mb-20"},_("a",{href:"#",onClick:this.createNFT,className:"btn btn-grad\r btn_create"}," Create item")))))))}}]),a}(n.Component),B=s().createElement;function E(){return B(s().Fragment,null,B("footer",{className:"footer__1"},B("div",{className:"container"},B("div",{className:"row"},B("div",{className:"col-lg-6 space-y-20"},B("div",{className:"footer__logo"},B("a",{href:"index.html"},B("img",{src:"assets/img/logos/Logo.svg",alt:"logo",id:"logo_js_f"}))),B("p",{className:"footer__text"},"raroin is a shared liquidity NFT market smart contract"),B("div",null,B("ul",{className:"footer__social space-x-10 mb-40"},B("li",null," ",B("a",{href:"#"}," ",B("i",{className:"ri-facebook-line"})," ")),B("li",null," ",B("a",{href:"#"}," ",B("i",{className:"ri-messenger-line"})," ")),B("li",null," ",B("a",{href:"#"}," ",B("i",{className:"ri-whatsapp-line"})," ")),B("li",null," ",B("a",{href:"#"}," ",B("i",{className:"ri-youtube-line"})," "))))),B("div",{className:"col-lg-2 col-6"},B("h6",{className:"footer__title"},"Raroin"),B("ul",{className:"footer__list"},B("li",null," ",B("a",{href:"Home1.html"}," Home1 ")),B("li",null," ",B("a",{href:"Home2.html"}," Home2")," "),B("li",null," ",B("a",{href:"Home3.html"}," Home3 ")," "),B("li",null," ",B("a",{href:"Marketplace.html"}," Marketplace")))),B("div",{className:"col-lg-2 col-6"},B("h6",{className:"footer__title"},"Assets"),B("ul",{className:"footer__list"},B("li",null," ",B("a",{href:"Profile.html"}," Profile ")),B("li",null," ",B("a",{href:"Creators.html"}," Creators ")),B("li",null," ",B("a",{href:"Collections.html"}," Colletctions ")),B("li",null," ",B("a",{href:"Activity.html"}," Activity")," "))),B("div",{className:"col-lg-2 col-6"},B("h6",{className:"footer__title"},"Company"),B("ul",{className:"footer__list"},B("li",null," ",B("a",{href:"Upload-type.html"}," Upload Types ")),B("li",null," ",B("a",{href:"Upload.html"}," Upload ")," "),B("li",null," ",B("a",{href:"Connect-wallet.html"}," Connect wallet")," "),B("li",null," ",B("a",{href:"Item-details.html"}," Item details "))))),B("p",{className:"copyright text-center"},"Copyright \xa9 2021. Created with love by creabik."))))}var F=s().createElement,D=function(e){return F(s().Fragment,null,F(A,null),e.children,F(E,null))}},47005:function(){},26937:function(){},26784:function(){},88795:function(){},52361:function(){},94616:function(){}}]);