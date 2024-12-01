const express = require('express')
const {add, display , deleteData, editData} = require('../controllers/CategoryController')
var router = express.Router();

router.get('/',display);
router.get('/edit/:id',editData);
router.get('/del/:id',deleteData);
router.post('/add',add);
module.exports = router;
