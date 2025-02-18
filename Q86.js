function RemoveDuplicatesSTr(Str ,a){
let count = 0
for(let i  = 0 ; i<=Str.length ; i++){
    if(a.includes(Str[i])){
        count++
    }
}
return count

}

console.log(RemoveDuplicatesSTr("staaar" ,"a"))