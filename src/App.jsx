import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Student from './components/student'
import NovelBlog from './components/novelblog'
import StateManagement from './components/Hooks'
import ToggleBtn from './components/ToggleBtn'
import PasswordToggle from './components/PasswordToggle'
import Array from './components/Array'
import FetchingData from './components/FetchingData'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Vite + React </h1>
    <p>This is the power of React! </p>
    <button>Click me!</button>
    <p>Hello world!</p>
{/* 

< Card section = 'Computer Science'  title = 'Introduction to Computer Science' />
<Student  name = 'wajid Ullah' course = 'Computer Science' occuption = 'Software Engineer'  />

<NovelBlog title = 'The Great Gatsby' author = 'F. Scott Fitzgerald' type = 'Novel' description = 'A novel set in the 1920s that explores themes of wealth, love, and the American Dream.'  /> */}

{/* 
<StateManagement />
<ToggleBtn />
<PasswordToggle />
<Student /> */}
< Array />

<FetchingData />

    </>
  )
}

export default App
