async function main() {
    const Factory = await hre.ethers.getContractFactory("NFT");
    const Contract = await Factory.deploy();
 
    await Contract.deployed();
 
    console.log("NFT deployed to:", Contract.address);
}
 
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
