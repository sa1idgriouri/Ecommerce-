const Prodact = require ('../Model/prodact');
const Joi = require ('joi');
const _ = require('lodash');

const formidable = require("formidable");
const fs = require('fs')



// get All prodcat

exports.getAllProdact = (req , res)=>
{
      let SortBy = req.query.SortBy ? req.query.SortBy : "_id";
      let order = req.query.order ? req.query.order : "desc";
      let limit = req.query.limit ?  parseInt(req.query.limit ): 100;
      let skip = parseInt(req.body.skip);


      let query ={}

      let {search , category } = req.query

      if(search)
      {
          query.name ={$regex :search ,$options: 'i'}
      }
      if(category)
      {
          query.category =category
      }
     
    Prodact.find(query)
    .select("-photo")
    .populate("category")
    .sort([[SortBy , order]])
    .limit(limit)
    .skip(skip)
    .exec(function (err , prodact) {
        
        if(err)
        {
            return res.status(404).send({message : "Prodact not Found !"})
        }

        res.send({
            prodact : prodact
        })
    })
}


// create Prodcat 
exports.createProdact  = (req , res) =>{
    let form = new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {

        if(err) {
            return res.status(400).send({
                error: 'Image could not uploaded !'
            })
        }


        let product = new Prodact(fields);

        if(files.photo) {
           
            if(files.photo.size > Math.pow(10, 6)) {
                return res.status(400).send({
                    error: 'Image should be less than 1mb in size !'
                })
            }

            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.required(),
            Qauntity : Joi.required(),
            category: Joi.required(),
            shopping :Joi.boolean()
        })

        const { error } = schema.validate(fields);

        if(error) {
            return res.status(400).send({
                error: error.details[0].message
            })
        }

        product.save((err, product) => {
            if(err) {
                return res.status(400).json({
                    err: 'Product not persist '
                })
            }

            res.send({
                product:product
            })
        })

    })

  
}

//show one Prodact


exports.prodactId = (req , res , next , id)=>{

    Prodact.findById(id)
    .populate('category')
    .exec(function (err, prodact)

     {
        if(err || !prodact)
        {
            return res.status(404).send({message  : "le Prodact  not found !"})
        }

         req.prodact = prodact
         next();
    })
}


exports.showoneProdact = (req ,res)=>{
    req.prodact.photo = undefined
    res.send({
        prodact : req.prodact
    })
}

// delete prodact 

exports.deleteprodact  = (req , res)=>{

    let prodact = req.prodact

    prodact.remove((err , prodact)=>{

        if(err)
        {
            return res.status(404).send({message : "Prodact not Found"});
        }
        else
        {
            res.status(403).send({});
        }
    })

}


// update 



exports.updateProdact  = (req , res) =>{


    let form = new formidable.IncomingForm();
     form.keepExtension = true

     form.parse(req , (err , fields , files)=>{
       if(err)
       {
           res.status(400).send({errors : "image cloud not upload  !"})
       }
        let prodact =  req.prodact
         prodact   = _.extend(prodact , fields);
        

       if(files.photo)
       {
            if(files.photo.size >Math.pow(10, 6))
            {
                return res.status(400).send({message : "le photo plus grond  !"})
            }
            
             
           prodact.photo.data = fs.readFileSync(files.photo.path);
           prodact.photo.contentType =files.photo.type
       }


        
     
        
         prodact.save((err , prodact)=>{
         if(err)
        {
            return  res.status(400).send(err)
        }
   
        res.send({
            prodact : prodact
        })
   
       })



     })  

     /*

       const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.required(),
        Qauntity : Joi.required(),
        category: Joi.required(),
        shopping :Joi.boolean()
    })

         const {error}  = schema.validate(fields);

         if(error) 
         {
            return  res.status(400).send( { errors: error.details[0].message});
         }


     */
}

/// 


exports.relatedProdact =(req ,res)=>{
    let limit = req.query.limit ?  parseInt(req.query.limit ): 100;
    Prodact.find({category : req.prodact.category , _id : {$ne : req.prodact._id}})
    .select("-photo")
    .limit(limit)
    .populate('category' , '_id name')
    .exec((err , prodact)=>{
     if(err)
     return res.status(404).send({message : " prodact not found  ! "})

     else

     res.send({
         prodact
     })

    })
}



exports.SearchProduct = (req, res) => {

    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let order = req.query.order ? req.query.order : 'asc';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};
    
    
    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Prodact.find(findArgs)
           .select("-photo")
           .populate('category')
           .sort([[sortBy, order]])
           .limit(limit)
           .skip(skip)
           .exec((err, products) => {

              if(err) {
                  return res.status(404).json({
                      error: "Products not found !"
                  })
              }

              res.json({
                  products
              })
           })

}

//get Photo 

exports.getPhoto = (req , res)=>{
  const {data , contentType} = req.prodact.photo;
 if(data)
 {
     res.set('Content-Type' , contentType);
    return  res.send(data);
 }



}