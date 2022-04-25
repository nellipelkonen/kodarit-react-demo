import React from 'react';
const { useState } = React;

export const Button = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

    return (
      <button onClick={handleClick}>
      Clicked {count} times
      </button>
    );
  }

