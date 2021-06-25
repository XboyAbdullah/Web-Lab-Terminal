const express = require('express')
const router = express.Router();


const {GetMatches, AddMatch} = require('../MatchController');
router.route('/matches').get(GetMatches).post(AddMatch);



module.exports = router;
