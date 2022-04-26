import React from 'react';
const { useState } = React;

export const Button = (handleClick, resetCount) => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

    return (
      <div>
        <h1>Counters that update together</h1>
        <button className='btn' onClick={() => handleClick()}>
          Clicked {count} times
        </button>
        <button className='btn' onClick={() => handleClick()}>
          Clicked {count} times
        </button>
        <button className='btn' onClick={() => resetCount()}>
          Clear count
        </button>
      </div>
    );
  }

