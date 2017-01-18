const router = require('express').Router();

router.use('/schools', require('./school-route'));
router.use('/student', require('./student-route'));

module.exports = router