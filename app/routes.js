//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Step 1, question 1 not a device

router.post('/medical-device-type', function(request, response) {

	var isYourDeviceUsed = request.session.data['isYourDeviceUsed']
	if (isYourDeviceUsed == "for another use"){
		response.redirect("/not-a-device")
	} else {
		response.redirect("/medical-device-type")
	}
})

// Step 1, question 2 none of these types

router.post('/medical-device-check-answers', function(request, response) {

	var whatType = request.session.data['whatType']
	if (whatType == "none of these types"){
		response.redirect("/not-a-device")
	} else {
		response.redirect("/medical-device-check-answers")
	}
})

// Step 2, non-invasive devices

router.post('/class/non-invasive-skin-membrane', function(request, response) {

	var nonInvasive = request.session.data['nonInvasive']
	if (nonInvasive == "blood-bags"){
		response.redirect("/class/class-two-b")
	} if (nonInvasive == "modifying"){
		response.redirect("/class/class-two-b")
	} if (nonInvasive == "in-vitro-substance"){
		response.redirect("/class/class-three")
	} if (nonInvasive == "injured-skin-membrane"){
		response.redirect("/class/non-invasive-skin-membrane")
	} if (nonInvasive == "none-invasive-other"){
		response.redirect("/class/class-one")
	} else {
		response.redirect("/class/class-two-a")
	}
})

// Step 2, non-invasive (skin or membrane) devices

router.post('/class/non-invasive', function(request, response) {

	var skinNonInvasive = request.session.data['skinNonInvasive']
	if (skinNonInvasive == "mechanical"){
		response.redirect("/class/class-one")
	} if (skinNonInvasive == "injuries-secondary"){
		response.redirect("/class/class-two-b")
	} else {
		response.redirect("/class/class-two-a")
	}
})

// Step 2, invasive

router.post('/class/implant', function(request, response) {

	var invasive = request.session.data['invasive']
	if (invasive == "body-orifice"){
		response.redirect("/class/invasive-body")
	} if (invasive == "surgery-less-thirty"){
		response.redirect("/class/invasive-surgical")
	} else {
		response.redirect("/class/implant")
	}
})

// Step 2, invasive-body

router.post('/class/invasive-surgical', function(request, response) {

	var invasiveBody = request.session.data['invasiveBody']
	if (invasiveBody == "transient-use"){
		response.redirect("/class/class-one")
	} if (invasiveBody == "transient-connected"){
		response.redirect("/class/class-one")
	} if (invasiveBody == "short-oral-pharynx"){
		response.redirect("/class/class-one")	
	} if (invasiveBody == "long-ear-nasal"){
		response.redirect("/class/class-two-b")
	} if (invasiveBody == "medicine-risk"){
		response.redirect("/class/class-two-b")
	} if (invasiveBody == "life-threatening-conditions"){
		response.redirect("/class/class-two-b")	
	} else {
		response.redirect("/class/class-two-a")
	}
})
// Step 2, invasive-surgery

router.post('/class/invasive-surgical-transient', function(request, response) {

	var invasiveSurgical = request.session.data['invasiveSurgical']
	if (invasiveSurgical == "surgical-transient-use"){
		response.redirect("/class/invasive-surgical-transient")
	} if (invasiveSurgical == "surgical-short-use"){
		response.redirect("/class/invasive-surgical-short")
	} else {
		response.redirect("/class/implant")
	}
})
// Step 2, invasive-surgery-transient

router.post('/class/invasive/surgical-short', function(request, response) {

	var invasiveTransient = request.session.data['invasiveTransient']
	if (invasiveTransient == "defect-heart-ccs"){
		response.redirect("/class/class-three")
	} if (invasiveTransient == "reuse-instrument"){
		response.redirect("/class/class-one")
	} if (invasiveTransient == "heart-ccs-cns"){
		response.redirect("/class/class-three")
	} if (invasiveTransient == "surgical-transient-none"){
		response.redirect("/class/class-two-a")
	} else {
		response.redirect("/class/class-two-b")
	}
})

// Step 2, invasive-surgery-short

