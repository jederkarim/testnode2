const express = require('express');
const { register, login } = require('../controllers/Admincontroller');
const router = express.Router();


router.post('/admin',register);
router.post('/login',login);




module.exports=router;