(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_NFT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts/NFT.json */ "./contracts/NFT.json");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getWeb3 */ "./getWeb3.js");
var _jsxFileName = "C:\\Users\\Mahesh\\nft-transfer-api\\client\\src\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Web3 = __webpack_require__(/*! web3 */ "web3");

const web3 = new Web3();
const BN = web3.utils.BN;

class Home extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return __jsx("div", {
      className: "overflow-hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
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

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nZXRXZWIzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdldFdlYjMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldGhlcmV1bSIsIndlYjMiLCJXZWIzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJyZXF1aXJlIiwiQk4iLCJ1dGlscyIsIkhvbWUiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY3VycmVudEFjY291bnQiLCJzZXRTdGF0ZSIsImFjY291bnQiLCJyZW5kZXJUb2tlbnNGb3JPd25lciIsIm93bmVyQWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzZXMiLCJUb2tlbnVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJsZW5ndGgiLCJyZXN1bHQiLCJpIiwicHVzaCIsImNvbnRyYWN0QWRkcmVzcyIsImNudCIsImhhcyIsImoiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJzdGF0ZSIsIndhbGxldEFkZHJlc3MiLCJjb250cmFjdCIsImltYWdlcyIsIm93bmVycyIsImltYWdlQ29udHJhY3QiLCJpbWFnZV91cmwiLCJpbWFnZV9uYW1lIiwiaW1hZ2VfaWQiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwidGl0bGUiLCJldGhFbmFibGVkIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiTkZUcyIsInRvdGFsTmZ0cyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwiTmZ0aWRzIiwidG9rZW5PZk93bmVyQnlJbmRleCIsImJhc2VVcmwiLCJiYXNl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TyxHQUFDRixNQUFULENBQUwsQ0FBc0JuQyxJQUF0QixDQUEyQkMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBdkMsRUFDSEYsSUFERyxDQUNFRyxJQUFJLElBQUk7QUFFZCxhQUFLVixRQUFMLENBQWM7QUFDRjJCLG1CQUFTLEVBQUUsQ0FBQyxHQUFHLEtBQUtOLEtBQUwsQ0FBV00sU0FBZixFQUEwQmpCLElBQUksQ0FBQ29DLEtBQS9CO0FBRFQsU0FBZDtBQUlBLGFBQUs5QyxRQUFMLENBQWM7QUFDRjRCLG9CQUFVLEVBQUUsQ0FBQyxHQUFHLEtBQUtQLEtBQUwsQ0FBV08sVUFBZixFQUEyQmxCLElBQUksQ0FBQ3FDLElBQWhDO0FBRFYsU0FBZDtBQUlBOUQsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBT3dELE1BQW5CO0FBQ0F6RCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFRd0IsSUFBSSxDQUFDcUMsSUFBekI7QUFDQTlELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU93QixJQUFJLENBQUNvQyxLQUF4QjtBQUNELE9BZEssQ0FBTjtBQWtCQztBQUVFOztBQXpKc0I7O0FBOEo3QiwrREFBZXZELElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmNvbnN0IGdldFdlYjMgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gV2FpdCBmb3IgbG9hZGluZyBjb21wbGV0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyB3aXRoIHdlYjMgaW5qZWN0aW9uIHRpbWluZy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gTW9kZXJuIGRhcHAgYnJvd3NlcnMuLi5cbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUmVxdWVzdCBhY2NvdW50IGFjY2VzcyBpZiBuZWVkZWRcbiAgICAgICAgICAvL2F3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cyd9KTtcbiAgICAgICAgICAvLyBBY2Njb3VudHMgbm93IGV4cG9zZWRcbiAgICAgICAgICByZXNvbHZlKHdlYjMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIExlZ2FjeSBkYXBwIGJyb3dzZXJzLi4uXG4gICAgICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xuICAgICAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxuICAgICAgICBjb25zdCB3ZWIzID0gd2luZG93LndlYjM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5qZWN0ZWQgd2ViMyBkZXRlY3RlZC5cIik7XG4gICAgICAgIHJlc29sdmUod2ViMyk7XG4gICAgICB9XG4gICAgICAvLyBGYWxsYmFjayB0byBsb2NhbGhvc3Q7IHVzZSBkZXYgY29uc29sZSBwb3J0IGJ5IGRlZmF1bHQuLi5cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgICAgICAgXCJodHRwczovL2JzYy1kYXRhc2VlZDEubmluaWNvaW4uaW9cIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHdlYjMgaW5zdGFuY2UgaW5qZWN0ZWQsIHVzaW5nIExvY2FsIHdlYjMuXCIpO1xuICAgICAgICByZXNvbHZlKHdlYjMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2ViMztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTkZUcyBmcm9tIFwiLi4vY29udHJhY3RzL05GVC5qc29uXCJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5cbmNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKTtcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICBcblxuICAgIFxuICA8L2Rpdj5cbiAgICAgIClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgYWNjb3VudDogJycsXG4gICAgICAgICAgd2FsbGV0QWRkcmVzczogJycsXG4gICAgICAgICAgY29udHJhY3Q6IG51bGwsXG4gICAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgICBvd25lcnM6IFtdLFxuICAgIGltYWdlQ29udHJhY3Q6IFtdLFxuICAgICAgICAgIGltYWdlX3VybDogW10sXG4gICAgICAgICAgaW1hZ2VfbmFtZTogW10sXG4gICAgaW1hZ2VfaWQ6IFtdXG4gICAgICB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgZG9jdW1lbnQudGl0bGUgPSAnTXkgTkZUIENvbGxlY3Rpb25zJztcbiAgICAgIGF3YWl0IHRoaXMuZXRoRW5hYmxlZCgpXG4gICAgICBcbiAgfVxuXG4gIGV0aEVuYWJsZWQgPSBhc3luYyAoKSA9PiB7XG4gICBcbiAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgIFxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGN1cnJlbnRBY2NvdW50IH0pO1xuICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICB0aGlzLndlYjMgPSB3aW5kb3cud2ViMztcblxuICAgIHRoaXMucmVuZGVyVG9rZW5zRm9yT3duZXIoY3VycmVudEFjY291bnQpXG4gICAgXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG4gIFxufVxuXG5cblxucmVuZGVyVG9rZW5zRm9yT3duZXIgPSBhc3luYyhvd25lckFkZHJlc3MpID0+IHtcblxudmFyIGNvbnRyYWN0QWRkcmVzZXMgPSBbXTsgLy8gaW5pdGlhbGlzZSBhbiBlbXB0eSBhcnJheVxuXG52YXIgVG9rZW51cmwgPSBgaHR0cHM6Ly9hcGkuYnNjc2Nhbi5jb20vYXBpP21vZHVsZT1hY2NvdW50JmFjdGlvbj10b2tlbm5mdHR4JmFkZHJlc3M9MHgwNGQ5ZjZEM0MzM0EwNDlkMUYwRjlhM2RkYTEwNGMwZWU3QURlZDk1JnBhZ2U9MSZvZmZzZXQ9MTAwJnN0YXJ0YmxvY2s9MCZlbmRibG9jaz05OTk5OTk5OTkmc29ydD1hc2MmYXBpa2V5PTdOSVQ3NkU0WENDVFkxN1VaSEFSRTVLWkc5VzJZNVRUU1pgO1xuXG5hd2FpdCBmZXRjaChUb2tlbnVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4udGhlbihkYXRhID0+IHtcbiAgaWYgKGRhdGEuc3RhdHVzID09IDApIHtcbiAgICAvL3RvZ2dsZUxvYWRpbmcoZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgbGVuZ3RoID0gZGF0YS5yZXN1bHQubGVuZ3RoO1xuICAvL2NvbnNvbGUubG9nKGxlbmd0aCk7XG4gICBmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe1xuXG4gIGlmKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoID09IDApe1xuICAgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xuXG4gIH1lbHNle1xuICAgXG4gICAgdmFyIGNudCA9IGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoO1xuICAgIHZhciBoYXMgPSAwO1xuICAgIGZvcih2YXIgaj0wO2o8Y250O2orKyl7XG5cbiAgICAgaWYoY29udHJhY3RBZGRyZXNlc1tqXSA9PSBkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3Mpe1xuICAgICAgIGhhcyA9IDE7XG4gICAgICAgYnJlYWs7XG4gICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzID09IDApe1xuXG4gICAgY29udHJhY3RBZGRyZXNlcy5wdXNoKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgICB9XG4gICAgXG5cbiAgfVxuXG4gIC8vY29uc29sZS5sb2coZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcblxuICAgfVxuICAgIFxuICBcbiAgLy8vY29uc29sZS5sb2coY29udHJhY3RBZGRyZXNlcy5sZW5ndGgpO1xufSk7XG4gXG50aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xufVxuXG5cblxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XG5cbiAgICBcbiAgICAgICAgICBjb25zdCBhZGRyZXNzID0gJzB4YzU0Yjk2YjA0QUE4ODI4YjYzQ2YyNTA0MDhFMTA4NEU5RjZBYzZjOCcvL25ldHdvcmtEYXRhLmFkZHJlc3NcbiAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB0aGlzLndlYjMuZXRoLkNvbnRyYWN0KE5GVHMsIGFkZHJlc3MpXG5cbiAgICAvKnRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VfY29udHJhY3Q6IFsuLi50aGlzLnN0YXRlLmltYWdlX2NvbnRyYWN0LCBhZGRyZXNzXVxuICAgIH0pO1xuICAgICovXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pXG4gICAgICAgICAgY29uc3QgdG90YWxOZnRzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YoJzB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NScpLmNhbGwoKVxuICAgICAgICAgIC8vY29uc29sZS5sb2codG90YWxOZnRzKTtcbiAgICBmb3IodmFyIGk9MDtpIDwgdG90YWxOZnRzO2krKyl7XG4gICAgICBjb25zdCBOZnRpZHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnRva2VuT2ZPd25lckJ5SW5kZXgoJzB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NScsaSkuY2FsbCgpXG5cbiAgICAgIFxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGltYWdlX2lkOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9pZCwgTmZ0aWRzXVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgdmFyIGJhc2VVcmwgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhc2VVUkkoKS5jYWxsKCk7XG5cbiAgICBhd2FpdCBmZXRjaChiYXNlVXJsK05mdGlkcykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBpbWFnZV91cmw6IFsuLi50aGlzLnN0YXRlLmltYWdlX3VybCwgZGF0YS5pbWFnZV1cbiAgICAgICAgICAgICAgfSlcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBpbWFnZV9uYW1lOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV9uYW1lLCBkYXRhLm5hbWVdXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKCdJZHM6JytOZnRpZHMpO1xuICAgICAgY29uc29sZS5sb2coJ05hbWU6JytkYXRhLm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coJ1VSTDonK2RhdGEuaW1hZ2UpO1xuICAgIH0pXG5cbiAgICAgIFxuXG4gICAgfVxuICAgIFxuICAgICAgfVxuXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==