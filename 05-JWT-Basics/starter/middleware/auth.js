const jwt = require('jsonwebtoken')
const {Unauthenticated} = require('../errors')






const authenticationmiddleware = async(req,res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new Unauthenticated('No token provided')
    }
    
    
    
    
    
    const token = authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
      const {id,username} = decoded
      req.user = {id,username}
      next()
    }
    
    catch(error){
        throw new CustomAPIError('not authorized to acces this route',401)
    }
    

   
}

module.exports = authenticationmiddleware