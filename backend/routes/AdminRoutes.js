const express = require('express')
const router = express.Router();


const {loginUser} = require('../MatchController');
router.route('/login').post(loginUser);


module.exports = router;