

let students = {
  Ravi: "present",
  Anu: "absent",
  Kiran: "present",
  Priya: "absent"
};

for (let name in students) {
  console.log(name + " is " + students[name]);
}
