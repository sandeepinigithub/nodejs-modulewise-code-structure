// const { app, router } = require('./../../../app')
const express = require("express");
const router = express.Router();

const masterController = require('../controllers/master.controller');


// +++++ /jsc/master +++++ 
router.get('/data', masterController.getData);


module.exports = router;