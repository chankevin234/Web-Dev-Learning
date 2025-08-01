import React from "react";

export default function Slots(props) {
    let { val1, val2, val3 } = props; // destructure each value 
    let isWinner = (val1 === val2 && val2 === val3); // bool
    return (
        <>
            <h2>Results: {val1} {val2} {val3}</h2>
            <p style={{ color: isWinner? 'green': 'red' }}>
                {isWinner ? 'You win!' : 'You lose!'}
            </p>
            {isWinner && <h3>Congrats!</h3>}
        </>
    )
}