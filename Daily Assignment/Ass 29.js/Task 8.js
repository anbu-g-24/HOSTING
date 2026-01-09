async function fetchUserData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response){
            throw new Error("Failed to fetch user data");
                }
                const user = await response.json();
                console.log(user);
                
    }catch (error){
        console.log("Error:", error.message);
        
    }
}
fetchUserData();