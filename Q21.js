//Write a function that change Object Into Array and it's key value and correspondings

function ObjectArr(obj){
let Result = Object.entries(obj)
return Result
}

console.log(ObjectArr({name : 'Tayyab' , caste :'Hakro' }))