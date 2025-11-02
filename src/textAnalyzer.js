// src/textAnalyzer.js
const fs = require("fs");

// Count total number of words in a file
function countWords(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const words = text.trim().split(/\s+/);
  return words.filter(Boolean).length;
}

// Find the longest word in a file
function findLongestWord(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const words = text.trim().split(/\s+/);
  return words.reduce((longest, word) => 
    word.length > longest.length ? word : longest, ""
  );
}

// Count how many lines the file has
function countLines(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  return text.split(/\r?\n/).length;
}

// Test manually with provided data files
if (require.main === module) {
  const quotesPath = "data/quotes.txt";
  const samplePath = "data/sample-text.txt";

  console.log("Quotes.txt → Word Count:", countWords(quotesPath));
  console.log("Quotes.txt → Longest Word:", findLongestWord(quotesPath));
  console.log("Quotes.txt → Line Count:", countLines(quotesPath));

  console.log("Sample-text.txt → Word Count:", countWords(samplePath));
  console.log("Sample-text.txt → Longest Word:", findLongestWord(samplePath));
  console.log("Sample-text.txt → Line Count:", countLines(samplePath));
}

// Export for Jest tests
module.exports = { countWords, findLongestWord, countLines };
