const router = require('express').Router();
const userRoutes = require('./userRoutes.js'); 
const postRoutes = require('./thoughtRoutes.js');  

router.use('/users', userRoutes);  
router.use('/thoughts', postRoutes);  

module.exports = router;
