// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// ********************************
// ELIGIBILITY CHECKER (VERSION 2)
// ********************************

// Country
router.post('/v2/check-for-help-paying-nhs-costs/where-you-live', function (req, res) {

  var country = req.session.data['country']

  if (country === "england"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/gp-in-scotland-or-wales')
  }
  else if (country === "scotland") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/live-in-highlands')
  }
  else if (country === "wales") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/date-of-birth')
  }
  else if (country === "northern-ireland") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/service-not-northern-ireland')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/where-you-live-error')
  }

})

// Scotland or Wales
router.post('/v2/check-for-help-paying-nhs-costs/gp-in-scotland-or-wales', function (req, res) {

  var scotlandorwales = req.session.data['scotland-or-wales']

  if (scotlandorwales === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/date-of-birth')
  }
  else if (scotlandorwales === "no") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/date-of-birth')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/gp-in-scotland-or-wales-error')
  }

})

// Live in Highlands or Islands
router.post('/v2/check-for-help-paying-nhs-costs/live-in-highlands', function (req, res) {

  var liveinhighlands = req.session.data['liveinhighlands']

  if (liveinhighlands === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/date-of-birth')
  }
  else if (liveinhighlands === "no") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/date-of-birth')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/live-in-highlands-error')
  }

})

// Date of birth
router.post('/v2/check-for-help-paying-nhs-costs/date-of-birth', function (req, res) {

  var day = req.session.data['dob-day']
  var month = req.session.data['dob-month']
  var year = req.session.data['dob-year']


  if (day && month && year){
    res.redirect('/v2/check-for-help-paying-nhs-costs/partner')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/date-of-birth-error')
  }

})

// Partner
router.post('/v2/check-for-help-paying-nhs-costs/partner', function (req, res) {

  var partner = req.session.data['partner']

  if (partner === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/claim-benefits')
  }
  else if (partner === "no") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/claim-benefits')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/partner-error')
  }

})

// Benefits
router.post('/v2/check-for-help-paying-nhs-costs/claim-benefits', function (req, res) {

  var benefits = req.session.data['benefits']

  if (benefits === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/paid-universal-credit')
  }
  else if (benefits === "no") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/claim-benefits-error')
  }

})

// Universal credit
router.post('/v2/check-for-help-paying-nhs-costs/universal-credit', function (req, res) {

  var universalcredit = req.session.data['universal-credit']

  if (universalcredit === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-claim')
  }
  else if (universalcredit === "not-yet") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-not-yet')
  }
  else if (universalcredit === "no"){
      res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/paid-universal-credit-error')
  }

})

// Universal credit claim
router.post('/v2/check-for-help-paying-nhs-costs/universal-credit-claim', function (req, res) {

  var universalcreditclaim = req.session.data['universal-credit-claim']

  if (universalcreditclaim === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
  }
  else if (universalcreditclaim === "no") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-claim-error')
  }

})

// Universal credit take home pay
router.post('/v2/check-for-help-paying-nhs-costs/universal-credit-take-home-pay', function (req, res) {

  var universalcredittakehomepay = req.session.data['universal-credit-take-home-pay']

  if (universalcredittakehomepay === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
  }
  else if (universalcredittakehomepay === "no") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-take-home-pay')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/universal-credit-take-home-pay-error')
  }

})

// Do you get any of these benefits?
router.post('/v2/check-for-help-paying-nhs-costs/benefits', function (req, res) {

var benefits = req.session.data['benefits']

if (benefits.includes('employment-support-allowance') && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/benefits-ESA-JSA-error')
}

else if (benefits.includes('income-support')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-income-support')
}
/* else if (benefits.includes('tax-credits')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-type')
} */
else if (benefits.includes('employment-support-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/employment-support-allowance-type')
}
else if (benefits.includes('job-seekers-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/jobseekers-allowance-type')
}
else if (benefits.includes('pension-credit')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-type')
}
else if (benefits === "no-benefits") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/benefits-error')
}
})

// Pension Credit
router.post('/v2/check-for-help-paying-nhs-costs/pension-credit', function (req, res) {

  var benefits = req.session.data['benefits']

  if (benefits === "yes"){
    res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-type')
  }
  else if (benefits === "no") {
    res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
  }
  else {
    res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-error')
  }

})

