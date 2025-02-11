# Higher Order Function

> **In JavaScript the higher order function is the funtion that expect or return another function.** > **This makes the language very powerful.**

```
const radius = [2, 4, 5];

function area(value) {
  return 3.14 * value * value;
}

function circumference(value) {
  return 2 * 3.14 * value;
}
function diameter(value) {
  return 2 * value;
}

function calculate(logic) {
  var output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}

console.log(calculate(area));
console.log(calculate(circumference));
console.log(calculate(diameter));
```


