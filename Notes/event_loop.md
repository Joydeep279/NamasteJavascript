## Working of call stack

> **Whatever which comes to call strack get executed.**

# How Async Works

> As we can see that JS wait for nothing so to perform async task we need a timer. And that timer is provided by the browser.

# BROWSER

> The browser has so many super powers like we can access the server, location , DOM etc.

## WEB API

> **It is very shocking to know that the settimeout function,console,accessing the dom are not part of javascript. The javascript just gives us the access to using the API's with help of js.**

### Web API's are :-

1. fetch();
2. DOM API.
3. SetTimeOut();
4. Location.
5. Local Storage.
6. Console.

> **NOTE: We can access this browser API's with the help of global object know as window.**

```
window.console.log("hello);

```

# Working of WebAPI:

## Callback Queue:-

> **When any web api is called is it first stored in Web API Container. When the event gets triggered the callback function is pushed to the callback queue. The work of the callback queue is to store that callback function.**

## Microtask Queue:-

> **When ever the is a callback function coming from promises or Mutation Observer than instead of going to the callback queue it goes to the Microtast Queue**

## Event Loop

> **The working of the event loop is to push the callback function to the call stack when the call stack is empty.**

> **NOTE:** Event Loop gives more priority to the microtask queue than callback queue.

## STARVATION In Callback Queue

>**When the callback function in microtask queue pushes other callback function in microtask queue which leads to not leading the callback queue to hold for sometime. This lead to the STARVATION of the Callback Queue.**
