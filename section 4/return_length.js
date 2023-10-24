var argumentsLength = function(...args) {
    let x = args
	return x.length
};

console.log(argumentsLength({}, null, "3"));