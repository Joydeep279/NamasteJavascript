# Promise API

> **Using to make parallel API calls. Its takes promises in form of array.**

## Promise.all()

> **It makes parallel api calls return the result of the all resolve promises.If one or more api call get rejected the whole api call get stoped and catch() get executed.**

1. **If all the sattled promises get resolved** it returns the array of .then() function.

2. **As soon as any one of the promise from the array of promises** get rejected error is given or catch() is executed.

3. **If all the sattled promises get rejected** it return the error or executes catch of the first rejected promise.

## Promise.allSettled()

> **Here is waits for all the api call to be sattled irrective of the result.** This is the safest option among all.

## Promise.race()

> **The fastest promise call to get settled is returned.Irrective of gitting rejected or resolved.**

## Promise.any()

> **The first settled promise to get resolved get returned.**

> **NOTE: If the settled promises get rejected it return AggregateError in the console.**
