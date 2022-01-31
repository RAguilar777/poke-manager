import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './listOfPokemon';

// Adds one Pokemon to the list
const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemon: state.capturedPokemon,
});


// Initializes the Pokemon list
const addPokemons = (pokemons, state) => ({
  pokemons: pokemons,
  capturedPokemon: state.capturedPokemon,
});


// Remove one Pokemon from the Pokedex and send to the Pokemon list
const capturePokemon = (pokemon, state) => ({
    pokemons: getPokemonList(state.pokemons, pokemon),
    capturedPokemon: [...state.capturedPokemon, pokemon],
  });

// Remove one Pokemon from the Pokemon list back to the Pokedex
const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemon: getCapturedPokemon(
    state.capturedPokemon,
    releasedPokemon
  ),
});


// Retrieves a filtered list of the captured Pokemon
const getCapturedPokemon = (capturedPokemon, releasedPokemon) =>
  capturedPokemon.filter((pokemon) => pokemon !== releasedPokemon);


// Retrieves a filtered list of the Pokemon
const getPokemonList = (pokemons, capturedPokemon) =>
  pokemons.filter((pokemon) => pokemon !== capturedPokemon);


// Determines what action to take depending on the dispatch
const pokeReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    case ADD_POKEMONS:
      return addPokemons(action.pokemons, state);
    default:
      return state;
  }
};

export const usePokemonReducer = () =>
  useReducer(pokeReducer, {
    pokemons: [],
    capturedPokemon: [],
  });