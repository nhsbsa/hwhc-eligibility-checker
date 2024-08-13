// External dependencies
const express = require("express");
const router = express.Router();

// Country
router.post("/august-2024/route-b/where-you-live", function (req, res) {
  var country = req.session.data["country"];

  if (country === "england") {
    res.redirect("gp-in-scotland-or-wales");
  } else if (country === "scotland") {
    res.redirect("live-in-highlands");
  } else if (country === "wales") {
    res.redirect("date-of-birth");
  } else if (country === "northern-ireland") {
    res.redirect("service-not-northern-ireland");
  } else {
    res.redirect("where-you-live-error");
  }
});

// Scotland or Wales
router.post(
  "/august-2024/route-b/gp-in-scotland-or-wales",
  function (req, res) {
    var scotlandorwales = req.session.data["scotland-or-wales"];

    if (scotlandorwales === "yes") {
      res.redirect("date-of-birth");
    } else if (scotlandorwales === "no") {
      res.redirect("date-of-birth");
    } else {
      res.redirect("gp-in-scotland-or-wales-error");
    }
  }
);

// Live in Highlands or Islands
router.post("/august-2024/route-b/live-in-highlands", function (req, res) {
  var liveinhighlands = req.session.data["liveinhighlands"];

  if (liveinhighlands === "yes") {
    res.redirect("date-of-birth");
  } else if (liveinhighlands === "no") {
    res.redirect("date-of-birth");
  } else {
    res.redirect("live-in-highlands-error");
  }
});

// Date of birth
router.post("/august-2024/route-b/date-of-birth", function (req, res) {
  var day = req.session.data["dob-day"];
  var month = req.session.data["dob-month"];
  var year = req.session.data["dob-year"];

  if (day && month && year) {
    res.redirect("partner");
  } else {
    res.redirect("date-of-birth-error");
  }
});

// Partner
router.post("/august-2024/route-b/partner", function (req, res) {
  var partner = req.session.data["partner"];

  if (partner === "yes") {
    res.redirect("claim-benefits-tax-credits");
  } else if (partner === "no") {
    res.redirect("claim-benefits-tax-credits");
  } else {
    res.redirect("partner-error");
  }
});

// Benefits
router.post(
  "/august-2024/route-b/claim-benefits-tax-credits",
  function (req, res) {
    var benefits = req.session.data["benefits"];

    if (benefits === "yes") {
      res.redirect("paid-universal-credit");
    } else if (benefits === "no") {
      res.redirect("pregnant-or-given-birth");
    } else {
      res.redirect("claim-benefits-tax-credits-error");
    }
  }
);

// Universal credit
router.post("/august-2024/route-b/universal-credit", function (req, res) {
  var universalcredit = req.session.data["universal-credit"];

  if (universalcredit === "yes") {
    res.redirect("universal-credit-claim");
  } else if (universalcredit === "not-yet") {
    res.redirect("universal-credit-not-yet");
  } else if (universalcredit === "no") {
    res.redirect("benefits");
  } else {
    res.redirect("paid-universal-credit-error");
  }
});

// Universal credit claim
router.post("/august-2024/route-b/universal-credit-claim", function (req, res) {
  var universalcreditclaim = req.session.data["universal-credit-claim"];

  if (universalcreditclaim === "yes") {
    res.redirect("universal-credit-take-home-pay");
  } else if (universalcreditclaim === "no") {
    res.redirect("universal-credit-take-home-pay");
  } else {
    res.redirect("universal-credit-claim-error");
  }
});

// Universal credit take home pay

function urlSet(){
  let payValue = Number(document.getElementById('take-home-pay').value);
  if (payValue > 0 && payValue <= 935){
    document.getElementById('continue-button').href = "https://google.com";
  } else if (payValue < 0 || payValue > 935) {
    document.getElementById('continue-button').href = "https://bing.com";
  } else {
    console.log('Error');
  }
}

