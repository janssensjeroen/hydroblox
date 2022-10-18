module.exports = {
  compilers: {
    solc: {
      version: "0.8.17"
    }
  },
  networks: {
    localnode: {
      network_id: "*",
      host: "localhost",
      port: 7545,
    }
  }
};
