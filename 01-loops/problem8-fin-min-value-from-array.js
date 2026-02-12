// Next Problem — Find the Smallest Element in an Array

// You already implemented maximum selection.
// Now apply the exact same structure, but invert the comparison.

// Given
// let arr = [45, 12, 89, 32, 7, 90, 23];

// Expected Output
// 7

let arr=[45, 12, 89, 32, 7, 90, 23];
let minvalue = arr[0];
for(let i=1; i < arr.length;i++){
   if(arr[i]<minvalue) {
       minvalue = arr[i];
   }
}  
    
    
console.log(minvalue);