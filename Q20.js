//Sum the array with only reduce method of javascript

function Sumwithreduce(arr){
 let finalResult = arr.reduce((acc , curr) => acc + curr)

 return finalResult
}
console.log(Sumwithreduce([2,3,4,5])) //Output will be 14