import { useState } from 'react'
import './App.css'
import Posts from './posts'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Posts></Posts>
      <h1>React Core Concepts Recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>

      </ol>
      <hr />
    </>
  )
}

export default App
