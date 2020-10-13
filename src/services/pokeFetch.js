export const mainPokeFetch = () => {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
    .then(res => res.json());
};