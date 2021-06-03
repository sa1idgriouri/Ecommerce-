const express = require("express");
const router = express.Router();
//controller 
const   {getToken ,prossuce}  = require('../Controllers/braintreeController');


// middlewier
  
const {userById}   = require('../middeware/user');
const {requiredsignin , isAuth }   = require('../middeware/auth');



router.get('/getToken/:userId' , requiredsignin ,isAuth, getToken );
router.post('/payment/:userId' , requiredsignin ,isAuth,prossuce );

router.param('userId' , userById );





module.exports = router;