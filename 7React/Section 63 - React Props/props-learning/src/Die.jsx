import React from "react";

function Die(props) {
    const diceSize = props.numSides;
    const roll = Math.floor(Math.random() * diceSize) + 1;
    return (
        <p>
            {diceSize}-sided die Roll: {roll}
        </p>
    )
}

export default Die;