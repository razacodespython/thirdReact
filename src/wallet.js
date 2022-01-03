import { useWeb3 } from "@3rdweb/hooks";
import { useCallback, useMemo } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const Component = () => {
  // You can do whatever you want with this data
  //const { address, chainId, provider } = useWeb3();

  const { address, chainId, provider } = useWeb3();

  // We won't always have a provider, and so we need to be sure to
  // instantiate the ThirdwebSDK with a provider *only if we have one*
  const sdk = useMemo(
    () =>
      provider ? new ThirdwebSDK(provider.getSigner()) : new ThirdwebSDK(),
    [provider]
  );
  // const sdk = useMemo(() => {
  //   return new ThirdwebSDK(provider);}, [provider]);
  console.log(provider);
  console.log(address);

  // We should use the `useMemo` to ensure that the `market` is always
  // initiated with the latest `sdk` variable
  const market = useMemo(
    () => sdk.getMarketModule("0x129b9Dec4Ead2Eb5e2f0B51a14ae18b04946A8Ee"),
    [sdk]
  );
  console.log(market);

  // Declaring the nft smart contract address
  const nftSmartContractAddress = "0x9310918FD886C69B65Ad88BccdE31638b3A93cFD";

  const amount = ethers.utils.parseUnits("1", 18);

  // We should use the `useCallback` to ensure that the `buy`
  // function is always initiated with the latest `market` variable
  const onClick = useCallback(() => {
    const listingId = "6";
    market.list(
      nftSmartContractAddress, //pack or reward contract from admin dashboard
      listingId, // tokenId of token you want to list
      "0x0d5fb8942eEa62093944F3e91C6Ac4e584336741", // currency contract from admin dashboard
      amount, // price of the token
      1, // quantity of owned tokens you want to list
      0, // 0 seconds until start = listing immediately available
      0 // 0 means that the listing will never get taken off the marketplace
    );
  }, [amount, market]);

  return (
    <div>
      Address: {address}
      <br />
      Chain ID: {chainId}
      <br />
      <button class="btn" onClick={onClick}>
        LIST
      </button>
    </div>
  );
};
export default Component;