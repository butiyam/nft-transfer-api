import React, { Component } from 'react';
import NFTs from "../contracts/NFT.json"
import getWeb3 from "../getWeb3";

const Web3 = require("web3");
const web3 = new Web3();
const BN = web3.utils.BN;

class Home extends Component {


  static async getInitialProps(props){

   const { wallet } = props.query;
   
    return { wallet };
   

  }

  render() {

      return (
<>
        <div style={{padding: "40px 110px 2px"}} id="container" className="flex flex-wrap gap-5 mt-10 justify-start"></div>
        <template id="nft_template">
        <section className="w-48 flex justify-around flex-col bg-blue-100 px-2 py-1 rounded-md">
          <h1 className="text-black text-center font-semibold"></h1>
    
          <a href="" target="_blank">
            <img src="" style={{maxWidth:"150px"}} alt="" className="rounded-md" />
          </a>
        </section>
      </template>
      
      </>    
      )
  }

  constructor(props) {

      super(props)
      
      
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
      }
  }

  async componentDidMount() {
  document.title = 'My NFT Collections';
      await this.ethEnabled()
      
  }

  ethEnabled = async () => {
   
  if (window.ethereum) {
    
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const currentAccount = accounts[0];
    
    this.setState({ account: currentAccount });
    window.web3 = new Web3(window.ethereum);
    this.web3 = window.web3;

    this.renderTokensForOwner(currentAccount)
    

    return true;
  }
  return false;
  
}



renderTokensForOwner = async(ownerAddress) => {

var contractAddreses = []; // initialise an empty array

var Tokenurl = `https://api.bscscan.com/api?module=account&action=tokennfttx&address=0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95&page=1&offset=100&startblock=0&endblock=999999999&sort=asc&apikey=7NIT76E4XCCTY17UZHARE5KZG9W2Y5TTSZ`;

await fetch(Tokenurl).then(response => response.json())
.then(data => {
  if (data.status == 0) {
    //toggleLoading(false);
    return;
  }
  let length = data.result.length;
  //console.log(length);
   for(var i=0;i<length;i++){

  if(contractAddreses.length == 0){
    contractAddreses.push(data.result[i].contractAddress);

  }else{
   
    var cnt = contractAddreses.length;
    var has = 0;
    for(var j=0;j<cnt;j++){

     if(contractAddreses[j] == data.result[i].contractAddress){
       has = 1;
       break;
     }
    }

    if (has == 0){

    contractAddreses.push(data.result[i].contractAddress);

    }
    

  }

  //console.log(data.result[i].contractAddress);

   }
    
  
  ///console.log(contractAddreses.length);
});
 
this.loadBlockchainData(contractAddreses);
}



  async loadBlockchainData(addres) {

    
    for(var j=0;j < addres.length;j++) {
     
          const address = addres[j];
          try {
            const contract = await new this.web3.eth.Contract(NFTs, addres[j]);
          
            this.setState({ contract })
            
          } catch (error) {

          }
          

          /*this.setState({
            image_contract: [...this.state.image_contract, address]
          });
          */
        
          const totalNfts = 0;
          try {
            if(this.state.contract)
             totalNfts = await this.state.contract.methods.balanceOf(this.state.walletAddress).call()    
          } catch (error) {
            
          }

          
          //console.log(totalNfts);
          if(totalNfts > 0)
          for(var i=0;i < totalNfts;i++){
            
            const Nftids = await this.state.contract.methods.tokenOfOwnerByIndex(this.state.walletAddress,i).call()

            
            this.setState({
                        image_id: [...this.state.image_id, Nftids]
                    });

            var Uri = await this.state.contract.methods.tokenURI(Nftids).call();

          await fetch(Uri).then(response => response.json())
            .then(data => {

            this.setState({
                        image_url: [...this.state.image_url, data.image]
                    })

            this.setState({
                        image_name: [...this.state.image_name, data.name]
                    })

        document.getElementById("container").append(this.createTokenElement(Nftids, data.name, data.image));

            console.log('NFT Contract:'+addres[j]);
            console.log('Ids:'+Nftids);
            console.log('Name:'+data.name);
            console.log('URL:'+data.image);
          })

            

          }
          
      }
    
      }

     createTokenElement(token_id,  name, image_preview_url) {
        const newElement = document.getElementById("nft_template").content.cloneNode(true)
 
        newElement.querySelector("section").id = `${token_id}`
        newElement.querySelector("h1").innerText = name
        newElement.querySelector("a").href = image_preview_url
        newElement.querySelector("img").src = image_preview_url
        newElement.querySelector("img").alt = name
      
        return newElement
      }
      


}
export default Home;