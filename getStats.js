const axios = require("axios");

const getStats = (poke) => {
  return axios
    .get(poke.url)
    .then((res) => {
      const weight = res.data.weight;
      const height = res.data.height;
      return { weight, height };
    })
    .catch(() => {});
};

module.exports = { getStats };
