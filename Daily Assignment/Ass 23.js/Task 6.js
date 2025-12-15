// Create a User class
class User {
  // Constructor to initialize name and email
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Method to simulate login
  login() {
    console.log(`${this.name} has logged in with email: ${this.email}`);
  }
}

// Example usage:
const user1 = new User("Anbu", "anbu@example.com");
user1.login(); // Output: Anbu has logged in with email: anbu@example.com



class user{
    constructor(name , email){
        this.name = name,
        this.email = email 
    }

    login(){
        console.log(`${this.name} has logged in with email:${this.email}`);
    }
}
const user2 = new user ("Anbu"," anbarasuanbu@gmail.com");

user2.login();