// Tax credits
router.post('/v2/check-for-help-paying-nhs-costs/tax-credit-type', function (req, res) {

var benefits = req.session.data['benefits']
var taxCreditType = req.session.data['tax-credit-type']

if (taxCreditType === "WTCandCTC" && benefits === "tax-credits") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC-Disability" && benefits === "tax-credits") {
res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "CTC" && benefits === "tax-credits") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC" && benefits === "tax-credits") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}


else if (taxCreditType === "WTCandCTC" && benefits.includes('income-support')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC-Disability" && benefits.includes('income-support')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "CTC" && benefits.includes('income-support')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC" && benefits.includes('income-support')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-income-support')
}


else if (taxCreditType === "WTCandCTC" && benefits.includes('employment-support-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC-Disability" && benefits.includes('employment-support-allowance')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "CTC" && benefits.includes('employment-support-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC" && benefits.includes('employment-support-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/employment-support-allowance-type')
}


else if (taxCreditType === "WTCandCTC" && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC-Disability" && benefits.includes('job-seekers-allowance')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "CTC" && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC" && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/jobseekers-allowance-type')
}


else if (taxCreditType === "WTCandCTC" && benefits.includes('pension-credit')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC-Disability" && benefits.includes('pension-credit')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "CTC" && benefits.includes('pension-credit')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income')
}
else if (taxCreditType === "WTC" && benefits.includes('pension-credit')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-type')
}


else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-type-error')
}
})

// Tax credits income
router.post('/v2/check-for-help-paying-nhs-costs/tax-credit-income', function (req, res) {

var benefits = req.session.data['benefits']
var taxCreditIncome = req.session.data['tax-credit-income']


if (taxCreditIncome == "yes" && benefits == "tax-credits") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
}
else if (taxCreditIncome == "no" && benefits == "tax-credits") {
res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}


else if (taxCreditIncome == "yes" && benefits.includes('income-support')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
}
else if (taxCreditIncome == "no" && benefits.includes('income-support')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-income-support')
}


else if (taxCreditIncome == "yes" && benefits.includes('employment-support-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
}
else if (taxCreditIncome == "no" && benefits.includes('employment-support-allowance')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/employment-support-allowance-type')
}


else if (taxCreditIncome == "yes" && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
}
else if (taxCreditIncome == "no" && benefits.includes('job-seekers-allowance')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/jobseekers-allowance-type')
}


else if (taxCreditIncome == "yes" && benefits.includes('pension-credit')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-tax-credit')
}
else if (taxCreditIncome == "no" && benefits.includes('pension-credit')) {
res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-type')
}


else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/tax-credit-income-error')
}
})

// Employment and Support (ESA) type
router.post('/v2/check-for-help-paying-nhs-costs/employment-support-allowance-type', function (req, res) {

var benefits = req.session.data['benefits']
var esaType = req.session.data['employment-support-allowance-type']

if (esaType === "income"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-esa')
}
else if (esaType === "contribution" && benefits.includes('pension-credit')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-type')
}
else if (esaType === "contribution") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/employment-support-allowance-type-error')
}

})

// Jobseeker's Allowance (JSA) type
router.post('/v2/check-for-help-paying-nhs-costs/jobseekers-allowance-type', function (req, res) {

var benefits = req.session.data['benefits']
var jsaType = req.session.data['jobseekers-allowance-type']

if (jsaType === "income"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-jsa')
}
else if (jsaType === "contribution" && benefits.includes('pension-credit')) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-type')
}
else if (jsaType === "contribution") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/jobseekers-allowance-type-error')
}

})

// Pension credit type
router.post('/v2/check-for-help-paying-nhs-costs/pension-credit-type', function (req, res) {

var pensionCreditType = req.session.data['pension-credit-type']

if (pensionCreditType === "GC"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-pension-credit')
}
else if (pensionCreditType === "GCwithSC") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-claiming-qualifying-pension-credit')
}
else if (pensionCreditType === "SC") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pension-credit-type-error')
}

})

