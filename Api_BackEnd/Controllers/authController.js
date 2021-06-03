const User = require("../Model/user");
const jwt  = require('jsonwebtoken');

exports.getUser = (req ,res)=>{
  
    res.send("hello");

}

//signup
exports.signup = (req , res)=>{

const user = new User(req.body);


user.save((err , user)=>{
 if(err)
  res.status(400).send(err)
  else
  user.hash_Password= undefined
  //user.slat=undefined
  res.send(user);
})
}

//signin

exports.signin = (req ,res)=>{

    const {email , password} = req.body;
    User.findOne({email} , (err , user)=>{
     if(err || !user) {
            return res.status(400).json({
                error: 'User not found with this email, Please SignUp!'
            })
        }
    if(!user.authenticate(password))
    {
         return res.status(401).json({
            error : "Email or Password don't match !"
        })
    }

    var token = jwt.sign({_id : user._id , role : user.role} ,process.env.JWT_SCRIPT)

     res.cookie('token' , token , {expire : new Date()+ 2838764})

      const {_id ,email  , name , role} = user

      res.send({
          token,
          user: {_id ,email , name, role}
      })
    })

}

//logout

exports.signout = (req ,res)=>{
    res.clearCookie('token');
   res.send ({
          message : "user signout"
   })
}

