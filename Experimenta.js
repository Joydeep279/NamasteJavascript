const Cart = ["R15 V5", "Hero Splender", "NS 200", "N250"];
const state = true;

function validateCart(Cart) {
  if (Cart.includes("NS 200")) {
    return true;
  } else {
    return false;
  }
}
function createOrder(Cart) {
  return new Promise((resolve, reject) => {
    if (state && validateCart(Cart)) {
      setTimeout(() => {
        resolve("a1265ab564n23n");
      }, 2500);
    } else {
      const err = new Error("Cart is Empty");
      reject(err);
    }
  });
}

function proccedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve("14h345k76z43c");
    } else {
      const err = new Error("Transaction Failed");
      reject(err);
    }
  });
}
function updateCart(transactionID) {
  return new Promise((resolve, reject) => {
    if (transactionID) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
function showOrderDetails(isSucessfull) {
  return new Promise((resolve, reject) => {
    if (isSucessfull) {
      console.log("Order Placed!!");

      resolve(null);
    } else {
      reject("OOPS some error Occured!!");
    }
  });
}
createOrder(Cart)
  .then((orderId) => proccedToPayment(orderId))
  .then((transactionID) => updateCart(transactionID))
  .then((isSucessfull) => showOrderDetails(isSucessfull))
  .catch((err) => {
    console.error(err);
  });

function counter(init) {
  let count = init;
  return function () {
    console.log(++count);
  };
}
const increment = counter(0);
window.document.getElementById("BTN").addEventListener("click", () => {
  increment();
});
