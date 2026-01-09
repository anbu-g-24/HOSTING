fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data =>{
    console.log(data);
    
})
.catch(error =>{
    console.log("Error fetching data:", error);
    
});