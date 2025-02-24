const sample = [12, 5, 3, 42, 6];
// MAP
const result = sample.map((i) => i * 2);
// FILTER
const fil = sample.filter((i) => i % 2);
console.log(fil);
// REDUCE
const redu = sample.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);
console.log(redu);
const maximum = sample.reduce((max, ele) => {
  if (max < ele) {
    max = ele;
  }
  return max;
}, sample[0]);
console.log(maximum);
