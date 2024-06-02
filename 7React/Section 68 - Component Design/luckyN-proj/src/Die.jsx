/* eslint-disable react/prop-types */
import "./Die.css";

export default function Die({ val, color = "slategray" }) {
    return (
        <div className="Die"
            style={{ backgroundColor: color }}
        >
            {val}
        </div>
    );
}