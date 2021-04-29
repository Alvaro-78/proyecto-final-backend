const router = require('express').Router();
const customerRouter = require('./routes/customer.router');

router.use('/customers',customerRouter);


module.exports = router;