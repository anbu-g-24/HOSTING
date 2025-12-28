// const user={
//     username:"Anbu",
//     isLoggedIn:true,


// Login() {
//     this.isLoggedIn=true;
//     console.log(`${this.username} logged in successfully`);
    
// },
// logout(){
//     this.isLoggedIn=false
//     console.log(`${this.username} logged out successfully`); 
// }
// };
// user.Login();
// user.logout();

const user ={
    username:"Anbu",
    isLoggedIn:true,

    Login(){
        this.isLoggedIn=true
        console.log(`${this.username} logged in successfully`);
    },
    Logout(){
        this.isLoggedIn=false
        console.log(`${this.username}logged out successfully`);
    
    }
};
user.Login();
user.Logout();