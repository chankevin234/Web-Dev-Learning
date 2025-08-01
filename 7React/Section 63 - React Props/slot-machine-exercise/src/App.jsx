import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slots from './Slots';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>Use Case 1: All Values are same</h2>
      <Slots val1='a' val2='a' val3='a' />
      <h2>Use Case 2: Not all values are the same</h2>
      <Slots val1='a' val2='b' val3='a' /> 
    </>
  )
}

export default App
