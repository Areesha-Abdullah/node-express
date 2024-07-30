const express = require ('express');
const app = express();
const {people} = require('./data');

//static assets
app.use(express.static('./methods-public'));

app.use(express.urlencoded({extended: false}))

app.use(express.json())



app.listen(5000,()=>{
    console.log("server is listening on port 5000...")
})


