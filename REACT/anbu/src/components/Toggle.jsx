import { useState } from "react";

function Toggle(){
    const [isOn, setIsOn] = useState(false)

    const  toggleHandler =()=>{
        setIsOn(!isOn)
    }

    return (
    <div style={{border:"1px solid green", padding:"15px", marginTop:"15px"}}>
        <h2>ToggleHandler</h2>

        <button onClick={toggleHandler} style={{backgroundColor:isOn ? "green":"red"}}></button>
        {
            isOn?"ON":"OFF"
        }
        
    </div>
)

}
export default Toggle

