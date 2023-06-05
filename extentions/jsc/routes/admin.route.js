const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin.controller');

// +++++ /jsc/admin/... +++++ 
router.get(`/data`, adminController.getData);


module.exports = router;