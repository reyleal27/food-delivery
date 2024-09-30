const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authenticate = require("../middleware/authenticate");


router.put('/add', authenticate, cartController.addItemToCart);
router.get('/total', authenticate, cartController.find)


module.exports = router;