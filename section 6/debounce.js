var debounce = function(fn, t) {
    let timeout;
  
    return function(...args) {
      clearTimeout(timeout); 
  
      timeout = setTimeout(() => {
        fn(...args);
      }, t);
    };
  };
  const debouncedFunction = debounce((message) => {
    console.log(message);
  }, 50);
  
  debouncedFunction("Call me at 30ms"); // This will be cancelled
  debouncedFunction("Call me at 60ms"); // This will be cancelled
  debouncedFunction("Call me at 100ms"); // This will be executed after a 50ms delay
  