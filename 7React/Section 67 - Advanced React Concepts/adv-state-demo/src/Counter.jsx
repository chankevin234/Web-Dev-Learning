import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    let increment = () => {
        // currentCount = the old version of the state before it was updated
        setCount((currentCount) => currentCount + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button
                onClick={increment}
            >
                +1
            </button>

        </>
    )
}