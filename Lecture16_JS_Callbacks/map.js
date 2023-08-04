let nums = [1, 2, 3, 4, 5, 6]; 

// 1 2 3 4..
// 2 4 6 8..

function double(num) {
    return num * 2; 
}
let double2 = (num) => num * 2; 

let triple = (num) => num * 3; 


// let doubledNums = nums.map(triple);
let tripledNums = nums.map((num) => num * 3);


console.log(tripledNums); 



let nums2 = [1, 2, 3, 4];


let doubledNums2 = nums2.map(num => num * 2); 