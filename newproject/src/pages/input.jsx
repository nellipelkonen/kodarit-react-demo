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

      function clearList() {
        setContent([]);
      }

    return (
        <div className='maincontent'>
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    const temp = [inputValue, ...content];
                    setContent(temp);
                    setInputValue('');
                }}>
                    <div className='inputheader'>
                    <h2 >Input tutorial</h2>
                    <span>Component that renders data submitted in the form and deletes individual rows.</span>
                    </div>
                    <input 
                        type='text'
                        className='inputfield'
                        placeholder='Type here...'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        required
                    />
                    
                    <input type="submit" value='Add' className='btn-add'/>
                {
                    content.map((content, index) => (
                    <div className='inputmap'>
                        <ul>
                            <li className='mapitem'>
                                <div className='jokulista'>
                                    <h4 className='mapheader' key={index}>{content}</h4>
                                    <button onClick={() => removeHandler(index)} type="button" className='btn-delete'>✖</button>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    )
                )}
                </form>
                <button className='btn-clear' onClick={clearList}>Clear list</button>
                <button></button>
            </div>
        </div>
)}
