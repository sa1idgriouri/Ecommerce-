
const Prodact = require ('../Model/prodact');

exports.decrimunt  = (req , res , next)=>{

    let butkOp = req.body.products.map(product =>{
        return{
            updateOne: {
                filter:{_id : product._id},
                update:{$inc:{Qauntity : -product.Count , sold:+product.Count}}
            }
        }

    })

    Prodact.bulkWrite(butkOp , (err, product)=>{
        if(err)
        {
            return res.status(400).json(err)
        }

        next()
    })

    
}