const { getAverages } = require("./getAverages");

describe("getAverages()", () => {
  it("takes weight and height and divides each by num of poke", () => {
    expect(getAverages(100, 50, 10)).toEqual([
      `Avg Weight: 10.0000`,
      `Avg Height: 5.0000`,
    ]);
  });
});
