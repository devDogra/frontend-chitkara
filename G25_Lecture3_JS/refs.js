let x = 10; 
let y = x; 
y++; 

console.log("x = " + x); 
console.log("y = " + y); 
/* -------------------------------------------------------------------------- */
const car1 = {
    topspeed: 200, 
    colour: "blue"
}
const car2 = car1; 
car2.topspeed = 300;

console.log(car1.topspeed); 
console.log(car2.topspeed); 