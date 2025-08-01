import React from "react";
import './RandomPokemon.css';
/**
 * Generate random pokemon imgs based on 1-151
 * Display in h1 with the random number
 * Render the image corresponding to the num
 */
function RandomPokemon() {
    // generate random num
    const pokeNum = Math.floor((Math.random() * 151) + 1);
    return (
        <div className="RandomPokemon">
            <h1>Pokemon #{pokeNum}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`} alt="pokemon" />
        </div>
    )
}

export default RandomPokemon;