import React from "react";
import Die from "./Die";
import './MultiDice.css';

function MultiDice() {
    const rolls = []; // array of components

    for (let i = 0; i < 3; i++) {
        rolls.push(<Die />);
    }
    return (
        <div className="MultiDice">
            <h1>Dice Rolls</h1>
            <p>{rolls}</p>
        </div>
    )
}

export default MultiDice;