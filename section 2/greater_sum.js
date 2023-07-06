// Dado un array de numeros enteros, 
// devuelve la suma mas grande entre 
// dos numeros adyacentes

function maxEnsuma(array) {
    let maxSum = -Infinity;
    const {length} = array;
    for(let i = 0; i < length -1; i++) {
        const sum = array[i] + array[i + 1]
        // if (sum > maxSum) {
        //     maxSum = sum;
        // }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}
console.log(maxEnsuma([2,4,1,5,6,3]))