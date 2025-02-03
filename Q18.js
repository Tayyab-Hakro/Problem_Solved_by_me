// Write a function that removes duplicate elements
//   from an array 
//and returns a new array with unique values.
function removeDuplicate(arr) {
    let uniqueValues = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueValues.includes(arr[i])) {
            uniqueValues.push(arr[i]);
        }
    }
    return uniqueValues;
}

console.log(removeDuplicate([1, 1, 3, 4, 8, 5, 5, 11])); 
// Expected output: [1, 3, 4, 8, 5, 11]
