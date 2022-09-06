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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJXZWIzIiwicmVxdWlyZSIsIndlYjMiLCJCTiIsInV0aWxzIiwiSGVhZGVyIiwicHJvcHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhY2NvdW50cyIsImN1cnJlbnRBY2NvdW50Iiwic2V0U3RhdGUiLCJhY2NvdW50IiwicmVuZGVyVG9rZW5zRm9yT3duZXIiLCJvd25lckFkZHJlc3MiLCJjb250cmFjdEFkZHJlc2VzIiwiVG9rZW51cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwibGVuZ3RoIiwicmVzdWx0IiwiaSIsInB1c2giLCJjb250cmFjdEFkZHJlc3MiLCJjbnQiLCJoYXMiLCJqIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwic3RhdGUiLCJ3YWxsZXRBZGRyZXNzIiwiY29udHJhY3QiLCJpbWFnZXMiLCJvd25lcnMiLCJpbWFnZUNvbnRyYWN0IiwiaW1hZ2VfdXJsIiwiaW1hZ2VfbmFtZSIsImltYWdlX2lkIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImV0aEVuYWJsZWQiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJORlRzIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJ0b3RhbE5mdHMiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiTmZ0aWRzIiwiYmFzZVVSSSIsImJhc2VVcmwiLCJpbWFnZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxtREFBRCxDQUFwQjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUYsSUFBSixFQUFiO0FBQ0EsSUFBTUcsRUFBRSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0QsRUFBdEI7O0lBRU1FLE07Ozs7Ozs7NkJBRU87QUFFTCxhQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFPSDs7O0FBRUQsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSwwbUJBcUJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVYQyxNQUFNLENBQUNDLFFBRkk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFJU0EsUUFBUSxDQUFDQyxPQUFULENBQWlCO0FBQUVDLHNCQUFNLEVBQUU7QUFBVixlQUFqQixDQUpUOztBQUFBO0FBSVJDLHNCQUpRO0FBS0NDLDRCQUxELEdBS2tCRCxRQUFRLENBQUMsQ0FBRCxDQUwxQjs7QUFPZCxvQkFBS0UsUUFBTCxDQUFjO0FBQUVDLHVCQUFPLEVBQUVGO0FBQVgsZUFBZDs7QUFDQUwsb0JBQU0sQ0FBQ0wsSUFBUCxHQUFjLElBQUlGLElBQUosQ0FBU08sTUFBTSxDQUFDQyxRQUFoQixDQUFkO0FBQ0Esb0JBQUtOLElBQUwsR0FBWUssTUFBTSxDQUFDTCxJQUFuQjs7QUFFQSxvQkFBS2Esb0JBQUwsQ0FBMEJILGNBQTFCOztBQVhjLCtDQWNQLElBZE87O0FBQUE7QUFBQSwrQ0FnQlIsS0FoQlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FyQk07O0FBQUE7QUFBQSxrVEEyQ0Msa0JBQU1JLFlBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5CQyxnQ0FGbUIsR0FFQSxFQUZBLEVBRUk7O0FBRXZCQyx3QkFKbUI7QUFBQTtBQUFBLHVCQU1qQkMsS0FBSyxDQUFDRCxRQUFELENBQUwsQ0FBZ0JFLElBQWhCLENBQXFCLFVBQUFDLFFBQVE7QUFBQSx5QkFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxpQkFBN0IsRUFDTEYsSUFESyxDQUNBLFVBQUFHLElBQUksRUFBSTtBQUNiLHNCQUFJQSxJQUFJLENBQUNDLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNyQjtBQUNBO0FBQ0E7O0FBQ0Qsc0JBQUlDLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxNQUFMLENBQVlELE1BQXpCLENBTGEsQ0FNYjs7QUFDRSx1QkFBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNGLE1BQWQsRUFBcUJFLENBQUMsRUFBdEIsRUFBeUI7QUFFM0Isd0JBQUdWLGdCQUFnQixDQUFDUSxNQUFqQixJQUEyQixDQUE5QixFQUFnQztBQUM5QlIsc0NBQWdCLENBQUNXLElBQWpCLENBQXNCTCxJQUFJLENBQUNHLE1BQUwsQ0FBWUMsQ0FBWixFQUFlRSxlQUFyQztBQUVELHFCQUhELE1BR0s7QUFFSCwwQkFBSUMsR0FBRyxHQUFHYixnQkFBZ0IsQ0FBQ1EsTUFBM0I7QUFDQSwwQkFBSU0sR0FBRyxHQUFHLENBQVY7O0FBQ0EsMkJBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRixHQUFkLEVBQWtCRSxDQUFDLEVBQW5CLEVBQXNCO0FBRXRCLDRCQUFHZixnQkFBZ0IsQ0FBQ2UsQ0FBRCxDQUFoQixJQUF1QlQsSUFBSSxDQUFDRyxNQUFMLENBQVlDLENBQVosRUFBZUUsZUFBekMsRUFBeUQ7QUFDeERFLDZCQUFHLEdBQUcsQ0FBTjtBQUNBO0FBQ0E7QUFDQTs7QUFFRCwwQkFBSUEsR0FBRyxJQUFJLENBQVgsRUFBYTtBQUVkZCx3Q0FBZ0IsQ0FBQ1csSUFBakIsQ0FBc0JMLElBQUksQ0FBQ0csTUFBTCxDQUFZQyxDQUFaLEVBQWVFLGVBQXJDO0FBRUU7QUFHRixxQkF4QjBCLENBMEIzQjs7QUFFRyxtQkFuQ1UsQ0FzQ2I7O0FBQ0EsaUJBeENLLENBTmlCOztBQUFBO0FBZ0R2QixzQkFBS0ksa0JBQUw7O0FBaER1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQTNDRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVHBCLGFBQU8sRUFBRSxFQURBO0FBRVRxQixtQkFBYSxFQUFFLEVBRk47QUFHVEMsY0FBUSxFQUFFLElBSEQ7QUFJVEMsWUFBTSxFQUFFLEVBSkM7QUFLVEMsWUFBTSxFQUFFLEVBTEM7QUFNbEJDLG1CQUFhLEVBQUUsRUFORztBQU9UQyxlQUFTLEVBQUUsRUFQRjtBQVFUQyxnQkFBVSxFQUFFLEVBUkg7QUFTbEJDLGNBQVEsRUFBRTtBQVRRLEtBQWI7QUFGZTtBQWFsQjs7Ozs7Ozs7OztBQUdIQyx3QkFBUSxDQUFDQyxLQUFULEdBQWlCLG9CQUFqQjs7dUJBQ1ksS0FBS0MsVUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUZQO0FBQ0M7QUFDSTtBQUNNQyx1QixHQUFVLDRDLEVBQTRDOztBQUN0RFYsd0IsR0FBVyxJQUFJLEtBQUtsQyxJQUFMLENBQVU2QyxHQUFWLENBQWNDLFFBQWxCLENBQTJCQyxpREFBM0IsRUFBaUNILE9BQWpDLEMsRUFDakI7O0FBRVQ7QUFDSDtBQUNBO0FBQ0E7O0FBQ1kscUJBQUtqQyxRQUFMLENBQWM7QUFBRXVCLDBCQUFRLEVBQVJBO0FBQUYsaUJBQWQ7O3VCQUN3QkEsUUFBUSxDQUFDYyxPQUFULENBQWlCQyxTQUFqQixDQUEyQiw0Q0FBM0IsRUFBeUVDLElBQXpFLEU7OztBQUFsQkMseUI7Ozs7Ozs7O2lDQUdPakIsUUFBUSxDQUFDYyxPQUFULENBQWlCSSxtQkFBakIsQ0FBcUMsNENBQXJDLEVBQWtGM0IsQ0FBbEYsRUFBcUZ5QixJQUFyRixFOzs7QUFBZkcsZ0M7O0FBSU4sZ0NBQUksQ0FBQzFDLFFBQUwsQ0FBYztBQUNFNkIsb0NBQVEsNkpBQU0sTUFBSSxDQUFDUixLQUFMLENBQVdRLFFBQWpCLElBQTJCYSxNQUEzQjtBQURWLDJCQUFkOzs7aUNBSW9CbkIsUUFBUSxDQUFDYyxPQUFULENBQWlCTSxPQUFqQixHQUEyQkosSUFBM0IsRTs7O0FBQWhCSyxpQzs7aUNBRUN0QyxLQUFLLENBQUNzQyxPQUFPLEdBQUNGLE1BQVQsQ0FBTCxDQUFzQm5DLElBQXRCLENBQTJCLFVBQUFDLFFBQVE7QUFBQSxtQ0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSwyQkFBbkMsRUFDSkYsSUFESSxDQUNDLFVBQUFHLElBQUksRUFBSTtBQUVkLGtDQUFJLENBQUNWLFFBQUwsQ0FBYztBQUNFMkIsdUNBQVMsNkpBQU0sTUFBSSxDQUFDTixLQUFMLENBQVdNLFNBQWpCLElBQTRCakIsSUFBSSxDQUFDbUMsS0FBakM7QUFEWCw2QkFBZDs7QUFJQSxrQ0FBSSxDQUFDN0MsUUFBTCxDQUFjO0FBQ0U0Qix3Q0FBVSw2SkFBTSxNQUFJLENBQUNQLEtBQUwsQ0FBV08sVUFBakIsSUFBNkJsQixJQUFJLENBQUNvQyxJQUFsQztBQURaLDZCQUFkOztBQUlBQyxtQ0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT04sTUFBbkI7QUFDQUssbUNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVF0QyxJQUFJLENBQUNvQyxJQUF6QjtBQUNBQyxtQ0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT3RDLElBQUksQ0FBQ21DLEtBQXhCO0FBQ0EsMkJBZEssQzs7Ozs7Ozs7O0FBWEUvQixpQixHQUFFLEM7OztzQkFBRUEsQ0FBQyxHQUFHMEIsUzs7Ozs7Ozs7QUFBVTFCLGlCQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9IVG1DLDZDOztBQW1LckIsK0RBQWV6RCxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWZkZDcxYjc2NGNjYzJiYmNiOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBORlRzIGZyb20gXCIuLi8uLi8uLi8uLi9jb250cmFjdHMvTkZULmpzb25cIjsgICBcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uLy4uLy4uLy4uL2dldFdlYjNcIjtcclxuXHJcblxyXG5jb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIik7XHJcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xyXG5jb25zdCBCTiA9IHdlYjMudXRpbHMuQk47XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuXHRcdFx0XHJcbkhpXHJcblx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWNjb3VudDogJycsXHJcbiAgICAgICAgICAgIHdhbGxldEFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBjb250cmFjdDogbnVsbCxcclxuICAgICAgICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgICAgICAgb3duZXJzOiBbXSxcclxuXHRcdFx0aW1hZ2VDb250cmFjdDogW10sXHJcbiAgICAgICAgICAgIGltYWdlX3VybDogW10sXHJcbiAgICAgICAgICAgIGltYWdlX25hbWU6IFtdLFxyXG5cdFx0XHRpbWFnZV9pZDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRkb2N1bWVudC50aXRsZSA9ICdNeSBORlQgQ29sbGVjdGlvbnMnO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXRoRW5hYmxlZCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZXRoRW5hYmxlZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdCBcclxuXHRcdGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGN1cnJlbnRBY2NvdW50IH0pO1xyXG5cdFx0XHR3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcblx0XHRcdHRoaXMud2ViMyA9IHdpbmRvdy53ZWIzO1xyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJUb2tlbnNGb3JPd25lcihjdXJyZW50QWNjb3VudClcclxuXHRcdFx0XHJcblx0XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG4gcmVuZGVyVG9rZW5zRm9yT3duZXIgPSBhc3luYyhvd25lckFkZHJlc3MpID0+IHtcclxuICBcclxuXHR2YXIgY29udHJhY3RBZGRyZXNlcyA9IFtdOyAvLyBpbml0aWFsaXNlIGFuIGVtcHR5IGFycmF5XHJcbiAgXHJcblx0dmFyIFRva2VudXJsID0gYGh0dHBzOi8vYXBpLmJzY3NjYW4uY29tL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249dG9rZW5uZnR0eCZhZGRyZXNzPTB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NSZwYWdlPTEmb2Zmc2V0PTEwMCZzdGFydGJsb2NrPTAmZW5kYmxvY2s9OTk5OTk5OTk5JnNvcnQ9YXNjJmFwaWtleT03TklUNzZFNFhDQ1RZMTdVWkhBUkU1S1pHOVcyWTVUVFNaYDtcclxuXHRcclxuXHRhd2FpdCBmZXRjaChUb2tlbnVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRpZiAoZGF0YS5zdGF0dXMgPT0gMCkge1xyXG5cdFx0XHQvL3RvZ2dsZUxvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgbGVuZ3RoID0gZGF0YS5yZXN1bHQubGVuZ3RoO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhsZW5ndGgpO1xyXG5cdCAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7XHJcbiAgXHJcblx0XHRpZihjb250cmFjdEFkZHJlc2VzLmxlbmd0aCA9PSAwKXtcclxuXHRcdCAgY29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgXHJcblx0XHR9ZWxzZXtcclxuXHQgICBcclxuXHRcdCAgdmFyIGNudCA9IGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoO1xyXG5cdFx0ICB2YXIgaGFzID0gMDtcclxuXHRcdCAgZm9yKHZhciBqPTA7ajxjbnQ7aisrKXtcclxuICBcclxuXHRcdFx0IGlmKGNvbnRyYWN0QWRkcmVzZXNbal0gPT0gZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKXtcclxuXHRcdFx0XHQgaGFzID0gMTtcclxuXHRcdFx0XHQgYnJlYWs7XHJcblx0XHRcdCB9XHJcblx0XHQgIH1cclxuICBcclxuXHRcdCAgaWYgKGhhcyA9PSAwKXtcclxuICBcclxuXHRcdFx0Y29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgXHJcblx0XHQgIH1cclxuXHRcdCAgXHJcbiAgXHJcblx0XHR9XHJcbiAgXHJcblx0XHQvL2NvbnNvbGUubG9nKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgXHJcblx0ICAgfVxyXG5cdFx0ICBcclxuXHRcdFxyXG5cdFx0Ly8vY29uc29sZS5sb2coY29udHJhY3RBZGRyZXNlcy5sZW5ndGgpO1xyXG5cdH0pO1xyXG4gICBcclxuXHR0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgIC8vIGNvbnN0IG5ldHdvcmtEYXRhID0gTkZUcy5uZXR3b3Jrc1t0aGlzLm5ldHdvcmtJZF1cclxuICAgICAgICAvL2lmIChuZXR3b3JrRGF0YSkge1xyXG4gICAgICAgICAgICAvL2NvbnN0IGFiaSA9IE5GVHMuYWJpXHJcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSAnMHhjNTRiOTZiMDRBQTg4MjhiNjNDZjI1MDQwOEUxMDg0RTlGNkFjNmM4Jy8vbmV0d29ya0RhdGEuYWRkcmVzc1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB0aGlzLndlYjMuZXRoLkNvbnRyYWN0KE5GVHMsIGFkZHJlc3MpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRyYWN0KVxyXG5cclxuXHRcdFx0Lyp0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRpbWFnZV9jb250cmFjdDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfY29udHJhY3QsIGFkZHJlc3NdXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSlcclxuICAgICAgICAgICAgY29uc3QgdG90YWxOZnRzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YoJzB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NScpLmNhbGwoKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRvdGFsTmZ0cyk7XHJcblx0XHRcdGZvcih2YXIgaT0wO2kgPCB0b3RhbE5mdHM7aSsrKXtcclxuXHRcdFx0XHRjb25zdCBOZnRpZHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnRva2VuT2ZPd25lckJ5SW5kZXgoJzB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NScsaSkuY2FsbCgpXHJcblxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfaWQsIE5mdGlkc11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHRcdFx0XHR2YXIgYmFzZVVybCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYmFzZVVSSSgpLmNhbGwoKTtcclxuXHJcblx0XHRcdGF3YWl0IGZldGNoKGJhc2VVcmwrTmZ0aWRzKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbihkYXRhID0+IHtcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdXJsOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV91cmwsIGRhdGEuaW1hZ2VdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV9uYW1lOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9uYW1lLCBkYXRhLm5hbWVdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnSWRzOicrTmZ0aWRzKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnTmFtZTonK2RhdGEubmFtZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1VSTDonK2RhdGEuaW1hZ2UpO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9