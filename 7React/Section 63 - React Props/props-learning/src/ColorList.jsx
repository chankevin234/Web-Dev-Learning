import React from "react";

export default function ColorList(props) {
    let colorArr = props.colors;
    const lis = colorArr.map((color) => <li style={{color: color}}>{color}</li>); // create arr of li elements
    // const elements = [<p>Hello!</p>, <h1>Elements Arr</h1>];
    
    return (
        <div>
            <p>Color List:</p>
            <ul>
                {lis}
            </ul>

        </div>
    )
}