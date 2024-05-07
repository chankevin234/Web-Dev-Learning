import React from 'react'
import './App.css'
import Greeter from './Greeter';
import Die from './Die';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';


function App() {
  return (
    <>
      <Heading color= {'Orange'} text={'HEADING HERE!!!'}/>
      <Greeter name='Kevin' from='Mom' />
      <Die numSides={20} />
      <Die />
      <Die numSides={20} />
      <DoubleDice />

      <ColorList colors={['red', 'blue', 'yellow']} />
    </>
  )
}

export default App
