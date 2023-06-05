const express = require("express");
const router = express.Router();

const candidateController = require('../controllers/candidate.controller');


// +++++ /lab-assistant/candidate +++++ 
router.get('/data',candidateController.getData);


module.exports = router;