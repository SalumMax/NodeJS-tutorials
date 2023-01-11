const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// creates a file with the below content, or overwrie it if such file exists
// writeFileSync(
//   './content/combined.txt',
//   `This is the combined file which consits of ${first} and ${second}`,
//   'utf-8'
// );

// appends the below content to an existing file  {flag:'a'}

writeFileSync(
  './content/combined.txt',
  `This is the combined file which consits of ${first} and ${second}`,
  { flag: 'a' }
);
