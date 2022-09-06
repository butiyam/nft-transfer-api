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
          lineNumber: 15,
          columnNumber: 13
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJXZWIzIiwicmVxdWlyZSIsIndlYjMiLCJCTiIsInV0aWxzIiwiSGVhZGVyIiwicHJvcHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhY2NvdW50cyIsImN1cnJlbnRBY2NvdW50Iiwic2V0U3RhdGUiLCJhY2NvdW50IiwicmVuZGVyVG9rZW5zRm9yT3duZXIiLCJvd25lckFkZHJlc3MiLCJjb250cmFjdEFkZHJlc2VzIiwiVG9rZW51cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwibGVuZ3RoIiwicmVzdWx0IiwiaSIsInB1c2giLCJjb250cmFjdEFkZHJlc3MiLCJjbnQiLCJoYXMiLCJqIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwic3RhdGUiLCJ3YWxsZXRBZGRyZXNzIiwiY29udHJhY3QiLCJpbWFnZXMiLCJvd25lcnMiLCJpbWFnZUNvbnRyYWN0IiwiaW1hZ2VfdXJsIiwiaW1hZ2VfbmFtZSIsImltYWdlX2lkIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImV0aEVuYWJsZWQiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJORlRzIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJ0b3RhbE5mdHMiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiTmZ0aWRzIiwiYmFzZVVSSSIsImJhc2VVcmwiLCJpbWFnZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxtREFBRCxDQUFwQjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUYsSUFBSixF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LENBQUNzQyxPQUFPLEdBQUNGLE1BQVQsQ0FBTCxDQUFzQm5DLElBQXRCLENBQTJCLFVBQUFDLFFBQVE7QUFBQSxtQ0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSwyQkFBbkMsRUFDSkYsSUFESSxDQUNDLFVBQUFHLElBQUksRUFBSTtBQUVkLGtDQUFJLENBQUNWLFFBQUwsQ0FBYztBQUNFMkIsdUNBQVMsNkpBQU0sTUFBSSxDQUFDTixLQUFMLENBQVdNLFNBQWpCLElBQTRCakIsSUFBSSxDQUFDbUMsS0FBakM7QUFEWCw2QkFBZDs7QUFJQSxrQ0FBSSxDQUFDN0MsUUFBTCxDQUFjO0FBQ0U0Qix3Q0FBVSw2SkFBTSxNQUFJLENBQUNQLEtBQUwsQ0FBV08sVUFBakIsSUFBNkJsQixJQUFJLENBQUNvQyxJQUFsQztBQURaLDZCQUFkOztBQUlBQyxtQ0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT04sTUFBbkI7QUFDQUssbUNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVF0QyxJQUFJLENBQUNvQyxJQUF6QjtBQUNBQyxtQ0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT3RDLElBQUksQ0FBQ21DLEtBQXhCO0FBQ0EsMkJBZEssQzs7Ozs7Ozs7O0FBWEUvQixpQixHQUFFLEM7OztzQkFBRUEsQ0FBQyxHQUFHMEIsUzs7Ozs7Ozs7QUFBVTFCLGlCQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9IVG1DLDZDOztBQW1LckIsK0RBQWV6RCxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2MGIzOTI4YTMzOTg0ZjU5MGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTkZUcyBmcm9tIFwiLi4vLi4vLi4vLi4vY29udHJhY3RzL05GVC5qc29uXCI7ICAgXHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9nZXRXZWIzXCI7XHJcblxyXG5cclxuY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpO1xyXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoKTtcclxuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHJcblx0XHQ8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY2NvdW50OiAnJyxcclxuICAgICAgICAgICAgd2FsbGV0QWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGNvbnRyYWN0OiBudWxsLFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICAgICAgICBvd25lcnM6IFtdLFxyXG5cdFx0XHRpbWFnZUNvbnRyYWN0OiBbXSxcclxuICAgICAgICAgICAgaW1hZ2VfdXJsOiBbXSxcclxuICAgICAgICAgICAgaW1hZ2VfbmFtZTogW10sXHJcblx0XHRcdGltYWdlX2lkOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGRvY3VtZW50LnRpdGxlID0gJ015IE5GVCBDb2xsZWN0aW9ucyc7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ldGhFbmFibGVkKClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBldGhFbmFibGVkID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0IFxyXG5cdFx0aWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gYWNjb3VudHNbMF07XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogY3VycmVudEFjY291bnQgfSk7XHJcblx0XHRcdHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuXHRcdFx0dGhpcy53ZWIzID0gd2luZG93LndlYjM7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRva2Vuc0Zvck93bmVyKGN1cnJlbnRBY2NvdW50KVxyXG5cdFx0XHRcclxuXHRcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuXHJcbiByZW5kZXJUb2tlbnNGb3JPd25lciA9IGFzeW5jKG93bmVyQWRkcmVzcykgPT4ge1xyXG4gIFxyXG5cdHZhciBjb250cmFjdEFkZHJlc2VzID0gW107IC8vIGluaXRpYWxpc2UgYW4gZW1wdHkgYXJyYXlcclxuICBcclxuXHR2YXIgVG9rZW51cmwgPSBgaHR0cHM6Ly9hcGkuYnNjc2Nhbi5jb20vYXBpP21vZHVsZT1hY2NvdW50JmFjdGlvbj10b2tlbm5mdHR4JmFkZHJlc3M9MHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JnBhZ2U9MSZvZmZzZXQ9MTAwJnN0YXJ0YmxvY2s9MCZlbmRibG9jaz05OTk5OTk5OTkmc29ydD1hc2MmYXBpa2V5PTdOSVQ3NkU0WENDVFkxN1VaSEFSRTVLWkc5VzJZNVRUU1pgO1xyXG5cdFxyXG5cdGF3YWl0IGZldGNoKFRva2VudXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHQudGhlbihkYXRhID0+IHtcclxuXHRcdGlmIChkYXRhLnN0YXR1cyA9PSAwKSB7XHJcblx0XHRcdC8vdG9nZ2xlTG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBkYXRhLnJlc3VsdC5sZW5ndGg7XHJcblx0XHQvL2NvbnNvbGUubG9nKGxlbmd0aCk7XHJcblx0ICAgZm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXtcclxuICBcclxuXHRcdGlmKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoID09IDApe1xyXG5cdFx0ICBjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcclxuICBcclxuXHRcdH1lbHNle1xyXG5cdCAgIFxyXG5cdFx0ICB2YXIgY250ID0gY29udHJhY3RBZGRyZXNlcy5sZW5ndGg7XHJcblx0XHQgIHZhciBoYXMgPSAwO1xyXG5cdFx0ICBmb3IodmFyIGo9MDtqPGNudDtqKyspe1xyXG4gIFxyXG5cdFx0XHQgaWYoY29udHJhY3RBZGRyZXNlc1tqXSA9PSBkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3Mpe1xyXG5cdFx0XHRcdCBoYXMgPSAxO1xyXG5cdFx0XHRcdCBicmVhaztcclxuXHRcdFx0IH1cclxuXHRcdCAgfVxyXG4gIFxyXG5cdFx0ICBpZiAoaGFzID09IDApe1xyXG4gIFxyXG5cdFx0XHRjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcclxuICBcclxuXHRcdCAgfVxyXG5cdFx0ICBcclxuICBcclxuXHRcdH1cclxuICBcclxuXHRcdC8vY29uc29sZS5sb2coZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcclxuICBcclxuXHQgICB9XHJcblx0XHQgIFxyXG5cdFx0XHJcblx0XHQvLy9jb25zb2xlLmxvZyhjb250cmFjdEFkZHJlc2VzLmxlbmd0aCk7XHJcblx0fSk7XHJcbiAgIFxyXG5cdHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgLy8gY29uc3QgbmV0d29ya0RhdGEgPSBORlRzLm5ldHdvcmtzW3RoaXMubmV0d29ya0lkXVxyXG4gICAgICAgIC8vaWYgKG5ldHdvcmtEYXRhKSB7XHJcbiAgICAgICAgICAgIC8vY29uc3QgYWJpID0gTkZUcy5hYmlcclxuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9ICcweGM1NGI5NmIwNEFBODgyOGI2M0NmMjUwNDA4RTEwODRFOUY2QWM2YzgnLy9uZXR3b3JrRGF0YS5hZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHRoaXMud2ViMy5ldGguQ29udHJhY3QoTkZUcywgYWRkcmVzcylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udHJhY3QpXHJcblxyXG5cdFx0XHQvKnRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdGltYWdlX2NvbnRyYWN0OiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9jb250cmFjdCwgYWRkcmVzc11cclxuXHRcdFx0fSk7XHJcblx0XHRcdCovXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KVxyXG4gICAgICAgICAgICBjb25zdCB0b3RhbE5mdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZignMHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JykuY2FsbCgpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codG90YWxOZnRzKTtcclxuXHRcdFx0Zm9yKHZhciBpPTA7aSA8IHRvdGFsTmZ0cztpKyspe1xyXG5cdFx0XHRcdGNvbnN0IE5mdGlkcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5PZk93bmVyQnlJbmRleCgnMHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JyxpKS5jYWxsKClcclxuXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2lkOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9pZCwgTmZ0aWRzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cdFx0XHRcdHZhciBiYXNlVXJsID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5iYXNlVVJJKCkuY2FsbCgpO1xyXG5cclxuXHRcdFx0YXdhaXQgZmV0Y2goYmFzZVVybCtOZnRpZHMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV91cmw6IFsuLi50aGlzLnN0YXRlLmltYWdlX3VybCwgZGF0YS5pbWFnZV1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX25hbWU6IFsuLi50aGlzLnN0YXRlLmltYWdlX25hbWUsIGRhdGEubmFtZV1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdJZHM6JytOZnRpZHMpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdOYW1lOicrZGF0YS5uYW1lKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnVVJMOicrZGF0YS5pbWFnZSk7XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=