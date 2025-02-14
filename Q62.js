var singleNumber = function(nums) {
let values = nums.filter(item  =>
nums.indexOf(item) === nums.lastIndexOf(item)
)
return values[0]
};


console.log(singleNumber([2,2,1]))