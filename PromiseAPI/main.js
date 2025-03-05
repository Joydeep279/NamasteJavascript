/* 
Promise.all() => [FAIL FAST]request api call for all the Promises. Wait for all the API calls to finish.If it fails it return the Error
Promise.allSetteled()=> same as Promise.all() but with different error Handeling.Return all the response of the Promise
Promise.race() => Response --> First Promise  to Response.
Promise.any() => Response --> First Promise to Get Successed.

*/
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1: Success");
    reject("P1: Failed");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2: Success");
    reject("P2: Failed");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3: Success");
    reject("P3: Failed");
  }, 2000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P4: Success");
    reject("P4: Failed");
  }, 5000);
});

const apiData = Promise.any([p1, p2, p3, p4]);
apiData
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err.errors);
  });
