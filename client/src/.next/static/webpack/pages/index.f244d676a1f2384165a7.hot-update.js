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

                try {
                  contract = new this.web3.eth.Contract(_contracts_NFT_json__WEBPACK_IMPORTED_MODULE_11__, address);
                  this.setState({
                    contract: contract
                  });
                } catch (error) {}
                /*this.setState({
                  image_contract: [...this.state.image_contract, address]
                });
                */


                totalNfts = 0;
                _context6.prev = 6;
                _context6.next = 9;
                return this.state.contract.methods.balanceOf(this.state.walletAddress).call();

              case 9:
                totalNfts = _context6.sent;
                _context6.next = 15;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](6);
                console.log(_context6.t0.message);

              case 15:
                if (!(totalNfts > 0)) {
                  _context6.next = 23;
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
                          return _this2.state.contract.methods.baseURI().call();

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

              case 18:
                if (!(i < totalNfts)) {
                  _context6.next = 23;
                  break;
                }

                return _context6.delegateYield(_loop(), "t1", 20);

              case 20:
                i++;
                _context6.next = 18;
                break;

              case 23:
                console.log(j);

              case 24:
                j++;
                _context6.next = 2;
                break;

              case 27:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, this, [[6, 12]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwiQk4iLCJ1dGlscyIsIkhvbWUiLCJwcm9wcyIsIndhbGxldCIsInF1ZXJ5Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudHMiLCJjdXJyZW50QWNjb3VudCIsInNldFN0YXRlIiwiYWNjb3VudCIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIndhbGxldEFkZHJlc3MiLCJjb250cmFjdCIsImltYWdlcyIsIm93bmVycyIsImltYWdlQ29udHJhY3QiLCJpbWFnZV91cmwiLCJpbWFnZV9uYW1lIiwiaW1hZ2VfaWQiLCJkb2N1bWVudCIsInRpdGxlIiwiZXRoRW5hYmxlZCIsImFkZHJlcyIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIk5GVHMiLCJlcnJvciIsInRvdGFsTmZ0cyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwibWVzc2FnZSIsInRva2VuT2ZPd25lckJ5SW5kZXgiLCJOZnRpZHMiLCJiYXNlVVJJIiwiYmFzZVVybCIsImltYWdlIiwibmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsbURBQUQsQ0FBcEI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLElB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QUFsQztBQURSLDZCQUFkOztBQUlBOUIsbUNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU95QixNQUFuQjtBQUNBMUIsbUNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVFaLElBQUksQ0FBQ3lDLElBQXpCO0FBQ0E5QixtQ0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT1osSUFBSSxDQUFDd0MsS0FBeEI7QUFDRCwyQkFkSyxDOzs7Ozs7Ozs7QUFYRXBDLGlCLEdBQUUsQzs7O3NCQUFFQSxDQUFDLEdBQUcyQixTOzs7Ozs7OztBQUFVM0IsaUJBQUMsRTs7Ozs7QUE4QjNCTyx1QkFBTyxDQUFDQyxHQUFSLENBQVlILENBQVo7OztBQXhEd0JBLGlCQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlIaEJpQyw2Qzs7QUE4TG5CLCtEQUFlOUQsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMjQ0ZDY3NmExZjIzODQxNjVhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBORlRzIGZyb20gXCIuLi9jb250cmFjdHMvTkZULmpzb25cIlxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uL2dldFdlYjNcIjtcblxuY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpO1xuY29uc3Qgd2ViMyA9IG5ldyBXZWIzKCk7XG5jb25zdCBCTiA9IHdlYjMudXRpbHMuQk47XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG5cbiAgIGNvbnN0IHsgd2FsbGV0IH0gPSBwcm9wcy5xdWVyeTtcbiAgIFxuICAgIHJldHVybiB7IHdhbGxldCB9O1xuICAgXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICBcbiAgICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMud2FsbGV0KVxuICAgICAgXG4gICAgICBcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgYWNjb3VudDogJycsXG4gICAgICAgICAgd2FsbGV0QWRkcmVzczogdGhpcy5wcm9wcy53YWxsZXQsXG4gICAgICAgICAgY29udHJhY3Q6IG51bGwsXG4gICAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgICBvd25lcnM6IFtdLFxuICAgIGltYWdlQ29udHJhY3Q6IFtdLFxuICAgICAgICAgIGltYWdlX3VybDogW10sXG4gICAgICAgICAgaW1hZ2VfbmFtZTogW10sXG4gICAgaW1hZ2VfaWQ6IFtdXG4gICAgICB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgZG9jdW1lbnQudGl0bGUgPSAnTXkgTkZUIENvbGxlY3Rpb25zJztcbiAgICAgIGF3YWl0IHRoaXMuZXRoRW5hYmxlZCgpXG4gICAgICBcbiAgfVxuXG4gIGV0aEVuYWJsZWQgPSBhc3luYyAoKSA9PiB7XG4gICBcbiAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgIFxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGN1cnJlbnRBY2NvdW50IH0pO1xuICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICB0aGlzLndlYjMgPSB3aW5kb3cud2ViMztcblxuICAgIHRoaXMucmVuZGVyVG9rZW5zRm9yT3duZXIoY3VycmVudEFjY291bnQpXG4gICAgXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG4gIFxufVxuXG5cblxucmVuZGVyVG9rZW5zRm9yT3duZXIgPSBhc3luYyhvd25lckFkZHJlc3MpID0+IHtcblxudmFyIGNvbnRyYWN0QWRkcmVzZXMgPSBbXTsgLy8gaW5pdGlhbGlzZSBhbiBlbXB0eSBhcnJheVxuXG52YXIgVG9rZW51cmwgPSBgaHR0cHM6Ly9hcGkuYnNjc2Nhbi5jb20vYXBpP21vZHVsZT1hY2NvdW50JmFjdGlvbj10b2tlbm5mdHR4JmFkZHJlc3M9MHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JnBhZ2U9MSZvZmZzZXQ9MTAwJnN0YXJ0YmxvY2s9MCZlbmRibG9jaz05OTk5OTk5OTkmc29ydD1hc2MmYXBpa2V5PTdOSVQ3NkU0WENDVFkxN1VaSEFSRTVLWkc5VzJZNVRUU1pgO1xuXG5hd2FpdCBmZXRjaChUb2tlbnVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4udGhlbihkYXRhID0+IHtcbiAgaWYgKGRhdGEuc3RhdHVzID09IDApIHtcbiAgICAvL3RvZ2dsZUxvYWRpbmcoZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgbGVuZ3RoID0gZGF0YS5yZXN1bHQubGVuZ3RoO1xuICAvL2NvbnNvbGUubG9nKGxlbmd0aCk7XG4gICBmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe1xuXG4gIGlmKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoID09IDApe1xuICAgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xuXG4gIH1lbHNle1xuICAgXG4gICAgdmFyIGNudCA9IGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoO1xuICAgIHZhciBoYXMgPSAwO1xuICAgIGZvcih2YXIgaj0wO2o8Y250O2orKyl7XG5cbiAgICAgaWYoY29udHJhY3RBZGRyZXNlc1tqXSA9PSBkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3Mpe1xuICAgICAgIGhhcyA9IDE7XG4gICAgICAgYnJlYWs7XG4gICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzID09IDApe1xuXG4gICAgY29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgICB9XG4gICAgXG5cbiAgfVxuXG4gIC8vY29uc29sZS5sb2coZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcblxuICAgfVxuICAgIFxuICBcbiAgLy8vY29uc29sZS5sb2coY29udHJhY3RBZGRyZXNlcy5sZW5ndGgpO1xufSk7XG4gXG50aGlzLmxvYWRCbG9ja2NoYWluRGF0YShjb250cmFjdEFkZHJlc2VzKTtcbn1cblxuXG5cbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKGFkZHJlcykge1xuICAgIGNvbnNvbGUubG9nKGFkZHJlcy5sZW5ndGgpO1xuXG4gICAgXG4gICAgZm9yKHZhciBqPTA7aiA8IGFkZHJlcy5sZW5ndGg7aisrKSB7XG4gICAgIFxuICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhZGRyZXNbal07XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHRoaXMud2ViMy5ldGguQ29udHJhY3QoTkZUcywgYWRkcmVzcykgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuXG4gICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGltYWdlX2NvbnRyYWN0OiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9jb250cmFjdCwgYWRkcmVzc11cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgICBjb25zdCB0b3RhbE5mdHMgPSAwO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgdG90YWxOZnRzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZih0aGlzLnN0YXRlLndhbGxldEFkZHJlc3MpLmNhbGwoKSAgICBcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRvdGFsTmZ0cyk7XG4gICAgICAgICAgaWYodG90YWxOZnRzID4gMClcbiAgICAgICAgICBmb3IodmFyIGk9MDtpIDwgdG90YWxOZnRzO2krKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IE5mdGlkcyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy50b2tlbk9mT3duZXJCeUluZGV4KHRoaXMuc3RhdGUud2FsbGV0QWRkcmVzcyxpKS5jYWxsKClcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2lkOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9pZCwgTmZ0aWRzXVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMuYmFzZVVSSSgpLmNhbGwoKTtcblxuICAgICAgICAgIGF3YWl0IGZldGNoKGJhc2VVcmwrTmZ0aWRzKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX3VybDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfdXJsLCBkYXRhLmltYWdlXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX25hbWU6IFsuLi50aGlzLnN0YXRlLmltYWdlX25hbWUsIGRhdGEubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lkczonK05mdGlkcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmFtZTonK2RhdGEubmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVJMOicrZGF0YS5pbWFnZSk7XG4gICAgICAgICAgfSlcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coailcbiAgICAgIH1cbiAgICBcbiAgICAgIH1cblxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==