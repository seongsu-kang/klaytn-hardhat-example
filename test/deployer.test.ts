import { ethers } from "hardhat";
import { expect } from "./chai-setup";
import { setup, getSignerBalance, getContractBalance } from './utils';

describe("Deployer", function () {
    it("Should...", async function () {
        const { contracts, deployer, player } = await setup();
        expect(await deployer.MyContract0.owner()).to.equal(deployer.address);
        expect(await deployer.MyContract1.owner()).to.equal(deployer.address);
    });
});