import React, { useContext } from 'react';
import { PokemonContext } from './Context';
import { listPokemons } from './listOfPokemon';

// Creates the Pokedex list
const Pokedex = () => {
  const {capturedPokemon, release} = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <table>
        <thead>
            <tr>
                <th>Pokemon</th>
                <th>Release</th>
            </tr>
        </thead>
        {listPokemons({
          pokemons: capturedPokemon,
          onClick: release,
          buttonLabel: '-',
        })}
      </table>
    </div>
  );
};

export default Pokedex;