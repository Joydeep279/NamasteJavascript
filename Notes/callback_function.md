**JavaScript is single thread and synchronous language**

> Synchronous => In sequence.
> Single Thread => One thing at a time.

# Callback Function

> **The function which is passed as argument into another function is called callback function**

# Making Js Async

> **By using the settimeout method we can make js work asynchronously**

## Example

```
settimeout(function(){
    console.log("hello World);
},1000);

```

### In the above code we make a function execute after sometime and not in sync order. Thus be this we can attain the async nature of javascript.

# Blocking Main Thread

**In js it has only one execution context i.e. call stack so if any function is very heavy like it take 20sec to execute so the main thread is blocked as it have to complete that function.This lead in blocking the main thread.**

## Solution

### The settimeout function can be created which will lead in execution of that heavy function at the end. Hence not blocking the **Main thread**.

# Event Listners

> **Method used to execute function based on user active in the webpage.**

## Example

```
 document.getElementById("button1").addEventListener("click", function view() {
    console.log("Button Clicked", ++count);
  });

```

> **This code print the number of time the button has been click in the console.**

#### NOTE: For not letting the variable count change by other variables we can create a closure for data hiding. i.e created a function so that count variable does not stays in global scope.

# Disadvantages of EventListners

**The main problem of eventlistner is that they are heavy as they need to store its closure scope and the global scope so it ends up taking huge amount of space therefore making the website slow.**
