const express = require('express');
const router = express.Router();

const checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin page
router.get('/', checkNotLogin, function (req, res, next) {
    res.send('Sign in page')
});

// POST /signin user sign in
router.post('/', checkNotLogin, function (req, res, next) {
    res.send('Sign in')
});

module.exports = router;