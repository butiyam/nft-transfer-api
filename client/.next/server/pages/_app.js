(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 418:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout_Layout; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/contracts/METANFT.json
var METANFT_namespaceObject = JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"imageData","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"url","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"images","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approveNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"approveForSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"nftSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setbaseURIs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"QW":{}}');
;// CONCATENATED MODULE: ./src/contracts/Marketplace.json
var Marketplace_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_price","type":"uint256"}],"name":"BoughtNFT","type":"event"},{"inputs":[],"name":"MNWToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftContract","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyImage","outputs":[],"stateMutability":"nonpayable","type":"function"}],"QW":{}}');
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(409);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
;// CONCATENATED MODULE: ./src/getWeb3.js


const getWeb3 = () => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener("load", async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new (external_web3_default())(window.ethereum);

      try {
        // Request account access if needed
        //await window.ethereum.request({ method: 'eth_requestAccounts'});
        // Acccounts now exposed
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } // Legacy dapp browsers...
    else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      } // Fallback to localhost; use dev console port by default...
      else {
          const provider = new (external_web3_default()).providers.HttpProvider("https://bsc-dataseed1.ninicoin.io");
          const web3 = new (external_web3_default())(provider);
          console.log("No web3 instance injected, using Local web3.");
          resolve(web3);
        }
  });
});

/* harmony default export */ var src_getWeb3 = (getWeb3);
;// CONCATENATED MODULE: ./src/components/Layout/components/Header/Header.jsx
var __jsx = (external_react_default()).createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const CoinGecko = __webpack_require__(273);

const CoinGeckoClient = new CoinGecko();

const Web3 = __webpack_require__(409);

const web3 = new Web3();
const BN = web3.utils.BN;

