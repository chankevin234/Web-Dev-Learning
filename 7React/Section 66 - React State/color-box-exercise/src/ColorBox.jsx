/* eslint-disable react/prop-types */
import { useState } from "react";
import './ColorBox.css'

function randomColor(array) {
    let randIdx = Math.floor(Math.random() * array.length); // random color idx
    let randomColor = array[randIdx];
    return randomColor;
}


export default function ColorBox({ colors }) {
    // const randomColor = colors[randomNum]; // random color code

    const [initialColor, setColor] = useState(randomColor(colors));
    const toggleColor = () => {
        setColor(randomColor(colors));
        console.log('New Color Code: ' + initialColor);
    }
    return (
        <div className= "ColorBox"
            style={{ backgroundColor: initialColor }}
            onClick={toggleColor}
        >
            BOX
        </div> 
    )
}