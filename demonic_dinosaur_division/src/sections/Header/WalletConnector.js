import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

let connector = null;

const InitiateConnection = () => {
  window.Buffer = require('buffer/').Buffer;

  // Create a connector
  connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

  // Subscribe to connection events
  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }

    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0];
    // console.log(accounts, chainId);
    console.log("connection established");
  });

  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }

    // Get updated accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }

    // Delete connector
    console.log("connection killed");
  });
  
  return connector;
};

const createConnection = () => {

  // Check if connection is already established
  if (!connector.connected) {
    // create new session
    connector.createSession();
  }
}

const killConnection = () => {
  if (connector) {
    connector.killSession();
  }
}

export { InitiateConnection, createConnection, killConnection, connector };