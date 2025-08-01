import { useState } from "react";

export default function ScoreKeeper() {
    let players = {
        p1Score: 0,
        p2Score: 0
    };
    const [initScore, setScore] = useState(players);

    let increaseP1Score = () => {
        // let newScores = {...initScore, p1Score: initScore.p1Score + 1};
        setScore((oldScores) => {
            return { ...oldScores, p1Score: oldScores.p1Score + 1 };
        });
    };

    let increaseP2Score = () => {
        // let newScores = {...initScore, p1Score: initScore.p1Score + 1};
        setScore((oldScores) => {
            return { ...oldScores, p2Score: oldScores.p2Score + 1 };
        });
    };


    return (
        <div>
            <p>Player 1: {initScore.p1Score}</p>
            <p>Player 2: {initScore.p2Score}</p>
            <button
                onClick={increaseP1Score}
            >
                +1 P1
            </button>
            <button
                onClick={increaseP2Score}
            >
                +1 P2
            </button>
        </div>
    );
}