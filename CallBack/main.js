const cart = ["Shoe", "Laptop", "Mouse", "Keyboard", "Phone"];
console.log(cart);

function createOrder(cart, test) {
  /*
    ..
    ...
    ....
    */

  test();
}

createOrder(cart, function ProceedToPayment() {
  console.log("Testing");
});
