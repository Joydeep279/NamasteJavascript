const Bikes = ["R15 V5", "Hero Splender", "NS 200", "N250"];
const promiseState = true;

function createOrder(Bikes) {
  return new Promise((res, reject) => {
    if (promiseState) {
      return res(Bikes.length);
    } else {
      const err = new Error("Cart is Empty!!");
      reject(err);
    }
  });
}
createOrder(Bikes)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
