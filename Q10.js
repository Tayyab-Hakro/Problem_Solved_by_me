function reverseArray(arr) {
    // Base case: If the array is empty or has one element, return it
    if (arr.length === 0) {
        return [];
    }

    // Recursive step: Take the last element and add it to the reversed rest of the array
    return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)));
}

// Test the function
const result = reverseArray(["T", "a", "y", "y", "a", "b"]);
console.log(result); // Output: ["b", "a", "y", "y", "a", "T"]
