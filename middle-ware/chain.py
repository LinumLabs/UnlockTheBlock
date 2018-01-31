import json
import web3
import pdb
from contract import contract_source_code

from web3 import Web3, HTTPProvider, TestRPCProvider
from solc import compile_source
from web3.contract import ConciseContract

class EthChain():

  def __init__(self):
    self.compiled_sol = compile_source(contract_source_code) # Compiled source code

    self.contract_interface = self.compiled_sol['<stdin>:GweiIToken']

    # web3.py instance
    self.w3 = Web3(HTTPProvider('http://localhost:7545'))

    # Instantiate and deploy contract
    self.contract = self.w3.eth.contract(abi=self.contract_interface['abi'], bytecode=self.contract_interface['bin'])

  def deployContract(self):
    # Get transaction hash from deployed contract
    tx_hash = self.contract.deploy(transaction={'from': self.w3.eth.accounts[0], 'gas': 6721975, 'value': 10000000000000000000})
    # Get tx receipt to get contract address
    tx_receipt = self.w3.eth.getTransactionReceipt(tx_hash)
    contract_address = tx_receipt['contractAddress']
    self.setContract(contract_address)

  def setContract(self, contract_address):
    print("address: " + contract_address)
    self.contract_address = contract_address

    #Set the contract
    self.contract_instance = self.w3.eth.contract(self.contract_interface['abi'], contract_address, ContractFactoryClass=ConciseContract)

  def setupTokenAndVerify(self):
    self.contract_instance.transfer(self.w3.eth.accounts[1], 50000, transact={'from': self.w3.eth.accounts[0], 'gas': 6721975})
    print(self.contract_instance.balanceOf(self.w3.eth.accounts[0]))
    print(self.contract_instance.balanceOf(self.w3.eth.accounts[1]))

    print(self.contract_instance.payBackTheMoney(5000, transact={'from': self.w3.eth.accounts[1], 'gas': 6721975}))
    print(self.contract_instance.balanceOf(self.w3.eth.accounts[1]))

  def sendTokens(self, address):
    print("sending 50000 tokens to " + address)
    self.contract_instance.transfer(address, 50000, transact={'from': self.w3.eth.accounts[0], 'gas': 6721975})

