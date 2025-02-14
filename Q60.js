var reverseString = function(s) {
    let reverseStr = []
    for(let i =s.length-1 ; i>=0 ; i--){
        reverseStr.push(s[i])
    }
    return reverseStr
};
console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))