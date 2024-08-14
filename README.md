# Token Transaction Monitor using Web3.js

This script monitors Ethereum transactions for a selected token in real-time using Web3.js. It provides the ability to monitor either ETH transactions or ERC-20 token transfers.

## Prerequisites

To run this script, you'll need:

- Node.js installed on your machine.
- An Infura project ID to connect to the Ethereum mainnet.
- An Etherscan API key to fetch smart contract ABIs.
- A `.env` file with the following environment variables:
  - `INFURA_PROJECT_ID`: Your Infura project ID.
  - `ETHERSCAN_API_KEY`: Your Etherscan API key.

## Installation

1. Clone the repository or copy the script files.
2. Install the necessary dependencies by running:

   ```bash
   npm install
