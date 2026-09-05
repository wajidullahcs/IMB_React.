import React from 'react'
import { useState } from 'react'

const PasswordToggle = () => {
const [showPassword, setShowPassword] = useState(false)
const [darkMode, setDarkMode] = useState(false)   // Dark mode Section
  return (
    <div>
<input type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
<button onClick={() => setShowPassword(!showPassword)}>
  {showPassword ? 'Hide password': 'Show password'}
</button>
<br></br>

                    {/* Dark mode section  */}
   <h2> current Mode: {darkMode ? 'dark' : 'light'}  </h2>
    <button onClick = {()=> setDarkMode(!darkMode)} >
      Toggle Dark Mode
    </button>

    </div>
  )
}

export default PasswordToggle
