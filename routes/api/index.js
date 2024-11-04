const router = require('express').Router();
const userRoutes = require('./routes/api/userRoutes.js'); 
const postRoutes = require('./routes/api/postRoutes.js');  

router.use('/users', userRoutes);  
router.use('/posts', postRoutes);  

module.exports = router;
