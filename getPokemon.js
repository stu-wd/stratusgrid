const axios = require("axios");

const getPokemon = (limit, offset) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      console.log("axios error");
    });
};

module.exports = { getPokemon };
