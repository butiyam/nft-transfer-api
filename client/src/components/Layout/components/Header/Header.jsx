import React, { Component } from 'react';
import NFTs from "../../../../contracts/NFT.json";   
import getWeb3 from "../../../../getWeb3";


const Web3 = require("web3");
const web3 = new Web3();
const BN = web3.utils.BN;

class Header extends Component {

    render() {

        return (
            <div className="overflow-hidden">
			

			
		</div>
        )
    }

    constructor(props) {
        super(props)
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
   
	this.loadBlockchainData();
  }



    async loadBlockchainData() {

      
            const address = '0xc54b96b04AA8828b63Cf250408E1084E9F6Ac6c8'//networkData.address
            const contract = new this.web3.eth.Contract(NFTs, address)

			/*this.setState({
				image_contract: [...this.state.image_contract, address]
			});
			*/
            this.setState({ contract })
            const totalNfts = await contract.methods.balanceOf('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95').call()
            //console.log(totalNfts);
			for(var i=0;i < totalNfts;i++){
				const Nftids = await contract.methods.tokenOfOwnerByIndex('0x04d9f6D3C33A049d1F0F9a3dda104c0ee7ADed95',i).call()

				

				this.setState({
                    image_id: [...this.state.image_id, Nftids]
                });

				var baseUrl = await contract.methods.baseURI().call();

			await fetch(baseUrl+Nftids).then(response => response.json())
				.then(data => {

				this.setState({
                    image_url: [...this.state.image_url, data.image]
                })

				this.setState({
                    image_name: [...this.state.image_name, data.name]
                })

				console.log('Ids:'+Nftids);
				console.log('Name:'+data.name);
				console.log('URL:'+data.image);
			})

				

			}
			
        }



}
export default Header;