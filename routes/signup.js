const express = require('express');
const router = express.Router();

const checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signup signup page
router.get('/', checkNotLogin, function (req, res, next) {
    res.send('Sign up page')
});

// POST /signup user sign up
router.post('/', checkNotLogin, function (req, res, next) {
    res.send('Sign up')
});

module.exports = router;