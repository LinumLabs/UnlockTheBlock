#!/usr/bin/env python3

from web3 import Web3, HTTPProvider, IPCProvider

web3 = Web3(HTTPProvider('http://localhost:8545'))

for account in web3.eth.accounts:
	value = web3.eth.getBalance(account)
	value = web3.fromWei(value, 'ether')
	print(account, value)
