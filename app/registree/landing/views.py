from django.contrib import messages
from django.shortcuts import redirect, render
from solc import compile_source
from web3 import HTTPProvider, Web3
from web3.contract import ConciseContract

from initialize_blockchain import compile_contract

from .forms import EnrollStudentsCsvForm, UploadMarkCsvForm

web3 = Web3(HTTPProvider('http://localhost:8545'))

# specify which solidity contract is used
with open('../../playground/test2/contracts/Contracts.sol', 'r') as myfile:
    contract_file = myfile.read() #.replace('\n', '')

student_interface = compile_contract(contract_file, 'Students')
course_interface = compile_contract(contract_file, 'Courses')

# Create your views here.
def index(request):
    if request.method == 'POST':
        # if request.POST['type'] == 'enroll':
        #     enroll_form = EnrollStudentsCsvForm(request.POST, request.FILES)
        #     if enroll_form.is_valid():
        #         with open(request.FILES['file'], 'rb') as myfile:
        #             students = myfile.readlines().strip()
        #             for line in students:
        #                 infos = line.split('|')
        #                 course_address = infos[0]
        #                 student_address = infos[1]
        #                 student_contract = web3.eth.contract(abi=course_interface['abi'], address=student_address, ContractFactoryClass=ConciseContract)
        #                 student_contract.addCourse(course_address, transact={'from': web3.eth.accounts[0]})
                            
        if request.POST['type'] == 'marks':
            csv_file = request.FILES["myfile"]
            file_data = csv_file.read().decode("utf-8")
            grading = file_data.split("\n")[:-1]
            for line in grading:
                infos = line.split('|')
                contract_address = infos[1]
                course_contract = web3.eth.contract(abi=course_interface['abi'], address=contract_address, ContractFactoryClass=ConciseContract)
                course_contract.setMark(infos[0], int(infos[2]), transact={'from': web3.eth.accounts[0]})
            _add_message(request, 'You successfully uploaded your grades.')
            return redirect('landing')

    else:
        enroll_form = EnrollStudentsCsvForm
        marks_form = UploadMarkCsvForm
        return render(request, 'landing/landing.html', {'marks_form': marks_form, 'enroll_form': enroll_form})

def _add_message(request, message):
    messages.add_message(request, messages.INFO, message)