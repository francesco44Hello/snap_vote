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
    

    switch (pageType) {
		case "pro-cons-input":
			return <p className="countdown-timer">{time}</p>
		case "pros-cons-comment":
			return <p className="countdown-timer">{time}</p>
		case "pros-cons-vote":
			return <p className="countdown-timer">{time}</p>
		case "pros-cons-results":
			return <p className="countdown-timer">{time}</p>
		case "weighted-vote-input":
			return <p className="countdown-timer">{time}</p>
		case "weighted-vote-results":
			return <p className="countdown-timer">{time}</p>
		default:
			break;
	}
}