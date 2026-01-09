function loginUser(name){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(name){
                resolve("Welcome "+ name);
            }else{
                reject("Invalid user");
            }
        },2000);
    });
}

async function headleLogin(){
    try{
        const message = await loginUser("Anbu");
        console.log(message);
        console.log("Login successful");
    }
    catch(error) {
        console.log("Error:", error);
        
    }
}

headleLogin();

