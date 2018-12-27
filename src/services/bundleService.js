import 'fhirclient';

const Bundles = function Bundles(pId) {
    const smart = window.FHIR.client({
        serviceUrl: process.env.VUE_APP_FHIR_BASE,
        patientId: pId,
    });

    // $.Deferred
    return smart.api.search({type: 'Bundle', query: {'identifier': pId}});
};

export default Bundles;
