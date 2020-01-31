const fs = require('fs');
const path = require('path');
const sha1 = require('sha1');
const express = require('express');
const router = express.Router();

const UserModel = require('../models/users');
const checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signup signup page
router.get('/', checkNotLogin, function (req, res, next) {
    res.render('signup')
});

// POST /signup user sign up
router.post('/', checkNotLogin, function (req, res, next) {
    const name = req.fields.name;
    const gender = req.fields.gender;
    const bio = req.fields.bio;
    const avatar = req.files.avatar.path.split(path.sep).pop();
    let password = req.fields.password;
    const repassword = req.fields.repassword;

    try {
        if (!(name.length >= 1 && name.length <= 10)) {
            throw new Error('Please limit the name to 1-10 characters')
        }
        if (['female', 'male', 'none'].indexOf(gender) === -1) {
            throw new Error('Gender should be in female, male and none')
        }
        if (!(bio.length >= 1 && bio.length <= 30)) {
            throw new Error('Please limit the self introduction to 1-30 characters')
        }
        if (!req.files.avatar.name) {
            throw new Error('Lack of avatar')
        }
        if (password.length < 6) {
            throw new Error('Password should be 6 characters at least')
        }
        if (password !== repassword) {
            throw new Error('The two passwords are inconsistent')
        }
    } catch (e) {
        // sign up false，delete uploaded avatars asynchronously
        fs.unlink(req.files.avatar.path);
        req.flash('error', e.message);
        return res.redirect('/signup')
    }

    // Plaintext password encryption
    password = sha1(password);

    // User information waiting for write into database
    let user = {
        name: name,
        password: password,
        gender: gender,
        bio: bio,
        avatar: avatar
    }
    // User information write into database
    UserModel.create(user)
        .then(function (result) {
            // user value insert in mongodb, includes _id
            user = result.ops[0]
            // delete password, and save user information into session
            delete user.password
            req.session.user = user
            // write into session
            req.flash('success', 'success')
            // transfer to homepage
            res.redirect('/posts')
        })
        .catch(function (e) {
            // sign up false，delete uploaded avatars asynchronously
            fs.unlink(req.files.avatar.path)
            // user name is occupied, then return to sign up page instead of error page
            if (e.message.match('duplicate key')) {
                req.flash('error', 'User name has been occupied')
                return res.redirect('/signup')
            }
            next(e)
        })
});

module.exports = router;