var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed); // Store allowed characters in a Set
    let count = 0;

    words.forEach(word => {
        if ([...word].every(char => allowedSet.has(char))) {
            count++; // Increment count if all characters in word are in allowedSet
        }
    });

    return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); 
// Output: 2
