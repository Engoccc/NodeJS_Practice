const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

// GET /posts article page for all users or specific user
//   eg: GET /posts?author=xxx
router.get('/', function (req, res, next) {
    res.render('posts')
});

// POST /posts/create post an article
router.post('/create', checkLogin, function (req, res, next) {
    res.send('Post an article')
});

// GET /posts/create create an article page
router.get('/create', checkLogin, function (req, res, next) {
    res.send('Create an article page')
});

// GET /posts/:postId a separate article page
router.get('/:postId', function (req, res, next) {
    res.send('Article details page')
});

// GET /posts/:postId/edit update article page
router.get('/:postId/edit', checkLogin, function (req, res, next) {
    res.send('Update article page')
});

// POST /posts/:postId/edit update an article
router.post('/:postId/edit', checkLogin, function (req, res, next) {
    res.send('Update an article')
});

// GET /posts/:postId/remove delete an article
router.get('/:postId/remove', checkLogin, function (req, res, next) {
    res.send('Delete an article')
});

module.exports = router;