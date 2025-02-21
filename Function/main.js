var x = 1;
a();
b();
function a() {
  console.log(x);
  var x = 10;
}
function b(params) {
  console.log(x);
}

// Function Statement

function main() {
  console.log(10);
}
main();

// Function Expression

var temp1 = function main() {
  // => This behave like a variable(Hoisting Part) but can be executed using the first Bracket

  console.log("This is Function Expression !!");
};
temp1();

/*
DIFFERENCE: FxN Statement vs FxN Expression

Hoisting: 
expression Function acts as an variable!

*/
// Anormous Function ==> When a function is used as value the name of the Function Does not matter. So this comes to play

const value = function () {
  console.log("Hello World");
};
value();