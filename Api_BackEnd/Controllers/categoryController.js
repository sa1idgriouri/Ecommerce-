

const Category = require('../Model/category');
const Joi   = require('joi');
const _ = require("lodash");



// get All category

exports.getAllCategory = (req , res)=>{
  let query ={}

  let {search , category } = req.query

  if(search)
  {
      query.name ={$regex :search ,$options: 'i'}
  }
 Category.find(query).exec( function (err , category) {
    if(err)
    {
      res.status(500).send(err)
    }
    else
    {
      res.status(200).json({
        category
      })
    }
 })

}

// create category
exports.CreateCtegory =(req , res)=>{
  
  const category = new Category(req.body);

  category.save((err, category) => {
       
      if(err) {
          return res.status(400).send({
              error: 'bad Request !'
          })
      }
      else
      {
        res.send({
          cartegory: category
      })

      }

     
  })
}


// 

exports.CategoryId = (req , res , next , id)=>{

    Category.findById(id).exec(function (err , category) {
        if(err || !category)
        {
          res.status(404).json({message : "Category not found !"});
        }
        
        req.category = category;
        next();
    })
}

// show one category

exports.showOneCategory = (req , res )=>{

      res.json({
        category : req.category
      })
}

// update category


exports.UpdateCategory =(req , res)=>{

  const category = req.category;
   category.name  = req.body.name
  const schema = Joi.object({
     name : Joi.string().required()
  })

  const {error  , value}  =  schema.validate(req.body);

  if(error)
  {
      return res.status(400).json({error: error })
  }


  category.save((err , category)=>{
     if(err)
       return  res.status(400).json({error :err})
   
     res.send ({
         category : category
     })
  })
}


// delete Category

exports.removeCategory = (req ,res )=>{
  let category = req.category
  Category.remove(category ,(err , category)=>{
    if(err)
    {
      return res.status(400).json({message : "le category not delete"})
    }
     
     res.status(202).send({message : "category delete" });
  })

}