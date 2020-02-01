const sha1 = require('sha1');
const express = require('express');
const router = express.Router();

const UserModel = require('../models/users');
const checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin page
router.get('/', checkNotLogin, function (req, res, next) {
    res.render('signin')
});

// POST /signin user sign in
router.post('/', checkNotLogin, function (req, res, next) {
    const name = req.fields.name
    const password = req.fields.password

    //verification parameter
    try{
        if(!name.length){
            throw new Error('Please write user name')
        }
        if(!password.length){
            throw new Error('Please write password')
        }
    } catch(e){
        req.flash('error', e.message)
        return res.redirect('back')
    }

    UserModel.getUserByName(name)
        .then(function (user) {
            if (!user) {
                req.flash('error', 'User does not exist');
                return res.redirect('back')
            }
            // check whether password is corresponding
            if (sha1(password) !== user.password) {
                req.flash('error', 'User name or password incorrect');
                return res.redirect('back')
            }
            req.flash('success', 'success');
            // write user information into session
            delete user.password;
            req.session.user = user;
            // transfer to homepage
            res.redirect('/posts')
        })
        .catch(next)
});

module.exports = router;