const GasLimit = artifacts.require("GasLimit");

contract("GasLimit", () => {
  it("Should subtract the difference of the two numbers from the sum of the two numbers", async () => {
    const gasLimit = await GasLimit.deployed();
    const result = await gasLimit.returngasLimit();
    console.log("This is the gas limit: ", result.toNumber());
  });
});
