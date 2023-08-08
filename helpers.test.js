const { calculateMean, calculateMedian, calculateMode } = require("./helpers");

test("calculate mean", () => {
  expect(calculateMean([1, 3, 5, 7])).toBe(4);
});

test("calculate median with even number of elements", () => {
  expect(calculateMedian([1, 3, 5, 7])).toBe(4);
});

test("calculate median with odd number of elements", () => {
  expect(calculateMedian([1, 3, 5])).toBe(3);
});

test("calculate mode", () => {
  expect(calculateMode([1, 3, 3, 7])).toEqual(["3"]);
});

test("calculate mode with all unique numbers", () => {
  expect(calculateMode([1, 3, 5, 7])).toEqual([]);
});
