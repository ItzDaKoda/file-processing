// tests/numberProcessor.test.js
const path = require("path");
const {
  readNumbers,
  sumNumbers,
  findHighest,
  findLowest,
  calculateAverage,
} = require("../src/numberProcessor");

const samplePath = path.join(__dirname, "../data/sample-numbers.txt");

describe("Number Processor Tests", () => {
  test("Reads numbers correctly", () => {
    const nums = readNumbers(samplePath);
    expect(Array.isArray(nums)).toBe(true);
    expect(nums.length).toBeGreaterThan(0);
  });

  test("Calculates sum correctly", () => {
    const sum = sumNumbers(samplePath);
    expect(sum).toBeGreaterThan(0);
  });

  test("Finds highest number correctly", () => {
    const highest = findHighest(samplePath);
    expect(highest).toBeLessThanOrEqual(100);
  });

  test("Finds lowest number correctly", () => {
    const lowest = findLowest(samplePath);
    expect(lowest).toBeGreaterThanOrEqual(0);
  });

  test("Calculates average correctly", () => {
    const avg = calculateAverage(samplePath);
    expect(avg).toBeGreaterThan(0);
  });
});
