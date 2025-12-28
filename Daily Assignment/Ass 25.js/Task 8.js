const students = [
  ["Anbu", 85],
  ["Karthik", 78],
  ["Priya", 92],
  ["Rahul", 88]
];

// Print each student's data
students.forEach(student => {
  console.log("Name:", student[0], "Marks:", student[1]);
});



for (let [name, marks] of students) {
  console.log(`Name: ${name}, Marks: ${marks}`);
}
