// Given an integer array nums, return an array answer such that answer[i] is equal to the 
// product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums) {
  const n = nums.length;
  console.log(n)
  const answer = new Array(n); // Crea un nuevo array para almacenar los resultados

  let prefixProduct = 1; // Inicializa el producto de prefijo como 1

  for (let i = 0; i < n; i++) {
    answer[i] = prefixProduct; // Almacena el producto de prefijo actual en el array answer
    prefixProduct *= nums[i]; // Actualiza el producto de prefijo multiplicándolo por el elemento actual de nums
  console.log(answer)
  }

  let suffixProduct = 1; // Inicializa el producto de sufijo como 1


  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffixProduct; // Actualiza el elemento actual del array answer multiplicándolo por el producto de sufijo actual
    suffixProduct *= nums[i]; // Actualiza el producto de sufijo multiplicándolo por el elemento actual de nums
    console.log(answer)
  }

  return answer; 
}

console.log(productExceptSelf([1, 2, 3])); 

function productExceptSelf(nums) {
  const product = nums.reduce((acc, num) =>  acc * num);
  console.log(product)

  return nums.map((num) => product / num);
}

console.log(productExceptSelf([1, 2, 3]));
