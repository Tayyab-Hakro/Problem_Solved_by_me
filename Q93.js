function firstUniqueChar(s) {
    // Your code here
    let First  = s[0]
    let count = 0 ;
    for (let i = 0 ; i< s.length ; i++){
        if(s[i].includes[First]){
         return   count++
        }
    }
    return count
    
}
  
  console.log(firstUniqueChar("leetcode")); // 0
  console.log(firstUniqueChar("loveleetcode")); // 2
  console.log(firstUniqueChar("aabb")); // -1
  