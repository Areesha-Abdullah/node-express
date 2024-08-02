const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const cors = require('cors')


const  errorHandler = require('./middleware/error')
var corsOptions = {
    origin: "http://localhost:8081"
}


//middleware
app.use(cors(corsOptions))
app.use(express.static('./public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/tasks', tasks)
app.use(errorHandler)






// app.get('/hello', (req,res)=>{
//     res.send('Task Manager App')
// })



const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}...`))