class Header extends external_react_.Component {
  render() {
    let Logincontent = 'none';
    let Logoutcontent = 'block';

    if (this.state.account) {
      Logincontent = 'flex';
      Logoutcontent = 'none';
    } else {
      Logincontent = 'none';
      Logoutcontent = 'block';
    }

    return __jsx("div", {
      className: "overflow-hidden"
    }, __jsx("header", {
      className: "header__1 js-header",
      id: "header"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "wrapper js-header-wrapper"
    }, __jsx("div", {
      className: "header__logo"
    }, __jsx("a", {
      href: "index.html"
    }, __jsx("img", {
      className: "header__logo",
      id: "logo_js",
      src: "assets/img/logos/logo-white.png",
      alt: "logo"
    }))), __jsx("div", {
      className: "header__menu"
    }, __jsx("ul", {
      className: "d-flex space-x-20"
    }, __jsx("li", null, __jsx("a", {
      className: "color_black",
      href: "Explore.html"
    }, " Explore")), __jsx("li", null, __jsx("a", {
      className: "color_black",
      href: "Marketplace.html"
    }, " Marketplace")), __jsx("li", {
      style: {
        display: Logincontent
      }
    }, __jsx("a", {
      className: "color_black",
      href: "Collections.html"
    }, " My Collections")))), __jsx("div", {
      className: "header__search"
    }, __jsx("input", {
      type: "text",
      placeholder: "Search"
    }), __jsx("button", {
      className: "header__result"
    }, __jsx("i", {
      className: "ri-search-line"
    }))), __jsx("div", {
      style: {
        display: Logincontent
      },
      className: "header__avatar"
    }, __jsx("div", {
      className: "price"
    }, __jsx("span", null, this.state.balanceInBNB, " ", __jsx("strong", null, "BNB"), " ")), __jsx("img", {
      className: "avatar",
      src: "assets/img/avatars/avatar_2.png",
      alt: "avatar"
    }), __jsx("div", {
      className: "avatar_popup space-y-20"
    }, __jsx("div", {
      className: "d-flex align-items-center justify-content-between"
    }, __jsx("span", null, this.state.walletAddress), __jsx("a", {
      href: "/",
      className: "ml-2"
    }, __jsx("i", {
      className: "ri-file-copy-line"
    }))), __jsx("div", {
      className: "d-flex align-items-center space-x-10"
    }, __jsx("img", {
      className: "coin",
      src: "assets/img/logos/coin.svg",
      alt: "/"
    }), __jsx("div", {
      className: "info"
    }, __jsx("p", {
      className: "w-full text-sm font-bold text-green-500"
    }, this.state.balanceInBNB, " BNB"))), __jsx("div", {
      className: "hr"
    }), __jsx("div", {
      className: "links space-y-10"
    }, __jsx("a", {
      href: "Collections.html"
    }, __jsx("i", {
      className: "ri-landscape-line"
    }), " ", __jsx("span", null, " My items"))))), __jsx("div", {
      style: {
        display: Logincontent
      },
      className: "header__btns"
    }, __jsx("a", {
      className: "btn btn-primary btn-sm",
      href: "create-nft.html"
    }, "Create")), __jsx("div", {
      style: {
        display: Logoutcontent
      },
      className: "header__btns"
    }, __jsx("a", {
      className: "btn btn-grad btn-sm",
      href: "#",
      onClick: this.ethEnabled
    }, __jsx("i", {
      className: "ri-wallet-3-line"
    }), "Connect wallet"), __jsx("a", {
      href: "#",
      id: "connectbtn"
    }, __jsx("img", {
      width: "45",
      src: "assets/img/icons/metamask.svg",
      alt: ""
    }))), __jsx("div", {
      className: "header__burger js-header-burger"
    }), __jsx("div", {
      className: "header__mobile js-header-mobile"
    }, __jsx("div", {
      className: "header__mobile__menu space-y-40"
    }, __jsx("ul", {
      className: "d-flex space-y-20"
    }, __jsx("li", null, " ", __jsx("a", {
      className: "color_black",
      href: "Explore.html"
    }, " Explore"), " "), __jsx("li", null, " ", __jsx("a", {
      className: "color_black",
      href: "Marketplace.html"
    }, " Marketplace"), " "), __jsx("li", {
      style: {
        display: Logincontent
      }
    }, " ", __jsx("a", {
      className: "color_black",
      href: "Collections.html"
    }, " Collections"), " ")), __jsx("div", {
      style: {
        display: Logoutcontent
      },
      className: "space-y-20"
    }, __jsx("a", {
      className: "btn btn-grad btn-sm",
      href: "#",
      onClick: this.ethEnabled
    }, __jsx("i", {
      className: "ri-wallet-3-line"
    }), "Connect wallet")), __jsx("div", {
      style: {
        display: Logincontent
      },
      className: "space-y-20"
    }, __jsx("a", {
      className: "btn btn-grad btn-sm",
      href: "create-nft.html",
      onClick: this.ethEnabled
    }, "Create"))))))), __jsx("div", {
      className: "hero_marketplace bg_white"
    }, __jsx("div", {
      className: "container"
    }, __jsx("h1", {
      className: "text-center"
    }, "Marketplace"))), __jsx("div", {
      className: "bg_white border-b py-20"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "d-flex justify-content-center"
    }, __jsx("ul", {
      className: "menu_categories space-x-20"
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      className: "color_brand"
    }, __jsx("span", null, " All "))), __jsx("li", null, " ", __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "ri-gamepad-line"
    }), " ", __jsx("span", null, " Games "))), __jsx("li", null, " ", __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "ri-brush-line"
    }), " ", __jsx("span", null, " Art "))), __jsx("li", null, " ", __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "ri-stock-line"
    }), " ", __jsx("span", null, " Trading Cards "))), __jsx("li", null, " ", __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "ri-music-line"
    }), " ", __jsx("span", null, " Music "))), __jsx("li", null, " ", __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "ri-global-line"
    }), " ", __jsx("span", null, " Domain Names "))), __jsx("li", null, " ", __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "ri-emotion-laugh-line"
    }), " ", __jsx("span", null, " Memes "))), __jsx("li", null, " ", __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "ri-layout-4-line"
    }), " ", __jsx("span", null, " Collectibles ")))), "        "))), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section mt-100"
    }, __jsx("div", {
      className: "section__head"
    }, __jsx("h2", {
      className: "section__title mb-20"
    }, " Marketplace"), __jsx("div", {
      className: "row justify-content-between align-items-center"
    }, __jsx("div", {
      className: "col-lg-auto"
    }, __jsx("div", {
      className: "d-flex space-x-10 align-items-center"
    }, __jsx("span", {
      className: "color_text txt_sm",
      style: {
        minWidth: 'max-content'
      }
    }, "FILTER BY:"), __jsx("ul", {
      className: "menu_categories space-x-20"
    }, __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch1"
    }), __jsx("label", {
      for: "switch1"
    }, "Toggle"), __jsx("span", null, " Has list price ")), __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch2",
      checked: true
    }), __jsx("label", {
      for: "switch2"
    }, "Toggle"), __jsx("span", null, " Has open offer ")), __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch3"
    }), __jsx("label", {
      for: "switch3"
    }, "Toggle"), __jsx("span", null, " Owned by creator ")), __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch4"
    }), __jsx("label", {
      for: "switch4"
    }, "Toggle"), __jsx("span", null, " Has sold "))), "                    ")), __jsx("div", {
      className: "col-lg-auto"
    }, __jsx("div", {
      className: "d-flex space-x-10 align-items-center sm:mt-20"
    }, __jsx("span", {
      className: "color_text txt_sm"
    }, " SORT BY: "), __jsx("div", {
      className: "dropdown"
    }, __jsx("button", {
      className: "btn btn-dark btn-sm dropdown-toggle",
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, "Recent Active"), __jsx("div", {
      className: "dropdown-menu"
    }, __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Action"), __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Another action"), __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Something else here"))))))), __jsx("div", {
      className: "modal fade popup",
      id: "popup_bid_success",
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": "true"
    }, __jsx("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body space-y-20 p-40"
    }, __jsx("h3", {
      className: "text-center"
    }, "Your Bidding Successfuly Added"), __jsx("p", {
      className: "text-center"
    }, "your bid ", __jsx("span", {
      className: "color_text txt\r _bold"
    }, "(16ETH) "), " has been listing to our database"), __jsx("a", {
      href: "#",
      className: "btn btn-dark w-full"
    }, " Watch the listings"))))), __jsx("div", {
      className: "modal fade popup",
      id: "popup_history",
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": "true"
    }, __jsx("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body space-y-20 p-40"
    }, __jsx("h4", null, " History "), __jsx("div", {
      className: "creator_item creator_card space-x-10"
    }, __jsx("div", {
      className: "avatars space-x-10"
    }, __jsx("div", {
      className: "media"
    }, __jsx("div", {
      className: "badge"
    }, __jsx("img", {
      src: "assets/img/icons/Badge.svg",
      alt: ""
    })), __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "assets/img/avatars/avatar_1.png",
      alt: "Avatar",
      className: "avatar avatar-md"
    }))), __jsx("div", null, __jsx("p", {
      className: "color_black"
    }, "Bid accepted ", __jsx("span", {
      className: "color_brand"
    }, "1 ETH"), " by ", __jsx("a", {
      className: "color_black txt\r _bold",
      href: "#"
    }, "ayoub")), __jsx("span", {
      className: "date color_text"
    }, "28/06/2021, 12:08")))), __jsx("div", {
      className: "creator_item creator_card space-x-10"
    }, __jsx("div", {
      className: "avatars space-x-10"
    }, __jsx("div", {
      className: "media"
    }, __jsx("div", {
      className: "badge"
    }, __jsx("img", {
      src: "assets/img/icons/Badge.svg",
      alt: ""
    })), __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "assets/img/avatars/avatar_2.png",
      alt: "Avatar",
      className: "avatar avatar-md"
    }))), __jsx("div", null, __jsx("p", {
      className: "color_black"
    }, "Bid accepted ", __jsx("span", {
      className: "color_brand"
    }, "3 ETH"), " by ", __jsx("a", {
      className: "color_black txt\r _bold",
      href: "#"
    }, "monir")), __jsx("span", {
      className: "date color_text"
    }, "22/05/2021, 12:08")))))))), __jsx("div", {
      className: "row mb-30_reset"
    }, this.state.images.map((id, key) => {
      return this.state.approved[key] && this.state.owners[key] !== this.state.account ? __jsx((external_react_default()).Fragment, null, __jsx("div", {
        className: "modal fade popup",
        id: "popup_approve" + key,
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true"
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-centered",
        role: "document"
      }, __jsx("div", {
        className: "modal-content"
      }, __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, __jsx("span", {
        "aria-hidden": "true"
      }, "\xD7")), __jsx("div", {
        className: "modal-body space-y-20 p-40"
      }, __jsx("h3", null, "Approve for sale"), __jsx("p", null, this.state.imageData_name[key], " ", __jsx("span", {
        className: "color_black"
      }, this.state.imageData_price[key], " BNB")), __jsx("input", {
        type: "number",
        className: "form-control",
        value: this.state.new_price,
        placeholder: this.state.imageData_price[key]
      }), __jsx("div", {
        className: "hr"
      }), __jsx("div", {
        className: "d-flex justify-content-between"
      }, __jsx("p", null, " You'r paying listing fee for sale approval:")), __jsx("div", {
        className: "d-flex justify-content-between"
      }, __jsx("p", null, " listing fee:"), __jsx("p", {
        className: "text-right color_black txt _bold"
      }, " 0.045 BNB/$", parseFloat(this.state.BNBinUSD * 0.045).toFixed(2), " ")), __jsx("div", {
        className: "d-flex justify-content-between"
      }, __jsx("p", null, " Current price:"), __jsx("p", {
        className: "text-right color_black txt _bold"
      }, " ", this.state.imageData_price[key], " BNB/$", parseFloat(this.state.BNBinUSD * this.state.imageData_price[key]).toFixed(2), " ")), __jsx("a", {
        href: "#",
        className: "btn btn-primary w-full",
        "data-toggle": "modal",
        "data-target": "#popup_bid_success",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, " Approve"))))), __jsx("div", {
        className: "col-xl-3 col-lg-4 col-md-6 col-sm-6"
      }, __jsx("div", {
        className: "card__item four"
      }, __jsx("div", {
        className: "card_body space-y-10"
      }, __jsx("div", {
        className: "creators space-x-10"
      }, __jsx("div", {
        className: "avatars space-x-3"
      }, __jsx("a", {
        href: "#"
      }, __jsx("img", {
        src: "assets/img/avatars/avatar_1.png",
        alt: "Avatar",
        className: "avatar avatar-sm"
      })), __jsx("a", {
        href: "#"
      }, __jsx("p", {
        className: "avatars_name txt_xs"
      }, this.state.ownersAddress[key])))), __jsx("div", {
        className: "card_head"
      }, __jsx("a", {
        href: "nft-detail.html?item_id=" + key
      }, __jsx("img", {
        src: this.state.imageData_url[key],
        alt: ""
      })), __jsx("a", {
        href: "#",
        className: "likes space-x-3"
      }, __jsx("i", {
        className: "ri-heart-3-fill"
      }), __jsx("span", {
        className: "txt_sm"
      }, "1.2k"))), __jsx("h6", {
        className: "card_title"
      }, this.state.imageData_name[key]), __jsx("div", {
        className: "card_footer d-block space-y-10"
      }, __jsx("div", {
        className: "card_footer justify-content-between"
      }, __jsx("a", {
        href: "#",
        className: ""
      }, __jsx("p", {
        className: "txt_sm"
      }, "Price: ", __jsx("span", {
        className: "color_green\r txt_sm"
      }, new Intl.NumberFormat('en-US').format(parseFloat(this.state.imageData_price[key]).toFixed(2)), " MNW/$", parseFloat(0).toFixed(2))))), __jsx("div", {
        className: "hr"
      }), __jsx("div", {
        className: "d-flex align-items-center space-x-10\r justify-content-between"
      }, __jsx("div", {
        className: "d-flex align-items-center\r space-x-10"
      }, __jsx("i", {
        className: "ri-history-line"
      }), __jsx("a", {
        className: "view_history",
        href: "#",
        "data-target": "#popup_history"
      }, __jsx("p", {
        className: "color_text txt_sm",
        style: {
          width: 'auto'
        }
      }, "View History"))), __jsx("a", {
        className: "btn btn-sm btn-primary",
        href: "nft-detail.html?item_id=" + key
      }, "View"))))))) : null;
    }))), __jsx("div", {
      className: "section mt-100"
    }, __jsx("div", {
      className: "section__head"
    }, __jsx("h2", {
      className: "section__title mb-20"
    }, " Collections"), __jsx("div", {
      className: "row justify-content-between align-items-center"
    }, __jsx("div", {
      className: "col-lg-auto"
    }, __jsx("div", {
      className: "d-flex align-items-center space-x-10"
    }, __jsx("span", {
      className: "color_text txt_sm",
      style: {
        minWidth: 'max-content'
      }
    }, "FILTER BY:"), __jsx("ul", {
      className: "menu_categories space-x-20"
    }, __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch7"
    }), __jsx("label", {
      for: "switch7"
    }, "Toggle"), __jsx("span", null, " Has list price ")), __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch8",
      checked: true
    }), __jsx("label", {
      for: "switch8"
    }, "Toggle"), __jsx("span", null, " Has open offer ")), __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch9"
    }), __jsx("label", {
      for: "switch9"
    }, "Toggle"), __jsx("span", null, " Owned by creator ")), __jsx("li", {
      className: "d-flex space-x-10 switch_item"
    }, __jsx("input", {
      type: "checkbox",
      id: "switch10"
    }), __jsx("label", {
      for: "switch10"
    }, "Toggle"), __jsx("span", null, " Has sold "))))), __jsx("div", {
      className: "col-lg-auto"
    }, __jsx("div", {
      className: "d-flex space-x-10 align-items-center sm:mt-20"
    }, __jsx("span", {
      className: "color_text txt_sm"
    }, " SORT BY: "), __jsx("div", {
      className: "dropdown"
    }, __jsx("button", {
      className: "btn btn-dark btn-sm dropdown-toggle",
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, "Recent Active"), __jsx("div", {
      className: "dropdown-menu"
    }, __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Action"), __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Another action"), __jsx("a", {
      className: "dropdown-item",
      href: "#"
    }, "Something else here"))))))), __jsx("div", {
      className: "row justify-content-center mb-30_reset"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-8"
    }, __jsx("div", {
      className: "collections space-y-10 mb-30"
    }, __jsx("a", {
      href: "#"
    }, __jsx("div", {
      className: "collections_item"
    }, __jsx("div", {
      className: "images-box space-y-10"
    }, __jsx("div", {
      className: "top_imgs"
    }, __jsx("img", {
      src: "assets/img/items/item_9.png",
      alt: ""
    }), __jsx("img", {
      src: "assets/img/items/item_10.png",
      alt: ""
    }), __jsx("img", {
      src: "assets/img/items/item_11.png",
      alt: ""
    })), __jsx("img", {
      src: "assets/img/items/item_12.png",
      alt: ""
    })))), __jsx("div", {
      className: "collections_footer justify-content-between"
    }, __jsx("h5", {
      className: "collection_title"
    }, __jsx("a", {
      href: "#"
    }, "Creative Art collection")), __jsx("a", {
      href: "#",
      className: "likes space-x-3"
    }, __jsx("i", {
      className: "ri-heart-3-fill"
    }), __jsx("span", {
      className: "txt_md"
    }, "2.1k"))), __jsx("div", {
      className: "creators space-x-10"
    }, __jsx("span", {
      className: "color_text txt_md"
    }, " 5 items \xB7 Created by"), __jsx("div", {
      className: "avatars space-x-5"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "assets/img/avatars/avatar_2.png",
      alt: "Avatar",
      className: "avatar avatar-sm"
    }))), __jsx("a", {
      href: "#"
    }, __jsx("p", {
      className: "avatars_name txt_sm"
    }, " @william_jamy... "))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-8"
    }, __jsx("div", {
      className: "collections space-y-10 mb-30"
    }, __jsx("a", {
      href: "#"
    }, __jsx("div", {
      className: "collections_item"
    }, __jsx("div", {
      className: "images-box space-y-10"
    }, __jsx("div", {
      className: "top_imgs"
    }, __jsx("img", {
      src: "assets/img/items/item_13.png",
      alt: ""
    }), __jsx("img", {
      src: "assets/img/items/item_14.png",
      alt: ""
    }), __jsx("img", {
      src: "assets/img/items/item_15.png",
      alt: ""
    })), __jsx("img", {
      src: "assets/img/items/item_16.png",
      alt: ""
    })))), __jsx("div", {
      className: "collections_footer justify-content-between"
    }, __jsx("h5", {
      className: "collection_title"
    }, __jsx("a", {
      href: "#"
    }, "Colorful Abstract Painting")), __jsx("a", {
      href: "#",
      className: "likes space-x-3"
    }, __jsx("i", {
      className: "ri-heart-3-fill"
    }), __jsx("span", {
      className: "txt_md"
    }, "3.5k"))), __jsx("div", {
      className: "creators space-x-10"
    }, __jsx("span", {
      className: "color_text txt_md"
    }, " 7 items \xB7 Created by"), __jsx("div", {
      className: "avatars space-x-5"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "assets/img/avatars/avatar_3.png",
      alt: "Avatar",
      className: "avatar avatar-sm"
    }))), __jsx("a", {
      href: "#"
    }, __jsx("p", {
      className: "avatars_name txt_sm"
    }, " @alexis_fenn... "))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-8"
    }, __jsx("div", {
      className: "collections space-y-10 mb-30"
    }, __jsx("a", {
      href: "#"
    }, __jsx("div", {
      className: "collections_item"
    }, __jsx("div", {
      className: "images-box space-y-10"
    }, __jsx("div", {
      className: "top_imgs"
    }, __jsx("img", {
      src: "assets/img/items/item_17.png",
      alt: ""
    }), __jsx("img", {
      src: "assets/img/items/item_18.png",
      alt: ""
    }), __jsx("img", {
      src: "assets/img/items/item_19.png",
      alt: ""
    })), __jsx("img", {
      src: "assets/img/items/item_20.png",
      alt: ""
    })))), __jsx("div", {
      className: "collections_footer justify-content-between"
    }, __jsx("h5", {
      className: "collection_title"
    }, __jsx("a", {
      href: "#"
    }, "Modern Art collection")), __jsx("a", {
      href: "#",
      className: "likes space-x-3"
    }, __jsx("i", {
      className: "ri-heart-3-fill"
    }), __jsx("span", {
      className: "txt_md"
    }, "7.2k"))), __jsx("div", {
      className: "creators space-x-10"
    }, __jsx("span", {
      className: "color_text txt_md"
    }, " 2 items \xB7 Created by"), __jsx("div", {
      className: "avatars space-x-5"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "assets/img/avatars/avatar_1.png",
      alt: "Avatar",
      className: "avatar avatar-sm"
    }))), __jsx("a", {
      href: "#"
    }, __jsx("p", {
      className: "avatars_name txt_sm"
    }, " @Joshua_Bren... ")))))))));
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "ethEnabled", async () => {
      if (window.ethereum) {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        const currentAccount = accounts[0];
        this.setState({
          account: currentAccount
        });
        window.web3 = new Web3(window.ethereum);
        this.web3 = window.web3;
        return true;
      }

      return false;
    });

    this.state = {
      account: '',
      balanceInBNB: 0,
      BNBinUSD: 0,
      walletAddress: '',
      contract: null,
      sale_contract: null,
      sale_address: null,
      totalSupply: 0,
      images: [],
      owners: [],
      ownersAddress: [],
      imageData_name: [],
      imageData_url: [],
      imageData_price: [],
      new_price: null,
      token_sale_contract: null,
      token_price: 0,
      approved: []
    };
  }

  async componentDidMount() {
    document.title = 'Marketplace | METANFT Marketplace';
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    try {
      // Get network provider and web3 instance.
      this.web3 = await src_getWeb3();
      const accounts = await this.web3.eth.getAccounts();
      this.setState({
        account: accounts[0]
      });
      this.networkId = await web3.eth.net.getId();
    } catch (error) {
      const provider = new Web3.providers.HttpProvider("https://bsc-dataseed1.ninicoin.io");
      this.web3 = new Web3(provider);
      this.networkId = 56;
    }

    if (this.state.account) {
      const balanceInWei = await this.web3.eth.getBalance(this.state.account);
      const balanceInBNB = await web3.utils.fromWei(new BN(balanceInWei), 'ether');
      this.setState({
        balanceInBNB: parseFloat(balanceInBNB).toFixed(2),
        walletAddress: this.state.account.substring(0, 6) + '...' + this.state.account.substring(38)
      });
    } //const web3 = window.web3
    // Load account


    const networkData = METANFT_namespaceObject.QW[this.networkId]; //if (networkData) {

    const abi = METANFT_namespaceObject.Mt;
    const address = '0x265c77022E4085740946028bb129a5dF922Ec60E'; //networkData.address

    const contract = new this.web3.eth.Contract(abi, address); // console.log(contract)

    this.setState({
      contract
    });
    const totalSupply = await contract.methods.totalSupply().call(); //console.log(totalSupply)

    this.setState({
      totalSupply
    }); // Load NFTs

    for (var i = 1; i <= totalSupply; i++) {
      const id = await contract.methods.images(i - 1).call(); // console.log(id)

      this.setState({
        images: [...this.state.images, id]
      });
    } // Load Owner


    for (i = 1; i <= totalSupply; i++) {
      const owner = await contract.methods.ownerOf(i - 1).call(); // console.log(owner)

      this.setState({
        owners: [...this.state.owners, owner],
        ownersAddress: [...this.state.ownersAddress, owner.substring(0, 6) + '...' + owner.substring(38)]
      });
    } // Load NFTs Data 


    for (i = 1; i <= totalSupply; i++) {
      const metadata = await contract.methods.imageData(i - 1).call();
      this.setState({
        imageData_name: [...this.state.imageData_name, metadata.name],
        imageData_price: [...this.state.imageData_price, await web3.utils.fromWei(metadata.price, 'Ether')],
        imageData_url: [...this.state.imageData_url, metadata.url]
      });
    } // } else {
    // window.alert('Smart contract not deployed to detected network.')
    // }


    const sale_networkData = Marketplace_namespaceObject.QW[this.networkId]; //if (sale_networkData) {

    const sale_abi = Marketplace_namespaceObject.Mt;
    const sale_address = '0x2db9F032f25EA67FF2443765cD54f95B57526152'; //sale_networkData.address

    const sale_contract = new this.web3.eth.Contract(sale_abi, sale_address); // console.log(sale_contract)

    this.setState({
      sale_contract,
      sale_address
    });

    for (i = 1; i <= this.state.totalSupply; i++) {
      var approv = await this.state.contract.methods.isApprovedOrOwner(this.state.sale_contract._address, i - 1).call();
      this.setState({
        approved: [...this.state.approved, approv]
      });
    } //  } else {
    // window.alert('Smart contract not deployed to detected network.')
    // }
    //Get Current BNB price in USD


    try {
      let data = await CoinGeckoClient.simple.price({
        ids: ['binancecoin'],
        vs_currencies: ['usd']
      });
      this.setState({
        BNBinUSD: Math.round(data.data.binancecoin.usd)
      });
    } catch (error) {}
  }

}

