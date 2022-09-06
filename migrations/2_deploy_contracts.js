const NFT = artifacts.require("NFT");
const Marketplace = artifacts.require("Marketplace");


module.exports = async function (deployer) {

  deployer.deploy(NFT).then(function() {
    return deployer.deploy(Marketplace, NFT.address);
  });


};
