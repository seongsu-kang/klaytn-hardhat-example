import "@nomiclabs/hardhat-web3";
import { ethers, web3 } from "hardhat";

async function main() {
    // some nft address
    const address = "0xdef6e293930b5598cbf1c1a8cb1b0cbd0deb5708";

    const code = await ethers.provider.getCode(address);
    console.log(code);

    const names = ['name', 'totalSupply', 'paused', 'symbol', 'owner'];
    for (const name of names) {
        let res = await web3.eth.call({
            to: address,
            data: web3.eth.abi.encodeFunctionCall(
                {
                    type: "function",
                    name: name,
                    inputs: [],
                },
                []
            ),
        });
        console.log(name + ' ' + res);
    }

    let res = await web3.eth.call({
        to: address,
        data: web3.eth.abi.encodeFunctionCall(
            {
                type: "function",
                name: 'tokenURI',
                inputs: [{ type: 'uint256', name: '' }],
            },
            ['1']
        ),
    });
    console.log(res);
};


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });