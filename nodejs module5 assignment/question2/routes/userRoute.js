const express = require("express");
const router = express.Router();

const { listUsers, saveUser, deleteUser, editUser } = require("../controllers/userController");

router.get("/", listUsers); 
router.post("/", saveUser);
router.get("/edit/:id", editUser); 
router.get("/delete/:id", deleteUser); 

module.exports = router;
