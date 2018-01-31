pragma solidity ^0.4.18;

import "./../Upgradeability/UpgradeableProxy.sol";

contract PriceEstimatorProxy is UpgradeableProxy {
	function PriceEstimatorProxy(address initialImplementation) public UpgradeableProxy(initialImplementation) {}
}