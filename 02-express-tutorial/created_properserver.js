// const http = require ('http')
// const {readFileSync} = require('fs')
// //get al files
// const homepage = readFileSync('./index.html')
// // we are not reading this again anad again when req comes in just reading it when server insatantiated hence used readfilesync is it was in if block it wouldve been asynchronous
// const server = http.createServer((req,res)=>{
//     //write head is used to write headers and status code
//     //if content type is plain we get plain text writen in end or write method if its html we get how basically html print things so here we usually connect the frontend html version of our application by reading the file using read file module
//     const url = req.url
//     if(url==='/'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write(homepage)
//         res.end()
    
//     }
//     else if(url === '/about'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write('<h1>about page </h1>')
//         res.end()
    
//     }
//     else{
//         res.writeHead(404, {'content-type':'text/html'})
//         res.write('<h1>page not found </h1>')
//         res.end()
    
//     }

// })
// server.listen(5000)