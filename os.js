let os = require('os')
//console.log(os.cpus())

const currentOs = {
    name: os.type(),
    release: os.release()
}

console.log(currentOs)