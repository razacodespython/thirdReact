// import { useWeb3} from "@3rdweb/hooks";
// import { useMemo } from "react";
// import { ThirdwebSDK } from "@3rdweb/sdk";
// import { ethers } from "ethers"



// function ListMynft() {

//   const { provider } = useWeb3();
//   const sdk = useMemo(() => {
//     return new ThirdwebSDK(provider);
//   }, [provider]);

// //   const PRIV_KEY = ""
// //   const sdk = new ThirdwebSDK(
// //     new ethers.Wallet(
// //         // Your wallet private key
// //         PRIV_KEY,
// //         // RPC URL
// //         ethers.getDefaultProvider("https://rinkeby-light.eth.linkpool.io/")
// //     )
// // );

// // Initialize market module by passing in contract address
// const market = sdk.getMarketModule("0x129b9Dec4Ead2Eb5e2f0B51a14ae18b04946A8Ee");

// // Declaring the nft smart contract address
// const nftSmartContractAddress = "0x9310918FD886C69B65Ad88BccdE31638b3A93cFD"

// const amount = ethers.utils.parseUnits("1", 18)
// const onClick = () => market.list(
//   nftSmartContractAddress, //pack or reward contract from admin dashboard
//   listingId, // tokenId of token you want to list
//   "0x0d5fb8942eEa62093944F3e91C6Ac4e584336741",// currency contract from admin dashboard
//   amount, // price of the token
//   1, // quantity of owned tokens you want to list
//   0, // 0 seconds until start = listing immediately available
//   0 // 0 means that the listing will never get taken off the marketplace
// );
// // the listingId of the listing you want to fetch data for
// const listingId = "4";
//   return(<button 
//     onClick={onClick}>LIST</button>)
// }
// console.log(ListMynft)

// export default ListMynft;

// // Get all the listings
// //market.getAll();