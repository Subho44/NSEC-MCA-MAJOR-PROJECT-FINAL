const express = require('express');
const router = express.Router();

const livectrl = require("../controller/liveclassController");


router.post("/",livectrl.createclass);
router.get("/",livectrl.getClasses);

module.exports = router;