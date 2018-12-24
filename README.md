# :eyes: Drishti-ACT: Deliver FHIR CarePlan to mobile devices

## About
Drishti is a conceptual extension of the [open mHealth](http://www.openmhealth.org/) model to behaviour intervention technology adopting the sense-plan-act paradigm from robotics. [:eyes: Drishti](https://github.com/E-Health/drishti) is also a reference implementation with the following components: 

* Drishti-sense  is open mhealth [shimmer](https://github.com/openmhealth/shimmer) that interfaces with various mobile frameworks and provides a uniform API.
* [Drishti-plan](https://github.com/dermatologist/drishti-plan) is a python flask API that provides a (FHIR) careplan based on aggregate data using AI.
* [Drishti-act](https://github.com/dermatologist/drishti-act) is a SMART-ON-FHIR application in Vue.js that can deliver the careplan to the mobile device as alerts and messages
* [Drishti-cog](https://github.com/dermatologist/drishti-cog) is the central hub and repository, integrating various services using FHIR as the interface standard.
* [Drishti-EMR](https://github.com/dermatologist/openmrs-module-drishti)  (openmrs-module-drishti) is an [OpenMRS module](https://wiki.openmrs.org/display/docs/Creating+Modules) that provide the user interface for clinicians.
* [Drishti-PHR](https://github.com/dermatologist/openmrs-module-drishti)  (openmrs-owa-drishti) is an [OpenMRS OWA](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module) that provide the user interface for patients, including authorizing access to their cloud services.

[![Drishti](https://raw.github.com/E-Health/drishti/develop/notes/drishti.png)](http://canehealth.com)

## Instructions

* ***Drishti is not ready for use. The following instructions are only for those who want to contribute/join the project.***
## Work in progress... 

## How to use

### STEP 1:
Change the App name, access rights and server settings in public/launch.html

### STEP 2:
Create services that your App requires. See the example at services/conditionService.js

### STEP 3:
Create components that your App requires. See the example at components/HelloPatient.vue

### Optional:
Add a router if your App needs one.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

## Contributors
* [Bell Eapen](https://nuchange.ca) | McMaster U.
* Based on my [Smart-ON-FHIR Boilerplate](https://github.com/dermatologist/vue-smart-on-fhir)

