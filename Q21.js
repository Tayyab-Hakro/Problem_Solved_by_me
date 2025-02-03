//Write a function that change Object Into Array and it's key value and correspondings

function ObjectArr(obj){
let Result = Object.entries(obj)
return Result.flat()
//I have use flat to remove extra arr like []
}

console.log(ObjectArr({name : 'Tayyab' , caste :'Hakro' }))