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

        var address, contract, totalNfts, _loop, i, baseUrl;

        return E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
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
                _context5.next = 5;
                return contract.methods.balanceOf('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95').call();

              case 5:
                totalNfts = _context5.sent;
                _loop = /*#__PURE__*/E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _loop() {
                  var Nftids;
                  return E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _loop$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return contract.methods.tokenOfOwnerByIndex('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95', i).call();

                        case 2:
                          Nftids = _context4.sent;

                          _this3.setState({
                            image_id: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this3.state.image_id), [Nftids])
                          });

                          _context4.next = 6;
                          return contract.methods.baseURI().call();

                        case 6:
                          baseUrl = _context4.sent;
                          _context4.next = 9;
                          return fetch(baseUrl + Nftids).then(function (response) {
                            return response.json();
                          }).then(function (data) {
                            _this3.setState({
                              image_url: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this3.state.image_url), [data.image])
                            });

                            _this3.setState({
                              image_name: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this3.state.image_name), [data.name])
                            });

                            console.log('Ids:' + Nftids);
                            console.log('Name:' + data.name);
                            console.log('URL:' + data.image);
                          });

                        case 9:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _loop);
                });
                i = 0;

              case 8:
                if (!(i < totalNfts)) {
                  _context5.next = 13;
                  break;
                }

                return _context5.delegateYield(_loop(), "t0", 10);

              case 10:
                i++;
                _context5.next = 8;
                break;

              case 13:
              case "end":
                return _context5.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJDb2luR2Vja28iLCJyZXF1aXJlIiwiQ29pbkdlY2tvQ2xpZW50IiwiV2ViMyIsIndlYjMiLCJCTiIsInV0aWxzIiwiSGVhZGVyIiwiTG9naW5jb250ZW50IiwiTG9nb3V0Y29udGVudCIsInN0YXRlIiwiYWNjb3VudCIsImRpc3BsYXkiLCJiYWxhbmNlSW5CTkIiLCJ3YWxsZXRBZGRyZXNzIiwiZXRoRW5hYmxlZCIsIm1pbldpZHRoIiwiaW1hZ2VfaWQiLCJtYXAiLCJpZCIsImtleSIsImFwcHJvdmVkIiwib3duZXJzIiwiaW1hZ2VEYXRhX25hbWUiLCJpbWFnZURhdGFfcHJpY2UiLCJuZXdfcHJpY2UiLCJwYXJzZUZsb2F0IiwiQk5CaW5VU0QiLCJ0b0ZpeGVkIiwib3duZXJzQWRkcmVzcyIsImltYWdlRGF0YV91cmwiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Iiwid2lkdGgiLCJwcm9wcyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwiY3VycmVudEFjY291bnQiLCJzZXRTdGF0ZSIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsImNvbnRyYWN0Iiwic2FsZV9jb250cmFjdCIsInNhbGVfYWRkcmVzcyIsInRvdGFsU3VwcGx5IiwiaW1hZ2VzIiwiaW1hZ2VDb250cmFjdCIsImltYWdlX3VybCIsImltYWdlX25hbWUiLCJ0b2tlbl9zYWxlX2NvbnRyYWN0IiwidG9rZW5fcHJpY2UiLCJkb2N1bWVudCIsInRpdGxlIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG90YWxOZnRzIiwidG9rZW5PZk93bmVyQnlJbmRleCIsIk5mdGlkcyIsImJhc2VVUkkiLCJiYXNlVXJsIiwiaW1hZ2UiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsNkRBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLElBQUlGLFNBQUosRUFBeEI7O0FBRUEsSUFBTUcsSUFBSSxHQUFHRixtQkFBTyxDQUFDLG1EQUFELENBQXBCOztBQUNBLElBQU1HLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7QUFDQSxJQUFNRSxFQUFFLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXRCxFQUF0Qjs7SUFFTUUsTTs7Ozs7Ozs2QkFFTztBQUFBOztBQUNMLFVBQUlDLFlBQVksR0FBRyxNQUFuQjtBQUNOLFVBQUlDLGFBQWEsR0FBRyxPQUFwQjs7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUV0Qkgsb0JBQVksR0FBRyxNQUFmO0FBQ0FDLHFCQUFhLEdBQUcsTUFBaEI7QUFDRCxPQUpELE1BSUs7QUFDSkQsb0JBQVksR0FBRyxNQUFmO0FBQ0FDLHFCQUFhLEdBQUcsT0FBaEI7QUFFQTs7QUFFSyxhQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR1Q7QUFBUSxpQkFBUyxFQUFDLHFCQUFsQjtBQUF3QyxVQUFFLEVBQUMsUUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFB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YztBQUNFMkIsd0NBQVUsNkpBQU0sTUFBSSxDQUFDM0QsS0FBTCxDQUFXMkQsVUFBakIsSUFBNkJsQixJQUFJLENBQUNvQyxJQUFsQztBQURaLDZCQUFkOztBQUlBQyxtQ0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT04sTUFBbkI7QUFDQUssbUNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVF0QyxJQUFJLENBQUNvQyxJQUF6QjtBQUNBQyxtQ0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT3RDLElBQUksQ0FBQ21DLEtBQXhCO0FBQ0EsMkJBZEssQzs7Ozs7Ozs7O0FBWEUvQixpQixHQUFFLEM7OztzQkFBRUEsQ0FBQyxHQUFHMEIsUzs7Ozs7Ozs7QUFBVTFCLGlCQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTN3QlRtQyw2Qzs7QUFnekJyQiwrREFBZW5GLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45OWIzY2FhMmVmOTk0ZjM0YWQ4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5GVHMgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnRyYWN0cy9ORlQuanNvblwiOyAgIFxyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vLi4vLi4vLi4vZ2V0V2ViM1wiO1xyXG5cclxuXHJcbmNvbnN0IENvaW5HZWNrbyA9IHJlcXVpcmUoJ2NvaW5nZWNrby1hcGknKTtcclxuY29uc3QgQ29pbkdlY2tvQ2xpZW50ID0gbmV3IENvaW5HZWNrbygpO1xyXG5cclxuY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpO1xyXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoKTtcclxuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IExvZ2luY29udGVudCA9ICdub25lJztcclxuXHRcdGxldCBMb2dvdXRjb250ZW50ID0gJ2Jsb2NrJztcclxuXHRcdGlmICh0aGlzLnN0YXRlLmFjY291bnQpIHtcclxuXHJcblx0XHRcdCBMb2dpbmNvbnRlbnQgPSAnZmxleCc7XHJcblx0XHRcdCBMb2dvdXRjb250ZW50ID0gJ25vbmUnO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdExvZ2luY29udGVudCA9ICdub25lJztcclxuXHRcdFx0TG9nb3V0Y29udGVudCA9ICdibG9jayc7XHJcblxyXG5cdFx0fVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyX18xIGpzLWhlYWRlclwiIGlkPVwiaGVhZGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlciBqcy1oZWFkZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJpbmRleC5odG1sXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwibG9nb19qc1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvbG9nb3MvbG9nby13aGl0ZS5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJsb2dvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQgICAgPGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiIGhyZWY9XCJFeHBsb3JlLmh0bWxcIj4gRXhwbG9yZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCIgaHJlZj1cIk1hcmtldHBsYWNlLmh0bWxcIj4gTWFya2V0cGxhY2U8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIHN0eWxlPXt7IGRpc3BsYXk6IExvZ2luY29udGVudCB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIiBocmVmPVwiQ29sbGVjdGlvbnMuaHRtbFwiPiBNeSBDb2xsZWN0aW9uczwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFkZXJfX3Jlc3VsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktc2VhcmNoLWxpbmVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2ICBzdHlsZT17eyBkaXNwbGF5OiBMb2dpbmNvbnRlbnQgfX0gY2xhc3NOYW1lPVwiaGVhZGVyX19hdmF0YXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3RoaXMuc3RhdGUuYmFsYW5jZUluQk5CfSA8c3Ryb25nPkJOQjwvc3Ryb25nPiA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPVwiYXNzZXRzL2ltZy9hdmF0YXJzL2F2YXRhcl8yLnBuZ1wiIGFsdD1cImF2YXRhclwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcl9wb3B1cCBzcGFjZS15LTIwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnsgdGhpcy5zdGF0ZS53YWxsZXRBZGRyZXNzIH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtbC0yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1maWxlLWNvcHktbGluZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiY29pblwiIHNyYz1cImFzc2V0cy9pbWcvbG9nb3MvY29pbi5zdmdcIiBhbHQ9XCIvXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JlZW4tNTAwXCI+e3RoaXMuc3RhdGUuYmFsYW5jZUluQk5CfSBCTkI8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhyXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlua3Mgc3BhY2UteS0xMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJDb2xsZWN0aW9ucy5odG1sXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1sYW5kc2NhcGUtbGluZVwiPjwvaT4gPHNwYW4+IE15IGl0ZW1zPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IExvZ2luY29udGVudCB9fSBjbGFzc05hbWU9XCJoZWFkZXJfX2J0bnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBocmVmPVwiY3JlYXRlLW5mdC5odG1sXCI+Q3JlYXRlPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0ICAgIFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IExvZ291dGNvbnRlbnQgfX0gY2xhc3NOYW1lPVwiaGVhZGVyX19idG5zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWdyYWQgYnRuLXNtXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmV0aEVuYWJsZWR9ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktd2FsbGV0LTMtbGluZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29ubmVjdCB3YWxsZXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGlkPVwiY29ubmVjdGJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiNDVcIiBzcmM9XCJhc3NldHMvaW1nL2ljb25zL21ldGFtYXNrLnN2Z1wiIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1cmdlciBqcy1oZWFkZXItYnVyZ2VyXCI+PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlIGpzLWhlYWRlci1tb2JpbGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlX19tZW51IHNwYWNlLXktNDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteS0yMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxsaT4gPGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIiBocmVmPVwiRXhwbG9yZS5odG1sXCI+IEV4cGxvcmU8L2E+IDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT4gPGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIiBocmVmPVwiTWFya2V0cGxhY2UuaHRtbFwiPiBNYXJrZXRwbGFjZTwvYT4gPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIHN0eWxlPXt7IGRpc3BsYXk6IExvZ2luY29udGVudCB9fT4gPGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIiBocmVmPVwiQ29sbGVjdGlvbnMuaHRtbFwiPiBDb2xsZWN0aW9uczwvYT4gPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogTG9nb3V0Y29udGVudCB9fSBjbGFzc05hbWU9XCJzcGFjZS15LTIwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLWdyYWQgYnRuLXNtXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmV0aEVuYWJsZWR9ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktd2FsbGV0LTMtbGluZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb25uZWN0IHdhbGxldDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBMb2dpbmNvbnRlbnQgfX0gY2xhc3NOYW1lPVwic3BhY2UteS0yMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmFkIGJ0bi1zbVwiIGhyZWY9XCJjcmVhdGUtbmZ0Lmh0bWxcIiBvbkNsaWNrPXt0aGlzLmV0aEVuYWJsZWR9ID5DcmVhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwiaGVyb19tYXJrZXRwbGFjZSBiZ193aGl0ZVwiPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TWFya2V0cGxhY2U8L2gxPiAgICAgIFxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnX3doaXRlIGJvcmRlci1iIHB5LTIwXCI+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVfY2F0ZWdvcmllcyBzcGFjZS14LTIwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjb2xvcl9icmFuZFwiPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEFsbCA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktZ2FtZXBhZC1saW5lXCI+PC9pPiA8c3Bhbj4gR2FtZXMgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPiA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1icnVzaC1saW5lXCI+PC9pPiA8c3Bhbj4gQXJ0IDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktc3RvY2stbGluZVwiPjwvaT4gPHNwYW4+IFRyYWRpbmcgQ2FyZHMgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPiA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1tdXNpYy1saW5lXCI+PC9pPiA8c3Bhbj4gTXVzaWMgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPiA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1nbG9iYWwtbGluZVwiPjwvaT4gPHNwYW4+IERvbWFpbiBOYW1lcyA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWVtb3Rpb24tbGF1Z2gtbGluZVwiPjwvaT4gPHNwYW4+IE1lbWVzIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktbGF5b3V0LTQtbGluZVwiPjwvaT4gPHNwYW4+IENvbGxlY3RpYmxlcyA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgIDwvdWw+ICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBtdC0xMDBcIj5cclxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2hlYWRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlIG1iLTIwXCI+IE1hcmtldHBsYWNlPC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfc21cIiBzdHlsZT17eyBtaW5XaWR0aDpcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXgtY29udGVudCcgfX0+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBGSUxURVIgQlk6XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVfY2F0ZWdvcmllcyBzcGFjZS14LTIwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic3dpdGNoMVwiIC8+PGxhYmVsXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cInN3aXRjaDFcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXMgbGlzdCBwcmljZSA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInN3aXRjaDJcIiBjaGVja2VkLz48bGFiZWxcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwic3dpdGNoMlwiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhhcyBvcGVuIG9mZmVyIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic3dpdGNoM1wiIC8+PGxhYmVsXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cInN3aXRjaDNcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBPd25lZCBieSBjcmVhdG9yIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic3dpdGNoNFwiIC8+PGxhYmVsXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cInN3aXRjaDRcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXMgc29sZCA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLWF1dG9cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIGFsaWduLWl0ZW1zLWNlbnRlciBzbTptdC0yMFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9zbVwiPiBTT1JUIEJZOiA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VudCBBY3RpdmVcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlcmU8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZSBwb3B1cFwiIGlkPVwicG9wdXBfYmlkX3N1Y2Nlc3NcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiXHJcblx0XHRcdCAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgc3BhY2UteS0yMCBwLTQwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPllvdXIgQmlkZGluZ1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VjY2Vzc2Z1bHkgQWRkZWQ8L2gzPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPnlvdXIgYmlkIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2JvbGRcIj4oMTZFVEgpIDwvc3Bhbj4gaGFzIGJlZW4gbGlzdGluZ1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gb3VyIGRhdGFiYXNlPC9wPlxyXG5cdFx0XHQgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayB3LWZ1bGxcIj4gV2F0Y2ggdGhlIGxpc3RpbmdzPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlIHBvcHVwXCIgaWQ9XCJwb3B1cF9oaXN0b3J5XCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIlxyXG5cdFx0XHQgICAgICAgIFx0YXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcblx0XHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IHNwYWNlLXktMjAgcC00MFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGg0PiBIaXN0b3J5IDwvaDQ+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyZWF0b3JfaXRlbSBjcmVhdG9yX2NhcmQgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcnMgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2VcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1nL2ljb25zL0JhZGdlLnN2Z1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvYXZhdGFycy9hdmF0YXJfMS5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkF2YXRhclwiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1tZFwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCI+QmlkIGFjY2VwdGVkIDxzcGFuXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sb3JfYnJhbmRcIj4xXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0RVRIPC9zcGFuPiBieSA8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFjayB0eHRcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRfYm9sZFwiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiNcIj5heW91YjwvYT48L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlIGNvbG9yX3RleHRcIj4yOC8wNi8yMDIxLCAxMjowODwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRvcl9pdGVtIGNyZWF0b3JfY2FyZCBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFycyBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWRnZVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImFzc2V0cy9pbWcvaWNvbnMvQmFkZ2Uuc3ZnXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9hdmF0YXJzL2F2YXRhcl8yLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQXZhdGFyXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLW1kXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIj5CaWQgYWNjZXB0ZWQgPHNwYW5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2xvcl9icmFuZFwiPjNcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRFVEg8L3NwYW4+IGJ5IDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrIHR4dFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdF9ib2xkXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiI1wiPm1vbmlyPC9hPjwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUgY29sb3JfdGV4dFwiPjIyLzA1LzIwMjEsIDEyOjA4PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTMwX3Jlc2V0XCI+XHJcblxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pbWFnZV9pZC5tYXAoKGlkLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuYXBwcm92ZWRba2V5XSAmJiAodGhpcy5zdGF0ZS5vd25lcnNba2V5XSAhPT0gdGhpcy5zdGF0ZS5hY2NvdW50KSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGUgcG9wdXBcIiBpZD17IFwicG9wdXBfYXBwcm92ZVwiK2tleSB9IHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IHNwYWNlLXktMjAgcC00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFwcHJvdmUgZm9yIHNhbGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyB0aGlzLnN0YXRlLmltYWdlRGF0YV9uYW1lW2tleV0gfSA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiPnsgdGhpcy5zdGF0ZS5pbWFnZURhdGFfcHJpY2Vba2V5XSB9IEJOQjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld19wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyB0aGlzLnN0YXRlLmltYWdlRGF0YV9wcmljZVtrZXldIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IFlvdSdyIHBheWluZyBsaXN0aW5nIGZlZSBmb3Igc2FsZSBhcHByb3ZhbDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IGxpc3RpbmcgZmVlOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGNvbG9yX2JsYWNrIHR4dCBfYm9sZFwiPiAwLjA0NSBCTkIvJHsgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLkJOQmluVVNEICogMC4wNDUpLnRvRml4ZWQoMil9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gQ3VycmVudCBwcmljZTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBjb2xvcl9ibGFjayB0eHQgX2JvbGRcIj4geyB0aGlzLnN0YXRlLmltYWdlRGF0YV9wcmljZVtrZXldfSBCTkIvJHtwYXJzZUZsb2F0KHRoaXMuc3RhdGUuQk5CaW5VU0QgKiB0aGlzLnN0YXRlLmltYWdlRGF0YV9wcmljZVtrZXldKS50b0ZpeGVkKDIpIH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3BvcHVwX2JpZF9zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+IEFwcHJvdmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2l0ZW0gZm91clwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9ib2R5IHNwYWNlLXktMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjcmVhdG9ycyBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFycyBzcGFjZS14LTNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2F2YXRhcnMvYXZhdGFyXzEucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1zbVwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhdmF0YXJzX25hbWUgdHh0X3hzXCI+eyB0aGlzLnN0YXRlLm93bmVyc0FkZHJlc3Nba2V5XSB9PC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX2hlYWRcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGEgaHJlZj17XCJuZnQtZGV0YWlsLmh0bWw/aXRlbV9pZD1cIitrZXl9ID5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz17IHRoaXMuc3RhdGUuaW1hZ2VEYXRhX3VybFtrZXldIH1cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaWtlcyBzcGFjZS14LTNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1oZWFydC0zLWZpbGxcIj48L2k+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidHh0X3NtXCI+MS4yazwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJjYXJkX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pbWFnZURhdGFfbmFtZVtrZXldIH1cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvaDY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfZm9vdGVyIGQtYmxvY2sgc3BhY2UteS0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfZm9vdGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInR4dF9zbVwiPlByaWNlOiA8c3BhblxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbG9yX2dyZWVuXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0dHh0X3NtXCI+eyAgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycpLmZvcm1hdChwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaW1hZ2VEYXRhX3ByaWNlW2tleV0pLnRvRml4ZWQoMikpfSBNTlcvJHsgcGFyc2VGbG9hdCgwKS50b0ZpeGVkKDIpIH08L3NwYW4+PC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaHJcIj48L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNwYWNlLXgtMTBcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0c3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktaGlzdG9yeS1saW5lXCI+PC9pPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwidmlld19oaXN0b3J5XCIgaHJlZj1cIiNcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD1cIiNwb3B1cF9oaXN0b3J5XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X3NtXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDpcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQnYXV0bycgfX0+Vmlld1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdEhpc3Rvcnk8L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgIGhyZWY9e1wibmZ0LWRldGFpbC5odG1sP2l0ZW1faWQ9XCIra2V5fVxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PlZpZXc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0PC9kaXY+PC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbXQtMTAwXCI+XHJcblx0XHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19oZWFkXCI+XHJcblx0XHRcdCAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZSBtYi0yMFwiPiBDb2xsZWN0aW9uczwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctYXV0b1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X3NtXCIgc3R5bGU9e3sgbWluV2lkdGg6XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWF4LWNvbnRlbnQnIH19PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgRklMVEVSIEJZOlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X2NhdGVnb3JpZXMgc3BhY2UteC0yMFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoN1wiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjxsYWJlbCBmb3I9XCJzd2l0Y2g3XCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzIGxpc3QgcHJpY2UgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaDhcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PGxhYmVsIGZvcj1cInN3aXRjaDhcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXMgb3BlbiBvZmZlciA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoOVwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjxsYWJlbCBmb3I9XCJzd2l0Y2g5XCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gT3duZWQgYnkgY3JlYXRvciA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoMTBcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48bGFiZWwgZm9yPVwic3dpdGNoMTBcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXMgc29sZCA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBhbGlnbi1pdGVtcy1jZW50ZXIgc206bXQtMjBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfc21cIj4gU09SVCBCWTogPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNlbnQgQWN0aXZlXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXJlPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0ICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zMF9yZXNldFwiPlxyXG5cdFx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tOFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zIHNwYWNlLXktMTAgbWItMzBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uc19pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzLWJveCBzcGFjZS15LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BfaW1nc1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fOS5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTAucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzExLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTIucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnNfZm9vdGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY29sbGVjdGlvbl90aXRsZVwiPjxhIGhyZWY9XCIjXCI+Q3JlYXRpdmUgQXJ0IGNvbGxlY3Rpb248L2E+PC9oNT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlrZXMgc3BhY2UteC0zXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLWhlYXJ0LTMtZmlsbFwiPjwvaT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidHh0X21kXCI+Mi4xazwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyZWF0b3JzIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X21kXCI+IDUgaXRlbXMgwrcgQ3JlYXRlZCBieTwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFycyBzcGFjZS14LTVcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2F2YXRhcnMvYXZhdGFyXzIucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdGFsdD1cIkF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc21cIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImF2YXRhcnNfbmFtZSB0eHRfc21cIj4gQHdpbGxpYW1famFteS4uLiA8L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS04XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnMgc3BhY2UteS0xMCBtYi0zMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZXMtYm94IHNwYWNlLXktMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcF9pbWdzXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xMy5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTQucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzE1LnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTYucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnNfZm9vdGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY29sbGVjdGlvbl90aXRsZVwiPjxhIGhyZWY9XCIjXCI+Q29sb3JmdWwgQWJzdHJhY3QgUGFpbnRpbmc8L2E+PC9oNT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlrZXMgc3BhY2UteC0zXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLWhlYXJ0LTMtZmlsbFwiPjwvaT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidHh0X21kXCI+My41azwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyZWF0b3JzIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X21kXCI+IDcgaXRlbXMgwrcgQ3JlYXRlZCBieTwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFycyBzcGFjZS14LTVcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2F2YXRhcnMvYXZhdGFyXzMucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdGFsdD1cIkF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc21cIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImF2YXRhcnNfbmFtZSB0eHRfc21cIj4gQGFsZXhpc19mZW5uLi4uIDwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLThcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9ucyBzcGFjZS15LTEwIG1iLTMwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnNfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlcy1ib3ggc3BhY2UteS0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wX2ltZ3NcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzE3LnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xOC5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTkucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8yMC5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uc19mb290ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uX3RpdGxlXCI+PGEgaHJlZj1cIiNcIj5Nb2Rlcm4gQXJ0IGNvbGxlY3Rpb248L2E+PC9oNT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlrZXMgc3BhY2UteC0zXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLWhlYXJ0LTMtZmlsbFwiPjwvaT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidHh0X21kXCI+Ny4yazwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyZWF0b3JzIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X21kXCI+IDIgaXRlbXMgwrcgQ3JlYXRlZCBieTwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFycyBzcGFjZS14LTVcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2F2YXRhcnMvYXZhdGFyXzEucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdGFsdD1cIkF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc21cIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImF2YXRhcnNfbmFtZSB0eHRfc21cIj4gQEpvc2h1YV9CcmVuLi4uIDwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHQ8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY2NvdW50OiAnJyxcclxuICAgICAgICAgICAgYmFsYW5jZUluQk5COiAwLFxyXG4gICAgICAgICAgICBCTkJpblVTRDogMCxcclxuICAgICAgICAgICAgd2FsbGV0QWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGNvbnRyYWN0OiBudWxsLFxyXG4gICAgICAgICAgICBzYWxlX2NvbnRyYWN0OiBudWxsLFxyXG4gICAgICAgICAgICBzYWxlX2FkZHJlc3M6IG51bGwsXHJcbiAgICAgICAgICAgIHRvdGFsU3VwcGx5OiAwLFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICAgICAgICBvd25lcnM6IFtdLFxyXG5cdFx0XHRpbWFnZUNvbnRyYWN0OiBbXSxcclxuICAgICAgICAgICAgaW1hZ2VfdXJsOiBbXSxcclxuICAgICAgICAgICAgaW1hZ2VfbmFtZTogW10sXHJcblx0XHRcdGltYWdlX2lkOiBbXSxcclxuICAgICAgICAgICAgbmV3X3ByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICB0b2tlbl9zYWxlX2NvbnRyYWN0OiBudWxsLFxyXG4gICAgICAgICAgICB0b2tlbl9wcmljZTogMCxcclxuICAgICAgICAgICAgYXBwcm92ZWQ6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0ZG9jdW1lbnQudGl0bGUgPSAnTXkgTkZUIENvbGxlY3Rpb25zJztcclxuICAgICAgICBhd2FpdCB0aGlzLmV0aEVuYWJsZWQoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV0aEVuYWJsZWQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHQgXHJcblx0XHRpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEFjY291bnQgPSBhY2NvdW50c1swXTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBjdXJyZW50QWNjb3VudCB9KTtcclxuXHRcdFx0d2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG5cdFx0XHR0aGlzLndlYjMgPSB3aW5kb3cud2ViMztcclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVG9rZW5zRm9yT3duZXIoY3VycmVudEFjY291bnQpXHJcblx0XHRcdFxyXG5cdFxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxuIHJlbmRlclRva2Vuc0Zvck93bmVyID0gYXN5bmMob3duZXJBZGRyZXNzKSA9PiB7XHJcbiAgXHJcblx0dmFyIGNvbnRyYWN0QWRkcmVzZXMgPSBbXTsgLy8gaW5pdGlhbGlzZSBhbiBlbXB0eSBhcnJheVxyXG4gIFxyXG5cdHZhciBUb2tlbnVybCA9IGBodHRwczovL2FwaS5ic2NzY2FuLmNvbS9hcGk/bW9kdWxlPWFjY291bnQmYWN0aW9uPXRva2VubmZ0dHgmYWRkcmVzcz0weDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUmcGFnZT0xJm9mZnNldD0xMDAmc3RhcnRibG9jaz0wJmVuZGJsb2NrPTk5OTk5OTk5OSZzb3J0PWFzYyZhcGlrZXk9N05JVDc2RTRYQ0NUWTE3VVpIQVJFNUtaRzlXMlk1VFRTWmA7XHJcblx0XHJcblx0YXdhaXQgZmV0Y2goVG9rZW51cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0aWYgKGRhdGEuc3RhdHVzID09IDApIHtcclxuXHRcdFx0Ly90b2dnbGVMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGRhdGEucmVzdWx0Lmxlbmd0aDtcclxuXHRcdC8vY29uc29sZS5sb2cobGVuZ3RoKTtcclxuXHQgICBmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe1xyXG4gIFxyXG5cdFx0aWYoY29udHJhY3RBZGRyZXNlcy5sZW5ndGggPT0gMCl7XHJcblx0XHQgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdFx0fWVsc2V7XHJcblx0ICAgXHJcblx0XHQgIHZhciBjbnQgPSBjb250cmFjdEFkZHJlc2VzLmxlbmd0aDtcclxuXHRcdCAgdmFyIGhhcyA9IDA7XHJcblx0XHQgIGZvcih2YXIgaj0wO2o8Y250O2orKyl7XHJcbiAgXHJcblx0XHRcdCBpZihjb250cmFjdEFkZHJlc2VzW2pdID09IGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyl7XHJcblx0XHRcdFx0IGhhcyA9IDE7XHJcblx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHQgfVxyXG5cdFx0ICB9XHJcbiAgXHJcblx0XHQgIGlmIChoYXMgPT0gMCl7XHJcbiAgXHJcblx0XHRcdGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdFx0ICB9XHJcblx0XHQgIFxyXG4gIFxyXG5cdFx0fVxyXG4gIFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdCAgIH1cclxuXHRcdCAgXHJcblx0XHRcclxuXHRcdC8vL2NvbnNvbGUubG9nKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoKTtcclxuXHR9KTtcclxuICAgXHJcblx0dGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAvLyBjb25zdCBuZXR3b3JrRGF0YSA9IE5GVHMubmV0d29ya3NbdGhpcy5uZXR3b3JrSWRdXHJcbiAgICAgICAgLy9pZiAobmV0d29ya0RhdGEpIHtcclxuICAgICAgICAgICAgLy9jb25zdCBhYmkgPSBORlRzLmFiaVxyXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gJzB4YzU0Yjk2YjA0QUE4ODI4YjYzQ2YyNTA0MDhFMTA4NEU5RjZBYzZjOCcvL25ldHdvcmtEYXRhLmFkZHJlc3NcclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgdGhpcy53ZWIzLmV0aC5Db250cmFjdChORlRzLCBhZGRyZXNzKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250cmFjdClcclxuXHJcblx0XHRcdC8qdGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0aW1hZ2VfY29udHJhY3Q6IFsuLi50aGlzLnN0YXRlLmltYWdlX2NvbnRyYWN0LCBhZGRyZXNzXVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ki9cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsTmZ0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKCcweDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUnKS5jYWxsKClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0b3RhbE5mdHMpO1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpIDwgdG90YWxOZnRzO2krKyl7XHJcblx0XHRcdFx0Y29uc3QgTmZ0aWRzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy50b2tlbk9mT3duZXJCeUluZGV4KCcweDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUnLGkpLmNhbGwoKVxyXG5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQ6IFsuLi50aGlzLnN0YXRlLmltYWdlX2lkLCBOZnRpZHNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblx0XHRcdFx0dmFyIGJhc2VVcmwgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhc2VVUkkoKS5jYWxsKCk7XHJcblxyXG5cdFx0XHRhd2FpdCBmZXRjaChiYXNlVXJsK05mdGlkcykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX3VybDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfdXJsLCBkYXRhLmltYWdlXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbmFtZTogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfbmFtZSwgZGF0YS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0lkczonK05mdGlkcyk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ05hbWU6JytkYXRhLm5hbWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdVUkw6JytkYXRhLmltYWdlKTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhOZnRpZHMpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=