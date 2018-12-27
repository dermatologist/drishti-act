import 'fhirclient';

const Bundles = function Bundles(pId) {
    const smart = window.FHIR.client({
        serviceUrl: process.env.VUE_APP_omhOnFhirAPIBase + process.env.VUE_APP_omhOnFhirPath,
        patientId: pId,
    });

    // $.Deferred
    return smart.api.search({type: 'Bundle', query: {'identifier': pId}});
};

export default Bundles;
