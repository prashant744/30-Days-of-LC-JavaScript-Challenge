/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const Arr=[];

    for(let i=0;i<arr.length;i++){
        Arr[i]=fn(arr[i],i);
    }
    return Arr;
};