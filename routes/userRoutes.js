const express = require('express')
const router = express.Router()
const  { loginUser, signupUser } = require('../controllers/userController') 

//login route
router.get('/login', loginUser)

//signup route
router.get('/signup', signupUser)

module.exports = router