import React from 'react'

function Array() {
    const fruits = ["Apple", "Orange", "Mango"]
  return (
    <ul>
        {fruits.map((fruit)=>(
            <li>{fruit}</li>
        ))}
    </ul>
    
  )
}

export default Array