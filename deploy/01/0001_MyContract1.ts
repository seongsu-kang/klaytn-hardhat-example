import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function ({ deployments, getNamedAccounts }: HardhatRuntimeEnvironment) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy('MyContract1', {
        contract: 'MyContract1',
        from: deployer,
        args: [],
        log: true,
    });
}
export default func;
func.tags = ['01', 'MyContract1'];

