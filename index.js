const path = require('path');
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

//No middleware
/**app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);
 **/

app.use(function (req, res, next) {
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

app.listen(3000);
