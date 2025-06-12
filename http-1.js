let http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write(`<h1>Hello everyone!</h1>`)
        return res.end()    
    }
    if(req.url === '/about'){
        return res.end(`This is about page`)
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h2>Incorrect url</h2>
    <a href="/">Back to home</a>`)        
        
    
})

server.listen(5000)