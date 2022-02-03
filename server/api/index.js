const router = require('express').Router()

router.use('/users', require('./users'));
router.use('/dogs', require('./dogs'));
router.use('/', require('./auth'));

module.exports = router;
