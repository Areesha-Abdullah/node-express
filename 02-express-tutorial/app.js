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

app.post('/api/people/postman',(req,res)=>{
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


//put 
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    // console.log(id,name)
    // res.send('hello')
    const person = people.find((person)=> person.id===Number(id))
    console.log(person)
    if(!person){
        return res.status(404).json({success: false, msg: `no person with id ${id}`})
    }
  
    const newPeople  = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name
         }
        
        return person
    })

res.status(200).json({success:true, data:newPeople})

})

//delete method 
app.delete('/api/people/:id', (req,res)=>{
    const person = people.find((person)=> person.id===Number(req.params.id))
    console.log(person)
    if(!person){
        return res.status(404).json({success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople  = people.filter((person)=>{
        if(person.id!==Number(req.params.id)){
            return person
         }
        
        
    })
    
res.status(200).json({success:true, data:newPeople})
})



app.listen(5000,()=>{
    console.log("server is listening on port 5000...")
})


