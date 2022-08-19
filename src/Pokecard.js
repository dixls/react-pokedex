import React from "react";
import './Pokecard.css'

export default function Pokecard({ pokemon }) {
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    return <div className="pokecard">
        <h2>{pokemon.name}</h2>
        <img src={imgUrl} alt="{pokemon.name}"></img>
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.base_experience}</p>
    </div>
}