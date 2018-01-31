pragma solidity ^0.4.18;

contract WaterGoverning {
    address public voucherContractAddress;
    mapping(address => uint) public meterLiters;

    event LogAddLiters(address _meter, uint _liters, uint _totalAvailable);

    modifier onlyVoucherContract() {
        require(voucherContractAddress == msg.sender);
        _;
    }

    function WaterGoverning(address _voucherContract) public {
        voucherContractAddress = _voucherContract;
    }

    function addLiters(address _meter, uint _liters) public onlyVoucherContract returns(bool success) {
        require(_meter != address(0));
        require(_liters > 0);

        meterLiters[_meter] += _liters;
        LogAddLiters(_meter, _liters, meterLiters[_meter]);

        return true;
    }
}