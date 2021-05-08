const dao = require('../../db/mongodb/dao')
const jwt = require('jsonwebtoken')
const hasher = require('../../utils/helpers/hasher')
const {emailValidator, stringValidator} = require('../../utils/helpers/validator')
const dotenv = require('dotenv');
const {createResponse} = require('../../utils/createResponse')
dotenv.config();

const UserModel = "User";

const JWT_SECRET = process.env.JWT_SECRET;

class Auth {

    async signup(req, res, error) {
        const {fullname,email,password} = req.body

        if(!fullname || !email || !password){

            return createResponse(res,400,"please add all the fields");

        }

        if(!emailValidator(email)){
            return createResponse(res,400,"please provide a valid email address");
        }

        if(!stringValidator(fullname)){
            return createResponse(res, 400, "Full name should be a string with more than one character in length")
        }

        const foundEmail = await dao.findOne(UserModel, {email:email})

        if(foundEmail ==null){

            const hashedPassword = hasher.hashKey(password);
            const savedUser = await dao.create(UserModel, {fullname, email, password:hashedPassword});
            savedUser.password = null;
            if(savedUser._id != null){

                return createResponse(res, 200, "Saved user", savedUser);

            }else{

                return createResponse(res,400,"An error occured creating the user");

            }
        }else{

            return createResponse(res,400,"A user with the email already exists");

        }
    }
    
    
    async signin(req, res, error)
    {
        const {email,password} = req.body
        if(!email || !password) {
            return res.status(422).json({error: "Please provide the email and password"})
        }

        const foundUser = await dao.findOne(UserModel, {email:email})
        if(foundUser == null){

            return createResponse(res,400,"email or password is incorrect");

        }else{

            const passwordCompare = hasher.compareKey(password,foundUser.password)

            if(passwordCompare == true){

                const token = jwt.sign({_id:foundUser._id}, JWT_SECRET)
                return createResponse(res, 200, "token", token);

            }else{

                return createResponse(res,400,"email or password is incorrect");

            }
        }
    }
}

module.exports = new Auth();