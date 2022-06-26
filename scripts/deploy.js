const { ethers } = require("hardhat");

const deploy = async() => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with acc: ",deployer.address);

  const NFTimba = await ethers.getContractFactory("NFTimba");
  const deployed = await NFTimba.deploy(10000);

  console.log("NFTimba was deployed at: ",deployed.address);
}

deploy()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  })