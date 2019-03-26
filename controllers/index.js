exports.testFSM = function (req, res, next) {
    const jobId = req.params.jobId;
    const action = req.params.action;
    return res.status(200).json({
        // jobId,
        // action
    });
};