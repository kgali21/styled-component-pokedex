export const mainPokeFetch = () => {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
    .then(res => res.json());
};

export const onePokeFetch = (search) => {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${search}`)
    .then(res => res.json());
};