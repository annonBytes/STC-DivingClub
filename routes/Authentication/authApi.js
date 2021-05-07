const express = require('express')
const router = express.Router()

const authController = require('../../controllers/Authentication/auth.controller')


router.post('/register',authController.signup)
router.post('/signin',authController.signin)



module.exports = router