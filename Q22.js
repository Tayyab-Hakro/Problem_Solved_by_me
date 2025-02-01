//Write a function that change  array  into object  


function Arrobj (arr){
let result = Object.assign({} ,arr)
return result
}


console.log(Arrobj(["Tayyab" ,100 , true]))