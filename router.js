const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const adminRouter = require('./routes/admin.router');

router.use('/customer', customerRouter);
router.use('admin', adminRouter);

module.exports = router;