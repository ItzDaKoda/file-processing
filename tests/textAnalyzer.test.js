// tests/textAnalyzer.test.js
const path = require("path");
const { countWords, findLongestWord, countLines } = require("../src/textAnalyzer");

const quotesPath = path.join(__dirname, "../data/quotes.txt");
const samplePath = path.join(__dirname, "../data/sample-text.txt");

describe("Text Analyzer Tests", () => {
  test("Counts total number of words correctly", () => {
    const count = countWords(quotesPath);
    expect(count).toBeGreaterThan(0);
  });

  test("Finds the longest word correctly", () => {
    const longest = findLongestWord(quotesPath);
    expect(typeof longest).toBe("string");
    expect(longest.length).toBeGreaterThan(0);
  });

  test("Counts total number of lines correctly", () => {
    const lines = countLines(quotesPath);
    expect(lines).toBeGreaterThan(0);
  });

  // Edge case: sample-text should have multiple lines and many words
  test("Works on a longer sample text", () => {
    expect(countWords(samplePath)).toBeGreaterThan(50);
  });
});
