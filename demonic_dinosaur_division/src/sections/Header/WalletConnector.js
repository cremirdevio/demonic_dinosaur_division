import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";

let web3Connector = null;

const InitiateConnection = async () => {
  window.Buffer = require("buffer/").Buffer;

  // Create a web3Connector
  web3Connector = new Web3Modal({
    network: "rinkeby",
    cacheProvider: false,
    disableInjectedProvider: true,
    providerOptions: getProviders(),
  });

  return web3Connector;
};

const getProviders = () => {
  const infuraId = "821e1837c0304463aca81db16fdaa1b9";
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId,
      },
    },
    binancechainwallet: {
      package: true,
    },
  };

  return providerOptions;
};

const connectWallet = async () => {
  try {
    const provider = await web3Connector.connect();
    const web3library = new Web3(provider);

    console.log(web3library);
  } catch (error) {
    setError(error);
  }
};

export { InitiateConnection, connectWallet };
