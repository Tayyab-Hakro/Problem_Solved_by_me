// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
var findWordsContaining = function(words, x) {
    let result = 0;
    return  words.map((ele ) => ele.includes(x) ? result++  : 0)

};
    
    console.log(findWordsContaining(["leeeet","code"],"e"))
