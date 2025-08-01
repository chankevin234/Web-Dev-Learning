import Box from "./Box";
import { useState } from "react";

export default function BoxGrid() {
    const [boxes, setBoxes] = useState([
        false, false, false, false, false, false, false, false, false
    ]);

    /**
     * Functions to pass down to child
     */
    let reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false]);
    };
    let toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return (
                oldBoxes.map((value, i) => {
                    if (i === idx) {
                        return !value;
                    } else {
                        return value;
                    }
                })
            )
        })
    };

    return (
        <div className="BoxGrid">
            {boxes.map((boxState, idx) => {
                return (
                    <Box
                        key={idx}
                        isActive={boxState}
                        clickFunc={() => toggleBox(idx)}
                    />
                )
            })}
            <button onClick={reset}>Reset</button>
        </div>
    )
}