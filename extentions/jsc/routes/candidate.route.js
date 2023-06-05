// const {router} = require('./../../../app')
const express = require("express");
const router = express.Router();

const candidateController = require('../controllers/candidate.controller');


// +++++ /jsc/candidate +++++ 
router.get('/data',candidateController.getData);


module.exports = router;