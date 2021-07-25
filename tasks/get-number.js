task("get-number", "Get the number stored in the simple contract")
  .addParam(
    "contract",
    "The address of the Simple contract that you want to read"
  )
  .addParam(
    "testparam",
    "A param for testing"
  )
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract;
    const testParam = taskArgs.testparam;
    const networkId = network.name;

    console.log('Test param: ',testParam);
    const SimpleContract = await ethers.getContractFactory("SimpleContract");
    console.log(
      "Reading number from simple contract address ",
      contractAddr,
      " on network ",
      networkId
    );

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const simpleontract = await new ethers.Contract(
      contractAddr,
      SimpleContract.interface,
      signer
    );
    await simpleontract.getNumber().then((data) => {
      console.log("The number is: ", data.toString());
    });
  });

module.exports = {};
