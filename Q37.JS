// Create function that count numbers words in string

function CountWords (Str){
    Str = Str.split("")
    let count = 0
for(let i = 0  ; i<Str.length ;i++){
    console.log(Str[i])
    count++
}
return count
}
   
    console.log(CountWords( "Tayyab1"))