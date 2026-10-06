const a_ = require('lodash');   
const items = [1,[2,[3,[4]]]];
const flattened = a_.flattenDeep(items);
console.log(flattened);