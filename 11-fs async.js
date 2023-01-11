const { readFile, writeFile, mkdir, existsSync, unlink, rmdir } = require('fs');
const os = require('os');

// readFile('./content/first.txt', 'utf-8', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

// console.log(os.platform(), os.release());

// first read the file

readFile('./content/first.txt', 'utf-8', (err, data) => {
  mkdir('./content/files', () => {
    // then create a directory called 'files'
    writeFile(
      // create a file called 'second.txt' with the below content
      './content/files/second.txt',
      `${data} and some new text here`,
      (error) => {
        console.log(error);
      }
    );
  });
});

//remove file in the directory

setTimeout(() => {
  if (existsSync('./content/files/second.txt')) {
    unlink('./content/files/second.txt', () => {});
  }
}, 4000);

//remove directory

setTimeout(() => {
  if (existsSync('./content/files')) {
    rmdir('./content/files', () => {});
  }
}, 6000);
