import React from 'react';
const { useState } = React;

export const Button = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

    return (
      <div>
        <button onClick={handleClick} className='btn'>
        Clicked {count} times
        </button>

        <button onClick={resetCount} className='btn'>
        Clear count
        </button>
      </div>
    );
  }

