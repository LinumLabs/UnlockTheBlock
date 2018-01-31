export const WaterVauchers = {
  "contractName": "WaterVouchers",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "intermediariesAddresses",
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
        },
        {
          "name": "_timestampEnd",
          "type": "uint256"
        }
      ],
      "name": "getLastVoucherLitersInMonth",
      "outputs": [
        {
          "name": "liters",
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
          "name": "_newIntermediary",
          "type": "address"
        }
      ],
      "name": "addIntermediary",
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
          "name": "_intermediaryToRemove",
          "type": "address"
        }
      ],
      "name": "removeIntermediary",
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
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "meterVouchers",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
          "type": "uint256"
        }
      ],
      "name": "voucherIds",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_waterGoverningContractAddress",
          "type": "address"
        }
      ],
      "name": "setWaterGoverningContractAddress",
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
          "type": "address"
        }
      ],
      "name": "intermediaries",
      "outputs": [
        {
          "name": "isActive",
          "type": "bool"
        },
        {
          "name": "intermediariesArrayIndex",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "waterGoverningContractAddress",
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
      "constant": false,
      "inputs": [
        {
          "name": "_priceEstimatorContractAddress",
          "type": "address"
        }
      ],
      "name": "setPriceEstimatorContractAddress",
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
      "name": "priceEstimatorContractAddress",
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
          "type": "bytes32"
        }
      ],
      "name": "vouchers",
      "outputs": [
        {
          "name": "issuer",
          "type": "address"
        },
        {
          "name": "liters",
          "type": "uint256"
        },
        {
          "name": "meter",
          "type": "address"
        },
        {
          "name": "totalPrice",
          "type": "uint256"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "name": "voucherIdsArrayIndex",
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
          "name": "_meter",
          "type": "address"
        },
        {
          "name": "_liters",
          "type": "uint256"
        }
      ],
      "name": "estimatePrice",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "price",
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
          "name": "_voucherId",
          "type": "bytes32"
        },
        {
          "name": "_meter",
          "type": "address"
        },
        {
          "name": "_liters",
          "type": "uint256"
        }
      ],
      "name": "purchaseVoucher",
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
          "name": "_newIntermediary",
          "type": "address"
        }
      ],
      "name": "LogAddIntermediary",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_intermediaryToRemove",
          "type": "address"
        }
      ],
      "name": "LogRemoveIntermediary",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_issuer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_meter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_voucherId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_liters",
          "type": "uint256"
        }
      ],
      "name": "LogPurchaseVoucher",
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
  "bytecode": "0x6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a0319909116179055610d8e8061003b6000396000f3006060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630fb4052f81146100ea5780633fba58111461011c5780634356f35b146101505780634d0234041461018357806367609d99146101a25780638da5cb5b146101c4578063ab34ee4f146101d7578063c51c20ff146101ed578063d32b0c451461020c578063da334c5814610245578063db5373ab14610258578063e1556b3314610277578063e4c96ac41461028a578063e5730ffe146102ec578063e6c51f2014610326578063f2fde38b1461034b575b600080fd5b34156100f557600080fd5b61010060043561036c565b604051600160a060020a03909116815260200160405180910390f35b341561012757600080fd5b61013e600160a060020a0360043516602435610394565b60405190815260200160405180910390f35b341561015b57600080fd5b61016f600160a060020a036004351661045d565b604051901515815260200160405180910390f35b341561018e57600080fd5b61016f600160a060020a036004351661058c565b34156101ad57600080fd5b61013e600160a060020a0360043516602435610702565b34156101cf57600080fd5b610100610730565b34156101e257600080fd5b61013e60043561073f565b34156101f857600080fd5b61016f600160a060020a036004351661075e565b341561021757600080fd5b61022b600160a060020a03600435166107aa565b604051911515825260208201526040908101905180910390f35b341561025057600080fd5b6101006107c9565b341561026357600080fd5b61016f600160a060020a03600435166107d8565b341561028257600080fd5b610100610826565b341561029557600080fd5b6102a0600435610835565b604051600160a060020a0397881681526020810196909652939095166040808601919091526060850192909252608084015260a0830193909352151560c082015260e001905180910390f35b34156102f757600080fd5b61030e600160a060020a0360043516602435610882565b60405191825260208201526040908101905180910390f35b341561033157600080fd5b61016f600435600160a060020a036024351660443561092f565b341561035657600080fd5b61036a600160a060020a0360043516610c7d565b005b600380548290811061037a57fe5b600091825260209091200154600160a060020a0316905081565b600160a060020a03821660009081526007602052604081208054829190829015156103c25760009350610454565b508054600019015b846006600084848154811015156103dd57fe5b6000918252602080832090910154835282019290925260400190206004015411156104505760066000838381548110151561041457fe5b60009182526020808320909101548352820192909252604001902060010154929092019180151561044757829350610454565b600019016103ca565b8293505b50505092915050565b6000805433600160a060020a0390811691161461047957600080fd5b600160a060020a038216600090815260046020526040902054829060ff16156104a157600080fd5b600160a060020a03831615156104b657600080fd5b60408051908101604090815260018252600354602080840191909152600160a060020a03861660009081526004909152208151815460ff19169015151781556020820151600191820155600380549092509081016105148382610d18565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0385161790557fae2b2f8bfc19149992ac6068089b09f0a257ff4eeedb0166d0e4e2d1ba4d63c683604051600160a060020a03909116815260200160405180910390a150600192915050565b60008054819033600160a060020a039081169116146105aa57600080fd5b600160a060020a038316600090815260046020526040902054839060ff1615156105d357600080fd5b600160a060020a03841615156105e857600080fd5b6003805460001981019081106105fa57fe5b6000918252602080832090910154600160a060020a038781168452600490925260409092206001015460038054929093169450849291811061063857fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556003805490610681906000198301610d18565b50600160a060020a0380851660008181526004602052604080822060018082015495881684528284200194909455919052815460ff19169091557fd839ffa61d3ed910b7337a017f935faf5be02bd5a69967f30e026f010782110690859051600160a060020a03909116815260200160405180910390a15060019392505050565b60076020528160005260406000208181548110151561071d57fe5b6000918252602090912001549150829050565b600054600160a060020a031681565b600580548290811061074d57fe5b600091825260209091200154905081565b6000805433600160a060020a0390811691161461077a57600080fd5b5060018054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116178155919050565b6004602052600090815260409020805460019091015460ff9091169082565b600154600160a060020a031681565b6000805433600160a060020a039081169116146107f457600080fd5b5060028054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff199091161790556001919050565b600254600160a060020a031681565b60066020819052600091825260409091208054600182015460028301546003840154600485015460058601549590960154600160a060020a03948516969395949092169390929160ff1687565b6002546000908190600160a060020a031681808263a04bdb64888884604051604001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a03909216600483015260248201526044016040805180830381600087803b151561090057600080fd5b6102c65a03f1151561091157600080fd5b50505060405180519060200180519199919850909650505050505050565b600160a060020a0333166000908152600460205260408120548190819060ff16151561095a57600080fd5b60008681526006602081905260409091200154869060ff161561097c57600080fd5b600160a060020a038616151561099157600080fd5b6000851161099e57600080fd5b30600160a060020a031663e5730ffe87876000604051604001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a03909216600483015260248201526044016040805180830381600087803b1515610a1357600080fd5b6102c65a03f11515610a2457600080fd5b5050506040518051906020018051905050925060e06040519081016040908152600160a060020a0333811683526020808401899052908916828401526060830186905242608084015260055460a0840152600160c084015260008a81526006909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055606082015181600301556080820151816004015560a0820151816005015560c0820151600691909101805460ff1916911515919091179055506005805460018101610b3a8382610d18565b506000918252602080832091909101899055600160a060020a03881682526007905260409020805460018101610b708382610d18565b5060009182526020822001889055600154600160a060020a031692508290633135728a9088908890604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610bfb57600080fd5b6102c65a03f11515610c0c57600080fd5b50505060405180519050507f6afcb4971247cd34784ec146e49d413487bc730e60f90879eb0cf32a223a81cf33878988604051600160a060020a0394851681529290931660208301526040808301919091526060820192909252608001905180910390a15060019695505050505050565b60005433600160a060020a03908116911614610c9857600080fd5b600160a060020a0381161515610cad57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b815481835581811511610d3c57600083815260209020610d3c918101908301610d41565b505050565b610d5f91905b80821115610d5b5760008155600101610d47565b5090565b905600a165627a7a72305820d30874eefc2cb7fda96949743dbb9ba5dcd7c84474a54b987576a93bfde558ae0029",
  "deployedBytecode": "0x6060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630fb4052f81146100ea5780633fba58111461011c5780634356f35b146101505780634d0234041461018357806367609d99146101a25780638da5cb5b146101c4578063ab34ee4f146101d7578063c51c20ff146101ed578063d32b0c451461020c578063da334c5814610245578063db5373ab14610258578063e1556b3314610277578063e4c96ac41461028a578063e5730ffe146102ec578063e6c51f2014610326578063f2fde38b1461034b575b600080fd5b34156100f557600080fd5b61010060043561036c565b604051600160a060020a03909116815260200160405180910390f35b341561012757600080fd5b61013e600160a060020a0360043516602435610394565b60405190815260200160405180910390f35b341561015b57600080fd5b61016f600160a060020a036004351661045d565b604051901515815260200160405180910390f35b341561018e57600080fd5b61016f600160a060020a036004351661058c565b34156101ad57600080fd5b61013e600160a060020a0360043516602435610702565b34156101cf57600080fd5b610100610730565b34156101e257600080fd5b61013e60043561073f565b34156101f857600080fd5b61016f600160a060020a036004351661075e565b341561021757600080fd5b61022b600160a060020a03600435166107aa565b604051911515825260208201526040908101905180910390f35b341561025057600080fd5b6101006107c9565b341561026357600080fd5b61016f600160a060020a03600435166107d8565b341561028257600080fd5b610100610826565b341561029557600080fd5b6102a0600435610835565b604051600160a060020a0397881681526020810196909652939095166040808601919091526060850192909252608084015260a0830193909352151560c082015260e001905180910390f35b34156102f757600080fd5b61030e600160a060020a0360043516602435610882565b60405191825260208201526040908101905180910390f35b341561033157600080fd5b61016f600435600160a060020a036024351660443561092f565b341561035657600080fd5b61036a600160a060020a0360043516610c7d565b005b600380548290811061037a57fe5b600091825260209091200154600160a060020a0316905081565b600160a060020a03821660009081526007602052604081208054829190829015156103c25760009350610454565b508054600019015b846006600084848154811015156103dd57fe5b6000918252602080832090910154835282019290925260400190206004015411156104505760066000838381548110151561041457fe5b60009182526020808320909101548352820192909252604001902060010154929092019180151561044757829350610454565b600019016103ca565b8293505b50505092915050565b6000805433600160a060020a0390811691161461047957600080fd5b600160a060020a038216600090815260046020526040902054829060ff16156104a157600080fd5b600160a060020a03831615156104b657600080fd5b60408051908101604090815260018252600354602080840191909152600160a060020a03861660009081526004909152208151815460ff19169015151781556020820151600191820155600380549092509081016105148382610d18565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0385161790557fae2b2f8bfc19149992ac6068089b09f0a257ff4eeedb0166d0e4e2d1ba4d63c683604051600160a060020a03909116815260200160405180910390a150600192915050565b60008054819033600160a060020a039081169116146105aa57600080fd5b600160a060020a038316600090815260046020526040902054839060ff1615156105d357600080fd5b600160a060020a03841615156105e857600080fd5b6003805460001981019081106105fa57fe5b6000918252602080832090910154600160a060020a038781168452600490925260409092206001015460038054929093169450849291811061063857fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556003805490610681906000198301610d18565b50600160a060020a0380851660008181526004602052604080822060018082015495881684528284200194909455919052815460ff19169091557fd839ffa61d3ed910b7337a017f935faf5be02bd5a69967f30e026f010782110690859051600160a060020a03909116815260200160405180910390a15060019392505050565b60076020528160005260406000208181548110151561071d57fe5b6000918252602090912001549150829050565b600054600160a060020a031681565b600580548290811061074d57fe5b600091825260209091200154905081565b6000805433600160a060020a0390811691161461077a57600080fd5b5060018054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116178155919050565b6004602052600090815260409020805460019091015460ff9091169082565b600154600160a060020a031681565b6000805433600160a060020a039081169116146107f457600080fd5b5060028054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff199091161790556001919050565b600254600160a060020a031681565b60066020819052600091825260409091208054600182015460028301546003840154600485015460058601549590960154600160a060020a03948516969395949092169390929160ff1687565b6002546000908190600160a060020a031681808263a04bdb64888884604051604001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a03909216600483015260248201526044016040805180830381600087803b151561090057600080fd5b6102c65a03f1151561091157600080fd5b50505060405180519060200180519199919850909650505050505050565b600160a060020a0333166000908152600460205260408120548190819060ff16151561095a57600080fd5b60008681526006602081905260409091200154869060ff161561097c57600080fd5b600160a060020a038616151561099157600080fd5b6000851161099e57600080fd5b30600160a060020a031663e5730ffe87876000604051604001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a03909216600483015260248201526044016040805180830381600087803b1515610a1357600080fd5b6102c65a03f11515610a2457600080fd5b5050506040518051906020018051905050925060e06040519081016040908152600160a060020a0333811683526020808401899052908916828401526060830186905242608084015260055460a0840152600160c084015260008a81526006909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055606082015181600301556080820151816004015560a0820151816005015560c0820151600691909101805460ff1916911515919091179055506005805460018101610b3a8382610d18565b506000918252602080832091909101899055600160a060020a03881682526007905260409020805460018101610b708382610d18565b5060009182526020822001889055600154600160a060020a031692508290633135728a9088908890604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610bfb57600080fd5b6102c65a03f11515610c0c57600080fd5b50505060405180519050507f6afcb4971247cd34784ec146e49d413487bc730e60f90879eb0cf32a223a81cf33878988604051600160a060020a0394851681529290931660208301526040808301919091526060820192909252608001905180910390a15060019695505050505050565b60005433600160a060020a03908116911614610c9857600080fd5b600160a060020a0381161515610cad57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b815481835581811511610d3c57600083815260209020610d3c918101908301610d41565b505050565b610d5f91905b80821115610d5b5760008155600101610d47565b5090565b905600a165627a7a72305820d30874eefc2cb7fda96949743dbb9ba5dcd7c84474a54b987576a93bfde558ae0029",
  "sourceMap": "185:5288:11:-;;;1728:39;;;;;;;;501:5:13;:18;;-1:-1:-1;;;;;509:10:13;501:18;-1:-1:-1;;;;;;501:18:13;;;;;;185:5288:11;;;;;;",
  "deployedSourceMap": "185:5288:11:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:40;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;423:40:11;;;;;;;;;;;;;;2635:613;;;;;;;;;;-1:-1:-1;;;;;2635:613:11;;;;;;;;;;;;;;;;;;;;;;3254:499;;;;;;;;;;-1:-1:-1;;;;;3254:499:11;;;;;;;;;;;;;;;;;;;;;;3759:725;;;;;;;;;;-1:-1:-1;;;;;3759:725:11;;;;;826:50;;;;;;;;;;-1:-1:-1;;;;;826:50:11;;;;;;;238:20:13;;;;;;;;;;;;744:27:11;;;;;;;;;;;;;;2000:221;;;;;;;;;;-1:-1:-1;;;;;2000:221:11;;;;;469:54;;;;;;;;;;-1:-1:-1;;;;;469:54:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;225:44;;;;;;;;;;;;1773:221;;;;;;;;;;-1:-1:-1;;;;;1773:221:11;;;;;275:44;;;;;;;;;;;;777:43;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;777:43:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2227:402;;;;;;;;;;-1:-1:-1;;;;;2227:402:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;4490:981;;;;;;;;;;;;-1:-1:-1;;;;;4490:981:11;;;;;;;832:169:13;;;;;;;;;;-1:-1:-1;;;;;832:169:13;;;;;;;423:40:11;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;423:40:11;;-1:-1:-1;423:40:11;:::o;2635:613::-;-1:-1:-1;;;;;2825:21:11;;2735:14;2825:21;;;:13;:21;;;;;2869:20;;2735:14;;2825:21;2735:14;;2869:25;2865:64;;;2917:1;2910:8;;;;2865:64;-1:-1:-1;2960:20:11;;-1:-1:-1;;2960:24:11;2939:273;3029:13;2986:8;:30;2995:13;3009:5;2995:20;;;;;;;;;;;;;;;;;;;;;;2986:30;;;;;;;;;;;;:40;;;:56;2939:273;;;3083:8;:30;3092:13;3106:5;3092:20;;;;;;;;;;;;;;;;;;;;;;3083:30;;;;;;;;;;;;:37;;;3067:53;;;;;3138:10;;3134:68;;;3175:12;3168:19;;;;3134:68;-1:-1:-1;;3044:7:11;2939:273;;;3229:12;3222:19;;2635:613;;;;;;;;:::o;3254:499::-;3385:12;653:5:13;;639:10;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;1289:29:11;;;;;;:14;:29;;;;;:38;3359:16;;1289:38;;1288:39;1280:48;;;;;;-1:-1:-1;;;;;3422:30:11;;;;3414:39;;;;;;3499:122;;;;;;;;;;3536:4;3499:122;;3580:23;:30;3499:122;;;;;;;;-1:-1:-1;;;;;3464:32:11;;3499:122;3464:32;;;:14;:32;;;;3499:122;3464:157;;;-1:-1:-1;;3464:157:11;;;;;;;;;;;;;;;;3631:23;:46;;:23;;-1:-1:-1;3631:46:11;;;;:23;:46;;:::i;:::-;-1:-1:-1;3631:46:11;;;;;;;;;;;-1:-1:-1;;3631:46:11;-1:-1:-1;;;;;3631:46:11;;;;;3688:36;3631:46;3688:36;;-1:-1:-1;;;;;3688:36:11;;;;;;;;;;;;;;-1:-1:-1;3742:4:11;;3254:499;-1:-1:-1;;3254:499:11:o;3759:725::-;3900:12;653:5:13;;3900:12:11;;639:10:13;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;1427:29:11;;;;;;:14;:29;;;;;:38;3869:21;;1427:38;;1419:47;;;;;;;;-1:-1:-1;;;;;3937:35:11;;;;3929:44;;;;;;4009:23;4033:30;;-1:-1:-1;;4033:32:11;;;4009:57;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4100:37:11;;;;;:14;:37;;;;;;;4009:57;4100:62;;4076:23;:87;;4009:57;;;;;-1:-1:-1;4009:57:11;;4076:23;:87;;;;;;;;;;;;;;;:96;;-1:-1:-1;;4076:96:11;-1:-1:-1;;;;;4076:96:11;;;;;;;;;;4182:23;:32;;;;;-1:-1:-1;;4182:32:11;;;:::i;:::-;-1:-1:-1;;;;;;4274:37:11;;;;;;;:14;:37;;;;;;:62;;;;;4224:22;;;;;;;;:47;:112;;;;4346:37;;;:54;;-1:-1:-1;;4346:54:11;;;;4411:44;;4289:21;;4411:44;-1:-1:-1;;;;;4411:44:11;;;;;;;;;;;;;;-1:-1:-1;4473:4:11;;3759:725;-1:-1:-1;;;3759:725:11:o;826:50::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;826:50:11;;-1:-1:-1;826:50:11:o;238:20:13:-;;;-1:-1:-1;;;;;238:20:13;;:::o;744:27:11:-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;744:27:11;:::o;2000:221::-;2107:12;653:5:13;;639:10;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;2131:29:11;:62;;-1:-1:-1;;;;;2131:62:11;;-1:-1:-1;;2131:62:11;;;;;;2000:221;;;:::o;469:54::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;225:44::-;;;-1:-1:-1;;;;;225:44:11;;:::o;1773:221::-;1880:12;653:5:13;;639:10;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;1904:29:11;:62;;-1:-1:-1;;;;;1904:62:11;;-1:-1:-1;;1904:62:11;;;;;;;1773:221;;;:::o;275:44::-;;;-1:-1:-1;;;;;275:44:11;;:::o;777:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;777:43:11;;;;;;;;;;;;;;;;;:::o;2227:402::-;2400:29;;2300:14;;;;-1:-1:-1;;;;;2400:29:11;2300:14;;2400:29;2530:31;2562:6;2570:7;2300:14;2530:48;;;;;;;;;;;;;;-1:-1:-1;;;;;2530:48:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2500:78;;;;-1:-1:-1;2227:402:11;;-1:-1:-1;;;;;;;2227:402:11:o;4490:981::-;-1:-1:-1;;;;;1165:10:11;1150:26;4644:12;1150:26;;;:14;:26;;;;;:35;4644:12;;;;1150:35;;1142:44;;;;;;;;1559:18;;;;:8;:18;;;;;;;;:27;;4624:10;;1559:27;;1558:28;1550:37;;;;;;-1:-1:-1;;;;;4722:20:11;;;;4714:29;;;;;;4771:1;4761:11;;4753:20;;;;;;4807:4;-1:-1:-1;;;;;4807:18:11;;4826:6;4834:7;4807:35;;;;;;;;;;;;;;;-1:-1:-1;;;;;4807:35:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4784:58;;;4876:263;;;;;;;;;;-1:-1:-1;;;;;4906:10:11;4876:263;;;;;;;;;;;;;;;;;;;;;;;;5044:3;4876:263;;;;5083:10;:17;4876:263;;;;5124:4;4876:263;;;;-1:-1:-1;4853:20:11;;;:8;:20;;;;4876:263;4853:286;;;-1:-1:-1;;4853:286:11;-1:-1:-1;;;;;4853:286:11;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4853:286:11;-1:-1:-1;;;;;4853:286:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4853:286:11;;;;;;;;;;-1:-1:-1;5150:10:11;:27;;-1:-1:-1;5150:27:11;;;:10;:27;;:::i;:::-;-1:-1:-1;5150:27:11;;;;;;;;;;;;;;;-1:-1:-1;;;;;5187:21:11;;;;:13;:21;;;;;:38;;;;;;:21;:38;;:::i;:::-;-1:-1:-1;5187:38:11;;;;;;;;;;;5283:29;;-1:-1:-1;;;;;5283:29:11;;-1:-1:-1;5283:29:11;;5323:24;;5348:6;;5356:7;;5323:41;;;;;;;;;;;;;;-1:-1:-1;;;;;5323:41:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5383:59;5402:10;5414:6;5422:10;5434:7;5383:59;;-1:-1:-1;;;;;5383:59:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5460:4:11;;4490:981;-1:-1:-1;;;;;;4490:981:11:o;832:169:13:-;653:5;;639:10;-1:-1:-1;;;;;639:19:13;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;908:22:13;;;;900:31;;;;;;958:5;;-1:-1:-1;;;;;937:37:13;;;;958:5;937:37;;;;;;;;;;980:5;:16;;-1:-1:-1;;980:16:13;-1:-1:-1;;;;;980:16:13;;;;;;;;;;832:169::o;185:5288:11:-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./WaterGoverning.sol\";\nimport \"./PriceEstimator/PriceEstimator.sol\";\n\n// TODO Write TESTS\n\ncontract WaterVouchers is Ownable {\n    address public waterGoverningContractAddress;\n    address public priceEstimatorContractAddress;\n\n    struct Intermediary {\n        bool isActive;\n        uint256 intermediariesArrayIndex;\n    }\n    address[] public intermediariesAddresses;\n    mapping(address => Intermediary) public intermediaries;\n\n    struct Voucher {\n        address issuer;\n        uint256 liters;\n        address meter;\n        uint256 totalPrice;\n        uint256 timestamp;\n        uint256 voucherIdsArrayIndex;\n        bool isActive;\n    }\n    bytes32[] public voucherIds;\n    mapping(bytes32 => Voucher) public vouchers;\n    mapping(address => bytes32[]) public meterVouchers;\n\n    event LogAddIntermediary(address _newIntermediary);\n    event LogRemoveIntermediary(address _intermediaryToRemove);\n    event LogPurchaseVoucher(address _issuer, address _meter, bytes32 _voucherId, uint256 _liters);\n\n    modifier onlyIntermediary() {\n        require(intermediaries[msg.sender].isActive);\n        _;\n    }\n\n    modifier onlyNotExistingIntermediary(address _intermediary) {\n        require(!intermediaries[_intermediary].isActive);\n        _;\n    }\n\n    modifier onlyExistingIntermediary(address _intermediary) {\n        require(intermediaries[_intermediary].isActive);\n        _;\n    }\n\n    modifier onlyNotExistingVoucher(bytes32 _voucher) {\n        require(!vouchers[_voucher].isActive);\n        _;\n    }\n\n    modifier onlyExistingVoucher(bytes32 _voucher) {\n        require(vouchers[_voucher].isActive);\n        _;\n    }\n\n    function WaterVouchers() public {\n    }\n\n    function setPriceEstimatorContractAddress(address _priceEstimatorContractAddress) public onlyOwner returns(bool success) {\n        priceEstimatorContractAddress = _priceEstimatorContractAddress;\n        return true;\n    }\n\n    function setWaterGoverningContractAddress(address _waterGoverningContractAddress) public onlyOwner returns(bool success) {\n        waterGoverningContractAddress = _waterGoverningContractAddress;\n        return true;\n    }\n\n    function estimatePrice(address _meter, uint _liters) public view returns(uint256 amount, uint256 price) {    \n        PriceEstimator priceEstimatorContract = PriceEstimator(priceEstimatorContractAddress);\n        uint256 amountResult;\n        uint256 priceResult; \n        (amountResult, priceResult) = priceEstimatorContract.estimate(_meter, _liters);\n        return (amountResult, priceResult);\n    }\n\n    function getLastVoucherLitersInMonth(address _meter, uint256 _timestampEnd) public constant returns(uint256 liters) {\n        uint256 resultLiters;\n        bytes32[] storage voucherIdsLoc = meterVouchers[_meter];\n        \n        if (voucherIdsLoc.length == 0) {\n            return 0;\n        }\n\n        for (uint256 index = voucherIdsLoc.length - 1; vouchers[voucherIdsLoc[index]].timestamp > _timestampEnd; index--) {\n            resultLiters += vouchers[voucherIdsLoc[index]].liters;\n            if (index == 0) {\n                return resultLiters;\n            }\n        }\n\n        return resultLiters;\n    }\n\n    function addIntermediary(address _newIntermediary) \n        public onlyOwner onlyNotExistingIntermediary(_newIntermediary) returns(bool success) \n    {\n        require(_newIntermediary != address(0));\n\n        intermediaries[_newIntermediary] = Intermediary({\n            isActive: true,\n            intermediariesArrayIndex: intermediariesAddresses.length\n        });\n        intermediariesAddresses.push(_newIntermediary);\n\n        LogAddIntermediary(_newIntermediary);\n\n        return true;\n    }\n\n    function removeIntermediary(address _intermediaryToRemove) \n        public onlyOwner onlyExistingIntermediary(_intermediaryToRemove) returns(bool success) \n    {\n        require(_intermediaryToRemove != address(0));\n        \n        address lastId = intermediariesAddresses[intermediariesAddresses.length-1];\n        intermediariesAddresses[intermediaries[_intermediaryToRemove].intermediariesArrayIndex] = lastId;\n        intermediariesAddresses.length--;\n        intermediaries[lastId].intermediariesArrayIndex = intermediaries[_intermediaryToRemove].intermediariesArrayIndex;\n        intermediaries[_intermediaryToRemove].isActive = false;\n\n        LogRemoveIntermediary(_intermediaryToRemove);\n\n        return true;\n    }\n\n    function purchaseVoucher(bytes32 _voucherId, address _meter, uint256 _liters) \n        public onlyIntermediary onlyNotExistingVoucher(_voucherId) returns(bool success) \n    {\n        require(_voucherId.length != 0);\n        require(_meter != address(0));\n        require(_liters > 0);\n\n        var (currentPrice, ) = this.estimatePrice(_meter, _liters);\n\n        vouchers[_voucherId] = Voucher({\n            issuer: msg.sender,\n            liters: _liters,\n            meter: _meter,\n            totalPrice: uint256(currentPrice),\n            timestamp: now,\n            voucherIdsArrayIndex: voucherIds.length,\n            isActive: true\n        });\n\n        voucherIds.push(_voucherId);\n        meterVouchers[_meter].push(_voucherId);\n\n        WaterGoverning waterGoverning = WaterGoverning(waterGoverningContractAddress);\n        waterGoverning.addLiters(_meter, _liters);\n        \n        LogPurchaseVoucher(msg.sender, _meter, _voucherId, _liters);\n\n        return true;\n    }\n}",
  "sourcePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterVouchers.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterVouchers.sol",
      "exportedSymbols": {
        "WaterVouchers": [
          1439
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
        "id": 956,
        "name": "PragmaDirective",
        "src": "0:24:11"
      },
      {
        "attributes": {
          "SourceUnit": 1594,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 1440,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 957,
        "name": "ImportDirective",
        "src": "26:59:11"
      },
      {
        "attributes": {
          "SourceUnit": 955,
          "absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterGoverning.sol",
          "file": "./WaterGoverning.sol",
          "scope": 1440,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 958,
        "name": "ImportDirective",
        "src": "86:30:11"
      },
      {
        "attributes": {
          "SourceUnit": 717,
          "absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/PriceEstimator/PriceEstimator.sol",
          "file": "./PriceEstimator/PriceEstimator.sol",
          "scope": 1440,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 959,
        "name": "ImportDirective",
        "src": "117:45:11"
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
            1439,
            1593
          ],
          "name": "WaterVouchers",
          "scope": 1440
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
                "id": 960,
                "name": "UserDefinedTypeName",
                "src": "211:7:11"
              }
            ],
            "id": 961,
            "name": "InheritanceSpecifier",
            "src": "211:7:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "waterGoverningContractAddress",
              "scope": 1439,
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
                "id": 962,
                "name": "ElementaryTypeName",
                "src": "225:7:11"
              }
            ],
            "id": 963,
            "name": "VariableDeclaration",
            "src": "225:44:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "priceEstimatorContractAddress",
              "scope": 1439,
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
                "id": 964,
                "name": "ElementaryTypeName",
                "src": "275:7:11"
              }
            ],
            "id": 965,
            "name": "VariableDeclaration",
            "src": "275:44:11"
          },
          {
            "attributes": {
              "canonicalName": "WaterVouchers.Intermediary",
              "name": "Intermediary",
              "scope": 1439,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "isActive",
                  "scope": 970,
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
                    "id": 966,
                    "name": "ElementaryTypeName",
                    "src": "356:4:11"
                  }
                ],
                "id": 967,
                "name": "VariableDeclaration",
                "src": "356:13:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "intermediariesArrayIndex",
                  "scope": 970,
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
                    "id": 968,
                    "name": "ElementaryTypeName",
                    "src": "379:7:11"
                  }
                ],
                "id": 969,
                "name": "VariableDeclaration",
                "src": "379:32:11"
              }
            ],
            "id": 970,
            "name": "StructDefinition",
            "src": "326:92:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "intermediariesAddresses",
              "scope": 1439,
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
                    "id": 971,
                    "name": "ElementaryTypeName",
                    "src": "423:7:11"
                  }
                ],
                "id": 972,
                "name": "ArrayTypeName",
                "src": "423:9:11"
              }
            ],
            "id": 973,
            "name": "VariableDeclaration",
            "src": "423:40:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "intermediaries",
              "scope": 1439,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 974,
                    "name": "ElementaryTypeName",
                    "src": "477:7:11"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Intermediary",
                      "referencedDeclaration": 970,
                      "type": "struct WaterVouchers.Intermediary storage pointer"
                    },
                    "id": 975,
                    "name": "UserDefinedTypeName",
                    "src": "488:12:11"
                  }
                ],
                "id": 976,
                "name": "Mapping",
                "src": "469:32:11"
              }
            ],
            "id": 977,
            "name": "VariableDeclaration",
            "src": "469:54:11"
          },
          {
            "attributes": {
              "canonicalName": "WaterVouchers.Voucher",
              "name": "Voucher",
              "scope": 1439,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "issuer",
                  "scope": 992,
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
                    "id": 978,
                    "name": "ElementaryTypeName",
                    "src": "555:7:11"
                  }
                ],
                "id": 979,
                "name": "VariableDeclaration",
                "src": "555:14:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "liters",
                  "scope": 992,
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
                    "id": 980,
                    "name": "ElementaryTypeName",
                    "src": "579:7:11"
                  }
                ],
                "id": 981,
                "name": "VariableDeclaration",
                "src": "579:14:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "meter",
                  "scope": 992,
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
                    "id": 982,
                    "name": "ElementaryTypeName",
                    "src": "603:7:11"
                  }
                ],
                "id": 983,
                "name": "VariableDeclaration",
                "src": "603:13:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "totalPrice",
                  "scope": 992,
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
                    "id": 984,
                    "name": "ElementaryTypeName",
                    "src": "626:7:11"
                  }
                ],
                "id": 985,
                "name": "VariableDeclaration",
                "src": "626:18:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "timestamp",
                  "scope": 992,
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
                    "id": 986,
                    "name": "ElementaryTypeName",
                    "src": "654:7:11"
                  }
                ],
                "id": 987,
                "name": "VariableDeclaration",
                "src": "654:17:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "voucherIdsArrayIndex",
                  "scope": 992,
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
                    "id": 988,
                    "name": "ElementaryTypeName",
                    "src": "681:7:11"
                  }
                ],
                "id": 989,
                "name": "VariableDeclaration",
                "src": "681:28:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "isActive",
                  "scope": 992,
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
                    "id": 990,
                    "name": "ElementaryTypeName",
                    "src": "719:4:11"
                  }
                ],
                "id": 991,
                "name": "VariableDeclaration",
                "src": "719:13:11"
              }
            ],
            "id": 992,
            "name": "StructDefinition",
            "src": "530:209:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "voucherIds",
              "scope": 1439,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32[] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "bytes32[] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 993,
                    "name": "ElementaryTypeName",
                    "src": "744:7:11"
                  }
                ],
                "id": 994,
                "name": "ArrayTypeName",
                "src": "744:9:11"
              }
            ],
            "id": 995,
            "name": "VariableDeclaration",
            "src": "744:27:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "vouchers",
              "scope": 1439,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 996,
                    "name": "ElementaryTypeName",
                    "src": "785:7:11"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Voucher",
                      "referencedDeclaration": 992,
                      "type": "struct WaterVouchers.Voucher storage pointer"
                    },
                    "id": 997,
                    "name": "UserDefinedTypeName",
                    "src": "796:7:11"
                  }
                ],
                "id": 998,
                "name": "Mapping",
                "src": "777:27:11"
              }
            ],
            "id": 999,
            "name": "VariableDeclaration",
            "src": "777:43:11"
          },
          {
            "attributes": {
              "constant": false,
              "name": "meterVouchers",
              "scope": 1439,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => bytes32[] storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 1000,
                    "name": "ElementaryTypeName",
                    "src": "834:7:11"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1001,
                        "name": "ElementaryTypeName",
                        "src": "845:7:11"
                      }
                    ],
                    "id": 1002,
                    "name": "ArrayTypeName",
                    "src": "845:9:11"
                  }
                ],
                "id": 1003,
                "name": "Mapping",
                "src": "826:29:11"
              }
            ],
            "id": 1004,
            "name": "VariableDeclaration",
            "src": "826:50:11"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogAddIntermediary"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_newIntermediary",
                      "scope": 1008,
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
                        "id": 1005,
                        "name": "ElementaryTypeName",
                        "src": "908:7:11"
                      }
                    ],
                    "id": 1006,
                    "name": "VariableDeclaration",
                    "src": "908:24:11"
                  }
                ],
                "id": 1007,
                "name": "ParameterList",
                "src": "907:26:11"
              }
            ],
            "id": 1008,
            "name": "EventDefinition",
            "src": "883:51:11"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogRemoveIntermediary"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_intermediaryToRemove",
                      "scope": 1012,
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
                        "id": 1009,
                        "name": "ElementaryTypeName",
                        "src": "967:7:11"
                      }
                    ],
                    "id": 1010,
                    "name": "VariableDeclaration",
                    "src": "967:29:11"
                  }
                ],
                "id": 1011,
                "name": "ParameterList",
                "src": "966:31:11"
              }
            ],
            "id": 1012,
            "name": "EventDefinition",
            "src": "939:59:11"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogPurchaseVoucher"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_issuer",
                      "scope": 1022,
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
                        "id": 1013,
                        "name": "ElementaryTypeName",
                        "src": "1028:7:11"
                      }
                    ],
                    "id": 1014,
                    "name": "VariableDeclaration",
                    "src": "1028:15:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_meter",
                      "scope": 1022,
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
                        "id": 1015,
                        "name": "ElementaryTypeName",
                        "src": "1045:7:11"
                      }
                    ],
                    "id": 1016,
                    "name": "VariableDeclaration",
                    "src": "1045:14:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_voucherId",
                      "scope": 1022,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1017,
                        "name": "ElementaryTypeName",
                        "src": "1061:7:11"
                      }
                    ],
                    "id": 1018,
                    "name": "VariableDeclaration",
                    "src": "1061:18:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_liters",
                      "scope": 1022,
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
                        "id": 1019,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:11"
                      }
                    ],
                    "id": 1020,
                    "name": "VariableDeclaration",
                    "src": "1081:15:11"
                  }
                ],
                "id": 1021,
                "name": "ParameterList",
                "src": "1027:70:11"
              }
            ],
            "id": 1022,
            "name": "EventDefinition",
            "src": "1003:95:11"
          },
          {
            "attributes": {
              "name": "onlyIntermediary",
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
                "id": 1023,
                "name": "ParameterList",
                "src": "1129:2:11"
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
                            "id": 1024,
                            "name": "Identifier",
                            "src": "1142:7:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isActive",
                              "referencedDeclaration": 967,
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
                                  "type": "struct WaterVouchers.Intermediary storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 977,
                                      "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                      "value": "intermediaries"
                                    },
                                    "id": 1025,
                                    "name": "Identifier",
                                    "src": "1150:14:11"
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
                                        "id": 1026,
                                        "name": "Identifier",
                                        "src": "1165:3:11"
                                      }
                                    ],
                                    "id": 1027,
                                    "name": "MemberAccess",
                                    "src": "1165:10:11"
                                  }
                                ],
                                "id": 1028,
                                "name": "IndexAccess",
                                "src": "1150:26:11"
                              }
                            ],
                            "id": 1029,
                            "name": "MemberAccess",
                            "src": "1150:35:11"
                          }
                        ],
                        "id": 1030,
                        "name": "FunctionCall",
                        "src": "1142:44:11"
                      }
                    ],
                    "id": 1031,
                    "name": "ExpressionStatement",
                    "src": "1142:44:11"
                  },
                  {
                    "id": 1032,
                    "name": "PlaceholderStatement",
                    "src": "1196:1:11"
                  }
                ],
                "id": 1033,
                "name": "Block",
                "src": "1132:72:11"
              }
            ],
            "id": 1034,
            "name": "ModifierDefinition",
            "src": "1104:100:11"
          },
          {
            "attributes": {
              "name": "onlyNotExistingIntermediary",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_intermediary",
                      "scope": 1048,
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
                        "id": 1035,
                        "name": "ElementaryTypeName",
                        "src": "1247:7:11"
                      }
                    ],
                    "id": 1036,
                    "name": "VariableDeclaration",
                    "src": "1247:21:11"
                  }
                ],
                "id": 1037,
                "name": "ParameterList",
                "src": "1246:23:11"
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
                            "id": 1038,
                            "name": "Identifier",
                            "src": "1280:7:11"
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
                                  "referencedDeclaration": 967,
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
                                      "type": "struct WaterVouchers.Intermediary storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 977,
                                          "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                          "value": "intermediaries"
                                        },
                                        "id": 1039,
                                        "name": "Identifier",
                                        "src": "1289:14:11"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1036,
                                          "type": "address",
                                          "value": "_intermediary"
                                        },
                                        "id": 1040,
                                        "name": "Identifier",
                                        "src": "1304:13:11"
                                      }
                                    ],
                                    "id": 1041,
                                    "name": "IndexAccess",
                                    "src": "1289:29:11"
                                  }
                                ],
                                "id": 1042,
                                "name": "MemberAccess",
                                "src": "1289:38:11"
                              }
                            ],
                            "id": 1043,
                            "name": "UnaryOperation",
                            "src": "1288:39:11"
                          }
                        ],
                        "id": 1044,
                        "name": "FunctionCall",
                        "src": "1280:48:11"
                      }
                    ],
                    "id": 1045,
                    "name": "ExpressionStatement",
                    "src": "1280:48:11"
                  },
                  {
                    "id": 1046,
                    "name": "PlaceholderStatement",
                    "src": "1338:1:11"
                  }
                ],
                "id": 1047,
                "name": "Block",
                "src": "1270:76:11"
              }
            ],
            "id": 1048,
            "name": "ModifierDefinition",
            "src": "1210:136:11"
          },
          {
            "attributes": {
              "name": "onlyExistingIntermediary",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_intermediary",
                      "scope": 1061,
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
                        "id": 1049,
                        "name": "ElementaryTypeName",
                        "src": "1386:7:11"
                      }
                    ],
                    "id": 1050,
                    "name": "VariableDeclaration",
                    "src": "1386:21:11"
                  }
                ],
                "id": 1051,
                "name": "ParameterList",
                "src": "1385:23:11"
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
                            "id": 1052,
                            "name": "Identifier",
                            "src": "1419:7:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isActive",
                              "referencedDeclaration": 967,
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
                                  "type": "struct WaterVouchers.Intermediary storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 977,
                                      "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                      "value": "intermediaries"
                                    },
                                    "id": 1053,
                                    "name": "Identifier",
                                    "src": "1427:14:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1050,
                                      "type": "address",
                                      "value": "_intermediary"
                                    },
                                    "id": 1054,
                                    "name": "Identifier",
                                    "src": "1442:13:11"
                                  }
                                ],
                                "id": 1055,
                                "name": "IndexAccess",
                                "src": "1427:29:11"
                              }
                            ],
                            "id": 1056,
                            "name": "MemberAccess",
                            "src": "1427:38:11"
                          }
                        ],
                        "id": 1057,
                        "name": "FunctionCall",
                        "src": "1419:47:11"
                      }
                    ],
                    "id": 1058,
                    "name": "ExpressionStatement",
                    "src": "1419:47:11"
                  },
                  {
                    "id": 1059,
                    "name": "PlaceholderStatement",
                    "src": "1476:1:11"
                  }
                ],
                "id": 1060,
                "name": "Block",
                "src": "1409:75:11"
              }
            ],
            "id": 1061,
            "name": "ModifierDefinition",
            "src": "1352:132:11"
          },
          {
            "attributes": {
              "name": "onlyNotExistingVoucher",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_voucher",
                      "scope": 1075,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1062,
                        "name": "ElementaryTypeName",
                        "src": "1522:7:11"
                      }
                    ],
                    "id": 1063,
                    "name": "VariableDeclaration",
                    "src": "1522:16:11"
                  }
                ],
                "id": 1064,
                "name": "ParameterList",
                "src": "1521:18:11"
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
                            "id": 1065,
                            "name": "Identifier",
                            "src": "1550:7:11"
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
                                  "referencedDeclaration": 991,
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
                                      "type": "struct WaterVouchers.Voucher storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 999,
                                          "type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
                                          "value": "vouchers"
                                        },
                                        "id": 1066,
                                        "name": "Identifier",
                                        "src": "1559:8:11"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1063,
                                          "type": "bytes32",
                                          "value": "_voucher"
                                        },
                                        "id": 1067,
                                        "name": "Identifier",
                                        "src": "1568:8:11"
                                      }
                                    ],
                                    "id": 1068,
                                    "name": "IndexAccess",
                                    "src": "1559:18:11"
                                  }
                                ],
                                "id": 1069,
                                "name": "MemberAccess",
                                "src": "1559:27:11"
                              }
                            ],
                            "id": 1070,
                            "name": "UnaryOperation",
                            "src": "1558:28:11"
                          }
                        ],
                        "id": 1071,
                        "name": "FunctionCall",
                        "src": "1550:37:11"
                      }
                    ],
                    "id": 1072,
                    "name": "ExpressionStatement",
                    "src": "1550:37:11"
                  },
                  {
                    "id": 1073,
                    "name": "PlaceholderStatement",
                    "src": "1597:1:11"
                  }
                ],
                "id": 1074,
                "name": "Block",
                "src": "1540:65:11"
              }
            ],
            "id": 1075,
            "name": "ModifierDefinition",
            "src": "1490:115:11"
          },
          {
            "attributes": {
              "name": "onlyExistingVoucher",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_voucher",
                      "scope": 1088,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1076,
                        "name": "ElementaryTypeName",
                        "src": "1640:7:11"
                      }
                    ],
                    "id": 1077,
                    "name": "VariableDeclaration",
                    "src": "1640:16:11"
                  }
                ],
                "id": 1078,
                "name": "ParameterList",
                "src": "1639:18:11"
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
                            "id": 1079,
                            "name": "Identifier",
                            "src": "1668:7:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isActive",
                              "referencedDeclaration": 991,
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
                                  "type": "struct WaterVouchers.Voucher storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 999,
                                      "type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
                                      "value": "vouchers"
                                    },
                                    "id": 1080,
                                    "name": "Identifier",
                                    "src": "1676:8:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1077,
                                      "type": "bytes32",
                                      "value": "_voucher"
                                    },
                                    "id": 1081,
                                    "name": "Identifier",
                                    "src": "1685:8:11"
                                  }
                                ],
                                "id": 1082,
                                "name": "IndexAccess",
                                "src": "1676:18:11"
                              }
                            ],
                            "id": 1083,
                            "name": "MemberAccess",
                            "src": "1676:27:11"
                          }
                        ],
                        "id": 1084,
                        "name": "FunctionCall",
                        "src": "1668:36:11"
                      }
                    ],
                    "id": 1085,
                    "name": "ExpressionStatement",
                    "src": "1668:36:11"
                  },
                  {
                    "id": 1086,
                    "name": "PlaceholderStatement",
                    "src": "1714:1:11"
                  }
                ],
                "id": 1087,
                "name": "Block",
                "src": "1658:64:11"
              }
            ],
            "id": 1088,
            "name": "ModifierDefinition",
            "src": "1611:111:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "WaterVouchers",
              "payable": false,
              "scope": 1439,
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
                "id": 1089,
                "name": "ParameterList",
                "src": "1750:2:11"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1090,
                "name": "ParameterList",
                "src": "1760:0:11"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 1091,
                "name": "Block",
                "src": "1760:7:11"
              }
            ],
            "id": 1092,
            "name": "FunctionDefinition",
            "src": "1728:39:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setPriceEstimatorContractAddress",
              "payable": false,
              "scope": 1439,
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
                      "name": "_priceEstimatorContractAddress",
                      "scope": 1108,
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
                        "id": 1093,
                        "name": "ElementaryTypeName",
                        "src": "1815:7:11"
                      }
                    ],
                    "id": 1094,
                    "name": "VariableDeclaration",
                    "src": "1815:38:11"
                  }
                ],
                "id": 1095,
                "name": "ParameterList",
                "src": "1814:40:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 1108,
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
                        "id": 1098,
                        "name": "ElementaryTypeName",
                        "src": "1880:4:11"
                      }
                    ],
                    "id": 1099,
                    "name": "VariableDeclaration",
                    "src": "1880:12:11"
                  }
                ],
                "id": 1100,
                "name": "ParameterList",
                "src": "1879:14:11"
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
                    "id": 1096,
                    "name": "Identifier",
                    "src": "1862:9:11"
                  }
                ],
                "id": 1097,
                "name": "ModifierInvocation",
                "src": "1862:9:11"
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
                              "referencedDeclaration": 965,
                              "type": "address",
                              "value": "priceEstimatorContractAddress"
                            },
                            "id": 1101,
                            "name": "Identifier",
                            "src": "1904:29:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1094,
                              "type": "address",
                              "value": "_priceEstimatorContractAddress"
                            },
                            "id": 1102,
                            "name": "Identifier",
                            "src": "1936:30:11"
                          }
                        ],
                        "id": 1103,
                        "name": "Assignment",
                        "src": "1904:62:11"
                      }
                    ],
                    "id": 1104,
                    "name": "ExpressionStatement",
                    "src": "1904:62:11"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1100
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
                        "id": 1105,
                        "name": "Literal",
                        "src": "1983:4:11"
                      }
                    ],
                    "id": 1106,
                    "name": "Return",
                    "src": "1976:11:11"
                  }
                ],
                "id": 1107,
                "name": "Block",
                "src": "1894:100:11"
              }
            ],
            "id": 1108,
            "name": "FunctionDefinition",
            "src": "1773:221:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setWaterGoverningContractAddress",
              "payable": false,
              "scope": 1439,
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
                      "name": "_waterGoverningContractAddress",
                      "scope": 1124,
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
                        "id": 1109,
                        "name": "ElementaryTypeName",
                        "src": "2042:7:11"
                      }
                    ],
                    "id": 1110,
                    "name": "VariableDeclaration",
                    "src": "2042:38:11"
                  }
                ],
                "id": 1111,
                "name": "ParameterList",
                "src": "2041:40:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 1124,
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
                        "id": 1114,
                        "name": "ElementaryTypeName",
                        "src": "2107:4:11"
                      }
                    ],
                    "id": 1115,
                    "name": "VariableDeclaration",
                    "src": "2107:12:11"
                  }
                ],
                "id": 1116,
                "name": "ParameterList",
                "src": "2106:14:11"
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
                    "id": 1112,
                    "name": "Identifier",
                    "src": "2089:9:11"
                  }
                ],
                "id": 1113,
                "name": "ModifierInvocation",
                "src": "2089:9:11"
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
                              "referencedDeclaration": 963,
                              "type": "address",
                              "value": "waterGoverningContractAddress"
                            },
                            "id": 1117,
                            "name": "Identifier",
                            "src": "2131:29:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1110,
                              "type": "address",
                              "value": "_waterGoverningContractAddress"
                            },
                            "id": 1118,
                            "name": "Identifier",
                            "src": "2163:30:11"
                          }
                        ],
                        "id": 1119,
                        "name": "Assignment",
                        "src": "2131:62:11"
                      }
                    ],
                    "id": 1120,
                    "name": "ExpressionStatement",
                    "src": "2131:62:11"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1116
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
                        "id": 1121,
                        "name": "Literal",
                        "src": "2210:4:11"
                      }
                    ],
                    "id": 1122,
                    "name": "Return",
                    "src": "2203:11:11"
                  }
                ],
                "id": 1123,
                "name": "Block",
                "src": "2121:100:11"
              }
            ],
            "id": 1124,
            "name": "FunctionDefinition",
            "src": "2000:221:11"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "estimatePrice",
              "payable": false,
              "scope": 1439,
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
                      "scope": 1162,
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
                        "id": 1125,
                        "name": "ElementaryTypeName",
                        "src": "2250:7:11"
                      }
                    ],
                    "id": 1126,
                    "name": "VariableDeclaration",
                    "src": "2250:14:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_liters",
                      "scope": 1162,
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
                        "id": 1127,
                        "name": "ElementaryTypeName",
                        "src": "2266:4:11"
                      }
                    ],
                    "id": 1128,
                    "name": "VariableDeclaration",
                    "src": "2266:12:11"
                  }
                ],
                "id": 1129,
                "name": "ParameterList",
                "src": "2249:30:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 1162,
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
                        "id": 1130,
                        "name": "ElementaryTypeName",
                        "src": "2300:7:11"
                      }
                    ],
                    "id": 1131,
                    "name": "VariableDeclaration",
                    "src": "2300:14:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "price",
                      "scope": 1162,
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
                        "id": 1132,
                        "name": "ElementaryTypeName",
                        "src": "2316:7:11"
                      }
                    ],
                    "id": 1133,
                    "name": "VariableDeclaration",
                    "src": "2316:13:11"
                  }
                ],
                "id": 1134,
                "name": "ParameterList",
                "src": "2299:31:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1136
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "priceEstimatorContract",
                          "scope": 1162,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract PriceEstimator",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "PriceEstimator",
                              "referencedDeclaration": 716,
                              "type": "contract PriceEstimator"
                            },
                            "id": 1135,
                            "name": "UserDefinedTypeName",
                            "src": "2345:14:11"
                          }
                        ],
                        "id": 1136,
                        "name": "VariableDeclaration",
                        "src": "2345:37:11"
                      },
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
                          "type": "contract PriceEstimator",
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 716,
                              "type": "type(contract PriceEstimator)",
                              "value": "PriceEstimator"
                            },
                            "id": 1137,
                            "name": "Identifier",
                            "src": "2385:14:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 965,
                              "type": "address",
                              "value": "priceEstimatorContractAddress"
                            },
                            "id": 1138,
                            "name": "Identifier",
                            "src": "2400:29:11"
                          }
                        ],
                        "id": 1139,
                        "name": "FunctionCall",
                        "src": "2385:45:11"
                      }
                    ],
                    "id": 1140,
                    "name": "VariableDeclarationStatement",
                    "src": "2345:85:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amountResult",
                          "scope": 1162,
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
                            "id": 1141,
                            "name": "ElementaryTypeName",
                            "src": "2440:7:11"
                          }
                        ],
                        "id": 1142,
                        "name": "VariableDeclaration",
                        "src": "2440:20:11"
                      }
                    ],
                    "id": 1143,
                    "name": "VariableDeclarationStatement",
                    "src": "2440:20:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "priceResult",
                          "scope": 1162,
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
                            "id": 1144,
                            "name": "ElementaryTypeName",
                            "src": "2470:7:11"
                          }
                        ],
                        "id": 1145,
                        "name": "VariableDeclaration",
                        "src": "2470:19:11"
                      }
                    ],
                    "id": 1146,
                    "name": "VariableDeclarationStatement",
                    "src": "2470:19:11"
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
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1142,
                                  "type": "uint256",
                                  "value": "amountResult"
                                },
                                "id": 1147,
                                "name": "Identifier",
                                "src": "2501:12:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1145,
                                  "type": "uint256",
                                  "value": "priceResult"
                                },
                                "id": 1148,
                                "name": "Identifier",
                                "src": "2515:11:11"
                              }
                            ],
                            "id": 1149,
                            "name": "TupleExpression",
                            "src": "2500:27:11"
                          },
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
                              "type": "tuple(uint256,uint256)",
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
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "estimate",
                                  "referencedDeclaration": 715,
                                  "type": "function (address,uint256) view external returns (uint256,uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1136,
                                      "type": "contract PriceEstimator",
                                      "value": "priceEstimatorContract"
                                    },
                                    "id": 1150,
                                    "name": "Identifier",
                                    "src": "2530:22:11"
                                  }
                                ],
                                "id": 1151,
                                "name": "MemberAccess",
                                "src": "2530:31:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1126,
                                  "type": "address",
                                  "value": "_meter"
                                },
                                "id": 1152,
                                "name": "Identifier",
                                "src": "2562:6:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1128,
                                  "type": "uint256",
                                  "value": "_liters"
                                },
                                "id": 1153,
                                "name": "Identifier",
                                "src": "2570:7:11"
                              }
                            ],
                            "id": 1154,
                            "name": "FunctionCall",
                            "src": "2530:48:11"
                          }
                        ],
                        "id": 1155,
                        "name": "Assignment",
                        "src": "2500:78:11"
                      }
                    ],
                    "id": 1156,
                    "name": "ExpressionStatement",
                    "src": "2500:78:11"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1134
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint256,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1142,
                              "type": "uint256",
                              "value": "amountResult"
                            },
                            "id": 1157,
                            "name": "Identifier",
                            "src": "2596:12:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1145,
                              "type": "uint256",
                              "value": "priceResult"
                            },
                            "id": 1158,
                            "name": "Identifier",
                            "src": "2610:11:11"
                          }
                        ],
                        "id": 1159,
                        "name": "TupleExpression",
                        "src": "2595:27:11"
                      }
                    ],
                    "id": 1160,
                    "name": "Return",
                    "src": "2588:34:11"
                  }
                ],
                "id": 1161,
                "name": "Block",
                "src": "2331:298:11"
              }
            ],
            "id": 1162,
            "name": "FunctionDefinition",
            "src": "2227:402:11"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getLastVoucherLitersInMonth",
              "payable": false,
              "scope": 1439,
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
                      "scope": 1229,
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
                        "id": 1163,
                        "name": "ElementaryTypeName",
                        "src": "2672:7:11"
                      }
                    ],
                    "id": 1164,
                    "name": "VariableDeclaration",
                    "src": "2672:14:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_timestampEnd",
                      "scope": 1229,
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
                        "id": 1165,
                        "name": "ElementaryTypeName",
                        "src": "2688:7:11"
                      }
                    ],
                    "id": 1166,
                    "name": "VariableDeclaration",
                    "src": "2688:21:11"
                  }
                ],
                "id": 1167,
                "name": "ParameterList",
                "src": "2671:39:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "liters",
                      "scope": 1229,
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
                        "id": 1168,
                        "name": "ElementaryTypeName",
                        "src": "2735:7:11"
                      }
                    ],
                    "id": 1169,
                    "name": "VariableDeclaration",
                    "src": "2735:14:11"
                  }
                ],
                "id": 1170,
                "name": "ParameterList",
                "src": "2734:16:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "resultLiters",
                          "scope": 1229,
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
                            "id": 1171,
                            "name": "ElementaryTypeName",
                            "src": "2761:7:11"
                          }
                        ],
                        "id": 1172,
                        "name": "VariableDeclaration",
                        "src": "2761:20:11"
                      }
                    ],
                    "id": 1173,
                    "name": "VariableDeclarationStatement",
                    "src": "2761:20:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1177
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "voucherIdsLoc",
                          "scope": 1229,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "bytes32[] storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "bytes32[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 1175,
                                "name": "ElementaryTypeName",
                                "src": "2791:7:11"
                              }
                            ],
                            "id": 1176,
                            "name": "ArrayTypeName",
                            "src": "2791:9:11"
                          }
                        ],
                        "id": 1177,
                        "name": "VariableDeclaration",
                        "src": "2791:31:11"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1004,
                              "type": "mapping(address => bytes32[] storage ref)",
                              "value": "meterVouchers"
                            },
                            "id": 1178,
                            "name": "Identifier",
                            "src": "2825:13:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1164,
                              "type": "address",
                              "value": "_meter"
                            },
                            "id": 1179,
                            "name": "Identifier",
                            "src": "2839:6:11"
                          }
                        ],
                        "id": 1180,
                        "name": "IndexAccess",
                        "src": "2825:21:11"
                      }
                    ],
                    "id": 1181,
                    "name": "VariableDeclarationStatement",
                    "src": "2791:55:11"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
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
                          "operator": "==",
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
                                  "referencedDeclaration": 1177,
                                  "type": "bytes32[] storage pointer",
                                  "value": "voucherIdsLoc"
                                },
                                "id": 1182,
                                "name": "Identifier",
                                "src": "2869:13:11"
                              }
                            ],
                            "id": 1183,
                            "name": "MemberAccess",
                            "src": "2869:20:11"
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
                            "id": 1184,
                            "name": "Literal",
                            "src": "2893:1:11"
                          }
                        ],
                        "id": 1185,
                        "name": "BinaryOperation",
                        "src": "2869:25:11"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 1170
                            },
                            "children": [
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
                                "id": 1186,
                                "name": "Literal",
                                "src": "2917:1:11"
                              }
                            ],
                            "id": 1187,
                            "name": "Return",
                            "src": "2910:8:11"
                          }
                        ],
                        "id": 1188,
                        "name": "Block",
                        "src": "2896:33:11"
                      }
                    ],
                    "id": 1189,
                    "name": "IfStatement",
                    "src": "2865:64:11"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            1191
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "index",
                              "scope": 1229,
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
                                "id": 1190,
                                "name": "ElementaryTypeName",
                                "src": "2944:7:11"
                              }
                            ],
                            "id": 1191,
                            "name": "VariableDeclaration",
                            "src": "2944:13:11"
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
                                      "referencedDeclaration": 1177,
                                      "type": "bytes32[] storage pointer",
                                      "value": "voucherIdsLoc"
                                    },
                                    "id": 1192,
                                    "name": "Identifier",
                                    "src": "2960:13:11"
                                  }
                                ],
                                "id": 1193,
                                "name": "MemberAccess",
                                "src": "2960:20:11"
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
                                "id": 1194,
                                "name": "Literal",
                                "src": "2983:1:11"
                              }
                            ],
                            "id": 1195,
                            "name": "BinaryOperation",
                            "src": "2960:24:11"
                          }
                        ],
                        "id": 1196,
                        "name": "VariableDeclarationStatement",
                        "src": "2944:40:11"
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "timestamp",
                              "referencedDeclaration": 987,
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
                                  "type": "struct WaterVouchers.Voucher storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 999,
                                      "type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
                                      "value": "vouchers"
                                    },
                                    "id": 1197,
                                    "name": "Identifier",
                                    "src": "2986:8:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "bytes32"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1177,
                                          "type": "bytes32[] storage pointer",
                                          "value": "voucherIdsLoc"
                                        },
                                        "id": 1198,
                                        "name": "Identifier",
                                        "src": "2995:13:11"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1191,
                                          "type": "uint256",
                                          "value": "index"
                                        },
                                        "id": 1199,
                                        "name": "Identifier",
                                        "src": "3009:5:11"
                                      }
                                    ],
                                    "id": 1200,
                                    "name": "IndexAccess",
                                    "src": "2995:20:11"
                                  }
                                ],
                                "id": 1201,
                                "name": "IndexAccess",
                                "src": "2986:30:11"
                              }
                            ],
                            "id": 1202,
                            "name": "MemberAccess",
                            "src": "2986:40:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1166,
                              "type": "uint256",
                              "value": "_timestampEnd"
                            },
                            "id": 1203,
                            "name": "Identifier",
                            "src": "3029:13:11"
                          }
                        ],
                        "id": 1204,
                        "name": "BinaryOperation",
                        "src": "2986:56:11"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1191,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 1205,
                                "name": "Identifier",
                                "src": "3044:5:11"
                              }
                            ],
                            "id": 1206,
                            "name": "UnaryOperation",
                            "src": "3044:7:11"
                          }
                        ],
                        "id": 1207,
                        "name": "ExpressionStatement",
                        "src": "3044:7:11"
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
                                  "operator": "+=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1172,
                                      "type": "uint256",
                                      "value": "resultLiters"
                                    },
                                    "id": 1208,
                                    "name": "Identifier",
                                    "src": "3067:12:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "liters",
                                      "referencedDeclaration": 981,
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
                                          "type": "struct WaterVouchers.Voucher storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 999,
                                              "type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
                                              "value": "vouchers"
                                            },
                                            "id": 1209,
                                            "name": "Identifier",
                                            "src": "3083:8:11"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "bytes32"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1177,
                                                  "type": "bytes32[] storage pointer",
                                                  "value": "voucherIdsLoc"
                                                },
                                                "id": 1210,
                                                "name": "Identifier",
                                                "src": "3092:13:11"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1191,
                                                  "type": "uint256",
                                                  "value": "index"
                                                },
                                                "id": 1211,
                                                "name": "Identifier",
                                                "src": "3106:5:11"
                                              }
                                            ],
                                            "id": 1212,
                                            "name": "IndexAccess",
                                            "src": "3092:20:11"
                                          }
                                        ],
                                        "id": 1213,
                                        "name": "IndexAccess",
                                        "src": "3083:30:11"
                                      }
                                    ],
                                    "id": 1214,
                                    "name": "MemberAccess",
                                    "src": "3083:37:11"
                                  }
                                ],
                                "id": 1215,
                                "name": "Assignment",
                                "src": "3067:53:11"
                              }
                            ],
                            "id": 1216,
                            "name": "ExpressionStatement",
                            "src": "3067:53:11"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
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
                                      "referencedDeclaration": 1191,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 1217,
                                    "name": "Identifier",
                                    "src": "3138:5:11"
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
                                    "id": 1218,
                                    "name": "Literal",
                                    "src": "3147:1:11"
                                  }
                                ],
                                "id": 1219,
                                "name": "BinaryOperation",
                                "src": "3138:10:11"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 1170
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1172,
                                          "type": "uint256",
                                          "value": "resultLiters"
                                        },
                                        "id": 1220,
                                        "name": "Identifier",
                                        "src": "3175:12:11"
                                      }
                                    ],
                                    "id": 1221,
                                    "name": "Return",
                                    "src": "3168:19:11"
                                  }
                                ],
                                "id": 1222,
                                "name": "Block",
                                "src": "3150:52:11"
                              }
                            ],
                            "id": 1223,
                            "name": "IfStatement",
                            "src": "3134:68:11"
                          }
                        ],
                        "id": 1224,
                        "name": "Block",
                        "src": "3053:159:11"
                      }
                    ],
                    "id": 1225,
                    "name": "ForStatement",
                    "src": "2939:273:11"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1170
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1172,
                          "type": "uint256",
                          "value": "resultLiters"
                        },
                        "id": 1226,
                        "name": "Identifier",
                        "src": "3229:12:11"
                      }
                    ],
                    "id": 1227,
                    "name": "Return",
                    "src": "3222:19:11"
                  }
                ],
                "id": 1228,
                "name": "Block",
                "src": "2751:497:11"
              }
            ],
            "id": 1229,
            "name": "FunctionDefinition",
            "src": "2635:613:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addIntermediary",
              "payable": false,
              "scope": 1439,
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
                      "name": "_newIntermediary",
                      "scope": 1272,
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
                        "id": 1230,
                        "name": "ElementaryTypeName",
                        "src": "3279:7:11"
                      }
                    ],
                    "id": 1231,
                    "name": "VariableDeclaration",
                    "src": "3279:24:11"
                  }
                ],
                "id": 1232,
                "name": "ParameterList",
                "src": "3278:26:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 1272,
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
                        "id": 1238,
                        "name": "ElementaryTypeName",
                        "src": "3385:4:11"
                      }
                    ],
                    "id": 1239,
                    "name": "VariableDeclaration",
                    "src": "3385:12:11"
                  }
                ],
                "id": 1240,
                "name": "ParameterList",
                "src": "3384:14:11"
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
                    "id": 1233,
                    "name": "Identifier",
                    "src": "3321:9:11"
                  }
                ],
                "id": 1234,
                "name": "ModifierInvocation",
                "src": "3321:9:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1048,
                      "type": "modifier (address)",
                      "value": "onlyNotExistingIntermediary"
                    },
                    "id": 1235,
                    "name": "Identifier",
                    "src": "3331:27:11"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1231,
                      "type": "address",
                      "value": "_newIntermediary"
                    },
                    "id": 1236,
                    "name": "Identifier",
                    "src": "3359:16:11"
                  }
                ],
                "id": 1237,
                "name": "ModifierInvocation",
                "src": "3331:45:11"
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
                            "id": 1241,
                            "name": "Identifier",
                            "src": "3414:7:11"
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
                                  "referencedDeclaration": 1231,
                                  "type": "address",
                                  "value": "_newIntermediary"
                                },
                                "id": 1242,
                                "name": "Identifier",
                                "src": "3422:16:11"
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
                                    "id": 1243,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3442:7:11"
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
                                    "id": 1244,
                                    "name": "Literal",
                                    "src": "3450:1:11"
                                  }
                                ],
                                "id": 1245,
                                "name": "FunctionCall",
                                "src": "3442:10:11"
                              }
                            ],
                            "id": 1246,
                            "name": "BinaryOperation",
                            "src": "3422:30:11"
                          }
                        ],
                        "id": 1247,
                        "name": "FunctionCall",
                        "src": "3414:39:11"
                      }
                    ],
                    "id": 1248,
                    "name": "ExpressionStatement",
                    "src": "3414:39:11"
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
                          "type": "struct WaterVouchers.Intermediary storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct WaterVouchers.Intermediary storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 977,
                                  "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                  "value": "intermediaries"
                                },
                                "id": 1249,
                                "name": "Identifier",
                                "src": "3464:14:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1231,
                                  "type": "address",
                                  "value": "_newIntermediary"
                                },
                                "id": 1250,
                                "name": "Identifier",
                                "src": "3479:16:11"
                              }
                            ],
                            "id": 1251,
                            "name": "IndexAccess",
                            "src": "3464:32:11"
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
                                "intermediariesArrayIndex"
                              ],
                              "type": "struct WaterVouchers.Intermediary memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 970,
                                  "type": "type(struct WaterVouchers.Intermediary storage pointer)",
                                  "value": "Intermediary"
                                },
                                "id": 1252,
                                "name": "Identifier",
                                "src": "3499:12:11"
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
                                "id": 1253,
                                "name": "Literal",
                                "src": "3536:4:11"
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
                                      "referencedDeclaration": 973,
                                      "type": "address[] storage ref",
                                      "value": "intermediariesAddresses"
                                    },
                                    "id": 1254,
                                    "name": "Identifier",
                                    "src": "3580:23:11"
                                  }
                                ],
                                "id": 1255,
                                "name": "MemberAccess",
                                "src": "3580:30:11"
                              }
                            ],
                            "id": 1256,
                            "name": "FunctionCall",
                            "src": "3499:122:11"
                          }
                        ],
                        "id": 1257,
                        "name": "Assignment",
                        "src": "3464:157:11"
                      }
                    ],
                    "id": 1258,
                    "name": "ExpressionStatement",
                    "src": "3464:157:11"
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
                                  "referencedDeclaration": 973,
                                  "type": "address[] storage ref",
                                  "value": "intermediariesAddresses"
                                },
                                "id": 1259,
                                "name": "Identifier",
                                "src": "3631:23:11"
                              }
                            ],
                            "id": 1261,
                            "name": "MemberAccess",
                            "src": "3631:28:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1231,
                              "type": "address",
                              "value": "_newIntermediary"
                            },
                            "id": 1262,
                            "name": "Identifier",
                            "src": "3660:16:11"
                          }
                        ],
                        "id": 1263,
                        "name": "FunctionCall",
                        "src": "3631:46:11"
                      }
                    ],
                    "id": 1264,
                    "name": "ExpressionStatement",
                    "src": "3631:46:11"
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
                              "referencedDeclaration": 1008,
                              "type": "function (address)",
                              "value": "LogAddIntermediary"
                            },
                            "id": 1265,
                            "name": "Identifier",
                            "src": "3688:18:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1231,
                              "type": "address",
                              "value": "_newIntermediary"
                            },
                            "id": 1266,
                            "name": "Identifier",
                            "src": "3707:16:11"
                          }
                        ],
                        "id": 1267,
                        "name": "FunctionCall",
                        "src": "3688:36:11"
                      }
                    ],
                    "id": 1268,
                    "name": "ExpressionStatement",
                    "src": "3688:36:11"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1240
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
                        "id": 1269,
                        "name": "Literal",
                        "src": "3742:4:11"
                      }
                    ],
                    "id": 1270,
                    "name": "Return",
                    "src": "3735:11:11"
                  }
                ],
                "id": 1271,
                "name": "Block",
                "src": "3404:349:11"
              }
            ],
            "id": 1272,
            "name": "FunctionDefinition",
            "src": "3254:499:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "removeIntermediary",
              "payable": false,
              "scope": 1439,
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
                      "name": "_intermediaryToRemove",
                      "scope": 1339,
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
                        "id": 1273,
                        "name": "ElementaryTypeName",
                        "src": "3787:7:11"
                      }
                    ],
                    "id": 1274,
                    "name": "VariableDeclaration",
                    "src": "3787:29:11"
                  }
                ],
                "id": 1275,
                "name": "ParameterList",
                "src": "3786:31:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 1339,
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
                        "id": 1281,
                        "name": "ElementaryTypeName",
                        "src": "3900:4:11"
                      }
                    ],
                    "id": 1282,
                    "name": "VariableDeclaration",
                    "src": "3900:12:11"
                  }
                ],
                "id": 1283,
                "name": "ParameterList",
                "src": "3899:14:11"
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
                    "id": 1276,
                    "name": "Identifier",
                    "src": "3834:9:11"
                  }
                ],
                "id": 1277,
                "name": "ModifierInvocation",
                "src": "3834:9:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1061,
                      "type": "modifier (address)",
                      "value": "onlyExistingIntermediary"
                    },
                    "id": 1278,
                    "name": "Identifier",
                    "src": "3844:24:11"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1274,
                      "type": "address",
                      "value": "_intermediaryToRemove"
                    },
                    "id": 1279,
                    "name": "Identifier",
                    "src": "3869:21:11"
                  }
                ],
                "id": 1280,
                "name": "ModifierInvocation",
                "src": "3844:47:11"
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
                            "id": 1284,
                            "name": "Identifier",
                            "src": "3929:7:11"
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
                                  "referencedDeclaration": 1274,
                                  "type": "address",
                                  "value": "_intermediaryToRemove"
                                },
                                "id": 1285,
                                "name": "Identifier",
                                "src": "3937:21:11"
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
                                    "id": 1286,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3962:7:11"
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
                                    "id": 1287,
                                    "name": "Literal",
                                    "src": "3970:1:11"
                                  }
                                ],
                                "id": 1288,
                                "name": "FunctionCall",
                                "src": "3962:10:11"
                              }
                            ],
                            "id": 1289,
                            "name": "BinaryOperation",
                            "src": "3937:35:11"
                          }
                        ],
                        "id": 1290,
                        "name": "FunctionCall",
                        "src": "3929:44:11"
                      }
                    ],
                    "id": 1291,
                    "name": "ExpressionStatement",
                    "src": "3929:44:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1293
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "lastId",
                          "scope": 1339,
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
                            "id": 1292,
                            "name": "ElementaryTypeName",
                            "src": "3992:7:11"
                          }
                        ],
                        "id": 1293,
                        "name": "VariableDeclaration",
                        "src": "3992:14:11"
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
                              "referencedDeclaration": 973,
                              "type": "address[] storage ref",
                              "value": "intermediariesAddresses"
                            },
                            "id": 1294,
                            "name": "Identifier",
                            "src": "4009:23:11"
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
                                      "referencedDeclaration": 973,
                                      "type": "address[] storage ref",
                                      "value": "intermediariesAddresses"
                                    },
                                    "id": 1295,
                                    "name": "Identifier",
                                    "src": "4033:23:11"
                                  }
                                ],
                                "id": 1296,
                                "name": "MemberAccess",
                                "src": "4033:30:11"
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
                                "id": 1297,
                                "name": "Literal",
                                "src": "4064:1:11"
                              }
                            ],
                            "id": 1298,
                            "name": "BinaryOperation",
                            "src": "4033:32:11"
                          }
                        ],
                        "id": 1299,
                        "name": "IndexAccess",
                        "src": "4009:57:11"
                      }
                    ],
                    "id": 1300,
                    "name": "VariableDeclarationStatement",
                    "src": "3992:74:11"
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
                                  "referencedDeclaration": 973,
                                  "type": "address[] storage ref",
                                  "value": "intermediariesAddresses"
                                },
                                "id": 1301,
                                "name": "Identifier",
                                "src": "4076:23:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "intermediariesArrayIndex",
                                  "referencedDeclaration": 969,
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
                                      "type": "struct WaterVouchers.Intermediary storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 977,
                                          "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                          "value": "intermediaries"
                                        },
                                        "id": 1302,
                                        "name": "Identifier",
                                        "src": "4100:14:11"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1274,
                                          "type": "address",
                                          "value": "_intermediaryToRemove"
                                        },
                                        "id": 1303,
                                        "name": "Identifier",
                                        "src": "4115:21:11"
                                      }
                                    ],
                                    "id": 1304,
                                    "name": "IndexAccess",
                                    "src": "4100:37:11"
                                  }
                                ],
                                "id": 1305,
                                "name": "MemberAccess",
                                "src": "4100:62:11"
                              }
                            ],
                            "id": 1306,
                            "name": "IndexAccess",
                            "src": "4076:87:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1293,
                              "type": "address",
                              "value": "lastId"
                            },
                            "id": 1307,
                            "name": "Identifier",
                            "src": "4166:6:11"
                          }
                        ],
                        "id": 1308,
                        "name": "Assignment",
                        "src": "4076:96:11"
                      }
                    ],
                    "id": 1309,
                    "name": "ExpressionStatement",
                    "src": "4076:96:11"
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
                                  "referencedDeclaration": 973,
                                  "type": "address[] storage ref",
                                  "value": "intermediariesAddresses"
                                },
                                "id": 1310,
                                "name": "Identifier",
                                "src": "4182:23:11"
                              }
                            ],
                            "id": 1312,
                            "name": "MemberAccess",
                            "src": "4182:30:11"
                          }
                        ],
                        "id": 1313,
                        "name": "UnaryOperation",
                        "src": "4182:32:11"
                      }
                    ],
                    "id": 1314,
                    "name": "ExpressionStatement",
                    "src": "4182:32:11"
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
                              "member_name": "intermediariesArrayIndex",
                              "referencedDeclaration": 969,
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
                                  "type": "struct WaterVouchers.Intermediary storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 977,
                                      "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                      "value": "intermediaries"
                                    },
                                    "id": 1315,
                                    "name": "Identifier",
                                    "src": "4224:14:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1293,
                                      "type": "address",
                                      "value": "lastId"
                                    },
                                    "id": 1316,
                                    "name": "Identifier",
                                    "src": "4239:6:11"
                                  }
                                ],
                                "id": 1317,
                                "name": "IndexAccess",
                                "src": "4224:22:11"
                              }
                            ],
                            "id": 1318,
                            "name": "MemberAccess",
                            "src": "4224:47:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "intermediariesArrayIndex",
                              "referencedDeclaration": 969,
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
                                  "type": "struct WaterVouchers.Intermediary storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 977,
                                      "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                      "value": "intermediaries"
                                    },
                                    "id": 1319,
                                    "name": "Identifier",
                                    "src": "4274:14:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1274,
                                      "type": "address",
                                      "value": "_intermediaryToRemove"
                                    },
                                    "id": 1320,
                                    "name": "Identifier",
                                    "src": "4289:21:11"
                                  }
                                ],
                                "id": 1321,
                                "name": "IndexAccess",
                                "src": "4274:37:11"
                              }
                            ],
                            "id": 1322,
                            "name": "MemberAccess",
                            "src": "4274:62:11"
                          }
                        ],
                        "id": 1323,
                        "name": "Assignment",
                        "src": "4224:112:11"
                      }
                    ],
                    "id": 1324,
                    "name": "ExpressionStatement",
                    "src": "4224:112:11"
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
                              "referencedDeclaration": 967,
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
                                  "type": "struct WaterVouchers.Intermediary storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 977,
                                      "type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
                                      "value": "intermediaries"
                                    },
                                    "id": 1325,
                                    "name": "Identifier",
                                    "src": "4346:14:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1274,
                                      "type": "address",
                                      "value": "_intermediaryToRemove"
                                    },
                                    "id": 1326,
                                    "name": "Identifier",
                                    "src": "4361:21:11"
                                  }
                                ],
                                "id": 1327,
                                "name": "IndexAccess",
                                "src": "4346:37:11"
                              }
                            ],
                            "id": 1328,
                            "name": "MemberAccess",
                            "src": "4346:46:11"
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
                            "id": 1329,
                            "name": "Literal",
                            "src": "4395:5:11"
                          }
                        ],
                        "id": 1330,
                        "name": "Assignment",
                        "src": "4346:54:11"
                      }
                    ],
                    "id": 1331,
                    "name": "ExpressionStatement",
                    "src": "4346:54:11"
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
                              "referencedDeclaration": 1012,
                              "type": "function (address)",
                              "value": "LogRemoveIntermediary"
                            },
                            "id": 1332,
                            "name": "Identifier",
                            "src": "4411:21:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1274,
                              "type": "address",
                              "value": "_intermediaryToRemove"
                            },
                            "id": 1333,
                            "name": "Identifier",
                            "src": "4433:21:11"
                          }
                        ],
                        "id": 1334,
                        "name": "FunctionCall",
                        "src": "4411:44:11"
                      }
                    ],
                    "id": 1335,
                    "name": "ExpressionStatement",
                    "src": "4411:44:11"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1283
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
                        "id": 1336,
                        "name": "Literal",
                        "src": "4473:4:11"
                      }
                    ],
                    "id": 1337,
                    "name": "Return",
                    "src": "4466:11:11"
                  }
                ],
                "id": 1338,
                "name": "Block",
                "src": "3919:565:11"
              }
            ],
            "id": 1339,
            "name": "FunctionDefinition",
            "src": "3759:725:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "purchaseVoucher",
              "payable": false,
              "scope": 1439,
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
                      "name": "_voucherId",
                      "scope": 1438,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1340,
                        "name": "ElementaryTypeName",
                        "src": "4515:7:11"
                      }
                    ],
                    "id": 1341,
                    "name": "VariableDeclaration",
                    "src": "4515:18:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_meter",
                      "scope": 1438,
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
                        "id": 1342,
                        "name": "ElementaryTypeName",
                        "src": "4535:7:11"
                      }
                    ],
                    "id": 1343,
                    "name": "VariableDeclaration",
                    "src": "4535:14:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_liters",
                      "scope": 1438,
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
                        "id": 1344,
                        "name": "ElementaryTypeName",
                        "src": "4551:7:11"
                      }
                    ],
                    "id": 1345,
                    "name": "VariableDeclaration",
                    "src": "4551:15:11"
                  }
                ],
                "id": 1346,
                "name": "ParameterList",
                "src": "4514:53:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 1438,
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
                        "id": 1352,
                        "name": "ElementaryTypeName",
                        "src": "4644:4:11"
                      }
                    ],
                    "id": 1353,
                    "name": "VariableDeclaration",
                    "src": "4644:12:11"
                  }
                ],
                "id": 1354,
                "name": "ParameterList",
                "src": "4643:14:11"
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
                      "referencedDeclaration": 1034,
                      "type": "modifier ()",
                      "value": "onlyIntermediary"
                    },
                    "id": 1347,
                    "name": "Identifier",
                    "src": "4584:16:11"
                  }
                ],
                "id": 1348,
                "name": "ModifierInvocation",
                "src": "4584:16:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1075,
                      "type": "modifier (bytes32)",
                      "value": "onlyNotExistingVoucher"
                    },
                    "id": 1349,
                    "name": "Identifier",
                    "src": "4601:22:11"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1341,
                      "type": "bytes32",
                      "value": "_voucherId"
                    },
                    "id": 1350,
                    "name": "Identifier",
                    "src": "4624:10:11"
                  }
                ],
                "id": 1351,
                "name": "ModifierInvocation",
                "src": "4601:34:11"
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
                            "id": 1355,
                            "name": "Identifier",
                            "src": "4673:7:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
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
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint8"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1341,
                                      "type": "bytes32",
                                      "value": "_voucherId"
                                    },
                                    "id": 1356,
                                    "name": "Identifier",
                                    "src": "4681:10:11"
                                  }
                                ],
                                "id": 1357,
                                "name": "MemberAccess",
                                "src": "4681:17:11"
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
                                "id": 1358,
                                "name": "Literal",
                                "src": "4702:1:11"
                              }
                            ],
                            "id": 1359,
                            "name": "BinaryOperation",
                            "src": "4681:22:11"
                          }
                        ],
                        "id": 1360,
                        "name": "FunctionCall",
                        "src": "4673:31:11"
                      }
                    ],
                    "id": 1361,
                    "name": "ExpressionStatement",
                    "src": "4673:31:11"
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
                            "id": 1362,
                            "name": "Identifier",
                            "src": "4714:7:11"
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
                                  "referencedDeclaration": 1343,
                                  "type": "address",
                                  "value": "_meter"
                                },
                                "id": 1363,
                                "name": "Identifier",
                                "src": "4722:6:11"
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
                                    "id": 1364,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4732:7:11"
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
                                    "id": 1365,
                                    "name": "Literal",
                                    "src": "4740:1:11"
                                  }
                                ],
                                "id": 1366,
                                "name": "FunctionCall",
                                "src": "4732:10:11"
                              }
                            ],
                            "id": 1367,
                            "name": "BinaryOperation",
                            "src": "4722:20:11"
                          }
                        ],
                        "id": 1368,
                        "name": "FunctionCall",
                        "src": "4714:29:11"
                      }
                    ],
                    "id": 1369,
                    "name": "ExpressionStatement",
                    "src": "4714:29:11"
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
                            "id": 1370,
                            "name": "Identifier",
                            "src": "4753:7:11"
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
                                  "referencedDeclaration": 1345,
                                  "type": "uint256",
                                  "value": "_liters"
                                },
                                "id": 1371,
                                "name": "Identifier",
                                "src": "4761:7:11"
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
                                "id": 1372,
                                "name": "Literal",
                                "src": "4771:1:11"
                              }
                            ],
                            "id": 1373,
                            "name": "BinaryOperation",
                            "src": "4761:11:11"
                          }
                        ],
                        "id": 1374,
                        "name": "FunctionCall",
                        "src": "4753:20:11"
                      }
                    ],
                    "id": 1375,
                    "name": "ExpressionStatement",
                    "src": "4753:20:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1376,
                        null
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "currentPrice",
                          "scope": 1438,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "typeName": null,
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [],
                        "id": 1376,
                        "name": "VariableDeclaration",
                        "src": "4789:12:11"
                      },
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
                          "type": "tuple(uint256,uint256)",
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "estimatePrice",
                              "referencedDeclaration": 1162,
                              "type": "function (address,uint256) view external returns (uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1626,
                                  "type": "contract WaterVouchers",
                                  "value": "this"
                                },
                                "id": 1377,
                                "name": "Identifier",
                                "src": "4807:4:11"
                              }
                            ],
                            "id": 1378,
                            "name": "MemberAccess",
                            "src": "4807:18:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1343,
                              "type": "address",
                              "value": "_meter"
                            },
                            "id": 1379,
                            "name": "Identifier",
                            "src": "4826:6:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1345,
                              "type": "uint256",
                              "value": "_liters"
                            },
                            "id": 1380,
                            "name": "Identifier",
                            "src": "4834:7:11"
                          }
                        ],
                        "id": 1381,
                        "name": "FunctionCall",
                        "src": "4807:35:11"
                      }
                    ],
                    "id": 1382,
                    "name": "VariableDeclarationStatement",
                    "src": "4784:58:11"
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
                          "type": "struct WaterVouchers.Voucher storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct WaterVouchers.Voucher storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 999,
                                  "type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
                                  "value": "vouchers"
                                },
                                "id": 1383,
                                "name": "Identifier",
                                "src": "4853:8:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1341,
                                  "type": "bytes32",
                                  "value": "_voucherId"
                                },
                                "id": 1384,
                                "name": "Identifier",
                                "src": "4862:10:11"
                              }
                            ],
                            "id": 1385,
                            "name": "IndexAccess",
                            "src": "4853:20:11"
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
                                "issuer",
                                "liters",
                                "meter",
                                "totalPrice",
                                "timestamp",
                                "voucherIdsArrayIndex",
                                "isActive"
                              ],
                              "type": "struct WaterVouchers.Voucher memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 992,
                                  "type": "type(struct WaterVouchers.Voucher storage pointer)",
                                  "value": "Voucher"
                                },
                                "id": 1386,
                                "name": "Identifier",
                                "src": "4876:7:11"
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
                                    "id": 1387,
                                    "name": "Identifier",
                                    "src": "4906:3:11"
                                  }
                                ],
                                "id": 1388,
                                "name": "MemberAccess",
                                "src": "4906:10:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1345,
                                  "type": "uint256",
                                  "value": "_liters"
                                },
                                "id": 1389,
                                "name": "Identifier",
                                "src": "4938:7:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1343,
                                  "type": "address",
                                  "value": "_meter"
                                },
                                "id": 1390,
                                "name": "Identifier",
                                "src": "4966:6:11"
                              },
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
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint256"
                                    },
                                    "id": 1391,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4998:7:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1376,
                                      "type": "uint256",
                                      "value": "currentPrice"
                                    },
                                    "id": 1392,
                                    "name": "Identifier",
                                    "src": "5006:12:11"
                                  }
                                ],
                                "id": 1393,
                                "name": "FunctionCall",
                                "src": "4998:21:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1607,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 1394,
                                "name": "Identifier",
                                "src": "5044:3:11"
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
                                      "referencedDeclaration": 995,
                                      "type": "bytes32[] storage ref",
                                      "value": "voucherIds"
                                    },
                                    "id": 1395,
                                    "name": "Identifier",
                                    "src": "5083:10:11"
                                  }
                                ],
                                "id": 1396,
                                "name": "MemberAccess",
                                "src": "5083:17:11"
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
                                "id": 1397,
                                "name": "Literal",
                                "src": "5124:4:11"
                              }
                            ],
                            "id": 1398,
                            "name": "FunctionCall",
                            "src": "4876:263:11"
                          }
                        ],
                        "id": 1399,
                        "name": "Assignment",
                        "src": "4853:286:11"
                      }
                    ],
                    "id": 1400,
                    "name": "ExpressionStatement",
                    "src": "4853:286:11"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 995,
                                  "type": "bytes32[] storage ref",
                                  "value": "voucherIds"
                                },
                                "id": 1401,
                                "name": "Identifier",
                                "src": "5150:10:11"
                              }
                            ],
                            "id": 1403,
                            "name": "MemberAccess",
                            "src": "5150:15:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1341,
                              "type": "bytes32",
                              "value": "_voucherId"
                            },
                            "id": 1404,
                            "name": "Identifier",
                            "src": "5166:10:11"
                          }
                        ],
                        "id": 1405,
                        "name": "FunctionCall",
                        "src": "5150:27:11"
                      }
                    ],
                    "id": 1406,
                    "name": "ExpressionStatement",
                    "src": "5150:27:11"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1004,
                                      "type": "mapping(address => bytes32[] storage ref)",
                                      "value": "meterVouchers"
                                    },
                                    "id": 1407,
                                    "name": "Identifier",
                                    "src": "5187:13:11"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1343,
                                      "type": "address",
                                      "value": "_meter"
                                    },
                                    "id": 1408,
                                    "name": "Identifier",
                                    "src": "5201:6:11"
                                  }
                                ],
                                "id": 1409,
                                "name": "IndexAccess",
                                "src": "5187:21:11"
                              }
                            ],
                            "id": 1410,
                            "name": "MemberAccess",
                            "src": "5187:26:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1341,
                              "type": "bytes32",
                              "value": "_voucherId"
                            },
                            "id": 1411,
                            "name": "Identifier",
                            "src": "5214:10:11"
                          }
                        ],
                        "id": 1412,
                        "name": "FunctionCall",
                        "src": "5187:38:11"
                      }
                    ],
                    "id": 1413,
                    "name": "ExpressionStatement",
                    "src": "5187:38:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1415
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "waterGoverning",
                          "scope": 1438,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract WaterGoverning",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "WaterGoverning",
                              "referencedDeclaration": 954,
                              "type": "contract WaterGoverning"
                            },
                            "id": 1414,
                            "name": "UserDefinedTypeName",
                            "src": "5236:14:11"
                          }
                        ],
                        "id": 1415,
                        "name": "VariableDeclaration",
                        "src": "5236:29:11"
                      },
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
                          "type": "contract WaterGoverning",
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 954,
                              "type": "type(contract WaterGoverning)",
                              "value": "WaterGoverning"
                            },
                            "id": 1416,
                            "name": "Identifier",
                            "src": "5268:14:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 963,
                              "type": "address",
                              "value": "waterGoverningContractAddress"
                            },
                            "id": 1417,
                            "name": "Identifier",
                            "src": "5283:29:11"
                          }
                        ],
                        "id": 1418,
                        "name": "FunctionCall",
                        "src": "5268:45:11"
                      }
                    ],
                    "id": 1419,
                    "name": "VariableDeclarationStatement",
                    "src": "5236:77:11"
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
                          "type": "bool",
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "addLiters",
                              "referencedDeclaration": 953,
                              "type": "function (address,uint256) external returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1415,
                                  "type": "contract WaterGoverning",
                                  "value": "waterGoverning"
                                },
                                "id": 1420,
                                "name": "Identifier",
                                "src": "5323:14:11"
                              }
                            ],
                            "id": 1422,
                            "name": "MemberAccess",
                            "src": "5323:24:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1343,
                              "type": "address",
                              "value": "_meter"
                            },
                            "id": 1423,
                            "name": "Identifier",
                            "src": "5348:6:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1345,
                              "type": "uint256",
                              "value": "_liters"
                            },
                            "id": 1424,
                            "name": "Identifier",
                            "src": "5356:7:11"
                          }
                        ],
                        "id": 1425,
                        "name": "FunctionCall",
                        "src": "5323:41:11"
                      }
                    ],
                    "id": 1426,
                    "name": "ExpressionStatement",
                    "src": "5323:41:11"
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
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1022,
                              "type": "function (address,address,bytes32,uint256)",
                              "value": "LogPurchaseVoucher"
                            },
                            "id": 1427,
                            "name": "Identifier",
                            "src": "5383:18:11"
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
                                "id": 1428,
                                "name": "Identifier",
                                "src": "5402:3:11"
                              }
                            ],
                            "id": 1429,
                            "name": "MemberAccess",
                            "src": "5402:10:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1343,
                              "type": "address",
                              "value": "_meter"
                            },
                            "id": 1430,
                            "name": "Identifier",
                            "src": "5414:6:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1341,
                              "type": "bytes32",
                              "value": "_voucherId"
                            },
                            "id": 1431,
                            "name": "Identifier",
                            "src": "5422:10:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1345,
                              "type": "uint256",
                              "value": "_liters"
                            },
                            "id": 1432,
                            "name": "Identifier",
                            "src": "5434:7:11"
                          }
                        ],
                        "id": 1433,
                        "name": "FunctionCall",
                        "src": "5383:59:11"
                      }
                    ],
                    "id": 1434,
                    "name": "ExpressionStatement",
                    "src": "5383:59:11"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1354
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
                        "id": 1435,
                        "name": "Literal",
                        "src": "5460:4:11"
                      }
                    ],
                    "id": 1436,
                    "name": "Return",
                    "src": "5453:11:11"
                  }
                ],
                "id": 1437,
                "name": "Block",
                "src": "4663:808:11"
              }
            ],
            "id": 1438,
            "name": "FunctionDefinition",
            "src": "4490:981:11"
          }
        ],
        "id": 1439,
        "name": "ContractDefinition",
        "src": "185:5288:11"
      }
    ],
    "id": 1440,
    "name": "SourceUnit",
    "src": "0:5473:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x9fbda871d559710256a2502a2517b794b482db40"
    },
    "1517395492641": {
      "events": {},
      "links": {},
      "address": "0x305b8dda35b2e9b395e63ad7b4e845859ab3ab4e"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-31T12:59:22.701Z"
}