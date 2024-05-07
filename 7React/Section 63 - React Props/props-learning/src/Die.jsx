import React from "react";

function Die({ numSides = 6 }) { // set default value to the destructured value in props obj
    const diceSize = numSides;
    const roll = Math.floor(Math.random() * diceSize) + 1;
    return (
        <p>
            {diceSize}-sided die Roll: {roll}
        </p>
    )
}

export default Die;