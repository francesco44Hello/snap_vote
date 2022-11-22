import './index.css';
import {useState} from "react";

//PLAN:
//A div containing a p tag
//p tag content will be the timer
    //The number updates every second
        //When 5 minutes have passed...
            //Alert pops up / page changes

export default function 
CountdownTimer({pageType}){

    const [time, setTime] = useState("0")
    setInterval(updateTime, 1000);

    function updateTime(){
        setTime(String(Number(time) + 1))
    }
    return <p className="countdown-timer">{time}</p>
}