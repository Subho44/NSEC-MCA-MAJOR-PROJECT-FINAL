const express = require('express');
const router = express.Router();

const orderctrl = require("../controller/orderController");


router.post("/place",orderctrl.placeOrder);


module.exports = router;