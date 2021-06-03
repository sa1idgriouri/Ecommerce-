const User = require('../Model/user');

exports.getOneUser= (req ,res)=>{

    req.profile.hash_Password= undefined
    req.profile.slat  =undefined
   res.send({
       user : req.profile
   })
}

exports.UpdateUser = (req ,res)=>{
    User.findOneAndUpdate({_id : req.profile._id} , {$set : req.body} , {new : true} , (err , user)=>{
     if(err || !user)
     {
         return res.status(400).send(err);
     }
     req.profile.hash_Password   = undefined
     req.profile. slat  =undefined
     res.send({user})
    })

}