function isSpecialArray(nums) {
    for (let i = 0; i < nums.length - 1; i++) {  // Fix: Correct loop condition
        if (!((nums[i] % 2 === 0 && nums[i + 1] % 2 !== 0) || 
              (nums[i] % 2 !== 0 && nums[i + 1] % 2 === 0))) {
            return false; // Return false if any adjacent pair is invalid
        }
    }
    return true; // If all pairs are valid, return true
}
