(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header/Header */ "./components/Layout/components/Header/Header.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer/Footer */ "./components/Layout/components/Footer/Footer.jsx");
var _jsxFileName = "E:\\8MB\\MNW_MARKETPLACE\\client\\src\\components\\Layout\\Layout.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Layout = props => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }), props.children, __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/components/Footer/Footer.jsx":
/*!********************************************************!*\
  !*** ./components/Layout/components/Footer/Footer.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function Footer() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
}

/***/ }),

/***/ "./components/Layout/components/Header/Header.jsx":
/*!********************************************************!*\
  !*** ./components/Layout/components/Header/Header.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_NFT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../contracts/NFT.json */ "./contracts/NFT.json");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../getWeb3 */ "./getWeb3.js");
var _jsxFileName = "E:\\8MB\\MNW_MARKETPLACE\\client\\src\\components\\Layout\\components\\Header\\Header.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Web3 = __webpack_require__(/*! web3 */ "web3");

const web3 = new Web3();
const BN = web3.utils.BN;

class Header extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
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

  constructor(props) {
    super(props);

    _defineProperty(this, "ethEnabled", async () => {
      if (window.ethereum) {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        const currentAccount = accounts[0];
        this.setState({
          account: currentAccount
        });
        window.web3 = new Web3(window.ethereum);
        this.web3 = window.web3;
        this.renderTokensForOwner(currentAccount);
        return true;
      }

      return false;
    });

    _defineProperty(this, "renderTokensForOwner", async ownerAddress => {
      var contractAddreses = []; // initialise an empty array

      var Tokenurl = `https://api.bscscan.com/api?module=account&action=tokennfttx&address=0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95&page=1&offset=100&startblock=0&endblock=999999999&sort=asc&apikey=7NIT76E4XCCTY17UZHARE5KZG9W2Y5TTSZ`;
      await fetch(Tokenurl).then(response => response.json()).then(data => {
        if (data.status == 0) {
          //toggleLoading(false);
          return;
        }

        let length = data.result.length; //console.log(length);

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
      this.loadBlockchainData();
    });

    this.state = {
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
  }

  async componentDidMount() {
    document.title = 'My NFT Collections';
    await this.ethEnabled();
  }

  async loadBlockchainData() {
    const address = '0xc54b96b04AA8828b63Cf250408E1084E9F6Ac6c8'; //networkData.address

    const contract = new this.web3.eth.Contract(_contracts_NFT_json__WEBPACK_IMPORTED_MODULE_1__, address);
    /*this.setState({
    	image_contract: [...this.state.image_contract, address]
    });
    */

    this.setState({
      contract
    });
    const totalNfts = await contract.methods.balanceOf('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95').call(); //console.log(totalNfts);

    for (var i = 0; i < totalNfts; i++) {
      const Nftids = await contract.methods.tokenOfOwnerByIndex('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95', i).call();
      this.setState({
        image_id: [...this.state.image_id, Nftids]
      });
      var baseUrl = await contract.methods.baseURI().call();
      await fetch(baseUrl + Nftids).then(response => response.json()).then(data => {
        this.setState({
          image_url: [...this.state.image_url, data.image]
        });
        this.setState({
          image_name: [...this.state.image_name, data.name]
        });
        console.log('Ids:' + Nftids);
        console.log('Name:' + data.name);
        console.log('URL:' + data.image);
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./getWeb3.js":
/*!********************!*\
  !*** ./getWeb3.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);


const getWeb3 = () => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener("load", async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);

      try {
        // Request account access if needed
        //await window.ethereum.request({ method: 'eth_requestAccounts'});
        // Acccounts now exposed
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } // Legacy dapp browsers...
    else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      } // Fallback to localhost; use dev console port by default...
      else {
          const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://bsc-dataseed1.ninicoin.io");
          const web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
          console.log("No web3 instance injected, using Local web3.");
          resolve(web3);
        }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (getWeb3);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.jsx");
var _jsxFileName = "E:\\8MB\\MNW_MARKETPLACE\\client\\src\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./contracts/NFT.json":
/*!****************************!*\
  !*** ./contracts/NFT.json ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"generation","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"quality","type":"uint8"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_generation","type":"uint256"},{"internalType":"uint8","name":"_quality","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"paramsOf","outputs":[{"internalType":"uint256","name":"quality","type":"uint256"},{"internalType":"uint8","name":"generation","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"setFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9nZXRXZWIzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkZvb3RlciIsIldlYjMiLCJyZXF1aXJlIiwid2ViMyIsIkJOIiwidXRpbHMiLCJIZWFkZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjb25zdHJ1Y3RvciIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY3VycmVudEFjY291bnQiLCJzZXRTdGF0ZSIsImFjY291bnQiLCJyZW5kZXJUb2tlbnNGb3JPd25lciIsIm93bmVyQWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzZXMiLCJUb2tlbnVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJsZW5ndGgiLCJyZXN1bHQiLCJpIiwicHVzaCIsImNvbnRyYWN0QWRkcmVzcyIsImNudCIsImhhcyIsImoiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJzdGF0ZSIsIndhbGxldEFkZHJlc3MiLCJjb250cmFjdCIsImltYWdlcyIsIm93bmVycyIsImltYWdlQ29udHJhY3QiLCJpbWFnZV91cmwiLCJpbWFnZV9uYW1lIiwiaW1hZ2VfaWQiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwidGl0bGUiLCJldGhFbmFibGVkIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsInRvdGFsTmZ0cyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwiTmZ0aWRzIiwidG9rZW5PZk93bmVyQnlJbmRleCIsImJhc2VVcmwiLCJiYXNlVVJJIiwiaW1hZ2UiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImdldFdlYjMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcnJvciIsInByb3ZpZGVyIiwiTXlBcHAiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFNBQ0kscUVBQ0MsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFR0EsS0FBSyxDQUFDQyxRQUZULEVBSUMsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0FESjtBQVNILENBVkQ7O0FBWUEsK0RBQWVGLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBRWUsU0FBU0csTUFBVCxHQUFpQjtBQUM1QixTQUNKLG9FQURJO0FBTUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQ7QUFDQTtBQUNBOztBQUdBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUYsSUFBSixFQUFiO0FBQ0EsTUFBTUcsRUFBRSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0QsRUFBdEI7O0FBRUEsTUFBTUUsTUFBTixTQUFxQkMsNENBQXJCLENBQStCO0FBRTNCQyxRQUFNLEdBQUc7QUFFTCxXQUNJO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQU9IOztBQUVEQyxhQUFXLENBQUNYLEtBQUQsRUFBUTtBQUNm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TUUsSUFBSSxHQUFHLElBQUlGLDZDQUFKLENBQVN1RSxRQUFULENBQWI7QUFDQVIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDhDQUFaO0FBQ0FHLGlCQUFPLENBQUNqRSxJQUFELENBQVA7QUFDRDtBQUNGLEdBN0JEO0FBOEJELENBaENELENBREY7O0FBbUNBLCtEQUFlK0QsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7O0FBRUEsU0FBU08sS0FBVCxDQUFlO0FBQUVsRSxXQUFGO0FBQWFtRTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsU0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEOztBQUVELCtEQUFlRCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xyXG5cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbjw+XHJcbiAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG5cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBORlRzIGZyb20gXCIuLi8uLi8uLi8uLi9jb250cmFjdHMvTkZULmpzb25cIjsgICBcclxuaW1wb3J0IGdldFdlYjMgZnJvbSBcIi4uLy4uLy4uLy4uL2dldFdlYjNcIjtcclxuXHJcblxyXG5jb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIik7XHJcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xyXG5jb25zdCBCTiA9IHdlYjMudXRpbHMuQk47XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRcclxuXHRcdDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjY291bnQ6ICcnLFxyXG4gICAgICAgICAgICB3YWxsZXRBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgY29udHJhY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIGltYWdlczogW10sXHJcbiAgICAgICAgICAgIG93bmVyczogW10sXHJcblx0XHRcdGltYWdlQ29udHJhY3Q6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZV91cmw6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZV9uYW1lOiBbXSxcclxuXHRcdFx0aW1hZ2VfaWQ6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0ZG9jdW1lbnQudGl0bGUgPSAnTXkgTkZUIENvbGxlY3Rpb25zJztcclxuICAgICAgICBhd2FpdCB0aGlzLmV0aEVuYWJsZWQoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV0aEVuYWJsZWQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHQgXHJcblx0XHRpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEFjY291bnQgPSBhY2NvdW50c1swXTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBjdXJyZW50QWNjb3VudCB9KTtcclxuXHRcdFx0d2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG5cdFx0XHR0aGlzLndlYjMgPSB3aW5kb3cud2ViMztcclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVG9rZW5zRm9yT3duZXIoY3VycmVudEFjY291bnQpXHJcblx0XHRcdFxyXG5cdFxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxuIHJlbmRlclRva2Vuc0Zvck93bmVyID0gYXN5bmMob3duZXJBZGRyZXNzKSA9PiB7XHJcbiAgXHJcblx0dmFyIGNvbnRyYWN0QWRkcmVzZXMgPSBbXTsgLy8gaW5pdGlhbGlzZSBhbiBlbXB0eSBhcnJheVxyXG4gIFxyXG5cdHZhciBUb2tlbnVybCA9IGBodHRwczovL2FwaS5ic2NzY2FuLmNvbS9hcGk/bW9kdWxlPWFjY291bnQmYWN0aW9uPXRva2VubmZ0dHgmYWRkcmVzcz0weDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUmcGFnZT0xJm9mZnNldD0xMDAmc3RhcnRibG9jaz0wJmVuZGJsb2NrPTk5OTk5OTk5OSZzb3J0PWFzYyZhcGlrZXk9N05JVDc2RTRYQ0NUWTE3VVpIQVJFNUtaRzlXMlk1VFRTWmA7XHJcblx0XHJcblx0YXdhaXQgZmV0Y2goVG9rZW51cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0aWYgKGRhdGEuc3RhdHVzID09IDApIHtcclxuXHRcdFx0Ly90b2dnbGVMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGRhdGEucmVzdWx0Lmxlbmd0aDtcclxuXHRcdC8vY29uc29sZS5sb2cobGVuZ3RoKTtcclxuXHQgICBmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe1xyXG4gIFxyXG5cdFx0aWYoY29udHJhY3RBZGRyZXNlcy5sZW5ndGggPT0gMCl7XHJcblx0XHQgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdFx0fWVsc2V7XHJcblx0ICAgXHJcblx0XHQgIHZhciBjbnQgPSBjb250cmFjdEFkZHJlc2VzLmxlbmd0aDtcclxuXHRcdCAgdmFyIGhhcyA9IDA7XHJcblx0XHQgIGZvcih2YXIgaj0wO2o8Y250O2orKyl7XHJcbiAgXHJcblx0XHRcdCBpZihjb250cmFjdEFkZHJlc2VzW2pdID09IGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyl7XHJcblx0XHRcdFx0IGhhcyA9IDE7XHJcblx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHQgfVxyXG5cdFx0ICB9XHJcbiAgXHJcblx0XHQgIGlmIChoYXMgPT0gMCl7XHJcbiAgXHJcblx0XHRcdGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdFx0ICB9XHJcblx0XHQgIFxyXG4gIFxyXG5cdFx0fVxyXG4gIFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xyXG4gIFxyXG5cdCAgIH1cclxuXHRcdCAgXHJcblx0XHRcclxuXHRcdC8vL2NvbnNvbGUubG9nKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoKTtcclxuXHR9KTtcclxuICAgXHJcblx0dGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcblxyXG4gICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9ICcweGM1NGI5NmIwNEFBODgyOGI2M0NmMjUwNDA4RTEwODRFOUY2QWM2YzgnLy9uZXR3b3JrRGF0YS5hZGRyZXNzXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHRoaXMud2ViMy5ldGguQ29udHJhY3QoTkZUcywgYWRkcmVzcylcclxuXHJcblx0XHRcdC8qdGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0aW1hZ2VfY29udHJhY3Q6IFsuLi50aGlzLnN0YXRlLmltYWdlX2NvbnRyYWN0LCBhZGRyZXNzXVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ki9cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsTmZ0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKCcweDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUnKS5jYWxsKClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0b3RhbE5mdHMpO1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpIDwgdG90YWxOZnRzO2krKyl7XHJcblx0XHRcdFx0Y29uc3QgTmZ0aWRzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy50b2tlbk9mT3duZXJCeUluZGV4KCcweDA0ZDlmNkQzQzMzQTA0OWQxRjBGOWEzZGRhMTA0YzBlZTdBRGVkOTUnLGkpLmNhbGwoKVxyXG5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQ6IFsuLi50aGlzLnN0YXRlLmltYWdlX2lkLCBOZnRpZHNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblx0XHRcdFx0dmFyIGJhc2VVcmwgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhc2VVUkkoKS5jYWxsKCk7XHJcblxyXG5cdFx0XHRhd2FpdCBmZXRjaChiYXNlVXJsK05mdGlkcykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX3VybDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfdXJsLCBkYXRhLmltYWdlXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbmFtZTogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfbmFtZSwgZGF0YS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0lkczonK05mdGlkcyk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ05hbWU6JytkYXRhLm5hbWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdVUkw6JytkYXRhLmltYWdlKTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxuY29uc3QgZ2V0V2ViMyA9ICgpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBXYWl0IGZvciBsb2FkaW5nIGNvbXBsZXRpb24gdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIHdpdGggd2ViMyBpbmplY3Rpb24gdGltaW5nLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBNb2Rlcm4gZGFwcCBicm93c2Vycy4uLlxuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzIGlmIG5lZWRlZFxuICAgICAgICAgIC8vYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pO1xuICAgICAgICAgIC8vIEFjY2NvdW50cyBub3cgZXhwb3NlZFxuICAgICAgICAgIHJlc29sdmUod2ViMyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTGVnYWN5IGRhcHAgYnJvd3NlcnMuLi5cbiAgICAgIGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XG4gICAgICAgIC8vIFVzZSBNaXN0L01ldGFNYXNrJ3MgcHJvdmlkZXIuXG4gICAgICAgIGNvbnN0IHdlYjMgPSB3aW5kb3cud2ViMztcbiAgICAgICAgY29uc29sZS5sb2coXCJJbmplY3RlZCB3ZWIzIGRldGVjdGVkLlwiKTtcbiAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcbiAgICAgIH1cbiAgICAgIC8vIEZhbGxiYWNrIHRvIGxvY2FsaG9zdDsgdXNlIGRldiBjb25zb2xlIHBvcnQgYnkgZGVmYXVsdC4uLlxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbiAgICAgICAgICBcImh0dHBzOi8vYnNjLWRhdGFzZWVkMS5uaW5pY29pbi5pb1wiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gd2ViMyBpbnN0YW5jZSBpbmplY3RlZCwgdXNpbmcgTG9jYWwgd2ViMy5cIik7XG4gICAgICAgIHJlc29sdmUod2ViMyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWIzO1xuIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4oIFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9