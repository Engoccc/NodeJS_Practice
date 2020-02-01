const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

// GET /signout
router.get('/', checkLogin, function (req, res, next) {
    //clear user information in session
    req.session.user = null;
    req.flash('success', 'success');
    //redirect to homepage after sign out
    res.redirect('/posts')
});

module.exports = router;