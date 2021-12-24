import { HardhatUserConfig, task } from "hardhat/config";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import { assert } from "console";

// const ropstenURL: string = "https://ropsten.infura.io/v3/" + process.env.ROPSTEN_INFURA_KEY;
const accounts: string[] = (process.env.PRIVATE_KEY && process.env.PRIVATE_KEY2) ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY2] : [];
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      saveDeployments: true,
    },
    // ropsten: {
    //   url: ropstenURL,
    //   accounts: accounts,
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    cypress: {
      url: 'https://node-api.klaytnapi.com/v1/klaytn',
      httpHeaders: {
        'x-chain-id': '8217',
        authorization: process.env.KAS_AUTH || '',
      },
      chainId: 8217,
      gas: 20000000,
      gasPrice: 25000000000,
      accounts: accounts,
      live: true,
      saveDeployments: true,
    },
    baobab: {
      url: 'https://node-api.klaytnapi.com/v1/klaytn',
      httpHeaders: {
        'x-chain-id': '1001',
        authorization: process.env.KAS_AUTH || '',
      },
      chainId: 1001,
      gas: 20000000,
      gasPrice: 25000000000,
      accounts: accounts,
      live: true,
      saveDeployments: true,
    },
  },
  namedAccounts: {
    deployer: 0,
    player: 1,
  },
  mocha: {
    timeout: 300000
  },
  solidity: "0.8.4",
};

export default config