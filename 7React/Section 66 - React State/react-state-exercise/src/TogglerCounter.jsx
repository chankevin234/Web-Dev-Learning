import { useState } from "react";
import './Toggler.css'

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true); // STATE 1: happy face toggler
    const [count, setCount] = useState(0); // STATE 2: count by twos 
    const toggleIsHappy = () => { setIsHappy(!isHappy); }
    const countByTwos = () => { setCount(count + 2); }
    return (
        <div>
            <p className="Toggler"
                onClick={toggleIsHappy}
                // onClick={() => {
                //     setIsHappy(!isHappy)
                // }}
            >
                {isHappy ? 'Smiley Face' : 'Sad Face'}
            </p>
            <p onClick={countByTwos}>
                {count}
            </p>
        </div>
    )
}