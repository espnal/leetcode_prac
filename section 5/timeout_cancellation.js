function delayExecution(fn, args, t) {
    let canceled = false;
  
    const cancelFn = () => {
      canceled = true;
    };
  
    const execute = () => {
      if (!canceled) {
        fn(...args);
      }
    };
  
    setTimeout(execute, t);
  
    return cancelFn;
  }
  
  function myFunction(arg1, arg2) {
    console.log(`Function called with arguments: ${arg1}, ${arg2}`);
  }
  
  const cancel = delayExecution(myFunction, [10, 20], 2000);
  cancel();
  