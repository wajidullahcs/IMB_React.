import React from 'react'
import { useState } from 'react'

const StateManagement = () => {
const [name, setName] = useState('wajid')
const [buttonClicked, setButtonClicked] = useState(false);
const updateName = () =>{
setName('Engr Wajid ullah');
setButtonClicked(true);
}
  return (
    <div>
      
<h3>State using the StateManagement System</h3>
<p>My name is {name}</p>
<button onClick={updateName} disable = {buttonClicked}>click to</button>




    </div>
  )
}

export default StateManagement
