function createLoginCounter(){
    let logincount =0;

    return function(){
        logincount++;
        console.log("User logged in",logincount, "times");
        
    }

}
 
const login = createLoginCounter();

login();
login();
login();
login();
login();
login();

