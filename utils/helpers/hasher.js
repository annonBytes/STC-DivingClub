const bcrypt = require('bcryptjs')

module.exports.hashKey = (data) => {
    return bcrypt.hashSync(data,12);
}

module.exports.compareKey = (password, savedPassword) => {
    return bcrypt.compareSync(password, savedPassword);
}