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
  padding: 2em;

  &:hover {
    color:red;
  }
`;

// React Component
const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [perPage, setPerPage] = useState(9);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(9);
  const [loading, setLoading] = useState(true); 
  const lastPage = Math.ceil(count / perPage);

  useEffect(() => {
    if(search === ''){
      setTimeout(() => {
        mainPokeFetch(perPage, page)
          .then(res => {
            setPokemon(res.results);
            setCount(res.count);
            setPage(page);
          })
        setLoading(false)  
      }, 1000)
    } else {
      onePokeFetch(search, page, perPage)
        .then(res => {
          setCount(res.count)
          setSearch(res.search.pokemon);
          setPerPage(perPage);
          setPage(page)
          setPokemon(res.results)
        });
    }
    // eslint-disable-next-line
  }, [page]);
  
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onePokeFetch(search, page, perPage)
        .then(res => {
          setCount(res.count)
          setSearch(res.search.pokemon);
          setPerPage(perPage);
          setPage(page)
          setPokemon(res.results)
        });
    }, 3000);
  }

  const handleNext = () => {
    setPage(+page + 1);
  };

  const handleBack = () => {
    setPage(+page - 1);
  };

  console.log(page, 'next error')
  
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
      <button onClick={handleBack.bind(null, pokemon)} disabled={page <= 1 || loading === true ? true : ''}>Back</button>
      <button onClick={handleNext.bind(null, pokemon)} disabled={page >= lastPage || loading === true ? true : ''}>Next</button>
      { loading === false ? 
      <PokeUl>
          {pokeElements}
      </PokeUl> : <p>Loading...</p>
      }
      </>
      
    );
  }

export default PokeList;