// Pregnant or given birth
router.post('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth', function (req, res) {

var pregnant = req.session.data['pregnant']

if (pregnant === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/war-pensioner')
}
else if (pregnant === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/war-pensioner')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/pregnant-or-given-birth-error')
}

})

// War pensioner
router.post('/v2/check-for-help-paying-nhs-costs/war-pensioner', function (req, res) {

var warPensioner = req.session.data['war-pensioner']

if (warPensioner === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/diabetes')
}
else if (warPensioner === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/diabetes')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/war-pensioner-error')
}

})

// Diabetes
router.post('/v2/check-for-help-paying-nhs-costs/diabetes', function (req, res) {

var diabetes = req.session.data['diabetes']

if (diabetes === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/diabetes-medication')
}
else if (diabetes === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/list-of-medical-conditions')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/diabetes-error')
}

})

// Diabetes medication
router.post('/v2/check-for-help-paying-nhs-costs/diabetes-medication', function (req, res) {

var diabetesMedication = req.session.data['diabetes-medication']

if (diabetesMedication === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/care-home')
}
else if (diabetesMedication === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/list-of-medical-conditions')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/diabetes-medication-error')
}

})

// List of medical conditions
router.post('/v2/check-for-help-paying-nhs-costs/list-of-medical-conditions', function (req, res) {

var medicalConditions = req.session.data['list-of-medical-conditions']
var diabetes = req.session.data['diabetes']


if (medicalConditions === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/glaucoma')
}
else if (medicalConditions === "no" && diabetes === "yes") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/care-home')
}
else if (medicalConditions === "no" && diabetes === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/glaucoma')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/list-of-medical-conditions-error')
}

})

// Glaucoma
router.post('/v2/check-for-help-paying-nhs-costs/glaucoma', function (req, res) {

var glaucoma = req.session.data['glaucoma']

if (glaucoma === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/care-home')
}
else if (glaucoma === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/care-home')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/glaucoma-error')
}

})

// Care home
router.post('/v2/check-for-help-paying-nhs-costs/care-home', function (req, res) {

var careHome = req.session.data['care-home']

if (careHome === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/local-council-assessed')
}
else if (careHome === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/savings')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/care-home-error')
}

})
// Care home (local council assessed)
router.post('/v2/check-for-help-paying-nhs-costs/local-council-assessed', function (req, res) {

var councilAssessed = req.session.data['local-council-assessed']

if (councilAssessed === "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/result-council-help-care-home')
}
else if (councilAssessed === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/savings')
}
else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/local-council-assessed-error')
}

})

// Savings
router.post('/v2/check-for-help-paying-nhs-costs/savings', function (req, res) {

var benefits = req.session.data['benefits']
var pregnant = req.session.data['pregnant']
var warPensioner = req.session.data['war-pensioner']
var diabetes = req.session.data['diabetes']
var medicalConditions = req.session.data['list-of-medical-conditions']
var glaucoma = req.session.data['glaucoma']
var savings = req.session.data['savings']

if (!savings) {
  res.redirect('/v2/check-for-help-paying-nhs-costs/savings-error')
}

else if (savings == "yes"){
  res.redirect('/v2/check-for-help-paying-nhs-costs/invitation-1')
}

else if (benefits === "yes") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/invitation-2')
}

else if (pregnant === "yes") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result')
}

else if (warPensioner === "yes") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result')
}

else if (diabetes === "yes") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result')
}

else if (medicalConditions === "yes") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result')
}

else if (glaucoma === "yes") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/result')
}

else if (savings === "no") {
  res.redirect('/v2/check-for-help-paying-nhs-costs/invitation-2')
}



else {
  res.redirect('/v2/check-for-help-paying-nhs-costs/savings-error')
}

})

// **********************************************
// ELIGIBILITY CHECKER (VERSION 1 A/B Testing)
// **********************************************

// ************* Route A *************

// Partner
router.post('/v1/check-for-help-paying-nhs-costs/research/route-a/partner', function (req, res) {

  var partner = req.session.data['partner']

  if (partner === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/claim-benefits-tax-credits')
  }
  else if (partner === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/claim-benefits-tax-credits')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/partner-error')
  }

})

