function crearListasDeRepetidos(arr) {
    const listas = {};
    
    for (const num of arr) {
        if (listas[num]) {
            listas[num].push(num);
            console.log(listas[2])
        } else {
            listas[num] = [num];
        }
    }

    return Object.values(listas);
}

const arreglo = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6];
const listasDeRepetidos = crearListasDeRepetidos(arreglo);

console.log(listasDeRepetidos);
