import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
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
  }
}

export default config;
