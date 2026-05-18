const students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    course: "Computer Science"
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 21,
    course: "Biology"
  },
  {
    id: 3,
    name: "Bob Smith",
    age: 22,
    course: "Chemistry"  
  },
  {
    id: 4,
    name: "Alice Johnson",
    age: 23,
    course: "Social Science"  
  } 
]

const oldestStudent = students.reduce((acc, student) => {
  return acc.age > student.age ? acc : student;
}, students[0]);

//console.log(oldestStudent); 

const studentRep = students[0];

module.exports = {studentRep,oldestStudent,students};