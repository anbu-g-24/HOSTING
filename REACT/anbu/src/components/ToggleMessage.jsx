import React, { useState } from 'react'

function ToggleMessage() {

    const [show , setShow]= useState(false);
  return (
    <>
    <button onClick={()=> setShow(!show)}>
        Toggle Message
    </button>

    {show && <p>Hello ! You Toggled me</p>}


    </>
  )
}

export default ToggleMessage