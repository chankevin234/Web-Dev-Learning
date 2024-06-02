/* eslint-disable react/prop-types */
import Die from "./Die";
import "./Dice.css";

export default function Dice({ diceArr, color }) {
  return (
    <section className="Dice">
      {diceArr.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}