const router = require('express').Router()

router.use('/users', require('./users'));
router.use('/dog', require('./dog'));

module.exports = router;
