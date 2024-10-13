const express = require('express');
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get("/myprofile", authenticate, userController.getUserProfileHandler);


module.exports = router;