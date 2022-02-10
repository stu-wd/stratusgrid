#!/usr/bin/env node
const { getPokemon } = require("./getPokemon");
const { getStats } = require("./getStats");
const { getAverages } = require("./getAverages");
const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");

let limit;
let offset;
const askLimit = async () => {
  const answer = await inquirer.prompt({
    name: "limit",
    type: "input",
    message: "Choose the number of pokemon you wish you search for (max: 1118)",
    default() {
      return 100;
    },
  });
  limit = answer.limit;
};

const askOffset = async () => {
  const answer = await inquirer.prompt({
    name: "offset",
    type: "input",
    message: "Choose the starting index of the pokedex",
    default() {
      return 0;
    },
  });
  offset = answer.offset;
};

const runApp = async () => {
  await askLimit();
  await askOffset();
  const spinner = createSpinner("Catching them all...").start();
  const start = Date.now();
  let pokemon = await getPokemon(limit, offset);
  let arrayOfPokes = pokemon.map(async (poke) => {
    let statsObj = await getStats(poke);
    return statsObj;
  });
  const resolvedPokes = await Promise.all(arrayOfPokes);
  let totalWeight = 0;
  let totalHeight = 0;
  let actualCounter = 0;
  for (const i in resolvedPokes) {
    const pokemon = resolvedPokes[i];
    if (pokemon != undefined) {
      if (pokemon.weight) totalWeight += pokemon.weight;
      if (pokemon.height) totalHeight += pokemon.height;
      actualCounter += 1;
    }
  }
  spinner.success({
    text: `${actualCounter} pokemon sampled, with ${
      limit - actualCounter
    } errors, resulting in.... 
    ${getAverages(totalWeight, totalHeight, actualCounter)}`,
  });

  const stop = Date.now();
  console.log(`Completed in ${(stop - start) / 1000} seconds`);
  return getAverages(totalWeight, totalHeight, actualCounter);
};

runApp();
