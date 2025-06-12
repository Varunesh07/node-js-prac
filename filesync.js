const { readFileSync , writeFileSync } = require('fs')

const first = readFileSync('./folder/first.txt','utf8')
const second = readFileSync('./folder/second.txt','utf8')

console.log(first)
console.log(second)

writeFileSync(
    './folder/result.txt',
    `Resultant File: ${first}\n ${second}`,
    {flag: 'a'}
)