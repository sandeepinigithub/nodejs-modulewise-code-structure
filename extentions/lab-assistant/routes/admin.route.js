const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin.controller');


// +++++ /lab-assistant/admin +++++ 
router.get('/data',adminController.getData);


module.exports = router;