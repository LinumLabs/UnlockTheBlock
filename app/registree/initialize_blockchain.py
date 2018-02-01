import json
import web3

from web3 import Web3, HTTPProvider, TestRPCProvider
from solc import compile_source
from web3.contract import ConciseContract

def compile_contract(contract_file, contract_name):
    contract_sol = compile_source(contract_file) # Compiled source code
    interface = contract_sol['<stdin>:' + contract_name]
    return interface

def deploy_contract(interface):
    # Instantiate and deploy contract
    contract = web3.eth.contract(abi=interface['abi'], bytecode=interface['bin'])

    # Get transaction hash from deployed contract
    tx_hash = contract.deploy(transaction={'from': web3.eth.accounts[0], 'gas': 4100000})

    # Get tx receipt to get contract address
    tx_receipt = web3.eth.getTransactionReceipt(tx_hash)
    contract_address = tx_receipt['contractAddress']

    # Contract instance in concise mode
    contract = web3.eth.contract(abi=interface['abi'], address=contract_address, ContractFactoryClass=ConciseContract)

    return (contract, contract_address)

def import_students_to_blockchain(students, interface):
    student_dict = {}
    print('<<<<<<<< Register Students on Blockchain >>>>>>>>')
    for line in students[1:]:
        (contract, contract_address) = deploy_contract(interface)
        line = line.strip()
        infos = line.split('|')
        contract.setStudentID(infos[0], transact={'from': web3.eth.accounts[0]})
        contract.setFirstName(infos[1], transact={'from': web3.eth.accounts[0]})
        contract.setLastName(infos[2], transact={'from': web3.eth.accounts[0]})
        contract.setSex(infos[3], transact={'from': web3.eth.accounts[0]})
        contract.setRace(infos[4], transact={'from': web3.eth.accounts[0]})
        contract.setDoB(infos[5], transact={'from': web3.eth.accounts[0]})
        student_id = contract.studentID()
        print('Student ID: ', student_id, ' Address: ', contract_address)
        student_dict[student_id] = contract_address
    return student_dict

def import_courses_to_blockchain(courses, interface):
    course_dict = {}
    print('<<<<<<<< Register Courses on Blockchain >>>>>>>>')
    for line in courses[1:]:
        (contract, contract_address) = deploy_contract(interface)
        line = line.strip()
        infos = line.split('|')
        contract.setCode(infos[0], transact={'from': web3.eth.accounts[0]})
        contract.setName(infos[1], transact={'from': web3.eth.accounts[0]})
        contract.setCredits(int(infos[2]), transact={'from': web3.eth.accounts[0]})
        course_code = contract.code()
        print('Course ID: ', course_code, ' Address: ', contract_address)
        course_dict[course_code] = contract_address
    return course_dict

def enroll_students_on_blockchain(student_dict, course_dict, interface):
    print('<<<<<<<< Enroll Students in Courses >>>>>>>>')
    for student_id, student_address in student_dict.items():
        student_contract = web3.eth.contract(abi=interface['abi'], address=student_address, ContractFactoryClass=ConciseContract)
        for course_code, course_address in course_dict.items():
            student_contract.addCourse(course_address, transact={'from': web3.eth.accounts[0]})
        print('Student ID: ', student_id, ' Courses: ', student_contract.getCourseList())

def substitute_id_and_code_with_address(input_filename, output_filename, student_dict, course_dict):
    with open(input_filename, 'r') as myfile:
        grades = myfile.readlines()
    output_grades = []    
    for line in grades[1:]:
        info = line.strip().split('|')
        substitute = student_dict[info[0]]+ '|' + course_dict[info[1]] + '|' + info [2] + '\n'
        output_grades.append(substitute)
    with open(output_filename, 'w') as myfile:
        for line in output_grades:
            myfile.write(line)



if __name__ == "__main__":
    # web3.py instance - use local chain
    web3 = Web3(HTTPProvider('http://localhost:8545')) # 137.158.107.211
    # web3 = Web3(HTTPProvider('http://137.158.107.211:8545')) #

    # specify which solidity contract is used
    with open('../../playground/test2/contracts/Contracts.sol', 'r') as myfile:
        contract_file = myfile.read() #.replace('\n', '')

    student_interface = compile_contract(contract_file, 'Students')
    course_interface = compile_contract(contract_file, 'Courses')

    with open('students.csv', 'r') as myfile:
        students = myfile.readlines()

    student_dict = import_students_to_blockchain(students, student_interface)
    with open('student_addresses.csv', 'w') as myfile:
        for key, value in student_dict.items():
            myfile.write(value + '\n')


    with open('course_info.csv', 'r') as myfile:
        courses = myfile.readlines()

    course_dict = import_courses_to_blockchain(courses, course_interface)
    with open('course_addresses.csv', 'w') as myfile:
        for key, value in course_dict.items():
            myfile.write(value + '\n')

    enroll_students_on_blockchain(student_dict, course_dict, student_interface)

    substitute_id_and_code_with_address('KWS30013C_grades.csv', 'KWS30013C_grades_sub.csv', student_dict, course_dict)
    substitute_id_and_code_with_address('WOZ52303W_grades.csv', 'WOZ52303W_grades_sub.csv', student_dict, course_dict)