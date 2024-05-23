/* eslint-disable react/prop-types */
import ColorBox from "./ColorBox";
import './ColorBoxList.css';

export default function ColorBoxList({ colors }) {
    const boxes = [];

    for (let i = 0; i < 10; i++) {
        boxes.push(<ColorBox colors={colors} />);
    }

    return (
        <div className="ColorBoxList">{boxes}</div>
    )
}