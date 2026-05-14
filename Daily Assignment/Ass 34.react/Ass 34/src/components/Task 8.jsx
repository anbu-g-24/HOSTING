import React from 'react'

function Card1({children}) {
  return (
    <>
    <h2>Product</h2>
    <div style= {styles.Card}>
        {children}
    </div>
    </>
  )
}

export default Card1



const styles={
     Card: {
        border:"2px solid green",
        width:"200px",
        padding:"20px",
        borderRadius:"10px",
        backgroundColor:"gray",
        color:"black",
        textAlign:"center",
        margin:"20px",
        
    }
}
