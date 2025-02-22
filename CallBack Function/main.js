function main(param) {
  param();
}
function first() {
  console.log("ONE");
}
first();
setTimeout(() => {
  console.log("Timer");
}, 1000);

main(function temp() {
  console.log("Hello World!!");
});
function Rapper() {
  let count = 0;
  document.getElementById("BTN").addEventListener("click", ()=>{
    console.log(`Clicked ${++count} Times.`);
    
  });
}
Rapper();

