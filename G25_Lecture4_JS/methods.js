console.log("methods.js"); 

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums);

nums.push(7); 
console.log(nums);

nums.pop(); 
console.log(nums);

let result = nums.includes(4); 
console.log(result); 

// Insert at front
nums.unshift(100); 
console.log(nums); 

// Pop front
nums.shift(); 
console.log(nums); 

// let nums = [1, 2, 3, 4, 5, 6];

// Get subarray => slice
let subarr = nums.slice(2, 5)
console.log(subarr); 

// Remove elements 
// Will change original array
nums.splice(2, 3)
console.log(nums); 

// String methods 
let s = "Good morning"; 
let result2 = s.includes("mor"); 
console.log(result2); 

let idx = s.indexOf("mor")
console.log(idx); 

let sArr = s.split(); 
console.log(sArr); 

let sArr2 = s.split(' '); 
console.log(sArr2); 


let sArr3 = s.split(''); 
console.log(sArr3); 

let nums2 = [1, 2, 3]; 
let nums3 = [5, 6, 7]; 
let joined23 = nums2.concat(nums3)
console.log(joined23); 