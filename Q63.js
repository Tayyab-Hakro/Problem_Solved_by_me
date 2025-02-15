function isSorted(arr) {
    let left = 0, right = 1; // Two pointers
    while (right < arr.length) {
        console.log("left valye" , arr[left])
        if (arr[left] > arr[right]) {
            return false; // Found an out-of-order pair
        }
        left++;
        right++;
    }
    return true; // Array is sorted
}

console.log(isSorted([1, 2, 3, 5, 4, 6])); // Output: false
console.log(isSorted([1, 2, 3, 4, 5, 6])); // Output: true
