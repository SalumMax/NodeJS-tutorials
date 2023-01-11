const names = require('./4-names')
const sayHi = require('./utils')

sayHi(names.john)
sayHi(names.peter)
sayHi('names.john')


const os = require('os');

// info about user
const user = os.userInfo();

// system uptime

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

//OS module 


const path = require('path');
console.log(path.sep);

const filePath = path.join('/content/subfolder/test.txt');
console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);
