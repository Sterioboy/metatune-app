import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import { load } from 'ts-dotenv';

const env = load({
  INFURA_API_KEY: String,
  INFURA_SECRET_KEY: String,
  WALLET_PRIVATE_KEY: String,
  ETHERSCAN_API_KEY: String
});

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${env.INFURA_API_KEY}`,
      accounts: [env.WALLET_PRIVATE_KEY]
    },
    linea_testnet: {
      url: "https://linea-goerli.infura.io/v3/" + env.INFURA_API_KEY,
      accounts: [env.WALLET_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: env.ETHERSCAN_API_KEY,
      linea_testnet: env.ETHERSCAN_API_KEY
    },
    customChains: [
      {
        network: "linea_testnet",
        chainId: 59140,
        urls: {
          apiURL: "https://api-testnet.lineascan.build/api",
          browserURL: "https://goerli.lineascan.build"
        }
      }
    ]
  }
}

export default config;
