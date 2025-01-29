//Write a function that takes an object as input and
//  returns the number of properties it has.


const obj = { a: 1, b: 2, c: 3 ,d: 12 };
function  countProperties(obj){
let count = 0
    for(let key in obj){
if(key !== Object){
count++
}
}
console.log(count)
}

countProperties(obj); // Output: 3
