const express = require('express');
const { getcours, deletecours, updatecours, addcours } = require('../controllers/courscontroller');
const router = express.Router();


router.post('/cours',addcours);
router.get('/cours/:idcours',getcours);
router.delete('/cours/:idcours',deletecours);
router.put('/cours/:idcours',updatecours);




module.exports=router;