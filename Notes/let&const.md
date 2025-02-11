# Let and Const

1. Let and const are declared in different scope unlike var which is declared in global scope.
2. Var can be redeclared in same scope but Let and Const can't be declared in same scope.

## Example In case of Var :-

```
var a = 30;
var a = 48;

// In case of the var redeclaration is excepted.

```

## Example In case of Let and Const:-

```
let a = 40;
let a = 19;

// here it will throw error i.e  SyntaxError: Identifier 'a' has already been declared.

```

# Temporal Dead Zone

## Only occurs in let and const keywords.

1. In case of the Let and Const it can't excess there value before initialization.

2. The time between declaration and initailization where the variable can't be accessed is known as **Temporal Dead Zone.**

# Window Object

1. This is the global object which gives access to browsers methods.
2. Hence the variable in the global scope and also be access by the window object.
3. Since the **let** and **var** are not created in the global scope therefore we can't access it by window object or with this keyword.

```
CODE:

var a=30;
let b=70;

Browser Console:

windows.a
30
window.b
undefined
```

# Difference Between let and const

The difference between let and const is that the const varible can't be resign and has to be initialized in the same line it was declared.

```
Here a can be  initialize later in the codebase
let a;
a=20;

But in const it has to be initialized while declaring.Also it can't be reinitialized.

const b=30;

```

# About Reference Error ,Type Error and Syntax Error.

1. Type Error :- When the operation or Arguments passed to a function is incompatiple with the type expected by that function or operator.
2. Reference Error:- When the variable does not exist(or not been initialized).
3. Syntax Error:-A SyntaxError is a type of error that is thrown when there is a typo in the code, creating invalid code - code which cannot be interpreted by the compiler. Some common causes of a SyntaxError are: Missing opening or closing brackets, braces, or parentheses. Missing or invalid semicolons.
