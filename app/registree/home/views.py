from django.http import FileResponse, Http404
from django.shortcuts import redirect, render, reverse
from fpdf import FPDF, HTMLMixin
from solc import compile_source
from web3 import HTTPProvider, Web3
from web3.contract import ConciseContract

from initialize_blockchain import compile_contract

from .forms import GetTranscriptForm

web3 = Web3(HTTPProvider('http://localhost:8545'))

# specify which solidity contract is used
with open('../../playground/test2/contracts/Contracts.sol', 'r') as myfile:
    contract_file = myfile.read() #.replace('\n', '')

student_interface = compile_contract(contract_file, 'Students')
course_interface = compile_contract(contract_file, 'Courses')

# Create your views here.
def index(request):
    if request.method == 'POST':
        form = GetTranscriptForm(request.POST)
        if form.is_valid():
            contract_address = request.POST['address']
            student_contract = web3.eth.contract(abi=student_interface['abi'], address=contract_address, ContractFactoryClass=ConciseContract)
            course_list = student_contract.getCourseList()
            codes = []
            descriptions = []
            credit = []
            marks = []
            for course in course_list:
                marks.append(student_contract.courses(course))
                course_contract = web3.eth.contract(abi=course_interface['abi'], address=course, ContractFactoryClass=ConciseContract)
                descriptions.append(course_contract.getName())
                codes.append(course_contract.code())
                credit.append(course_contract.getCredits())
            table_body = generate_table_body(codes, descriptions, credit, marks)
            html = generate_html(student_contract.getFirstName()+' '+student_contract.getLastName(), student_contract.getDoB(), 'Economics', 'pending', table_body)
            create_transcript(html)
            # return FileResponse(open('transcript.pdf', 'rb'), content_type='application/pdf')
            return redirect('studentinfo', address=contract_address)

    else:
        form = GetTranscriptForm()
        return render(request, 'home/home.html', {'get_transcript': form})
       

def generate_html(student_name, b_date, programme_name, programme_status, table_body):
    html = """
    <center>
    <A HREF="http://www.uct.ac.za/"><img src="UCT_logo.jpg" width="426" height="71"></A>
    </center>
    
    <H1 align="center">Official Transcript</H1>
    <h2 align="center">Securely delivered using the blockchain</h2>
    <h3 align="center">Statement of academic record</h2>
    
    <p><B>Name:</B> <I>{0}</I>
    <p><B>Birthdate:</B> <I>{1}</I>
    <p><B>Programme:</B> <I>{2}</I>
    <p><B>Programme:</B> <I>{3}</I>
    
    
    <table border="0" align="center" width="100%">
    <thead><tr><th width="20%">Course code</th><th width="40%">Description </th><th width="20%">Credits </th>
    <th width="20%">Marks </th></tr></thead>
    <tbody>
    {4}
    </tbody>
    </table>
    
    <p> 
    <p> The conduct of the Student was satisfactory.
    <p> 
    <p> 

    <left>
    <img src="registree_verified.png" width="300" height="80">
    </left>
    <left>
    <img src="ethereum.png" width="120" height="120">
    </left>
    """.format(student_name, b_date, programme_name, programme_status, table_body)
    
    return html
	
def generate_table_body(course_codes, descriptions, credits, marks):
    """
    If given a list of course codes, and matching descriptions, credits and marks this will return a html body
    which can be used as input for the generate_html function
    """
    table_body = ''
    for c_code, descr, cred, mark in zip(course_codes, descriptions, credits, marks):
        if mark > 0:
            table_body += '<tr><td align="center" valign="middle">{0}</td><td align="center" valign="middle">{1}</td><td align="center" valign="middle">{2}</td><td align="center" valign="middle">{3}</td></tr>'.format(c_code, descr.capitalize(), cred, mark)
    
    return table_body
	
def create_transcript(html_text):
    class MyFPDF(FPDF, HTMLMixin):
        pass

    pdf = MyFPDF()
    pdf.add_page()
    pdf.write_html(html_text)
    pdf.output('static/transcript.pdf', 'F')
