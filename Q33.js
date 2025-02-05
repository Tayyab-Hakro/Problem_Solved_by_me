// Create a nested loop that print grid of 3 *3 
//example [1,2,3] ,[4,5,6],[7,8,9]
let hold = 1
for(let i =1 ; i<4 ;i++){
    let str =" "
for(let j =1 ; j<4 ;j++){
    str += `${hold}`
    hold++

}
console.log(str)

}