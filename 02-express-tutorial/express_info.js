//importing the module
const express = require ('express')
//invoking it
const app = express()

app.get('/', (req,res)=>{
    res.status(200).send('home page')// when user will use get methods whilst requesting this method use a calll back function with req and res and respond.send gives back the respond to this req just like res.write and res.end

})

app.get('/about', (req,res)=>{
    res.send('about page')
})
//if i navigate to another page express will give 404 error automatically 
//but to do it on my own using  app.all (it covers all http verbs)
//we do that so we have more control to what we sent back to the browser
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})
//listen means on which port we will be listening on (server will be listening on)
app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})


//methods we will use
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use --> use for middleware
//app.listen

//the first 4 methods refer to http verbs 


