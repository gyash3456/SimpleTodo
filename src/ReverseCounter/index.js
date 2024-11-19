import React, { useState } from "react";
import { useEffect, useRef, useCallback } from "react";

const ReverseCounter = () => {
  const [time, setTime] = useState(10);
  let idRef = useRef(null);
  const handlePlay = () => {
    startTimer();
  };
  const handlePause = () => {
    clearInterval(idRef.current);
  };
  const handleReset = () => {
    clearInterval(idRef.current);
    setTime(30);
  };
  const startTimer = () => {
    idRef.current = setInterval(() => {
      console.log(time);

      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(idRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  //   useEffect(() => {
  //     // startTimer();
  //     return () => {
  //       clearInterval(idRef.current);
  //     };
  //   }, [time]);
  return (
    <div>
      ReverseCounter
      <div>{time}</div>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ReverseCounter;
