const express = require('express');
const sampleController = require('../../controllers');

// Initializing route groups
const apiRoutes = express.Router(),
    sampleRoute = express.Router();

apiRoutes.use('/route1', sampleRoute);

sampleRoute.get('/:param1', sampleController.sample);
sampleRoute.post('/:param1', sampleController.sample);
sampleRoute.put('/:param1', sampleController.sample);
sampleRoute.delete('/:param1', sampleController.sample);

exports.apiRoutesV1 = apiRoutes;