function test() {
  function test1() {
    console.log(data);
  }
  var data = 10;

  let func = function main() {
    console.log("In Main() Function");
  };
  func();
  test1();
}
test();

// returing Function
function deep() {

  
  function x() {
    let data2 = 10;
    function y() {
      console.log(data2);
    }
    return y;
  }
  return x();
}

let temp = deep();
// ....
temp();
