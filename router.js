const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const adminRouter = require('./routes/admin.router');

router.use('/customers', customerRouter);
router.use('/admins', adminRouter);

module.exports = router;