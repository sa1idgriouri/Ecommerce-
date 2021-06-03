const express = require("express");
const router = express.Router();
//controller 
const   {getOneUser , UpdateUser}  = require('../Controllers/userController');


// middlewier
  
const {userById}   = require('../middeware/user');
const {requiredsignin , isAuth , isAdmin}   = require('../middeware/auth');



router.get('/profile/:userId' , requiredsignin ,isAuth, getOneUser );
router.put('/:userId' , requiredsignin ,isAuth,  UpdateUser );

router.param('userId' , userById );





module.exports = router;