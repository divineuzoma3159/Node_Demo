const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const test = readFileSync('./first/text.txt', 'utf-8');
const test1 = readFileSync('./first/text1.txt', 'utf-8');
console.log(test, test1);

writeFileSync('./first/combine.txt',
    `This is a feaking combination ${test}, ${test1}`,
    {flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one');
