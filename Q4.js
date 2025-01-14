//Search Element from array
//We have to search 40
function SearchEle (InputNumber){
let IndexVal = 40
for(let i = 0 ; i<InputNumber.length ; i++){
if(InputNumber[i] === IndexVal){
    console.log(IndexVal)
}
}

}


console.log(SearchEle([10,20,30,40,50]))