var getConcatenation = function(nums) {
    let result = [];
    // Add nums array to result twice
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i]);
    }
    // Add nums array again
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i]);
    }
    return result;
};

console.log(getConcatenation([1,2,1])); // Output: [1, 2, 1, 1, 2, 1]
