const express = require("express");
const router = express.Router();

const masterController = require('../controllers/candidate.controller');


// +++++ /lab-assistant/master +++++ 
router.get('/data', masterController.getData);


module.exports = router;