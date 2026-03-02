import React from 'react'

function Product({name , price}) {
  return (
    <>
    <h2>Offer 25%</h2>
    <div style={styles.card}>
        <h3>Product name:{name} </h3>
        <p>Price: ₹{price}</p>
    </div>
    </>
  )
}

export default Product



const styles ={
    card:{
        border: "2px solid black",
        padding:'20px',
        width:'250px',
        textAlign:'center',
        margin:'20px',
       borderRadius:'10px',
       backgroundColor:"green",
       color:"black",
       alignItems:"center",
       display:"inline-blck"
        

    }
}