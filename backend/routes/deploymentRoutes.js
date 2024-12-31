const express = require('express');
const router = express.Router();
const deploymentController = require('../controllers/deploymentController');

router.post('/deploy', deploymentController.deploy);

module.exports = router;
