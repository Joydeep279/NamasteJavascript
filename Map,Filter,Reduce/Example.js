const user = [
  { firstName: "Joydeep", lastName: "Nath", Age: 26 },
  { firstName: "Rahul", lastName: "Das", Age: 65 },
  { firstName: "Amon", lastName: "Ahmed", Age: 45 },
  { firstName: "Rajdeep", lastName: "Gupta", Age: 45 },
  { firstName: "Raja", lastName: "Roy", Age: 32 },
];

const FullName = user.map((element) => {
  return element.firstName + " " + element.lastName;
});
console.log(FullName);
const freq = user.reduce((acc, curr) => {
  if (acc[curr.Age]) {
    acc[curr.Age] = ++acc[curr.Age];
  } else {
    acc[curr.Age] = 1;
  }
  return acc;
}, {});
console.log(freq);

const Young = user.filter((ele) => {
  let result = [];
  if (ele.Age <= 30) {
    result.push(ele.firstName);
  }
  return result;
});
console.log(Young);
