exports.prodactValidator = (req , res , next) =>{
    req.check('name' , 'name is Required !').notEmpty();
    req.check('description' , ' description is Required  !').notEmpty()
    req.checkBody('price' , 'price is Required !').notEmpty();
  
     const errors = req.validationErrors();
  
     if(errors)
     {
        return  res.status(400).send(errors);
     }
  
     next()
  
  }