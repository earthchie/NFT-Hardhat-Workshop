require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

const deployer = ["714ee9cd9add69a3760df86d11419bf1632bdfc6adf62e40a3910a5ba62ddd48"];

module.exports = {
  networks: {
    myNetwork: {
      url: "...",
      chainId: 0000,
      accounts: deployer
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20*1e9,
      accounts: deployer
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 5*1e9,
      accounts: deployer
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
};