//Found array Value with Binary Search

function binarySearach (arr , target){
let low = 0 
let high = arr.length-1
while (low <= high){
    let mid = Math.floor((low + high) /2)
if(arr[mid] === target){
    return `target ${target} found at ${mid}`
}else if(arr[mid] <target){
    low  = mid+1 
}else if(arr[mid]> target) {
    high= mid -1
}else{
    return `target found at index ${mid} `
}

}
return "Not found Value"

}

let Check = binarySearach([1,2,3,4,5,6,7] ,5)


 console.log(Check)
