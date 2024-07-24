import Web3 from "web3";
import tokens from "./constants.js";
import axios from "axios";
import dotenv from "dotenv";
import readlineSync from "readline-sync";

dotenv.config();

const web3 = new Web3(
  `wss://mainnet.infura.io/ws/v3/${process.env.INFURA_PROJECT_ID}`
);

const monitorTransactions = async () => {
  try {
    let selectedTokenIndex = readlineSync.keyInSelect(
      tokens.map((tk) => tk.symbol),
      "Select token to monitor ?"
    );

    if (selectedTokenIndex === -1) {
      console.log("No token selected.");
      return;
    }

    const selectedToken = tokens[selectedTokenIndex];
    console.log("Selected Token:", selectedToken.symbol);
    console.log("Token Address:", selectedToken.address);
    if (selectedToken.symbol == "ETH") {
      const subscription = await web3.eth.subscribe("newBlockHeaders");
      subscription.on("data", async (data) => {
        const block = await web3.eth.getBlock(data.number, true);
        block.transactions.map((txn) => {
          console.log("txn", txn);
        });
      });
    } else {
      let response = await axios.get(
        `https://api.etherscan.io/api?module=contract&action=getabi&address=${selectedToken.address}&apikey=${process.env.ETHERSCAN_API_KEY}`
      );

      if (response.data.status !== "1") {
        throw new Error("Failed to fetch ABI: " + response.data.result);
      }
      const contractABI = JSON.parse(response.data.result);
      const smartContract = new web3.eth.Contract(
        contractABI,
        selectedToken.address
      );
      smartContract.events
        .Transfer({ fromBlock: "latest" })
        .on("data", (txn) => console.log("txn: ", txn));
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
};

monitorTransactions();
