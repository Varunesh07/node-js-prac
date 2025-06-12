let path = require('path')
console.log(path.sep) // gives / path seperator

const filePath = path.join('folder','subfolder','test.txt')
console.log(filePath)

console.log(path.basename(filePath))

console.log(path.resolve(__dirname,'folder','subfolder','test.txt'))