/* router.post(
  "/august-2024/route-b/universal-credit-take-home-pay",
  function (req, res) {
    var universalcredittakehomepay =
      req.session.data["universal-credit-take-home-pay"];

    if (universalcredittakehomepay === "yes") {
      res.redirect("done");
    } else if (universalcredittakehomepay === "no") {
      res.redirect("universal-credit-take-home-pay");
    } else {
      res.redirect("universal-credit-take-home-pay-error");
    }
    const pay = document.getElementById("take-home-pay");
  }
); */

// Do you get any of these benefits?
router.post("/august-2024/route-b/benefits", function (req, res) {
  var benefits = req.session.data["benefits"];

  if (
    benefits.includes("employment-support-allowance") &&
    benefits.includes("job-seekers-allowance")
  ) {
    res.redirect("benefits-ESA-JSA-error");
  } else if (benefits.includes("income-support")) {
    res.redirect("result-claiming-qualifying-income-support");
  } else if (benefits.includes("tax-credits")) {
    res.redirect("tax-credit-type");
  } else if (benefits.includes("employment-support-allowance")) {
    res.redirect("employment-support-allowance-type");
  } else if (benefits.includes("job-seekers-allowance")) {
    res.redirect("jobseekers-allowance-type");
  } else if (benefits.includes("pension-credit")) {
    res.redirect("pension-credit-type");
  } else if (benefits === "no-benefits") {
    res.redirect("pregnant-or-given-birth");
  } else {
    res.redirect("benefits-error");
  }
});

// Tax credits
router.post("/august-2024/route-b/tax-credit-type", function (req, res) {
  var benefits = req.session.data["benefits"];
  var taxCreditType = req.session.data["tax-credit-type"];

  if (taxCreditType === "WTCandCTC" && benefits === "tax-credits") {
    res.redirect("tax-credit-income");
  } else if (taxCreditType === "WTC-Disability" && benefits === "tax-credits") {
    res.redirect("tax-credit-income");
  } else if (taxCreditType === "CTC" && benefits === "tax-credits") {
    res.redirect("tax-credit-income");
  } else if (taxCreditType === "WTC" && benefits === "tax-credits") {
    res.redirect("pregnant-or-given-birth");
  } else if (
    taxCreditType === "WTCandCTC" &&
    benefits.includes("income-support")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "WTC-Disability" &&
    benefits.includes("income-support")
  ) {
    res.redirect("tax-credit-income");
  } else if (taxCreditType === "CTC" && benefits.includes("income-support")) {
    res.redirect("tax-credit-income");
  } else if (taxCreditType === "WTC" && benefits.includes("income-support")) {
    res.redirect("result-claiming-qualifying-income-support");
  } else if (
    taxCreditType === "WTCandCTC" &&
    benefits.includes("employment-support-allowance")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "WTC-Disability" &&
    benefits.includes("employment-support-allowance")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "CTC" &&
    benefits.includes("employment-support-allowance")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "WTC" &&
    benefits.includes("employment-support-allowance")
  ) {
    res.redirect("employment-support-allowance-type");
  } else if (
    taxCreditType === "WTCandCTC" &&
    benefits.includes("job-seekers-allowance")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "WTC-Disability" &&
    benefits.includes("job-seekers-allowance")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "CTC" &&
    benefits.includes("job-seekers-allowance")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "WTC" &&
    benefits.includes("job-seekers-allowance")
  ) {
    res.redirect("jobseekers-allowance-type");
  } else if (
    taxCreditType === "WTCandCTC" &&
    benefits.includes("pension-credit")
  ) {
    res.redirect("tax-credit-income");
  } else if (
    taxCreditType === "WTC-Disability" &&
    benefits.includes("pension-credit")
  ) {
    res.redirect("tax-credit-income");
  } else if (taxCreditType === "CTC" && benefits.includes("pension-credit")) {
    res.redirect("tax-credit-income");
  } else if (taxCreditType === "WTC" && benefits.includes("pension-credit")) {
    res.redirect("pension-credit-type");
  } else {
    res.redirect("tax-credit-type-error");
  }
});

