const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/subfolder/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');



//console.log(first,second)

writeFileSync(
    './content/subfolder/first.txt',
    `first txt is changed. ${first} ${second}`,
    {flag :'a' }
    )

console.log('done with this task')
console.log('starting the next one')