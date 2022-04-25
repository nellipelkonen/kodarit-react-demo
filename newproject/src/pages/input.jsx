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
        <div className='inputcontent'>
            <form onSubmit={(event) => {
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
                <input type="submit" value='Add' className='btn'/>
            {
                content.map((content, index) => (
                <div className='inputmap'>
                <p key={index}>{content}</p>
                <button onClick={() => removeHandler(index)} type="button" className='btn'>Delete</button>
                </div>
                )
            )}
            </form>
        </div>
)}
