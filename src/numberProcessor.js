// src/numberProcessor.js
const fs = require("fs");

// Read numbers from file and convert to array of floats
function readNumbers(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return data
    .split(/\r?\n/)
    .filter(Boolean)
    .map(Number);
}

// Calculate the sum of all numbers
function sumNumbers(filePath) {
  const numbers = readNumbers(filePath);
  return numbers.reduce((sum, n) => sum + n, 0);
}

// Find the highest number
function findHighest(filePath) {
  const numbers = readNumbers(filePath);
  return Math.max(...numbers);
}

// Find the lowest number
function findLowest(filePath) {
  const numbers = readNumbers(filePath);
  return Math.min(...numbers);
}

// Calculate the average
function calculateAverage(filePath) {
  const numbers = readNumbers(filePath);
  return numbers.length === 0 ? 0 : sumNumbers(filePath) / numbers.length;
}

// Test manually with sample data
if (require.main === module) {
  const samplePath = "data/sample-numbers.txt";

  console.log("Sum:", sumNumbers(samplePath));
  console.log("Highest:", findHighest(samplePath));
  console.log("Lowest:", findLowest(samplePath));
  console.log("Average:", calculateAverage(samplePath).toFixed(2));
}

module.exports = {
  readNumbers,
  sumNumbers,
  findHighest,
  findLowest,
  calculateAverage,
};
