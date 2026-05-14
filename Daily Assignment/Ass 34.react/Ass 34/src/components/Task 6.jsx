import React from 'react'

function ProfileCard({name, role}){
    return(
        <div style={styles.card}>
            <h2>{name}</h2>
            <h3>{role}</h3>
        </div>
    )
};


export default ProfileCard;


const styles = {
    card:{
        border: "2px solid black",
        padding:'20px',
        width:'250px',
        textAlign:'center',
        margin:'20px',
       borderRadius:'10px',
       backgroundColor:"blue",
       color:"White",
       alignItems:"center",
       display:"inline-block"

    }
}