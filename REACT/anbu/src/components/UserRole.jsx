import React from 'react'

function UserRole() {

    const role="Admin"

    if(role){
        return <h2>Admin DashBoard</h2>
    }else if(role ==="user"){
        return <h2>User DashBoard</h2>
    }else{
        return <h2>Guest page</h2>
    }
  
}

export default UserRole