const router = require("express").Router();
const ctrl = require("../controller/userController");

router.post("/register", ctrl.register);
router.post("/verify", ctrl.verifyOtp);
router.post("/login", ctrl.login);

module.exports = router;