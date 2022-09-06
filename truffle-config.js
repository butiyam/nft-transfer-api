const path = require("path");
//require("dotenv").config({path: "./.env"});
const MNEMONIC = 'portion pupil receive elder illness master drill increase aspect ankle jungle cruel';
const HDWalletProvider = require("@truffle/hdwallet-provider");
const AccountIndex = 0;
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      provider: function(){
        return new HDWalletProvider(MNEMONIC, "https://data-seed-prebsc-1-s1.binance.org:8545", AccountIndex)
      },
      network_id: 97
    },
    ganache_local:{
      provider: function(){
        return new HDWalletProvider(MNEMONIC, "http://127.0.0.1:7545", AccountIndex)
      },
      network_id: 1337
    },
    rinkeby_testnet:{
      provider: function(){
        return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/6d61573bd4ee4c92a3b80dfbd9c3699d", AccountIndex)
      },
      network_id: 4
    },
    bsc_testnet:{
      provider: function(){
        return new HDWalletProvider(MNEMONIC, "https://data-seed-prebsc-1-s1.binance.org:8545", AccountIndex)
      },
      network_id: 97
    }
  },
  compilers: {
    solc: {
      version: "0.6.7",
      settings: {
        optimizer: {
          enabled: false,
          runs:  200  // Optimize for how many times you intend to run the code
        }
       
      }
    }
  }
};
