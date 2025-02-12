var romanToInt = function(s) {
    const romanMap = {
        "I": 1, "V": 5, "X": 10, "L": 50,
        "C": 100, "D": 500, "M": 1000
    };

    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        // If the next numeral is larger, subtract the current numeral
        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};

// Example test cases:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
