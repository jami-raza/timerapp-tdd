import React, { useState } from 'react';
import './TimerButton.css'
// Type
type Props ={
    setTimeInseconds : Function,
    
}
function TimerButton(props:Props){
    const {setTimeInseconds} = props
    const [intervalid, setIntervalid] = useState<number>(0);
    const [status, setStatus] = useState(0);
// Timer Start function
    const handleStart = () =>{
        let interval:any = setInterval(()=>{
            setTimeInseconds((state:number)=>state+1)
            
        },1000);
        setIntervalid(interval)
        setStatus(1)
    }
// Timer Stop function
    const handleStop = () =>{
        clearInterval(intervalid)
        setStatus(2)
    }
// Timer Reset function
    const handleReset = () =>{
        clearInterval(intervalid)
        setTimeInseconds(0)
        setStatus(0);
    }
// Timer Start then Stop and resume 
    const resume = () => handleStart();
    return(
        <div className="timer_button">
            {(status === 0) ?
            <button onClick={handleStart}> Start</button>:""
            }
            {(status === 1) ?
            <button onClick={handleStop}> Stop</button>:""
            }
            {(status === 2) ? 
            <button onClick={resume}>Resume</button>:""
            }
            <button onClick={handleReset}> Reset</button>
        </div>
    )
}
export default TimerButton;