# Welcome to Callback Hell tuitorial

```javascript
const cart = ["Gold", "Bottle", "Rubber", "Laptop", "Mobile"];

api.createorder(cart, function () {
  api.proceedtopayment(function () {
    api.updatewallet(function () {
      api.updatecart();
    });
  });
});
```

> This way of creating multiple nested callbacks result in creation of pyramid of doom.

## Issuse faced with callback

**1. Invertion of control:- We lose control of api call as result we can't ensure the weather the callback call will be executed or not**

**2. Pyramid of Doom:- The code start expanding horizontally**
