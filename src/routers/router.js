const { Router } = require("express")
const userRoutes = require('./userRoutes')
const admRoutes = require('./admRoutes')
const router = Router();

router.use('/user', userRoutes);
router.use('/adm', admRoutes);
router.use('/notify', userRoutes);
router.use('/account', admRoutes);
router.use('/trasitions', admRoutes);

module.exports = router;