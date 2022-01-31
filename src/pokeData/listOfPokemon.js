import React from 'react';

// Dispatch key-words
export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';
export const ADD_POKEMON = 'ADD_POKEMON';
export const ADD_POKEMONS = 'ADD_POKEMONS';

// Generate a table entry for one Pokemon
const Pokemon = ({pokemon, onClick, buttonLabel}) => (
    <tr key={pokemon.id}>
      <td>
        <span>{pokemon.name}</span>
      </td>
      <td>
        <button onClick={onClick(pokemon)}>{buttonLabel}</button>
      </td>
    </tr>
  );


// Maps each Pokemon data entry onto the pokemon list
export const listPokemons = ({pokemons, onClick, buttonLabel}) =>
  (pokemons || []).map((pokemon) => (
    <Pokemon pokemon={pokemon} onClick={onClick} 
    buttonLabel={buttonLabel} />
  ));