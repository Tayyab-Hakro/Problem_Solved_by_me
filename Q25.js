// Implement a function to reverse the words in a 
// given sentence
//  (e.g., "Hello World" → "World Hello").


function ReverseSentence (Str){
Str = Str.split(" ")
let LastStr = Str[1] +  Str[0]
return LastStr
}

console.log(ReverseSentence("Hello World"))