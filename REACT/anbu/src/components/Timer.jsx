import React,{useEffect , useState} from 'react'

function Timer() {

    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds+1)
        }, 1000);
        return ()=>{
            clearInterval(timer);
        }
    },[]) // []--> run once on mount
  return (
    <div>
        <h2>Timers</h2>
        <p>Seconds Passed :{seconds} </p>
    </div>
  )
}

export default Timer