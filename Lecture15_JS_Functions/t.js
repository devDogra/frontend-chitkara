const nums = [1, 2, 3, 4, 5, 6, 7]; 

let subarr = nums.slice(1, 5)
console.log(subarr); 

// 1 1000, 2000, 3000, 4000, 5000 5 6 7

nums.splice(1, 3, 1000, 2000, 3000, 4000, 5000);

console.log(nums); 