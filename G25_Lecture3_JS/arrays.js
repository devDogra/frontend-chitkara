const nums = [1, 2, 3, 4]; 
console.log(typeof nums); 

console.log(nums.length); 

nums[2] = 100; 
nums[10] = 89898; 
console.log(nums); 

nums.push(99); 
console.log(nums); 

console.log('--after pop--')
nums.pop(); 
console.log(nums); 