import './App.css'
// import Die from './Die'
// import Dice from './Dice'
import LuckyN from './LuckyN';
import { sum } from './utils';

/**
 * functions that can be passed down!
 */
function lessThanFour(dice) {
  return sum(dice) < 4;
}
function isSameDice(dice) {
  return dice.every(v => v === dice[0]);
}


function App() {
  return (
    <>
      {/* <Die val={2}/> */}
      {/* <Dice diceArr={[1, 2, 3, 4]} /> */}
      {/* <Dice diceArr={[1, 2, 3, 4]} color={"red"}/> */}
      <LuckyN numDice={2} winCheck={lessThanFour} title='Less than 4'/>
      <LuckyN numDice={2} winCheck={isSameDice} title='Equal Dice'/>
    </>
  )
}

export default App
