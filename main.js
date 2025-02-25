//  MAP()
const arr = [12, 43, 1, 4, 2];
function double(x) {
  return x * 2;
}
function tostring(x) {
  return x.toString(2);
}
const result = arr.map(tostring);
console.log(result);
// FILTER()
const Filter = [12, 4, 2, 7, 3];
console.log(Filter);
function isOdd(x) {
  return x % 2;
}
// REDUCE()
if (1) {
  console.log("True");
}

const Odds = Filter.filter(isOdd);

console.log(Odds);

const user = [
  { firstName: "Joydeep", lastName: "Nath", Age: 26 },
  { firstName: "Rahul", lastName: "Das", Age: 65 },
  { firstName: "Amon", lastName: "Ahmed", Age: 25 },
  { firstName: "Rajdeep", lastName: "Gupta", Age: 45 },
  { firstName: "Raja", lastName: "Roy", Age: 32 },
];
const FullName = user.map((item) => {
  return item.firstName + " " + item.lastName;
});
console.log(FullName);

const Young = user
  .filter((item) => item.Age < 35)
  .map((item) => item.firstName);
console.log(Young);
const young = user.reduce((result, item) => {
  if (item.Age < 35) {
    result.push(item.firstName);
  }
  return result;
}, []);
console.log(young);
