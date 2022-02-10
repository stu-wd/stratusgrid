const getAverages = (weight, height, limit) => {
  return [
    `Avg Weight: ${(weight / limit).toFixed(4)}`,
    `Avg Height: ${(height / limit).toFixed(4)}`,
  ];
};

module.exports = { getAverages };
