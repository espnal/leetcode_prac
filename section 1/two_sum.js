// Supongamos que tenemos el arreglo 
// nums = [2, 7, 11, 15] y el objetivo target = 9. 
// Queremos encontrar dos números en nums cuya suma sea 
// igual a target.

// En la primera iteración del bucle, i es 0 y nums[i] es 2. 
// Entonces, el complemento se calcula como complement 
// = target - nums[i] = 9 - 2 = 7.

// En la siguiente iteración, verificamos si el complemento 
// (7) está presente en numMap. Si está presente, significa que 
// ya hemos encontrado el otro número que suma con 2 para dar como 
// resultado el objetivo 9.

// En este ejemplo, el número 7 sí está presente en numMap 
// (ya que es el segundo número del arreglo original). Por lo tanto, 
// hemos encontrado la pareja de números que suma a 9.
// Finalmente, devolvemos un arreglo que contiene el índice del 
// número 7 en nums (índice 1) y el índice del número 2 (índice 0). 
// Entonces, el resultado sería [0, 1].

function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            console.log([numMap.get(complement), i]);
        }
        
        numMap.set(nums[i], i);
    }
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
//   console.log(result);
