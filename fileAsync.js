const { readFile , writeFile } = require('fs')
readFile('./folder/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./folder/second.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const second = result
    writeFile('./folder/result-async.txt',`This is the result: ${first} ${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
    })
    })    
})