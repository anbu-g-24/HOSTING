import React from 'react'

function Uncontrolledinputs() {
    const inputRef = useRef(null);

    const handleSubmit = ()=>{
        alert("Edntered Value : "+ inputRef.current.value);
    }
  return (
    <div>
        <h2>Uncontrolled inputs</h2>

        <input type="text" 
        ref={inputRef}/>

        <button onClick={handleSubmit}>submit</button>
    </div>

    
  )
}

export default Uncontrolledinputs 