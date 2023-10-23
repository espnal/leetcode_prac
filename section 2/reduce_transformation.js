var reduce = function(nums, fn, init) {
    let finalNum = init;
    if(nums.length != 0){
        for(var i=0; i < nums.length; i++){
        // finalNum+=nums[i];
        finalNum = fn(finalNum,nums[i]);
        }
        
    }
    return finalNum
};
const nums = [1,2,3,4]
// const fn = function sum(accum, curr) { return accum + curr; }
const fn = function sum(accum, curr) { return accum + curr * curr; }
const init = 100
console.log(reduce(nums, fn, init))