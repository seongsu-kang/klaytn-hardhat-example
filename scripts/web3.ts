import "@nomiclabs/hardhat-web3";
import { AbiCoder } from "ethers/lib/utils";
import { ethers, web3 } from "hardhat";

async function main() {
    /***** some nft address *****/
    const address = "0x22b99ff14b888739547f8f38548a866cc8b3a1bc";

    /***** get past events *****/
    const contract = await ethers.getContractAt('IERC721', address);
    const eventFilter = contract.filters.Transfer('0x0000000000000000000000000000000000000000');
    const logs = await contract.queryFilter(eventFilter, 78700000, 'latest');
    for (const log of logs) {
        let tokenId = <any>(<any>log.args).tokenId.toNumber();
    }
}


    /***** get information *****/
    // const code = await ethers.provider.getCode(address);
    // console.log(code);

    // const names = ['baseTokenURI'];['name', 'totalSupply', 'paused', 'symbol', 'owner'];
    // for (const name of names) {
    //     let res = await web3.eth.call({
    //         to: address,
    //         data: web3.eth.abi.encodeFunctionCall(
    //             {
    //                 type: "function",
    //                 name: name,
    //                 inputs: [],
    //             },
    //             []
    //         ),
    //     });
    //     console.log(name + ' ' + res);
    // }

    // let res = await web3.eth.call({
    //     to: address,
    //     data: web3.eth.abi.encodeFunctionCall(
    //         {
    //             type: "function",
    //             name: 'tokenURI',
    //             inputs: [{ type: 'uint256', name: '' }],
    //         },
    //         ['123']
    //     ),
    // });
    // console.log(res);
};


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });