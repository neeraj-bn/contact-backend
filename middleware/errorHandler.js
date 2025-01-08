const { constants } = require("../constants");

const errorHandler = (err, req, res, bext) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation failed", messege: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "NOT FOUND", messege: err.message, stackTrace: err.stack })
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED", messege: err.message, stackTrace: err.stack })
            break;
        case constants.FORBIDDEN:
            res.json({ title: "FORBIDDEN", messege: err.message, stackTrace: err.stack })
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "SERVER_ERROR", messege: err.message, stackTrace: err.stack })
            break;
        default:
            console.log("No Error, All good!")
    }


}

module.exports = errorHandler;