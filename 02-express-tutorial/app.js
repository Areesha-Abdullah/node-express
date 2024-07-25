const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger)

// app.get('/',logger,(req,res)) use it when not using app.use

app.get('/', (req,res)=>{
    res.send("home")
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