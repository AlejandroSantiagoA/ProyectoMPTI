const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/inicio', mainController.home);
router.get('/iniciar sesion',mainController.login);
router.get('/crear cuenta',mainController.register);
router.get('/carshoping',mainController.productCart);
// router.get('/productDetail/:id',mainController.productDetail);





module.exports = router;
