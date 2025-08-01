import React from "react";

export default function Heading({ color = 'olive', text }) {
    return (
        <h1 style={{ color: color }}>{text}</h1>
    )
}