router.post('/class/start-class', function(request, response) {

	var invasiveShort = request.session.data['invasiveShort']
	if (invasiveShort == "defect-heart-ccs-short"){
		response.redirect("/class/class/class-three")
	} if (invasiveShort == "heart-ccs-cns-short"){
		response.redirect("/class/class-three")
	} if (invasiveShort == "bio-absorbed-short"){
		response.redirect("/class/class-three")
	} if (invasiveShort == "surgical-short-none"){
		response.redirect("/class/class-two-a")
	} else {
		response.redirect("/class/class-two-b")
	}
})


// Step 2, implants

router.post('/class/active', function(request, response) {

	var implant = request.session.data['implant']
	if (implant == "teeth"){
		response.redirect("/class/class-two-a")
	} if (implant == "implant-none"){
		response.redirect("/class/class-two-b")
	} else {
		response.redirect("/class/class-three")
	}
})


// Step 2, active

router.post('/class/software', function(request, response) {

	var active = request.session.data['active']
	if (active == "energy-absorbed"){
		response.redirect("/class/class-two-a")
	} if (active == "energy-no-risk"){
		response.redirect("/class/class-two-a")
	} if (active == "active-active"){
		response.redirect("/class/class-three")
	} if (active == "diagnosis-active"){
		response.redirect("/class/class-two-a")
	} if (active == "illuminate-spectrum-active"){
		response.redirect("/class/class-one")
	} if (active == "diagnosis-vital-physio"){
		response.redirect("/class/class-two-a")
	} if (active == "diagnosis-manage-active"){
		response.redirect("/class/class-three")
	} if (active == "admin-medicine-active"){
		response.redirect("/class/class-two-a")
	} if (active == "active-none"){
		response.redirect("/class/class-one")
	} else {
		response.redirect("/class/class-two-b")
	}
})

// Step 2, software

router.post('/class/class-one', function(request, response) {

	var software = request.session.data['software']
	if (software == "diagnosis-danger-software"){
		response.redirect("/class/class-three")
	} if (software == "diagnosis-software"){
		response.redirect("/class/class-two-a")
	} if (software == "physio-software"){
		response.redirect("/class/class-two-a")
	} if (software == "sofware-none"){
		response.redirect("/class/class-one")
	} else {
		response.redirect("/class/class-two-b")
	}
})

// Step 2, method of use

router.post('/class/special-rules', function(request, response) {

	var methodOfUse = request.session.data['methodOfUse']
	if (methodOfUse == "non-invasive-use"){
		response.redirect("/class/non-invasive")
	} if (methodOfUse == "invasive-use"){
		response.redirect("/class/invasive")
	} if (methodOfUse == "active-use"){
		response.redirect("/class/active")
	} else {
		response.redirect("/class/software")
	}
})

// Step 2, special rules

router.post('/class/method-of-use', function(request, response) {

	var specialRules = request.session.data['specialRules']
	if (specialRules == "contraception-std-special"){
		response.redirect("/class/class-two-b")
	} if (specialRules == "contact-lenses"){
		response.redirect("/class/class-two-b")
	} if (specialRules == "disinfect-invasive-special"){
		response.redirect("/class/class-two-b")
	} if (specialRules == "disinfect-special"){
		response.redirect("/class/class-two-a")
	} if (specialRules == "nano-low"){
		response.redirect("/class/class-two-a")
	} if (specialRules == "substance-absorb-nasal"){
		response.redirect("/class/class-two-a")
	} if (specialRules == "substance-absorb-local"){
		response.redirect("/class/class-two-b")
	} if (specialRules == "special-none"){
		response.redirect("/class/method-of-use")
	} else {
		response.redirect("/class/class-three")
	}
})

// Step 3, do you need to notify - human study

router.post('/clinical-investigation/already-marked', function(request, response) {

	var humanStudy = request.session.data['humanStudy']
	if (humanStudy == "yes"){
		response.redirect("/clinical-investigation/already-marked")
	} else {
		response.redirect("/clinical-investigation/no-notification")
	}
}) 

// Step 3, do you need to notify - already marked

