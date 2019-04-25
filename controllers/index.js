exports.sample = function (req, res, next) {
    const param1 = req.params.param1;
    const body = req.body;
    return res.status(200).json({
        request: {
            param1,
            body,
        },
        response: {
            status: true,
            msg: 'Some Message.'
        }
    });
};