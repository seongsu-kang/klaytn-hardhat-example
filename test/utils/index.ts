import { ethers, deployments } from 'hardhat';
import { Contract } from 'ethers';
import { deployedContracts } from '../../my.config';
import { SignerWithAddress } from 'hardhat-deploy-ethers/dist/src/signer-with-address';

export async function getSignerBalance(signer: SignerWithAddress) {
    return parseInt((await signer.getBalance())._hex, 16) / 1e18;
}

export async function getContractBalance(address: string) {
    return parseInt((await ethers.provider.getBalance(address))._hex, 16) / 1e18;
}

export async function setup() {
    await deployments.fixture(['00', '01']);

    const MyContract0 = await ethers.getContract("MyContract0");
    const MyContract1 = await ethers.getContract("MyContract1");

    // setup something with contracts
    // ...

    const signers = await ethers.getSigners();
    const accounts = signers.map(s => s.address);

    const contractInstances = await Promise.all(
        deployedContracts.map((contract) => ethers.getContract(contract))
    );
    const contracts: { [contractName: string]: Contract } = Object.fromEntries(deployedContracts.map((k, i) => [k, contractInstances[i]]));

    const { deployer, player } = await ethers.getNamedSigners();

    return {
        contracts,
        deployer: await setupUser(deployer, contracts),
        player: await setupUser(player, contracts),
    };
}

export async function setupUser<T extends { [contractName: string]: Contract }>(
    signer: SignerWithAddress,
    contracts: T
): Promise<{ address: string, signer: SignerWithAddress } & T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user: any = { 'address': signer.address, 'signer': signer };
    for (const key of Object.keys(contracts)) {
        user[key] = contracts[key].connect(<any>signer);
    }
    return user as { address: string, signer: SignerWithAddress } & T;
}