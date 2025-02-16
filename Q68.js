function balancedStringSplit(s) {
    let balance = 0;
    let count = 0;
    
    for (let char of s) {
        if (char === 'R') balance++;
        else balance--;
        
        if (balance === 0) count++;
    }
    
    return count;
}

// Test Cases
console.log(balancedStringSplit("RLRRLLRLRL")); // Output: 4
console.log(balancedStringSplit("RLRRRLLRLL")); // Output: 2
console.log(balancedStringSplit("LLLLRRRR"));   // Output: 1