/* harmony default export */ var Header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Layout/components/Footer/Footer.jsx
var Footer_jsx = (external_react_default()).createElement;

function Footer() {
  return Footer_jsx((external_react_default()).Fragment, null, Footer_jsx("footer", {
    className: "footer__1"
  }, Footer_jsx("div", {
    className: "container"
  }, Footer_jsx("div", {
    className: "row"
  }, Footer_jsx("div", {
    className: "col-lg-6 space-y-20"
  }, Footer_jsx("div", {
    className: "footer__logo"
  }, Footer_jsx("a", {
    href: "index.html"
  }, Footer_jsx("img", {
    width: "100",
    src: "assets/img/logos/logo-white.png",
    alt: "logo",
    id: "logo_js_f"
  }))), Footer_jsx("p", {
    className: "footer__text"
  }, "A New Chain of Art, Music and Gaming characters."), Footer_jsx("div", null, Footer_jsx("ul", {
    className: "footer__social space-x-10 mb-40"
  }, Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "#"
  }, " ", Footer_jsx("i", {
    className: "ri-facebook-line"
  }), " ")), Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "#"
  }, " ", Footer_jsx("i", {
    className: "ri-messenger-line"
  }), " ")), Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "#"
  }, " ", Footer_jsx("i", {
    className: "ri-whatsapp-line"
  }), " ")), Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "#"
  }, " ", Footer_jsx("i", {
    className: "ri-youtube-line"
  }), " "))))), Footer_jsx("div", {
    className: "col-lg-3 col-6"
  }, Footer_jsx("h6", {
    className: "footer__title"
  }, "METANFTWORLD"), Footer_jsx("ul", {
    className: "footer__list"
  }, Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "Explore.html"
  }, " Explore ")), Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "Marketplace.html"
  }, " Marketplace")))), Footer_jsx("div", {
    className: "col-lg-3 col-6"
  }, Footer_jsx("h6", {
    className: "footer__title"
  }, "Assets"), Footer_jsx("ul", {
    className: "footer__list"
  }, Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "Profile.html"
  }, " Profile ")), Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "Collections.html"
  }, " Colletctions "))))), Footer_jsx("p", {
    className: "copyright text-center"
  }, "Copyright \xA9 2021."))));
}
;// CONCATENATED MODULE: ./src/components/Layout/Layout.jsx
var Layout_jsx = (external_react_default()).createElement;




const Layout = props => {
  return Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(Header_Header, null), props.children, Layout_jsx(Footer, null));
};

/* harmony default export */ var Layout_Layout = (Layout);

/***/ }),

/***/ 464:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, null, __jsx(Component, pageProps));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("coingecko-api");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 409:
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(464));
module.exports = __webpack_exports__;

})();