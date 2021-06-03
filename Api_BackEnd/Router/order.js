const express = require('express');
const { create, listOrder ,OderId , showOneOrder, listOrderOll, removeorder, getStatus, updateOrder } = require('../Controllers/orderController');
const { requiredsignin, isAuth, isAdmin } = require('../middeware/auth');
const { decrimunt } = require('../middeware/order');
const {userById , createHistroy}   = require('../middeware/user');
const router = express.Router();

router.get('/:userId'  ,[requiredsignin , isAuth , isAdmin], listOrder)
router.get('/status/:userId'  ,[requiredsignin , isAuth , isAdmin],getStatus)
router.patch('/:idOrder/status/:userId'  ,[requiredsignin , isAuth , isAdmin],updateOrder)
router.get('/:idOrder/:userId'  ,[requiredsignin , isAuth , isAdmin], showOneOrder)
router.post('/create/:userId'  ,[requiredsignin , isAuth , createHistroy , decrimunt], create)
router.delete('/:idOrder/:userId'  ,[requiredsignin , isAuth , isAdmin] , removeorder);
router.param('idOrder' ,OderId);
router.param('userId' ,userById);



module.exports = router

