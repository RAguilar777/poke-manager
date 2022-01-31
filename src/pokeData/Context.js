import React, { createContext } from 'react';
import { usePokemonReducer } from './usePokeReducer';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './listOfPokemon';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [state, dispatch] = usePokemonReducer();
  const {pokemons, capturedPokemon} = state;

// Dispatches CAPTURE action to Reducer component
  const capture = (pokemon) => () => 
  dispatch({ type: CAPTURE, pokemon });


// Dispatches RELEASE action to Reducer component
  const release = (pokemon) => () => 
  dispatch({ type: RELEASE, pokemon });


// Dispatches ADD_POKEMON action to Reducer component
  const addPokemon = (pokemon) => 
  dispatch({ type: ADD_POKEMON, pokemon });


// Dispatches ADD_POKEMONS action to Reducer component
  const addPokemons = (pokemons) => 
  dispatch({ type: ADD_POKEMONS, pokemons });


// Initializes provider values
  const providerValue = {
    pokemons,
    capturedPokemon,
    capture,
    release,
    addPokemon,
    addPokemons,
  };


  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };