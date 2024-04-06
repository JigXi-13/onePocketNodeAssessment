const fs = require('fs');

// Path to the data.txt file
const filePath = 'data.txt';

// Read the file content asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err.message);
    return;
  }
  // Count the words by splitting the text on whitespace and filtering out empty strings
  const wordCount = data.split(/\s+/).filter(word => word.length > 0).length;
  console.log(`Word count: ${wordCount}`);
});
