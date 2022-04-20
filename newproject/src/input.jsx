import React from 'react';
const { useState } = React;

export const InputTutorial = () => {
    const [content, setContent] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const removeHandler = (removeIndex) => {
        const removeItem = content.filter((content, index) => {
                return removeIndex !== index;
              });
              setContent(removeItem);
      };

    return (
        <form className='inputcontent' onSubmit={(event) => {
            event.preventDefault()
            const temp = [inputValue, ...content];
            setContent(temp);
            setInputValue('');
        }}>
            <h2>Input tutorial</h2>
            <input 
                type='text'
                placeholder='Type here...'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                required
            />
            <input type="submit"/>
        {
            content.map((content, index) => (
            <div>
            <p key={index}>{content}</p>
            <button onClick={() => removeHandler(index)} type="button">Delete</button>
            </div>
            )
        )}
        </form>
)}
