const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscriberController');
const validateEmail = require('../middlewares/validateEmail');

router.post('/', validateEmail, controller.createSubscriber);
router.get('/', controller.getSubscribers);

module.exports = router;
