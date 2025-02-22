console.log("Start");
setTimeout(() => {
  console.log("SetTimeOut CB Executed!");
}, 5000);

let startDate = new Date().getSeconds();
let endDate = startDate;

while (endDate < startDate + 10) {
  console.log(endDate);

  endDate = new Date().getSeconds();
}

console.log("END");
