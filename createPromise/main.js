const Bikes = ["R15 V5", "Hero Splender", "NS 200", "N250"];
const promiseState = true;
const promise = createOrder(Bikes);
console.log(promise);

promise
  .then((orderId) => proccedToPayment(orderId))
  .then((paymentId) => updateCart(paymentId))
  .catch((err) => {
    console.log(err.message);
  });

function validateCart(Bikes) {
  if (Bikes.length && promiseState) {
    return true;
  } else {
    return false;
  }
}

function createOrder(Bikes) {
  return new Promise((resolve, reject) => {
    if (validateCart(Bikes)) {
      setTimeout(() => {
        resolve(Bikes.length);
      }, 5000);
    } else {
      const err = new Error("Cart is Empty");
      reject(err);
    }
  });
}
function proccedToPayment(orderId) {
  const Order = orderId;
  console.log(Order);
  console.log(promise);

  return new Promise((resolve, reject) => {
    console.log("Transaction Sucessful");

    resolve("aed1s2f3g54d");
  });
}
function updateCart(paymentId) {
  console.log(paymentId);
}
