require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-gas-reporter")

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.g.alchemy.com/v2/Wh-Lrq26gXDsjnSel71rjqD9JXIZpyA4"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "759b4619d5d945d446acd1839eb3e148632217b1eead2e17b0fba5a9e98699b3"
const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || "X82UTVQFDE7TY6KQQHZAZGZ4AQGFW7FK4S"

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },

    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    mocha: {
        timeout: 500000,
    },
}
