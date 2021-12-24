import { task, types } from "hardhat/config";
import assert from "assert";

task("buy", "Swap Klay to Ksp")
    .addOptionalParam("klay", "Klay amount", "1", types.string)
    .setAction(async function (taskArgs, hre) {
        assert(
            taskArgs.klay != "0",
            "Klay amount must be positive"
        );
        // const KLAYSWAP = await hre.ethers.getContractAt(
        //     "FactoryLike",
        //     KLAYSWAP_ADDRESS
        // );
        // const amountIn = hre.ethers.utils.parseEther(taskArgs.klay);
        // const minAmountOut = 1;
        // let tx = await KLAYSWAP.exchangeKlayPos(KSP_ADDRESS, minAmountOut, [], {
        //     value: amountIn,
        // }).then((txRes: any) => txRes.wait());
        // console.log("buy:", tx.transactionHash);
    });