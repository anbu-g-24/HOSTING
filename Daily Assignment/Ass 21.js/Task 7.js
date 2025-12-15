let numbers = [10, 20, 30, 40, 50];
let searchValue = 30;
let found = false;

for (let num of numbers) {
  if (num === searchValue) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Value found in the array");
}
 else {
  console.log("Value not found in the array");
}
