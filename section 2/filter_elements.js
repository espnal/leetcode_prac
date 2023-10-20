var filter = function(arr, fn) {
    let counter = [];
    if(fn.length < 2){
        for(var i =0; i < arr.length; i++) {
            if(fn(arr[i])){
                counter.push(arr[i])
            }
        }
    }
    else{
        for(var i =0; i < arr.length; i++){
            if(fn(arr[i],i)){
                counter.push(arr[i])
            }
        }
    }
    return counter
};
const arr = [0,10,20,30]
const fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn))

const arr1 = [1,2,3] 
const fn1 = function firstIndex(n, i) { return i === 0;}
console.log(filter(arr1, fn1))