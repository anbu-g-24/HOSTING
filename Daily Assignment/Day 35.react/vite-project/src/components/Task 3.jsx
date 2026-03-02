import React from 'react'

function Button() {
    const handleClick = ()=>{
        alert("Button Clicked")
    }

  return (
    <div>
        <h2>Alert</h2>
        <button onClick={handleClick}>
            Click Me
        </button>

    </div>
  )
}

export default Button;