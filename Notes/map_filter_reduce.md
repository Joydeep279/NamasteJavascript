# MAP

> **MAP is used where we have to transvers the whole array or perform any operation in the whole array. The return of the output is the complete array**

#### Code to double the value of the array.

```
const data =[12,45,12,5,223];

const output=data.map((x)=>x*2);

console.log(output);

```

# Filter

> **When a partial element of an array is returned we use filter**

### Code to find even number:-

```

const data =[12,45,12,5,223];
const output=data.filter((x)=>x%2;);
console.log(output);

```

# Reduce

> **The output of the reduce is totally diffent from the array like the sum of the array,maximum etc.**

```
const data =[23,54,12,3,56];

const output =data.reduce(function (acc,cur){
    if(cur>acc){
        acc=cur;
    }
    return acc;
},-99999)

console.log(output);

```
