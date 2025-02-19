function test() {
  function test1() {
    console.log(data);
  }
  var data = 10;
  let temp = 23;
  let func = function main() {
    console.log("In Main() Function");
  };
  func();
  test1();
}
test();
