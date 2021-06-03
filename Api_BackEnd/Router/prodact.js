const express = require('express');
const router = express.Router();


// Controller 
const {
    createProdact , 
    showoneProdact , 
    prodactId ,
    relatedProdact,
    deleteprodact , 
    updateProdact ,
    getPhoto,
    SearchProduct,
    getAllProdact}  = require('../Controllers/prodactController');
// midlllewaire
const {userById}   = require('../middeware/user');
const {requiredsignin , isAuth , isAdmin}   = require('../middeware/auth');
const {prodactValidator}  = require('../middeware/ProduitValidator')

router.get('/' , getAllProdact);
router.get('/related/:prodactId' , relatedProdact);
router.post('/search' , SearchProduct);
router.get('/photo/:prodactId' , getPhoto)
router.post('/create/:userId'  , [requiredsignin ,isAuth , isAdmin ]  ,createProdact)
router.param('userId' , userById );
router.put('/:prodactId/:userId' ,[requiredsignin ,isAuth , isAdmin ] , updateProdact)
router.delete('/:prodactId/:userId' ,[requiredsignin ,isAuth , isAdmin ] , deleteprodact)


router.get('/:prodactId' , showoneProdact);
router.param('prodactId' , prodactId );

module.exports = router