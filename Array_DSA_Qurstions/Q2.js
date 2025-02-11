function QuickSort(arr){
if(arr.length <=1 ){
return arr
}
let pivot = arr[arr.lenght -1]
let left = []
let right = []
for(let i = 0 ; i<arr.length-1 ; i++){
if(arr[i] < pivot){
left.push(arr[i])
}else{
    right.push(arr[i])
}
}
return [...QuickSort(left) ,pivot ,...QuickSort(right) ]
}



let SortedArray = QuickSort([4,5,3,2,1,9,2 ,10])
console.log(SortedArray)