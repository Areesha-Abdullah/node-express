const express = require('express')
const router = express.Router();


const{login, dashboard}= require('../controllers/main')

const authmiddleware =require('../middleware/auth')


// now every time some one go through this route they'll go through this middleware
router.route('/dashboard').get(authmiddleware, dashboard)
router.route('/login').post(login)

module.exports = router