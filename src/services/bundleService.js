import 'fhirclient';

const Bundles = function Bundles(pId) {
    const smart = window.FHIR.client({
        serviceUrl: process.env.FHIR_BASE,
        patientId: pId,
    });

    // $.Deferred
    return smart.api.search({type: 'Bundle', query: {'identifier.value': {$exact: pId}}});
};

export default Bundles;
