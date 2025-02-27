const cart = ["Shoe", "Laptop", "Mouse", "Keyboard", "Phone"];

const API_URL = "https://api.github.com/users/akshaymarch7";
const apiData = fetch(API_URL);
apiData
  .then((orderID) => createOrder(orderID))
  .then((res) => proceedToPayment(res))
  .then((res) => updateCart(res))
  .then((paymentId) => FinalStage(paymentId));
