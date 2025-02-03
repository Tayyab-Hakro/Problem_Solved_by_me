//Write a function that will take array 
// of numbers and Calulate Average of the all array
//formulae first sum of numbers and then divide with to number 4
function CalulateAverage(arr){
let sum = 0
for(let i =0 ;i <arr.length ;i++){
 sum +=arr[i]
}
return sum / arr.length
}

console.log(CalulateAverage([5,10,2,8]))