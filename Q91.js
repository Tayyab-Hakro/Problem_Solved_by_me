var findPermutationDifference = function(s, t) {
    let sum = 0; // Initialize sum to store the difference
    for (let i = 0; i < s.length; i++) {
        let indexInT = t.indexOf(s[i]); // Find the index of s[i] in t
        sum += Math.abs(i - indexInT); // Calculate absolute difference
    }
    return sum;
};

console.log(findPermutationDifference("abc", "bac")); // Output: 2
console.log(findPermutationDifference("abcde", "edbac")); // Output: 12
