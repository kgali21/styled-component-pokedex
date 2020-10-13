import React from 'react';
import fakeData from '../services/fakePokeData.js';
import PokeCard from './PokeCard.js';

const PokeList = () => {

  const pokeElements = fakeData.map(data => (
        <li>
            <PokeCard
              name={data.pokemon}
              attack={data.attack}
              hp={data.hp}
              speed={data.speed}
              url={data.pokedex}
            />
        </li>
  ))

    return (
      <>
      <ul>
        {pokeElements}
      </ul>
      </>
    );
  }

export default PokeList;