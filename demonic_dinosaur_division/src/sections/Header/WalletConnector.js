import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Alert } from "../../components/AlertPopUp/AlertPopUp";

// Web3Modal
let web3Connector;

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;

const InitiateConnection = async () => {
  window.Buffer = require("buffer/").Buffer;

  // Create a web3Connector
  web3Connector = new Web3Modal({
    network: "rinkeby",
    cacheProvider: true,
    disableInjectedProvider: true,
    providerOptions: getProviders(),
  });

  if (web3Connector.cachedProvider) await connectWallet();

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
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "Demonic Dinosaur Division NFT", // Required
        infuraId,
      },
    },
    injected: {},
  };

  return providerOptions;
};

const connectWallet = async () => {
  try {
    let cachedProvider = web3Connector.cacheProvider;
    provider = cachedProvider
      ? await web3Connector.connectTo(cachedProvider)
      : await web3Connector.connect();
    // const web3library = new Web3(provider);

    subscribeProvider(provider);
    fetchAccountData();
  } catch (error) {
    Alert("info", "Could not get a wallet connection.");
  }
};

const disconnectWallet = async () => {
  console.log("happening")
  await web3Connector.clearCachedProvider();
  // provider = null;
  // selectedAccount = null;
};

const subscribeProvider = () => {
  if (provider.on) {
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      // console.log(accounts);
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      // console.log(chainId);
    });

    // Subscribe to provider connection
    provider.on("connect", (info) => {
      console.log(info);
    });

    // Subscribe to provider disconnection
    provider.on("disconnect", (error) => {
      // console.log(error);
      disconnectWallet();
    });
  }
};

const fetchAccountData = () => {
  selectedAccount = provider.accounts[0];
}

export { InitiateConnection, connectWallet, disconnectWallet, selectedAccount, provider };
