module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy("NNNToken", {
    contract: "NNNToken",
    from: deployer,
    proxy: {
      owner: deployer,
      proxyContract: "OpenZeppelinTransparentProxy",
      execute: {
        init: {
          methodName: "__initialize",
          args: [],
        },
      },
    },
    log: true,
  });
};
console.log("deploy script 001_deploy_nnn called");

module.exports.tags = ["NNNToken"];
