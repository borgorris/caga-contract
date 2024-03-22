require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.21",
	settings: {
		viaIR: true,
		optimizer: {
		  enabled: true,
		  runs: 20000,
		},
	  },
	networks: {
		hardhat: {},
		holesky: {
			url: "https://1rpc.io/holesky",
			accounts: [process.env.PRIVATE_KEY],
			timeout: 20000000,
		},
	},
};
