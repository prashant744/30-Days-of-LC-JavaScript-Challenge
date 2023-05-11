/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result=x;
        functions.reverse();
        return functions.reduce((result,fn,index)=>result=fn(result),x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */