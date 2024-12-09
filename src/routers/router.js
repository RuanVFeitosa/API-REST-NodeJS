const { Router } = require("express")
const userRoutes = require('./userRoutes')
const admRoutes = require('./admRoutes')
const router = Router();

router.use('/user', userRoutes);
router.use('/adm', admRoutes);

module.exports = router;