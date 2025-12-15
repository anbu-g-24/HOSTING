let correctPassword = "1234";
let userPassword;

do {
  userPassword = prompt("Enter your password:");
} while (userPassword !== correctPassword);

console.log("Access granted!");
