import React from 'react'

function profileCard({name, role}) {
  return (
    
  
    <div style= {styles.Card}>
      <h2>{name}</h2>
      <h3>{role}</h3>
    </div>

    
  )
}

export default profileCard


const styles={
      Card:{
        borderRadius:"10px",
        border:"1px solid #000000",
        padding:"20px",
        width:"250px",
        textAlign:"center",
        boxShadow:"0 4px 8px rgba(0,0,0,0.1)",
        margin:"10px",
        display:"inline-block",
        backgroundColor:"green",
        color:"White"

      }

}