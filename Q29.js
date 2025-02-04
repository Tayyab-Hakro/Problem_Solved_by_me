function frequentEle(arr) {
    let freqMap = {};
    let maxCount = 0;
    let mostFrequent;

    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;

        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

console.log(frequentEle([12, 45, 34, 43, 12, 11, 12])); // Output: 12
