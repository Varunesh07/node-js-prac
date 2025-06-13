const {readFile, writeFile} = require('fs').promises
/* const util = require('util')
const read = util.promisify(readFile)
const write = util.promisify(writeFile)
 */
const start = async () => {
    try{
        const first = await readFile('./folder/first.txt','utf8')
        const second = await readFile('./folder/second.txt','utf-8')
        console.log(first,second)
        writeFile('./folder/result-await.txt',`This is the resultant file\n ${first}\n${second}`,{flag: 'a'})
    }catch(err){
        console.log(err)
    }
    
} 

start()

/* const read = (path)=>{
    return new Promise ((resolve,reject)=>{
        readFile(path , 'utf8' , (err,data)=>{
            if(err){
                reject(err)
                return
            }
            resolve(data)
        })
    })
}
 */
/* read('./folder/first.txt').then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
}) */