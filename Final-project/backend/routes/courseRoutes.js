const express = require('express');
const router = express.Router();

const coursectrl = require("../controller/courseController");

router.post("/", coursectrl.addcourse);
router.get("/", coursectrl.viewcourse);
router.get("/search/:keyword", coursectrl.searchcourse);
router.get("/:id", coursectrl.singelcourse);
router.put("/:id", coursectrl.updatecourse);
router.delete("/:id", coursectrl.deletecourse);

module.exports = router;