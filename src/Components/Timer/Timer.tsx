import React,{useState, useEffect} from 'react';
// Time Calculator
import calculateTimer from '../TimeCalculator';
import TimerButton from '../TimerButton/TimerButton'
import './Timer.css';
function Timer(){
    
    let [timeInseconds, setTimeInseconds] = useState<number>(0);
    let [timerArray, setTimerArray] = useState<Array<number|string>>([])
    
    useEffect(()=>{
        let timeArray:Array<number|string>=calculateTimer(timeInseconds);
        setTimerArray(timeArray)
    },[timeInseconds])
    return(
        <div>
            <h1 className="title">Stop Watch</h1>
        <div className="timer_container">
            <p className="timer">{timerArray[0]}</p>
            <span>:</span>
            <p className="timer">{timerArray[1]}</p>
            <span>:</span>
            <p className="timer">{timerArray[2]}</p>
            
        </div>
        <TimerButton setTimeInseconds={setTimeInseconds}/>
        </div>
    )
}
export default Timer;