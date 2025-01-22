//Write a function that will Merge two array

function MergeArr(arr1, arr2) {
   let  Arr3 =[]
for(let i =0 ; i<arr1.length ; i++){
    Arr3.push(arr1[i])

}
for(let j =0 ; j<arr2.length ; j++){
    Arr3.push(arr2[j])
}
return Arr3
}


let result = MergeArr([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]



