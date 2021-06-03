exports.usersignupValidator = (req , res , next) =>{
  req.check('name' , 'name is Required !').notEmpty();
  req.check('email' , 'email is Required  !').notEmpty()
  .isEmail()
  .withMessage("email not match !")

  req.check('password' , 'password is Required !')
  .notEmpty()
  .isLength ({min : 8 , max :20})
  .withMessage("password msut bettween 8 and 20 characters ! ")

   const errors = req.validationErrors();

   if(errors)
   {
      return  res.status(400).send({errors : errors[0].msg });
   }

   next()

}


exports.validContact = (req , res , next) =>{
  req.check('name' , 'name is Required !').notEmpty();
  req.check('email' ,'Email is Required !' ).notEmpty().isEmail().withMessage("Email not Match !")
  req.check('message' , 'Message Is  Required').notEmpty()
  .isLength({min :10 , max :200})
  .withMessage(" message msut bettween 8 and 20 characters ! ")

  const errors = req.validationErrors();

  if(errors)
  {
     return  res.status(400).send({errors : errors[0].msg });
  }

  next()

}


