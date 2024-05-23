/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Counter() {
    /**
     * React Hooks
     * @returns array 
     * 1) piece of state (ex. initial count) 
     * 2) function to change the state
     */
    const [initialCount, setCount] = useState(5);
    let changeNum = () => {
        setCount(initialCount + 1);
    };

    return (
        <div>
            <p>The Count is: {initialCount}</p>
            <button
                onClick={changeNum}
            >
                Increment Me
            </button>
        </div>
    )
}