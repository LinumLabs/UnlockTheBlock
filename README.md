# registree.rocks 

## What is registree.rocks?
registree.rocks is a blockchain-based decentralized database that allows authorized third parties to securely access and verify students' full academic history. registree.rocks provides a single point of access to allow verification of student credentials which could originate from multiple institutions. Furthermore, the registree.rocks decentralized database can be used to peform analytics while safeguarding student anonimity. 

## Why are the existing educational databases insufficient?
1. **Low Trust Environment:** 
Existing platforms, such as LinkedIn, have no means of verifying that user submitted data is correct. As a consequence, third parties, such as employers, cannot rely on this information. Therefore, they have to rely on universities directly.
2. **High University Admin Costs:**
Universities maintain large and outdated databases of every student's history and access to this database is strictly controlled. There is an expensive admin function dedicated to providing official transcripts to students at every university. This means there are many redundancies in positions and infrastructure systems across institutions
3. **Long Processing Times:**
Access to official transcripts can take up to 5 working days and the issuance of paper-based accreditations is burdensome and unnecessary - in a digital age where many interactions between employers and job candidates are performed online.
4. **No Trusted Consolidated Repository:**
Given the sensitive information stored by universities, they are hesitant to trust a third party to maintain a shared database. In the process, any global analytics on the global student population is prohibited by this fragmentation of data.

## Key features
**Decentralized:** 
- universities and potential employers do not have to trust a third party to maintain a shared database as all data is securely stored on the blockchain. 

**One Stop Solution:** 
- this platform will store data from a student's entire academic history,
- using a student's authorization key, employers and universities can view student transcripts. 

**Sophisticated Data Analytics:** 
- trend analysis and summary statistics can be performed on anynimous student data,

**Optional Personalised Services:** 
- recommendation engine that allows third parties to target suitable candidates,
- socio-economic as-is analysis identifying key factors in academic performance,
- automatic flagging of at risk students using predictive modeling.

## Who will use registree.rocks?
1. **Students:**
Students can authorize third parties to access their verified transcripts via the blockchain.
2. **Academic Institutions:** 
Institutions submit student data to the registree.rocks blockchain and never have to wory about providing transcripts again. Furthermore, when requesting student transcripts for students which want to enroll in master or PhD programms universities can obtain a transcript from the blockchain. Finally, they can potentially harness the power of smart contracts to automatically award degrees, flag students as having passed or failed and automatically enrol students in their new courses.
3. **Lecturers:**
Lecturers have access to simplified front end controls that allow them to upload the marks of their students by .csv. They will also have access to pre-made course and student analytics to highlight students who may be at risk or require assistance, and to allow them to dive into the performance profiles of their student cohorts.
4. **Employers:**
Whith student approval, potential employers can access a verified academic transcript of a potential employee. The transcript is easily readable - in a standardised format. This facilitates the automation of various recruitment procedures at third party institutions.

## Technical schematic

![Alt text!](https://github.com/cogeorg/unlock2018/blob/master/registree.rock%20technical%20diagram.png)


## How to find relevant code
- contracts in ```/playground/test2```
- web app in ```/app```

## How to run it
- start virtual environment ```. venv/bin/activate```
- start a test node ```./playground/test2/starttestrpc.sh```
- run the demo jupyter notebook in ```/app/registree```
- navigate to ```/app/registree/```
- start the webapp ```python manage.py runserver```