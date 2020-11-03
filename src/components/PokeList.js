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
  const [perPage, setPerPage] = useState(9);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(9) 


  useEffect(() => {
    if(search === ''){
      mainPokeFetch(perPage, page)
        .then(res => {
          setPokemon(res.results);
          setCount(res.count);
          setPage(res.page);
        })
    } else {
      onePokeFetch(search, page, perPage)
        .then(res => {
          setCount(res.count)
          setSearch(res.search.pokemon);
          setPerPage(perPage);
          setPage(res.page)
          setPokemon(res.results)
        });
    }
  }, [page, perPage]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onePokeFetch(search, page, perPage)
      .then(res => {
        setCount(res.count)
        setSearch(res.search.pokemon);
        setPerPage(perPage);
        setPage(res.page)
        setPokemon(res.results)
      });
  }

  const handleNext = () => {
    setPage(+page + 1);
  };

  const handleBack = () => {
    setPage(+page - 1);
  };
  
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

    const lastPage = Math.ceil(count / perPage);
    console.log(page, 'page')
    console.log(lastPage, 'lastPage')

    return (
      <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Search</button>
      </form>
      <PokeUl>
          {pokeElements}
      </PokeUl>
      <button onClick={handleBack} disabled={page <= 1 ? true : ''}>Back</button>
      <button onClick={handleNext} disabled={page >= lastPage ? true : ''}>Next</button>
      </>
    );
  }

export default PokeList;