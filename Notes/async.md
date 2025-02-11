# ASYNC

> **Async is a keyword used to with function to make that function return promise.**

```JavaScript
async function main(){

    let a=10;

    return a;
}

```

# Await

> **It is a keyword that makes wait for a promise.**

```JavaScript

const prom1=new Promise(function(resolve,reject){
    resolve("Promise Resolved");
})

const prom2=new Promise(function(resolve,reject){
    resolve("Promise Resolved");
})

async function main()
{
    const data1=await prom1;
    console.log(data1);
    const data2=await prom2;
    console.log(data2);
}

main();
console.log("Program Ended");

```
>**Here the program will wait for the promise to get settled.**