import { useState } from "react";
import './Toggler.css'

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    /* let toggleIsHappy = () => {
        setIsHappy(!isHappy); // flips the initial state value (isHappy) to the opposite
        console.log('Value of isHappy = ' + isHappy);
    }; */

    return (
        <p className="Toggler"
            // onClick={toggleIsHappy}
            onClick={() => {
                setIsHappy(!isHappy)
            }}
        >
            {isHappy ? 'Smiley Face' : 'Sad Face'}
        </p>
    )
}