const isAnagram = function(s, t) {
    if (s.lengh !== t.lengh){
        return false
    }
    const sortendS = s.split("").sort().join("")
    const sortendt = t.split("").sort().join("")
    return sortendS === sortendt;
};
console.log(isAnagram("art", "rat"))