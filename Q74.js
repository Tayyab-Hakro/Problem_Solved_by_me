var maximumWealth = function(accounts) {
    let maxWealth = 0;
    
    for(let account of accounts) {
        let sum = account.reduce((acc, curr) => acc + curr, 0);  // Sum of current account
        maxWealth = Math.max(maxWealth, sum);
    }
    
    return maxWealth;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));  // Output: 6
