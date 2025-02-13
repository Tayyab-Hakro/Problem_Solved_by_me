//Divide array into chunks 
function ChunkedFunc(arr , size){
let result = []
    for(let i = 0 ; i<arr.length ; i+=size){
        result.push(arr.slice(i , i+size))
}
return result
}



const ChunkedArr1 = ChunkedFunc([1,2,3,4,5],1)
console.log(ChunkedArr1)