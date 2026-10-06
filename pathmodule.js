const path = require('path');
console.log(path.sep); // To get the path separator

const filePath = path.join('/first//', 'second', 'test.txt'); // To join paths
console.log(filePath);

const base = path.basename(filePath); // To get the base name of the file
console.log(base);

const absolute = path.resolve(__dirname, 'first', 'second', 'test.txt'); // To get the absolute path
console.log(absolute);