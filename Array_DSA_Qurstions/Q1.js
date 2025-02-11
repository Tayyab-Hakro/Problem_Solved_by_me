//Find name Tayyab in array 

function binarySearachArr(Str , word){
Str= Str.map(word => word.toLowerCase());
word = word.toLowerCase()
let low = 0  ; let high = Str.length-1
while(low <= high){
let mid = Math.floor((low + high) /2)
if(Str[mid] === word){
    return `Value ${word} find at ${mid}`
} else if(Str[mid] < word){
  return  low = mid +1
}else{
    high = mid -1
}
}
return "Value not found"
}

const SearchArr = binarySearachArr(["ali" ,"Billionaire" ,"tAYYAB","Bigboy"] , "ALI")
console.log(SearchArr)