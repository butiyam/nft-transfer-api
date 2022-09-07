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
  static async getInitialProps(props) {
    const {
      wallet
    } = props.query;
    return {
      wallet
    };
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
      style: {
        padding: "40px 110px 2px"
      },
      id: "container",
      className: "flex flex-wrap gap-5 mt-10 justify-start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }), __jsx("template", {
      id: "nft_template",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("section", {
      className: "w-48 flex justify-around flex-col bg-blue-100 px-2 py-1 rounded-md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "text-black text-center font-semibold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }), __jsx("a", {
      href: "",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "",
      style: {
        maxWidth: "150px"
      },
      alt: "",
      className: "rounded-md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    })))));
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
      this.loadBlockchainData(contractAddreses);
    });

    this.state = {
      account: '',
      walletAddress: this.props.wallet,
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

  async loadBlockchainData(addres) {
    for (var j = 0; j < addres.length; j++) {
      const address = addres[j];

      try {
        const contract = await new this.web3.eth.Contract(_contracts_NFT_json__WEBPACK_IMPORTED_MODULE_1__, addres[j]);
        this.setState({
          contract
        });
      } catch (error) {}
      /*this.setState({
        image_contract: [...this.state.image_contract, address]
      });
      */


      const totalNfts = 0;

      try {
        if (this.state.contract) totalNfts = await this.state.contract.methods.balanceOf(this.state.walletAddress).call();
      } catch (error) {} //console.log(totalNfts);


      if (totalNfts > 0) for (var i = 0; i < totalNfts; i++) {
        const Nftids = await this.state.contract.methods.tokenOfOwnerByIndex(this.state.walletAddress, i).call();
        this.setState({
          image_id: [...this.state.image_id, Nftids]
        });
        var Uri = await this.state.contract.methods.tokenURI(Nftids).call();
        await fetch(Uri).then(response => response.json()).then(data => {
          this.setState({
            image_url: [...this.state.image_url, data.image]
          });
          this.setState({
            image_name: [...this.state.image_name, data.name]
          });
          document.getElementById("container").append(this.createTokenElement(Nftids, data.name, data.image));
          console.log('NFT Contract:' + addres[j]);
          console.log('Ids:' + Nftids);
          console.log('Name:' + data.name);
          console.log('URL:' + data.image);
        });
      }
    }
  }

  createTokenElement(token_id, name, image_preview_url) {
    const newElement = document.getElementById("nft_template").content.cloneNode(true);
    newElement.querySelector("section").id = `${token_id}`;
    newElement.querySelector("h1").innerText = name;
    newElement.querySelector("a").href = image_preview_url;
    newElement.querySelector("img").src = image_preview_url;
    newElement.querySelector("img").alt = name;
    return newElement;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nZXRXZWIzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdldFdlYjMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldGhlcmV1bSIsIndlYjMiLCJXZWIzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJyZXF1aXJlIiwiQk4iLCJ1dGlscyIsIkhvbWUiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsIndhbGxldCIsInF1ZXJ5IiwicmVuZGVyIiwicGFkZGluZyIsIm1heFdpZHRoIiwiY29uc3RydWN0b3IiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjdXJyZW50QWNjb3VudCIsInNldFN0YXRlIiwiYWNjb3VudCIsInJlbmRlclRva2Vuc0Zvck93bmVyIiwib3duZXJBZGRyZXNzIiwiY29udHJhY3RBZGRyZXNlcyIsIlRva2VudXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImxlbmd0aCIsInJlc3VsdCIsImkiLCJwdXNoIiwiY29udHJhY3RBZGRyZXNzIiwiY250IiwiaGFzIiwiaiIsImxvYWRCbG9ja2NoYWluRGF0YSIsInN0YXRlIiwid2FsbGV0QWRkcmVzcyIsImNvbnRyYWN0IiwiaW1hZ2VzIiwib3duZXJzIiwiaW1hZ2VDb250cmFjdCIsImltYWdlX3VybCIsImltYWdlX25hbWUiLCJpbWFnZV9pZCIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImV0aEVuYWJsZWQiLCJhZGRyZXMiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJORlRzIiwidG90YWxOZnRzIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJOZnRpZHMiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiVXJpIiwidG9rZW5VUkkiLCJpbWFnZSIsIm5hbWUiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZCIsImNyZWF0ZVRva2VuRWxlbWVudCIsInRva2VuX2lkIiwiaW1hZ2VfcHJldmlld191cmwiLCJuZXdFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsImlubmVyVGV4dCIsImhyZWYiLCJzcmMiLCJhbHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFDZCxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CO0FBQ0FDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBWTtBQUMxQztBQUNBLFFBQUlELE1BQU0sQ0FBQ0UsUUFBWCxFQUFxQjtBQUNuQixZQUFNQyxJQUFJLEdBQUcsSUFBSUMsNkNBQUosQ0FBU0osTUFBTSxDQUFDRSxRQUFoQixDQUFiOztBQUNBLFVBQUk7QUFDRjtBQUNBO0FBQ0E7QUFDQUosZUFBTyxDQUFDSyxJQUFELENBQVA7QUFDRCxPQUxELENBS0UsT0FBT0UsS0FBUCxFQUFjO0FBQ2ROLGNBQU0sQ0FBQ00sS0FBRCxDQUFOO0FBQ0Q7QUFDRixLQVZELENBV0E7QUFYQSxTQVlLLElBQUlMLE1BQU0sQ0FBQ0csSUFBWCxFQUFpQjtBQUNwQjtBQUNBLGNBQU1BLElBQUksR0FBR0gsTUFBTSxDQUFDRyxJQUFwQjtBQUNBRyxlQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBVCxlQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNELE9BTEksQ0FNTDtBQU5LLFdBT0E7QUFDSCxnQkFBTUssUUFBUSxHQUFHLElBQUlKLG9FQUFKLENBQ2YsbUNBRGUsQ0FBakI7QUFHQSxnQkFBTUQsSUFBSSxHQUFHLElBQUlDLDZDQUFKLENBQVNJLFFBQVQs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QztBQUNBdkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU84RCxNQUFuQjtBQUNBL0QsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVE2QixJQUFJLENBQUNzQyxJQUF6QjtBQUNBcEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU82QixJQUFJLENBQUNxQyxLQUF4QjtBQUNELFNBakJLLENBQU47QUFxQkM7QUFFSjtBQUVBOztBQUVGSSxvQkFBa0IsQ0FBQ0MsUUFBRCxFQUFZSixJQUFaLEVBQWtCSyxpQkFBbEIsRUFBcUM7QUFDcEQsVUFBTUMsVUFBVSxHQUFHdkIsUUFBUSxDQUFDa0IsY0FBVCxDQUF3QixjQUF4QixFQUF3Q00sT0FBeEMsQ0FBZ0RDLFNBQWhELENBQTBELElBQTFELENBQW5CO0FBRUFGLGNBQVUsQ0FBQ0csYUFBWCxDQUF5QixTQUF6QixFQUFvQ0MsRUFBcEMsR0FBMEMsR0FBRU4sUUFBUyxFQUFyRDtBQUNBRSxjQUFVLENBQUNHLGFBQVgsQ0FBeUIsSUFBekIsRUFBK0JFLFNBQS9CLEdBQTJDWCxJQUEzQztBQUNBTSxjQUFVLENBQUNHLGFBQVgsQ0FBeUIsR0FBekIsRUFBOEJHLElBQTlCLEdBQXFDUCxpQkFBckM7QUFDQUMsY0FBVSxDQUFDRyxhQUFYLENBQXlCLEtBQXpCLEVBQWdDSSxHQUFoQyxHQUFzQ1IsaUJBQXRDO0FBQ0FDLGNBQVUsQ0FBQ0csYUFBWCxDQUF5QixLQUF6QixFQUFnQ0ssR0FBaEMsR0FBc0NkLElBQXRDO0FBRUEsV0FBT00sVUFBUDtBQUNEOztBQWxOc0I7O0FBdU43QiwrREFBZXBFLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9OQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmNvbnN0IGdldFdlYjMgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gV2FpdCBmb3IgbG9hZGluZyBjb21wbGV0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyB3aXRoIHdlYjMgaW5qZWN0aW9uIHRpbWluZy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gTW9kZXJuIGRhcHAgYnJvd3NlcnMuLi5cbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUmVxdWVzdCBhY2NvdW50IGFjY2VzcyBpZiBuZWVkZWRcbiAgICAgICAgICAvL2F3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cyd9KTtcbiAgICAgICAgICAvLyBBY2Njb3VudHMgbm93IGV4cG9zZWRcbiAgICAgICAgICByZXNvbHZlKHdlYjMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIExlZ2FjeSBkYXBwIGJyb3dzZXJzLi4uXG4gICAgICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xuICAgICAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxuICAgICAgICBjb25zdCB3ZWIzID0gd2luZG93LndlYjM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5qZWN0ZWQgd2ViMyBkZXRlY3RlZC5cIik7XG4gICAgICAgIHJlc29sdmUod2ViMyk7XG4gICAgICB9XG4gICAgICAvLyBGYWxsYmFjayB0byBsb2NhbGhvc3Q7IHVzZSBkZXYgY29uc29sZSBwb3J0IGJ5IGRlZmF1bHQuLi5cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgICAgICAgXCJodHRwczovL2JzYy1kYXRhc2VlZDEubmluaWNvaW4uaW9cIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHdlYjMgaW5zdGFuY2UgaW5qZWN0ZWQsIHVzaW5nIExvY2FsIHdlYjMuXCIpO1xuICAgICAgICByZXNvbHZlKHdlYjMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2ViMztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTkZUcyBmcm9tIFwiLi4vY29udHJhY3RzL05GVC5qc29uXCJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9nZXRXZWIzXCI7XG5cbmNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKTtcbmNvbnN0IHdlYjMgPSBuZXcgV2ViMygpO1xuY29uc3QgQk4gPSB3ZWIzLnV0aWxzLkJOO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xuXG4gICBjb25zdCB7IHdhbGxldCB9ID0gcHJvcHMucXVlcnk7XG4gICBcbiAgICByZXR1cm4geyB3YWxsZXQgfTtcbiAgIFxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIHJldHVybiAoXG48PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCI0MHB4IDExMHB4IDJweFwifX0gaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNSBtdC0xMCBqdXN0aWZ5LXN0YXJ0XCI+PC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpZD1cIm5mdF90ZW1wbGF0ZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTQ4IGZsZXgganVzdGlmeS1hcm91bmQgZmxleC1jb2wgYmctYmx1ZS0xMDAgcHgtMiBweS0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkXCI+PC9oMT5cbiAgICBcbiAgICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIHN0eWxlPXt7bWF4V2lkdGg6XCIxNTBweFwifX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwicm91bmRlZC1tZFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgXG4gICAgICA8Lz4gICAgXG4gICAgICApXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIFxuICAgICAgXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGFjY291bnQ6ICcnLFxuICAgICAgICAgIHdhbGxldEFkZHJlc3M6IHRoaXMucHJvcHMud2FsbGV0LFxuICAgICAgICAgIGNvbnRyYWN0OiBudWxsLFxuICAgICAgICAgIGltYWdlczogW10sXG4gICAgICAgICAgb3duZXJzOiBbXSxcbiAgICBpbWFnZUNvbnRyYWN0OiBbXSxcbiAgICAgICAgICBpbWFnZV91cmw6IFtdLFxuICAgICAgICAgIGltYWdlX25hbWU6IFtdLFxuICAgIGltYWdlX2lkOiBbXVxuICAgICAgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIGRvY3VtZW50LnRpdGxlID0gJ015IE5GVCBDb2xsZWN0aW9ucyc7XG4gICAgICBhd2FpdCB0aGlzLmV0aEVuYWJsZWQoKVxuICAgICAgXG4gIH1cblxuICBldGhFbmFibGVkID0gYXN5bmMgKCkgPT4ge1xuICAgXG4gIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBjdXJyZW50QWNjb3VudCB9KTtcbiAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgdGhpcy53ZWIzID0gd2luZG93LndlYjM7XG5cbiAgICB0aGlzLnJlbmRlclRva2Vuc0Zvck93bmVyKGN1cnJlbnRBY2NvdW50KVxuICAgIFxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuICBcbn1cblxuXG5cbnJlbmRlclRva2Vuc0Zvck93bmVyID0gYXN5bmMob3duZXJBZGRyZXNzKSA9PiB7XG5cbnZhciBjb250cmFjdEFkZHJlc2VzID0gW107IC8vIGluaXRpYWxpc2UgYW4gZW1wdHkgYXJyYXlcblxudmFyIFRva2VudXJsID0gYGh0dHBzOi8vYXBpLmJzY3NjYW4uY29tL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249dG9rZW5uZnR0eCZhZGRyZXNzPTB4MDRkOWY2RDNDMzNBMDQ5ZDFGMEY5YTNkZGExMDRjMGVlN0FEZWQ5NSZwYWdlPTEmb2Zmc2V0PTEwMCZzdGFydGJsb2NrPTAmZW5kYmxvY2s9OTk5OTk5OTk5JnNvcnQ9YXNjJmFwaWtleT03TklUNzZFNFhDQ1RZMTdVWkhBUkU1S1pHOVcyWTVUVFNaYDtcblxuYXdhaXQgZmV0Y2goVG9rZW51cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLnRoZW4oZGF0YSA9PiB7XG4gIGlmIChkYXRhLnN0YXR1cyA9PSAwKSB7XG4gICAgLy90b2dnbGVMb2FkaW5nKGZhbHNlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGxlbmd0aCA9IGRhdGEucmVzdWx0Lmxlbmd0aDtcbiAgLy9jb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgZm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXtcblxuICBpZihjb250cmFjdEFkZHJlc2VzLmxlbmd0aCA9PSAwKXtcbiAgICBjb250cmFjdEFkZHJlc2VzLnB1c2goZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKTtcblxuICB9ZWxzZXtcbiAgIFxuICAgIHZhciBjbnQgPSBjb250cmFjdEFkZHJlc2VzLmxlbmd0aDtcbiAgICB2YXIgaGFzID0gMDtcbiAgICBmb3IodmFyIGo9MDtqPGNudDtqKyspe1xuXG4gICAgIGlmKGNvbnRyYWN0QWRkcmVzZXNbal0gPT0gZGF0YS5yZXN1bHRbaV0uY29udHJhY3RBZGRyZXNzKXtcbiAgICAgICBoYXMgPSAxO1xuICAgICAgIGJyZWFrO1xuICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhcyA9PSAwKXtcblxuICAgIGNvbnRyYWN0QWRkcmVzZXMucHVzaChkYXRhLnJlc3VsdFtpXS5jb250cmFjdEFkZHJlc3MpO1xuXG4gICAgfVxuICAgIFxuXG4gIH1cblxuICAvL2NvbnNvbGUubG9nKGRhdGEucmVzdWx0W2ldLmNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgIH1cbiAgICBcbiAgXG4gIC8vL2NvbnNvbGUubG9nKGNvbnRyYWN0QWRkcmVzZXMubGVuZ3RoKTtcbn0pO1xuIFxudGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoY29udHJhY3RBZGRyZXNlcyk7XG59XG5cblxuXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YShhZGRyZXMpIHtcblxuICAgIFxuICAgIGZvcih2YXIgaj0wO2ogPCBhZGRyZXMubGVuZ3RoO2orKykge1xuICAgICBcbiAgICAgICAgICBjb25zdCBhZGRyZXNzID0gYWRkcmVzW2pdO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IG5ldyB0aGlzLndlYjMuZXRoLkNvbnRyYWN0KE5GVHMsIGFkZHJlc1tqXSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgXG5cbiAgICAgICAgICAvKnRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VfY29udHJhY3Q6IFsuLi50aGlzLnN0YXRlLmltYWdlX2NvbnRyYWN0LCBhZGRyZXNzXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgICovXG4gICAgICAgIFxuICAgICAgICAgIGNvbnN0IHRvdGFsTmZ0cyA9IDA7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY29udHJhY3QpXG4gICAgICAgICAgICAgdG90YWxOZnRzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZih0aGlzLnN0YXRlLndhbGxldEFkZHJlc3MpLmNhbGwoKSAgICBcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0b3RhbE5mdHMpO1xuICAgICAgICAgIGlmKHRvdGFsTmZ0cyA+IDApXG4gICAgICAgICAgZm9yKHZhciBpPTA7aSA8IHRvdGFsTmZ0cztpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBOZnRpZHMgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMudG9rZW5PZk93bmVyQnlJbmRleCh0aGlzLnN0YXRlLndhbGxldEFkZHJlc3MsaSkuY2FsbCgpXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZDogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfaWQsIE5mdGlkc11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBVcmkgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkoTmZ0aWRzKS5jYWxsKCk7XG5cbiAgICAgICAgICBhd2FpdCBmZXRjaChVcmkpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfdXJsOiBbLi4udGhpcy5zdGF0ZS5pbWFnZV91cmwsIGRhdGEuaW1hZ2VdXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbmFtZTogWy4uLnRoaXMuc3RhdGUuaW1hZ2VfbmFtZSwgZGF0YS5uYW1lXVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZCh0aGlzLmNyZWF0ZVRva2VuRWxlbWVudChOZnRpZHMsIGRhdGEubmFtZSwgZGF0YS5pbWFnZSkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTkZUIENvbnRyYWN0OicrYWRkcmVzW2pdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZHM6JytOZnRpZHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05hbWU6JytkYXRhLm5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VSTDonK2RhdGEuaW1hZ2UpO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgfVxuICAgIFxuICAgICAgfVxuXG4gICAgIGNyZWF0ZVRva2VuRWxlbWVudCh0b2tlbl9pZCwgIG5hbWUsIGltYWdlX3ByZXZpZXdfdXJsKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5mdF90ZW1wbGF0ZVwiKS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuIFxuICAgICAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpLmlkID0gYCR7dG9rZW5faWR9YFxuICAgICAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS5pbm5lclRleHQgPSBuYW1lXG4gICAgICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikuaHJlZiA9IGltYWdlX3ByZXZpZXdfdXJsXG4gICAgICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmMgPSBpbWFnZV9wcmV2aWV3X3VybFxuICAgICAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuYWx0ID0gbmFtZVxuICAgICAgXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50XG4gICAgICB9XG4gICAgICBcblxuXG59XG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9