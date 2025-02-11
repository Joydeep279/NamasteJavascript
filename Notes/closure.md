# CLOSURE

1. Function along with its lexical environment is called closures.

2. As the function his retured along with its lexical scope therefore we can excess its parents lexical scope even when the function is does not exist.

```
CODE =>
  function level1() {
  var a = 29;

  function level2() {
    console.log(a);
  }
  return level2;
 }
 var temp = level1();
 temp();

 Output => 29

 Explanation => Here when the expression was passed the function along with its lexical environment was passed.
 As a result we were able to excess the variable a.
```
