// Given an array of numbers, return a new array where each element
//  is the square of the original element, but only if the original number is even.


const numbers = [1, 2, 3, 4, 5, 6];

 numbers.forEach(item =>{
if(item % 2 === 0){
console.log( item * item)
}
})
// Expected output: [4, 16, 36]