// Tax credits income
router.post("/august-2024/route-b/tax-credit-income", function (req, res) {
  var benefits = req.session.data["benefits"];
  var taxCreditIncome = req.session.data["tax-credit-income"];

  if (taxCreditIncome == "yes" && benefits == "tax-credits") {
    res.redirect("result-claiming-qualifying-tax-credit");
  } else if (taxCreditIncome == "no" && benefits == "tax-credits") {
    res.redirect("pregnant-or-given-birth");
  } else if (taxCreditIncome == "yes" && benefits.includes("income-support")) {
    res.redirect("result-claiming-qualifying-tax-credit");
  } else if (taxCreditIncome == "no" && benefits.includes("income-support")) {
    res.redirect("result-claiming-qualifying-income-support");
  } else if (
    taxCreditIncome == "yes" &&
    benefits.includes("employment-support-allowance")
  ) {
    res.redirect("result-claiming-qualifying-tax-credit");
  } else if (
    taxCreditIncome == "no" &&
    benefits.includes("employment-support-allowance")
  ) {
    res.redirect("employment-support-allowance-type");
  } else if (
    taxCreditIncome == "yes" &&
    benefits.includes("job-seekers-allowance")
  ) {
    res.redirect("result-claiming-qualifying-tax-credit");
  } else if (
    taxCreditIncome == "no" &&
    benefits.includes("job-seekers-allowance")
  ) {
    res.redirect("jobseekers-allowance-type");
  } else if (taxCreditIncome == "yes" && benefits.includes("pension-credit")) {
    res.redirect("result-claiming-qualifying-tax-credit");
  } else if (taxCreditIncome == "no" && benefits.includes("pension-credit")) {
    res.redirect("pension-credit-type");
  } else {
    res.redirect("tax-credit-income-error");
  }
});

// Employment and Support (ESA) type
router.post(
  "/august-2024/route-b/employment-support-allowance-type",
  function (req, res) {
    var benefits = req.session.data["benefits"];
    var esaType = req.session.data["employment-support-allowance-type"];

    if (esaType === "income") {
      res.redirect("result-claiming-qualifying-esa");
    } else if (
      esaType === "contribution" &&
      benefits.includes("pension-credit")
    ) {
      res.redirect("pension-credit-type");
    } else if (esaType === "contribution") {
      res.redirect("pregnant-or-given-birth");
    } else {
      res.redirect("employment-support-allowance-type-error");
    }
  }
);

// Jobseeker's Allowance (JSA) type
router.post(
  "/august-2024/route-b/jobseekers-allowance-type",
  function (req, res) {
    var benefits = req.session.data["benefits"];
    var jsaType = req.session.data["jobseekers-allowance-type"];

    if (jsaType === "income") {
      res.redirect("result-claiming-qualifying-jsa");
    } else if (
      jsaType === "contribution" &&
      benefits.includes("pension-credit")
    ) {
      res.redirect("pension-credit-type");
    } else if (jsaType === "contribution") {
      res.redirect("pregnant-or-given-birth");
    } else {
      res.redirect("jobseekers-allowance-type-error");
    }
  }
);

// Pension credit type
router.post("/august-2024/route-b/pension-credit-type", function (req, res) {
  var pensionCreditType = req.session.data["pension-credit-type"];

  if (pensionCreditType === "GC") {
    res.redirect("result-claiming-qualifying-pension-credit");
  } else if (pensionCreditType === "GCwithSC") {
    res.redirect("result-claiming-qualifying-pension-credit");
  } else if (pensionCreditType === "SC") {
    res.redirect("pregnant-or-given-birth");
  } else {
    res.redirect("pension-credit-type-error");
  }
});

// Pregnant or given birth
router.post(
  "/august-2024/route-b/pregnant-or-given-birth",
  function (req, res) {
    var pregnant = req.session.data["pregnant"];

    if (pregnant === "yes") {
      res.redirect("war-pensioner");
    } else if (pregnant === "no") {
      res.redirect("war-pensioner");
    } else {
      res.redirect("pregnant-or-given-birth-error");
    }
  }
);

