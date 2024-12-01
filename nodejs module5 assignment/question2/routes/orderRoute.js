const express = require("express");
const router = express.Router();

const { add, savedata, delData, editData } = require("../controllers/orderController");

router.get("/", add);
router.post("/", savedata);
router.get("/edit/:id", editData);
router.get("/delete/:id", delData);

module.exports = router;
