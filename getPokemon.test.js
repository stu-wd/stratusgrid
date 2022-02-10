const { getPokemon } = require("./getPokemon");
const axios = require("axios");

const limit = 10;
const offset = 0;

const pokemon = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
  { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
  { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
  { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
  { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
];

describe("getPokemon()", () => {
  beforeEach(() => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: { results: pokemon } });
  });
  it("calls API between limit and offset and returns pokemon", async () => {
    expect(await getPokemon(limit, offset)).toEqual(pokemon);
  });
});
