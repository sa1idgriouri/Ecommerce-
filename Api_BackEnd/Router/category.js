const express  = require('express');

// controller 

const {getAllCategory ,CreateCtegory , showOneCategory , CategoryId , UpdateCategory , removeCategory}  = require('../Controllers/categoryController');

// middlewier
const {userById}   = require('../middeware/user');
const {requiredsignin , isAuth , isAdmin}   = require('../middeware/auth');

const router = express.Router();

router.get('/'   , getAllCategory);
router.post('/create/:userId'  ,[requiredsignin , isAuth , isAdmin] , CreateCtegory);
router.put('/:categoryId/:userId'  ,[requiredsignin , isAuth , isAdmin] , UpdateCategory);
router.delete('/:categoryId/:userId'  ,[requiredsignin , isAuth , isAdmin] , removeCategory);
router.get('/:categoryId' , showOneCategory);

router.param('categoryId' , CategoryId);
router.param('userId' , userById );

module.exports = router