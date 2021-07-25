let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    const SimpleContract = await ethers.getContractFactory("SimpleContract");
    const simpleContract = await SimpleContract.deploy();

    await simpleContract.changeNumber(5);
    log("Run Simple Contract with command:")
    log("npx hardhat get-number --contract " + simpleContract.address + " --network " + networkConfig[chainId]['name'])
    log("----------------------------------------------------")

}

module.exports.tags = ['main']
