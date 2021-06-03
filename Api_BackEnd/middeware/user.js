const User = require('../Model/user');


exports.userById = (req ,res ,next ,id )=>{

    User.findById(id).exec( function( err , user){
     if(err || ! user)
     {
         res.status(404).send({errros : "User not Found  !"})
     }

     req.profile =user
     next();
    })

}

exports.createHistroy =(req ,res ,next)=>{
    
        let history =[]
     history= req.body.products.map(prodact =>{
            return {
            _id : prodact._id,
            name: prodact.name,
            description : prodact.description,
            Quantity   : prodact.Count,
            amount     : prodact.price * prodact.Count,
            transact_id : req.body.transaction_id
          }
        })
        if(history.length)
        {   
             User.findOneAndUpdate(
            {_id: req.profile._id}
            , {$push :{history:history}} 
            , {new : true} ,
            (err, data)=>{
                if(err)
                {
                    return res.status(400).send(err)
                }
               return  next()
            })

        }

        next()

}