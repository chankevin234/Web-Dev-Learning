import React from "react";

function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const result = num1 === num2;

    // set styles inline
    // const styles = { color: 'purple', fontSize: '40px' }
    const styles = { color: result ? 'green' : 'red' };

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Checking if the dice are the same value1</h2>
            {/* <h2>{result}</h2> */}
            {result && <h2>You win!</h2>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
    // ALT Option for conditional components display
    // if (num1 == num2) {
    //     return (
    //         <>
    //             <p>TIE between Num1 and Num2</p>
    //         </>
    //     )
    // }
    // const result = num1 === num2 ? 'You win!' : 'You lose!';
}

export default DoubleDice;