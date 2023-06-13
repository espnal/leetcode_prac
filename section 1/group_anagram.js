const groupAnagrams = function(strs) {
    const anagramMap = new Map();
    
    for (let word of strs) {
        const sortedWord = word.split('').sort().join('');
        
        if (anagramMap.has(sortedWord)) {
            anagramMap.get(sortedWord).push(word);
        } else {
            anagramMap.set(sortedWord, [word]);
        }
    }
    
    console.log(Array.from(anagramMap.values()));
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])