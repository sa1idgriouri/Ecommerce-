const { Order } = require("../Model/order")



exports.create  =(req , res)=>
{
    req.body ={
        ...req.body ,
        user : req.profile
    }
    let order = new Order(req.body)
    order.save((err , data)=>{
        if(err)
        {
            return res.status(404).json({error: err})
        }

         
       
    })
} 

/// list order

exports.listOrder  = (req ,res) =>{

    
      let limit = req.query.limit ?  parseInt(req.query.limit ): 100;
    let query ={}

    let {search , category } = req.query
  
    if(search)
    {
        query.name ={$regex :search ,$options: 'i'}
    }
   Order.find(query)
   .populate('user' , 'name , _id , email')
   .sort('-createdAt')
   .limit(limit)
   .exec(function (err , order) {
        if(err)
        {
            return res.status(404).json("le order not found !")
        }
        res.json(order)
   })
}

 

   


exports.OderId = (req , res , next , id)=>{

    Order.findById(id)
    .populate('user' , '_id name , email')
    .exec(function (err , order) {
        if(err || !order)
        {
          res.status(404).json({message : "Order not found !"});
        }
        
        req.order = order;
        
        next();
    })
}



exports.showOneOrder = (req , res )=>{

    res.json({
      order : req.order
    })
}

//
exports.removeorder= (req ,res )=>{
    let order = req.order
    Order.remove(order ,(err , order)=>{
      if(err)
      {
        return res.status(400).json({message : "order not delete"})
      }
       
       res.status(202).send({message : "Order delete" });
    })
  
  }


   exports.getStatus =(req , res )=>{
     return  res.json({status:Order.schema.path('status').enumValues})
  }

  exports.updateOrder =(req , res )=>{

 
    Order.update(
        {_id: req.order._id},{$set:{status:req.body.status}},(err , data) =>{
            if(err)
            {
                return res.status(400).json({error :err.message})
            }
            res.json(data)
        }
    )
    
 }

