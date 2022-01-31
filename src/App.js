import React from 'react';
import PokeList from './pokeData/PokeList';
import Pokedex from './pokeData/Pokedex';
import {PokemonProvider} from './pokeData/Context';
import PokemonForm from './pokeData/PokemonForm';


const App = () => (
  <PokemonProvider>
      <div className="main">
        <PokeList />
        <Pokedex />
      </div>
      <div className='form'>
        <PokemonForm />
      </div>
  </PokemonProvider>
  );

export default App;
