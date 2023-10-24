var addTwoPromises = async function(promise1, promise2) {
    const val1 = await promise1;
    const val2 = await promise2;
    return val1 + val2;
}

// const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
// const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

console.log(addTwoPromises(Promise.resolve(2), Promise.resolve(2)))