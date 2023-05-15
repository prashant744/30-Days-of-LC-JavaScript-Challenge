/**
 * @param {number} millis
 */
async function sleep(millis) {
  let res = new Promise(function (resolve) {
    setTimeout(() => resolve(), millis);
  });
  await res;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */