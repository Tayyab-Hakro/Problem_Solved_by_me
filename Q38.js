//write a function that count accourence words in String

function CountCharacter (Str){
    let word = "a"
let count = 0
    for (let i =0  ; i<Str.length ; i++){
        if(Str[i].includes(word)){
            count++
        }
    }
return count
}



console.log(CountCharacter("Bhakreaaa"))