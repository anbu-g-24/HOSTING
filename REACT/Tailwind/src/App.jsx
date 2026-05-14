import { use, useState } from "react";

function App()
{
  const [count, setcount]= useState(0)

  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
      <button onClick={() => setcount(0)}>Reset</button>
    </div>
  )
}