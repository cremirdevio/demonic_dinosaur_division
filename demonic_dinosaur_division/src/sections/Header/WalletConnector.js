import WalletConnectProvider from "@walletconnect/web3-provider";

let web3Connector = null;

const InitiateConnection = () => {
  window.Buffer = require("buffer/").Buffer;

  // Create a web3Connector
  web3Connector = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions: getProviders(), // required
  })();

  return connector;
};

const getProviders = () => {
  const infuraId = "";
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId,
      },
    },
  };

  return providerOptions;
};

export { InitiateConnection };
