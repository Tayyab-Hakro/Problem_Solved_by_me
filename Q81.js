//Write  a funcation that will find the majority of element
var majorityElement = function(nums) {
    let count = 0, candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        console.log(candidate)
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

// Example usage:
console.log(majorityElement([3,2,3]));  // Output: 3
console.log(majorityElement([2,2,1,1,1,2,2]));  // Output: 2
