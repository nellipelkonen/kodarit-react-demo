import React from 'react';
import { useState, useEffect } from "react";

export const Timer = () =>{
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      setCount2(count2 + 1);
    }, 1000);

    const interval = setInterval(() => {
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='maincontent'>
        <span>text</span>
        <h1>I've rendered {count} times!</h1>
        <h1>I've rendered {count2} times!</h1>
    </div>  
  )
}

export default Timer;