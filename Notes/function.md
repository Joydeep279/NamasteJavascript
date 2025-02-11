# Functions

## In JavaScript Function can be used as value.

## Function Statements

**Commonly declared function**

```
CODE =>

function a(){

    console.log("hello");

}

```

## Function Expression

**When a function is used as a variable then it is called function expressions.**

## Example

```
var temp = function (){
    console.log("expression executed");
}
```

# Difference Between Function statement and Function expression

**The main difference between function statements and function expression is hoisting.**

**In case of function statement we can invoke the function before initization.But with function expression we can't invoke before initialization.**

```
a();
b();

function a() {
  console.log("a is executed");
}

// Function exepression:-
var b = function () {
  console.log("b is executed");
};

Explanation => Here b is throw error because the value of type of b was variable and the value of the variable was undefine as a result it cant be invoked.
```

> **Note** function declaration is same as function statement.

# Anonymous Function

**A function without its name is called anonymous function**

## Example

```

function (){
    console.log("we are in anonymous function");
}

```

**It is used where function are used as a values.**

# Named Function Expression

**Named Function Expression is the function where the expression function is used with function name**

```
var temp = function abc()
{

    console.log("hello");
}
```

**Note: The function is not initialized in the global execution context as a result it can't be invoked be its name.**

## Example:

```
var temp = function display(){
    console.log("Executed");
}

```

**In the above function we can't invoke the function by its name because it is not in the global scope**

## Example

```
var temp = function display(){
    console.log("Executed");
}
display();
console:
ERROR- Display is not defined.

```

# First Class Function:

**The ability of function to be used as variable is called first class function.And sometime it is also called as first class citizen**
