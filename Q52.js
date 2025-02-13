var filter = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {  // Call fn with arr[i] and index i
            result.push(arr[i]);
        }
    }
    return result;
};

// Example test cases
console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; }));
// Output: [20, 30]

console.log(filter([1,2,3], function firstIndex(n, i) { return i === 0; }));
// Output: [1]

console.log(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1; }));
// Output: [-2, 0, 1, 2]
