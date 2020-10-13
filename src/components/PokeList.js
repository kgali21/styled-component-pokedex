import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard.js';
import styled from 'styled-components';
import { mainPokeFetch, onePokeFetch } from '../services/pokeFetch.js';


//Styled Components
const PokeUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PokeLi = styled.li`
  margin: 2em 2em 2em 2em;
  list-style: none;
  width: 25%;
  height: auto;
  border: blue solid 1px;
`;

// React Component
const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    mainPokeFetch()
      .then(res => {
        setPokemon(res.results)
      })
  }, []);
  
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onePokeFetch(search)
        .then(res => setPokemon(res.results));
    console.log(pokemon, 'pokemon')  
  }
  
  const pokeElements = pokemon.map(data => (
        <PokeLi key={data._id}>
            <PokeCard
              image={data.url_image}
              name={data.pokemon}
              attack={data.attack}
              hp={data.hp}
              speed={data.speed}
              url={data.pokedex}
            />
        </PokeLi>
  ))

    return (
      <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Search</button>
      </form>
      <PokeUl>
          {pokeElements}
      </PokeUl>
      </>
    );
  }

export default PokeList;