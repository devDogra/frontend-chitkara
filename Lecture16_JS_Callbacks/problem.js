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

let ans = students.filter(hasPassed);
ans = ans.map(studentObject => studentObject.name)

let ans2 = students
                .filter(hasPassed)
                .map(studentObject => studentObject.name)

console.log(ans); 