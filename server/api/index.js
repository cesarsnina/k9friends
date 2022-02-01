const router = require('express').Router()

router.use('/user', require('./user'));
router.use('/dogs', require('./dogs'));
router.use('/', require('./auth'));

module.exports = router;
