self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/components/Header/Header.jsx":
/*!********************************************************!*\
  !*** ./components/Layout/components/Header/Header.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ "../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contracts_NFT_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../contracts/NFT.json */ "./contracts/NFT.json");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../getWeb3 */ "./getWeb3.js");
/* module decorator */ module = __webpack_require__.hmd(module);










var _jsxFileName = "E:\\8MB\\MNW_MARKETPLACE\\client\\src\\components\\Layout\\components\\Header\\Header.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_10___default().createElement);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var CoinGecko = __webpack_require__(/*! coingecko-api */ "../node_modules/coingecko-api/index.js");

var CoinGeckoClient = new CoinGecko();

var Web3 = __webpack_require__(/*! web3 */ "../node_modules/web3/dist/web3.min.js");

var web3 = new Web3();
var BN = web3.utils.BN;

var Header = /*#__PURE__*/function (_Component) {
  (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(Header, _Component);

  var _super = _createSuper(Header);

  (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var Logincontent = 'none';
      var Logoutcontent = 'block';

      if (this.state.account) {
        Logincontent = 'flex';
        Logoutcontent = 'none';
      } else {
        Logincontent = 'none';
        Logoutcontent = 'block';
      }

      return __jsx("div", {
        className: "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx("header", {
        className: "header__1 js-header",
        id: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "wrapper js-header-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "header__logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, __jsx("a", {
        href: "index.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 8
        }
      }, __jsx("img", {
        className: "header__logo",
        id: "logo_js",
        src: "assets/img/logos/logo-white.png",
        alt: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: "header__menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "d-flex space-x-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 8
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 12
        }
      }, __jsx("a", {
        className: "color_black",
        href: "Explore.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 10
        }
      }, " Explore")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "color_black",
        href: "Marketplace.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 10
        }
      }, " Marketplace")), __jsx("li", {
        style: {
          display: Logincontent
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "color_black",
        href: "Collections.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 10
        }
      }, " My Collections")))), __jsx("div", {
        className: "header__search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 7
        }
      }, __jsx("input", {
        type: "text",
        placeholder: "Search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 8
        }
      }), __jsx("button", {
        className: "header__result",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 8
        }
      }, __jsx("i", {
        className: "ri-search-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }))), __jsx("div", {
        style: {
          display: Logincontent
        },
        className: "header__avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 10
        }
      }, this.state.balanceInBNB, " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 42
        }
      }, "BNB"), " ")), __jsx("img", {
        className: "avatar",
        src: "assets/img/avatars/avatar_2.png",
        alt: "avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "avatar_popup space-y-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "d-flex align-items-center justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 10
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, this.state.walletAddress), __jsx("a", {
        href: "/",
        className: "ml-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "ri-file-copy-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 12
        }
      }))), __jsx("div", {
        className: "d-flex align-items-center space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 10
        }
      }, __jsx("img", {
        className: "coin",
        src: "assets/img/logos/coin.svg",
        alt: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, __jsx("p", {
        className: "w-full text-sm font-bold text-green-500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 12
        }
      }, this.state.balanceInBNB, " BNB"))), __jsx("div", {
        className: "hr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 10
        }
      }), __jsx("div", {
        className: "links space-y-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 10
        }
      }, __jsx("a", {
        href: "Collections.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "ri-landscape-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 12
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 50
        }
      }, " My items"))))), __jsx("div", {
        style: {
          display: Logincontent
        },
        className: "header__btns",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "btn btn-primary btn-sm",
        href: "create-nft.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }, "Create")), __jsx("div", {
        style: {
          display: Logoutcontent
        },
        className: "header__btns",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "btn btn-grad btn-sm",
        href: "#",
        onClick: this.ethEnabled,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "ri-wallet-3-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 10
        }
      }), "Connect wallet"), __jsx("a", {
        href: "#",
        id: "connectbtn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }, __jsx("img", {
        width: "45",
        src: "assets/img/icons/metamask.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 10
        }
      }))), __jsx("div", {
        className: "header__burger js-header-burger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "header__mobile js-header-mobile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "header__mobile__menu space-y-40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 8
        }
      }, __jsx("ul", {
        className: "d-flex space-y-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }, " ", __jsx("a", {
        className: "color_black",
        href: "Explore.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 18
        }
      }, " Explore"), " "), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 10
        }
      }, " ", __jsx("a", {
        className: "color_black",
        href: "Marketplace.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }
      }, " Marketplace"), " "), __jsx("li", {
        style: {
          display: Logincontent
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 10
        }
      }, " ", __jsx("a", {
        className: "color_black",
        href: "Collections.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 49
        }
      }, " Collections"), " ")), __jsx("div", {
        style: {
          display: Logoutcontent
        },
        className: "space-y-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "btn btn-grad btn-sm",
        href: "#",
        onClick: this.ethEnabled,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 10
        }
      }, __jsx("i", {
        className: "ri-wallet-3-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 10
        }
      }), "Connect wallet")), __jsx("div", {
        style: {
          display: Logincontent
        },
        className: "space-y-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "btn btn-grad btn-sm",
        href: "create-nft.html",
        onClick: this.ethEnabled,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 10
        }
      }, "Create"))))))), __jsx("div", {
        className: "hero_marketplace bg_white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 8
        }
      }, __jsx("h1", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 19
        }
      }, "Marketplace"))), __jsx("div", {
        className: "bg_white border-b py-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "d-flex justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 12
        }
      }, __jsx("ul", {
        className: "menu_categories space-x-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 16
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 20
        }
      }, __jsx("a", {
        href: "#",
        className: "color_brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 24
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 28
        }
      }, " All "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 20
        }
      }, " ", __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "ri-gamepad-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 28
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 64
        }
      }, " Games "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 20
        }
      }, " ", __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "ri-brush-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 28
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 62
        }
      }, " Art "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 20
        }
      }, " ", __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "ri-stock-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 28
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 62
        }
      }, " Trading Cards "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 20
        }
      }, " ", __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "ri-music-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 28
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 62
        }
      }, " Music "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 20
        }
      }, " ", __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "ri-global-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 28
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 63
        }
      }, " Domain Names "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 20
        }
      }, " ", __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "ri-emotion-laugh-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 28
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 70
        }
      }, " Memes "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 20
        }
      }, " ", __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "ri-layout-4-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 28
        }
      }), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 65
        }
      }, " Collectibles ")))), "        "))), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "section mt-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "section__head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 12
        }
      }, __jsx("h2", {
        className: "section__title mb-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 16
        }
      }, " Marketplace"), __jsx("div", {
        className: "row justify-content-between align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "col-lg-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "d-flex space-x-10 align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 24
        }
      }, __jsx("span", {
        className: "color_text txt_sm",
        style: {
          minWidth: 'max-content'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 28
        }
      }, "FILTER BY:"), __jsx("ul", {
        className: "menu_categories space-x-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 28
        }
      }, __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 74
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 36
        }
      }, " Has list price ")), __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch2",
        checked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 81
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 36
        }
      }, " Has open offer ")), __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 74
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 36
        }
      }, " Owned by creator ")), __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 74
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 36
        }
      }, " Has sold "))), "                    ")), __jsx("div", {
        className: "col-lg-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "d-flex space-x-10 align-items-center sm:mt-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 24
        }
      }, __jsx("span", {
        className: "color_text txt_sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 28
        }
      }, " SORT BY: "), __jsx("div", {
        className: "dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 28
        }
      }, __jsx("button", {
        className: "btn btn-dark btn-sm dropdown-toggle",
        type: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 32
        }
      }, "Recent Active"), __jsx("div", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 32
        }
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 36
        }
      }, "Action"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 36
        }
      }, "Another action"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 36
        }
      }, "Something else here"))))))), __jsx("div", {
        className: "modal fade popup",
        id: "popup_bid_success",
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 12
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-centered",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 20
        }
      }, __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 24
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 28
        }
      }, "\xD7")), __jsx("div", {
        className: "modal-body space-y-20 p-40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 24
        }
      }, __jsx("h3", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 28
        }
      }, "Your Bidding Successfuly Added"), __jsx("p", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 28
        }
      }, "your bid ", __jsx("span", {
        className: "color_text txt\r _bold",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 64
        }
      }, "(16ETH) "), " has been listing to our database"), __jsx("a", {
        href: "#",
        className: "btn btn-dark w-full",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 28
        }
      }, " Watch the listings"))))), __jsx("div", {
        className: "modal fade popup",
        id: "popup_history",
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "modal-dialog modal-dialog-centered",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 14
        }
      }, __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 15
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 16
        }
      }, "\xD7")), __jsx("div", {
        className: "modal-body space-y-20 p-40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 15
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 16
        }
      }, " History "), __jsx("div", {
        className: "creator_item creator_card space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "avatars space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 18
        }
      }, __jsx("div", {
        className: "badge",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "assets/img/icons/Badge.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 20
        }
      })), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "assets/img/avatars/avatar_1.png",
        alt: "Avatar",
        className: "avatar avatar-md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 20
        }
      }))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 18
        }
      }, __jsx("p", {
        className: "color_black",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 19
        }
      }, "Bid accepted ", __jsx("span", {
        className: "color_brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 59
        }
      }, "1 ETH"), " by ", __jsx("a", {
        className: "color_black txt\r _bold",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 35
        }
      }, "ayoub")), __jsx("span", {
        className: "date color_text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 19
        }
      }, "28/06/2021, 12:08")))), __jsx("div", {
        className: "creator_item creator_card space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "avatars space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 18
        }
      }, __jsx("div", {
        className: "badge",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "assets/img/icons/Badge.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 20
        }
      })), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "assets/img/avatars/avatar_2.png",
        alt: "Avatar",
        className: "avatar avatar-md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 20
        }
      }))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 18
        }
      }, __jsx("p", {
        className: "color_black",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 19
        }
      }, "Bid accepted ", __jsx("span", {
        className: "color_brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 59
        }
      }, "3 ETH"), " by ", __jsx("a", {
        className: "color_black txt\r _bold",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 35
        }
      }, "monir")), __jsx("span", {
        className: "date color_text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 19
        }
      }, "22/05/2021, 12:08")))))))), __jsx("div", {
        className: "row mb-30_reset",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 21
        }
      }, this.state.image_id.map(function (id, key) {
        return _this2.state.approved[key] && _this2.state.owners[key] !== _this2.state.account ? __jsx((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), null, __jsx("div", {
          className: "modal fade popup",
          id: "popup_approve" + key,
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "modal-dialog modal-dialog-centered",
          role: "document",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "modal-content",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 33
          }
        }, __jsx("button", {
          type: "button",
          className: "close",
          "data-dismiss": "modal",
          "aria-label": "Close",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 37
          }
        }, __jsx("span", {
          "aria-hidden": "true",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 41
          }
        }, "\xD7")), __jsx("div", {
          className: "modal-body space-y-20 p-40",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 37
          }
        }, __jsx("h3", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 41
          }
        }, "Approve for sale"), __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 41
          }
        }, _this2.state.imageData_name[key], " ", __jsx("span", {
          className: "color_black",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 79
          }
        }, _this2.state.imageData_price[key], " BNB")), __jsx("input", {
          type: "number",
          className: "form-control",
          value: _this2.state.new_price,
          placeholder: _this2.state.imageData_price[key],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 41
          }
        }), __jsx("div", {
          className: "hr",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 41
          }
        }), __jsx("div", {
          className: "d-flex justify-content-between",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 41
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 45
          }
        }, " You'r paying listing fee for sale approval:")), __jsx("div", {
          className: "d-flex justify-content-between",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 41
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 45
          }
        }, " listing fee:"), __jsx("p", {
          className: "text-right color_black txt _bold",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 45
          }
        }, " 0.045 BNB/$", parseFloat(_this2.state.BNBinUSD * 0.045).toFixed(2), " ")), __jsx("div", {
          className: "d-flex justify-content-between",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 41
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 45
          }
        }, " Current price:"), __jsx("p", {
          className: "text-right color_black txt _bold",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 45
          }
        }, " ", _this2.state.imageData_price[key], " BNB/$", parseFloat(_this2.state.BNBinUSD * _this2.state.imageData_price[key]).toFixed(2), " ")), __jsx("a", {
          href: "#",
          className: "btn btn-primary w-full",
          "data-toggle": "modal",
          "data-target": "#popup_bid_success",
          "data-dismiss": "modal",
          "aria-label": "Close",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 41
          }
        }, " Approve"))))), __jsx("div", {
          className: "col-xl-3 col-lg-4 col-md-6 col-sm-6",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "card__item four",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 14
          }
        }, __jsx("div", {
          className: "card_body space-y-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 15
          }
        }, __jsx("div", {
          className: "creators space-x-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 16
          }
        }, __jsx("div", {
          className: "avatars space-x-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 17
          }
        }, __jsx("a", {
          href: "#",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 18
          }
        }, __jsx("img", {
          src: "assets/img/avatars/avatar_1.png",
          alt: "Avatar",
          className: "avatar avatar-sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 19
          }
        })), __jsx("a", {
          href: "#",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 18
          }
        }, __jsx("p", {
          className: "avatars_name txt_xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 19
          }
        }, _this2.state.ownersAddress[key])))), __jsx("div", {
          className: "card_head",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 16
          }
        }, __jsx("a", {
          href: "nft-detail.html?item_id=" + key,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 406,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: _this2.state.imageData_url[key],
          alt: "",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 18
          }
        })), __jsx("a", {
          href: "#",
          className: "likes space-x-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 17
          }
        }, __jsx("i", {
          className: "ri-heart-3-fill",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 18
          }
        }), __jsx("span", {
          className: "txt_sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 18
          }
        }, "1.2k"))), __jsx("h6", {
          className: "card_title",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 16
          }
        }, _this2.state.imageData_name[key]), __jsx("div", {
          className: "card_footer d-block space-y-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 16
          }
        }, __jsx("div", {
          className: "card_footer justify-content-between",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 17
          }
        }, __jsx("a", {
          href: "#",
          className: "",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 18
          }
        }, __jsx("p", {
          className: "txt_sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 19
          }
        }, "Price: ", __jsx("span", {
          className: "color_green\r txt_sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 48
          }
        }, new Intl.NumberFormat('en-US').format(parseFloat(_this2.state.imageData_price[key]).toFixed(2)), " MNW/$", parseFloat(0).toFixed(2))))), __jsx("div", {
          className: "hr",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 17
          }
        }), __jsx("div", {
          className: "d-flex align-items-center space-x-10\r justify-content-between",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "d-flex align-items-center\r space-x-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 18
          }
        }, __jsx("i", {
          className: "ri-history-line",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 19
          }
        }), __jsx("a", {
          className: "view_history",
          href: "#",
          "data-target": "#popup_history",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 19
          }
        }, __jsx("p", {
          className: "color_text txt_sm",
          style: {
            width: 'auto'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 20
          }
        }, "View History"))), __jsx("a", {
          className: "btn btn-sm btn-primary",
          href: "nft-detail.html?item_id=" + key,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 21
          }
        }, "View"))))))) : null;
      }))), __jsx("div", {
        className: "section mt-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "section__head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 12
        }
      }, __jsx("h2", {
        className: "section__title mb-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 16
        }
      }, " Collections"), __jsx("div", {
        className: "row justify-content-between align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "col-lg-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "d-flex align-items-center space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 24
        }
      }, __jsx("span", {
        className: "color_text txt_sm",
        style: {
          minWidth: 'max-content'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 28
        }
      }, "FILTER BY:"), __jsx("ul", {
        className: "menu_categories space-x-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 28
        }
      }, __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 42
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 36
        }
      }, " Has list price ")), __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch8",
        checked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 42
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 36
        }
      }, " Has open offer ")), __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 42
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 36
        }
      }, " Owned by creator ")), __jsx("li", {
        className: "d-flex space-x-10 switch_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 32
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 36
        }
      }), __jsx("label", {
        for: "switch10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 42
        }
      }, "Toggle"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 36
        }
      }, " Has sold "))))), __jsx("div", {
        className: "col-lg-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "d-flex space-x-10 align-items-center sm:mt-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 24
        }
      }, __jsx("span", {
        className: "color_text txt_sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 28
        }
      }, " SORT BY: "), __jsx("div", {
        className: "dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 28
        }
      }, __jsx("button", {
        className: "btn btn-dark btn-sm dropdown-toggle",
        type: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 32
        }
      }, "Recent Active"), __jsx("div", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 32
        }
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 36
        }
      }, "Action"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 36
        }
      }, "Another action"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 36
        }
      }, "Something else here"))))))), __jsx("div", {
        className: "row justify-content-center mb-30_reset",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-4 col-md-6 col-sm-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "collections space-y-10 mb-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 14
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "collections_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "images-box space-y-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "top_imgs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 18
        }
      }, __jsx("img", {
        src: "assets/img/items/item_9.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 19
        }
      }), __jsx("img", {
        src: "assets/img/items/item_10.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 19
        }
      }), __jsx("img", {
        src: "assets/img/items/item_11.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 19
        }
      })), __jsx("img", {
        src: "assets/img/items/item_12.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 18
        }
      })))), __jsx("div", {
        className: "collections_footer justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "collection_title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 16
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 49
        }
      }, "Creative Art collection")), __jsx("a", {
        href: "#",
        className: "likes space-x-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 16
        }
      }, __jsx("i", {
        className: "ri-heart-3-fill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 17
        }
      }), __jsx("span", {
        className: "txt_md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 17
        }
      }, "2.1k"))), __jsx("div", {
        className: "creators space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "color_text txt_md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 16
        }
      }, " 5 items \xB7 Created by"), __jsx("div", {
        className: "avatars space-x-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 16
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "assets/img/avatars/avatar_2.png",
        alt: "Avatar",
        className: "avatar avatar-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 18
        }
      }))), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 16
        }
      }, __jsx("p", {
        className: "avatars_name txt_sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 17
        }
      }, " @william_jamy... "))))), __jsx("div", {
        className: "col-lg-4 col-md-6 col-sm-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "collections space-y-10 mb-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 14
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "collections_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "images-box space-y-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "top_imgs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 18
        }
      }, __jsx("img", {
        src: "assets/img/items/item_13.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 19
        }
      }), __jsx("img", {
        src: "assets/img/items/item_14.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 19
        }
      }), __jsx("img", {
        src: "assets/img/items/item_15.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 19
        }
      })), __jsx("img", {
        src: "assets/img/items/item_16.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 18
        }
      })))), __jsx("div", {
        className: "collections_footer justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "collection_title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 16
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 49
        }
      }, "Colorful Abstract Painting")), __jsx("a", {
        href: "#",
        className: "likes space-x-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 16
        }
      }, __jsx("i", {
        className: "ri-heart-3-fill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 17
        }
      }), __jsx("span", {
        className: "txt_md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600,
          columnNumber: 17
        }
      }, "3.5k"))), __jsx("div", {
        className: "creators space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "color_text txt_md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 16
        }
      }, " 7 items \xB7 Created by"), __jsx("div", {
        className: "avatars space-x-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 16
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "assets/img/avatars/avatar_3.png",
        alt: "Avatar",
        className: "avatar avatar-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 18
        }
      }))), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 16
        }
      }, __jsx("p", {
        className: "avatars_name txt_sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 17
        }
      }, " @alexis_fenn... "))))), __jsx("div", {
        className: "col-lg-4 col-md-6 col-sm-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "collections space-y-10 mb-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 14
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "collections_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "images-box space-y-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "top_imgs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 18
        }
      }, __jsx("img", {
        src: "assets/img/items/item_17.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 19
        }
      }), __jsx("img", {
        src: "assets/img/items/item_18.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 19
        }
      }), __jsx("img", {
        src: "assets/img/items/item_19.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 19
        }
      })), __jsx("img", {
        src: "assets/img/items/item_20.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 18
        }
      })))), __jsx("div", {
        className: "collections_footer justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "collection_title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 16
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 49
        }
      }, "Modern Art collection")), __jsx("a", {
        href: "#",
        className: "likes space-x-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 16
        }
      }, __jsx("i", {
        className: "ri-heart-3-fill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 17
        }
      }), __jsx("span", {
        className: "txt_md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 17
        }
      }, "7.2k"))), __jsx("div", {
        className: "creators space-x-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "color_text txt_md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 16
        }
      }, " 2 items \xB7 Created by"), __jsx("div", {
        className: "avatars space-x-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 16
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "assets/img/avatars/avatar_1.png",
        alt: "Avatar",
        className: "avatar avatar-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 18
        }
      }))), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655,
          columnNumber: 16
        }
      }, __jsx("p", {
        className: "avatars_name txt_sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 17
        }
      }, " @Joshua_Bren... ")))))))));
    }
  }]);

  function Header(props) {
    var _this;

    (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, Header);

    _this = _super.call(this, props);

    (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "ethEnabled", /*#__PURE__*/(0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var accounts, currentAccount;
      return E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!window.ethereum) {
                _context.next = 10;
                break;
              }

              _context.next = 3;
              return ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 3:
              accounts = _context.sent;
              currentAccount = accounts[0];

              _this.setState({
                account: currentAccount
              });

              window.web3 = new Web3(window.ethereum);
              _this.web3 = window.web3;

              _this.renderTokensForOwner(currentAccount);

              return _context.abrupt("return", true);

            case 10:
              return _context.abrupt("return", false);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "renderTokensForOwner", /*#__PURE__*/function () {
      var _ref2 = (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(ownerAddress) {
        var contractAddreses, Tokenurl;
        return E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                contractAddreses = []; // initialise an empty array

                Tokenurl = "https://api.bscscan.com/api?module=account&action=tokennfttx&address=0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95&page=1&offset=100&startblock=0&endblock=999999999&sort=asc&apikey=7NIT76E4XCCTY17UZHARE5KZG9W2Y5TTSZ";
                _context2.next = 4;
                return fetch(Tokenurl).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  if (data.status == 0) {
                    //toggleLoading(false);
                    return;
                  }

                  var length = data.result.length; //console.log(length);

                  for (var i = 0; i < length; i++) {
                    if (contractAddreses.length == 0) {
                      contractAddreses.push(data.result[i].contractAddress);
                    } else {
                      var cnt = contractAddreses.length;
                      var has = 0;

                      for (var j = 0; j < cnt; j++) {
                        if (contractAddreses[j] == data.result[i].contractAddress) {
                          has = 1;
                          break;
                        }
                      }

                      if (has == 0) {
                        contractAddreses.push(data.result[i].contractAddress);
                      }
                    } //console.log(data.result[i].contractAddress);

                  } ///console.log(contractAddreses.length);

                });

              case 4:
                _this.loadBlockchainData();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
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
      imageContract: [],
      image_url: [],
      image_name: [],
      image_id: [],
      new_price: null,
      token_sale_contract: null,
      token_price: 0,
      approved: []
    };
    return _this;
  }

  (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Header, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        return E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                document.title = 'My NFT Collections';
                _context3.next = 3;
                return this.ethEnabled();

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = (0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
        var _this3 = this;

        var address, contract, totalNfts, i, Nftids, baseUrl;
        return E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // const networkData = NFTs.networks[this.networkId]
                //if (networkData) {
                //const abi = NFTs.abi
                address = '0xc54b96b04AA8828b63Cf250408E1084E9F6Ac6c8'; //networkData.address

                contract = new this.web3.eth.Contract(_contracts_NFT_json__WEBPACK_IMPORTED_MODULE_11__, address); // console.log(contract)

                /*this.setState({
                	image_contract: [...this.state.image_contract, address]
                });
                */

                this.setState({
                  contract: contract
                });
                _context4.next = 5;
                return contract.methods.balanceOf('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95').call();

              case 5:
                totalNfts = _context4.sent;
                i = 0;

              case 7:
                if (!(i < totalNfts)) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 10;
                return contract.methods.tokenOfOwnerByIndex('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95', i).call();

              case 10:
                Nftids = _context4.sent;
                this.setState({
                  image_id: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this.state.image_id), [Nftids])
                });
                _context4.next = 14;
                return contract.methods.baseURI().call();

              case 14:
                baseUrl = _context4.sent;
                _context4.next = 17;
                return fetch(baseUrl + Nftids).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  _this3.setState({
                    image_url: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this3.state.image_url), [data.image])
                  });

                  _this3.setState({
                    image_name: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this3.state.image_name), [data.name])
                  });

                  console.log('Name:' + data.name);
                  console.log('URL:' + data.image);
                });

              case 17:
                i++;
                _context4.next = 7;
                break;

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_10__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJDb2luR2Vja28iLCJyZXF1aXJlIiwiQ29pbkdlY2tvQ2xpZW50IiwiV2ViMyIsIndlYjMiLCJCTiIsInV0aWxzIiwiSGVhZGVyIiwiTG9naW5jb250ZW50IiwiTG9nb3V0Y29udGVudCIsInN0YXRlIiwiYWNjb3VudCIsImRpc3BsYXkiLCJiYWxhbmNlSW5CTkIiLCJ3YWxsZXRBZGRyZXNzIiwiZXRoRW5hYmxlZCIsIm1pbldpZHRoIiwiaW1hZ2VfaWQiLCJtYXAiLCJpZCIsImtleSIsImFwcHJvdmVkIiwib3duZXJzIiwiaW1hZ2VEYXRhX25hbWUiLCJpbWFnZURhdGFfcHJpY2UiLCJuZXdfcHJpY2UiLCJwYXJzZUZsb2F0IiwiQk5CaW5VU0QiLCJ0b0ZpeGVkIiwib3duZXJzQWRkcmVzcyIsImltYWdlRGF0YV91cmwiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Iiwid2lkdGgiLCJwcm9wcyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwiY3VycmVudEFjY291bnQiLCJzZXRTdGF0ZSIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsImNvbnRyYWN0Iiwic2FsZV9jb250cmFjdCIsInNhbGVfYWRkcmVzcyIsInRvdGFsU3VwcGx5IiwiaW1hZ2VzIiwiaW1hZ2VDb250cmFjdCIsImltYWdlX3VybCIsImltYWdlX25hbWUiLCJ0b2tlbl9zYWxlX2NvbnRyYWN0IiwidG9rZW5fcHJpY2UiLCJkb2N1bWVudCIsInRpdGxlIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG90YWxOZnRzIiwidG9rZW5PZk93bmVyQnlJbmRleCIsIk5mdGlkcyIsImJhc2VVUkkiLCJiYXNlVXJsIiwiaW1hZ2UiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsNkRBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLElBQUlGLFNBQUosRUFBeEI7O0FBRUEsSUFBTUcsSUFBSSxHQUFHRixtQkFBTyxDQUFDLG1EQUFELENBQXBCOztBQUNBLElBQU1HLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7QUFDQSxJQUFNRSxFQUFFLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXRCxFQUF0Qjs7SUFFTUUsTTs7Ozs7Ozs2QkFFTztBQUFBOztBQUNMLFVBQUlDLFlBQVksR0FBRyxNQUFuQjtBQUNOLFVBQUlDLGFBQWEsR0FBRyxPQUFwQjs7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUV0Qkgsb0JBQVksR0FBRyxNQUFmO0FBQ0FDLHFCQUFhLEdBQUcsTUFBaEI7QUFDRCxPQUpELE1BSUs7QUFDSkQsb0JBQVksR0FBRyxNQUFmO0FBQ0FDLHFCQUFhLEdBQUcsT0FBaEI7QUFFQTs7QUFFSyxhQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR1Q7QUFBUSxpQkFBUyxFQUFDLHFCQUFsQjtBQUF3QyxVQUFFLEVBQUMsUUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFB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QUlBLHdCQUFJLENBQUM1QyxRQUFMLENBQWM7QUFDRTJCLDhCQUFVLDZKQUFNLE1BQUksQ0FBQzNELEtBQUwsQ0FBVzJELFVBQWpCLElBQTZCbEIsSUFBSSxDQUFDb0MsSUFBbEM7QUFEWixtQkFBZDs7QUFJQUMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVF0QyxJQUFJLENBQUNvQyxJQUF6QjtBQUNBQyx5QkFBTyxDQUFDQyxHQUFSLENBQVksU0FBT3RDLElBQUksQ0FBQ21DLEtBQXhCO0FBQ0EsaUJBYkssQzs7O0FBWG9CL0IsaUJBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM3dCVG1DLDZDOztBQSt5QnJCLCtEQUFlbkYsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE5ZTI1ODdjMmY2YmU4YjI4ZjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTkZUcyBmcm9tIFwiLi4vLi4vLi4vLi4vY29udHJhY3RzL05GVC5qc29uXCI7ICAgXHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9nZXRXZWIzXCI7XHJcblxyXG5cclxuY29uc3QgQ29pbkdlY2tvID0gcmVxdWlyZSgnY29pbmdlY2tvLWFwaScpO1xyXG5jb25zdCBDb2luR2Vja29DbGllbnQgPSBuZXcgQ29pbkdlY2tvKCk7XHJcblxyXG5jb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIik7XHJcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xyXG5jb25zdCBCTiA9IHdlYjMudXRpbHMuQk47XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgTG9naW5jb250ZW50ID0gJ25vbmUnO1xyXG5cdFx0bGV0IExvZ291dGNvbnRlbnQgPSAnYmxvY2snO1xyXG5cdFx0aWYgKHRoaXMuc3RhdGUuYWNjb3VudCkge1xyXG5cclxuXHRcdFx0IExvZ2luY29udGVudCA9ICdmbGV4JztcclxuXHRcdFx0IExvZ291dGNvbnRlbnQgPSAnbm9uZSc7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0TG9naW5jb250ZW50ID0gJ25vbmUnO1xyXG5cdFx0XHRMb2dvdXRjb250ZW50ID0gJ2Jsb2NrJztcclxuXHJcblx0XHR9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJfXzEganMtaGVhZGVyXCIgaWQ9XCJoZWFkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIGpzLWhlYWRlci13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImluZGV4Lmh0bWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJsb2dvX2pzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9sb2dvcy9sb2dvLXdoaXRlLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImxvZ29cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0yMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCAgICA8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCIgaHJlZj1cIkV4cGxvcmUuaHRtbFwiPiBFeHBsb3JlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIiBocmVmPVwiTWFya2V0cGxhY2UuaHRtbFwiPiBNYXJrZXRwbGFjZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgc3R5bGU9e3sgZGlzcGxheTogTG9naW5jb250ZW50IH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiIGhyZWY9XCJDb2xsZWN0aW9ucy5odG1sXCI+IE15IENvbGxlY3Rpb25zPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImhlYWRlcl9fcmVzdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1zZWFyY2gtbGluZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgIHN0eWxlPXt7IGRpc3BsYXk6IExvZ2luY29udGVudCB9fSBjbGFzc05hbWU9XCJoZWFkZXJfX2F2YXRhclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5zdGF0ZS5iYWxhbmNlSW5CTkJ9IDxzdHJvbmc+Qk5CPC9zdHJvbmc+IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9XCJhc3NldHMvaW1nL2F2YXRhcnMvYXZhdGFyXzIucG5nXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyX3BvcHVwIHNwYWNlLXktMjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+eyB0aGlzLnN0YXRlLndhbGxldEFkZHJlc3MgfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLWZpbGUtY29weS1saW5lXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBzcGFjZS14LTEwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJjb2luXCIgc3JjPVwiYXNzZXRzL2ltZy9sb2dvcy9jb2luLnN2Z1wiIGFsdD1cIi9cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmVlbi01MDBcIj57dGhpcy5zdGF0ZS5iYWxhbmNlSW5CTkJ9IEJOQjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5rcyBzcGFjZS15LTEwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIkNvbGxlY3Rpb25zLmh0bWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLWxhbmRzY2FwZS1saW5lXCI+PC9pPiA8c3Bhbj4gTXkgaXRlbXM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogTG9naW5jb250ZW50IH19IGNsYXNzTmFtZT1cImhlYWRlcl9fYnRuc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGhyZWY9XCJjcmVhdGUtbmZ0Lmh0bWxcIj5DcmVhdGU8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PiBcclxuXHQgICAgXHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogTG9nb3V0Y29udGVudCB9fSBjbGFzc05hbWU9XCJoZWFkZXJfX2J0bnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZ3JhZCBidG4tc21cIiBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuZXRoRW5hYmxlZH0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS13YWxsZXQtMy1saW5lXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb25uZWN0IHdhbGxldDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgaWQ9XCJjb25uZWN0YnRuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCI0NVwiIHNyYz1cImFzc2V0cy9pbWcvaWNvbnMvbWV0YW1hc2suc3ZnXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnVyZ2VyIGpzLWhlYWRlci1idXJnZXJcIj48L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUganMtaGVhZGVyLW1vYmlsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGVfX21lbnUgc3BhY2UteS00MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS15LTIwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPGxpPiA8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiIGhyZWY9XCJFeHBsb3JlLmh0bWxcIj4gRXhwbG9yZTwvYT4gPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPiA8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiIGhyZWY9XCJNYXJrZXRwbGFjZS5odG1sXCI+IE1hcmtldHBsYWNlPC9hPiA8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgc3R5bGU9e3sgZGlzcGxheTogTG9naW5jb250ZW50IH19PiA8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiIGhyZWY9XCJDb2xsZWN0aW9ucy5odG1sXCI+IENvbGxlY3Rpb25zPC9hPiA8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBMb2dvdXRjb250ZW50IH19IGNsYXNzTmFtZT1cInNwYWNlLXktMjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZ3JhZCBidG4tc21cIiBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuZXRoRW5hYmxlZH0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS13YWxsZXQtMy1saW5lXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbm5lY3Qgd2FsbGV0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IExvZ2luY29udGVudCB9fSBjbGFzc05hbWU9XCJzcGFjZS15LTIwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWdyYWQgYnRuLXNtXCIgaHJlZj1cImNyZWF0ZS1uZnQuaHRtbFwiIG9uQ2xpY2s9e3RoaXMuZXRoRW5hYmxlZH0gPkNyZWF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJoZXJvX21hcmtldHBsYWNlIGJnX3doaXRlXCI+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5NYXJrZXRwbGFjZTwvaDE+ICAgICAgXHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmdfd2hpdGUgYm9yZGVyLWIgcHktMjBcIj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9jYXRlZ29yaWVzIHNwYWNlLXgtMjBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNvbG9yX2JyYW5kXCI+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQWxsIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPiA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1nYW1lcGFkLWxpbmVcIj48L2k+IDxzcGFuPiBHYW1lcyA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWJydXNoLWxpbmVcIj48L2k+IDxzcGFuPiBBcnQgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPiA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1zdG9jay1saW5lXCI+PC9pPiA8c3Bhbj4gVHJhZGluZyBDYXJkcyA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLW11c2ljLWxpbmVcIj48L2k+IDxzcGFuPiBNdXNpYyA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWdsb2JhbC1saW5lXCI+PC9pPiA8c3Bhbj4gRG9tYWluIE5hbWVzIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktZW1vdGlvbi1sYXVnaC1saW5lXCI+PC9pPiA8c3Bhbj4gTWVtZXMgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPiA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1sYXlvdXQtNC1saW5lXCI+PC9pPiA8c3Bhbj4gQ29sbGVjdGlibGVzIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgPC91bD4gICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIG10LTEwMFwiPlxyXG5cdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faGVhZFwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGUgbWItMjBcIj4gTWFya2V0cGxhY2U8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLWF1dG9cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9zbVwiIHN0eWxlPXt7IG1pbldpZHRoOlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21heC1jb250ZW50JyB9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZJTFRFUiBCWTpcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9jYXRlZ29yaWVzIHNwYWNlLXgtMjBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzd2l0Y2gxXCIgLz48bGFiZWxcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwic3dpdGNoMVwiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhhcyBsaXN0IHByaWNlIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic3dpdGNoMlwiIGNoZWNrZWQvPjxsYWJlbFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJzd2l0Y2gyXCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzIG9wZW4gb2ZmZXIgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzd2l0Y2gzXCIgLz48bGFiZWxcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwic3dpdGNoM1wiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IE93bmVkIGJ5IGNyZWF0b3IgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzd2l0Y2g0XCIgLz48bGFiZWxcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwic3dpdGNoNFwiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhhcyBzb2xkIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctYXV0b1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgYWxpZ24taXRlbXMtY2VudGVyIHNtOm10LTIwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X3NtXCI+IFNPUlQgQlk6IDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjZW50IEFjdGl2ZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2VcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVyZTwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlIHBvcHVwXCIgaWQ9XCJwb3B1cF9iaWRfc3VjY2Vzc1wiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCJcclxuXHRcdFx0ICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcblx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBzcGFjZS15LTIwIHAtNDBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+WW91ciBCaWRkaW5nXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWNjZXNzZnVseSBBZGRlZDwvaDM+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+eW91ciBiaWQgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYm9sZFwiPigxNkVUSCkgPC9zcGFuPiBoYXMgYmVlbiBsaXN0aW5nXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBvdXIgZGF0YWJhc2U8L3A+XHJcblx0XHRcdCAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIHctZnVsbFwiPiBXYXRjaCB0aGUgbGlzdGluZ3M8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGUgcG9wdXBcIiBpZD1cInBvcHVwX2hpc3RvcnlcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiXHJcblx0XHRcdCAgICAgICAgXHRhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuXHRcdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgc3BhY2UteS0yMCBwLTQwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8aDQ+IEhpc3RvcnkgPC9oND5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRvcl9pdGVtIGNyZWF0b3JfY2FyZCBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFycyBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWRnZVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImFzc2V0cy9pbWcvaWNvbnMvQmFkZ2Uuc3ZnXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9hdmF0YXJzL2F2YXRhcl8xLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQXZhdGFyXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLW1kXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIj5CaWQgYWNjZXB0ZWQgPHNwYW5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2xvcl9icmFuZFwiPjFcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRFVEg8L3NwYW4+IGJ5IDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrIHR4dFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdF9ib2xkXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiI1wiPmF5b3ViPC9hPjwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUgY29sb3JfdGV4dFwiPjI4LzA2LzIwMjEsIDEyOjA4PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjcmVhdG9yX2l0ZW0gY3JlYXRvcl9jYXJkIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmF0YXJzIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhZGdlXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pY29ucy9CYWRnZS5zdmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2F2YXRhcnMvYXZhdGFyXzIucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJBdmF0YXJcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItbWRcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiPkJpZCBhY2NlcHRlZCA8c3BhblxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbG9yX2JyYW5kXCI+M1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdEVUSDwvc3Bhbj4gYnkgPGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2sgdHh0XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0X2JvbGRcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCI+bW9uaXI8L2E+PC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZSBjb2xvcl90ZXh0XCI+MjIvMDUvMjAyMSwgMTI6MDg8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMzBfcmVzZXRcIj5cclxuXHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmltYWdlX2lkLm1hcCgoaWQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hcHByb3ZlZFtrZXldICYmICh0aGlzLnN0YXRlLm93bmVyc1trZXldICE9PSB0aGlzLnN0YXRlLmFjY291bnQpKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZSBwb3B1cFwiIGlkPXsgXCJwb3B1cF9hcHByb3ZlXCIra2V5IH0gdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgc3BhY2UteS0yMCBwLTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QXBwcm92ZSBmb3Igc2FsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57IHRoaXMuc3RhdGUuaW1hZ2VEYXRhX25hbWVba2V5XSB9IDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCI+eyB0aGlzLnN0YXRlLmltYWdlRGF0YV9wcmljZVtrZXldIH0gQk5CPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IHRoaXMuc3RhdGUuaW1hZ2VEYXRhX3ByaWNlW2tleV0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gWW91J3IgcGF5aW5nIGxpc3RpbmcgZmVlIGZvciBzYWxlIGFwcHJvdmFsOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gbGlzdGluZyBmZWU6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgY29sb3JfYmxhY2sgdHh0IF9ib2xkXCI+IDAuMDQ1IEJOQi8keyBwYXJzZUZsb2F0KHRoaXMuc3RhdGUuQk5CaW5VU0QgKiAwLjA0NSkudG9GaXhlZCgyKX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBDdXJyZW50IHByaWNlOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGNvbG9yX2JsYWNrIHR4dCBfYm9sZFwiPiB7IHRoaXMuc3RhdGUuaW1hZ2VEYXRhX3ByaWNlW2tleV19IEJOQi8ke3BhcnNlRmxvYXQodGhpcy5zdGF0ZS5CTkJpblVTRCAqIHRoaXMuc3RhdGUuaW1hZ2VEYXRhX3ByaWNlW2tleV0pLnRvRml4ZWQoMikgfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjcG9wdXBfYmlkX3N1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4gQXBwcm92ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faXRlbSBmb3VyXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX2JvZHkgc3BhY2UteS0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyZWF0b3JzIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmF0YXJzIHNwYWNlLXgtM1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvYXZhdGFycy9hdmF0YXJfMS5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJBdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImF2YXRhcnNfbmFtZSB0eHRfeHNcIj57IHRoaXMuc3RhdGUub3duZXJzQWRkcmVzc1trZXldIH08L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfaGVhZFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8YSBocmVmPXtcIm5mdC1kZXRhaWwuaHRtbD9pdGVtX2lkPVwiK2tleX0gPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpbWcgc3JjPXsgdGhpcy5zdGF0ZS5pbWFnZURhdGFfdXJsW2tleV0gfVxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpa2VzIHNwYWNlLXgtM1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLWhlYXJ0LTMtZmlsbFwiPjwvaT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0eHRfc21cIj4xLjJrPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImNhcmRfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmltYWdlRGF0YV9uYW1lW2tleV0gfVxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9oNj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9mb290ZXIgZC1ibG9jayBzcGFjZS15LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9mb290ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidHh0X3NtXCI+UHJpY2U6IDxzcGFuXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sb3JfZ3JlZW5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHR0eHRfc21cIj57ICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJykuZm9ybWF0KHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5pbWFnZURhdGFfcHJpY2Vba2V5XSkudG9GaXhlZCgyKSl9IE1OVy8keyBwYXJzZUZsb2F0KDApLnRvRml4ZWQoMikgfTwvc3Bhbj48L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoclwiPjwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgc3BhY2UteC0xMFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1oaXN0b3J5LWxpbmVcIj48L2k+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ2aWV3X2hpc3RvcnlcIiBocmVmPVwiI1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PVwiI3BvcHVwX2hpc3RvcnlcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfc21cIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCdhdXRvJyB9fT5WaWV3XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0SGlzdG9yeTwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdCAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiAgaHJlZj17XCJuZnQtZGV0YWlsLmh0bWw/aXRlbV9pZD1cIitrZXl9XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ+VmlldzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHQ8L2Rpdj48Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBtdC0xMDBcIj5cclxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2hlYWRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlIG1iLTIwXCI+IENvbGxlY3Rpb25zPC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfc21cIiBzdHlsZT17eyBtaW5XaWR0aDpcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXgtY29udGVudCcgfX0+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBGSUxURVIgQlk6XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVfY2F0ZWdvcmllcyBzcGFjZS14LTIwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2g3XCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PGxhYmVsIGZvcj1cInN3aXRjaDdcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXMgbGlzdCBwcmljZSA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoOFwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48bGFiZWwgZm9yPVwic3dpdGNoOFwiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhhcyBvcGVuIG9mZmVyIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2g5XCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PGxhYmVsIGZvcj1cInN3aXRjaDlcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBPd25lZCBieSBjcmVhdG9yIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gxMFwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjxsYWJlbCBmb3I9XCJzd2l0Y2gxMFwiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhhcyBzb2xkIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLWF1dG9cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIGFsaWduLWl0ZW1zLWNlbnRlciBzbTptdC0yMFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9zbVwiPiBTT1JUIEJZOiA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VudCBBY3RpdmVcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlcmU8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTMwX3Jlc2V0XCI+XHJcblx0XHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS04XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnMgc3BhY2UteS0xMCBtYi0zMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZXMtYm94IHNwYWNlLXktMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcF9pbWdzXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV85LnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xMC5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTEucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xMi5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uc19mb290ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uX3RpdGxlXCI+PGEgaHJlZj1cIiNcIj5DcmVhdGl2ZSBBcnQgY29sbGVjdGlvbjwvYT48L2g1PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaWtlcyBzcGFjZS14LTNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktaGVhcnQtMy1maWxsXCI+PC9pPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0eHRfbWRcIj4yLjFrPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRvcnMgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfbWRcIj4gNSBpdGVtcyDCtyBDcmVhdGVkIGJ5PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmF0YXJzIHNwYWNlLXgtNVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvYXZhdGFycy9hdmF0YXJfMi5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0YWx0PVwiQXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1zbVwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXZhdGFyc19uYW1lIHR4dF9zbVwiPiBAd2lsbGlhbV9qYW15Li4uIDwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLThcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9ucyBzcGFjZS15LTEwIG1iLTMwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnNfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlcy1ib3ggc3BhY2UteS0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wX2ltZ3NcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzEzLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xNC5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTUucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xNi5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uc19mb290ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uX3RpdGxlXCI+PGEgaHJlZj1cIiNcIj5Db2xvcmZ1bCBBYnN0cmFjdCBQYWludGluZzwvYT48L2g1PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaWtlcyBzcGFjZS14LTNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktaGVhcnQtMy1maWxsXCI+PC9pPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0eHRfbWRcIj4zLjVrPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRvcnMgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfbWRcIj4gNyBpdGVtcyDCtyBDcmVhdGVkIGJ5PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmF0YXJzIHNwYWNlLXgtNVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvYXZhdGFycy9hdmF0YXJfMy5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0YWx0PVwiQXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1zbVwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXZhdGFyc19uYW1lIHR4dF9zbVwiPiBAYWxleGlzX2Zlbm4uLi4gPC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tOFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zIHNwYWNlLXktMTAgbWItMzBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uc19pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzLWJveCBzcGFjZS15LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BfaW1nc1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTcucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzE4LnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xOS5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzIwLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zX2Zvb3RlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25fdGl0bGVcIj48YSBocmVmPVwiI1wiPk1vZGVybiBBcnQgY29sbGVjdGlvbjwvYT48L2g1PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaWtlcyBzcGFjZS14LTNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktaGVhcnQtMy1maWxsXCI+PC9pPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0eHRfbWRcIj43LjJrPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRvcnMgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfbWRcIj4gMiBpdGVtcyDCtyBDcmVhdGVkIGJ5PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmF0YXJzIHNwYWNlLXgtNVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvYXZhdGFycy9hdmF0YXJfMS5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0YWx0PVwiQXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1zbVwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXZhdGFyc19uYW1lIHR4dF9zbVwiPiBASm9zaHVhX0JyZW4uLi4gPC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjY291bnQ6ICcnLFxyXG4gICAgICAgICAgICBiYWxhbmNlSW5CTkI6IDAsXHJcbiAgICAgICAgICAgIEJOQmluVVNEOiAwLFxyXG4gICAgICAgICAgICB3YWxsZXRBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgY29udHJhY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHNhbGVfY29udHJhY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHNhbGVfYWRkcmVzczogbnVsbCxcclxuICAgICAgICAgICAgdG90YWxTdXBwbHk6IDAsXHJcbiAgICAgICAgICAgIGltYWdlczogW10sXHJcbiAgICAgICAgICAgIG93bmVyczogW10sXHJcblx0XHRcdGltYWdlQ29udHJhY3Q6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZV91cmw6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZV9uYW1lOiBbXSxcclxuXHRcdFx0aW1hZ2VfaWQ6IFtdLFxyXG4gICAgICAgICAgICBuZXdfcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgIHRva2VuX3NhbGVfY29udHJhY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHRva2VuX3ByaWNlOiAwLFxyXG4gICAgICAgICAgICBhcHByb3ZlZDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRkb2N1bWVudC50aXRsZSA9ICdNeSBORlQgQ29sbGVjdGlvbnMnO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXRoRW5hYmxlZCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZXRoRW5hYmxlZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdCBcclxuXHRcdGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGN1cnJlbnRBY2NvdW50IH0pO1xyXG5cdFx0XHR3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcblx0XHRcdHRoaXMud2ViMyA9IHdpbmRvdy53ZWIzO1xyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJUb2tlbnNGb3JPd25lcihjdXJyZW50QWNjb3VudClcclxuXHRcdFx0XHJcblx0XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG4gcmVuZGVyVG9rZW5zRm9yT3duZXIgPSBhc3luYyhvd25lckFkZHJlc3MpID0+IHtcclxuICBcclxuXHR2YXIgY29udHJhY3RBZGRyZXNlcyA9IFtdOyAvLyBpbml0aWFsaXNlIGFuIGVtcHR5IGFycmF5XHJcbiAgXHJcblx0dmFyIFRva2VudXJsID0gYGh0dHBzOi8vYXBpLmJzY3NjYW4uY29tL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249dG9rZW5uZnR0eCZhZGRyZXNzPTB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NSZwYWdlPTEmb2Zmc2V0PTEwMCZzdGFydGJsb2NrPTAmZW5kYmxvY2s9OTk5OTk5OTk5JnNvcnQ9YXNjJmFwaWtleT03TklUNzZFNFhDQ1RZMTdVWkhBUkU1S1pHOVcyWTVUVFNaYDtcclxuXHRcclxuXHRhd2FpdCBmZXRjaChUb2tlbnVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRpZiAoZGF0YS5zdGF0dXMgPT0gMCkge1xyXG5cdFx0XHQvL3RvZ2dsZUxvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgbGVuZ3RoID0gZGF0YS5yZXN1bHQubGVuZ3RoO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhsZW5ndGgpO1xyXG5cdCAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7XHJcbiAgXHJcblx0XHRpZihjb250cmFjdEFkZHJlc2VzLmxlbmd0aCA9PSAwKXtcclxuXHRcdCAgY29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgXHJcblx0XHR9ZWxzZXtcclxuXHQgICBcclxuXHRcdCAgdmFyIGNudCA9IGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoO1xyXG5cdFx0ICB2YXIgaGFzID0gMDtcclxuXHRcdCAgZm9yKHZhciBqPTA7ajxjbnQ7aisrKXtcclxuICBcclxuXHRcdFx0IGlmKGNvbnRyYWN0QWRkcmVzZXNbal0gPT0gZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKXtcclxuXHRcdFx0XHQgaGFzID0gMTtcclxuXHRcdFx0XHQgYnJlYWs7XHJcblx0XHRcdCB9XHJcblx0XHQgIH1cclxuICBcclxuXHRcdCAgaWYgKGhhcyA9PSAwKXtcclxuICBcclxuXHRcdFx0Y29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgXHJcblx0XHQgIH1cclxuXHRcdCAgXHJcbiAgXHJcblx0XHR9XHJcbiAgXHJcblx0XHQvL2NvbnNvbGUubG9nKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgXHJcblx0ICAgfVxyXG5cdFx0ICBcclxuXHRcdFxyXG5cdFx0Ly8vY29uc29sZS5sb2coY29udHJhY3RBZGRyZXNlcy5sZW5ndGgpO1xyXG5cdH0pO1xyXG4gICBcclxuXHR0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgIC8vIGNvbnN0IG5ldHdvcmtEYXRhID0gTkZUcy5uZXR3b3Jrc1t0aGlzLm5ldHdvcmtJZF1cclxuICAgICAgICAvL2lmIChuZXR3b3JrRGF0YSkge1xyXG4gICAgICAgICAgICAvL2NvbnN0IGFiaSA9IE5GVHMuYWJpXHJcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSAnMHhjNTRiOTZiMDRBQTg4MjhiNjNDZjI1MDQwOEUxMDg0RTlGNkFjNmM4Jy8vbmV0d29ya0RhdGEuYWRkcmVzc1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB0aGlzLndlYjMuZXRoLkNvbnRyYWN0KE5GVHMsIGFkZHJlc3MpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRyYWN0KVxyXG5cclxuXHRcdFx0Lyp0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRpbWFnZV9jb250cmFjdDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfY29udHJhY3QsIGFkZHJlc3NdXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSlcclxuICAgICAgICAgICAgY29uc3QgdG90YWxOZnRzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YoJzB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NScpLmNhbGwoKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRvdGFsTmZ0cyk7XHJcblx0XHRcdGZvcih2YXIgaT0wO2kgPCB0b3RhbE5mdHM7aSsrKXtcclxuXHRcdFx0XHRjb25zdCBOZnRpZHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnRva2VuT2ZPd25lckJ5SW5kZXgoJzB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NScsaSkuY2FsbCgpXHJcblxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfaWQsIE5mdGlkc11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHRcdFx0XHR2YXIgYmFzZVVybCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYmFzZVVSSSgpLmNhbGwoKTtcclxuXHJcblx0XHRcdGF3YWl0IGZldGNoKGJhc2VVcmwrTmZ0aWRzKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbihkYXRhID0+IHtcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdXJsOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV91cmwsIGRhdGEuaW1hZ2VdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV9uYW1lOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9uYW1lLCBkYXRhLm5hbWVdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnTmFtZTonK2RhdGEubmFtZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1VSTDonK2RhdGEuaW1hZ2UpO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKE5mdGlkcyk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==