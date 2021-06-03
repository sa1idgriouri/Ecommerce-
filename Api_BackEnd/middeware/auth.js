const expressJWT= require("express-jwt");
require('dotenv').config();
exports.requiredsignin = expressJWT({
    secret:process.env.JWT_SCRIPT,
    algorithms : ["HS256"] ,
    userProperty : 'auth'
})


exports.isAuth = (req ,res ,next)=>{

    if(req.auth.role == 1)
    {
       return next();
    }
  
        let user = req.profile && req.auth && req.profile._id == req.auth._id

        if(!user)
        {
            return res.status(403).send({errors : "Access Deniat"})
        }
        next();

    

  

}


exports.isAdmin = (req , res , next) =>{
    
    if(req.auth.role ==0)
    {
        return res.status(403).send({errors : "Admin Resourse , access Deniat"});
    }

    next();

}