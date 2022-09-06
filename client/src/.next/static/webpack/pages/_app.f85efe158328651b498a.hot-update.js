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
                  }); //console.log(data.image);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJDb2luR2Vja28iLCJyZXF1aXJlIiwiQ29pbkdlY2tvQ2xpZW50IiwiV2ViMyIsIndlYjMiLCJCTiIsInV0aWxzIiwiSGVhZGVyIiwiTG9naW5jb250ZW50IiwiTG9nb3V0Y29udGVudCIsInN0YXRlIiwiYWNjb3VudCIsImRpc3BsYXkiLCJiYWxhbmNlSW5CTkIiLCJ3YWxsZXRBZGRyZXNzIiwiZXRoRW5hYmxlZCIsIm1pbldpZHRoIiwiaW1hZ2VfaWQiLCJtYXAiLCJpZCIsImtleSIsImFwcHJvdmVkIiwib3duZXJzIiwiaW1hZ2VEYXRhX25hbWUiLCJpbWFnZURhdGFfcHJpY2UiLCJuZXdfcHJpY2UiLCJwYXJzZUZsb2F0IiwiQk5CaW5VU0QiLCJ0b0ZpeGVkIiwib3duZXJzQWRkcmVzcyIsImltYWdlRGF0YV91cmwiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Iiwid2lkdGgiLCJwcm9wcyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwiY3VycmVudEFjY291bnQiLCJzZXRTdGF0ZSIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsImNvbnRyYWN0Iiwic2FsZV9jb250cmFjdCIsInNhbGVfYWRkcmVzcyIsInRvdGFsU3VwcGx5IiwiaW1hZ2VzIiwiaW1hZ2VDb250cmFjdCIsImltYWdlX3VybCIsImltYWdlX25hbWUiLCJ0b2tlbl9zYWxlX2NvbnRyYWN0IiwidG9rZW5fcHJpY2UiLCJkb2N1bWVudCIsInRpdGxlIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG90YWxOZnRzIiwidG9rZW5PZk93bmVyQnlJbmRleCIsIk5mdGlkcyIsImJhc2VVUkkiLCJiYXNlVXJsIiwiaW1hZ2UiLCJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw2REFBRCxDQUF6Qjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBSUYsU0FBSixFQUF4Qjs7QUFFQSxJQUFNRyxJQUFJLEdBQUdGLG1CQUFPLENBQUMsbURBQUQsQ0FBcEI7O0FBQ0EsSUFBTUcsSUFBSSxHQUFHLElBQUlELElBQUosRUFBYjtBQUNBLElBQU1FLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVdELEVBQXRCOztJQUVNRSxNOzs7Ozs7OzZCQUVPO0FBQUE7O0FBQ0wsVUFBSUMsWUFBWSxHQUFHLE1BQW5CO0FBQ04sVUFBSUMsYUFBYSxHQUFHLE9BQXBCOztBQUNBLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxPQUFmLEVBQXdCO0FBRXRCSCxvQkFBWSxHQUFHLE1BQWY7QUFDQUMscUJBQWEsR0FBRyxNQUFoQjtBQUNELE9BSkQsTUFJSztBQUNKRCxvQkFBWSxHQUFHLE1BQWY7QUFDQUMscUJBQWEsR0FBRyxPQUFoQjtBQUVBOztBQUVLLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHVDtBQUFRLGlCQUFTLEVBQUMscUJBQWxCO0FBQXdDLFVBQUUsRUFBQyxRQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFB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LFFBQUwsQ0FBYztBQUNFMkIsOEJBQVUsNkpBQU0sTUFBSSxDQUFDM0QsS0FBTCxDQUFXMkQsVUFBakIsSUFBNkJsQixJQUFJLENBQUNvQyxJQUFsQztBQURaLG1CQUFkLEVBTmMsQ0FVZDs7QUFDQSxpQkFaSyxDOzs7QUFYb0JoQyxpQkFBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzd0JUaUMsNkM7O0FBOHlCckIsK0RBQWVqRixNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjg1ZWZlMTU4MzI4NjUxYjQ5OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBORlRzIGZyb20gXCIuLi8uLi8uLi8uLi9jb250cmFjdHMvTkZULmpzb25cIjsgICBcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uLy4uLy4uLy4uL2dldFdlYjNcIjtcclxuXHJcblxyXG5jb25zdCBDb2luR2Vja28gPSByZXF1aXJlKCdjb2luZ2Vja28tYXBpJyk7XHJcbmNvbnN0IENvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcclxuXHJcbmNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKTtcclxuY29uc3Qgd2ViMyA9IG5ldyBXZWIzKCk7XHJcbmNvbnN0IEJOID0gd2ViMy51dGlscy5CTjtcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBMb2dpbmNvbnRlbnQgPSAnbm9uZSc7XHJcblx0XHRsZXQgTG9nb3V0Y29udGVudCA9ICdibG9jayc7XHJcblx0XHRpZiAodGhpcy5zdGF0ZS5hY2NvdW50KSB7XHJcblxyXG5cdFx0XHQgTG9naW5jb250ZW50ID0gJ2ZsZXgnO1xyXG5cdFx0XHQgTG9nb3V0Y29udGVudCA9ICdub25lJztcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRMb2dpbmNvbnRlbnQgPSAnbm9uZSc7XHJcblx0XHRcdExvZ291dGNvbnRlbnQgPSAnYmxvY2snO1xyXG5cclxuXHRcdH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlcl9fMSBqcy1oZWFkZXJcIiBpZD1cImhlYWRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIganMtaGVhZGVyLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaW5kZXguaHRtbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cImxvZ29fanNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2xvZ29zL2xvZ28td2hpdGUucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwibG9nb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51XCI+XHJcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTIwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0ICAgIDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIiBocmVmPVwiRXhwbG9yZS5odG1sXCI+IEV4cGxvcmU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiIGhyZWY9XCJNYXJrZXRwbGFjZS5odG1sXCI+IE1hcmtldHBsYWNlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBzdHlsZT17eyBkaXNwbGF5OiBMb2dpbmNvbnRlbnQgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCIgaHJlZj1cIkNvbGxlY3Rpb25zLmh0bWxcIj4gTXkgQ29sbGVjdGlvbnM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaGVhZGVyX19yZXN1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLXNlYXJjaC1saW5lXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiAgc3R5bGU9e3sgZGlzcGxheTogTG9naW5jb250ZW50IH19IGNsYXNzTmFtZT1cImhlYWRlcl9fYXZhdGFyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnt0aGlzLnN0YXRlLmJhbGFuY2VJbkJOQn0gPHN0cm9uZz5CTkI8L3N0cm9uZz4gPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz1cImFzc2V0cy9pbWcvYXZhdGFycy9hdmF0YXJfMi5wbmdcIiBhbHQ9XCJhdmF0YXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmF0YXJfcG9wdXAgc3BhY2UteS0yMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57IHRoaXMuc3RhdGUud2FsbGV0QWRkcmVzcyB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktZmlsZS1jb3B5LWxpbmVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNvaW5cIiBzcmM9XCJhc3NldHMvaW1nL2xvZ29zL2NvaW4uc3ZnXCIgYWx0PVwiL1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTUwMFwiPnt0aGlzLnN0YXRlLmJhbGFuY2VJbkJOQn0gQk5CPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmtzIHNwYWNlLXktMTBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiQ29sbGVjdGlvbnMuaHRtbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktbGFuZHNjYXBlLWxpbmVcIj48L2k+IDxzcGFuPiBNeSBpdGVtczwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBMb2dpbmNvbnRlbnQgfX0gY2xhc3NOYW1lPVwiaGVhZGVyX19idG5zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgaHJlZj1cImNyZWF0ZS1uZnQuaHRtbFwiPkNyZWF0ZTwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+IFxyXG5cdCAgICBcclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBMb2dvdXRjb250ZW50IH19IGNsYXNzTmFtZT1cImhlYWRlcl9fYnRuc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmFkIGJ0bi1zbVwiIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5ldGhFbmFibGVkfSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLXdhbGxldC0zLWxpbmVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvbm5lY3Qgd2FsbGV0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBpZD1cImNvbm5lY3RidG5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyB3aWR0aD1cIjQ1XCIgc3JjPVwiYXNzZXRzL2ltZy9pY29ucy9tZXRhbWFzay5zdmdcIiBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXJnZXIganMtaGVhZGVyLWJ1cmdlclwiPjwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZSBqcy1oZWFkZXItbW9iaWxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZV9fbWVudSBzcGFjZS15LTQwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXktMjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8bGk+IDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCIgaHJlZj1cIkV4cGxvcmUuaHRtbFwiPiBFeHBsb3JlPC9hPiA8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+IDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCIgaHJlZj1cIk1hcmtldHBsYWNlLmh0bWxcIj4gTWFya2V0cGxhY2U8L2E+IDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBzdHlsZT17eyBkaXNwbGF5OiBMb2dpbmNvbnRlbnQgfX0+IDxhIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCIgaHJlZj1cIkNvbGxlY3Rpb25zLmh0bWxcIj4gQ29sbGVjdGlvbnM8L2E+IDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IExvZ291dGNvbnRlbnQgfX0gY2xhc3NOYW1lPVwic3BhY2UteS0yMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmFkIGJ0bi1zbVwiIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5ldGhFbmFibGVkfSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLXdhbGxldC0zLWxpbmVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29ubmVjdCB3YWxsZXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogTG9naW5jb250ZW50IH19IGNsYXNzTmFtZT1cInNwYWNlLXktMjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZ3JhZCBidG4tc21cIiBocmVmPVwiY3JlYXRlLW5mdC5odG1sXCIgb25DbGljaz17dGhpcy5ldGhFbmFibGVkfSA+Q3JlYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fbWFya2V0cGxhY2UgYmdfd2hpdGVcIj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk1hcmtldHBsYWNlPC9oMT4gICAgICBcclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZ193aGl0ZSBib3JkZXItYiBweS0yMFwiPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X2NhdGVnb3JpZXMgc3BhY2UteC0yMFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY29sb3JfYnJhbmRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBBbGwgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWdhbWVwYWQtbGluZVwiPjwvaT4gPHNwYW4+IEdhbWVzIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktYnJ1c2gtbGluZVwiPjwvaT4gPHNwYW4+IEFydCA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLXN0b2NrLWxpbmVcIj48L2k+IDxzcGFuPiBUcmFkaW5nIENhcmRzIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktbXVzaWMtbGluZVwiPjwvaT4gPHNwYW4+IE11c2ljIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktZ2xvYmFsLWxpbmVcIj48L2k+IDxzcGFuPiBEb21haW4gTmFtZXMgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGxpPiA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1lbW90aW9uLWxhdWdoLWxpbmVcIj48L2k+IDxzcGFuPiBNZW1lcyA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWxheW91dC00LWxpbmVcIj48L2k+IDxzcGFuPiBDb2xsZWN0aWJsZXMgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICA8L3VsPiAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbXQtMTAwXCI+XHJcblx0XHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19oZWFkXCI+XHJcblx0XHRcdCAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZSBtYi0yMFwiPiBNYXJrZXRwbGFjZTwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctYXV0b1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X3NtXCIgc3R5bGU9e3sgbWluV2lkdGg6XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWF4LWNvbnRlbnQnIH19PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgRklMVEVSIEJZOlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X2NhdGVnb3JpZXMgc3BhY2UteC0yMFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInN3aXRjaDFcIiAvPjxsYWJlbFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJzd2l0Y2gxXCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzIGxpc3QgcHJpY2UgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzd2l0Y2gyXCIgY2hlY2tlZC8+PGxhYmVsXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cInN3aXRjaDJcIj5Ub2dnbGU8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXMgb3BlbiBvZmZlciA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInN3aXRjaDNcIiAvPjxsYWJlbFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJzd2l0Y2gzXCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gT3duZWQgYnkgY3JlYXRvciA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBzcGFjZS14LTEwIHN3aXRjaF9pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInN3aXRjaDRcIiAvPjxsYWJlbFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJzd2l0Y2g0XCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzIHNvbGQgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBhbGlnbi1pdGVtcy1jZW50ZXIgc206bXQtMjBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfdGV4dCB0eHRfc21cIj4gU09SVCBCWTogPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNlbnQgQWN0aXZlXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXJlPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGUgcG9wdXBcIiBpZD1cInBvcHVwX2JpZF9zdWNjZXNzXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIlxyXG5cdFx0XHQgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IHNwYWNlLXktMjAgcC00MFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Zb3VyIEJpZGRpbmdcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Y2Nlc3NmdWx5IEFkZGVkPC9oMz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj55b3VyIGJpZCA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ib2xkXCI+KDE2RVRIKSA8L3NwYW4+IGhhcyBiZWVuIGxpc3RpbmdcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIG91ciBkYXRhYmFzZTwvcD5cclxuXHRcdFx0ICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgdy1mdWxsXCI+IFdhdGNoIHRoZSBsaXN0aW5nczwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZSBwb3B1cFwiIGlkPVwicG9wdXBfaGlzdG9yeVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCJcclxuXHRcdFx0ICAgICAgICBcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG5cdFx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0YXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBzcGFjZS15LTIwIHAtNDBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxoND4gSGlzdG9yeSA8L2g0PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjcmVhdG9yX2l0ZW0gY3JlYXRvcl9jYXJkIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmF0YXJzIHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhZGdlXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pY29ucy9CYWRnZS5zdmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2F2YXRhcnMvYXZhdGFyXzEucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJBdmF0YXJcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItbWRcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb2xvcl9ibGFja1wiPkJpZCBhY2NlcHRlZCA8c3BhblxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbG9yX2JyYW5kXCI+MVxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdEVUSDwvc3Bhbj4gYnkgPGEgY2xhc3NOYW1lPVwiY29sb3JfYmxhY2sgdHh0XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0X2JvbGRcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIjXCI+YXlvdWI8L2E+PC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZSBjb2xvcl90ZXh0XCI+MjgvMDYvMjAyMSwgMTI6MDg8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyZWF0b3JfaXRlbSBjcmVhdG9yX2NhcmQgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcnMgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2VcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1nL2ljb25zL0JhZGdlLnN2Z1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvYXZhdGFycy9hdmF0YXJfMi5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkF2YXRhclwiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1tZFwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbG9yX2JsYWNrXCI+QmlkIGFjY2VwdGVkIDxzcGFuXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sb3JfYnJhbmRcIj4zXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0RVRIPC9zcGFuPiBieSA8YSBjbGFzc05hbWU9XCJjb2xvcl9ibGFjayB0eHRcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRfYm9sZFwiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiNcIj5tb25pcjwvYT48L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlIGNvbG9yX3RleHRcIj4yMi8wNS8yMDIxLCAxMjowODwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zMF9yZXNldFwiPlxyXG5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuaW1hZ2VfaWQubWFwKChpZCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmFwcHJvdmVkW2tleV0gJiYgKHRoaXMuc3RhdGUub3duZXJzW2tleV0gIT09IHRoaXMuc3RhdGUuYWNjb3VudCkpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlIHBvcHVwXCIgaWQ9eyBcInBvcHVwX2FwcHJvdmVcIitrZXkgfSB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBzcGFjZS15LTIwIHAtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BcHByb3ZlIGZvciBzYWxlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnsgdGhpcy5zdGF0ZS5pbWFnZURhdGFfbmFtZVtrZXldIH0gPHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfYmxhY2tcIj57IHRoaXMuc3RhdGUuaW1hZ2VEYXRhX3ByaWNlW2tleV0gfSBCTkI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgdGhpcy5zdGF0ZS5pbWFnZURhdGFfcHJpY2Vba2V5XSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBZb3UnciBwYXlpbmcgbGlzdGluZyBmZWUgZm9yIHNhbGUgYXBwcm92YWw6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBsaXN0aW5nIGZlZTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBjb2xvcl9ibGFjayB0eHQgX2JvbGRcIj4gMC4wNDUgQk5CLyR7IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5CTkJpblVTRCAqIDAuMDQ1KS50b0ZpeGVkKDIpfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEN1cnJlbnQgcHJpY2U6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgY29sb3JfYmxhY2sgdHh0IF9ib2xkXCI+IHsgdGhpcy5zdGF0ZS5pbWFnZURhdGFfcHJpY2Vba2V5XX0gQk5CLyR7cGFyc2VGbG9hdCh0aGlzLnN0YXRlLkJOQmluVVNEICogdGhpcy5zdGF0ZS5pbWFnZURhdGFfcHJpY2Vba2V5XSkudG9GaXhlZCgyKSB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNwb3B1cF9iaWRfc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPiBBcHByb3ZlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pdGVtIGZvdXJcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfYm9keSBzcGFjZS15LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRvcnMgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcnMgc3BhY2UteC0zXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9hdmF0YXJzL2F2YXRhcl8xLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIkF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc21cIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXZhdGFyc19uYW1lIHR4dF94c1wiPnsgdGhpcy5zdGF0ZS5vd25lcnNBZGRyZXNzW2tleV0gfTwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9oZWFkXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxhIGhyZWY9e1wibmZ0LWRldGFpbC5odG1sP2l0ZW1faWQ9XCIra2V5fSA+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGltZyBzcmM9eyB0aGlzLnN0YXRlLmltYWdlRGF0YV91cmxba2V5XSB9XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlrZXMgc3BhY2UteC0zXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwicmktaGVhcnQtMy1maWxsXCI+PC9pPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInR4dF9zbVwiPjEuMms8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiY2FyZF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuaW1hZ2VEYXRhX25hbWVba2V5XSB9XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2g2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX2Zvb3RlciBkLWJsb2NrIHNwYWNlLXktMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX2Zvb3RlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0eHRfc21cIj5QcmljZTogPHNwYW5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2xvcl9ncmVlblxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdHR4dF9zbVwiPnsgIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnKS5mb3JtYXQocGFyc2VGbG9hdCh0aGlzLnN0YXRlLmltYWdlRGF0YV9wcmljZVtrZXldKS50b0ZpeGVkKDIpKX0gTU5XLyR7IHBhcnNlRmxvYXQoMCkudG9GaXhlZCgyKSB9PC9zcGFuPjwvcD5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhyXCI+PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBzcGFjZS14LTEwXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdHNwYWNlLXgtMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInJpLWhpc3RvcnktbGluZVwiPjwvaT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInZpZXdfaGlzdG9yeVwiIGhyZWY9XCIjXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9XCIjcG9wdXBfaGlzdG9yeVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9zbVwiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0J2F1dG8nIH19PlZpZXdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHRIaXN0b3J5PC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0ICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiICBocmVmPXtcIm5mdC1kZXRhaWwuaHRtbD9pdGVtX2lkPVwiK2tleX1cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdD5WaWV3PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdDwvZGl2PjwvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIG10LTEwMFwiPlxyXG5cdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faGVhZFwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGUgbWItMjBcIj4gQ29sbGVjdGlvbnM8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLWF1dG9cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgc3BhY2UteC0xMFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9zbVwiIHN0eWxlPXt7IG1pbldpZHRoOlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21heC1jb250ZW50JyB9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZJTFRFUiBCWTpcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9jYXRlZ29yaWVzIHNwYWNlLXgtMjBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaDdcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48bGFiZWwgZm9yPVwic3dpdGNoN1wiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhhcyBsaXN0IHByaWNlIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgc3dpdGNoX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2g4XCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjxsYWJlbCBmb3I9XCJzd2l0Y2g4XCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzIG9wZW4gb2ZmZXIgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaDlcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48bGFiZWwgZm9yPVwic3dpdGNoOVwiPlRvZ2dsZTwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IE93bmVkIGJ5IGNyZWF0b3IgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggc3BhY2UteC0xMCBzd2l0Y2hfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaDEwXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PGxhYmVsIGZvcj1cInN3aXRjaDEwXCI+VG9nZ2xlPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzIHNvbGQgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctYXV0b1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHNwYWNlLXgtMTAgYWxpZ24taXRlbXMtY2VudGVyIHNtOm10LTIwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yX3RleHQgdHh0X3NtXCI+IFNPUlQgQlk6IDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjZW50IEFjdGl2ZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2VcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVyZTwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdCAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMzBfcmVzZXRcIj5cclxuXHRcdFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLThcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9ucyBzcGFjZS15LTEwIG1iLTMwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnNfaXRlbVwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlcy1ib3ggc3BhY2UteS0xMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wX2ltZ3NcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzkucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzEwLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xMS5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzEyLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zX2Zvb3RlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25fdGl0bGVcIj48YSBocmVmPVwiI1wiPkNyZWF0aXZlIEFydCBjb2xsZWN0aW9uPC9hPjwvaDU+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpa2VzIHNwYWNlLXgtM1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1oZWFydC0zLWZpbGxcIj48L2k+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInR4dF9tZFwiPjIuMWs8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjcmVhdG9ycyBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9tZFwiPiA1IGl0ZW1zIMK3IENyZWF0ZWQgYnk8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcnMgc3BhY2UteC01XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9hdmF0YXJzL2F2YXRhcl8yLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRhbHQ9XCJBdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhdmF0YXJzX25hbWUgdHh0X3NtXCI+IEB3aWxsaWFtX2phbXkuLi4gPC9wPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tOFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zIHNwYWNlLXktMTAgbWItMzBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uc19pdGVtXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzLWJveCBzcGFjZS15LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BfaW1nc1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTMucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzE0LnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xNS5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzE2LnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDwvYT5cclxuXHRcdFx0ICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zX2Zvb3RlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25fdGl0bGVcIj48YSBocmVmPVwiI1wiPkNvbG9yZnVsIEFic3RyYWN0IFBhaW50aW5nPC9hPjwvaDU+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpa2VzIHNwYWNlLXgtM1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1oZWFydC0zLWZpbGxcIj48L2k+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInR4dF9tZFwiPjMuNWs8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjcmVhdG9ycyBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9tZFwiPiA3IGl0ZW1zIMK3IENyZWF0ZWQgYnk8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcnMgc3BhY2UteC01XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9hdmF0YXJzL2F2YXRhcl8zLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRhbHQ9XCJBdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhdmF0YXJzX25hbWUgdHh0X3NtXCI+IEBhbGV4aXNfZmVubi4uLiA8L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS04XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnMgc3BhY2UteS0xMCBtYi0zMFwiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zX2l0ZW1cIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZXMtYm94IHNwYWNlLXktMTBcIj5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcF9pbWdzXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdHNyYz1cImFzc2V0cy9pbWcvaXRlbXMvaXRlbV8xNy5wbmdcIlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIiAvPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMTgucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9pdGVtcy9pdGVtXzE5LnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1nL2l0ZW1zL2l0ZW1fMjAucG5nXCJcclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0XHRcdGFsdD1cIlwiIC8+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnNfZm9vdGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY29sbGVjdGlvbl90aXRsZVwiPjxhIGhyZWY9XCIjXCI+TW9kZXJuIEFydCBjb2xsZWN0aW9uPC9hPjwvaDU+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpa2VzIHNwYWNlLXgtM1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJyaS1oZWFydC0zLWZpbGxcIj48L2k+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInR4dF9tZFwiPjcuMms8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjcmVhdG9ycyBzcGFjZS14LTEwXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb2xvcl90ZXh0IHR4dF9tZFwiPiAyIGl0ZW1zIMK3IENyZWF0ZWQgYnk8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcnMgc3BhY2UteC01XCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHRcdFx0c3JjPVwiYXNzZXRzL2ltZy9hdmF0YXJzL2F2YXRhcl8xLnBuZ1wiXHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHRcdFx0XHRhbHQ9XCJBdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtXCIgLz5cclxuXHRcdFx0ICAgICAgICBcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhdmF0YXJzX25hbWUgdHh0X3NtXCI+IEBKb3NodWFfQnJlbi4uLiA8L3A+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2E+XHJcblx0XHRcdCAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWNjb3VudDogJycsXHJcbiAgICAgICAgICAgIGJhbGFuY2VJbkJOQjogMCxcclxuICAgICAgICAgICAgQk5CaW5VU0Q6IDAsXHJcbiAgICAgICAgICAgIHdhbGxldEFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBjb250cmFjdDogbnVsbCxcclxuICAgICAgICAgICAgc2FsZV9jb250cmFjdDogbnVsbCxcclxuICAgICAgICAgICAgc2FsZV9hZGRyZXNzOiBudWxsLFxyXG4gICAgICAgICAgICB0b3RhbFN1cHBseTogMCxcclxuICAgICAgICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgICAgICAgb3duZXJzOiBbXSxcclxuXHRcdFx0aW1hZ2VDb250cmFjdDogW10sXHJcbiAgICAgICAgICAgIGltYWdlX3VybDogW10sXHJcbiAgICAgICAgICAgIGltYWdlX25hbWU6IFtdLFxyXG5cdFx0XHRpbWFnZV9pZDogW10sXHJcbiAgICAgICAgICAgIG5ld19wcmljZTogbnVsbCxcclxuICAgICAgICAgICAgdG9rZW5fc2FsZV9jb250cmFjdDogbnVsbCxcclxuICAgICAgICAgICAgdG9rZW5fcHJpY2U6IDAsXHJcbiAgICAgICAgICAgIGFwcHJvdmVkOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGRvY3VtZW50LnRpdGxlID0gJ015IE5GVCBDb2xsZWN0aW9ucyc7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ldGhFbmFibGVkKClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBldGhFbmFibGVkID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0IFxyXG5cdFx0aWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gYWNjb3VudHNbMF07XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogY3VycmVudEFjY291bnQgfSk7XHJcblx0XHRcdHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuXHRcdFx0dGhpcy53ZWIzID0gd2luZG93LndlYjM7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRva2Vuc0Zvck93bmVyKGN1cnJlbnRBY2NvdW50KVxyXG5cdFx0XHRcclxuXHRcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuXHJcbiByZW5kZXJUb2tlbnNGb3JPd25lciA9IGFzeW5jKG93bmVyQWRkcmVzcykgPT4ge1xyXG4gIFxyXG5cdHZhciBjb250cmFjdEFkZHJlc2VzID0gW107IC8vIGluaXRpYWxpc2UgYW4gZW1wdHkgYXJyYXlcclxuICBcclxuXHR2YXIgVG9rZW51cmwgPSBgaHR0cHM6Ly9hcGkuYnNjc2Nhbi5jb20vYXBpP21vZHVsZT1hY2NvdW50JmFjdGlvbj10b2tlbm5mdHR4JmFkZHJlc3M9MHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JnBhZ2U9MSZvZmZzZXQ9MTAwJnN0YXJ0YmxvY2s9MCZlbmRibG9jaz05OTk5OTk5OTkmc29ydD1hc2MmYXBpa2V5PTdOSVQ3NkU0WENDVFkxN1VaSEFSRTVLWkc5VzJZNVRUU1pgO1xyXG5cdFxyXG5cdGF3YWl0IGZldGNoKFRva2VudXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHQudGhlbihkYXRhID0+IHtcclxuXHRcdGlmIChkYXRhLnN0YXR1cyA9PSAwKSB7XHJcblx0XHRcdC8vdG9nZ2xlTG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBkYXRhLnJlc3VsdC5sZW5ndGg7XHJcblx0XHQvL2NvbnNvbGUubG9nKGxlbmd0aCk7XHJcblx0ICAgZm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXtcclxuICBcclxuXHRcdGlmKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoID09IDApe1xyXG5cdFx0ICBjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcclxuICBcclxuXHRcdH1lbHNle1xyXG5cdCAgIFxyXG5cdFx0ICB2YXIgY250ID0gY29udHJhY3RBZGRyZXNlcy5sZW5ndGg7XHJcblx0XHQgIHZhciBoYXMgPSAwO1xyXG5cdFx0ICBmb3IodmFyIGo9MDtqPGNudDtqKyspe1xyXG4gIFxyXG5cdFx0XHQgaWYoY29udHJhY3RBZGRyZXNlc1tqXSA9PSBkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3Mpe1xyXG5cdFx0XHRcdCBoYXMgPSAxO1xyXG5cdFx0XHRcdCBicmVhaztcclxuXHRcdFx0IH1cclxuXHRcdCAgfVxyXG4gIFxyXG5cdFx0ICBpZiAoaGFzID09IDApe1xyXG4gIFxyXG5cdFx0XHRjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcclxuICBcclxuXHRcdCAgfVxyXG5cdFx0ICBcclxuICBcclxuXHRcdH1cclxuICBcclxuXHRcdC8vY29uc29sZS5sb2coZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcclxuICBcclxuXHQgICB9XHJcblx0XHQgIFxyXG5cdFx0XHJcblx0XHQvLy9jb25zb2xlLmxvZyhjb250cmFjdEFkZHJlc2VzLmxlbmd0aCk7XHJcblx0fSk7XHJcbiAgIFxyXG5cdHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgLy8gY29uc3QgbmV0d29ya0RhdGEgPSBORlRzLm5ldHdvcmtzW3RoaXMubmV0d29ya0lkXVxyXG4gICAgICAgIC8vaWYgKG5ldHdvcmtEYXRhKSB7XHJcbiAgICAgICAgICAgIC8vY29uc3QgYWJpID0gTkZUcy5hYmlcclxuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9ICcweGM1NGI5NmIwNEFBODgyOGI2M0NmMjUwNDA4RTEwODRFOUY2QWM2YzgnLy9uZXR3b3JrRGF0YS5hZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHRoaXMud2ViMy5ldGguQ29udHJhY3QoTkZUcywgYWRkcmVzcylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udHJhY3QpXHJcblxyXG5cdFx0XHQvKnRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdGltYWdlX2NvbnRyYWN0OiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9jb250cmFjdCwgYWRkcmVzc11cclxuXHRcdFx0fSk7XHJcblx0XHRcdCovXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KVxyXG4gICAgICAgICAgICBjb25zdCB0b3RhbE5mdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZignMHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JykuY2FsbCgpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codG90YWxOZnRzKTtcclxuXHRcdFx0Zm9yKHZhciBpPTA7aSA8IHRvdGFsTmZ0cztpKyspe1xyXG5cdFx0XHRcdGNvbnN0IE5mdGlkcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5PZk93bmVyQnlJbmRleCgnMHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JyxpKS5jYWxsKClcclxuXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2lkOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9pZCwgTmZ0aWRzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cdFx0XHRcdHZhciBiYXNlVXJsID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5iYXNlVVJJKCkuY2FsbCgpO1xyXG5cclxuXHRcdFx0YXdhaXQgZmV0Y2goYmFzZVVybCtOZnRpZHMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV91cmw6IFsuLi50aGlzLnN0YXRlLmltYWdlX3VybCwgZGF0YS5pbWFnZV1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX25hbWU6IFsuLi50aGlzLnN0YXRlLmltYWdlX25hbWUsIGRhdGEubmFtZV1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coZGF0YS5pbWFnZSk7XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coTmZ0aWRzKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9