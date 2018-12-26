import 'fhirclient';

const Careplans = function Careplans(pId) {
    const smart = window.FHIR.client({
        serviceUrl: process.env.FHIR_BASE,
        patientId: pId,
    });

    // $.Deferred
    return smart.patient.api.search({type: 'Careplan'});
};

export default Careplans;
