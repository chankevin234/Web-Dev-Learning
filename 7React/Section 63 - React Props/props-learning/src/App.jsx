import React from 'react'
import './App.css'
import Greeter from './Greeter';
import Die from './Die';

function App() {
  return (
    <>
      <Greeter name='Kevin' from='Mom'/>
      <Die numSides={20}/>
    </>
  )
}

export default App
