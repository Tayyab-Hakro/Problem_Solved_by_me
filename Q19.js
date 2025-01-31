//Write a function that flattens a nested
// array into a single array.
function flattens (arr){
let new1 = arr.flat(2)
return new1
}

console.log(flattens([1, [2, [3, 4], 5], 6]) )
// Expected output: [1, 2, 3, 4, 5, 6]