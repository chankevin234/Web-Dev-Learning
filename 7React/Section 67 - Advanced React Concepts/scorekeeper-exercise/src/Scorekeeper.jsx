/* eslint-disable react/prop-types */
import { useState } from "react";

/**
 * Scorekeeper will store an array with value of 0 ==> [0,0,0,0]
 */
export default function Scorekeeper({ players, target }) {
    // create a zeros array based on the props
    // useState with the initial array 
    const [scores, setPlayerScores] = useState(new Array(players).fill(0));

    // create function that takes in the position of the array and updates accordingly
    const addOne = (index) => {
        // set the new state, prevScore = currState
        setPlayerScores((prevScore) => {
            // return the copy of array
            return prevScore.map((score, i) => {
                if (i === index) {
                    return score + 1;
                }
                return score;
            });
        });
        console.log("Adding 1 to the player" + index);
    }
    // create reset function that updates all indices to 0
    const resetScores = () => {
        setPlayerScores(new Array(players).fill(0)); // set the scores as new zeroes arr
        console.log("Reseting all the scores");
    }
    // create the array of li 
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, index) => {
                    return (
                        <li key={index}>
                            Player{index}, Score= {score}
                            <button
                                onClick={() => addOne(index)}
                            >
                                +1
                            </button>
                            {score >= target && "WINNER!"}
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => resetScores()}>Reset</button>
        </div>
    )
}