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
      return __jsx("div", {
        className: "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      });
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

    console.log(_this.props.wallet);
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

        var j, address, contract, totalNfts, _loop, i, baseUrl;

        return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log(addres.length);
                j = 0;

              case 2:
                if (!(j < addres.length)) {
                  _context6.next = 27;
                  break;
                }

                address = addres[j];
                contract = new this.web3.eth.Contract(_contracts_NFT_json__WEBPACK_IMPORTED_MODULE_11__, address);
                /*this.setState({
                  image_contract: [...this.state.image_contract, address]
                });
                */

                this.setState({
                  contract: contract
                });
                totalNfts = 0;
                _context6.prev = 7;
                _context6.next = 10;
                return contract.methods.balanceOf(this.state.walletAddress).call();

              case 10:
                totalNfts = _context6.sent;
                _context6.next = 16;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](7);
                console.log(_context6.t0.message);

              case 16:
                if (!(totalNfts > 0)) {
                  _context6.next = 24;
                  break;
                }

                _loop = /*#__PURE__*/C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _loop() {
                  var Nftids;
                  return C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _loop$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return contract.methods.tokenOfOwnerByIndex(_this2.state.walletAddress, i).call();

                        case 2:
                          Nftids = _context5.sent;

                          _this2.setState({
                            image_id: [].concat((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_id), [Nftids])
                          });

                          _context5.next = 6;
                          return contract.methods.baseURI().call();

                        case 6:
                          baseUrl = _context5.sent;
                          _context5.next = 9;
                          return fetch(baseUrl + Nftids).then(function (response) {
                            return response.json();
                          }).then(function (data) {
                            _this2.setState({
                              image_url: [].concat((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_url), [data.image])
                            });

                            _this2.setState({
                              image_name: [].concat((0,C_Users_Mahesh_nft_transfer_api_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_name), [data.name])
                            });

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

              case 19:
                if (!(i < totalNfts)) {
                  _context6.next = 24;
                  break;
                }

                return _context6.delegateYield(_loop(), "t1", 21);

              case 21:
                i++;
                _context6.next = 19;
                break;

              case 24:
                j++;
                _context6.next = 2;
                break;

              case 27:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, this, [[7, 13]]);
      }));

      function loadBlockchainData(_x3) {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwiQk4iLCJ1dGlscyIsIkhvbWUiLCJwcm9wcyIsIndhbGxldCIsInF1ZXJ5Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJjdXJyZW50QWNjb3VudCIsInNldFN0YXRlIiwiYWNjb3VudCIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIndhbGxldEFkZHJlc3MiLCJjb250cmFjdCIsImltYWdlcyIsIm93bmVycyIsImltYWdlQ29udHJhY3QiLCJpbWFnZV91cmwiLCJpbWFnZV9uYW1lIiwiaW1hZ2VfaWQiLCJkb2N1bWVudCIsInRpdGxlIiwiZXRoRW5hYmxlZCIsImFkZHJlcyIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIk5GVHMiLCJ0b3RhbE5mdHMiLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsIm1lc3NhZ2UiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiTmZ0aWRzIiwiYmFzZVVSSSIsImJhc2VVcmwiLCJpbWFnZSIsIm5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG1EQUFELENBQXBCOztBQUNBLElBQU1DLElBQUksR0FBRyxJQUFJRixJQUFK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R0FBUixDQUFZLFNBQU9aLElBQUksQ0FBQ3VDLEtBQXhCO0FBQ0QsMkJBZEssQzs7Ozs7Ozs7O0FBWEVuQyxpQixHQUFFLEM7OztzQkFBRUEsQ0FBQyxHQUFHMEIsUzs7Ozs7Ozs7QUFBVTFCLGlCQUFDLEU7Ozs7O0FBcEJISyxpQkFBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5SGhCZ0MsNkM7O0FBdUxuQiwrREFBZTdELElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGFlOTNkYjExNGIwOTFkYTFjMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTkZUcyBmcm9tIFwiLi4vY29udHJhY3RzL05GVC5qc29uXCJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5cbmNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKTtcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xuXG4gICBjb25zdCB7IHdhbGxldCB9ID0gcHJvcHMucXVlcnk7XG4gICBcbiAgICByZXR1cm4geyB3YWxsZXQgfTtcbiAgIFxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgXG4gICAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLndhbGxldClcbiAgICAgIFxuICAgICAgXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGFjY291bnQ6ICcnLFxuICAgICAgICAgIHdhbGxldEFkZHJlc3M6IHRoaXMucHJvcHMud2FsbGV0LFxuICAgICAgICAgIGNvbnRyYWN0OiBudWxsLFxuICAgICAgICAgIGltYWdlczogW10sXG4gICAgICAgICAgb3duZXJzOiBbXSxcbiAgICBpbWFnZUNvbnRyYWN0OiBbXSxcbiAgICAgICAgICBpbWFnZV91cmw6IFtdLFxuICAgICAgICAgIGltYWdlX25hbWU6IFtdLFxuICAgIGltYWdlX2lkOiBbXVxuICAgICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIGRvY3VtZW50LnRpdGxlID0gJ015IE5GVCBDb2xsZWN0aW9ucyc7XG4gICAgICBhd2FpdCB0aGlzLmV0aEVuYWJsZWQoKVxuICAgICAgXG4gIH1cblxuICBldGhFbmFibGVkID0gYXN5bmMgKCkgPT4ge1xuICAgXG4gIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBjdXJyZW50QWNjb3VudCB9KTtcbiAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgdGhpcy53ZWIzID0gd2luZG93LndlYjM7XG5cbiAgICB0aGlzLnJlbmRlclRva2Vuc0Zvck93bmVyKGN1cnJlbnRBY2NvdW50KVxuICAgIFxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuICBcbn1cblxuXG5cbnJlbmRlclRva2Vuc0Zvck93bmVyID0gYXN5bmMob3duZXJBZGRyZXNzKSA9PiB7XG5cbnZhciBjb250cmFjdEFkZHJlc2VzID0gW107IC8vIGluaXRpYWxpc2UgYW4gZW1wdHkgYXJyYXlcblxudmFyIFRva2VudXJsID0gYGh0dHBzOi8vYXBpLmJzY3NjYW4uY29tL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249dG9rZW5uZnR0eCZhZGRyZXNzPTB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NSZwYWdlPTEmb2Zmc2V0PTEwMCZzdGFydGJsb2NrPTAmZW5kYmxvY2s9OTk5OTk5OTk5JnNvcnQ9YXNjJmFwaWtleT03TklUNzZFNFhDQ1RZMTdVWkhBUkU1S1pHOVcyWTVUVFNaYDtcblxuYXdhaXQgZmV0Y2goVG9rZW51cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLnRoZW4oZGF0YSA9PiB7XG4gIGlmIChkYXRhLnN0YXR1cyA9PSAwKSB7XG4gICAgLy90b2dnbGVMb2FkaW5nKGZhbHNlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGxlbmd0aCA9IGRhdGEucmVzdWx0Lmxlbmd0aDtcbiAgLy9jb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgZm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXtcblxuICBpZihjb250cmFjdEFkZHJlc2VzLmxlbmd0aCA9PSAwKXtcbiAgICBjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcblxuICB9ZWxzZXtcbiAgIFxuICAgIHZhciBjbnQgPSBjb250cmFjdEFkZHJlc2VzLmxlbmd0aDtcbiAgICB2YXIgaGFzID0gMDtcbiAgICBmb3IodmFyIGo9MDtqPGNudDtqKyspe1xuXG4gICAgIGlmKGNvbnRyYWN0QWRkcmVzZXNbal0gPT0gZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKXtcbiAgICAgICBoYXMgPSAxO1xuICAgICAgIGJyZWFrO1xuICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhcyA9PSAwKXtcblxuICAgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xuXG4gICAgfVxuICAgIFxuXG4gIH1cblxuICAvL2NvbnNvbGUubG9nKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgIH1cbiAgICBcbiAgXG4gIC8vL2NvbnNvbGUubG9nKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoKTtcbn0pO1xuIFxudGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoY29udHJhY3RBZGRyZXNlcyk7XG59XG5cblxuXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YShhZGRyZXMpIHtcbiAgICBjb25zb2xlLmxvZyhhZGRyZXMubGVuZ3RoKTtcblxuICAgIFxuICAgIGZvcih2YXIgaj0wO2ogPCBhZGRyZXMubGVuZ3RoO2orKykge1xuXG4gICAgICAgICAgY29uc3QgYWRkcmVzcyA9IGFkZHJlc1tqXTtcbiAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB0aGlzLndlYjMuZXRoLkNvbnRyYWN0KE5GVHMsIGFkZHJlc3MpXG5cbiAgICAgICAgICAvKnRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VfY29udHJhY3Q6IFsuLi50aGlzLnN0YXRlLmltYWdlX2NvbnRyYWN0LCBhZGRyZXNzXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgICovXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXG4gICAgICAgICAgY29uc3QgdG90YWxOZnRzID0gMDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgIHRvdGFsTmZ0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKHRoaXMuc3RhdGUud2FsbGV0QWRkcmVzcykuY2FsbCgpICAgIFxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFxuICAgICAgICAgIC8vY29uc29sZS5sb2codG90YWxOZnRzKTtcbiAgICAgICAgICBpZih0b3RhbE5mdHMgPiAwKVxuICAgICAgICAgIGZvcih2YXIgaT0wO2kgPCB0b3RhbE5mdHM7aSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgTmZ0aWRzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy50b2tlbk9mT3duZXJCeUluZGV4KHRoaXMuc3RhdGUud2FsbGV0QWRkcmVzcyxpKS5jYWxsKClcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9pZCwgTmZ0aWRzXVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhc2VVUkkoKS5jYWxsKCk7XG5cbiAgICAgICAgICBhd2FpdCBmZXRjaChiYXNlVXJsK05mdGlkcykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV91cmw6IFsuLi50aGlzLnN0YXRlLmltYWdlX3VybCwgZGF0YS5pbWFnZV1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9uYW1lOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9uYW1lLCBkYXRhLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZHM6JytOZnRpZHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05hbWU6JytkYXRhLm5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VSTDonK2RhdGEuaW1hZ2UpO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgfVxuXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9