const jwt = require('jsonwebtoken')
const dotenv= require('dotenv')
const dao = require('../db/mongodb/dao')
const {createResponse} = require('../utils/createResponse')

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization){
        return createResponse(res,400, "You must be logged in")
    }

    const token = authorization.replace("Bearer ", "")

    jwt.verify(token, JWT_SECRET, (err, payload) => {

        if(err){

            return createResponse(res, 400, "You must be logged in")

        }
        const {_id} = payload

        const foundUser = dao.findOneById("User",_id)

        if(foundUser == null) {

            return createResponse(res, 400, "An error occured")
            
        }else{

            req.user = foundUser
            next()

        }
    })
}

