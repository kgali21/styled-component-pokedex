export const mainPokeFetch = (perPage, page) => {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${page}&perPage=${perPage}`)
    .then(res => res.json());
};

export const onePokeFetch = (search, page, perPage) => {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${search}&page=${page}&perPage=${perPage}`)
    .then(res => res.json());
};

//Api no longer works, find new api and fix data