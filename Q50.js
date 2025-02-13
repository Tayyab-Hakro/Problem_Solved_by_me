// Write a function argumentsLength that returns the count of
//  arguments passed to it.

// Input: args = [5]
// Output: 1
// argumentsLength(5); // 1
// One value was passed to the function so it should return 1.

var argumentsLength = function(...args) {
    let count = 0
let result = []
for(let i = 0 ; i<args.length ; i++){
result.push(args[i])
count++
}
return count
};

console.log(argumentsLength([3]))
console.log(argumentsLength([{} , null ,"3"]))
