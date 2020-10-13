export const mainFetch = () => {
  return fetch(`${process.env.POKEMON_API_BASE_URL}`)
    .then(res => res.json());
};