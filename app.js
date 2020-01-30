const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const config = require('config-lite')(__dirname);
const routes = require('./routes');
const pkg = require('./package');

const app = express();

// build template module
app.set('views', path.join(__dirname, 'views'));
// module engine is ejs
app.set('view engine', 'ejs');

// set static files content
app.use(express.static(path.join(__dirname, 'public')));
// session middleware
app.use(session({
    name: config.session.key, // set name of session id saved in cookie
    secret: config.session.secret, // by setting secret to calculate the hash value and put it in the cookie, the generated signed-cookie is tamper proof
    resave: true, // update session compulsorily
    saveUninitialized: false, // start with an unsigned status
    cookie: {
        maxAge: config.session.maxAge// expiration time. after expiration, the session ID in the cookie is automatically deleted
    },
    store: new MongoStore({// store session to mongodb
        url: config.mongodb// mongodb address
    })
}));
// flash middleware, to demonstrate notice
app.use(flash());

// set template global constant
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
}

// three variables required to add a template
app.use(function (req, res, next) {
    res.locals.user = req.session.user
    res.locals.success = req.flash('success').toString()
    res.locals.error = req.flash('error').toString()
    next()
})

// route
routes(app);

// listen port, start program
app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`)
});


//No middleware
/**app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);
 **/

//routes example
/**app.use(function (req, res, next) {
    console.log('This is the first middleware.');
    next();
});

app.use(function (req, res, next) {
    console.log('This is the second middleware. The next is handling errors.');
    next(new Error('Sry'));
});

app.use(function (req, res, next) {
    console.log('To show the end.');
    res.status(200).end();
});

//error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke');
});
 **/


