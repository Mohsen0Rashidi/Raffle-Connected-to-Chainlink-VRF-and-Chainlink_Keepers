const { ethers } = require("hardhat")

const networkConfig = {
    31337: {
        name: "hardhat",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        callbackGasLimit: "500000", // 500,000 gas
        entranceFee: ethers.utils.parseEther("0.01"), // 0.1 ETH
        updatingUpkeepInterval: "30",
    },
    5: {
        name: "goerli",
        vrfCoordinatorV2: "	0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        subscriptionId: "4180",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        callbackGasLimit: "500000", // 500,000 gas
        entranceFee: ethers.utils.parseEther("0.01"), // 0.1 ETH
        updatingUpkeepInterval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
