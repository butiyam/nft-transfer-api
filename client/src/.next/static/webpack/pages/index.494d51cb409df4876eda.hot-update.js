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
    value: function createTokenElement(token_id, name, image_preview_url) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwiQk4iLCJ1dGlscyIsIkhvbWUiLCJwcm9wcyIsIndhbGxldCIsInF1ZXJ5Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJjdXJyZW50QWNjb3VudCIsInNldFN0YXRlIiwiYWNjb3VudCIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsInN0YXRlIiwid2FsbGV0QWRkcmVzcyIsImNvbnRyYWN0IiwiaW1hZ2VzIiwib3duZXJzIiwiaW1hZ2VDb250cmFjdCIsImltYWdlX3VybCIsImltYWdlX25hbWUiLCJpbWFnZV9pZCIsImRvY3VtZW50IiwidGl0bGUiLCJldGhFbmFibGVkIiwiYWRkcmVzIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsInRvdGFsTmZ0cyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG9rZW5PZk93bmVyQnlJbmRleCIsIk5mdGlkcyIsInRva2VuVVJJIiwiVXJpIiwiaW1hZ2UiLCJuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmQiLCJjcmVhdGVUb2tlbkVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwidG9rZW5faWQiLCJpbWFnZV9wcmV2aWV3X3VybCIsIm5ld0VsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJpbm5lclRleHQiLCJocmVmIiwic3JjIiwiYWx0Iiwi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dUNBbUVYa0MsUSxFQUFXTixJLEVBQU1PLGlCLEVBQW1CO0FBQ3BELFVBQU1DLFVBQVUsR0FBR3pCLFFBQVEsQ0FBQ2tCLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NRLE9BQXhDLENBQWdEQyxTQUFoRCxDQUEwRCxJQUExRCxDQUFuQjtBQUNGQyxXQUFLLENBQUNYLElBQUQsQ0FBTDtBQUNFUSxnQkFBVSxDQUFDSSxhQUFYLENBQXlCLFNBQXpCLEVBQW9DQyxFQUFwQyxhQUE0Q1AsUUFBNUM7QUFDQUUsZ0JBQVUsQ0FBQ0ksYUFBWCxDQUF5QixJQUF6QixFQUErQkUsU0FBL0IsR0FBMkNkLElBQTNDO0FBQ0FRLGdCQUFVLENBQUNJLGFBQVgsQ0FBeUIsR0FBekIsRUFBOEJHLElBQTlCLEdBQXFDUixpQkFBckM7QUFDQUMsZ0JBQVUsQ0FBQ0ksYUFBWCxDQUF5QixLQUF6QixFQUFnQ0ksR0FBaEMsR0FBc0NULGlCQUF0QztBQUNBQyxnQkFBVSxDQUFDSSxhQUFYLENBQXlCLEtBQXpCLEVBQWdDSyxHQUFoQyxHQUFzQ2pCLElBQXRDO0FBRUEsYUFBT1EsVUFBUDtBQUNEOzs7O0VBak5ZVSw2Qzs7QUFzTm5CLCtEQUFlM0UsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OTRkNTFjYjQwOWRmNDg3NmVkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBORlRzIGZyb20gXCIuLi9jb250cmFjdHMvTkZULmpzb25cIlxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcblxuY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpO1xuY29uc3Qgd2ViMyA9IG5ldyBXZWIzKCk7XG5jb25zdCBCTiA9IHdlYjMudXRpbHMuQk47XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG5cbiAgIGNvbnN0IHsgd2FsbGV0IH0gPSBwcm9wcy5xdWVyeTtcbiAgIFxuICAgIHJldHVybiB7IHdhbGxldCB9O1xuICAgXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD48ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpZD1cIm5mdF90ZW1wbGF0ZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctNDggZmxleCBqdXN0aWZ5LWFyb3VuZCBmbGV4LWNvbCBiZy1ibHVlLTEwMCBweC0yIHB5LTEgcm91bmRlZC1tZFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmxhY2sgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPjwvaDE+XG4gICAgXG4gICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiBjbGFzcz1cInJvdW5kZWQtbWRcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgICApXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIFxuICAgICAgXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGFjY291bnQ6ICcnLFxuICAgICAgICAgIHdhbGxldEFkZHJlc3M6IHRoaXMucHJvcHMud2FsbGV0LFxuICAgICAgICAgIGNvbnRyYWN0OiBudWxsLFxuICAgICAgICAgIGltYWdlczogW10sXG4gICAgICAgICAgb3duZXJzOiBbXSxcbiAgICBpbWFnZUNvbnRyYWN0OiBbXSxcbiAgICAgICAgICBpbWFnZV91cmw6IFtdLFxuICAgICAgICAgIGltYWdlX25hbWU6IFtdLFxuICAgIGltYWdlX2lkOiBbXVxuICAgICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIGRvY3VtZW50LnRpdGxlID0gJ015IE5GVCBDb2xsZWN0aW9ucyc7XG4gICAgICBhd2FpdCB0aGlzLmV0aEVuYWJsZWQoKVxuICAgICAgXG4gIH1cblxuICBldGhFbmFibGVkID0gYXN5bmMgKCkgPT4ge1xuICAgXG4gIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBjdXJyZW50QWNjb3VudCB9KTtcbiAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgdGhpcy53ZWIzID0gd2luZG93LndlYjM7XG5cbiAgICB0aGlzLnJlbmRlclRva2Vuc0Zvck93bmVyKGN1cnJlbnRBY2NvdW50KVxuICAgIFxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuICBcbn1cblxuXG5cbnJlbmRlclRva2Vuc0Zvck93bmVyID0gYXN5bmMob3duZXJBZGRyZXNzKSA9PiB7XG5cbnZhciBjb250cmFjdEFkZHJlc2VzID0gW107IC8vIGluaXRpYWxpc2UgYW4gZW1wdHkgYXJyYXlcblxudmFyIFRva2VudXJsID0gYGh0dHBzOi8vYXBpLmJzY3NjYW4uY29tL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249dG9rZW5uZnR0eCZhZGRyZXNzPTB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NSZwYWdlPTEmb2Zmc2V0PTEwMCZzdGFydGJsb2NrPTAmZW5kYmxvY2s9OTk5OTk5OTk5JnNvcnQ9YXNjJmFwaWtleT03TklUNzZFNFhDQ1RZMTdVWkhBUkU1S1pHOVcyWTVUVFNaYDtcblxuYXdhaXQgZmV0Y2goVG9rZW51cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLnRoZW4oZGF0YSA9PiB7XG4gIGlmIChkYXRhLnN0YXR1cyA9PSAwKSB7XG4gICAgLy90b2dnbGVMb2FkaW5nKGZhbHNlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGxlbmd0aCA9IGRhdGEucmVzdWx0Lmxlbmd0aDtcbiAgLy9jb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgZm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXtcblxuICBpZihjb250cmFjdEFkZHJlc2VzLmxlbmd0aCA9PSAwKXtcbiAgICBjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcblxuICB9ZWxzZXtcbiAgIFxuICAgIHZhciBjbnQgPSBjb250cmFjdEFkZHJlc2VzLmxlbmd0aDtcbiAgICB2YXIgaGFzID0gMDtcbiAgICBmb3IodmFyIGo9MDtqPGNudDtqKyspe1xuXG4gICAgIGlmKGNvbnRyYWN0QWRkcmVzZXNbal0gPT0gZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKXtcbiAgICAgICBoYXMgPSAxO1xuICAgICAgIGJyZWFrO1xuICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhcyA9PSAwKXtcblxuICAgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xuXG4gICAgfVxuICAgIFxuXG4gIH1cblxuICAvL2NvbnNvbGUubG9nKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgIH1cbiAgICBcbiAgXG4gIC8vL2NvbnNvbGUubG9nKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoKTtcbn0pO1xuIFxudGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoY29udHJhY3RBZGRyZXNlcyk7XG59XG5cblxuXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YShhZGRyZXMpIHtcblxuICAgIFxuICAgIGZvcih2YXIgaj0wO2ogPCBhZGRyZXMubGVuZ3RoO2orKykge1xuICAgICBcbiAgICAgICAgICBjb25zdCBhZGRyZXNzID0gYWRkcmVzW2pdO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IG5ldyB0aGlzLndlYjMuZXRoLkNvbnRyYWN0KE5GVHMsIGFkZHJlc1tqXSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgXG5cbiAgICAgICAgICAvKnRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VfY29udHJhY3Q6IFsuLi50aGlzLnN0YXRlLmltYWdlX2NvbnRyYWN0LCBhZGRyZXNzXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgICovXG4gICAgICAgIFxuICAgICAgICAgIGNvbnN0IHRvdGFsTmZ0cyA9IDA7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY29udHJhY3QpXG4gICAgICAgICAgICAgdG90YWxOZnRzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZih0aGlzLnN0YXRlLndhbGxldEFkZHJlc3MpLmNhbGwoKSAgICBcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0b3RhbE5mdHMpO1xuICAgICAgICAgIGlmKHRvdGFsTmZ0cyA+IDApXG4gICAgICAgICAgZm9yKHZhciBpPTA7aSA8IHRvdGFsTmZ0cztpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBOZnRpZHMgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMudG9rZW5PZk93bmVyQnlJbmRleCh0aGlzLnN0YXRlLndhbGxldEFkZHJlc3MsaSkuY2FsbCgpXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfaWQsIE5mdGlkc11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBVcmkgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkoTmZ0aWRzKS5jYWxsKCk7XG5cbiAgICAgICAgICBhd2FpdCBmZXRjaChVcmkpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdXJsOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV91cmwsIGRhdGEuaW1hZ2VdXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbmFtZTogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfbmFtZSwgZGF0YS5uYW1lXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZCh0aGlzLmNyZWF0ZVRva2VuRWxlbWVudChOZnRpZHMsIGRhdGEubmFtZSwgZGF0YS5pbWFnZSkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTkZUIENvbnRyYWN0OicrYWRkcmVzW2pdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZHM6JytOZnRpZHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05hbWU6JytkYXRhLm5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VSTDonK2RhdGEuaW1hZ2UpO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgfVxuICAgIFxuICAgICAgfVxuXG4gICAgIGNyZWF0ZVRva2VuRWxlbWVudCh0b2tlbl9pZCwgIG5hbWUsIGltYWdlX3ByZXZpZXdfdXJsKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5mdF90ZW1wbGF0ZVwiKS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgYWxlcnQobmFtZSlcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKS5pZCA9IGAke3Rva2VuX2lkfWBcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikuaW5uZXJUZXh0ID0gbmFtZVxuICAgICAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmhyZWYgPSBpbWFnZV9wcmV2aWV3X3VybFxuICAgICAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gaW1hZ2VfcHJldmlld191cmxcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLmFsdCA9IG5hbWVcbiAgICAgIFxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudFxuICAgICAgfVxuICAgICAgXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9