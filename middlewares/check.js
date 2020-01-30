module.exports = {
    checkLogin: function checkLogin (req, res, next) {
        if (!req.session.user) {
            req.flash('error', 'Not sign in');
            return res.redirect('/signin')
        }
        next()
    },

    checkNotLogin: function checkNotLogin (req, res, next) {
        if (req.session.user) {
            req.flash('error', 'Sign in');
            return res.redirect('back')// back to page before
        }
        next()
    }
};