/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Dice from "./Dice";
import { useState } from "react";
import { getRolls, sum } from "./utils";
import Button from "./Button";

export default function LuckyN({ numDice = 2, winCheck, title = "Dice Game" }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = (winCheck(dice));

    const reRoll = () => {
        setDice(getRolls(numDice));
    }

    return (
        <main className="LuckyN">
            <h1>
                {title} <br /> {isWinner && "You Win!"}
            </h1>
            <Dice diceArr={dice} />
            {/* <button
                onClick={reRoll}
            >
                Re-Roll
            </button> */}
            <Button clickFunc={reRoll}/>
        </main>
    )
}