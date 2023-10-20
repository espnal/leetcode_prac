const map = function(arr, fn) {
    const array = []
    for (var i = 0; i < arr.length; i++) {
        if(fn.length>1){
            array.push(fn(arr[i],i))
        }else{
            array.push(fn(arr[i]))
        }
    }
    return array
};
const arr = [1,2,3]
const plusone =(n, i) =>{ return n + i; }

console.log(map(arr, plusone))