import React from "react";
import { useState, useEffect } from "react";

export const TimerApp = () => {
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

export const ReverseTimer = () => {
  const [time, setTime] = useState(5);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time - 1);
      console.log(time);
    }, 1000);
    if (time <= 0) {
      clearInterval(id); //1
    }
    return () => clearInterval(id); //2
  });
  return <div>{time}</div>;
};

//why line 2 is important
//because if you don't clear the time out, after 60 seconds 60 timeout will be running
//each setting its own time asynchronously with some delay which will be visibly distorting
//so when new useEffect will be running previous timeout would be cleaned up
//why line 1 is important
//when the time becomes less than = 0 then setInterval will be immediately cleared up
// so that no state change takes place, if there will not be state change, useEffect will not run
//if useEffect will not run, new setInterval will not be created and our clock halts.
