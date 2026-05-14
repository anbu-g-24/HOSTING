import React from 'react'

function Btn() {

  const name = "Anbarasu"
  const skill = "Developer"

  function btn() {
    alert("Button Clicked")
  }

  return (
    <div>

      <h3 id='title'>
        Hello {name}
      </h3>

      <p>{skill}</p>

      <button onClick={btn}>
        CLICK BTN
      </button>

    </div>
  )
}

export default Btn