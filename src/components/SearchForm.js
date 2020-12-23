import React, { useState } from 'react';
import { onePokeFetch } from '../services/pokeFetch';

const Search = () => {
  const [search, setSearch] = useState('');
  const [pokemonSearch, setPokemonSearch] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const singlePokemon = onePokeFetch(search);
    console.log(singlePokemon.body, 'single pokemon')
    setPokemonSearch(pokemonSearch)
  }

  return (
  <>
      <form onSubmit={handleSubmit}>
        <input onChange={(target) => setSearch({search: target.value})} />
        <button>Search</button>
      </form>
    </>
  );
}

export default Search;