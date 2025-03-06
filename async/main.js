/*
    async --> Always Returns a Promise
*/

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1: Resolved");
//     reject("P1: Reject");
//   }, 1500);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2: Resolved");
//     reject("P2: Reject");
//   }, 2500);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3: Resolved");
//     reject("P3: Reject");
//   }, 2000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P4: Resolved");
//     reject("P4: Reject");
//   }, 1200);
// });

// const result = Promise.all([p1,p2,p3,p4]);
// console.log(result);

// async function main() {
//   const temp = await pro1;
//   console.log(temp);
// }
// const data = main();
// console.log("Hello");

const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pro Resolved!");
  }, 5000);
});
const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pro Resolved!");
  }, 15000);
});

async function handlePromise() {
  const apiData1 = await pro1;
  console.log("After Await Pro1");
  console.log(apiData1);

  const apiData2 = await pro2;
  console.log("After Await Pro2");
  console.log(apiData2);
}

function getData() {
  console.log("Before Then");

  pro1.then((res) => {
    console.log(res);
  });
  console.log("After Then");
}
// getData();
handlePromise();
console.log("END");
// Real World
const apiURL = "https://api.github.com/users/Joydeep279";
async function getGitHubData() {
  const apiData = await fetch("https://api.github.com/users/Joydeep279");
  console.log(apiData);
  const res = await apiData.json();
  console.log(res);
  //   res.then((data) => console.log(data));
}
getGitHubData();
async function test() {
  console.log("Async FUNC Executed!");
}
test().then((res) => {
  console.log(res);
});
