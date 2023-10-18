import React, { useState, useEffect } from 'react';

function Counter({initialMinutes,initialSeconds,onSubmit}) {
  
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [color,setColor] = useState("white")

  // Use useEffect to update the timer every second
  useEffect(() => {

    

    const timer = setInterval(() => {
      if(minutes <= 1){
        setColor("darkred")
      }
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer); // Stop the timer when it reaches 0
        onSubmit()
        
      } else {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);

    // Clean up the timer on unmount
    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds]);

  return (
    <>
      <h6 style={{color:color}} >Remaining: {minutes} min, {seconds} sec</h6>
    </>
  );
}

export default Counter;
