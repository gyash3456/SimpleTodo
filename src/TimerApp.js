import React from "react";
import { useState, useEffect } from "react";

const TimerApp = () => {
    const [time, setTime] = useState(0);
    const [finalTime, setFinalTime] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [displayTime, setDisplayTime] = useState(0);
    const handleClick = (timeArg) => {
        const currtime = new Date().getTime();
        const finalTime = currtime + (Number(timeArg) + 2) * 1000;
        setFinalTime(finalTime);
        setStartTimer(true);
    };
    useEffect(() => {
        let intervalId;
        if (startTimer) {
            intervalId = setInterval(() => {
                if (Math.floor(finalTime - new Date().getTime()) <= 1) {
                    setStartTimer(false);
                } else {
                    setDisplayTime(finalTime - new Date().getTime());
                }
            }, 1000);
        }
        if (Math.floor(finalTime - new Date().getTime()) <= 1) {
            console.log("you are when time 0 left");
            // setStartTimer(false);
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [startTimer]);
    return (
        <div>
            TimerApp
            <input type="number" onChange={(e) => setTime(e.target.value)}></input>
            <button onClick={() => handleClick(time)}>Start Timer</button>
            {Math.floor(displayTime / 1000)}
        </div>
    );
};

export default TimerApp;
