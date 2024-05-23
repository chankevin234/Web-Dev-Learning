import { useState } from "react";

function complexFunction() {
    console.log("Make new gameboard!");
    return (Array(5000));
}

export default function Dumbo() {
    const [board, setBoard] = useState(complexFunction);

    return (
        <div>
            <button>Click to change State</button>
        </div>
    )
}