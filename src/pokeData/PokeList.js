import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './Context';
import { listPokemons } from './listOfPokemon';

const url = 'https://pokeapi.co/api/v2/pokemon';

// Creates the initial list of Pokemon
const PokeList = () => {
  const {pokemons, capture, addPokemons} = useContext(PokemonContext);

  // Using the PokeAPI to fetch the Pokemon data
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };

    fetchPokemon();
  }, []);


  return (
    <div className="pokemon-list">
      <h2>Pokemon</h2>

      <table>
        <thead>
            <tr>
                <th>Pokemon</th>
                <th>Capture</th>
            </tr>
        </thead>
        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: '+',
        })}
      </table>
    </div>
  );
};

export default PokeList;