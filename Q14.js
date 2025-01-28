//Write a function that takes an array of numbers and returns
//  a new array with only the even numbers sorted in ascending order.


function ArrayNumbers(arr) {
    // Filter out even numbers and sort them
    const evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    return evenNumbers;
  }
  
  console.log(ArrayNumbers([34, 23, 56, 1, 2])); // Output: [2, 34, 56]
  