# This Keyword

> **This keyword works differenly in different situation and also during strict or non-strict mode.**

## In Global space

```javascript
console.log(this);
```

> **In this case the this points to the global object.Here in case it points to the window object**

## In Function

### In strict mode

> **In Strict Mode this in function denotes to undefine**

```javascript
"use strict";

function main() {
  console.log(this); // =>undefine
}
```

> **The this keyword also depends on how the function is called.**

```Javascript

function main()
{
    console.log(this);
}
main(); // Undefined
window.main(); // => window object

```

## Non Strict Mode

### This Substitution

> **Inside non strict mode wherever this keyword refer to undefine or NULL the this keyword is refer to the Global Object.Also know as This substitution**

```javascript
function main() {
  console.log(this); // => Global Object
}
```

# Value of this in Object

> **NOTE: When function is used as a part of object is called method.**

```javascript
const student = {
  name: "Joydeep",
  x: function () {
    console.log(this); // => points to its own object
  },
};
```

> **In object this points to its object**

## Changing the this keyword

> **We can change the value of this using the call , apply and blind method.**

### Call

> **This method is use to use method of other objects and also pass other arguments.**

```Javascript
const object1={
    Name:"Joydeep",

    display:function(rollno){
        console.log(this.Name+" RollNo "+rollno);
    }
};

const object2={
    Name:"Rajdeep",

}
object1.display.call(object2);

```

### Apply

> **This method is used to pass arguments in form of array in the object method.**

```javascript
const object1 = {
  Name: "Joydeep",

  display: function (rollno) {
    console.log(this.Name + " RollNo " + rollno);
  },
};

const object2 = {
  Name: "Rajdeep",
};
object1.display.apple(object2, [20]);
```

## Blind

> **It does not directly invoke the method while it is called rather it return the function which we can invoke later.The arguments passed in this method is as same as the call method.**

```javascript
const student1 = {
  firstname: "Joydeep",
  lastname: "Nath",
  combine: function (data) {
    console.log(this.firstname + " " + this.lastname + " State:- " + data);
  },
};

const student2 = {
  firstname: "Rajdeep",
  lastname: "Roy",
};

const temp = student1.combine.bind(student2, "Assam");
temp();
```

# Arrow Function

> **In case of arrow function it does not have any this value so it refers to the value of this keyword of its lexical enclosing environment.**

```javascript
const obj = {
  a: 10,
  x: this, // => Here value of this in global object.
  display: function () {
    console.log(this.x); // => Here value of this is its own object.
  },
};
obj.display();
```

### Advance Concept

```javascript
const object1 = {
  data: 10,
  x: function () {
    const y = () => {
      console.log(this); // => Value of this will be its enclosing lexical context.
    };
    y();
  },
};
obj.x();
```
