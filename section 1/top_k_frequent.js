const topKFrequent = function(nums, k) {
    let frequencyMap = {};

    for (let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    return Object.keys(frequencyMap)
        .sort((a, b) => frequencyMap[b] - frequencyMap[a])
        .slice(0, k);
};
console.log(topKFrequent([1,5,2,3,8,5,7,5], 5))