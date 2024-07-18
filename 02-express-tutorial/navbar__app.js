const http = require ('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./navbar-app/index.html')
//just doing that i acan just see the structure and getting 404 for js and styling file because when we print url we only serve for html but in html we have request for three more files so we have to manually request all these resources
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homelogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{

    const url = req.url
    console.log(url)
    if(url==='/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homepage)
        res.end()
    
    }
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homelogic)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page </h1>')
        res.end()
    
    }
  
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>page not found </h1>')
        res.end()
    
    }

})
server.listen(5000)