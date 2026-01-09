
import React from 'react'

function LoginStatus() {

    const isLoggedIn= false;
  return (
    <>
    <h2>{isLoggedIn ?"welcome back":"Please Login" } </h2>

    <Notification />
    </>
  )
}

export default LoginStatus





// function LoginStatus(){
// const isLoggedIn = true;

// if (isLoggedIn){
//     return <h2>Welcome User</h2>
// }else{
//     return <h2>Please Login</h2>
// }
    
// }

// export default LoginStatus