import React from 'react'
import  { useState } from 'react';

const ToggleBtn = () => {
    const [visible, setVisible] = useState(true)
    const toggleVisibility = () =>{
        setVisible(!visible);
    }
  return (
    <div>

    <h1>Toggle Message</h1>
    <button onClick={toggleVisibility}>{visible ? 'Hide' : 'Show message'} </button>
    {visible && <p>This is a toggle message!</p>}
    
    </div>
  )
}

export default ToggleBtn
