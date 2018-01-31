export const WaterGoverning = {
	"contractName": "WaterGoverning",
	"abi": [
		{
			"constant": false,
			"inputs": [
				{
					"name": "_meter",
					"type": "address"
				},
				{
					"name": "_liters",
					"type": "uint256"
				}
			],
			"name": "addLiters",
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
			"name": "voucherContractAddress",
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
			"name": "meterLiters",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "_voucherContract",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
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
					"name": "_liters",
					"type": "uint256"
				},
				{
					"indexed": false,
					"name": "_totalAvailable",
					"type": "uint256"
				}
			],
			"name": "LogAddLiters",
			"type": "event"
		}
	],
	"bytecode": "0x6060604052341561000f57600080fd5b6040516020806102c98339810160405280805160008054600160a060020a03909216600160a060020a03199092169190911790555050610275806100546000396000f3006060604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633135728a811461005b5780635cbc64761461009e578063fdb62abc146100da575b600080fd5b341561006657600080fd5b61008a73ffffffffffffffffffffffffffffffffffffffff60043516602435610118565b604051901515815260200160405180910390f35b34156100a957600080fd5b6100b161021b565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34156100e557600080fd5b61010673ffffffffffffffffffffffffffffffffffffffff60043516610237565b60405190815260200160405180910390f35b600080543373ffffffffffffffffffffffffffffffffffffffff90811691161461014157600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316151561016357600080fd5b6000821161017057600080fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260409081902080548401908190557fdd703e16c53ec7f283636436a476331613abaa348b20d0dcae62e6e7eb8b78a7918591859151808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a150600192915050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600160205260009081526040902054815600a165627a7a723058202442c887ed7736d1cd8e8f6617897db7f425b901f9843bfc9c87e34272d2cd080029",
	"deployedBytecode": "0x6060604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633135728a811461005b5780635cbc64761461009e578063fdb62abc146100da575b600080fd5b341561006657600080fd5b61008a73ffffffffffffffffffffffffffffffffffffffff60043516602435610118565b604051901515815260200160405180910390f35b34156100a957600080fd5b6100b161021b565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34156100e557600080fd5b61010673ffffffffffffffffffffffffffffffffffffffff60043516610237565b60405190815260200160405180910390f35b600080543373ffffffffffffffffffffffffffffffffffffffff90811691161461014157600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316151561016357600080fd5b6000821161017057600080fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260409081902080548401908190557fdd703e16c53ec7f283636436a476331613abaa348b20d0dcae62e6e7eb8b78a7918591859151808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a150600192915050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600160205260009081526040902054815600a165627a7a723058202442c887ed7736d1cd8e8f6617897db7f425b901f9843bfc9c87e34272d2cd080029",
	"sourceMap": "26:730:3:-;;;336:115;;;;;;;;;;;;;;;;;;;;;;403:22;:41;;-1:-1:-1;;;;;403:41:3;;;-1:-1:-1;;;;;;403:41:3;;;;;;;;;-1:-1:-1;;26:730:3;;;;;;",
	"deployedSourceMap": "26:730:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;457:297;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;56:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;457:297;541:12;275:22;;301:10;275:36;;;;:22;;:36;267:45;;;;;;573:20;;;;;565:29;;;;;;622:1;612:11;;604:20;;;;;;635:19;;;;;;;:11;:19;;;;;;;:30;;;;;;;;675:50;;647:6;;658:7;;675:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;743:4:3;457:297;;;;:::o;56:37::-;;;;;;:::o;99:43::-;;;;;;;;;;;;;:::o",
	"source": "pragma solidity ^0.4.18;\n\ncontract WaterGoverning {\n    address public voucherContractAddress;\n    mapping(address => uint) public meterLiters;\n\n    event LogAddLiters(address _meter, uint _liters, uint _totalAvailable);\n\n    modifier onlyVoucherContract() {\n        require(voucherContractAddress == msg.sender);\n        _;\n    }\n\n    function WaterGoverning(address _voucherContract) public {\n        voucherContractAddress = _voucherContract;\n    }\n\n    function addLiters(address _meter, uint _liters) public onlyVoucherContract returns(bool success) {\n        require(_meter != address(0));\n        require(_liters > 0);\n\n        meterLiters[_meter] += _liters;\n        LogAddLiters(_meter, _liters, meterLiters[_meter]);\n\n        return true;\n    }\n}",
	"sourcePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterGoverning.sol",
	"ast": {
		"attributes": {
			"absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterGoverning.sol",
			"exportedSymbols": {
				"WaterGoverning": [
					757
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
				"id": 679,
				"name": "PragmaDirective",
				"src": "0:24:3"
			},
			{
				"attributes": {
					"baseContracts": [
						null
					],
					"contractDependencies": [
						null
					],
					"contractKind": "contract",
					"documentation": null,
					"fullyImplemented": true,
					"linearizedBaseContracts": [
						757
					],
					"name": "WaterGoverning",
					"scope": 758
				},
				"children": [
					{
						"attributes": {
							"constant": false,
							"name": "voucherContractAddress",
							"scope": 757,
							"stateVariable": true,
							"storageLocation": "default",
							"type": "address",
							"value": null,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"name": "address",
									"type": "address"
								},
								"id": 680,
								"name": "ElementaryTypeName",
								"src": "56:7:3"
							}
						],
						"id": 681,
						"name": "VariableDeclaration",
						"src": "56:37:3"
					},
					{
						"attributes": {
							"constant": false,
							"name": "meterLiters",
							"scope": 757,
							"stateVariable": true,
							"storageLocation": "default",
							"type": "mapping(address => uint256)",
							"value": null,
							"visibility": "public"
						},
						"children": [
							{
								"attributes": {
									"type": "mapping(address => uint256)"
								},
								"children": [
									{
										"attributes": {
											"name": "address",
											"type": "address"
										},
										"id": 682,
										"name": "ElementaryTypeName",
										"src": "107:7:3"
									},
									{
										"attributes": {
											"name": "uint",
											"type": "uint256"
										},
										"id": 683,
										"name": "ElementaryTypeName",
										"src": "118:4:3"
									}
								],
								"id": 684,
								"name": "Mapping",
								"src": "99:24:3"
							}
						],
						"id": 685,
						"name": "VariableDeclaration",
						"src": "99:43:3"
					},
					{
						"attributes": {
							"anonymous": false,
							"name": "LogAddLiters"
						},
						"children": [
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_meter",
											"scope": 693,
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
												"id": 686,
												"name": "ElementaryTypeName",
												"src": "168:7:3"
											}
										],
										"id": 687,
										"name": "VariableDeclaration",
										"src": "168:14:3"
									},
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_liters",
											"scope": 693,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "uint256",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "uint",
													"type": "uint256"
												},
												"id": 688,
												"name": "ElementaryTypeName",
												"src": "184:4:3"
											}
										],
										"id": 689,
										"name": "VariableDeclaration",
										"src": "184:12:3"
									},
									{
										"attributes": {
											"constant": false,
											"indexed": false,
											"name": "_totalAvailable",
											"scope": 693,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "uint256",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "uint",
													"type": "uint256"
												},
												"id": 690,
												"name": "ElementaryTypeName",
												"src": "198:4:3"
											}
										],
										"id": 691,
										"name": "VariableDeclaration",
										"src": "198:20:3"
									}
								],
								"id": 692,
								"name": "ParameterList",
								"src": "167:52:3"
							}
						],
						"id": 693,
						"name": "EventDefinition",
						"src": "149:71:3"
					},
					{
						"attributes": {
							"name": "onlyVoucherContract",
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
								"id": 694,
								"name": "ParameterList",
								"src": "254:2:3"
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
															"referencedDeclaration": 1307,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 695,
														"name": "Identifier",
														"src": "267:7:3"
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
															"operator": "==",
															"type": "bool"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 681,
																	"type": "address",
																	"value": "voucherContractAddress"
																},
																"id": 696,
																"name": "Identifier",
																"src": "275:22:3"
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
																			"referencedDeclaration": 1304,
																			"type": "msg",
																			"value": "msg"
																		},
																		"id": 697,
																		"name": "Identifier",
																		"src": "301:3:3"
																	}
																],
																"id": 698,
																"name": "MemberAccess",
																"src": "301:10:3"
															}
														],
														"id": 699,
														"name": "BinaryOperation",
														"src": "275:36:3"
													}
												],
												"id": 700,
												"name": "FunctionCall",
												"src": "267:45:3"
											}
										],
										"id": 701,
										"name": "ExpressionStatement",
										"src": "267:45:3"
									},
									{
										"id": 702,
										"name": "PlaceholderStatement",
										"src": "322:1:3"
									}
								],
								"id": 703,
								"name": "Block",
								"src": "257:73:3"
							}
						],
						"id": 704,
						"name": "ModifierDefinition",
						"src": "226:104:3"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": true,
							"modifiers": [
								null
							],
							"name": "WaterGoverning",
							"payable": false,
							"scope": 757,
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
											"name": "_voucherContract",
											"scope": 714,
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
												"id": 705,
												"name": "ElementaryTypeName",
												"src": "360:7:3"
											}
										],
										"id": 706,
										"name": "VariableDeclaration",
										"src": "360:24:3"
									}
								],
								"id": 707,
								"name": "ParameterList",
								"src": "359:26:3"
							},
							{
								"attributes": {
									"parameters": [
										null
									]
								},
								"children": [],
								"id": 708,
								"name": "ParameterList",
								"src": "393:0:3"
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
													"type": "address"
												},
												"children": [
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 681,
															"type": "address",
															"value": "voucherContractAddress"
														},
														"id": 709,
														"name": "Identifier",
														"src": "403:22:3"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 706,
															"type": "address",
															"value": "_voucherContract"
														},
														"id": 710,
														"name": "Identifier",
														"src": "428:16:3"
													}
												],
												"id": 711,
												"name": "Assignment",
												"src": "403:41:3"
											}
										],
										"id": 712,
										"name": "ExpressionStatement",
										"src": "403:41:3"
									}
								],
								"id": 713,
								"name": "Block",
								"src": "393:58:3"
							}
						],
						"id": 714,
						"name": "FunctionDefinition",
						"src": "336:115:3"
					},
					{
						"attributes": {
							"constant": false,
							"implemented": true,
							"isConstructor": false,
							"name": "addLiters",
							"payable": false,
							"scope": 757,
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
											"scope": 756,
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
												"id": 715,
												"name": "ElementaryTypeName",
												"src": "476:7:3"
											}
										],
										"id": 716,
										"name": "VariableDeclaration",
										"src": "476:14:3"
									},
									{
										"attributes": {
											"constant": false,
											"name": "_liters",
											"scope": 756,
											"stateVariable": false,
											"storageLocation": "default",
											"type": "uint256",
											"value": null,
											"visibility": "internal"
										},
										"children": [
											{
												"attributes": {
													"name": "uint",
													"type": "uint256"
												},
												"id": 717,
												"name": "ElementaryTypeName",
												"src": "492:4:3"
											}
										],
										"id": 718,
										"name": "VariableDeclaration",
										"src": "492:12:3"
									}
								],
								"id": 719,
								"name": "ParameterList",
								"src": "475:30:3"
							},
							{
								"children": [
									{
										"attributes": {
											"constant": false,
											"name": "success",
											"scope": 756,
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
												"id": 722,
												"name": "ElementaryTypeName",
												"src": "541:4:3"
											}
										],
										"id": 723,
										"name": "VariableDeclaration",
										"src": "541:12:3"
									}
								],
								"id": 724,
								"name": "ParameterList",
								"src": "540:14:3"
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
											"referencedDeclaration": 704,
											"type": "modifier ()",
											"value": "onlyVoucherContract"
										},
										"id": 720,
										"name": "Identifier",
										"src": "513:19:3"
									}
								],
								"id": 721,
								"name": "ModifierInvocation",
								"src": "513:19:3"
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
															"referencedDeclaration": 1307,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 725,
														"name": "Identifier",
														"src": "565:7:3"
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
																	"referencedDeclaration": 716,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 726,
																"name": "Identifier",
																"src": "573:6:3"
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
																		"id": 727,
																		"name": "ElementaryTypeNameExpression",
																		"src": "583:7:3"
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
																		"id": 728,
																		"name": "Literal",
																		"src": "591:1:3"
																	}
																],
																"id": 729,
																"name": "FunctionCall",
																"src": "583:10:3"
															}
														],
														"id": 730,
														"name": "BinaryOperation",
														"src": "573:20:3"
													}
												],
												"id": 731,
												"name": "FunctionCall",
												"src": "565:29:3"
											}
										],
										"id": 732,
										"name": "ExpressionStatement",
										"src": "565:29:3"
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
															"referencedDeclaration": 1307,
															"type": "function (bool) pure",
															"value": "require"
														},
														"id": 733,
														"name": "Identifier",
														"src": "604:7:3"
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
																	"referencedDeclaration": 718,
																	"type": "uint256",
																	"value": "_liters"
																},
																"id": 734,
																"name": "Identifier",
																"src": "612:7:3"
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
																"id": 735,
																"name": "Literal",
																"src": "622:1:3"
															}
														],
														"id": 736,
														"name": "BinaryOperation",
														"src": "612:11:3"
													}
												],
												"id": 737,
												"name": "FunctionCall",
												"src": "604:20:3"
											}
										],
										"id": 738,
										"name": "ExpressionStatement",
										"src": "604:20:3"
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
													"operator": "+=",
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
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 685,
																	"type": "mapping(address => uint256)",
																	"value": "meterLiters"
																},
																"id": 739,
																"name": "Identifier",
																"src": "635:11:3"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 716,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 740,
																"name": "Identifier",
																"src": "647:6:3"
															}
														],
														"id": 741,
														"name": "IndexAccess",
														"src": "635:19:3"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 718,
															"type": "uint256",
															"value": "_liters"
														},
														"id": 742,
														"name": "Identifier",
														"src": "658:7:3"
													}
												],
												"id": 743,
												"name": "Assignment",
												"src": "635:30:3"
											}
										],
										"id": 744,
										"name": "ExpressionStatement",
										"src": "635:30:3"
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
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															],
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 693,
															"type": "function (address,uint256,uint256)",
															"value": "LogAddLiters"
														},
														"id": 745,
														"name": "Identifier",
														"src": "675:12:3"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 716,
															"type": "address",
															"value": "_meter"
														},
														"id": 746,
														"name": "Identifier",
														"src": "688:6:3"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"overloadedDeclarations": [
																null
															],
															"referencedDeclaration": 718,
															"type": "uint256",
															"value": "_liters"
														},
														"id": 747,
														"name": "Identifier",
														"src": "696:7:3"
													},
													{
														"attributes": {
															"argumentTypes": null,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"type": "uint256"
														},
														"children": [
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 685,
																	"type": "mapping(address => uint256)",
																	"value": "meterLiters"
																},
																"id": 748,
																"name": "Identifier",
																"src": "705:11:3"
															},
															{
																"attributes": {
																	"argumentTypes": null,
																	"overloadedDeclarations": [
																		null
																	],
																	"referencedDeclaration": 716,
																	"type": "address",
																	"value": "_meter"
																},
																"id": 749,
																"name": "Identifier",
																"src": "717:6:3"
															}
														],
														"id": 750,
														"name": "IndexAccess",
														"src": "705:19:3"
													}
												],
												"id": 751,
												"name": "FunctionCall",
												"src": "675:50:3"
											}
										],
										"id": 752,
										"name": "ExpressionStatement",
										"src": "675:50:3"
									},
									{
										"attributes": {
											"functionReturnParameters": 724
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
												"id": 753,
												"name": "Literal",
												"src": "743:4:3"
											}
										],
										"id": 754,
										"name": "Return",
										"src": "736:11:3"
									}
								],
								"id": 755,
								"name": "Block",
								"src": "555:199:3"
							}
						],
						"id": 756,
						"name": "FunctionDefinition",
						"src": "457:297:3"
					}
				],
				"id": 757,
				"name": "ContractDefinition",
				"src": "26:730:3"
			}
		],
		"id": 758,
		"name": "SourceUnit",
		"src": "0:756:3"
	},
	"compiler": {
		"name": "solc",
		"version": "0.4.18+commit.9cf6e910.Emscripten.clang"
	},
	"networks": {},
	"schemaVersion": "1.0.1",
	"updatedAt": "2018-01-31T10:31:54.785Z"
}