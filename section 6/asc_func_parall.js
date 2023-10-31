var promiseAll = function(functions) {
    const x =  functions.map(func => func())
    return Promise.all(x)
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log);
