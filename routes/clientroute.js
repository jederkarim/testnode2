const express = require('express');
const { addclient, getclient, deleteclient, updateclient, affectcours } = require('../controllers/clientcontroller');
const router = express.Router();


router.post('/client',passport.authenticate('bearer',{session:false}),addclient);
router.get('/client/:idclient',getclient);
router.delete('/client/:idclient',deleteclient);
router.put('/client/:idclient',updateclient);
router.put('/affect/:idclient/:idcours',affectcours);









module.exports=router;