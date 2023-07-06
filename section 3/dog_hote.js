// Dado un array de precios en habitaciones de perritos y el numero de perritos,
// ordenar los perritos dejando un espacio vacio entre medio
// maximizando las ganancias en todo tiempo

function maximizeProfits(prices, numberOfDogs) {
    prices.sort((a, b) => b - a);
    
    const orderedDogs = [];
    
    for (let i = 0; i < prices.length; i++) {
    orderedDogs.push(prices[i]);
    
    if (i + numberOfDogs < prices.length) {
        for (let j = 0; j < numberOfDogs; j++) {
        orderedDogs.push(null);
        }
    }
    }
    
    return orderedDogs;
}

const prices = [10, 20, 30, 40, 50];
const numberOfDogs = 2;
const orderedDogs = maximizeProfits(prices, numberOfDogs);
console.log(orderedDogs); 