// Cuando una función se define con ...args en 
// los parámetros, no significa que deba recibir 
// argumentos como un solo array. En cambio, 
// ...args es una sintaxis que permite a la función 
// recibir cualquier número de argumentos y recopilarlos 
// en un array llamado args. Puede recibir argumentos de 
// cualquier forma que desees pasarlos, ya sea como 
// argumentos separados o como un array.
var once = function(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        }
        return undefined;
    };
};
const fn = (a,b,c) => (a * b * c)
const onceFn = once(fn);
console.log(onceFn(5, 7, 4));