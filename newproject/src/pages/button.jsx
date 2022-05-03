import React from 'react';
const { useState } = React;

export const Button = (handleClick, resetCount) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  
  function handleClick() {
    setCount(count + 1);
  }

  function handleClick2() {
    setCount2(count2 + 1);
  }

  function resetCount() {
    setCount(0);
    setCount2(0);
  }

    return (
      <div className='maincontent'>
        <div className='buttonscontent'>
          <h2>Buttons</h2>
          <span>Counters that update separately but reset together</span>
        </div>
        <div className='btn-group'>
          <button className='btn-count' onClick={() => handleClick()}>
            Clicked {count} times
          </button><br></br>
          <button className='btn-count' onClick={() => handleClick2()}>
            Clicked {count2} times
          </button><br></br>
        </div>
          <button className='btn-clear' onClick={() => resetCount()}>
            Clear count
          </button>          
      </div>
    );
  }

export default Button;