// War pensioner
router.post("/august-2024/route-b/war-pensioner", function (req, res) {
  var warPensioner = req.session.data["war-pensioner"];

  if (warPensioner === "yes") {
    res.redirect("diabetes");
  } else if (warPensioner === "no") {
    res.redirect("diabetes");
  } else {
    res.redirect("war-pensioner-error");
  }
});

// Diabetes
router.post("/august-2024/route-b/diabetes", function (req, res) {
  var diabetes = req.session.data["diabetes"];

  if (diabetes === "yes") {
    res.redirect("diabetes-medication");
  } else if (diabetes === "no") {
    res.redirect("list-of-medical-conditions");
  } else {
    res.redirect("diabetes-error");
  }
});

// Diabetes medication
router.post("/august-2024/route-b/diabetes-medication", function (req, res) {
  var diabetesMedication = req.session.data["diabetes-medication"];

  if (diabetesMedication === "yes") {
    res.redirect("care-home");
  } else if (diabetesMedication === "no") {
    res.redirect("list-of-medical-conditions");
  } else {
    res.redirect("diabetes-medication-error");
  }
});

// List of medical conditions
router.post(
  "/august-2024/route-b/list-of-medical-conditions",
  function (req, res) {
    var medicalConditions = req.session.data["list-of-medical-conditions"];
    var diabetes = req.session.data["diabetes"];

    if (medicalConditions === "yes") {
      res.redirect("glaucoma");
    } else if (medicalConditions === "no" && diabetes === "yes") {
      res.redirect("care-home");
    } else if (medicalConditions === "no" && diabetes === "no") {
      res.redirect("glaucoma");
    } else {
      res.redirect("list-of-medical-conditions-error");
    }
  }
);

// Glaucoma
router.post("/august-2024/route-b/glaucoma", function (req, res) {
  var glaucoma = req.session.data["glaucoma"];

  if (glaucoma === "yes") {
    res.redirect("care-home");
  } else if (glaucoma === "no") {
    res.redirect("care-home");
  } else {
    res.redirect("glaucoma-error");
  }
});

// Care home
router.post("/august-2024/route-b/care-home", function (req, res) {
  var careHome = req.session.data["care-home"];

  if (careHome === "yes") {
    res.redirect("local-council-assessed");
  } else if (careHome === "no") {
    res.redirect("savings");
  } else {
    res.redirect("care-home-error");
  }
});
// Care home (local council assessed)
router.post("/august-2024/route-b/local-council-assessed", function (req, res) {
  var councilAssessed = req.session.data["local-council-assessed"];

  if (councilAssessed === "yes") {
    res.redirect("result-council-help-care-home");
  } else if (councilAssessed === "no") {
    res.redirect("savings");
  } else {
    res.redirect("local-council-assessed-error");
  }
});

// Savings
router.post("/august-2024/route-b/savings", function (req, res) {
  var benefits = req.session.data["benefits"];
  var pregnant = req.session.data["pregnant"];
  var warPensioner = req.session.data["war-pensioner"];
  var diabetes = req.session.data["diabetes"];
  var medicalConditions = req.session.data["list-of-medical-conditions"];
  var glaucoma = req.session.data["glaucoma"];
  var savings = req.session.data["savings"];

  if (!savings) {
    res.redirect("savings-error");
  } else if (savings == "yes") {
    res.redirect("invitation-1");
  } else if (benefits === "yes") {
    res.redirect("invitation-2");
  } else if (pregnant === "yes") {
    res.redirect("result");
  } else if (warPensioner === "yes") {
    res.redirect("result");
  } else if (diabetes === "yes") {
    res.redirect("result");
  } else if (medicalConditions === "yes") {
    res.redirect("result");
  } else if (glaucoma === "yes") {
    res.redirect("result");
  } else if (savings === "no") {
    res.redirect("invitation-2");
  } else {
    res.redirect("savings-error");
  }
});

module.exports = router;

module.exports = router;
