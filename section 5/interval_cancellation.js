var cancellable = function(fn, args, t) {
    let intervalId = null;

    fn(...args);

    const startInterval = () => {
        intervalId = setInterval(() => {
            fn(...args);
        }, t);
    };
    startInterval();

    const cancelFn = (cancelT) => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        if (cancelT) {
            setTimeout(() => {
                fn(...args);
            }, cancelT);
        }
    };
    return cancelFn;
};

const cancelableFn = cancellable(
    (arg1, arg2) => {
        console.log('Function called with args:', arg1, arg2);
    },
    ['Roguin', 'Emily'],
    1000 
);

cancelableFn(5000);


