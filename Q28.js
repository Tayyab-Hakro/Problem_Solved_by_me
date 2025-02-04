    const lookup = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };

    let roman = "";
    for (let key of Object.keys(lookup).reverse()) {
        while (num >= key) {
            roman += lookup[key];
            num -= key;
        }
    }
    return roman;

// Testing
console.log(numberToRoman(1)); // Output: I
console.log(numberToRoman(2)); // Output: II
console.log(numberToRoman(3)); // Output: III
console.log(numberToRoman(4)); // Output: IV
console.log(numberToRoman(9)); // Output: IX
