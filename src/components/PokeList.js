import React, { useEffect, useState } from 'react';
// import fakeData from '../services/fakePokeData.js';
import PokeCard from './PokeCard.js';
import styled from 'styled-components';
import { mainPokeFetch } from '../services/pokeFetch.js';

const PokeUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PokeLi = styled.li`
  margin: 2em 2em 2em 2em;
  list-style: none;
  width: 25%;
`;

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    mainPokeFetch()
      .then(res => {
        setPokemon(res.results)
      })
  }, []);

  console.log(pokemon, 'pokemon')
  
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
      <PokeUl>
          {pokeElements}
      </PokeUl>
      </>
    );
  }

  

export default PokeList;