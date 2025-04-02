const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch (statuscode) {
        case constants.VALIDATION_FAILED:
            res.json({title:"Validation Failed",message: err.message , stackTrace: err.stack})
            break;
        case constants.UNAUTH1ORIZED:
            res.json({title:"unautherized",message: err.message , stackTrace: err.stack})
            break;
        case constants.FORBIDDEN:
            res.json({title:"forbidder",message: err.message , stackTrace: err.stack})
            break;
        case constants.NOT_FOUND:
            res.json({title:"Not Found",message: err.message , stackTrace: err.stack})
            break;
        case constants.SERVER_ERROR:
            res.json({title:"server error",message: err.message , stackTrace: err.stack})
            break;
        default:
            console.log("No error found")
            break;
    }
};

module.exports = errorHandler;