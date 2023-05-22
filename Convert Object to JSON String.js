/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    const type  = typeof object
    if(type === "string"){
        return `"${object}"`;
    }else if(Array.isArray(object)){
        let res = "["
        for(let key in object){
            if(res !== "["){
                res = `${res},`
            }
            res = `${res}${jsonStringify(object[key])}`
        }
        return `${res}]`;
    }else if (type === 'object' && object !== null){
        let res = "{"
        for(let key in object){
            if(res !== "{"){
                res = `${res},`
            }
            res = `${res}"${key}":${jsonStringify(object[key])}`
        }
        return `${res}}`;
    }else{
        return object;
    }
};