// Benefits
router.post('/v1/check-for-help-paying-nhs-costs/research/route-a/claim-benefits-tax-credits', function (req, res) {

  var benefits = req.session.data['benefits']

  if (benefits === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/paid-universal-credit')
  }
  else if (benefits === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/pregnant-or-given-birth')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/claim-benefits-tax-credits-error')
  }

})

// Universal credit
router.post('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit', function (req, res) {

  var universalcredit = req.session.data['universal-credit']

  if (universalcredit === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-claim')
  }
  else if (universalcredit === "not-yet") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-not-yet')
  }
  else if (universalcredit === "no"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/benefits')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/paid-universal-credit-error')
  }

})

// Universal credit claim
router.post('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-claim', function (req, res) {

  var universalcreditclaim = req.session.data['universal-credit-claim']

  if (universalcreditclaim === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-take-home-pay')
  }
  else if (universalcreditclaim === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-take-home-pay')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-claim-error')
  }

})

// Universal credit take home pay
router.post('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-take-home-pay', function (req, res) {

  var universalcredittakehomepay = req.session.data['universal-credit-take-home-pay']

  if (universalcredittakehomepay === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-take-home-pay')
  }
  else if (universalcredittakehomepay === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-take-home-pay')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-a/universal-credit-take-home-pay-error')
  }

})

// ************* Route B *************

// Partner
router.post('/v1/check-for-help-paying-nhs-costs/research/route-b/partner', function (req, res) {

  var partner = req.session.data['partner']

  if (partner === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/claim-benefits-tax-credits')
  }
  else if (partner === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/claim-benefits-tax-credits')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/partner-error')
  }

})

// Benefits
router.post('/v1/check-for-help-paying-nhs-costs/research/route-b/claim-benefits-tax-credits', function (req, res) {

  var benefits = req.session.data['benefits']

  if (benefits === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/paid-universal-credit')
  }
  else if (benefits === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/pregnant-or-given-birth')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/claim-benefits-tax-credits-error')
  }

})

// Universal credit
router.post('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit', function (req, res) {

  var universalcredit = req.session.data['universal-credit']

  if (universalcredit === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-claim')
  }
  else if (universalcredit === "not-yet") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-not-yet')
  }
  else if (universalcredit === "no"){
      res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/benefits')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/paid-universal-credit-error')
  }

})

// Universal credit claim
router.post('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-claim', function (req, res) {

  var universalcreditclaim = req.session.data['universal-credit-claim']

  if (universalcreditclaim === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-take-home-pay')
  }
  else if (universalcreditclaim === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-take-home-pay')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-claim-error')
  }

})

// Universal credit take home pay
router.post('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-take-home-pay', function (req, res) {

  var universalcredittakehomepay = req.session.data['universal-credit-take-home-pay']

  if (universalcredittakehomepay === "yes"){
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-take-home-pay')
  }
  else if (universalcredittakehomepay === "no") {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-take-home-pay')
  }
  else {
    res.redirect('/v1/check-for-help-paying-nhs-costs/research/route-b/universal-credit-take-home-pay-error')
  }

})



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

if (benefits.includes('employment-support-allowance') && benefits.includes('job-seekers-allowance')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/benefits-ESA-JSA-error')
}

else if (benefits.includes('income-support')) {
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

// Employment and Support (ESA) type
router.post('/v1/check-for-help-paying-nhs-costs/employment-support-allowance-type', function (req, res) {

var benefits = req.session.data['benefits']
var esaType = req.session.data['employment-support-allowance-type']

if (esaType === "income"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-esa')
}
else if (esaType === "contribution" && benefits.includes('pension-credit')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pension-credit-type')
}
else if (esaType === "contribution") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/employment-support-allowance-type-error')
}

})

// Jobseeker's Allowance (JSA) type
router.post('/v1/check-for-help-paying-nhs-costs/jobseekers-allowance-type', function (req, res) {

var benefits = req.session.data['benefits']
var jsaType = req.session.data['jobseekers-allowance-type']

if (jsaType === "income"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-jsa')
}
else if (jsaType === "contribution" && benefits.includes('pension-credit')) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pension-credit-type')
}
else if (jsaType === "contribution") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/jobseekers-allowance-type-error')
}

})

