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

                            document.getElementById("container").append(createTokenElement(Nftids, data.name, data.image));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwiQk4iLCJ1dGlscyIsIkhvbWUiLCJwcm9wcyIsIndhbGxldCIsInF1ZXJ5Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJjdXJyZW50QWNjb3VudCIsInNldFN0YXRlIiwiYWNjb3VudCIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsInN0YXRlIiwid2FsbGV0QWRkcmVzcyIsImNvbnRyYWN0IiwiaW1hZ2VzIiwib3duZXJzIiwiaW1hZ2VDb250cmFjdCIsImltYWdlX3VybCIsImltYWdlX25hbWUiLCJpbWFnZV9pZCIsImRvY3VtZW50IiwidGl0bGUiLCJldGhFbmFibGVkIiwiYWRkcmVzIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsInRvdGFsTmZ0cyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG9rZW5PZk93bmVyQnlJbmRleCIsIk5mdGlkcyIsInRva2VuVVJJIiwiVXJpIiwiaW1hZ2UiLCJuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmQiLCJjcmVhdGVUb2tlbkVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwidG9rZW5faWQiLCJpbWFnZV9wcmV2aWV3X3VybCIsIm5ld0VsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwicXVlcnlTZWxlY3RvciIsImlkIiwiaW5uZXJUZXh0IiwiaHJlZiIsInNyYyIsImFsdCIsIkNvbXBvbmVu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UUFBc0MsU0FBdENBLFFBQXNDO0FBQUEsVUFBM0JOLElBQTJCLFNBQTNCQSxJQUEyQjtBQUFBLFVBQXJCTyxpQkFBcUIsU0FBckJBLGlCQUFxQjtBQUN2RCxVQUFNQyxVQUFVLEdBQUd6QixRQUFRLENBQUNrQixjQUFULENBQXdCLGNBQXhCLEVBQXdDUSxPQUF4QyxDQUFnREMsU0FBaEQsQ0FBMEQsSUFBMUQsQ0FBbkI7QUFFQUYsZ0JBQVUsQ0FBQ0csYUFBWCxDQUF5QixTQUF6QixFQUFvQ0MsRUFBcEMsYUFBNENOLFFBQTVDO0FBQ0FFLGdCQUFVLENBQUNHLGFBQVgsQ0FBeUIsSUFBekIsRUFBK0JFLFNBQS9CLEdBQTJDYixJQUEzQztBQUNBUSxnQkFBVSxDQUFDRyxhQUFYLENBQXlCLEdBQXpCLEVBQThCRyxJQUE5QixHQUFxQ1AsaUJBQXJDO0FBQ0FDLGdCQUFVLENBQUNHLGFBQVgsQ0FBeUIsS0FBekIsRUFBZ0NJLEdBQWhDLEdBQXNDUixpQkFBdEM7QUFDQUMsZ0JBQVUsQ0FBQ0csYUFBWCxDQUF5QixLQUF6QixFQUFnQ0ssR0FBaEMsR0FBc0NoQixJQUF0QztBQUVBLGFBQU9RLFVBQVA7QUFDRDs7OztFQWpOWVMsNkM7O0FBc05uQiwrREFBZTFFLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGRkZTAzYTk4MDlkZDFhMTliMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTkZUcyBmcm9tIFwiLi4vY29udHJhY3RzL05GVC5qc29uXCJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5cbmNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKTtcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xuXG4gICBjb25zdCB7IHdhbGxldCB9ID0gcHJvcHMucXVlcnk7XG4gICBcbiAgICByZXR1cm4geyB3YWxsZXQgfTtcbiAgIFxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+PGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dGVtcGxhdGUgaWQ9XCJuZnRfdGVtcGxhdGVcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LTQ4IGZsZXgganVzdGlmeS1hcm91bmQgZmxleC1jb2wgYmctYmx1ZS0xMDAgcHgtMiBweS0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGRcIj48L2gxPlxuICAgIFxuICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgY2xhc3M9XCJyb3VuZGVkLW1kXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICAgKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICBcbiAgICAgIFxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBhY2NvdW50OiAnJyxcbiAgICAgICAgICB3YWxsZXRBZGRyZXNzOiB0aGlzLnByb3BzLndhbGxldCxcbiAgICAgICAgICBjb250cmFjdDogbnVsbCxcbiAgICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICAgIG93bmVyczogW10sXG4gICAgaW1hZ2VDb250cmFjdDogW10sXG4gICAgICAgICAgaW1hZ2VfdXJsOiBbXSxcbiAgICAgICAgICBpbWFnZV9uYW1lOiBbXSxcbiAgICBpbWFnZV9pZDogW11cbiAgICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICBkb2N1bWVudC50aXRsZSA9ICdNeSBORlQgQ29sbGVjdGlvbnMnO1xuICAgICAgYXdhaXQgdGhpcy5ldGhFbmFibGVkKClcbiAgICAgIFxuICB9XG5cbiAgZXRoRW5hYmxlZCA9IGFzeW5jICgpID0+IHtcbiAgIFxuICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgICAgY29uc3QgY3VycmVudEFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogY3VycmVudEFjY291bnQgfSk7XG4gICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgIHRoaXMud2ViMyA9IHdpbmRvdy53ZWIzO1xuXG4gICAgdGhpcy5yZW5kZXJUb2tlbnNGb3JPd25lcihjdXJyZW50QWNjb3VudClcbiAgICBcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbiAgXG59XG5cblxuXG5yZW5kZXJUb2tlbnNGb3JPd25lciA9IGFzeW5jKG93bmVyQWRkcmVzcykgPT4ge1xuXG52YXIgY29udHJhY3RBZGRyZXNlcyA9IFtdOyAvLyBpbml0aWFsaXNlIGFuIGVtcHR5IGFycmF5XG5cbnZhciBUb2tlbnVybCA9IGBodHRwczovL2FwaS5ic2NzY2FuLmNvbS9hcGk/bW9kdWxlPWFjY291bnQmYWN0aW9uPXRva2VubmZ0dHgmYWRkcmVzcz0weDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUmcGFnZT0xJm9mZnNldD0xMDAmc3RhcnRibG9jaz0wJmVuZGJsb2NrPTk5OTk5OTk5OSZzb3J0PWFzYyZhcGlrZXk9N05JVDc2RTRYQ0NUWTE3VVpIQVJFNUtaRzlXMlk1VFRTWmA7XG5cbmF3YWl0IGZldGNoKFRva2VudXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi50aGVuKGRhdGEgPT4ge1xuICBpZiAoZGF0YS5zdGF0dXMgPT0gMCkge1xuICAgIC8vdG9nZ2xlTG9hZGluZyhmYWxzZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBsZW5ndGggPSBkYXRhLnJlc3VsdC5sZW5ndGg7XG4gIC8vY29uc29sZS5sb2cobGVuZ3RoKTtcbiAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7XG5cbiAgaWYoY29udHJhY3RBZGRyZXNlcy5sZW5ndGggPT0gMCl7XG4gICAgY29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgfWVsc2V7XG4gICBcbiAgICB2YXIgY250ID0gY29udHJhY3RBZGRyZXNlcy5sZW5ndGg7XG4gICAgdmFyIGhhcyA9IDA7XG4gICAgZm9yKHZhciBqPTA7ajxjbnQ7aisrKXtcblxuICAgICBpZihjb250cmFjdEFkZHJlc2VzW2pdID09IGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyl7XG4gICAgICAgaGFzID0gMTtcbiAgICAgICBicmVhaztcbiAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXMgPT0gMCl7XG5cbiAgICBjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcblxuICAgIH1cbiAgICBcblxuICB9XG5cbiAgLy9jb25zb2xlLmxvZyhkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xuXG4gICB9XG4gICAgXG4gIFxuICAvLy9jb25zb2xlLmxvZyhjb250cmFjdEFkZHJlc2VzLmxlbmd0aCk7XG59KTtcbiBcbnRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKGNvbnRyYWN0QWRkcmVzZXMpO1xufVxuXG5cblxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoYWRkcmVzKSB7XG5cbiAgICBcbiAgICBmb3IodmFyIGo9MDtqIDwgYWRkcmVzLmxlbmd0aDtqKyspIHtcbiAgICAgXG4gICAgICAgICAgY29uc3QgYWRkcmVzcyA9IGFkZHJlc1tqXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBuZXcgdGhpcy53ZWIzLmV0aC5Db250cmFjdChORlRzLCBhZGRyZXNbal0pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuXG4gICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGltYWdlX2NvbnRyYWN0OiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9jb250cmFjdCwgYWRkcmVzc11cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgICBjb25zdCB0b3RhbE5mdHMgPSAwO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvbnRyYWN0KVxuICAgICAgICAgICAgIHRvdGFsTmZ0cyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YodGhpcy5zdGF0ZS53YWxsZXRBZGRyZXNzKS5jYWxsKCkgICAgXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIFxuICAgICAgICAgIC8vY29uc29sZS5sb2codG90YWxOZnRzKTtcbiAgICAgICAgICBpZih0b3RhbE5mdHMgPiAwKVxuICAgICAgICAgIGZvcih2YXIgaT0wO2kgPCB0b3RhbE5mdHM7aSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgTmZ0aWRzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLnRva2VuT2ZPd25lckJ5SW5kZXgodGhpcy5zdGF0ZS53YWxsZXRBZGRyZXNzLGkpLmNhbGwoKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQ6IFsuLi50aGlzLnN0YXRlLmltYWdlX2lkLCBOZnRpZHNdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgVXJpID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLnRva2VuVVJJKE5mdGlkcykuY2FsbCgpO1xuXG4gICAgICAgICAgYXdhaXQgZmV0Y2goVXJpKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX3VybDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfdXJsLCBkYXRhLmltYWdlXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX25hbWU6IFsuLi50aGlzLnN0YXRlLmltYWdlX25hbWUsIGRhdGEubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKS5hcHBlbmQoY3JlYXRlVG9rZW5FbGVtZW50KE5mdGlkcywgZGF0YS5uYW1lLCBkYXRhLmltYWdlKSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdORlQgQ29udHJhY3Q6JythZGRyZXNbal0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lkczonK05mdGlkcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmFtZTonK2RhdGEubmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVJMOicrZGF0YS5pbWFnZSk7XG4gICAgICAgICAgfSlcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICB9XG4gICAgXG4gICAgICB9XG5cbiAgICAgY3JlYXRlVG9rZW5FbGVtZW50KHt0b2tlbl9pZCwgIG5hbWUsIGltYWdlX3ByZXZpZXdfdXJsIH0pIHtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmZ0X3RlbXBsYXRlXCIpLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICBcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKS5pZCA9IGAke3Rva2VuX2lkfWBcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikuaW5uZXJUZXh0ID0gbmFtZVxuICAgICAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmhyZWYgPSBpbWFnZV9wcmV2aWV3X3VybFxuICAgICAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gaW1hZ2VfcHJldmlld191cmxcbiAgICAgICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLmFsdCA9IG5hbWVcbiAgICAgIFxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudFxuICAgICAgfVxuICAgICAgXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9