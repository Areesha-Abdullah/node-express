const express = require('express')
const path = require('path');
 
const app = express()


//setup static and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// // this is also static so we can do it by two other methods
// // 1- is dump this file in public
// // 2- templating engine ssr(server side rendering)

// })


app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is listensing on port 5000...')
})





