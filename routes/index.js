const {apiRoutesV1} = require('./v1/apiroutes');

module.exports = function (app) {
    // Initializing route versions
    app.use('/v1', apiRoutesV1);
}