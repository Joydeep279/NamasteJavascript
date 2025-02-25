const cart = ["Shoe", "Laptop", "Mouse", "Keyboard", "Phone"];

const GITHUB_API = "https://api.github.com/users/Joydeep279";
const user = fetch(GITHUB_API);
console.log(user);

user.then((res) => {
  console.log(res);
});