// Pension credit type
router.post('/v1/check-for-help-paying-nhs-costs/pension-credit-type', function (req, res) {

var pensionCreditType = req.session.data['pension-credit-type']

if (pensionCreditType === "GC"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-pension-credit')
}
else if (pensionCreditType === "GCwithSC") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/result-claiming-qualifying-pension-credit')
}
else if (pensionCreditType === "SC") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pregnant-or-given-birth')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/pension-credit-type-error')
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

// War pensioner
router.post('/v1/check-for-help-paying-nhs-costs/war-pensioner', function (req, res) {

var warPensioner = req.session.data['war-pensioner']

if (warPensioner === "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/diabetes')
}
else if (warPensioner === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/diabetes')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/war-pensioner-error')
}

})

// Diabetes
router.post('/v1/check-for-help-paying-nhs-costs/diabetes', function (req, res) {

var diabetes = req.session.data['diabetes']

if (diabetes === "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/diabetes-medication')
}
else if (diabetes === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/list-of-medical-conditions')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/diabetes-error')
}

})

// Diabetes medication
router.post('/v1/check-for-help-paying-nhs-costs/diabetes-medication', function (req, res) {

var diabetesMedication = req.session.data['diabetes-medication']

if (diabetesMedication === "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/care-home')
}
else if (diabetesMedication === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/list-of-medical-conditions')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/diabetes-medication-error')
}

})

// List of medical conditions
router.post('/v1/check-for-help-paying-nhs-costs/list-of-medical-conditions', function (req, res) {

var medicalConditions = req.session.data['list-of-medical-conditions']
var diabetes = req.session.data['diabetes']


if (medicalConditions === "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/glaucoma')
}
else if (medicalConditions === "no" && diabetes === "yes") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/care-home')
}
else if (medicalConditions === "no" && diabetes === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/glaucoma')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/list-of-medical-conditions-error')
}

})

// Glaucoma
router.post('/v1/check-for-help-paying-nhs-costs/glaucoma', function (req, res) {

var glaucoma = req.session.data['glaucoma']

if (glaucoma === "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/care-home')
}
else if (glaucoma === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/care-home')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/glaucoma-error')
}

})

// Care home
router.post('/v1/check-for-help-paying-nhs-costs/care-home', function (req, res) {

var careHome = req.session.data['care-home']

if (careHome === "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/local-council-assessed')
}
else if (careHome === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/savings')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/care-home-error')
}

})
// Care home (local council assessed)
router.post('/v1/check-for-help-paying-nhs-costs/local-council-assessed', function (req, res) {

var councilAssessed = req.session.data['local-council-assessed']

if (councilAssessed === "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/result-council-help-care-home')
}
else if (councilAssessed === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/savings')
}
else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/local-council-assessed-error')
}

})

// Savings
router.post('/v1/check-for-help-paying-nhs-costs/savings', function (req, res) {

var benefits = req.session.data['benefits']
var pregnant = req.session.data['pregnant']
var warPensioner = req.session.data['war-pensioner']
var diabetes = req.session.data['diabetes']
var medicalConditions = req.session.data['list-of-medical-conditions']
var glaucoma = req.session.data['glaucoma']
var savings = req.session.data['savings']

if (!savings) {
  res.redirect('/v1/check-for-help-paying-nhs-costs/savings-error')
}

else if (savings == "yes"){
  res.redirect('/v1/check-for-help-paying-nhs-costs/invitation-1')
}

else if (benefits === "yes") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/invitation-2')
}

else if (pregnant === "yes") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/result')
}

else if (warPensioner === "yes") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/result')
}

else if (diabetes === "yes") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/result')
}

else if (medicalConditions === "yes") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/result')
}

else if (glaucoma === "yes") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/result')
}

else if (savings === "no") {
  res.redirect('/v1/check-for-help-paying-nhs-costs/invitation-2')
}



else {
  res.redirect('/v1/check-for-help-paying-nhs-costs/savings-error')
}

})