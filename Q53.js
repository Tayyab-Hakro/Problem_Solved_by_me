// You are given a string s. The score of a string is defined as the sum of the
//  absolute difference between the ASCII values of adjacent characters.
// Return the score of s.
// // Input: s = "hello"
// // Output: 13
// // The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 
// // 'o' = 111. So, the score of s would be 
// // |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.
// charCodeAt
var scoreOfString = function(s) {
    let score = 0
    for(let i = 0 ; i <s.length-1 ; i++){
score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1) )

}
 return score
}
console.log(scoreOfString("hello"))