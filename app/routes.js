// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// ********************************
// ELIGIBILITY CHECKER (VERSION 1)
// ********************************

// Country
router.post('/v1/check-for-help-paying-nhs-costs/where-you-live', function (req, res) {

    var country = req.session.data['country']
  
    if (country === "england"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/gp-in-scotland-or-wales')
    }
    else if (country === "scotland") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/live-in-highlands')
    }
    else if (country === "wales") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/date-of-birth')
    }
    else if (country === "northern-ireland") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/service-not-northern-ireland')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/where-you-live-error')
    }
  
})

// Scotland or Wales
router.post('/v1/check-for-help-paying-nhs-costs/gp-in-scotland-or-wales', function (req, res) {

    var scotlandorwales = req.session.data['scotland-or-wales']
  
    if (scotlandorwales === "yes"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/date-of-birth')
    }
    else if (scotlandorwales === "no") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/date-of-birth')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/gp-in-scotland-or-wales-error')
    }
  
})

// Live in Highlands or Islands
router.post('/v1/check-for-help-paying-nhs-costs/live-in-highlands', function (req, res) {

    var liveinhighlands = req.session.data['liveinhighlands']
  
    if (liveinhighlands === "yes"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/date-of-birth')
    }
    else if (liveinhighlands === "no") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/date-of-birth')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/live-in-highlands-error')
    }
  
})

// Date of birth
router.post('/v1/check-for-help-paying-nhs-costs/date-of-birth', function (req, res) {

    var day = req.session.data['dob-day']
    var month = req.session.data['dob-month']
    var year = req.session.data['dob-year']

  
    if (day && month && year){
      res.redirect('/v1/check-for-help-paying-nhs-costs/partner')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/date-of-birth-error')
    }
  
})

// Partner
router.post('/v1/check-for-help-paying-nhs-costs/partner', function (req, res) {

    var partner = req.session.data['partner']
  
    if (partner === "yes"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/claim-benefits-tax-credits')
    }
    else if (partner === "no") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/claim-benefits-tax-credits')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/partner-error')
    }
  
})

// Benefits
router.post('/v1/check-for-help-paying-nhs-costs/claim-benefits-tax-credits', function (req, res) {

    var benefits = req.session.data['benefits']
  
    if (benefits === "yes"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/paid-universal-credit')
    }
    else if (benefits === "no") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/claim-benefits-tax-credits-error')
    }
  
})

// Universal credit
router.post('/v1/check-for-help-paying-nhs-costs/universal-credit', function (req, res) {

    var universalcredit = req.session.data['universal-credit']
  
    if (universalcredit === "yes"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-claim')
    }
    else if (universalcredit === "not-yet") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-not-yet')
    }
    else if (universalcredit === "no"){
        res.redirect('/v1/check-for-help-paying-nhs-costs/benefits')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/paid-universal-credit-error')
    }
  
})

// Universal credit claim
router.post('/v1/check-for-help-paying-nhs-costs/universal-credit-claim', function (req, res) {

    var universalcreditclaim = req.session.data['universal-credit-claim']
  
    if (universalcreditclaim === "yes"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
    }
    else if (universalcreditclaim === "no") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-claim-error')
    }
  
})

// Universal credit take home pay
router.post('/v1/check-for-help-paying-nhs-costs/universal-credit-take-home-pay', function (req, res) {

    var universalcredittakehomepay = req.session.data['universal-credit-take-home-pay']
  
    if (universalcredittakehomepay === "yes"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
    }
    else if (universalcredittakehomepay === "no") {
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
    }
    else {
      res.redirect('/v1/check-for-help-paying-nhs-costs/universal-credit-take-home-pay-error')
    }
  
})

// Do you get any of these benefits?
router.post('/v1/check-for-help-paying-nhs-costs/benefits', function (req, res) {

  var benefits = req.session.data['benefits']

  if (benefits.includes('income-support')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-income-support')
  }
  else if (benefits.includes('tax-credits')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-type')
  }
  else if (benefits.includes('employment-support-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/employment-support-allowance-type')
  }
  else if (benefits.includes('job-seekers-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/jobseekers-allowance-type')
  }
  else if (benefits.includes('pension-credit')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/pension-credit-type')
  }
  else if (benefits === "no-benefits") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/benefits-error')
  }
})

// Tax credits
router.post('/v1/check-for-help-paying-nhs-costs/tax-credit-type', function (req, res) {

  var benefits = req.session.data['benefits']
  var taxCreditType = req.session.data['tax-credit-type']

  if (taxCreditType === "WTCandCTC" && benefits === "tax-credits") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC-Disability" && benefits === "tax-credits") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "CTC" && benefits === "tax-credits") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC" && benefits === "tax-credits") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
  }


  else if (taxCreditType === "WTCandCTC" && benefits.includes('income-support')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC-Disability" && benefits.includes('income-support')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "CTC" && benefits.includes('income-support')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC" && benefits.includes('income-support')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-income-support')
  }


  else if (taxCreditType === "WTCandCTC" && benefits.includes('employment-support-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC-Disability" && benefits.includes('employment-support-allowance')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "CTC" && benefits.includes('employment-support-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC" && benefits.includes('employment-support-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/employment-support-allowance-type')
  }


  else if (taxCreditType === "WTCandCTC" && benefits.includes('job-seekers-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC-Disability" && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "CTC" && benefits.includes('job-seekers-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC" && benefits.includes('job-seekers-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/jobseekers-allowance-type')
  }


  else if (taxCreditType === "WTCandCTC" && benefits.includes('pension-credit')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC-Disability" && benefits.includes('pension-credit')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "CTC" && benefits.includes('pension-credit')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income')
  }
  else if (taxCreditType === "WTC" && benefits.includes('pension-credit')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/pension-credit-type')
  }


  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-type-error')
  }
})

// Tax credits income
router.post('/v1/check-for-help-paying-nhs-costs/tax-credit-income', function (req, res) {

  var benefits = req.session.data['benefits']
  var taxCreditIncome = req.session.data['tax-credit-income']


  if (taxCreditIncome == "yes" && benefits == "tax-credits") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
  }
  else if (taxCreditIncome == "no" && benefits == "tax-credits") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
  }


  else if (taxCreditIncome == "yes" && benefits.includes('income-support')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
  }
  else if (taxCreditIncome == "no" && benefits.includes('income-support')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-income-support')
  }


  else if (taxCreditIncome == "yes" && benefits.includes('employment-support-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
  }
  else if (taxCreditIncome == "no" && benefits.includes('employment-support-allowance')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/employment-support-allowance-type')
  }


  else if (taxCreditIncome == "yes" && benefits.includes('job-seekers-allowance')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
  }
  else if (taxCreditIncome == "no" && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/jobseekers-allowance-type')
  }


  else if (taxCreditIncome == "yes" && benefits.includes('pension-credit')) {
    res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
  }
  else if (taxCreditIncome == "no" && benefits.includes('pension-credit')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pension-credit-type')
  }


  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/tax-credit-income-error')
  }
})

// Pregnant or given birth
router.post('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth', function (req, res) {

  var pregnant = req.session.data['pregnant']

  if (pregnant === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/war-pensioner')
  }
  else if (pregnant === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/war-pensioner')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth-error')
  }

})