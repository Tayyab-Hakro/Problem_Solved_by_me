// You are given positive integers n and m.

// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// // num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// // Return the integer num1 - num2.

 

// // Example 1:

// // Input: n = 10, m = 3
// // Output: 19
var differenceOfSums = function(n, m) {
    let total = 0 ; let  total2 = 0
     for(let i = 1 ; i<=n ;i++ ){
       if(i % m === 0 ){
           total= + i
       }else{
           total2 =+ total2 + i  
       }
       return total2 - total
     }  
   }
   
     console.log(differenceOfSums(10, 3))
   