import { useState } from "react"



function controlledinputs() {

    const [name , setName] = useState("")
    const handleChange = (event)=>{
        setName(event.target.value)
    }
    
  return (
    <div>
        <h1>Controlled input</h1>

        <input type="text" value={name} onChange={handleChange}  placeholder="Enter your name"/>

        <h2>Typed Value :{name} </h2>    

    </div>
  )
}

export default controlledinputs