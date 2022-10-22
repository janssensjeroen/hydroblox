const { mnemonic, infura_apikey } = require('./secrets.json');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const goerli_uri = `wss://goerli.infura.io/ws/v3/${infura_apikey}`

module.exports = {
  compilers: {
    solc: {
      version: "0.8.17"
    }
  },
  networks: {
    development: {
      network_id: "*",
      host: "localhost",
      port: 8545,
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, goerli_uri),
      network_id: '5',
      websocket: true,
      // gas: 90000000,
      // gasPrice: 10000000000,
      // confirmations: 2,
      // timeoutBlocks: 200,
      gas: 4500000,
      gasPrice: 10000000,
      skipDryRun: true,
      networkCheckTimeout: 10000000,
      setTimeout: 5000000000
    },
  }
};
