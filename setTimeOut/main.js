// function main() {
//   for (var a = 0; a < 5; a++) {
//     function fix(a) {
//       setTimeout(() => {
//         console.log(a);
//       }, a * 1000);
//     }
//     fix(a);
//   }
// }
// main();
function main() {
  for (var i = 0; i < 5; i++) {
    function fix(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    fix(i);
  }
}
main();
