const express = require('express');
const router = express.Router();
const { validContact } = require('../middeware/authValidatator');
const {contact, getAllContact, removecontact , contactId}   = require('../Controllers/ConatctController')

const {requiredsignin , isAuth , isAdmin}   = require('../middeware/auth');
const {userById}   = require('../middeware/user');

router.post('/'  ,validContact , contact)
router.get('/getAllContact/:userId' ,[requiredsignin, isAuth, isAdmin] , getAllContact)
router.delete('/:contactId/:userId'  ,[requiredsignin , isAuth , isAdmin] , removecontact);
router.param('contactId' ,contactId );
router.param('userId' , userById );
module.exports = router