const express = require('express');
// const FSMController = require('../controllers/index');

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();
        // fsmRoute = express.Router();

    // apiRoutes.use('/fsm', fsmRoute);
    // fsmRoute.get('/:jobId/:action', FSMController.testFSM);
    app.use('/v1', apiRoutes);
}
