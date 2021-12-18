const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController/userController");

router.get('/register', userController.login);
router.post('/register', userController.createUser);
router.get('/login', userController.login);
router.post('/login', userController.gettingLogged);


module.exports= router;
