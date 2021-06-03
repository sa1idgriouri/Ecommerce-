const express = require("express");
const {getUser , signup  , signin , signout} = require("../Controllers/authController");

// validtaor 
const   {usersignupValidator}  = require('../middeware/authValidatator')

const  {requiredsignin}   = require('../middeware/auth');

const router = express.Router();


router.get('/' ,getUser);

// signup
router.post('/signup' , usersignupValidator , signup);

//signin
router.post('/signin' , signin);
// signout
router.get('/signout' , signout);


module.exports = router;