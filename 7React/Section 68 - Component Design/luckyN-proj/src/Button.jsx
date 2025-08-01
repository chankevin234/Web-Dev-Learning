/* eslint-disable react/prop-types */
import './Button.css';

export default function Button({ clickFunc }) {
    return (
    <button className='Button'
    onClick={clickFunc}
    >
        Click ME
    </button>
    )
}