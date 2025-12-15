// Student class
class Student {
  constructor(id, name, age, grade) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method to display student details
  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Student Management System class
class StudentManagement {
  constructor() {
    this.students = []; // Array to store students
  }

  // Add a new student
  addStudent(student) {
    this.students.push(student);
    console.log(`Student ${student.name} added successfully.`);
  }

  // View all students
  viewAllStudents() {
    console.log("All Students:");
    this.students.forEach(student => {
      console.log(student.getDetails());
    });
  }

  // Find student by ID
  findStudentById(id) {
    const student = this.students.find(s => s.id === id);
    if (student) {
      console.log("Student Found:", student.getDetails());
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
}

// Example Usage
const sms = new StudentManagement();

// Create students
const student1 = new Student(1, "Anbu", 20, "A");
const student2 = new Student(2, "Maya", 19, "B");

// Add students
sms.addStudent(student1);
sms.addStudent(student2);

// View all students
sms.viewAllStudents();

// Search for a student by ID
sms.findStudentById(1);
sms.findStudentById(3);
