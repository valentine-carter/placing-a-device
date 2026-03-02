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
		response.redirect("/class-three")
	} if (invasiveTransient == "reuse-instrument"){
		response.redirect("/class-one")
	} if (invasiveTransient == "heart-ccs-cns"){
		response.redirect("/class-three")
	} if (invasiveTransient == "surgical-transient-none"){
		response.redirect("/class-two-a")
	} else {
		response.redirect("/class-two-b")
	}
})

// Step 2, invasive-surgery-short

router.post('/class/start-class', function(request, response) {

	var invasiveShort = request.session.data['invasiveShort']
	if (invasiveShort == "defect-heart-ccs-short"){
		response.redirect("/class-three")
	} if (invasiveTransient == "heart-ccs-cns-short"){
		response.redirect("/class-three")
	} if (invasiveTransient == "bio-absorbed-short"){
		response.redirect("/class-three")
	} if (invasiveTransient == "surgical-short-none"){
		response.redirect("/class-two-a")
	} else {
		response.redirect("/class-two-b")
	}
})


// Step 2, implants

router.post('/class/active', function(request, response) {

	var implant = request.session.data['implant']
	if (implant == "teeth"){
		response.redirect("/class/class-two-a")
	} if (implant == "implant-none"){
		response.redirect("/class-two-b")
	} else {
		response.redirect("/class-three")
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
	} if (country == "invasive-use"){
		response.redirect("/class/invasive")
	} if (country == "active-use"){
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




/* TEMPLATE

router.post('/conuntry-answer', function(request, response) {

	var country = request.session.data['country']
	if (country == "England"){
		response.redirect("/age")
	} else {
		response.redirect("/ineligible-country")
	}
}) */