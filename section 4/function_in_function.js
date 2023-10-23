function composeFunctions(functions) {
    return function(x) {
        // Start with the initial value as x
        let result = x;

        // Apply each function in the array from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
}

// Example usage:
const functions = [x => x + 1, x => x * x, x => 2 * x];
const composedFunction = composeFunctions(functions);

const x = 4;
const output = composedFunction(x);

console.log(output);
