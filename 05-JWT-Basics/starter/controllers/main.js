//check username, password in post(login) request
//if exist create JWT
//send back to front end

//set up authentication so only the request with JWT can accessmth dashboard

const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')







const login = async (req,res)=>{
    const {username, password}=req.body
    console.log(username, password)
       //check whether username and pass is present
//opts
//1 db
//2 joi
    //3 
if (!username || !password){
 throw new BadRequest('please provide username and password')
}

//just for demo usually provided by db
const id = new Date().getDate()




//if username and pass word exist we create a token 
//in .sign method dont give too much info(dont give too much in  pay load) or confidential info
//jsut for demo, in production use long,  complex and unguessable string value!!!!!! 
const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn: '30d'}) //payload we sending

//to provide jwt secret we create .env file

    res.status(200).json({msg: 'user created',token})//here he token payload we are sending

 



}


const dashboard  = async (req,res)=>{
  console.log(req.user)
    const luckynumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `hello, ${req.user.username}`, secret:`here is your authorized data ${luckynumber}`})



    
}

module.exports = {
    login,dashboard
}