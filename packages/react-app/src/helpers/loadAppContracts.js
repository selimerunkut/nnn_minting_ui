const contractListPromise = import("../contracts/hardhat_contracts.json");
// @ts-ignore
//const externalContractsPromise = import("../contracts/external_contracts");

export const loadAppContracts = async () => {
  const config = {};
  config.deployedContracts = (await contractListPromise).default ?? {};
  //console.log("contract config", config)
  //config.externalContracts = (await externalContractsPromise).default ?? {};
  return config;
};
