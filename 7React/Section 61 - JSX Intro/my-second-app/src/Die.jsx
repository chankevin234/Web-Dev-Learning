import React from 'react';
import './Die.css'; // IMPORTS SPECIFIC CSS FILE

function Die() {
    // generate a random roll
    const roll = Math.floor((Math.random() * 6) + 1);
    return (
        <>
            <p className='Die'>Die Roll: {roll}</p>
        </>
    );
}

export default Die;