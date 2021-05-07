const ErrorHandler = require("../utils/errors/ErrorHandler");
module.exports = (req, res, next) => {
	next(new ErrorHandler(404, `cant find route ${req.originalUrl}`));
};
