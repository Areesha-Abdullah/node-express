const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')


//single middleware
// app.use(logger)

// // app.get('/',logger,(req,res)) use it when not using app.use

// app.get('/', (req,res)=>{
//     res.send("home")
// })
// app.get('/about', (req,res)=>{
//     res.send("about")
// })
// app.get('/api/product', (req,res)=>{
//     res.send("product")
// })
// app.get('/api/items', (req,res)=>{
//     res.send("items")
// })

// app.listen(5000, ()=>{
//     console.log('server is listening on port 5000...')
// })



//multiple middleware
app.use([logger,authorize])


//
app.use(morgan('tiny'))

// app.get('/',logger,(req,res)) use it when not using app.use

app.get('/', (req,res)=>{
    res.send("home")
    console.log(req.user)
})
app.get('/about', (req,res)=>{
    res.send("about")
})
app.get('/api/product', (req,res)=>{
    res.send("product")
})
app.get('/api/items', (req,res)=>{
    res.send("items")
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})