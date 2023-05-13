/**
 * @param {Function} fn
 */
function memoize(fn) {
    const res={}
    return function(...args) {
        let key=JSON.stringify(args);
        if(key in res){
            return res[key]
        }else{
            return res[key]=fn(...args)
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */