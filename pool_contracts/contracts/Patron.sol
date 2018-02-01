pragma solidity ^0.4.17;
/**
 * The Patron contract does this and that...
 */

 import 'zeppelin/contracts/token/StandardToken.sol';
 import 'zeppelin/contracts/ownership/Ownable.sol';
 import 'oraclize/contracts/usingOraclize.sol';

 contract Patron is StandardToken, usingOraclize, Ownable {
  using SafeMath for int256;

  string public name ;
  string public symbol;
  uint8 public constant decimals = 18;
  uint256 public constant INITIAL_SUPPLY = 10;

  StandardToken public baseToken;
  uint256 baseTokenDecimals;

  uint256 public oraclizeGasLimit = 200000;
  uint256 public oraclizeGasPrice = 4000000000;

  mapping (address => Subscription) subscriptions;
  uint256 activeSubscribers;
  uint256 monthlyProjected;

  address[] subscriptionKeys;
  uint256 subscriptionPercentMultiplyer = 1000;
  struct Subscription {
    bool exists;
    bool active;

    uint256 amount;
    uint256 percentToPatron; //  max 100

    uint256 toPatronTotal;
    uint256 toOwnerTotal;
    uint256 interval;
    uint256 start;
    uint256 last;
  }
  mapping (bytes32 => address) oraclizeIds;

  uint256 public increaser;
  uint256 public baseDivisionHelper;
  uint256 public baseCost; // 1 ETH / baseToken
  uint256 public costPerToken = 0; // 1 baseToken / token
  uint256 public totalEverMinted;
  uint256 public totalEverWithdrawn;
  uint256 public poolBalance;
  uint256 public graphMultiplyer; // max 10000 (fraction)
  uint256 public graphMultiplyerDivisor = 10000;
  enum GraphType { GraphLinear, GraphExponential, GraphLogarithmic }
  GraphType graphType;


  /* events */
  event LogUint(uint number);
  event Paid(address patron, uint256 amount);
  event AlertEmptyPledge(address patron);
  event AlertEmptyOracle(address patron);
  event LogCostOfTokenUpdate(uint costOfTokenUpdate);
  event LogMint(uint256 totalMinted, uint256 totalCost);
  event LogUnmint(uint256 totalMinted, uint256 totalCost);

  function Patron (string _name, string _symbol, address _baseToken, uint256 _baseTokenDecimals, uint256 _graphType, uint256 _graphMultiplyer) payable {
    name = _name;
    symbol = _symbol;

    baseToken = StandardToken(_baseToken);
    baseTokenDecimals = _baseTokenDecimals;
    baseCost = 0; //10 ** baseTokenDecimals;
    increaser = 10 ** ( baseTokenDecimals );

    if (_graphType == 2) {
      graphType = GraphType.GraphLogarithmic;
    } else if (_graphType == 1) {
      graphType = GraphType.GraphExponential;
    } else {
      graphType = GraphType.GraphLinear;
    }

    graphMultiplyer =_graphMultiplyer;
    updateCostOfToken();
    OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475);
  }


  function returnSubscriptionsLength() public constant returns(uint256 length) {
    return subscriptionKeys.length;
  }
  function returnPatronByKey(uint256 subscriptionKey) public constant returns(bool active, uint256 amount, uint256 percentToPatron, uint256 toPatronTotal, uint256 toOwnerTotal, uint256 start, uint256 last) {
    address patron = subscriptionKeys[subscriptionKey];
    return returnPatronByAddress(patron);
  }
  function returnPatronByAddress(address patron) public constant returns(bool active, uint256 amount, uint256 percentToPatron, uint256 toPatronTotal, uint256 toOwnerTotal, uint256 start, uint256 last) {
    Subscription s = subscriptions[patron];
    return (s.active, s.amount, s.percentToPatron, s.toPatronTotal, s.toOwnerTotal, s.start, s.last);
  }


  function mint(address patron, uint256 amount) public returns (uint256 totalMinted, uint256 totalCost) {
    if (msg.sender != patron && msg.sender != oraclize_cbAddress() && patron != owner) revert();
    if (amount == 0) revert();

    (totalMinted, totalCost) = calculateMintTokenPerToken(amount);
    if (totalCost == 0) {
      return (totalMinted, totalCost);
    }

    totalEverMinted = totalEverMinted.add(totalMinted);
    totalSupply = totalSupply.add(totalMinted);
    balances[patron] = balances[patron].add(totalMinted);
    poolBalance = poolBalance.add(totalCost);

    updateCostOfToken();

    if (!baseToken.transferFrom(patron, address(this), totalCost)) revert();

    LogMint(totalMinted, totalCost);
    return (totalMinted, totalCost);
  }

  function calculateMintTokenPerToken (uint256 amount) public constant returns (uint256 , uint256 ) {

    uint dai0 = baseToken.balanceOf(address(this)).div(10**18);
    uint dai1 = amount;

    uint totalTokens = ( sqrt( dai0.add(dai1).mul(8).add(1) ).sub(1) ).div(2);
    uint newTokens = totalTokens.mul(10**18).sub(totalSupply);

    return (newTokens, amount.mul(10**18));
  }

  // sell
  function unmint (address patron, uint256 amount) public returns(uint256 totalCost){
    if (msg.sender != patron && msg.sender != oraclize_cbAddress() && patron != owner) revert();
    if (amount == 0) revert();
    if (amount.mul(10**18) > balances[patron]) revert();

    totalCost = calculateUnmintTokenPerToken(amount);

    totalSupply = totalSupply.sub(amount.mul(10**18));
    balances[patron] = balances[patron].sub(amount.mul(10**18));

    poolBalance = poolBalance.sub(totalCost);
    
    updateCostOfToken();
    if (!baseToken.transfer(patron, totalCost)) revert();
    LogUnmint(amount.mul(10**18), totalCost);
    return totalCost;
  }

  // function calculateUnmintTokenPerToken (uint256 amount) public constant returns (uint256 totalUnminted, uint256 totalCost) {
  //   // uint256 totalUnminted = 0;
  //   // uint256 totalCost = 0;
  //   //for loop to determine cost at each point.
  //   uint256 tmpCostPerToken = costPerToken.mul(baseDivisionHelper);
  //   for(uint i = 0; totalUnminted <= amount; i = i.add(1)) {
  //     totalCost = totalCost.add(tmpCostPerToken);
  //     totalUnminted = totalUnminted.add(baseDivisionHelper.mul(1));
  //     tmpCostPerToken = currentCostOfToken(totalSupply.sub(i.mul(baseDivisionHelper)));
  //   }
  //   return (totalUnminted, totalCost);
  // }

  // function calculateUnmintTokenPerToken (uint256 totalUnminted) public constant returns (uint256 totalCost) {
  //   uint256 beginCostPerToken = costPerToken;
  //   uint256 endCostPerToken = costPerToken.add(totalUnminted);
  //   uint256 averageCostPerToken = beginCostPerToken.add(endCostPerToken).div(2);
  //   totalCost = averageCostPerToken.mul(totalUnminted);
  //   return totalCost;
  // }
  function calculateUnmintTokenPerToken (uint256 tokensToUnmint) public constant returns (uint256) {

    uint dai1 = baseToken.balanceOf(address(this));

    uint tokensAfterLeaving = (totalSupply - tokensToUnmint.mul(10**18)).div(10**18);

    uint dai0 = ( tokensAfterLeaving.mul( tokensAfterLeaving.add(1) ) ).div(2);

    uint daiDifference = dai1.sub(dai0.mul(10**18));

    return daiDifference;
  }


  function updateCostOfToken() internal {
    costPerToken = currentCostOfToken(totalSupply);
    LogCostOfTokenUpdate(costPerToken);
  }

  function currentCostOfToken(uint256 _supply) public constant returns (uint _cost) {
  // function currentCostOfToken(uint256 _supply) internal constant returns (uint _cost) {
    uint cost = 0;

    if ( graphType == GraphType.GraphLinear ) {
      // mx + b
      cost = ( graphMultiplyer.mul(_supply).div(graphMultiplyerDivisor) ).add(baseCost);
    }
    else if ( graphType == GraphType.GraphExponential ) {
      // mx^2 + b
      cost = ( graphMultiplyer.mul(_supply ** 2).div(graphMultiplyerDivisor) ).add(baseCost);
    }
    else if ( graphType == GraphType.GraphLogarithmic ) {
      // m * log2(x) + b
      if ( _supply == 0 ) {
        _supply = 1;
      }
      cost = ( graphMultiplyer.mul( fastlog2(_supply) ).div(graphMultiplyerDivisor) ).add(baseCost);
    }
    return cost;
  }
  function sqrt(uint x) returns (uint y) {
    uint z = (x + 1) / 2;
    y = x;
    while (z < y) {
        y = z;
        z = (x / z + z) / 2;
    }
  }

  // SPECTIAL CURVES

  //log based 2 taylor series in assembly
  function fastlog2(uint x) public pure returns (uint y) {
    assembly {
      let arg := x
      x := sub(x,1)
      x := or(x, div(x, 0x02))
      x := or(x, div(x, 0x04))
      x := or(x, div(x, 0x10))
      x := or(x, div(x, 0x100))
      x := or(x, div(x, 0x10000))
      x := or(x, div(x, 0x100000000))
      x := or(x, div(x, 0x10000000000000000))
      x := or(x, div(x, 0x100000000000000000000000000000000))
      x := add(x, 1)
      let m := mload(0x40)
      mstore(m,           0xf8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd)
      mstore(add(m,0x20), 0xf5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe)
      mstore(add(m,0x40), 0xf6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a8272523616)
      mstore(add(m,0x60), 0xc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff)
      mstore(add(m,0x80), 0xf7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e)
      mstore(add(m,0xa0), 0xe39ed557db96902cd38ed14fad815115c786af479b7e83247363534337271707)
      mstore(add(m,0xc0), 0xc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d2362422606)
      mstore(add(m,0xe0), 0x753a6d1b65325d0c552a4d1345224105391a310b29122104190a110309020100)
      mstore(0x40, add(m, 0x100))
      let magic := 0x818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff
      let shift := 0x100000000000000000000000000000000000000000000000000000000000000
      let a := div(mul(x, magic), shift)
      y := div(mload(add(m,sub(255,a))), shift)
      y := add(y, mul(256, gt(arg, 0x8000000000000000000000000000000000000000000000000000000000000000)))
    }
  }


  // subscribe
  function subscribe (address patron, uint256 amount, uint256 interval, uint256 percentToPatron) public payable {
    if (amount == 0) revert();
    if (msg.value == 0) revert();
    if (patron != msg.sender) revert();
    if (interval > 4 weeks) revert();
    if (percentToPatron > 100) revert();
    if (subscriptions[patron].exists) {
      executePayment(patron);
    } else {
      subscriptions[patron].exists = true;
      subscriptions[patron].amount = amount;
      subscriptions[patron].percentToPatron = percentToPatron;
      subscriptions[patron].interval = interval;
      subscriptions[patron].start = now;
      subscriptions[patron].active = true;

      activeSubscribers = activeSubscribers.add(1);
      monthlyProjected = monthlyProjected.add(amount);

      executePayment(patron);
    }
  }

  function updateSubscription (address patron, uint256 amount, uint256 interval, uint256 percentToPatron) public payable {
    if (!subscriptions[patron].exists) revert();
    if (percentToPatron > 100) revert();
    if (amount == 0) {
      monthlyProjected = monthlyProjected.sub(subscriptions[patron].amount);

      subscriptions[patron].amount = 0;
      subscriptions[patron].active = false;
      activeSubscribers = activeSubscribers.add(1);
    } else {
      monthlyProjected = monthlyProjected.sub(subscriptions[patron].amount);

      subscriptions[patron].amount = amount;
      monthlyProjected = monthlyProjected.add(amount);

      subscriptions[patron].percentToPatron = percentToPatron;
      subscriptions[patron].interval = interval;
    }
  }

  function getOraclePrice () public constant returns(uint256) {
    return oraclize_getPrice("URL").mul(oraclizeGasPrice);
  }

  function oracle (address patron) private {
    if (oraclize_getPrice("URL") > this.balance) {
      subscriptions[patron].active = false;
      monthlyProjected = monthlyProjected.sub(subscriptions[patron].amount);
      activeSubscribers = activeSubscribers.add(1);
      AlertEmptyOracle(patron);
    } else {
      uint256 interval = subscriptions[patron].interval;
      bytes32 queryId = oraclize_query(interval, "URL", "", oraclizeGasLimit);
      oraclizeIds[queryId] = patron;
    }
  }

  function updateOracleGasPrice (uint newPrice) onlyOwner {
    oraclizeGasPrice = newPrice;
    oraclize_setCustomGasPrice(oraclizeGasPrice);
  }

  function updateOracleGasLimit (uint newPrice) onlyOwner {
    oraclizeGasLimit = newPrice;
  }

  function executePayment (address patron) private {
    uint256 amount = subscriptions[patron].amount;
    if (amount == 0) revert();

    if (baseToken.allowance(patron, address(this)) < amount) {
      monthlyProjected = monthlyProjected.sub(subscriptions[patron].amount);
      subscriptions[patron].active = false;
      activeSubscribers = activeSubscribers.add(1);
      AlertEmptyPledge(patron);
    } else {
      uint256 totalMinted;
      uint256 totalCost;

      (totalMinted, totalCost) = mint(patron, amount);

      uint256 amountMultiplied = totalMinted.mul(subscriptionPercentMultiplyer);
      uint256 percentToPatronMultiplied = subscriptions[patron].percentToPatron.mul(subscriptionPercentMultiplyer);

      uint256 amountToPatron = amountMultiplied.div(percentToPatronMultiplied);
      uint256 amountToOwner = totalMinted.sub(amountToPatron);

      subscriptions[patron].toPatronTotal = subscriptions[patron].toPatronTotal.add(amountToPatron);
      subscriptions[patron].toOwnerTotal = subscriptions[patron].toOwnerTotal.add(amountToOwner);
      subscriptions[patron].last = now;

      balances[patron] = balances[patron].sub(amountToOwner);
      balances[owner] = balances[owner].add(amountToOwner);

      if (!subscriptions[patron].active) {
        subscriptions[patron].active = true;
        monthlyProjected = monthlyProjected.add(subscriptions[patron].amount);
        activeSubscribers = activeSubscribers.add(1);
      }

      Paid(patron, amountToPatron);
      Paid(owner, amountToOwner);
      oracle(patron);
    }
  }

  function __callback(bytes32 queryId) public {
    if (msg.sender != oraclize_cbAddress()) revert();
    address patron = oraclizeIds[queryId];
    executePayment(patron);
  }

}
