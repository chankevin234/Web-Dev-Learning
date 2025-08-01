import React from "react"

// PROPS is just a name for the value coming into the function (can be renamed!)
// You can also destructure the props variable ==> { varname }
export default function Greeter(props) {
    return (
        <>
            <h1>Hi there, {props.name}!</h1>
            <h2>-- {props.from}</h2>
        </>
    )
}