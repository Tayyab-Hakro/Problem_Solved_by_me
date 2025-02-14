
var lengthOfLastWord = function(s) {
    let count = 0
let word = s.trim().split(" ")
console.log(word)
let c = word[word.length -1] 
console.log(c)
for(let i = 0 ; i<c.length ; i++){
count++
}
return count
}
console.log(lengthOfLastWord("   fly me   to   the moon  "))