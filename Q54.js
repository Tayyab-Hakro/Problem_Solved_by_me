function PerfectNumber(num) {
    let sum = 0;
    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

console.log(PerfectNumber(5)); // false
console.log(PerfectNumber(6)); // true
console.log(PerfectNumber(28)); // true (28 is also a perfect number)
