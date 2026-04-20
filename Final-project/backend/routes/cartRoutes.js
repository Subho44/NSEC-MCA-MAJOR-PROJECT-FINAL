const express = require('express');
const router = express.Router();

const cartctrl = require("../controller/cartController");


router.post("/add",cartctrl.addToCart);
router.get("/:id", cartctrl.getCart);

module.exports = router;