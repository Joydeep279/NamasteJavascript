var x = 1;
a();
b();
function a() {
  console.log(x);
  var x=10;
}
function b(params) {
  console.log(x);

}
