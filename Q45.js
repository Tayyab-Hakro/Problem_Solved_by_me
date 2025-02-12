function SumOne(arr) {
    if (arr.length === 0) return 0; // Base case: return 0 when array is empty
    return arr[0] + SumOne(arr.slice(1)); // Add first element and call for rest
}

console.log(SumOne([2, 3, 4, 5, 6])); // Output: 20
