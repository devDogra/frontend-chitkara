let students = [
    { name: "A", marks: 0 }, 
    { name: "B", marks: 40},
    { name: "C", marks: 85},
    { name: "D", marks: 100},
    { name: "E", marks: 15},
];

function hasPassed(student) {
    if (student.marks > 30) {
        return true; 
    } else {
        return false; 
    }
}
let haveAnyPassed = students.some(hasPassed); 
let firstPassed = students.find(hasPassed);
let allPassed = students.filter(hasPassed);
let haveAllPassed = students.every(hasPassed);

console.log(haveAllPassed); 