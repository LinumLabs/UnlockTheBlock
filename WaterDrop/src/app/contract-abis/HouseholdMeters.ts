export const HouseholdMeters = {
	"contractName": "HouseholdMeters",
	"abi": [
		{
			"constant": false,
			"inputs": [
				{
					"name": "_adminToRemove",
					"type": "address"
				}
			],
			"name": "removeAdmin",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_newAdmin",
					"type": "address"
				}
			],
			"name": "addAdmin",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_meter",
					"type": "address"
				},
				{
					"name": "_householdMembers",
					"type": "uint16"
				}
			],
			"name": "updateHousehold",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "householdMeters",
			"outputs": [
				{
					"name": "householdMembers",
					"type": "uint16"
				},
				{
					"name": "householdMetersAddressesIndex",
					"type": "uint256"
				},
				{
					"name": "isActive",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "whiteListedAdmins",
			"outputs": [
				{
					"name": "isActive",
					"type": "bool"
				},
				{
					"name": "adminsArrayIndex",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_meter",
					"type": "address"
				},
				{
					"name": "_householdMembers",
					"type": "uint16"
				}
			],
			"name": "addHouseholdMeter",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_meter",
					"type": "address"
				}
			],
			"name": "removeHouseholdMeter",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "householdMetersAddresses",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "administrators",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_meter",
					"type": "address"
				}
			],
			"name": "getHouseholdMembersCount",
			"outputs": [
				{
					"name": "membersCount",
					"type": "uint16"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "_admin",
					"type": "address"
				}
			],
			"name": "LogAddAdmin",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "_admin",
					"type": "address"
				}
			],
			"name": "LogRemoveAdmin",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "_meter",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_householdMembers",
					"type": "uint16"
				},
				{
					"indexed": false,
					"name": "_admin",
					"type": "address"
				}
			],
			"name": "LogAddHouseholdMeter",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "_meter",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_admin",
					"type": "address"
				}
			],
			"name": "LogRemoveHouseholdMeter",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		}
	],
	"bytecode": "0x6060604052341561000f57600080fd5b60008054600160a060020a03191633600160a060020a031617905560408051908101604090815260018252600354602080840191909152600160a060020a03331660009081526004909152208151815460ff1916901515178155602082015160019182015560038054909250908101610088838261018a565b5060009182526020909120018054600160a060020a03191633600160a060020a03161790556060604051908101604090815260048252600180546020808501919091529183015273f17f52151ebef6c7334fad080c5704d77216b732600052600290527f1441756f947caa4d0346813189ca3aabc7c39a36ac5ff1b9cebc3ac841de19af8151815461ffff191661ffff91909116178155602082015181600101556040820151600291909101805460ff19169115159190911790555060018054808201610155838261018a565b5060009182526020909120018054600160a060020a03191673f17f52151ebef6c7334fad080c5704d77216b7321790556101d4565b8154818355818115116101ae576000838152602090206101ae9181019083016101b3565b505050565b6101d191905b808211156101cd57600081556001016101b9565b5090565b90565b610aba806101e36000396000f3006060604052600436106100b95763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631785f53c81146100be57806370480275146100f157806382653d43146101105780638da5cb5b146101365780638f08f71c146101655780639fbef677146101af578063ac1a4659146101e8578063d0cb13e41461020e578063d63029b41461022d578063d89d151014610243578063ec4dd9bc14610259578063f2fde38b1461028f575b600080fd5b34156100c957600080fd5b6100dd600160a060020a03600435166102b0565b604051901515815260200160405180910390f35b34156100fc57600080fd5b6100dd600160a060020a0360043516610426565b341561011b57600080fd5b6100dd600160a060020a036004351661ffff60243516610555565b341561014157600080fd5b6101496105d4565b604051600160a060020a03909116815260200160405180910390f35b341561017057600080fd5b610184600160a060020a03600435166105e3565b60405161ffff9093168352602083019190915215156040808301919091526060909101905180910390f35b34156101ba57600080fd5b6101ce600160a060020a036004351661060d565b604051911515825260208201526040908101905180910390f35b34156101f357600080fd5b6100dd600160a060020a036004351661ffff6024351661062c565b341561021957600080fd5b6100dd600160a060020a03600435166107be565b341561023857600080fd5b610149600435610954565b341561024e57600080fd5b61014960043561097c565b341561026457600080fd5b610278600160a060020a036004351661098a565b60405161ffff909116815260200160405180910390f35b341561029a57600080fd5b6102ae600160a060020a03600435166109a9565b005b60008054819033600160a060020a039081169116146102ce57600080fd5b600160a060020a038316600090815260046020526040902054839060ff1615156102f757600080fd5b600160a060020a038416151561030c57600080fd5b60038054600019810190811061031e57fe5b6000918252602080832090910154600160a060020a038781168452600490925260409092206001015460038054929093169450849291811061035c57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560038054906103a5906000198301610a44565b50600160a060020a0380851660008181526004602052604080822060018082015495881684528284200194909455919052815460ff19169091557f78693bd77b9425cf4363f929f93dd7d744f9d7474b3de94b2895020cf56f4a0190859051600160a060020a03909116815260200160405180910390a15060019392505050565b6000805433600160a060020a0390811691161461044257600080fd5b600160a060020a038216600090815260046020526040902054829060ff161561046a57600080fd5b600160a060020a038316151561047f57600080fd5b60408051908101604090815260018252600354602080840191909152600160a060020a03861660009081526004909152208151815460ff19169015151781556020820151600191820155600380549092509081016104dd8382610a44565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0385161790557f6b752a74438d47bfe20cac17baf37ecb035071c961f1f9fc463d4f4baf78ce6a83604051600160a060020a03909116815260200160405180910390a150600192915050565b600160a060020a03331660009081526004602052604081205460ff16151561057c57600080fd5b600160a060020a038316151561059157600080fd5b600061ffff8316116105a257600080fd5b50600160a060020a0382166000908152600260205260409020805461ffff831661ffff19909116179055600192915050565b600054600160a060020a031681565b600260208190526000918252604090912080546001820154919092015461ffff9092169160ff1683565b6004602052600090815260409020805460019091015460ff9091169082565b600160a060020a03331660009081526004602052604081205460ff16151561065357600080fd5b600160a060020a03831660009081526002602081905260409091200154839060ff161561067f57600080fd5b600160a060020a038416151561069457600080fd5b600061ffff8416116106a557600080fd5b6060604051908101604090815261ffff851682526001805460208085019190915282840191909152600160a060020a03871660009081526002909152208151815461ffff191661ffff91909116178155602082015181600101556040820151600291909101805460ff1916911515919091179055506001805480820161072b8382610a44565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0386161790557f46c4c28194fcdde3bbf9b40a01281645ef02ca05c1933ee698b9f3bf27e9e967848433604051600160a060020a03938416815261ffff90921660208301529091166040808301919091526060909101905180910390a15060019392505050565b600160a060020a033316600090815260046020526040812054819060ff1615156107e757600080fd5b600160a060020a03831660009081526002602081905260409091200154839060ff16151561081457600080fd5b600160a060020a038416151561082957600080fd5b60018054600019810190811061083b57fe5b6000918252602080832090910154600160a060020a03878116845260029092526040909220600190810154815492909316945084929091811061087a57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560018054906108c3906000198301610a44565b50600160a060020a038085166000818152600260208190526040808320600180820154968916855282852001959095559290915291909101805460ff191690557fabcd3f97e6197600d33884de3d60f45d5e14d18361c48b4ea4c73978732e2b96908590339051600160a060020a039283168152911660208201526040908101905180910390a15060019392505050565b600180548290811061096257fe5b600091825260209091200154600160a060020a0316905081565b600380548290811061096257fe5b600160a060020a031660009081526002602052604090205461ffff1690565b60005433600160a060020a039081169116146109c457600080fd5b600160a060020a03811615156109d957600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b815481835581811511610a6857600083815260209020610a68918101908301610a6d565b505050565b610a8b91905b80821115610a875760008155600101610a73565b5090565b905600a165627a7a72305820cdb9045472c644d384ec8309de14596cdc93d8d08455771e483b4a2ab31d780b0029",
	"deployedBytecode": "0x6060604052600436106100b95763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631785f53c81146100be57806370480275146100f157806382653d43146101105780638da5cb5b146101365780638f08f71c146101655780639fbef677146101af578063ac1a4659146101e8578063d0cb13e41461020e578063d63029b41461022d578063d89d151014610243578063ec4dd9bc14610259578063f2fde38b1461028f575b600080fd5b34156100c957600080fd5b6100dd600160a060020a03600435166102b0565b604051901515815260200160405180910390f35b34156100fc57600080fd5b6100dd600160a060020a0360043516610426565b341561011b57600080fd5b6100dd600160a060020a036004351661ffff60243516610555565b341561014157600080fd5b6101496105d4565b604051600160a060020a03909116815260200160405180910390f35b341561017057600080fd5b610184600160a060020a03600435166105e3565b60405161ffff9093168352602083019190915215156040808301919091526060909101905180910390f35b34156101ba57600080fd5b6101ce600160a060020a036004351661060d565b604051911515825260208201526040908101905180910390f35b34156101f357600080fd5b6100dd600160a060020a036004351661ffff6024351661062c565b341561021957600080fd5b6100dd600160a060020a03600435166107be565b341561023857600080fd5b610149600435610954565b341561024e57600080fd5b61014960043561097c565b341561026457600080fd5b610278600160a060020a036004351661098a565b60405161ffff909116815260200160405180910390f35b341561029a57600080fd5b6102ae600160a060020a03600435166109a9565b005b60008054819033600160a060020a039081169116146102ce57600080fd5b600160a060020a038316600090815260046020526040902054839060ff1615156102f757600080fd5b600160a060020a038416151561030c57600080fd5b60038054600019810190811061031e57fe5b6000918252602080832090910154600160a060020a038781168452600490925260409092206001015460038054929093169450849291811061035c57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560038054906103a5906000198301610a44565b50600160a060020a0380851660008181526004602052604080822060018082015495881684528284200194909455919052815460ff19169091557f78693bd77b9425cf4363f929f93dd7d744f9d7474b3de94b2895020cf56f4a0190859051600160a060020a03909116815260200160405180910390a15060019392505050565b6000805433600160a060020a0390811691161461044257600080fd5b600160a060020a038216600090815260046020526040902054829060ff161561046a57600080fd5b600160a060020a038316151561047f57600080fd5b60408051908101604090815260018252600354602080840191909152600160a060020a03861660009081526004909152208151815460ff19169015151781556020820151600191820155600380549092509081016104dd8382610a44565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0385161790557f6b752a74438d47bfe20cac17baf37ecb035071c961f1f9fc463d4f4baf78ce6a83604051600160a060020a03909116815260200160405180910390a150600192915050565b600160a060020a03331660009081526004602052604081205460ff16151561057c57600080fd5b600160a060020a038316151561059157600080fd5b600061ffff8316116105a257600080fd5b50600160a060020a0382166000908152600260205260409020805461ffff831661ffff19909116179055600192915050565b600054600160a060020a031681565b600260208190526000918252604090912080546001820154919092015461ffff9092169160ff1683565b6004602052600090815260409020805460019091015460ff9091169082565b600160a060020a03331660009081526004602052604081205460ff16151561065357600080fd5b600160a060020a03831660009081526002602081905260409091200154839060ff161561067f57600080fd5b600160a060020a038416151561069457600080fd5b600061ffff8416116106a557600080fd5b6060604051908101604090815261ffff851682526001805460208085019190915282840191909152600160a060020a03871660009081526002909152208151815461ffff191661ffff91909116178155602082015181600101556040820151600291909101805460ff1916911515919091179055506001805480820161072b8382610a44565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0386161790557f46c4c28194fcdde3bbf9b40a01281645ef02ca05c1933ee698b9f3bf27e9e967848433604051600160a060020a03938416815261ffff90921660208301529091166040808301919091526060909101905180910390a15060019392505050565b600160a060020a033316600090815260046020526040812054819060ff1615156107e757600080fd5b600160a060020a03831660009081526002602081905260409091200154839060ff16151561081457600080fd5b600160a060020a038416151561082957600080fd5b60018054600019810190811061083b57fe5b6000918252602080832090910154600160a060020a03878116845260029092526040909220600190810154815492909316945084929091811061087a57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560018054906108c3906000198301610a44565b50600160a060020a038085166000818152600260208190526040808320600180820154968916855282852001959095559290915291909101805460ff191690557fabcd3f97e6197600d33884de3d60f45d5e14d18361c48b4ea4c73978732e2b96908590339051600160a060020a039283168152911660208201526040908101905180910390a15060019392505050565b600180548290811061096257fe5b600091825260209091200154600160a060020a0316905081565b600380548290811061096257fe5b600160a060020a031660009081526002602052604090205461ffff1690565b60005433600160a060020a039081169116146109c457600080fd5b600160a060020a03811615156109d957600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b815481835581811511610a6857600083815260209020610a68918101908301610a6d565b505050565b610a8b91905b80821115610a875760008155600101610a73565b5090565b905600a165627a7a72305820cdb9045472c644d384ec8309de14596cdc93d8d08455771e483b4a2ab31d780b0029",
	"sourceMap": "88:4837:0:-;;;1370:795;;;;;;;;501:5:13;:18;;-1:-1:-1;;;;;;501:18:13;509:10;-1:-1:-1;;;;;501:18:13;;;;1599:98:0;;;;;;;;;;1629:4;1599:98;;1665:14;:21;1599:98;;;;;;;;-1:-1:-1;;;;;1585:10:0;1567:29;1599:98;1567:29;;;:17;:29;;;;1599:98;1567:130;;;-1:-1:-1;;1567:130:0;;;;;;;;;;;;;;;;1707:14;:31;;:14;;-1:-1:-1;1707:31:0;;;;:14;:31;;:::i;:::-;-1:-1:-1;1707:31:0;;;;;;;;;;;-1:-1:-1;;;;;;1707:31:0;1727:10;-1:-1:-1;;;;;1707:31:0;;;;1820:174;;;;;;;;;;1866:1;1820:174;;1916:24;:31;;1820:174;;;;;;;;;;;;1773:42;-1:-1:-1;1749:68:0;:15;:68;;;1820:174;1749:245;;;-1:-1:-1;;1749:245:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1749:245:0;;;;;;;;;;-1:-1:-1;;2004:82:0;;;;;;-1:-1:-1;2004:82:0;;:::i;:::-;-1:-1:-1;2004:82:0;;;;;;;;;;;-1:-1:-1;;;;;;2004:82:0;2042:42;2004:82;;;88:4837;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
	"deployedSourceMap": "88:4837:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2581:593;;;;;;;;;;-1:-1:-1;;;;;2581:593:0;;;;;;;;;;;;;;;;;;;;;;2171:404;;;;;;;;;;-1:-1:-1;;;;;2171:404:0;;;;;4630:293;;;;;;;;;;-1:-1:-1;;;;;4630:293:0;;;;;;;;;238:20:13;;;;;;;;;;;;;;;-1:-1:-1;;;;;238:20:13;;;;;;;;;;;;;;310:52:0;;;;;;;;;;-1:-1:-1;;;;;310:52:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;488:50;;;;;;;;;;-1:-1:-1;;;;;488:50:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;3355:611;;;;;;;;;;-1:-1:-1;;;;;3355:611:0;;;;;;;;;3972:652;;;;;;;;;;-1:-1:-1;;;;;3972:652:0;;;;;263:41;;;;;;;;;;;;;;451:31;;;;;;;;;;;;;;3180:169;;;;;;;;;;-1:-1:-1;;;;;3180:169:0;;;;;;;;;;;;;;;;;;;;;;;832::13;;;;;;;;;;-1:-1:-1;;;;;832:169:13;;;;;;;2581:593:0;2685:12;653:5:13;;2685:12:0;;639:10:13;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;1071:25:0;;;;;;:17;:25;;;;;:34;2661:14;;1071:34;;1063:43;;;;;;;;-1:-1:-1;;;;;2717:28:0;;;;2709:37;;;;;;2782:14;2797:21;;-1:-1:-1;;2797:23:0;;;2782:39;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2846:33:0;;;;;:17;:33;;;;;;;2782:39;2846:50;;2831:14;:66;;2782:39;;;;;-1:-1:-1;2782:39:0;;2831:14;:66;;;;;;;;;;;;;;;:75;;-1:-1:-1;;2831:75:0;-1:-1:-1;;;;;2831:75:0;;;;;;;;;;2916:14;:23;;;;;-1:-1:-1;;2916:23:0;;;:::i;:::-;-1:-1:-1;;;;;;2994:33:0;;;;;;;:17;:33;;;;;;:50;;;;;2949:25;;;;;;;;:42;:95;;;;3054:33;;;:50;;-1:-1:-1;;3054:50:0;;;;3115:30;;3012:14;;3115:30;-1:-1:-1;;;;;3115:30:0;;;;;;;;;;;;;;-1:-1:-1;3163:4:0;;2581:593;-1:-1:-1;;;2581:593:0:o;2171:404::-;2265:12;653:5:13;;639:10;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;951:25:0;;;;;;:17;:25;;;;;:34;2246:9;;951:34;;950:35;942:44;;;;;;-1:-1:-1;;;;;2297:23:0;;;;2289:32;;;;;;2363:110;;;;;;;;;;2397:4;2363:110;;2437:14;:21;2363:110;;;;;;;;-1:-1:-1;;;;;2332:28:0;;2363:110;2332:28;;;:17;:28;;;;2363:110;2332:141;;;-1:-1:-1;;2332:141:0;;;;;;;;;;;;;;;;2483:14;:30;;:14;;-1:-1:-1;2483:30:0;;;;:14;:30;;:::i;:::-;-1:-1:-1;2483:30:0;;;;;;;;;;;-1:-1:-1;;2483:30:0;-1:-1:-1;;;;;2483:30:0;;;;;2524:22;2483:30;2524:22;;-1:-1:-1;;;;;2524:22:0;;;;;;;;;;;;;;-1:-1:-1;2564:4:0;;2171:404;-1:-1:-1;;2171:404:0:o;4630:293::-;-1:-1:-1;;;;;841:10:0;823:29;4722:12;823:29;;;:17;:29;;;;;:38;;;815:47;;;;;;;;-1:-1:-1;;;;;4754:20:0;;;;4746:29;;;;;;4813:1;4793:21;;;;4785:30;;;;;;-1:-1:-1;;;;;;4834:23:0;;;;;;:15;:23;;;;;:60;;;;;-1:-1:-1;;4834:60:0;;;;;;;4630:293;;;;:::o;238:20:13:-;;;-1:-1:-1;;;;;238:20:13;;:::o;310:52:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;488:50::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;3355:611::-;-1:-1:-1;;;;;841:10:0;823:29;3487:12;823:29;;;:17;:29;;;;;:38;;;815:47;;;;;;;;-1:-1:-1;;;;;1195:23:0;;;;;;:15;:23;;;;;;;;:32;;3471:6;;1195:32;;1194:33;1186:42;;;;;;-1:-1:-1;;;;;3524:20:0;;;;3516:29;;;;;;3583:1;3563:21;;;;3555:30;;;;;;3622:190;;;;;;;;;;;;;;;3734:24;:31;;3622:190;;;;;;;;;;;;;;;-1:-1:-1;;;;;3596:23:0;;-1:-1:-1;3596:23:0;;;:15;:23;;;;3622:190;3596:216;;;-1:-1:-1;;3596:216:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3596:216:0;;;;;;;;;;-1:-1:-1;;3822:37:0;;;;;;-1:-1:-1;3822:37:0;;:::i;:::-;-1:-1:-1;3822:37:0;;;;;;;;;;;-1:-1:-1;;3822:37:0;-1:-1:-1;;;;;3822:37:0;;;;;3878:59;3822:37;3907:17;3926:10;3878:59;;-1:-1:-1;;;;;3878:59:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3955:4:0;;3355:611;-1:-1:-1;;;3355:611:0:o;3972:652::-;-1:-1:-1;;;;;841:10:0;823:29;4078:12;823:29;;;:17;:29;;;;;:38;4078:12;;823:38;;815:47;;;;;;;;-1:-1:-1;;;;;1313:23:0;;;;;;:15;:23;;;;;;;;:32;;4062:6;;1313:32;;1305:41;;;;;;;;-1:-1:-1;;;;;4115:20:0;;;;4107:29;;;;;;4172:24;4197:31;;-1:-1:-1;;4197:33:0;;;4172:59;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4266:23:0;;;;;:15;:23;;;;;;;4172:59;4266:53;;;;4241:79;;4172:59;;;;;-1:-1:-1;4172:59:0;;;;4241:79;;;;;;;;;;;;;;;:88;;-1:-1:-1;;4241:88:0;-1:-1:-1;;;;;4241:88:0;;;;;;;;;;-1:-1:-1;4339:33:0;;;;;-1:-1:-1;;4339:33:0;;;:::i;:::-;-1:-1:-1;;;;;;4438:23:0;;;;;;;:15;:23;;;;;;;;:53;;;;;4382:23;;;;;;;;:53;:109;;;;4501:23;;;;:32;;;;:40;;-1:-1:-1;;4501:40:0;;;4552:43;;4454:6;;4584:10;;4552:43;-1:-1:-1;;;;;4552:43:0;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4613:4:0;;3972:652;-1:-1:-1;;;3972:652:0:o;263:41::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;263:41:0;;-1:-1:-1;263:41:0;:::o;451:31::-;;;;;;;;;;;3180:169;-1:-1:-1;;;;;3302:23:0;3259:19;3302:23;;;:15;:23;;;;;:40;;;;3180:169::o;832::13:-;653:5;;639:10;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;908:22:13;;;;900:31;;;;;;958:5;;-1:-1:-1;;;;;937:37:13;;;;958:5;937:37;;;;;;;;;;980:5;:16;;-1:-1:-1;;980:16:13;-1:-1:-1;;;;;980:16:13;;;;;;;;;;832:169::o;88:4837:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o",
	"source": "pragma solidity ^0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\ncontract HouseholdMeters is Ownable {\n    struct Household {\n        uint16 householdMembers;\n        uint256 householdMetersAddressesIndex;\n        bool isActive;\n    }\n\n    address[] public householdMetersAddresses;\n    mapping(address => Household) public householdMeters;\n\n    struct Admin {\n        bool isActive;\n        uint256 adminsArrayIndex;\n    }\n    address[] public administrators;\n    mapping(address => Admin) public whiteListedAdmins;\n\n    event LogAddAdmin(address _admin);\n    event LogRemoveAdmin(address _admin);\n    event LogAddHouseholdMeter(address _meter, uint16 _householdMembers, address _admin);\n    event LogRemoveHouseholdMeter(address _meter, address _admin);\n\n    modifier onlyAdmin() {\n        require(whiteListedAdmins[msg.sender].isActive);\n        _;\n    }\n\n    modifier onlyNotExistingAdmin(address _admin) {\n        require(!whiteListedAdmins[_admin].isActive);\n        _;\n    }\n\n    modifier onlyExistingAdmin(address _admin) {\n        require(whiteListedAdmins[_admin].isActive);\n        _;\n    }\n\n    modifier onlyNotExistingMeter(address _meter) {\n        require(!householdMeters[_meter].isActive);\n        _;\n    }\n\n    modifier onlyExistingMeter(address _meter) {\n        require(householdMeters[_meter].isActive);\n        _;\n    }\n\n    function HouseholdMeters() public {\n        \n        // This is only for demo purposes - DO NOT USE IT IN PRODUCTION\n        // ------------------------------------------------------------\n        whiteListedAdmins[msg.sender] = Admin({\n            isActive: true,\n            adminsArrayIndex: administrators.length\n        });\n        administrators.push(msg.sender);\n\n        householdMeters[address(0xf17f52151EbEF6C7334FAD080c5704D77216b732)] = Household({\n                householdMembers: 4,\n                householdMetersAddressesIndex: householdMetersAddresses.length,\n                isActive: true\n            });\n        householdMetersAddresses.push(address(0xf17f52151EbEF6C7334FAD080c5704D77216b732));\n        // ------------------------------------------------------------\n    }\n\n    function addAdmin(address _newAdmin) public onlyOwner onlyNotExistingAdmin(_newAdmin) returns(bool success) {\n        require(_newAdmin != address(0));\n\n        whiteListedAdmins[_newAdmin] = Admin({\n                isActive: true,\n                adminsArrayIndex: administrators.length\n            });\n        administrators.push(_newAdmin);\n\n        LogAddAdmin(_newAdmin);\n\n        return true;\n    }\n\n    function removeAdmin(address _adminToRemove) public onlyOwner onlyExistingAdmin(_adminToRemove) returns(bool success) {\n        require(_adminToRemove != address(0));\n        \n        address lastId = administrators[administrators.length-1];\n        administrators[whiteListedAdmins[_adminToRemove].adminsArrayIndex] = lastId;\n        administrators.length--;\n        whiteListedAdmins[lastId].adminsArrayIndex = whiteListedAdmins[_adminToRemove].adminsArrayIndex;\n        whiteListedAdmins[_adminToRemove].isActive = false;\n\n        LogRemoveAdmin(_adminToRemove);\n\n        return true;\n    }\n\n    function getHouseholdMembersCount(address _meter) \n        public view returns(uint16 membersCount) \n    {\n        return householdMeters[_meter].householdMembers;\n    }\n\n    function addHouseholdMeter(address _meter, uint16 _householdMembers) \n        public onlyAdmin onlyNotExistingMeter(_meter) returns(bool success) \n    {\n        require(_meter != address(0));\n        require(_householdMembers > 0);\n\n        householdMeters[_meter] = Household({\n                householdMembers: _householdMembers,\n                householdMetersAddressesIndex: householdMetersAddresses.length,\n                isActive: true\n            });\n        householdMetersAddresses.push(_meter);\n        \n        LogAddHouseholdMeter(_meter, _householdMembers, msg.sender);\n\n        return true;\n    }\n\n    function removeHouseholdMeter(address _meter) \n        public onlyAdmin onlyExistingMeter(_meter) returns(bool success) \n    {\n        require(_meter != address(0));\n        \n        address lastId = householdMetersAddresses[householdMetersAddresses.length-1];\n        householdMetersAddresses[householdMeters[_meter].householdMetersAddressesIndex] = lastId;\n        householdMetersAddresses.length--;\n        householdMeters[lastId].householdMetersAddressesIndex = householdMeters[_meter].householdMetersAddressesIndex;\n        householdMeters[_meter].isActive = false;\n\n        LogRemoveHouseholdMeter(_meter, msg.sender);\n\n        return true;\n    }\n\n    function updateHousehold(address _meter, uint16 _householdMembers) public onlyAdmin returns(bool success) {\n        require(_meter != address(0));\n        require(_householdMembers > 0);\n        \n        householdMeters[_meter].householdMembers = _householdMembers;\n\n        return true;\n    }\n}",
	"sourcePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/HouseholdMeters.sol",
	"ast": {
		"attributes": {
			"absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/HouseholdMeters.sol",
			"exportedSymbols": {
				"HouseholdMeters": [
					444
				]
			}
		},
		"children": [
			{
				"attributes": {
					"literals": [
						"solidity",
						"^",
						"0.4",
						".18"
					]
				},
				"id": 1,
				"name": "PragmaDirective",
				"src": "0:24:0"
			},
			{
				"attributes": {
					"SourceUnit": 1594,
					"absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
					"file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
					"scope": 445,
					"symbolAliases": [
						null
					],
					"unitAlias": ""
				},
				"id": 2,
				"name": "ImportDirective",
				"src": "26:59:0"
			},
			{
				"attributes": {
					"contractDependencies": [
						1593
					],
					"contractKind": "contract",
					"documentation": null,
					"fullyImplemented": true,
					"linearizedBaseContracts": [
						444,
						1593
					],
					"name": "HouseholdMeters",
					"scope": 445
				},
				"children": [
					{
						"attributes": {
							"arguments": [
								null
							]
						},
						"children": [
							{
								"attributes": {
									"contractScope": null,
									"name": "Ownable",
									"referencedDeclaration": 1593,
									"type": "contract Ownable"
								},
								"id": 3,
								"name": "UserDefinedTypeName",
								"src": "116:7:0"
							}
						],
						"id": 4,
						"name": "InheritanceSpecifier",
						"src": "116:7:0"
					},
					{
						"attributes": {
							"canonicalName": "HouseholdMeters.Household",
							"name": "Household",
							"scope": 444,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"constant": false,
									"name": "householdMembers",
									"scope": 11,
									"stateVariable": false,
									"storageLocation": "default",
									"type": "uint16",
									"value": null,
									"visibility": "internal"
								},
								"children": [
									{
										"attributes": {
											"name": "uint16",
											"type": "uint16"
										},
										"id": 5,
										"name": "ElementaryTypeName",
										"src": "157:6:0"
									}
								],
								"id": 6,
								"name": "VariableDeclaration",
								"src": "157:23:0"
							},
							{
								"attributes": {
									"constant": false,
									"name": "householdMetersAddressesIndex",
									"scope": 11,
									"stateVariable": false,
									"storageLocation": "default",
									"type": "uint256",
									"value": null,
									"visibility": "internal"
								},
								"children": [
									{
										"attributes": {
											"name": "uint256",
											"type": "uint256"
										},
										"id": 7,
										"name": "ElementaryTypeName",
										"src": "190:7:0"
									}
								],
								"id": 8,
								"name": "VariableDeclaration",
								"src": "190:37:0"
							},
							{
								"attributes": {
									"constant": false,
									"name": "isActive",
									"scope": 11,
									"stateVariable": false,
									"storageLocation": "default",
									"type": "bool",
									"value": null,
									"visibility": "internal"
								},
								"children": [
									{
										"attributes": {
											"name": "bool",
											"type": "bool"
										},
										"id": 9,
										"name": "ElementaryTypeName",
										"src": "237:4:0"
									}
								],
								"id": 10,
								"name": "VariableDeclaration",
								"src": "237:13:0"
							}
						],
						"id": 11,
						"name": "StructDefinition",
						"src": "130:127:0"
					},
					{
						"attributes": {
							"constant": false,
							"name": "householdMetersAddresses",
							"scope": 444,
							"stateVariable": true,
							"storageLocation": "default",
							"type": "address[] storage ref",
							"value": null,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"length": null,
									"type": "address[] storage pointer"
								},
								"children": [
									{
										"attributes": {
											"name": "address",
											"type": "address"
										},
										"id": 12,
										"name": "ElementaryTypeName",
										"src": "263:7:0"
									}
								],
								"id": 13,
								"name": "ArrayTypeName",
								"src": "263:9:0"
							}
						],
						"id": 14,
						"name": "VariableDeclaration",
						"src": "263:41:0"
					},
					{
						"attributes": {
							"constant": false,
							"name": "householdMeters",
							"scope": 444,
							"stateVariable": true,
							"storageLocation": "default",
							"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
							"value": null,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"type": "mapping(address => struct HouseholdMeters.Household storage ref)"
								},
								"children": [
									{
										"attributes": {
											"name": "address",
											"type": "address"
										},
										"id": 15,
										"name": "ElementaryTypeName",
										"src": "318:7:0"
									},
									{
										"attributes": {
											"contractScope": null,
											"name": "Household",
											"referencedDeclaration": 11,
											"type": "struct HouseholdMeters.Household storage pointer"
										},
										"id": 16,
										"name": "UserDefinedTypeName",
										"src": "329:9:0"
									}
								],
								"id": 17,
								"name": "Mapping",
								"src": "310:29:0"
							}
						],
						"id": 18,
						"name": "VariableDeclaration",
						"src": "310:52:0"
					},
					{
						"attributes": {
							"canonicalName": "HouseholdMeters.Admin",
							"name": "Admin",
							"scope": 444,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"constant": false,
									"name": "isActive",
									"scope": 23,
									"stateVariable": false,
									"storageLocation": "default",
									"type": "bool",
									"value": null,
									"visibility": "internal"
								},
								"children": [
									{
										"attributes": {
											"name": "bool",
											"type": "bool"
										},
										"id": 19,
										"name": "ElementaryTypeName",
										"src": "392:4:0"
									}
								],
								"id": 20,
								"name": "VariableDeclaration",
								"src": "392:13:0"
							},
							{
								"attributes": {
									"constant": false,
									"name": "adminsArrayIndex",
									"scope": 23,
									"stateVariable": false,
									"storageLocation": "default",
									"type": "uint256",
									"value": null,
									"visibility": "internal"
								},
								"children": [
									{
										"attributes": {
											"name": "uint256",
											"type": "uint256"
										},
										"id": 21,
										"name": "ElementaryTypeName",
										"src": "415:7:0"
									}
								],
								"id": 22,
								"name": "VariableDeclaration",
								"src": "415:24:0"
							}
						],
						"id": 23,
						"name": "StructDefinition",
						"src": "369:77:0"
					},
					{
						"attributes": {
							"constant": false,
							"name": "administrators",
							"scope": 444,
							"stateVariable": true,
							"storageLocation": "default",
							"type": "address[] storage ref",
							"value": null,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"length": null,
									"type": "address[] storage pointer"
								},
								"children": [
									{
										"attributes": {
											"name": "address",
											"type": "address"
										},
										"id": 24,
										"name": "ElementaryTypeName",
										"src": "451:7:0"
									}
								],
								"id": 25,
								"name": "ArrayTypeName",
								"src": "451:9:0"
							}
						],
						"id": 26,
						"name": "VariableDeclaration",
						"src": "451:31:0"
					},
					{
						"attributes": {
							"constant": false,
							"name": "whiteListedAdmins",
							"scope": 444,
							"stateVariable": true,
							"storageLocation": "default",
							"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
							"value": null,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"type": "mapping(address => struct HouseholdMeters.Admin storage ref)"
								},
								"children": [
									{
										"attributes": {
											"name": "address",
											"type": "address"
										},
										"id": 27,
										"name": "ElementaryTypeName",
										"src": "496:7:0"
									},
									{
										"attributes": {
											"contractScope": null,
											"name": "Admin",
											"referencedDeclaration": 23,
											"type": "struct HouseholdMeters.Admin storage pointer"
										},
										"id": 28,
										"name": "UserDefinedTypeName",
										"src": "507:5:0"
									}
								],
								"id": 29,
								"name": "Mapping",
								"src": "488:25:0"
							}
						],
						"id": 30,
						"name": "VariableDeclaration",
						"src": "488:50:0"
					},
					{
						"attributes": {
							"anonymous": false,
							"name": "LogAddAdmin"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_admin",
											"scope": 34,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 31,
												"name": "ElementaryTypeName",
												"src": "563:7:0"
											}
										],
										"id": 32,
										"name": "VariableDeclaration",
										"src": "563:14:0"
									}
								],
								"id": 33,
								"name": "ParameterList",
								"src": "562:16:0"
							}
						],
						"id": 34,
						"name": "EventDefinition",
						"src": "545:34:0"
					},
					{
						"attributes": {
							"anonymous": false,
							"name": "LogRemoveAdmin"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_admin",
											"scope": 38,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 35,
												"name": "ElementaryTypeName",
												"src": "605:7:0"
											}
										],
										"id": 36,
										"name": "VariableDeclaration",
										"src": "605:14:0"
									}
								],
								"id": 37,
								"name": "ParameterList",
								"src": "604:16:0"
							}
						],
						"id": 38,
						"name": "EventDefinition",
						"src": "584:37:0"
					},
					{
						"attributes": {
							"anonymous": false,
							"name": "LogAddHouseholdMeter"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_meter",
											"scope": 46,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 39,
												"name": "ElementaryTypeName",
												"src": "653:7:0"
											}
										],
										"id": 40,
										"name": "VariableDeclaration",
										"src": "653:14:0"
									},
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_householdMembers",
											"scope": 46,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "uint16",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "uint16",
													"type": "uint16"
												},
												"id": 41,
												"name": "ElementaryTypeName",
												"src": "669:6:0"
											}
										],
										"id": 42,
										"name": "VariableDeclaration",
										"src": "669:24:0"
									},
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_admin",
											"scope": 46,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 43,
												"name": "ElementaryTypeName",
												"src": "695:7:0"
											}
										],
										"id": 44,
										"name": "VariableDeclaration",
										"src": "695:14:0"
									}
								],
								"id": 45,
								"name": "ParameterList",
								"src": "652:58:0"
							}
						],
						"id": 46,
						"name": "EventDefinition",
						"src": "626:85:0"
					},
					{
						"attributes": {
							"anonymous": false,
							"name": "LogRemoveHouseholdMeter"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_meter",
											"scope": 52,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 47,
												"name": "ElementaryTypeName",
												"src": "746:7:0"
											}
										],
										"id": 48,
										"name": "VariableDeclaration",
										"src": "746:14:0"
									},
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_admin",
											"scope": 52,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 49,
												"name": "ElementaryTypeName",
												"src": "762:7:0"
											}
										],
										"id": 50,
										"name": "VariableDeclaration",
										"src": "762:14:0"
									}
								],
								"id": 51,
								"name": "ParameterList",
								"src": "745:32:0"
							}
						],
						"id": 52,
						"name": "EventDefinition",
						"src": "716:62:0"
					},
					{
						"attributes": {
							"name": "onlyAdmin",
							"visibility": "internal"
						},
						"children": [
							{
								"attributes": {
									"parameters": [
										null
									]
								},
								"children": [],
								"id": 53,
								"name": "ParameterList",
								"src": "802:2:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 54,
														"name": "Identifier",
														"src": "815:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "isActive",
															"referencedDeclaration": 20,
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Admin storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 30,
																			"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																			"value": "whiteListedAdmins"
																		},
																		"id": 55,
																		"name": "Identifier",
																		"src": "823:17:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": false,
																			"lValueRequested": false,
																			"member_name": "sender",
																			"referencedDeclaration": null,
																			"type": "address"
																		},
																		"children": [
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 1605,
																					"type": "msg",
																					"value": "msg"
																				},
																				"id": 56,
																				"name": "Identifier",
																				"src": "841:3:0"
																			}
																		],
																		"id": 57,
																		"name": "MemberAccess",
																		"src": "841:10:0"
																	}
																],
																"id": 58,
																"name": "IndexAccess",
																"src": "823:29:0"
															}
														],
														"id": 59,
														"name": "MemberAccess",
														"src": "823:38:0"
													}
												],
												"id": 60,
												"name": "FunctionCall",
												"src": "815:47:0"
											}
										],
										"id": 61,
										"name": "ExpressionStatement",
										"src": "815:47:0"
									},
									{
										"id": 62,
										"name": "PlaceholderStatement",
										"src": "872:1:0"
									}
								],
								"id": 63,
								"name": "Block",
								"src": "805:75:0"
							}
						],
						"id": 64,
						"name": "ModifierDefinition",
						"src": "784:96:0"
					},
					{
						"attributes": {
							"name": "onlyNotExistingAdmin",
							"visibility": "internal"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_admin",
											"scope": 78,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 65,
												"name": "ElementaryTypeName",
												"src": "916:7:0"
											}
										],
										"id": 66,
										"name": "VariableDeclaration",
										"src": "916:14:0"
									}
								],
								"id": 67,
								"name": "ParameterList",
								"src": "915:16:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 68,
														"name": "Identifier",
														"src": "942:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "!",
															"prefix": true,
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "isActive",
																	"referencedDeclaration": 20,
																	"type": "bool"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"type": "struct HouseholdMeters.Admin storage ref"
																		},
																		"children": [
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 30,
																					"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																					"value": "whiteListedAdmins"
																				},
																				"id": 69,
																				"name": "Identifier",
																				"src": "951:17:0"
																			},
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 66,
																					"type": "address",
																					"value": "_admin"
																				},
																				"id": 70,
																				"name": "Identifier",
																				"src": "969:6:0"
																			}
																		],
																		"id": 71,
																		"name": "IndexAccess",
																		"src": "951:25:0"
																	}
																],
																"id": 72,
																"name": "MemberAccess",
																"src": "951:34:0"
															}
														],
														"id": 73,
														"name": "UnaryOperation",
														"src": "950:35:0"
													}
												],
												"id": 74,
												"name": "FunctionCall",
												"src": "942:44:0"
											}
										],
										"id": 75,
										"name": "ExpressionStatement",
										"src": "942:44:0"
									},
									{
										"id": 76,
										"name": "PlaceholderStatement",
										"src": "996:1:0"
									}
								],
								"id": 77,
								"name": "Block",
								"src": "932:72:0"
							}
						],
						"id": 78,
						"name": "ModifierDefinition",
						"src": "886:118:0"
					},
					{
						"attributes": {
							"name": "onlyExistingAdmin",
							"visibility": "internal"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_admin",
											"scope": 91,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 79,
												"name": "ElementaryTypeName",
												"src": "1037:7:0"
											}
										],
										"id": 80,
										"name": "VariableDeclaration",
										"src": "1037:14:0"
									}
								],
								"id": 81,
								"name": "ParameterList",
								"src": "1036:16:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 82,
														"name": "Identifier",
														"src": "1063:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "isActive",
															"referencedDeclaration": 20,
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Admin storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 30,
																			"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																			"value": "whiteListedAdmins"
																		},
																		"id": 83,
																		"name": "Identifier",
																		"src": "1071:17:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 80,
																			"type": "address",
																			"value": "_admin"
																		},
																		"id": 84,
																		"name": "Identifier",
																		"src": "1089:6:0"
																	}
																],
																"id": 85,
																"name": "IndexAccess",
																"src": "1071:25:0"
															}
														],
														"id": 86,
														"name": "MemberAccess",
														"src": "1071:34:0"
													}
												],
												"id": 87,
												"name": "FunctionCall",
												"src": "1063:43:0"
											}
										],
										"id": 88,
										"name": "ExpressionStatement",
										"src": "1063:43:0"
									},
									{
										"id": 89,
										"name": "PlaceholderStatement",
										"src": "1116:1:0"
									}
								],
								"id": 90,
								"name": "Block",
								"src": "1053:71:0"
							}
						],
						"id": 91,
						"name": "ModifierDefinition",
						"src": "1010:114:0"
					},
					{
						"attributes": {
							"name": "onlyNotExistingMeter",
							"visibility": "internal"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_meter",
											"scope": 105,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 92,
												"name": "ElementaryTypeName",
												"src": "1160:7:0"
											}
										],
										"id": 93,
										"name": "VariableDeclaration",
										"src": "1160:14:0"
									}
								],
								"id": 94,
								"name": "ParameterList",
								"src": "1159:16:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 95,
														"name": "Identifier",
														"src": "1186:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "!",
															"prefix": true,
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "isActive",
																	"referencedDeclaration": 10,
																	"type": "bool"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"type": "struct HouseholdMeters.Household storage ref"
																		},
																		"children": [
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 18,
																					"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																					"value": "householdMeters"
																				},
																				"id": 96,
																				"name": "Identifier",
																				"src": "1195:15:0"
																			},
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 93,
																					"type": "address",
																					"value": "_meter"
																				},
																				"id": 97,
																				"name": "Identifier",
																				"src": "1211:6:0"
																			}
																		],
																		"id": 98,
																		"name": "IndexAccess",
																		"src": "1195:23:0"
																	}
																],
																"id": 99,
																"name": "MemberAccess",
																"src": "1195:32:0"
															}
														],
														"id": 100,
														"name": "UnaryOperation",
														"src": "1194:33:0"
													}
												],
												"id": 101,
												"name": "FunctionCall",
												"src": "1186:42:0"
											}
										],
										"id": 102,
										"name": "ExpressionStatement",
										"src": "1186:42:0"
									},
									{
										"id": 103,
										"name": "PlaceholderStatement",
										"src": "1238:1:0"
									}
								],
								"id": 104,
								"name": "Block",
								"src": "1176:70:0"
							}
						],
						"id": 105,
						"name": "ModifierDefinition",
						"src": "1130:116:0"
					},
					{
						"attributes": {
							"name": "onlyExistingMeter",
							"visibility": "internal"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_meter",
											"scope": 118,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 106,
												"name": "ElementaryTypeName",
												"src": "1279:7:0"
											}
										],
										"id": 107,
										"name": "VariableDeclaration",
										"src": "1279:14:0"
									}
								],
								"id": 108,
								"name": "ParameterList",
								"src": "1278:16:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 109,
														"name": "Identifier",
														"src": "1305:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "isActive",
															"referencedDeclaration": 10,
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Household storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 18,
																			"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																			"value": "householdMeters"
																		},
																		"id": 110,
																		"name": "Identifier",
																		"src": "1313:15:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 107,
																			"type": "address",
																			"value": "_meter"
																		},
																		"id": 111,
																		"name": "Identifier",
																		"src": "1329:6:0"
																	}
																],
																"id": 112,
																"name": "IndexAccess",
																"src": "1313:23:0"
															}
														],
														"id": 113,
														"name": "MemberAccess",
														"src": "1313:32:0"
													}
												],
												"id": 114,
												"name": "FunctionCall",
												"src": "1305:41:0"
											}
										],
										"id": 115,
										"name": "ExpressionStatement",
										"src": "1305:41:0"
									},
									{
										"id": 116,
										"name": "PlaceholderStatement",
										"src": "1356:1:0"
									}
								],
								"id": 117,
								"name": "Block",
								"src": "1295:69:0"
							}
						],
						"id": 118,
						"name": "ModifierDefinition",
						"src": "1252:112:0"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": true,
							"modifiers": [
								null
							],
							"name": "HouseholdMeters",
							"payable": false,
							"scope": 444,
							"stateMutability": "nonpayable",
							"superFunction": null,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"parameters": [
										null
									]
								},
								"children": [],
								"id": 119,
								"name": "ParameterList",
								"src": "1394:2:0"
							},
							{
								"attributes": {
									"parameters": [
										null
									]
								},
								"children": [],
								"id": 120,
								"name": "ParameterList",
								"src": "1404:0:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "struct HouseholdMeters.Admin storage ref"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"type": "struct HouseholdMeters.Admin storage ref"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 30,
																	"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																	"value": "whiteListedAdmins"
																},
																"id": 121,
																"name": "Identifier",
																"src": "1567:17:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "sender",
																	"referencedDeclaration": null,
																	"type": "address"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 1605,
																			"type": "msg",
																			"value": "msg"
																		},
																		"id": 122,
																		"name": "Identifier",
																		"src": "1585:3:0"
																	}
																],
																"id": 123,
																"name": "MemberAccess",
																"src": "1585:10:0"
															}
														],
														"id": 124,
														"name": "IndexAccess",
														"src": "1567:29:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"isStructConstructorCall": true,
															"lValueRequested": false,
															"names": [
																"isActive",
																"adminsArrayIndex"
															],
															"type": "struct HouseholdMeters.Admin memory",
															"type_conversion": false
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 23,
																	"type": "type(struct HouseholdMeters.Admin storage pointer)",
																	"value": "Admin"
																},
																"id": 125,
																"name": "Identifier",
																"src": "1599:5:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "74727565",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "bool",
																	"type": "bool",
																	"value": "true"
																},
																"id": 126,
																"name": "Literal",
																"src": "1629:4:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "length",
																	"referencedDeclaration": null,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 26,
																			"type": "address[] storage ref",
																			"value": "administrators"
																		},
																		"id": 127,
																		"name": "Identifier",
																		"src": "1665:14:0"
																	}
																],
																"id": 128,
																"name": "MemberAccess",
																"src": "1665:21:0"
															}
														],
														"id": 129,
														"name": "FunctionCall",
														"src": "1599:98:0"
													}
												],
												"id": 130,
												"name": "Assignment",
												"src": "1567:130:0"
											}
										],
										"id": 131,
										"name": "ExpressionStatement",
										"src": "1567:130:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "uint256",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "push",
															"referencedDeclaration": null,
															"type": "function (address) returns (uint256)"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 26,
																	"type": "address[] storage ref",
																	"value": "administrators"
																},
																"id": 132,
																"name": "Identifier",
																"src": "1707:14:0"
															}
														],
														"id": 134,
														"name": "MemberAccess",
														"src": "1707:19:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "sender",
															"referencedDeclaration": null,
															"type": "address"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 1605,
																	"type": "msg",
																	"value": "msg"
																},
																"id": 135,
																"name": "Identifier",
																"src": "1727:3:0"
															}
														],
														"id": 136,
														"name": "MemberAccess",
														"src": "1727:10:0"
													}
												],
												"id": 137,
												"name": "FunctionCall",
												"src": "1707:31:0"
											}
										],
										"id": 138,
										"name": "ExpressionStatement",
										"src": "1707:31:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "struct HouseholdMeters.Household storage ref"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"type": "struct HouseholdMeters.Household storage ref"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 18,
																	"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																	"value": "householdMeters"
																},
																"id": 139,
																"name": "Identifier",
																"src": "1749:15:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"isStructConstructorCall": false,
																	"lValueRequested": false,
																	"names": [
																		null
																	],
																	"type": "address",
																	"type_conversion": true
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": [
																				{
																					"typeIdentifier": "t_address",
																					"typeString": "address"
																				}
																			],
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"type": "type(address)",
																			"value": "address"
																		},
																		"id": 140,
																		"name": "ElementaryTypeNameExpression",
																		"src": "1765:7:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"hexvalue": "307866313766353231353145624546364337333334464144303830633537303444373732313662373332",
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"subdenomination": null,
																			"token": "number",
																			"type": "address",
																			"value": "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
																		},
																		"id": 141,
																		"name": "Literal",
																		"src": "1773:42:0"
																	}
																],
																"id": 142,
																"name": "FunctionCall",
																"src": "1765:51:0"
															}
														],
														"id": 143,
														"name": "IndexAccess",
														"src": "1749:68:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"isStructConstructorCall": true,
															"lValueRequested": false,
															"names": [
																"householdMembers",
																"householdMetersAddressesIndex",
																"isActive"
															],
															"type": "struct HouseholdMeters.Household memory",
															"type_conversion": false
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 11,
																	"type": "type(struct HouseholdMeters.Household storage pointer)",
																	"value": "Household"
																},
																"id": 144,
																"name": "Identifier",
																"src": "1820:9:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "34",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "number",
																	"type": "int_const 4",
																	"value": "4"
																},
																"id": 145,
																"name": "Literal",
																"src": "1866:1:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "length",
																	"referencedDeclaration": null,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 14,
																			"type": "address[] storage ref",
																			"value": "householdMetersAddresses"
																		},
																		"id": 146,
																		"name": "Identifier",
																		"src": "1916:24:0"
																	}
																],
																"id": 147,
																"name": "MemberAccess",
																"src": "1916:31:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "74727565",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "bool",
																	"type": "bool",
																	"value": "true"
																},
																"id": 148,
																"name": "Literal",
																"src": "1975:4:0"
															}
														],
														"id": 149,
														"name": "FunctionCall",
														"src": "1820:174:0"
													}
												],
												"id": 150,
												"name": "Assignment",
												"src": "1749:245:0"
											}
										],
										"id": 151,
										"name": "ExpressionStatement",
										"src": "1749:245:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "uint256",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "push",
															"referencedDeclaration": null,
															"type": "function (address) returns (uint256)"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 14,
																	"type": "address[] storage ref",
																	"value": "householdMetersAddresses"
																},
																"id": 152,
																"name": "Identifier",
																"src": "2004:24:0"
															}
														],
														"id": 154,
														"name": "MemberAccess",
														"src": "2004:29:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": true,
															"isStructConstructorCall": false,
															"lValueRequested": false,
															"names": [
																null
															],
															"type": "address",
															"type_conversion": true
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": [
																		{
																			"typeIdentifier": "t_address",
																			"typeString": "address"
																		}
																	],
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"type": "type(address)",
																	"value": "address"
																},
																"id": 155,
																"name": "ElementaryTypeNameExpression",
																"src": "2034:7:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "307866313766353231353145624546364337333334464144303830633537303444373732313662373332",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "number",
																	"type": "address",
																	"value": "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
																},
																"id": 156,
																"name": "Literal",
																"src": "2042:42:0"
															}
														],
														"id": 157,
														"name": "FunctionCall",
														"src": "2034:51:0"
													}
												],
												"id": 158,
												"name": "FunctionCall",
												"src": "2004:82:0"
											}
										],
										"id": 159,
										"name": "ExpressionStatement",
										"src": "2004:82:0"
									}
								],
								"id": 160,
								"name": "Block",
								"src": "1404:761:0"
							}
						],
						"id": 161,
						"name": "FunctionDefinition",
						"src": "1370:795:0"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": false,
							"name": "addAdmin",
							"payable": false,
							"scope": 444,
							"stateMutability": "nonpayable",
							"superFunction": null,
							"visibility": "public"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_newAdmin",
											"scope": 204,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 162,
												"name": "ElementaryTypeName",
												"src": "2189:7:0"
											}
										],
										"id": 163,
										"name": "VariableDeclaration",
										"src": "2189:17:0"
									}
								],
								"id": 164,
								"name": "ParameterList",
								"src": "2188:19:0"
							},
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "success",
											"scope": 204,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "bool",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "bool",
													"type": "bool"
												},
												"id": 170,
												"name": "ElementaryTypeName",
												"src": "2265:4:0"
											}
										],
										"id": 171,
										"name": "VariableDeclaration",
										"src": "2265:12:0"
									}
								],
								"id": 172,
								"name": "ParameterList",
								"src": "2264:14:0"
							},
							{
								"attributes": {
									"arguments": [
										null
									]
								},
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 1567,
											"type": "modifier ()",
											"value": "onlyOwner"
										},
										"id": 165,
										"name": "Identifier",
										"src": "2215:9:0"
									}
								],
								"id": 166,
								"name": "ModifierInvocation",
								"src": "2215:9:0"
							},
							{
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 78,
											"type": "modifier (address)",
											"value": "onlyNotExistingAdmin"
										},
										"id": 167,
										"name": "Identifier",
										"src": "2225:20:0"
									},
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 163,
											"type": "address",
											"value": "_newAdmin"
										},
										"id": 168,
										"name": "Identifier",
										"src": "2246:9:0"
									}
								],
								"id": 169,
								"name": "ModifierInvocation",
								"src": "2225:31:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 173,
														"name": "Identifier",
														"src": "2289:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_address",
																"typeString": "address"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "!=",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 163,
																	"type": "address",
																	"value": "_newAdmin"
																},
																"id": 174,
																"name": "Identifier",
																"src": "2297:9:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"isStructConstructorCall": false,
																	"lValueRequested": false,
																	"names": [
																		null
																	],
																	"type": "address",
																	"type_conversion": true
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": [
																				{
																					"typeIdentifier": "t_rational_0_by_1",
																					"typeString": "int_const 0"
																				}
																			],
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"type": "type(address)",
																			"value": "address"
																		},
																		"id": 175,
																		"name": "ElementaryTypeNameExpression",
																		"src": "2310:7:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"hexvalue": "30",
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"subdenomination": null,
																			"token": "number",
																			"type": "int_const 0",
																			"value": "0"
																		},
																		"id": 176,
																		"name": "Literal",
																		"src": "2318:1:0"
																	}
																],
																"id": 177,
																"name": "FunctionCall",
																"src": "2310:10:0"
															}
														],
														"id": 178,
														"name": "BinaryOperation",
														"src": "2297:23:0"
													}
												],
												"id": 179,
												"name": "FunctionCall",
												"src": "2289:32:0"
											}
										],
										"id": 180,
										"name": "ExpressionStatement",
										"src": "2289:32:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "struct HouseholdMeters.Admin storage ref"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"type": "struct HouseholdMeters.Admin storage ref"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 30,
																	"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																	"value": "whiteListedAdmins"
																},
																"id": 181,
																"name": "Identifier",
																"src": "2332:17:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 163,
																	"type": "address",
																	"value": "_newAdmin"
																},
																"id": 182,
																"name": "Identifier",
																"src": "2350:9:0"
															}
														],
														"id": 183,
														"name": "IndexAccess",
														"src": "2332:28:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"isStructConstructorCall": true,
															"lValueRequested": false,
															"names": [
																"isActive",
																"adminsArrayIndex"
															],
															"type": "struct HouseholdMeters.Admin memory",
															"type_conversion": false
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 23,
																	"type": "type(struct HouseholdMeters.Admin storage pointer)",
																	"value": "Admin"
																},
																"id": 184,
																"name": "Identifier",
																"src": "2363:5:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "74727565",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "bool",
																	"type": "bool",
																	"value": "true"
																},
																"id": 185,
																"name": "Literal",
																"src": "2397:4:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "length",
																	"referencedDeclaration": null,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 26,
																			"type": "address[] storage ref",
																			"value": "administrators"
																		},
																		"id": 186,
																		"name": "Identifier",
																		"src": "2437:14:0"
																	}
																],
																"id": 187,
																"name": "MemberAccess",
																"src": "2437:21:0"
															}
														],
														"id": 188,
														"name": "FunctionCall",
														"src": "2363:110:0"
													}
												],
												"id": 189,
												"name": "Assignment",
												"src": "2332:141:0"
											}
										],
										"id": 190,
										"name": "ExpressionStatement",
										"src": "2332:141:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "uint256",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "push",
															"referencedDeclaration": null,
															"type": "function (address) returns (uint256)"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 26,
																	"type": "address[] storage ref",
																	"value": "administrators"
																},
																"id": 191,
																"name": "Identifier",
																"src": "2483:14:0"
															}
														],
														"id": 193,
														"name": "MemberAccess",
														"src": "2483:19:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 163,
															"type": "address",
															"value": "_newAdmin"
														},
														"id": 194,
														"name": "Identifier",
														"src": "2503:9:0"
													}
												],
												"id": 195,
												"name": "FunctionCall",
												"src": "2483:30:0"
											}
										],
										"id": 196,
										"name": "ExpressionStatement",
										"src": "2483:30:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 34,
															"type": "function (address)",
															"value": "LogAddAdmin"
														},
														"id": 197,
														"name": "Identifier",
														"src": "2524:11:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 163,
															"type": "address",
															"value": "_newAdmin"
														},
														"id": 198,
														"name": "Identifier",
														"src": "2536:9:0"
													}
												],
												"id": 199,
												"name": "FunctionCall",
												"src": "2524:22:0"
											}
										],
										"id": 200,
										"name": "ExpressionStatement",
										"src": "2524:22:0"
									},
									{
										"attributes": {
											"functionReturnParameters": 172
										},
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"hexvalue": "74727565",
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"lValueRequested": false,
													"subdenomination": null,
													"token": "bool",
													"type": "bool",
													"value": "true"
												},
												"id": 201,
												"name": "Literal",
												"src": "2564:4:0"
											}
										],
										"id": 202,
										"name": "Return",
										"src": "2557:11:0"
									}
								],
								"id": 203,
								"name": "Block",
								"src": "2279:296:0"
							}
						],
						"id": 204,
						"name": "FunctionDefinition",
						"src": "2171:404:0"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": false,
							"name": "removeAdmin",
							"payable": false,
							"scope": 444,
							"stateMutability": "nonpayable",
							"superFunction": null,
							"visibility": "public"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_adminToRemove",
											"scope": 271,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 205,
												"name": "ElementaryTypeName",
												"src": "2602:7:0"
											}
										],
										"id": 206,
										"name": "VariableDeclaration",
										"src": "2602:22:0"
									}
								],
								"id": 207,
								"name": "ParameterList",
								"src": "2601:24:0"
							},
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "success",
											"scope": 271,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "bool",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "bool",
													"type": "bool"
												},
												"id": 213,
												"name": "ElementaryTypeName",
												"src": "2685:4:0"
											}
										],
										"id": 214,
										"name": "VariableDeclaration",
										"src": "2685:12:0"
									}
								],
								"id": 215,
								"name": "ParameterList",
								"src": "2684:14:0"
							},
							{
								"attributes": {
									"arguments": [
										null
									]
								},
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 1567,
											"type": "modifier ()",
											"value": "onlyOwner"
										},
										"id": 208,
										"name": "Identifier",
										"src": "2633:9:0"
									}
								],
								"id": 209,
								"name": "ModifierInvocation",
								"src": "2633:9:0"
							},
							{
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 91,
											"type": "modifier (address)",
											"value": "onlyExistingAdmin"
										},
										"id": 210,
										"name": "Identifier",
										"src": "2643:17:0"
									},
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 206,
											"type": "address",
											"value": "_adminToRemove"
										},
										"id": 211,
										"name": "Identifier",
										"src": "2661:14:0"
									}
								],
								"id": 212,
								"name": "ModifierInvocation",
								"src": "2643:33:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 216,
														"name": "Identifier",
														"src": "2709:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_address",
																"typeString": "address"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "!=",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 206,
																	"type": "address",
																	"value": "_adminToRemove"
																},
																"id": 217,
																"name": "Identifier",
																"src": "2717:14:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"isStructConstructorCall": false,
																	"lValueRequested": false,
																	"names": [
																		null
																	],
																	"type": "address",
																	"type_conversion": true
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": [
																				{
																					"typeIdentifier": "t_rational_0_by_1",
																					"typeString": "int_const 0"
																				}
																			],
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"type": "type(address)",
																			"value": "address"
																		},
																		"id": 218,
																		"name": "ElementaryTypeNameExpression",
																		"src": "2735:7:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"hexvalue": "30",
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"subdenomination": null,
																			"token": "number",
																			"type": "int_const 0",
																			"value": "0"
																		},
																		"id": 219,
																		"name": "Literal",
																		"src": "2743:1:0"
																	}
																],
																"id": 220,
																"name": "FunctionCall",
																"src": "2735:10:0"
															}
														],
														"id": 221,
														"name": "BinaryOperation",
														"src": "2717:28:0"
													}
												],
												"id": 222,
												"name": "FunctionCall",
												"src": "2709:37:0"
											}
										],
										"id": 223,
										"name": "ExpressionStatement",
										"src": "2709:37:0"
									},
									{
										"attributes": {
											"assignments": [
												225
											]
										},
										"children": [
											{
												"attributes": {
													"constant": false,
													"name": "lastId",
													"scope": 271,
													"stateVariable": false,
													"storageLocation": "default",
													"type": "address",
													"value": null,
													"visibility": "internal"
												},
												"children": [
													{
														"attributes": {
															"name": "address",
															"type": "address"
														},
														"id": 224,
														"name": "ElementaryTypeName",
														"src": "2765:7:0"
													}
												],
												"id": 225,
												"name": "VariableDeclaration",
												"src": "2765:14:0"
											},
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"type": "address"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 26,
															"type": "address[] storage ref",
															"value": "administrators"
														},
														"id": 226,
														"name": "Identifier",
														"src": "2782:14:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "-",
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "length",
																	"referencedDeclaration": null,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 26,
																			"type": "address[] storage ref",
																			"value": "administrators"
																		},
																		"id": 227,
																		"name": "Identifier",
																		"src": "2797:14:0"
																	}
																],
																"id": 228,
																"name": "MemberAccess",
																"src": "2797:21:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "31",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "number",
																	"type": "int_const 1",
																	"value": "1"
																},
																"id": 229,
																"name": "Literal",
																"src": "2819:1:0"
															}
														],
														"id": 230,
														"name": "BinaryOperation",
														"src": "2797:23:0"
													}
												],
												"id": 231,
												"name": "IndexAccess",
												"src": "2782:39:0"
											}
										],
										"id": 232,
										"name": "VariableDeclarationStatement",
										"src": "2765:56:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "address"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"type": "address"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 26,
																	"type": "address[] storage ref",
																	"value": "administrators"
																},
																"id": 233,
																"name": "Identifier",
																"src": "2831:14:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "adminsArrayIndex",
																	"referencedDeclaration": 22,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"type": "struct HouseholdMeters.Admin storage ref"
																		},
																		"children": [
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 30,
																					"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																					"value": "whiteListedAdmins"
																				},
																				"id": 234,
																				"name": "Identifier",
																				"src": "2846:17:0"
																			},
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 206,
																					"type": "address",
																					"value": "_adminToRemove"
																				},
																				"id": 235,
																				"name": "Identifier",
																				"src": "2864:14:0"
																			}
																		],
																		"id": 236,
																		"name": "IndexAccess",
																		"src": "2846:33:0"
																	}
																],
																"id": 237,
																"name": "MemberAccess",
																"src": "2846:50:0"
															}
														],
														"id": 238,
														"name": "IndexAccess",
														"src": "2831:66:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 225,
															"type": "address",
															"value": "lastId"
														},
														"id": 239,
														"name": "Identifier",
														"src": "2900:6:0"
													}
												],
												"id": 240,
												"name": "Assignment",
												"src": "2831:75:0"
											}
										],
										"id": 241,
										"name": "ExpressionStatement",
										"src": "2831:75:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "--",
													"prefix": false,
													"type": "uint256"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"member_name": "length",
															"referencedDeclaration": null,
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 26,
																	"type": "address[] storage ref",
																	"value": "administrators"
																},
																"id": 242,
																"name": "Identifier",
																"src": "2916:14:0"
															}
														],
														"id": 244,
														"name": "MemberAccess",
														"src": "2916:21:0"
													}
												],
												"id": 245,
												"name": "UnaryOperation",
												"src": "2916:23:0"
											}
										],
										"id": 246,
										"name": "ExpressionStatement",
										"src": "2916:23:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "uint256"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"member_name": "adminsArrayIndex",
															"referencedDeclaration": 22,
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Admin storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 30,
																			"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																			"value": "whiteListedAdmins"
																		},
																		"id": 247,
																		"name": "Identifier",
																		"src": "2949:17:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 225,
																			"type": "address",
																			"value": "lastId"
																		},
																		"id": 248,
																		"name": "Identifier",
																		"src": "2967:6:0"
																	}
																],
																"id": 249,
																"name": "IndexAccess",
																"src": "2949:25:0"
															}
														],
														"id": 250,
														"name": "MemberAccess",
														"src": "2949:42:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "adminsArrayIndex",
															"referencedDeclaration": 22,
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Admin storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 30,
																			"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																			"value": "whiteListedAdmins"
																		},
																		"id": 251,
																		"name": "Identifier",
																		"src": "2994:17:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 206,
																			"type": "address",
																			"value": "_adminToRemove"
																		},
																		"id": 252,
																		"name": "Identifier",
																		"src": "3012:14:0"
																	}
																],
																"id": 253,
																"name": "IndexAccess",
																"src": "2994:33:0"
															}
														],
														"id": 254,
														"name": "MemberAccess",
														"src": "2994:50:0"
													}
												],
												"id": 255,
												"name": "Assignment",
												"src": "2949:95:0"
											}
										],
										"id": 256,
										"name": "ExpressionStatement",
										"src": "2949:95:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "bool"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"member_name": "isActive",
															"referencedDeclaration": 20,
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Admin storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 30,
																			"type": "mapping(address => struct HouseholdMeters.Admin storage ref)",
																			"value": "whiteListedAdmins"
																		},
																		"id": 257,
																		"name": "Identifier",
																		"src": "3054:17:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 206,
																			"type": "address",
																			"value": "_adminToRemove"
																		},
																		"id": 258,
																		"name": "Identifier",
																		"src": "3072:14:0"
																	}
																],
																"id": 259,
																"name": "IndexAccess",
																"src": "3054:33:0"
															}
														],
														"id": 260,
														"name": "MemberAccess",
														"src": "3054:42:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"hexvalue": "66616c7365",
															"isConstant": false,
															"isLValue": false,
															"isPure": true,
															"lValueRequested": false,
															"subdenomination": null,
															"token": "bool",
															"type": "bool",
															"value": "false"
														},
														"id": 261,
														"name": "Literal",
														"src": "3099:5:0"
													}
												],
												"id": 262,
												"name": "Assignment",
												"src": "3054:50:0"
											}
										],
										"id": 263,
										"name": "ExpressionStatement",
										"src": "3054:50:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 38,
															"type": "function (address)",
															"value": "LogRemoveAdmin"
														},
														"id": 264,
														"name": "Identifier",
														"src": "3115:14:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 206,
															"type": "address",
															"value": "_adminToRemove"
														},
														"id": 265,
														"name": "Identifier",
														"src": "3130:14:0"
													}
												],
												"id": 266,
												"name": "FunctionCall",
												"src": "3115:30:0"
											}
										],
										"id": 267,
										"name": "ExpressionStatement",
										"src": "3115:30:0"
									},
									{
										"attributes": {
											"functionReturnParameters": 215
										},
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"hexvalue": "74727565",
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"lValueRequested": false,
													"subdenomination": null,
													"token": "bool",
													"type": "bool",
													"value": "true"
												},
												"id": 268,
												"name": "Literal",
												"src": "3163:4:0"
											}
										],
										"id": 269,
										"name": "Return",
										"src": "3156:11:0"
									}
								],
								"id": 270,
								"name": "Block",
								"src": "2699:475:0"
							}
						],
						"id": 271,
						"name": "FunctionDefinition",
						"src": "2581:593:0"
					},
					{
						"attributes": {
							"constant": true,
							"implemented": true,
							"isConstructor": false,
							"modifiers": [
								null
							],
							"name": "getHouseholdMembersCount",
							"payable": false,
							"scope": 444,
							"stateMutability": "view",
							"superFunction": null,
							"visibility": "public"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_meter",
											"scope": 284,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 272,
												"name": "ElementaryTypeName",
												"src": "3214:7:0"
											}
										],
										"id": 273,
										"name": "VariableDeclaration",
										"src": "3214:14:0"
									}
								],
								"id": 274,
								"name": "ParameterList",
								"src": "3213:16:0"
							},
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "membersCount",
											"scope": 284,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "uint16",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "uint16",
													"type": "uint16"
												},
												"id": 275,
												"name": "ElementaryTypeName",
												"src": "3259:6:0"
											}
										],
										"id": 276,
										"name": "VariableDeclaration",
										"src": "3259:19:0"
									}
								],
								"id": 277,
								"name": "ParameterList",
								"src": "3258:21:0"
							},
							{
								"children": [
									{
										"attributes": {
											"functionReturnParameters": 277
										},
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"member_name": "householdMembers",
													"referencedDeclaration": 6,
													"type": "uint16"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"type": "struct HouseholdMeters.Household storage ref"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 18,
																	"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																	"value": "householdMeters"
																},
																"id": 278,
																"name": "Identifier",
																"src": "3302:15:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 273,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 279,
																"name": "Identifier",
																"src": "3318:6:0"
															}
														],
														"id": 280,
														"name": "IndexAccess",
														"src": "3302:23:0"
													}
												],
												"id": 281,
												"name": "MemberAccess",
												"src": "3302:40:0"
											}
										],
										"id": 282,
										"name": "Return",
										"src": "3295:47:0"
									}
								],
								"id": 283,
								"name": "Block",
								"src": "3285:64:0"
							}
						],
						"id": 284,
						"name": "FunctionDefinition",
						"src": "3180:169:0"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": false,
							"name": "addHouseholdMeter",
							"payable": false,
							"scope": 444,
							"stateMutability": "nonpayable",
							"superFunction": null,
							"visibility": "public"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_meter",
											"scope": 339,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 285,
												"name": "ElementaryTypeName",
												"src": "3382:7:0"
											}
										],
										"id": 286,
										"name": "VariableDeclaration",
										"src": "3382:14:0"
									},
									{
										"attributes": {
											"constant": false,
											"name": "_householdMembers",
											"scope": 339,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "uint16",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "uint16",
													"type": "uint16"
												},
												"id": 287,
												"name": "ElementaryTypeName",
												"src": "3398:6:0"
											}
										],
										"id": 288,
										"name": "VariableDeclaration",
										"src": "3398:24:0"
									}
								],
								"id": 289,
								"name": "ParameterList",
								"src": "3381:42:0"
							},
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "success",
											"scope": 339,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "bool",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "bool",
													"type": "bool"
												},
												"id": 295,
												"name": "ElementaryTypeName",
												"src": "3487:4:0"
											}
										],
										"id": 296,
										"name": "VariableDeclaration",
										"src": "3487:12:0"
									}
								],
								"id": 297,
								"name": "ParameterList",
								"src": "3486:14:0"
							},
							{
								"attributes": {
									"arguments": [
										null
									]
								},
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 64,
											"type": "modifier ()",
											"value": "onlyAdmin"
										},
										"id": 290,
										"name": "Identifier",
										"src": "3440:9:0"
									}
								],
								"id": 291,
								"name": "ModifierInvocation",
								"src": "3440:9:0"
							},
							{
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 105,
											"type": "modifier (address)",
											"value": "onlyNotExistingMeter"
										},
										"id": 292,
										"name": "Identifier",
										"src": "3450:20:0"
									},
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 286,
											"type": "address",
											"value": "_meter"
										},
										"id": 293,
										"name": "Identifier",
										"src": "3471:6:0"
									}
								],
								"id": 294,
								"name": "ModifierInvocation",
								"src": "3450:28:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 298,
														"name": "Identifier",
														"src": "3516:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_address",
																"typeString": "address"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "!=",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 286,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 299,
																"name": "Identifier",
																"src": "3524:6:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"isStructConstructorCall": false,
																	"lValueRequested": false,
																	"names": [
																		null
																	],
																	"type": "address",
																	"type_conversion": true
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": [
																				{
																					"typeIdentifier": "t_rational_0_by_1",
																					"typeString": "int_const 0"
																				}
																			],
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"type": "type(address)",
																			"value": "address"
																		},
																		"id": 300,
																		"name": "ElementaryTypeNameExpression",
																		"src": "3534:7:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"hexvalue": "30",
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"subdenomination": null,
																			"token": "number",
																			"type": "int_const 0",
																			"value": "0"
																		},
																		"id": 301,
																		"name": "Literal",
																		"src": "3542:1:0"
																	}
																],
																"id": 302,
																"name": "FunctionCall",
																"src": "3534:10:0"
															}
														],
														"id": 303,
														"name": "BinaryOperation",
														"src": "3524:20:0"
													}
												],
												"id": 304,
												"name": "FunctionCall",
												"src": "3516:29:0"
											}
										],
										"id": 305,
										"name": "ExpressionStatement",
										"src": "3516:29:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 306,
														"name": "Identifier",
														"src": "3555:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint16",
																"typeString": "uint16"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": ">",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 288,
																	"type": "uint16",
																	"value": "_householdMembers"
																},
																"id": 307,
																"name": "Identifier",
																"src": "3563:17:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "30",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "number",
																	"type": "int_const 0",
																	"value": "0"
																},
																"id": 308,
																"name": "Literal",
																"src": "3583:1:0"
															}
														],
														"id": 309,
														"name": "BinaryOperation",
														"src": "3563:21:0"
													}
												],
												"id": 310,
												"name": "FunctionCall",
												"src": "3555:30:0"
											}
										],
										"id": 311,
										"name": "ExpressionStatement",
										"src": "3555:30:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "struct HouseholdMeters.Household storage ref"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"type": "struct HouseholdMeters.Household storage ref"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 18,
																	"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																	"value": "householdMeters"
																},
																"id": 312,
																"name": "Identifier",
																"src": "3596:15:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 286,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 313,
																"name": "Identifier",
																"src": "3612:6:0"
															}
														],
														"id": 314,
														"name": "IndexAccess",
														"src": "3596:23:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"isStructConstructorCall": true,
															"lValueRequested": false,
															"names": [
																"householdMembers",
																"householdMetersAddressesIndex",
																"isActive"
															],
															"type": "struct HouseholdMeters.Household memory",
															"type_conversion": false
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 11,
																	"type": "type(struct HouseholdMeters.Household storage pointer)",
																	"value": "Household"
																},
																"id": 315,
																"name": "Identifier",
																"src": "3622:9:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 288,
																	"type": "uint16",
																	"value": "_householdMembers"
																},
																"id": 316,
																"name": "Identifier",
																"src": "3668:17:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "length",
																	"referencedDeclaration": null,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 14,
																			"type": "address[] storage ref",
																			"value": "householdMetersAddresses"
																		},
																		"id": 317,
																		"name": "Identifier",
																		"src": "3734:24:0"
																	}
																],
																"id": 318,
																"name": "MemberAccess",
																"src": "3734:31:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "74727565",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "bool",
																	"type": "bool",
																	"value": "true"
																},
																"id": 319,
																"name": "Literal",
																"src": "3793:4:0"
															}
														],
														"id": 320,
														"name": "FunctionCall",
														"src": "3622:190:0"
													}
												],
												"id": 321,
												"name": "Assignment",
												"src": "3596:216:0"
											}
										],
										"id": 322,
										"name": "ExpressionStatement",
										"src": "3596:216:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "uint256",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "push",
															"referencedDeclaration": null,
															"type": "function (address) returns (uint256)"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 14,
																	"type": "address[] storage ref",
																	"value": "householdMetersAddresses"
																},
																"id": 323,
																"name": "Identifier",
																"src": "3822:24:0"
															}
														],
														"id": 325,
														"name": "MemberAccess",
														"src": "3822:29:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 286,
															"type": "address",
															"value": "_meter"
														},
														"id": 326,
														"name": "Identifier",
														"src": "3852:6:0"
													}
												],
												"id": 327,
												"name": "FunctionCall",
												"src": "3822:37:0"
											}
										],
										"id": 328,
										"name": "ExpressionStatement",
										"src": "3822:37:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																},
																{
																	"typeIdentifier": "t_uint16",
																	"typeString": "uint16"
																},
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 46,
															"type": "function (address,uint16,address)",
															"value": "LogAddHouseholdMeter"
														},
														"id": 329,
														"name": "Identifier",
														"src": "3878:20:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 286,
															"type": "address",
															"value": "_meter"
														},
														"id": 330,
														"name": "Identifier",
														"src": "3899:6:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 288,
															"type": "uint16",
															"value": "_householdMembers"
														},
														"id": 331,
														"name": "Identifier",
														"src": "3907:17:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "sender",
															"referencedDeclaration": null,
															"type": "address"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 1605,
																	"type": "msg",
																	"value": "msg"
																},
																"id": 332,
																"name": "Identifier",
																"src": "3926:3:0"
															}
														],
														"id": 333,
														"name": "MemberAccess",
														"src": "3926:10:0"
													}
												],
												"id": 334,
												"name": "FunctionCall",
												"src": "3878:59:0"
											}
										],
										"id": 335,
										"name": "ExpressionStatement",
										"src": "3878:59:0"
									},
									{
										"attributes": {
											"functionReturnParameters": 297
										},
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"hexvalue": "74727565",
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"lValueRequested": false,
													"subdenomination": null,
													"token": "bool",
													"type": "bool",
													"value": "true"
												},
												"id": 336,
												"name": "Literal",
												"src": "3955:4:0"
											}
										],
										"id": 337,
										"name": "Return",
										"src": "3948:11:0"
									}
								],
								"id": 338,
								"name": "Block",
								"src": "3506:460:0"
							}
						],
						"id": 339,
						"name": "FunctionDefinition",
						"src": "3355:611:0"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": false,
							"name": "removeHouseholdMeter",
							"payable": false,
							"scope": 444,
							"stateMutability": "nonpayable",
							"superFunction": null,
							"visibility": "public"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_meter",
											"scope": 408,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 340,
												"name": "ElementaryTypeName",
												"src": "4002:7:0"
											}
										],
										"id": 341,
										"name": "VariableDeclaration",
										"src": "4002:14:0"
									}
								],
								"id": 342,
								"name": "ParameterList",
								"src": "4001:16:0"
							},
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "success",
											"scope": 408,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "bool",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "bool",
													"type": "bool"
												},
												"id": 348,
												"name": "ElementaryTypeName",
												"src": "4078:4:0"
											}
										],
										"id": 349,
										"name": "VariableDeclaration",
										"src": "4078:12:0"
									}
								],
								"id": 350,
								"name": "ParameterList",
								"src": "4077:14:0"
							},
							{
								"attributes": {
									"arguments": [
										null
									]
								},
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 64,
											"type": "modifier ()",
											"value": "onlyAdmin"
										},
										"id": 343,
										"name": "Identifier",
										"src": "4034:9:0"
									}
								],
								"id": 344,
								"name": "ModifierInvocation",
								"src": "4034:9:0"
							},
							{
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 118,
											"type": "modifier (address)",
											"value": "onlyExistingMeter"
										},
										"id": 345,
										"name": "Identifier",
										"src": "4044:17:0"
									},
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 341,
											"type": "address",
											"value": "_meter"
										},
										"id": 346,
										"name": "Identifier",
										"src": "4062:6:0"
									}
								],
								"id": 347,
								"name": "ModifierInvocation",
								"src": "4044:25:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 351,
														"name": "Identifier",
														"src": "4107:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_address",
																"typeString": "address"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "!=",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 341,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 352,
																"name": "Identifier",
																"src": "4115:6:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"isStructConstructorCall": false,
																	"lValueRequested": false,
																	"names": [
																		null
																	],
																	"type": "address",
																	"type_conversion": true
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": [
																				{
																					"typeIdentifier": "t_rational_0_by_1",
																					"typeString": "int_const 0"
																				}
																			],
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"type": "type(address)",
																			"value": "address"
																		},
																		"id": 353,
																		"name": "ElementaryTypeNameExpression",
																		"src": "4125:7:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"hexvalue": "30",
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"subdenomination": null,
																			"token": "number",
																			"type": "int_const 0",
																			"value": "0"
																		},
																		"id": 354,
																		"name": "Literal",
																		"src": "4133:1:0"
																	}
																],
																"id": 355,
																"name": "FunctionCall",
																"src": "4125:10:0"
															}
														],
														"id": 356,
														"name": "BinaryOperation",
														"src": "4115:20:0"
													}
												],
												"id": 357,
												"name": "FunctionCall",
												"src": "4107:29:0"
											}
										],
										"id": 358,
										"name": "ExpressionStatement",
										"src": "4107:29:0"
									},
									{
										"attributes": {
											"assignments": [
												360
											]
										},
										"children": [
											{
												"attributes": {
													"constant": false,
													"name": "lastId",
													"scope": 408,
													"stateVariable": false,
													"storageLocation": "default",
													"type": "address",
													"value": null,
													"visibility": "internal"
												},
												"children": [
													{
														"attributes": {
															"name": "address",
															"type": "address"
														},
														"id": 359,
														"name": "ElementaryTypeName",
														"src": "4155:7:0"
													}
												],
												"id": 360,
												"name": "VariableDeclaration",
												"src": "4155:14:0"
											},
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"type": "address"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 14,
															"type": "address[] storage ref",
															"value": "householdMetersAddresses"
														},
														"id": 361,
														"name": "Identifier",
														"src": "4172:24:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "-",
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "length",
																	"referencedDeclaration": null,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 14,
																			"type": "address[] storage ref",
																			"value": "householdMetersAddresses"
																		},
																		"id": 362,
																		"name": "Identifier",
																		"src": "4197:24:0"
																	}
																],
																"id": 363,
																"name": "MemberAccess",
																"src": "4197:31:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "31",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "number",
																	"type": "int_const 1",
																	"value": "1"
																},
																"id": 364,
																"name": "Literal",
																"src": "4229:1:0"
															}
														],
														"id": 365,
														"name": "BinaryOperation",
														"src": "4197:33:0"
													}
												],
												"id": 366,
												"name": "IndexAccess",
												"src": "4172:59:0"
											}
										],
										"id": 367,
										"name": "VariableDeclarationStatement",
										"src": "4155:76:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "address"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"type": "address"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 14,
																	"type": "address[] storage ref",
																	"value": "householdMetersAddresses"
																},
																"id": 368,
																"name": "Identifier",
																"src": "4241:24:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"member_name": "householdMetersAddressesIndex",
																	"referencedDeclaration": 8,
																	"type": "uint256"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"type": "struct HouseholdMeters.Household storage ref"
																		},
																		"children": [
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 18,
																					"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																					"value": "householdMeters"
																				},
																				"id": 369,
																				"name": "Identifier",
																				"src": "4266:15:0"
																			},
																			{
																				"attributes": {
																					"argumentTypes": null,
																					"overloadedDeclarations": [
																						null
																					],
																					"referencedDeclaration": 341,
																					"type": "address",
																					"value": "_meter"
																				},
																				"id": 370,
																				"name": "Identifier",
																				"src": "4282:6:0"
																			}
																		],
																		"id": 371,
																		"name": "IndexAccess",
																		"src": "4266:23:0"
																	}
																],
																"id": 372,
																"name": "MemberAccess",
																"src": "4266:53:0"
															}
														],
														"id": 373,
														"name": "IndexAccess",
														"src": "4241:79:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 360,
															"type": "address",
															"value": "lastId"
														},
														"id": 374,
														"name": "Identifier",
														"src": "4323:6:0"
													}
												],
												"id": 375,
												"name": "Assignment",
												"src": "4241:88:0"
											}
										],
										"id": 376,
										"name": "ExpressionStatement",
										"src": "4241:88:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "--",
													"prefix": false,
													"type": "uint256"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"member_name": "length",
															"referencedDeclaration": null,
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 14,
																	"type": "address[] storage ref",
																	"value": "householdMetersAddresses"
																},
																"id": 377,
																"name": "Identifier",
																"src": "4339:24:0"
															}
														],
														"id": 379,
														"name": "MemberAccess",
														"src": "4339:31:0"
													}
												],
												"id": 380,
												"name": "UnaryOperation",
												"src": "4339:33:0"
											}
										],
										"id": 381,
										"name": "ExpressionStatement",
										"src": "4339:33:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "uint256"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"member_name": "householdMetersAddressesIndex",
															"referencedDeclaration": 8,
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Household storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 18,
																			"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																			"value": "householdMeters"
																		},
																		"id": 382,
																		"name": "Identifier",
																		"src": "4382:15:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 360,
																			"type": "address",
																			"value": "lastId"
																		},
																		"id": 383,
																		"name": "Identifier",
																		"src": "4398:6:0"
																	}
																],
																"id": 384,
																"name": "IndexAccess",
																"src": "4382:23:0"
															}
														],
														"id": 385,
														"name": "MemberAccess",
														"src": "4382:53:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "householdMetersAddressesIndex",
															"referencedDeclaration": 8,
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Household storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 18,
																			"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																			"value": "householdMeters"
																		},
																		"id": 386,
																		"name": "Identifier",
																		"src": "4438:15:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 341,
																			"type": "address",
																			"value": "_meter"
																		},
																		"id": 387,
																		"name": "Identifier",
																		"src": "4454:6:0"
																	}
																],
																"id": 388,
																"name": "IndexAccess",
																"src": "4438:23:0"
															}
														],
														"id": 389,
														"name": "MemberAccess",
														"src": "4438:53:0"
													}
												],
												"id": 390,
												"name": "Assignment",
												"src": "4382:109:0"
											}
										],
										"id": 391,
										"name": "ExpressionStatement",
										"src": "4382:109:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "bool"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"member_name": "isActive",
															"referencedDeclaration": 10,
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Household storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 18,
																			"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																			"value": "householdMeters"
																		},
																		"id": 392,
																		"name": "Identifier",
																		"src": "4501:15:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 341,
																			"type": "address",
																			"value": "_meter"
																		},
																		"id": 393,
																		"name": "Identifier",
																		"src": "4517:6:0"
																	}
																],
																"id": 394,
																"name": "IndexAccess",
																"src": "4501:23:0"
															}
														],
														"id": 395,
														"name": "MemberAccess",
														"src": "4501:32:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"hexvalue": "66616c7365",
															"isConstant": false,
															"isLValue": false,
															"isPure": true,
															"lValueRequested": false,
															"subdenomination": null,
															"token": "bool",
															"type": "bool",
															"value": "false"
														},
														"id": 396,
														"name": "Literal",
														"src": "4536:5:0"
													}
												],
												"id": 397,
												"name": "Assignment",
												"src": "4501:40:0"
											}
										],
										"id": 398,
										"name": "ExpressionStatement",
										"src": "4501:40:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																},
																{
																	"typeIdentifier": "t_address",
																	"typeString": "address"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 52,
															"type": "function (address,address)",
															"value": "LogRemoveHouseholdMeter"
														},
														"id": 399,
														"name": "Identifier",
														"src": "4552:23:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 341,
															"type": "address",
															"value": "_meter"
														},
														"id": 400,
														"name": "Identifier",
														"src": "4576:6:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"member_name": "sender",
															"referencedDeclaration": null,
															"type": "address"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 1605,
																	"type": "msg",
																	"value": "msg"
																},
																"id": 401,
																"name": "Identifier",
																"src": "4584:3:0"
															}
														],
														"id": 402,
														"name": "MemberAccess",
														"src": "4584:10:0"
													}
												],
												"id": 403,
												"name": "FunctionCall",
												"src": "4552:43:0"
											}
										],
										"id": 404,
										"name": "ExpressionStatement",
										"src": "4552:43:0"
									},
									{
										"attributes": {
											"functionReturnParameters": 350
										},
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"hexvalue": "74727565",
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"lValueRequested": false,
													"subdenomination": null,
													"token": "bool",
													"type": "bool",
													"value": "true"
												},
												"id": 405,
												"name": "Literal",
												"src": "4613:4:0"
											}
										],
										"id": 406,
										"name": "Return",
										"src": "4606:11:0"
									}
								],
								"id": 407,
								"name": "Block",
								"src": "4097:527:0"
							}
						],
						"id": 408,
						"name": "FunctionDefinition",
						"src": "3972:652:0"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": false,
							"name": "updateHousehold",
							"payable": false,
							"scope": 444,
							"stateMutability": "nonpayable",
							"superFunction": null,
							"visibility": "public"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "_meter",
											"scope": 443,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "address",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "address",
													"type": "address"
												},
												"id": 409,
												"name": "ElementaryTypeName",
												"src": "4655:7:0"
											}
										],
										"id": 410,
										"name": "VariableDeclaration",
										"src": "4655:14:0"
									},
									{
										"attributes": {
											"constant": false,
											"name": "_householdMembers",
											"scope": 443,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "uint16",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "uint16",
													"type": "uint16"
												},
												"id": 411,
												"name": "ElementaryTypeName",
												"src": "4671:6:0"
											}
										],
										"id": 412,
										"name": "VariableDeclaration",
										"src": "4671:24:0"
									}
								],
								"id": 413,
								"name": "ParameterList",
								"src": "4654:42:0"
							},
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "success",
											"scope": 443,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "bool",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "bool",
													"type": "bool"
												},
												"id": 416,
												"name": "ElementaryTypeName",
												"src": "4722:4:0"
											}
										],
										"id": 417,
										"name": "VariableDeclaration",
										"src": "4722:12:0"
									}
								],
								"id": 418,
								"name": "ParameterList",
								"src": "4721:14:0"
							},
							{
								"attributes": {
									"arguments": [
										null
									]
								},
								"children": [
									{
										"attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
												null
											],
											"referencedDeclaration": 64,
											"type": "modifier ()",
											"value": "onlyAdmin"
										},
										"id": 414,
										"name": "Identifier",
										"src": "4704:9:0"
									}
								],
								"id": 415,
								"name": "ModifierInvocation",
								"src": "4704:9:0"
							},
							{
								"children": [
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 419,
														"name": "Identifier",
														"src": "4746:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_address",
																"typeString": "address"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": "!=",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 410,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 420,
																"name": "Identifier",
																"src": "4754:6:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"isStructConstructorCall": false,
																	"lValueRequested": false,
																	"names": [
																		null
																	],
																	"type": "address",
																	"type_conversion": true
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": [
																				{
																					"typeIdentifier": "t_rational_0_by_1",
																					"typeString": "int_const 0"
																				}
																			],
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"type": "type(address)",
																			"value": "address"
																		},
																		"id": 421,
																		"name": "ElementaryTypeNameExpression",
																		"src": "4764:7:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"hexvalue": "30",
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"lValueRequested": false,
																			"subdenomination": null,
																			"token": "number",
																			"type": "int_const 0",
																			"value": "0"
																		},
																		"id": 422,
																		"name": "Literal",
																		"src": "4772:1:0"
																	}
																],
																"id": 423,
																"name": "FunctionCall",
																"src": "4764:10:0"
															}
														],
														"id": 424,
														"name": "BinaryOperation",
														"src": "4754:20:0"
													}
												],
												"id": 425,
												"name": "FunctionCall",
												"src": "4746:29:0"
											}
										],
										"id": 426,
										"name": "ExpressionStatement",
										"src": "4746:29:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"isStructConstructorCall": false,
													"lValueRequested": false,
													"names": [
														null
													],
													"type": "tuple()",
													"type_conversion": false
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 1608,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 427,
														"name": "Identifier",
														"src": "4785:7:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint16",
																"typeString": "uint16"
															},
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"operator": ">",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 412,
																	"type": "uint16",
																	"value": "_householdMembers"
																},
																"id": 428,
																"name": "Identifier",
																"src": "4793:17:0"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"hexvalue": "30",
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"lValueRequested": false,
																	"subdenomination": null,
																	"token": "number",
																	"type": "int_const 0",
																	"value": "0"
																},
																"id": 429,
																"name": "Literal",
																"src": "4813:1:0"
															}
														],
														"id": 430,
														"name": "BinaryOperation",
														"src": "4793:21:0"
													}
												],
												"id": 431,
												"name": "FunctionCall",
												"src": "4785:30:0"
											}
										],
										"id": 432,
										"name": "ExpressionStatement",
										"src": "4785:30:0"
									},
									{
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"operator": "=",
													"type": "uint16"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"member_name": "householdMembers",
															"referencedDeclaration": 6,
															"type": "uint16"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"type": "struct HouseholdMeters.Household storage ref"
																},
																"children": [
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 18,
																			"type": "mapping(address => struct HouseholdMeters.Household storage ref)",
																			"value": "householdMeters"
																		},
																		"id": 433,
																		"name": "Identifier",
																		"src": "4834:15:0"
																	},
																	{
																		"attributes": {
																			"argumentTypes": null,
																			"overloadedDeclarations": [
																				null
																			],
																			"referencedDeclaration": 410,
																			"type": "address",
																			"value": "_meter"
																		},
																		"id": 434,
																		"name": "Identifier",
																		"src": "4850:6:0"
																	}
																],
																"id": 435,
																"name": "IndexAccess",
																"src": "4834:23:0"
															}
														],
														"id": 436,
														"name": "MemberAccess",
														"src": "4834:40:0"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 412,
															"type": "uint16",
															"value": "_householdMembers"
														},
														"id": 437,
														"name": "Identifier",
														"src": "4877:17:0"
													}
												],
												"id": 438,
												"name": "Assignment",
												"src": "4834:60:0"
											}
										],
										"id": 439,
										"name": "ExpressionStatement",
										"src": "4834:60:0"
									},
									{
										"attributes": {
											"functionReturnParameters": 418
										},
										"children": [
											{
												"attributes": {
													"argumentTypes": null,
													"hexvalue": "74727565",
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"lValueRequested": false,
													"subdenomination": null,
													"token": "bool",
													"type": "bool",
													"value": "true"
												},
												"id": 440,
												"name": "Literal",
												"src": "4912:4:0"
											}
										],
										"id": 441,
										"name": "Return",
										"src": "4905:11:0"
									}
								],
								"id": 442,
								"name": "Block",
								"src": "4736:187:0"
							}
						],
						"id": 443,
						"name": "FunctionDefinition",
						"src": "4630:293:0"
					}
				],
				"id": 444,
				"name": "ContractDefinition",
				"src": "88:4837:0"
			}
		],
		"id": 445,
		"name": "SourceUnit",
		"src": "0:4925:0"
	},
	"compiler": {
		"name": "solc",
		"version": "0.4.18+commit.9cf6e910.Emscripten.clang"
	},
	"networks": {
		"5777": {
			"events": {},
			"links": {},
			"address": "0x48cf3ef6af69a257a68e2350c3ce267e5c47626c"
		},
		"1517395492641": {
			"events": {},
			"links": {},
			"address": "0x655341aabd39a5ee0939796df610ad685a984c53"
		}
	},
	"schemaVersion": "1.0.1",
	"updatedAt": "2018-01-31T12:59:22.708Z"
}