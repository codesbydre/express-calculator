function calculateMean(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0); //sum up array of numbers and reduce them to single value
  return sum / numbers.length;
}

function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b); // sort numbers in ascending order
  const midIndex = Math.floor(numbers.length / 2);
  return numbers.length % 2 !== 0 //checks if theres an odd # elements
    ? numbers[midIndex] //if odd, median is middle element
    : (numbers[midIndex - 1] + numbers[midIndex]) / 2; //if even, median is average of the 2 middle elements
}

function calculateMode(numbers) {
  const counts = {}; //keep track of # times each number appears in array
  numbers.forEach((number) => {
    counts[number] = (counts[number] || 0) + 1; //count # occurences of each number
  });
  const maxCount = Math.max(...Object.values(counts)); //finds highest occurrence
  const modes = Object.keys(counts).filter(
    (number) => counts[number] === maxCount //find numbers that occur the maxCount times
  );
  return modes.length === numbers.length ? [] : modes; //return empty if all nums unique, or returns modes
}

module.exports = {
  calculateMean,
  calculateMedian,
  calculateMode,
};
