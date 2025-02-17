function isPalindrome(Str) {
    for (let i = 0; i < Str.length / 2; i++) {
        if (Str[i] !== Str[Str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hellow"));  // false
