const express = require ('express');
const app = express();
const {people} = require('./data');

//static assets
app.use(express.static('./methods-public'));

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.post('/login',(req,res)=>{
    // console.log(req.body)
    const {name}= req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    
    // res.send('POST')
    res.status(401).send('Please provide credentials')
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide credentials'})
    }
    
    // res.send('POST')
    res.status(201).json({success: true, person: name})
})

app.post('/api/postman/people',(req,res)=>{
    const{name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide credentials'})
    }
    
    // res.send('POST')
    res.status(201).json({success: true, data: [...people,name]})
})


//get method
app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true , data:people})
})


app.listen(5000,()=>{
    console.log("server is listening on port 5000...")
})


