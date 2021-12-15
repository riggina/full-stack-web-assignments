const http = require('http')
const url = require('url')

const port = 8000

const server = http.createServer((req,res) => {
    let pathname = url.parse(req.url).pathname

    res.writeHead(200, {'Content-Type' : 'text/html'})

    if (pathname === '/about'){
        res.write('<h1>Welcome to about us page</h1>')
        res.end()
    } else if (pathname === '/contact'){
        res.write('<h1>Welcome to contact us page</h1>')
        res.end()
    } else {
        res.write('<h1>Hello World!</h1>')
        res.end()
    }
})

server.on('listening', () => {
    console.log("server listening on port", port);
})

server.listen(port);