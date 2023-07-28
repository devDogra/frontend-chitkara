// Printing to the console
/* 
Comment 


COmment also 
*/
console.log("Script.js"); 

// Variables
let age = 50; 
// STands for constant
const pi = 3.1415926535; 
var myname = "Dev"; 

console.log(age, pi, myname)

// 1 year has passed
age = age + 1; 
// pi = 3.2; 
myname = "Dave";

// Redeclare
// let age = 100; 
var myname = "Dev2"; 
var myname = "Dev3";

console.log(age, pi, myname); 


function f(a) {
    if (a > 10) {
        let x = 10;
        const y = 9;
        var z = 8; 
        // all 3 are in scope
    }

    console.log(z); // OK, will work 
    // x is out of scope here
    // y is also out of scope
    // z is NOT out of scope
}
// x is out of scope
// y is out of scope
// z is also out of scope


function f() {

    function g() {
        var z = 10;
    }

    if (10 < 8) {
        var z2 = 11; 
    }
    console.log(z2);  // ok
    console.log(z) // NOT OK
}