router.post('/clinical-investigation/same-use', function(request, response) {

	var alreadyMarked = request.session.data['alreadyMarked']
	if (alreadyMarked == "yes"){
		response.redirect("/clinical-investigation/same-use")
	} else {
		response.redirect("/clinical-investigation/medical-study")
	}
}) 

// Step 3, do you need to notify - same use

router.post('/clinical-investigation/medical-study', function(request, response) {

	var sameUse = request.session.data['sameUse']
	if (sameUse == "yes"){
		response.redirect("/clinical-investigation/no-notification")
	} else {
		response.redirect("/clinical-investigation/medical-study")
	}
}) 

// Step 3, do you need to notify - medical study

router.post('/clinical-investigation/has-exemption', function(request, response) {

	var medicalStudy = request.session.data['medicalStudy']
	if (medicalStudy == "yes"){
		response.redirect("/clinical-investigation/has-exemption")
	} else {
		response.redirect("/clinical-investigation/no-notification")
	}
}) 

// Step 3, do you need to notify - same use

router.post('/clinical-investigation/no-notification', function(request, response) {

	var hasExemption = request.session.data['hasExemption']
	if (hasExemption == "yes"){
		response.redirect("/clinical-investigation/no-notification")
	} else {
		response.redirect("/clinical-investigation/notification-required")
	}
}) 

// Step 3, exemption - one institution

router.post('/clinical-investigation/institution-does-study', function(request, response) {

	var oneInstitution = request.session.data['oneInstitution']
	if (oneInstitution == "yes"){
		response.redirect("/clinical-investigation/institution-does-study")
	} else {
		response.redirect("/clinical-investigation/no-exemption")
	}
}) 

// Step 3, exemption - institution does study

router.post('/clinical-investigation/institution-involved-study', function(request, response) {

	var doesStudy = request.session.data['doesStudy']
	if (doesStudy == "yes"){
		response.redirect("/clinical-investigation/institution-market")
	} else {
		response.redirect("/clinical-investigation/institution-involved-study")
	}
}) 

// Step 3, exemption - institution involved in study

router.post('/clinical-investigation/institution-repurposing', function(request, response) {

	var involvedStudy = request.session.data['involvedStudy']
	if (involvedStudy == "yes"){
		response.redirect("/clinical-investigation/no-exemption")
	} else {
		response.redirect("/clinical-investigation/institution-repurposing")
	}
}) 

// Step 3, exemption - institution repurposing

router.post('/clinical-investigation/institution-market', function(request, response) {

	var institutionRepurposing = request.session.data['institutionRepurposing']
	if (institutionRepurposing == "yes"){
		response.redirect("/clinical-investigation/no-exemption")
	} else {
		response.redirect("/clinical-investigation/exemption-applies")
	}
}) 

// Step 3, exemption - institution market

router.post('/clinical-investigation/exemption-applies', function(request, response) {

	var institutionMarket = request.session.data['institutionMarket']
	if (institutionMarket == "yes"){
		response.redirect("/clinical-investigation/no-exemption")
	} else {
		response.redirect("/clinical-investigation/exemption-applies")
	}
}) 

// Step 4, assessment routes

router.post('/conformity-assessment/class-one-route', function(request, response) {

	var deviceTypeRoute = request.session.data['deviceTypeRoute']
	if (deviceTypeRoute == "class-one"){
		response.redirect("/conformity-assessment/class-one-route")
	} if (deviceTypeRoute == "class-two-a"){
		response.redirect("/conformity-assessment/class-two-a-route")
	} if (deviceTypeRoute == "class-two-b"){
		response.redirect("/conformity-assessment/class-two-b-route")
	} if (deviceTypeRoute == "class-three"){
		response.redirect("/conformity-assessment/class-three-route")
	} else {
		response.redirect("/conformity-assessment/ivd-route")
	}
}) 


/* TEMPLATE

router.post('/conuntry-answer', function(request, response) {

	var country = request.session.data['country']
	if (country == "England"){
		response.redirect("/age")
	} else {
		response.redirect("/ineligible-country")
	}
}) 
	
*/