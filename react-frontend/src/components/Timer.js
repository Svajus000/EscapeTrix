import React, { useEffect } from "react";
import formatTime from "../Pages/GameplayModes/formatTime";

export default function Timer({ isActive, setSeconds, seconds }) {
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, setSeconds]);

  let formatedTime = formatTime({ seconds });
  return <div>{formatedTime}</div>;
}
