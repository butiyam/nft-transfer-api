self["webpackHotUpdate_N_E"]("pages/index",{

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
      return __jsx("div", {
        className: "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }, "Hi");
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
      walletAddress: '',
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
        var _this2 = this;

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

                          _this2.setState({
                            image_id: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_id), [Nftids])
                          });

                          _context4.next = 6;
                          return contract.methods.baseURI().call();

                        case 6:
                          baseUrl = _context4.sent;
                          _context4.next = 9;
                          return fetch(baseUrl + Nftids).then(function (response) {
                            return response.json();
                          }).then(function (data) {
                            _this2.setState({
                              image_url: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_url), [data.image])
                            });

                            _this2.setState({
                              image_name: [].concat((0,E_8MB_MNW_MARKETPLACE_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this2.state.image_name), [data.name])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJDb2luR2Vja28iLCJyZXF1aXJlIiwiQ29pbkdlY2tvQ2xpZW50IiwiV2ViMyIsIndlYjMiLCJCTiIsInV0aWxzIiwiSGVhZGVyIiwicHJvcHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhY2NvdW50cyIsImN1cnJlbnRBY2NvdW50Iiwic2V0U3RhdGUiLCJhY2NvdW50IiwicmVuZGVyVG9rZW5zRm9yT3duZXIiLCJvd25lckFkZHJlc3MiLCJjb250cmFjdEFkZHJlc2VzIiwiVG9rZW51cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwibGVuZ3RoIiwicmVzdWx0IiwiaSIsInB1c2giLCJjb250cmFjdEFkZHJlc3MiLCJjbnQiLCJoYXMiLCJqIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwic3RhdGUiLCJ3YWxsZXRBZGRyZXNzIiwiY29udHJhY3QiLCJpbWFnZXMiLCJvd25lcnMiLCJpbWFnZUNvbnRyYWN0IiwiaW1hZ2VfdXJsIiwiaW1hZ2VfbmFtZSIsImltYWdlX2lkIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImV0aEVuYWJsZWQiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJORlRzIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJ0b3RhbE5mdHMiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiTmZ0aWRzIiwiYmFzZVVSSSIsImJhc2VVcmwiLCJpbWFnZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw2REFBRCxDQUF6Qjs7QUFD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QUFXUSxRQUFqQixJQUEyQmEsTUFBM0I7QUFEViwyQkFBZDs7O2lDQUlvQm5CLFFBQVEsQ0FBQ2MsT0FBVCxDQUFpQk0sT0FBakIsR0FBMkJKLElBQTNCLEU7OztBQUFoQkssaUM7O2lDQUVDdEMsS0FBSyxDQUFDc0MsT0FBTyxHQUFDRixNQUFULENBQUwsQ0FBc0JuQyxJQUF0QixDQUEyQixVQUFBQyxRQUFRO0FBQUEsbUNBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsMkJBQW5DLEVBQ0pGLElBREksQ0FDQyxVQUFBRyxJQUFJLEVBQUk7QUFFZCxrQ0FBSSxDQUFDVixRQUFMLENBQWM7QUFDRTJCLHVDQUFTLDZKQUFNLE1BQUksQ0FBQ04sS0FBTCxDQUFXTSxTQUFqQixJQUE0QmpCLElBQUksQ0FBQ21DLEtBQWpDO0FBRFgsNkJBQWQ7O0FBSUEsa0NBQUksQ0FBQzdDLFFBQUwsQ0FBYztBQUNFNEIsd0NBQVUsNkpBQU0sTUFBSSxDQUFDUCxLQUFMLENBQVdPLFVBQWpCLElBQTZCbEIsSUFBSSxDQUFDb0MsSUFBbEM7QUFEWiw2QkFBZDs7QUFJQUMsbUNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU9OLE1BQW5CO0FBQ0FLLG1DQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFRdEMsSUFBSSxDQUFDb0MsSUFBekI7QUFDQUMsbUNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU90QyxJQUFJLENBQUNtQyxLQUF4QjtBQUNBLDJCQWRLLEM7Ozs7Ozs7OztBQVhFL0IsaUIsR0FBRSxDOzs7c0JBQUVBLENBQUMsR0FBRzBCLFM7Ozs7Ozs7O0FBQVUxQixpQkFBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvSFRtQyw2Qzs7QUFtS3JCLCtEQUFlekQsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNjllNzFkOGQwYTI3NTRjM2M2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5GVHMgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnRyYWN0cy9ORlQuanNvblwiOyAgIFxyXG5pbXBvcnQgZ2V0V2ViMyBmcm9tIFwiLi4vLi4vLi4vLi4vZ2V0V2ViM1wiO1xyXG5cclxuXHJcbmNvbnN0IENvaW5HZWNrbyA9IHJlcXVpcmUoJ2NvaW5nZWNrby1hcGknKTtcclxuY29uc3QgQ29pbkdlY2tvQ2xpZW50ID0gbmV3IENvaW5HZWNrbygpO1xyXG5cclxuY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpO1xyXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoKTtcclxuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcblx0XHRcdFxyXG5IaVxyXG5cdFx0XHRcclxuXHRcdDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjY291bnQ6ICcnLFxyXG4gICAgICAgICAgICB3YWxsZXRBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgY29udHJhY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIGltYWdlczogW10sXHJcbiAgICAgICAgICAgIG93bmVyczogW10sXHJcblx0XHRcdGltYWdlQ29udHJhY3Q6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZV91cmw6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZV9uYW1lOiBbXSxcclxuXHRcdFx0aW1hZ2VfaWQ6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0ZG9jdW1lbnQudGl0bGUgPSAnTXkgTkZUIENvbGxlY3Rpb25zJztcclxuICAgICAgICBhd2FpdCB0aGlzLmV0aEVuYWJsZWQoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV0aEVuYWJsZWQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHQgXHJcblx0XHRpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEFjY291bnQgPSBhY2NvdW50c1swXTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBjdXJyZW50QWNjb3VudCB9KTtcclxuXHRcdFx0d2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG5cdFx0XHR0aGlzLndlYjMgPSB3aW5kb3cud2ViMztcclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVG9rZW5zRm9yT3duZXIoY3VycmVudEFjY291bnQpXHJcblx0XHRcdFxyXG5cdFxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxuIHJlbmRlclRva2Vuc0Zvck93bmVyID0gYXN5bmMob3duZXJBZGRyZXNzKSA9PiB7XHJcbiAgXHJcblx0dmFyIGNvbnRyYWN0QWRkcmVzZXMgPSBbXTsgLy8gaW5pdGlhbGlzZSBhbiBlbXB0eSBhcnJheVxyXG4gIFxyXG5cdHZhciBUb2tlbnVybCA9IGBodHRwczovL2FwaS5ic2NzY2FuLmNvbS9hcGk/bW9kdWxlPWFjY291bnQmYWN0aW9uPXRva2VubmZ0dHgmYWRkcmVzcz0weDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUmcGFnZT0xJm9mZnNldD0xMDAmc3RhcnRibG9jaz0wJmVuZGJsb2NrPTk5OTk5OTk5OSZzb3J0PWFzYyZhcGlrZXk9N05JVDc2RTRYQ0NUWTE3VVpIQVJFNUtaRzlXMlk1VFRTWmA7XHJcblx0XHJcblx0YXdhaXQgZmV0Y2goVG9rZW51cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0aWYgKGRhdGEuc3RhdHVzID09IDApIHtcclxuXHRcdFx0Ly90b2dnbGVMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGRhdGEucmVzdWx0Lmxlbmd0aDtcclxuXHRcdC8vY29uc29sZS5sb2cobGVuZ3RoKTtcclxuXHQgICBmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe1xyXG4gIFxyXG5cdFx0aWYoY29udHJhY3RBZGRyZXNlcy5sZW5ndGggPT0gMCl7XHJcblx0XHQgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdFx0fWVsc2V7XHJcblx0ICAgXHJcblx0XHQgIHZhciBjbnQgPSBjb250cmFjdEFkZHJlc2VzLmxlbmd0aDtcclxuXHRcdCAgdmFyIGhhcyA9IDA7XHJcblx0XHQgIGZvcih2YXIgaj0wO2o8Y250O2orKyl7XHJcbiAgXHJcblx0XHRcdCBpZihjb250cmFjdEFkZHJlc2VzW2pdID09IGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyl7XHJcblx0XHRcdFx0IGhhcyA9IDE7XHJcblx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHQgfVxyXG5cdFx0ICB9XHJcbiAgXHJcblx0XHQgIGlmIChoYXMgPT0gMCl7XHJcbiAgXHJcblx0XHRcdGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdFx0ICB9XHJcblx0XHQgIFxyXG4gIFxyXG5cdFx0fVxyXG4gIFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdCAgIH1cclxuXHRcdCAgXHJcblx0XHRcclxuXHRcdC8vL2NvbnNvbGUubG9nKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoKTtcclxuXHR9KTtcclxuICAgXHJcblx0dGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAvLyBjb25zdCBuZXR3b3JrRGF0YSA9IE5GVHMubmV0d29ya3NbdGhpcy5uZXR3b3JrSWRdXHJcbiAgICAgICAgLy9pZiAobmV0d29ya0RhdGEpIHtcclxuICAgICAgICAgICAgLy9jb25zdCBhYmkgPSBORlRzLmFiaVxyXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gJzB4YzU0Yjk2YjA0QUE4ODI4YjYzQ2YyNTA0MDhFMTA4NEU5RjZBYzZjOCcvL25ldHdvcmtEYXRhLmFkZHJlc3NcclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgdGhpcy53ZWIzLmV0aC5Db250cmFjdChORlRzLCBhZGRyZXNzKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250cmFjdClcclxuXHJcblx0XHRcdC8qdGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0aW1hZ2VfY29udHJhY3Q6IFsuLi50aGlzLnN0YXRlLmltYWdlX2NvbnRyYWN0LCBhZGRyZXNzXVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ki9cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsTmZ0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKCcweDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUnKS5jYWxsKClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0b3RhbE5mdHMpO1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpIDwgdG90YWxOZnRzO2krKyl7XHJcblx0XHRcdFx0Y29uc3QgTmZ0aWRzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy50b2tlbk9mT3duZXJCeUluZGV4KCcweDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUnLGkpLmNhbGwoKVxyXG5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQ6IFsuLi50aGlzLnN0YXRlLmltYWdlX2lkLCBOZnRpZHNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblx0XHRcdFx0dmFyIGJhc2VVcmwgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhc2VVUkkoKS5jYWxsKCk7XHJcblxyXG5cdFx0XHRhd2FpdCBmZXRjaChiYXNlVXJsK05mdGlkcykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX3VybDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfdXJsLCBkYXRhLmltYWdlXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbmFtZTogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfbmFtZSwgZGF0YS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0lkczonK05mdGlkcyk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ05hbWU6JytkYXRhLm5hbWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdVUkw6JytkYXRhLmltYWdlKTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==