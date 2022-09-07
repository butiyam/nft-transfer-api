self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ "../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contracts_NFT_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contracts/NFT.json */ "./contracts/NFT.json");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../getWeb3 */ "./getWeb3.js");
/* module decorator */ module = __webpack_require__.hmd(module);










var _jsxFileName = "C:\\Users\\Mahesh\\nft-transfer-api\\client\\src\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_10___default().createElement);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Web3 = __webpack_require__(/*! web3 */ "../node_modules/web3/dist/web3.min.js");

var web3 = new Web3();
var BN = web3.utils.BN;

var Home = /*#__PURE__*/function (_Component) {
  (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(Home, _Component);

  var _super = _createSuper(Home);

  (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Home, [{
    key: "render",
    value: function render() {
      return __jsx((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), null, __jsx("div", {
        id: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, __jsx("template", {
        id: "nft_template",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, __jsx("section", {
        class: "w-48 flex justify-around flex-col bg-blue-100 px-2 py-1 rounded-md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx("h1", {
        class: "text-black text-center font-semibold",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }), __jsx("a", {
        href: "",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "",
        alt: "",
        class: "rounded-md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(props) {
        var wallet;
        return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wallet = props.query.wallet;
                return _context.abrupt("return", {
                  wallet: wallet
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Home(props) {
    var _this;

    (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, Home);

    _this = _super.call(this, props);

    (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "ethEnabled", /*#__PURE__*/(0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var accounts, currentAccount;
      return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!window.ethereum) {
                _context2.next = 10;
                break;
              }

              _context2.next = 3;
              return ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 3:
              accounts = _context2.sent;
              currentAccount = accounts[0];

              _this.setState({
                account: currentAccount
              });

              window.web3 = new Web3(window.ethereum);
              _this.web3 = window.web3;

              _this.renderTokensForOwner(currentAccount);

              return _context2.abrupt("return", true);

            case 10:
              return _context2.abrupt("return", false);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "renderTokensForOwner", /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(ownerAddress) {
        var contractAddreses, Tokenurl;
        return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                contractAddreses = []; // initialise an empty array

                Tokenurl = "https://api.bscscan.com/api?module=account&action=tokennfttx&address=0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95&page=1&offset=100&startblock=0&endblock=999999999&sort=asc&apikey=7NIT76E4XCCTY17UZHARE5KZG9W2Y5TTSZ";
                _context3.next = 4;
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
                _this.loadBlockchainData(contractAddreses);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      account: '',
      walletAddress: _this.props.wallet,
      contract: null,
      images: [],
      owners: [],
      imageContract: [],
      image_url: [],
      image_name: [],
      image_id: []
    };
    return _this;
  }

  (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Home, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
        return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                document.title = 'My NFT Collections';
                _context4.next = 3;
                return this.ethEnabled();

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = (0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(addres) {
        var _this2 = this;

        var j, address, contract, totalNfts, _loop, i, Uri;

        return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                j = 0;

              case 1:
                if (!(j < addres.length)) {
                  _context6.next = 33;
                  break;
                }

                address = addres[j];
                _context6.prev = 3;
                _context6.next = 6;
                return new this.web3.eth.Contract(_contracts_NFT_json__WEBPACK_IMPORTED_MODULE_11__, addres[j]);

              case 6:
                contract = _context6.sent;
                this.setState({
                  contract: contract
                });
                _context6.next = 12;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](3);

              case 12:
                /*this.setState({
                  image_contract: [...this.state.image_contract, address]
                });
                */
                totalNfts = 0;
                _context6.prev = 13;

                if (!this.state.contract) {
                  _context6.next = 18;
                  break;
                }

                _context6.next = 17;
                return this.state.contract.methods.balanceOf(this.state.walletAddress).call();

              case 17:
                totalNfts = _context6.sent;

              case 18:
                _context6.next = 22;
                break;

              case 20:
                _context6.prev = 20;
                _context6.t1 = _context6["catch"](13);

              case 22:
                if (!(totalNfts > 0)) {
                  _context6.next = 30;
                  break;
                }

                _loop = /*#__PURE__*/C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _loop() {
                  var Nftids;
                  return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _loop$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this2.state.contract.methods.tokenOfOwnerByIndex(_this2.state.walletAddress, i).call();

                        case 2:
                          Nftids = _context5.sent;

                          _this2.setState({
                            image_id: [].concat((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_id), [Nftids])
                          });

                          _context5.next = 6;
                          return _this2.state.contract.methods.tokenURI(Nftids).call();

                        case 6:
                          Uri = _context5.sent;
                          _context5.next = 9;
                          return fetch(Uri).then(function (response) {
                            return response.json();
                          }).then(function (data) {
                            _this2.setState({
                              image_url: [].concat((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_url), [data.image])
                            });

                            _this2.setState({
                              image_name: [].concat((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_name), [data.name])
                            });

                            document.getElementById("container").append(_this2.createTokenElement(Nftids, data.name, data.image));
                            console.log('NFT Contract:' + addres[j]);
                            console.log('Ids:' + Nftids);
                            console.log('Name:' + data.name);
                            console.log('URL:' + data.image);
                          });

                        case 9:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _loop);
                });
                i = 0;

              case 25:
                if (!(i < totalNfts)) {
                  _context6.next = 30;
                  break;
                }

                return _context6.delegateYield(_loop(), "t2", 27);

              case 27:
                i++;
                _context6.next = 25;
                break;

              case 30:
                j++;
                _context6.next = 1;
                break;

              case 33:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, this, [[3, 10], [13, 20]]);
      }));

      function loadBlockchainData(_x3) {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }, {
    key: "createTokenElement",
    value: function createTokenElement(_ref3) {
      var token_id = _ref3.token_id,
          name = _ref3.name,
          image_preview_url = _ref3.image_preview_url;
      var newElement = document.getElementById("nft_template").content.cloneNode(true);
      alert(name);
      newElement.querySelector("section").id = "".concat(token_id);
      newElement.querySelector("h1").innerText = name;
      newElement.querySelector("a").href = image_preview_url;
      newElement.querySelector("img").src = image_preview_url;
      newElement.querySelector("img").alt = name;
      return newElement;
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwiQk4iLCJ1dGlscyIsIkhvbWUiLCJwcm9wcyIsIndhbGxldCIsInF1ZXJ5Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJjdXJyZW50QWNjb3VudCIsInNldFN0YXRlIiwiYWNjb3VudCIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsInN0YXRlIiwid2FsbGV0QWRkcmVzcyIsImNvbnRyYWN0IiwiaW1hZ2VzIiwib3duZXJzIiwiaW1hZ2VDb250cmFjdCIsImltYWdlX3VybCIsImltYWdlX25hbWUiLCJpbWFnZV9pZCIsImRvY3VtZW50IiwidGl0bGUiLCJldGhFbmFibGVkIiwiYWRkcmVzIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsInRvdGFsTmZ0cyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG9rZW5PZk93bmVyQnlJbmRleCIsIk5mdGlkcyIsInRva2VuVVJJIiwiVXJpIiwiaW1hZ2UiLCJuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmQiLCJjcmVhdGVUb2tlbkVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwidG9rZW5faWQiLCJpbWFnZV9wcmV2aWV3X3VybCIsIm5ld0VsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJpbm5lclRleHQiLCJocmVmIiwic3JjIiwiYWx0Iiwi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OENBbUU0QjtBQUFBLFVBQXRDa0MsUUFBc0MsU0FBdENBLFFBQXNDO0FBQUEsVUFBM0JOLElBQTJCLFNBQTNCQSxJQUEyQjtBQUFBLFVBQXJCTyxpQkFBcUIsU0FBckJBLGlCQUFxQjtBQUN2RCxVQUFNQyxVQUFVLEdBQUd6QixRQUFRLENBQUNrQixjQUFULENBQXdCLGNBQXhCLEVBQXdDUSxPQUF4QyxDQUFnREMsU0FBaEQsQ0FBMEQsSUFBMUQsQ0FBbkI7QUFDRkMsV0FBSyxDQUFDWCxJQUFELENBQUw7QUFDRVEsZ0JBQVUsQ0FBQ0ksYUFBWCxDQUF5QixTQUF6QixFQUFvQ0MsRUFBcEMsYUFBNENQLFFBQTVDO0FBQ0FFLGdCQUFVLENBQUNJLGFBQVgsQ0FBeUIsSUFBekIsRUFBK0JFLFNBQS9CLEdBQTJDZCxJQUEzQztBQUNBUSxnQkFBVSxDQUFDSSxhQUFYLENBQXlCLEdBQXpCLEVBQThCRyxJQUE5QixHQUFxQ1IsaUJBQXJDO0FBQ0FDLGdCQUFVLENBQUNJLGFBQVgsQ0FBeUIsS0FBekIsRUFBZ0NJLEdBQWhDLEdBQXNDVCxpQkFBdEM7QUFDQUMsZ0JBQVUsQ0FBQ0ksYUFBWCxDQUF5QixLQUF6QixFQUFnQ0ssR0FBaEMsR0FBc0NqQixJQUF0QztBQUVBLGFBQU9RLFVBQVA7QUFDRDs7OztFQWpOWVUsNkM7O0FBc05uQiwrREFBZTNFLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWQwN2Q5MjNkMzE3MzZhNGQyOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTkZUcyBmcm9tIFwiLi4vY29udHJhY3RzL05GVC5qc29uXCJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5cbmNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKTtcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xuXG4gICBjb25zdCB7IHdhbGxldCB9ID0gcHJvcHMucXVlcnk7XG4gICBcbiAgICByZXR1cm4geyB3YWxsZXQgfTtcbiAgIFxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+PGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dGVtcGxhdGUgaWQ9XCJuZnRfdGVtcGxhdGVcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LTQ4IGZsZXgganVzdGlmeS1hcm91bmQgZmxleC1jb2wgYmctYmx1ZS0xMDAgcHgtMiBweS0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGRcIj48L2gxPlxuICAgIFxuICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgY2xhc3M9XCJyb3VuZGVkLW1kXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICAgKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICBcbiAgICAgIFxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBhY2NvdW50OiAnJyxcbiAgICAgICAgICB3YWxsZXRBZGRyZXNzOiB0aGlzLnByb3BzLndhbGxldCxcbiAgICAgICAgICBjb250cmFjdDogbnVsbCxcbiAgICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICAgIG93bmVyczogW10sXG4gICAgaW1hZ2VDb250cmFjdDogW10sXG4gICAgICAgICAgaW1hZ2VfdXJsOiBbXSxcbiAgICAgICAgICBpbWFnZV9uYW1lOiBbXSxcbiAgICBpbWFnZV9pZDogW11cbiAgICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICBkb2N1bWVudC50aXRsZSA9ICdNeSBORlQgQ29sbGVjdGlvbnMnO1xuICAgICAgYXdhaXQgdGhpcy5ldGhFbmFibGVkKClcbiAgICAgIFxuICB9XG5cbiAgZXRoRW5hYmxlZCA9IGFzeW5jICgpID0+IHtcbiAgIFxuICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgICAgY29uc3QgY3VycmVudEFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogY3VycmVudEFjY291bnQgfSk7XG4gICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgIHRoaXMud2ViMyA9IHdpbmRvdy53ZWIzO1xuXG4gICAgdGhpcy5yZW5kZXJUb2tlbnNGb3JPd25lcihjdXJyZW50QWNjb3VudClcbiAgICBcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbiAgXG59XG5cblxuXG5yZW5kZXJUb2tlbnNGb3JPd25lciA9IGFzeW5jKG93bmVyQWRkcmVzcykgPT4ge1xuXG52YXIgY29udHJhY3RBZGRyZXNlcyA9IFtdOyAvLyBpbml0aWFsaXNlIGFuIGVtcHR5IGFycmF5XG5cbnZhciBUb2tlbnVybCA9IGBodHRwczovL2FwaS5ic2NzY2FuLmNvbS9hcGk/bW9kdWxlPWFjY291bnQmYWN0aW9uPXRva2VubmZ0dHgmYWRkcmVzcz0weDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUmcGFnZT0xJm9mZnNldD0xMDAmc3RhcnRibG9jaz0wJmVuZGJsb2NrPTk5OTk5OTk5OSZzb3J0PWFzYyZhcGlrZXk9N05JVDc2RTRYQ0NUWTE3VVpIQVJFNUtaRzlXMlk1VFRTWmA7XG5cbmF3YWl0IGZldGNoKFRva2VudXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi50aGVuKGRhdGEgPT4ge1xuICBpZiAoZGF0YS5zdGF0dXMgPT0gMCkge1xuICAgIC8vdG9nZ2xlTG9hZGluZyhmYWxzZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBsZW5ndGggPSBkYXRhLnJlc3VsdC5sZW5ndGg7XG4gIC8vY29uc29sZS5sb2cobGVuZ3RoKTtcbiAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7XG5cbiAgaWYoY29udHJhY3RBZGRyZXNlcy5sZW5ndGggPT0gMCl7XG4gICAgY29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgfWVsc2V7XG4gICBcbiAgICB2YXIgY250ID0gY29udHJhY3RBZGRyZXNlcy5sZW5ndGg7XG4gICAgdmFyIGhhcyA9IDA7XG4gICAgZm9yKHZhciBqPTA7ajxjbnQ7aisrKXtcblxuICAgICBpZihjb250cmFjdEFkZHJlc2VzW2pdID09IGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyl7XG4gICAgICAgaGFzID0gMTtcbiAgICAgICBicmVhaztcbiAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXMgPT0gMCl7XG5cbiAgICBjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcblxuICAgIH1cbiAgICBcblxuICB9XG5cbiAgLy9jb25zb2xlLmxvZyhkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xuXG4gICB9XG4gICAgXG4gIFxuICAvLy9jb25zb2xlLmxvZyhjb250cmFjdEFkZHJlc2VzLmxlbmd0aCk7XG59KTtcbiBcbnRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKGNvbnRyYWN0QWRkcmVzZXMpO1xufVxuXG5cblxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoYWRkcmVzKSB7XG5cbiAgICBcbiAgICBmb3IodmFyIGo9MDtqIDwgYWRkcmVzLmxlbmd0aDtqKyspIHtcbiAgICAgXG4gICAgICAgICAgY29uc3QgYWRkcmVzcyA9IGFkZHJlc1tqXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBuZXcgdGhpcy53ZWIzLmV0aC5Db250cmFjdChORlRzLCBhZGRyZXNbal0pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuXG4gICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGltYWdlX2NvbnRyYWN0OiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9jb250cmFjdCwgYWRkcmVzc11cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgICBjb25zdCB0b3RhbE5mdHMgPSAwO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvbnRyYWN0KVxuICAgICAgICAgICAgIHRvdGFsTmZ0cyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YodGhpcy5zdGF0ZS53YWxsZXRBZGRyZXNzKS5jYWxsKCkgICAgXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIFxuICAgICAgICAgIC8vY29uc29sZS5sb2codG90YWxOZnRzKTtcbiAgICAgICAgICBpZih0b3RhbE5mdHMgPiAwKVxuICAgICAgICAgIGZvcih2YXIgaT0wO2kgPCB0b3RhbE5mdHM7aSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgTmZ0aWRzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLnRva2VuT2ZPd25lckJ5SW5kZXgodGhpcy5zdGF0ZS53YWxsZXRBZGRyZXNzLGkpLmNhbGwoKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQ6IFsuLi50aGlzLnN0YXRlLmltYWdlX2lkLCBOZnRpZHNdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgVXJpID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLnRva2VuVVJJKE5mdGlkcykuY2FsbCgpO1xuXG4gICAgICAgICAgYXdhaXQgZmV0Y2goVXJpKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX3VybDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfdXJsLCBkYXRhLmltYWdlXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX25hbWU6IFsuLi50aGlzLnN0YXRlLmltYWdlX25hbWUsIGRhdGEubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKS5hcHBlbmQodGhpcy5jcmVhdGVUb2tlbkVsZW1lbnQoTmZ0aWRzLCBkYXRhLm5hbWUsIGRhdGEuaW1hZ2UpKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05GVCBDb250cmFjdDonK2FkZHJlc1tqXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSWRzOicrTmZ0aWRzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYW1lOicrZGF0YS5uYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUkw6JytkYXRhLmltYWdlKTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIH1cbiAgICBcbiAgICAgIH1cblxuICAgICBjcmVhdGVUb2tlbkVsZW1lbnQoe3Rva2VuX2lkLCAgbmFtZSwgaW1hZ2VfcHJldmlld191cmwgfSkge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZnRfdGVtcGxhdGVcIikuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIGFsZXJ0KG5hbWUpXG4gICAgICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIikuaWQgPSBgJHt0b2tlbl9pZH1gXG4gICAgICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLmlubmVyVGV4dCA9IG5hbWVcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5ocmVmID0gaW1hZ2VfcHJldmlld191cmxcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IGltYWdlX3ByZXZpZXdfdXJsXG4gICAgICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKS5hbHQgPSBuYW1lXG4gICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnRcbiAgICAgIH1cbiAgICAgIFxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==