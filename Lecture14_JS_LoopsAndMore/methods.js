let nums = [10, 20, 30]; 

nums.push(40); 
console.log(nums); 

nums.pop(); 
console.log(nums); 

// Insert at front 
nums.unshift(5);
console.log(nums); 

// Remove from front 
nums.shift(); 
console.log(nums); 

nums.unshift("HI"); 
console.log(nums); 

let twentyExists = nums.includes(20);
console.log(twentyExists); 

let nums2 = ["Bye", 2000, 99]; 
// let joinedArray = nums.concat(nums2); 
let joinedArray = nums.unshift(nums2); 
console.log(joinedArray); 

nums2.unshift([-1, -2]); 
console.log(nums2); 

// String 
// 012345
// Good morning
let s = "Good morning"; 
let charArray = s.split(''); 
let joinedChars = charArray.join('')
console.log(charArray); 
console.log(joinedChars); 

console.log(s.includes("mor")); 

console.log(s.indexOf("mor")); 

let a = [10, 20, 30, 40, 50, 60]; 

// Remove => .splice()
a.splice(2, 3); 

console.log(a); 

let b = [10, 20, 30, 40, 50, 60]; 

// .slice() 
let bSubarr = b.slice(2, 5); 
console.log(b); 
console.log(bSubarr); 

