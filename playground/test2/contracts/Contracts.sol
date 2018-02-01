pragma solidity ^0.4.11;

//
// THIS IS THE CONTRACT
//
contract Students {
  //
  // VARIABLES
  //
  address public owner;
  string public studentID;
  mapping(address => int) public courses;
  address[] course_list;
  string first_name;
  string last_name;
  string sex;
  string race;
  string dob;

  //
  // CODE
  //
  // constructor
  // function Students(address _owner) {
    // owner = _owner;
    // studentID = "None";
  // }
   function Students() {

  }

  function setStudentID(string _argument) public {
    studentID = _argument;
  }

  function addCourse(address _course_address) {
    courses[_course_address] = -1;
    course_list.push(_course_address);
  }

  function getCourseList() public returns(address[]) {
    return course_list;
  }

  function setMark(int _mark) public {
    // if (_address != msg.sender) {return;}
    courses[msg.sender] = _mark;
  }

  function setFirstName(string _argument) public {
    first_name = _argument;
  }

  function getFirstName() public returns(string) {
    return first_name;
  }

  function setLastName(string _argument) public {
    last_name = _argument;
  }

  function getLastName() public returns(string) {
    return last_name;
  }

  function setSex(string _argument) public {
    sex = _argument;
  }

  function getSex() public returns(string) {
    return sex;
  }

  function setRace(string _argument) public {
    race = _argument;
  }

  function getRace() public returns(string) {
    return race;
  }

  function setDoB(string _argument) public {
    dob = _argument;
  }

  function getDoB() public returns(string) {
    return dob;
  }
}

//
// THIS IS THE STUDENT FACTORY //
//

// contract StudentFactory {
//   bool public studentLocked = false;  // the contract will be locked once the master is set
//   address public master;  // the master account owning the entire registry TODO: make private

//   int256 numStudents;  // counter variable how many contracts have been spawned
//  	mapping(int256 => Students) deployedStudents;
//   mapping(int256 => string) studentIDs;

//   //
//   // CODE
//   //
//   // constructor
//   function studentFactory() { }

//   // this function sets a master address. once it is set, the account is locked
//   // and no change to the master address is possible
//   function setMaster(address _master) {
//     if (studentLocked == true) return;
//     master = _master;
//     studentLocked = true;
//   }

//   // HELPER CODE
//   function getNumStudents() public constant returns(int256) {
//     return numStudents;
//   }

//   function getStudentAddress(int256 _numStudent) public constant returns(address _address) {
//     return deployedStudents[_numStudent];
//   }

//   function studentExists(string _studentID) public constant returns(int256 ret) {
//       ret = -1;
//       for (int i=0; i<=numStudents; i++) {
//         if (keccak256(studentIDs[i]) == keccak256(_studentID)) {
//           ret = i;
//         }
//       }
//       return ret;
//   }

//   // CORE CODE
//   function createStudent(address _owner, string _studentID) returns(address a) {
//     studentIDs[numStudents] = _studentID;
// 		deployedStudents[numStudents] = new Students(_owner);
//     // deployedStudents[numStudents].setStudentID(_studentID);
// 		numStudents++;
// 		return deployedStudents[numStudents];
// 	}
// }


//
// THIS IS THE COURSE CONTRACT //
//

contract Courses {
  //
  // VARIABLES
  //
  address public owner;
  string public code;
  address[] students; // do we need those?
  string name;
  string description;
  int credits;

  function setMark(address _studentAddress, int _mark) public {
    // if (_address != msg.sender) {return;}
    Students s = Students(_studentAddress);
    s.setMark(_mark);
  }

  function setName(string _argument) public {
    name = _argument;
  }

  function getName() public returns(string) {
    return name;
  }

  function setDescription(string _argument) public {
    description = _argument;
  }

  function getDescription() public returns(string) {
    return description;
  }

  function setCode(string _argument) public {
    code = _argument;
  }

  function setCredits(int _amount) public {
    credits = _amount;
  }

  function getCredits() public returns(int) {
    return credits;
  }
}