//Filter the values whose values are greater then 30

let arr = [56,45, 32,5,6,7,30,66]

arr = arr.filter(item =>{
let number = 30
if(item >number){
return true
}
return false

})
console.log(arr)