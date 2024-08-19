// External dependencies
const express = require('express');
const router = express.Router();
 
/* *********************** Routes for versions *********************** */

//v1
const versionOne = require('./views/v1/check-for-help-paying-nhs-costs/routes')
router.use('/v1', versionOne);
 
 //v2
const versionTwo = require('./views/v2/check-for-help-paying-nhs-costs/routes')
router.use('/v2', versionTwo);

/* *********************** Routes for Research *********************** */

const August24RouteA = require('./views/research/august-2024/route-a/routes')
router.use('/research', August24RouteA);

const August24RouteB = require('./views/research/august-2024/route-b/routes')
router.use('/research', August24RouteB);

/* *********************** Routes for Archive *********************** */
 
module.exports = router;
