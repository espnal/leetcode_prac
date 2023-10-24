function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        console.log(key) 
       // La propiedad 'Key' no existe en myObject
        if (cache[key] === undefined) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);


const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedSum(2, 3));
console.log(memoizedSum(2, 3));
console.log(memoizedFib(5)); 
console.log(memoizedFib(5));   
console.log(memoizedFactorial(4)); 
console.log(memoizedFactorial(4));
