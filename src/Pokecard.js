import React from "react";

export default function Pokecard({ pokemon }) {
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    return <div>
        <h2>{pokemon.name}</h2>
        <img src={imgUrl} alt="{pokemon.name}"></img>
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.base_experience}</p>
    </div>
}