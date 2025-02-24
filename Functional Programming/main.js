const radius = [2, 13, 16, 22];

function Area(data) {
  return 3.14 * data * data;
}

const Circumference = function (data) {
  return 2 * 3.14 * data;
};

const Diameter = function (data) {
  return 2 * data;
};
Array.prototype.Calculate = function prototype(logic) {
  let output = [];
  console.log(this);

  for (let index = 0; index < this.length; index++) {
    output.push(logic(this[index]));
  }
  return output;
};
console.log(radius.Calculate(Area));
const winCpy=window;
console.log(winCpy.length);