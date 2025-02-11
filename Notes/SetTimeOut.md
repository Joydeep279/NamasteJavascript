# SetTimeOut

**It is a method used to execute a function after certain time.**

> Example

```
CODE ==>
setTimeout(() => {

}, timeout);

```

# Most famous Interview Question :~
> **NOTE:** Must revice before interview

```
CODE ==>
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
}

OUTPUT ==>
6
6
6
6
6
```

> **This did't print as expected because var is not block scope.The all the settimeout function was pointing at the same memory location that is pointing to 6.As a result 6 is printed again and again.**

# SOLUTION

**Now the Solution to this problem is :-**

```
The main problem here is that var is function scope so if we create a funtion test and pass the variable i we can make a copy of if.

CODE ==>

for(var i=0;i<=5;i++>){
  function test(x){

    setTimeout(() => {

      console.log(x);

   }, x * 1000);

  }
  test(i);
}

```

