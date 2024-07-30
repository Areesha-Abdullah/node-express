const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    // console.log(req.body)
    const {name}= req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    
    // res.send('POST')
    res.status(401).send('Please provide credentials')
})

module.exports= router