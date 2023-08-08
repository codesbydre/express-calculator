const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const { calculateMean, calculateMedian, calculateMode } = require("./helpers");

function handleRequest(req, res, next, operation) {
  try {
    const nums = req.query.nums; // get nums query param from URL ex. http://localhost:3000/mean?nums=1,3,5,7
    if (!nums) throw new ExpressError("Numbers are required.", 400);
    const numbers = nums.split(",").map((num) => {
      //split the string into array separating by comma (params expected comma-separated list)
      const n = parseFloat(num); //convert string to floating point number, if cant be converted throw error
      if (isNaN(n)) throw new ExpressError(`${num} is not a number.`, 400);
      return n;
    });
    //depending on `operation` argument passed, call appropriate helper function
    let value;
    switch (operation) {
      case "mean":
        value = calculateMean(numbers);
        break;
      case "median":
        value = calculateMedian(numbers);
        break;
      case "mode":
        value = calculateMode(numbers);
        break;
      default:
        throw new ExpressError("Operation not supported.", 400);
    }

    res.json({ operation, value });
  } catch (error) {
    next(error);
  }
}

app.get("/mean", (req, res, next) => handleRequest(req, res, next, "mean"));

app.get("/median", (req, res, next) => handleRequest(req, res, next, "median"));

app.get("/mode", (req, res, next) => handleRequest(req, res, next, "mode"));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
