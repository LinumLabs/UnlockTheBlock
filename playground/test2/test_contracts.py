#!/usr/bin/env python3

import json
import web3

from web3 import Web3, HTTPProvider, TestRPCProvider
from solc import compile_source
from web3.contract import ConciseContract

# specify which solidity contract is used
with open('./contracts/Contracts.sol', 'r') as myfile:
    contract_file = myfile.read() #.replace('\n', '')

contract_sol = compile_source(contract_file) # Compiled source code
student_interface = contract_sol['<stdin>:Students']

# # specify which solidity contract is used
# with open('./contracts/Courses.sol', 'r') as myfile:
#     courses = myfile.read() #.replace('\n', '')

course_sol = compile_source(contract_file) # Compiled source code
course_interface = contract_sol['<stdin>:Courses']

# web3.py instance - use local chain
web3 = Web3(HTTPProvider('http://localhost:8545')) # 137.158.107.211
# web3 = Web3(HTTPProvider('http://137.158.107.211:8545')) #

# Instantiate and deploy contract
contract = web3.eth.contract(abi=student_interface['abi'], bytecode=student_interface['bin'])
course_contract = web3.eth.contract(abi=course_interface['abi'], bytecode=course_interface['bin'])

# Get transaction hash from deployed contract
tx_hash = contract.deploy(transaction={'from': web3.eth.accounts[0], 'gas': 4100000})

# Get tx receipt to get contract address
tx_receipt = web3.eth.getTransactionReceipt(tx_hash)
contract_address = tx_receipt['contractAddress']

# Contract instance in concise mode
contract = web3.eth.contract(abi=student_interface['abi'], address=contract_address, ContractFactoryClass=ConciseContract)

# Get transaction hash from deployed contract
tx_hash = course_contract.deploy(transaction={'from': web3.eth.accounts[0], 'gas': 4100000})

# Get tx receipt to get contract address
tx_receipt = web3.eth.getTransactionReceipt(tx_hash)
course_contract_address = tx_receipt['contractAddress']

# Contract instance in concise mode
course_contract = web3.eth.contract(abi=course_interface['abi'], address=course_contract_address, ContractFactoryClass=ConciseContract)
# web3.eth.sendTransaction({'from': web3.eth.accounts[0], 'to': course_contract_address, 'value': 10})

# CHECK 1: set master and lock account
# print("<<<<<<< CHECK 1: set owner")
# print("  owner:", contract.getOwner())
# contract.setOwner(web3.eth.accounts[0], transact={'from': web3.eth.accounts[0]})
# print("  new owner:", contract.getOwner())

# CHECK 2: create course in course list
print("<<<<<<< CHECK 2: create course in course list")
course_address1 = web3.eth.accounts[2]  # this is just a sample address
course_address2 = web3.eth.accounts[3]  # this is just a sample address
print('course list: ', contract.getCourseList())
contract.addCourse(course_address1, transact={'from': web3.eth.accounts[0]})
contract.addCourse(course_address2, transact={'from': web3.eth.accounts[0]})
course_list = contract.getCourseList()
print('course list: ', course_list)

# CHECK 3: set a mark for a course
print("<<<<<<< CHECK 3: set a mark for a course")
course_address = web3.eth.accounts[2]  # this is just a sample address
for course in course_list:
    print(course, contract.courses(course))
    contract.setMark(40, transact={'from': course_address})
    print(course, contract.courses(course))
    contract.setMark(50, transact={'from': course_address})
    print(course, contract.courses(course))

# CHECK 4: set personal infos
print("<<<<<<< CHECK 4: set personal infos")
print(contract.getFirstName())
contract.setFirstName('Co', transact={'from': web3.eth.accounts[0]})
print(contract.getFirstName())
print(contract.getLastName())
contract.setLastName('Georg', transact={'from': web3.eth.accounts[0]})
print(contract.getLastName())
print(contract.getSex())
contract.setSex('male', transact={'from': web3.eth.accounts[0]})
print(contract.getSex())
print(contract.getRace())
contract.setRace('white', transact={'from': web3.eth.accounts[0]})
print(contract.getRace())
print(contract.getDoB())
contract.setDoB('YYYY/MM/DD', transact={'from': web3.eth.accounts[0]})
print(contract.getDoB())

# CHECK 5: set mark from course contract
print("<<<<<<< CHECK 5: set mark from course contract")
print(course_contract_address, contract.courses(course_contract_address))
course_contract.setMark(contract_address, 60, transact={'from': web3.eth.accounts[0]})
print(course_contract_address, contract.courses(course_contract_address))

# CHECK 6: test course getter and setter
print("<<<<<<< CHECK 6: test course getter and setter")
print('course name ', course_contract.getName())
course_contract.setName('Statics', transact={'from': web3.eth.accounts[0]})
print(course_contract.getName())

print('course credits ', course_contract.getCredits())
course_contract.setCredits(15, transact={'from': web3.eth.accounts[0]})
print(course_contract.getCredits())