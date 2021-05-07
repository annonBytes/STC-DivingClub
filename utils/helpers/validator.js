const mongoose = require('mongoose');

module.exports.emailValidator = (email) => {
    const filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return filter.test(email);
}

module.exports.stringValidator = (dataToValidate) => {
    return (dataToValidate.length > 1 && typeof dataToValidate == 'string')
}

module.exports.numberValidator = (dataToValidate) => {
    return (!isNaN(dataToValidate) && parseInt(dataToValidate) >= 1 )
}

module.exports.validateMongooseId = (idToValidate) => {
    return mongoose.Types.ObjectId.isValid(idToValidate)
}