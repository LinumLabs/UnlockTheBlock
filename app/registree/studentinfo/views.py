from django.http import FileResponse, Http404
from django.shortcuts import redirect, render
from fpdf import FPDF, HTMLMixin
from solc import compile_source
from web3 import HTTPProvider, Web3
from web3.contract import ConciseContract

import numpy as np
import plotly.offline as opy
import plotly.graph_objs as go

from initialize_blockchain import compile_contract

web3 = Web3(HTTPProvider('http://localhost:8545'))

# specify which solidity contract is used
with open('../../playground/test2/contracts/Contracts.sol', 'r') as myfile:
    contract_file = myfile.read() #.replace('\n', '')

student_interface = compile_contract(contract_file, 'Students')
course_interface = compile_contract(contract_file, 'Courses')

# Create your views here.
def index(request, address):
    if request.method == 'POST':
        pass
    else:
        contract = web3.eth.contract(abi=student_interface['abi'], address=address, ContractFactoryClass=ConciseContract)
        student_name = contract.getFirstName() + ' ' + contract.getLastName()

        with open('student_addresses.csv', 'r') as myfile:
            student_addresses = myfile.readlines()
        with open('course_addresses.csv', 'r') as myfile:
            course_addresses = myfile.readlines()
        students = []
        courses = []
        plots = []
        for kine in course_addresses:
            course_address = kine.strip()
            course_contract = web3.eth.contract(abi=course_interface['abi'], address=course_address, ContractFactoryClass=ConciseContract)
            name = course_contract.getName()
            marks = []
            for line in student_addresses:
                student_address = line.strip()
                student_contract = web3.eth.contract(abi=student_interface['abi'], address=student_address, ContractFactoryClass=ConciseContract)
                mark = student_contract.courses(course_address)
                if mark > 0:
                    marks.append(mark)
                if student_address == address:
                    student_mark = mark
            if marks:
                plots.append(get_plot(marks,name,student_mark))
        #         print(marks)
        #         hist, bin_edges = np.histogram(marks, bins=10)
        #         print(hist)
        #         histlist = []
        #         c = 10
        #         for i in range(len(hist)):
        #             hdict = {}
        #             hdict['id'] = str(c)
        #             hdict['y'] = hist[i]
        #             c += 10
        #             histlist.append(hdict)
        #         courses.append({'name': name.capitalize(), 'distribution': histlist})
        # print(courses)

        return render(request, 'studentinfo/studentinfo.html', {'name': student_name, 'plots': plots})


def get_plot(marks, name, student_mark):
    
    data = [go.Histogram(x=np.array(marks))]

    layout=go.Layout(title=name.capitalize()+" - Student's mark: "+str(student_mark))
    figure=go.Figure(data=data,layout=layout)
    div = opy.plot(figure, auto_open=False, output_type='div')

    return div