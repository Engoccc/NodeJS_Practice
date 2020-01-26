var express = require('express');
var router = express.Router();

//the first version. no ejs template.
/**router.get('/:name', function (req, res) {
    res.send('hello, right now we are at routes/users :)' + req.params.name)
})
**/

//with ejs template
router.get('/:name', function (req, res) {
    res.render('users', {
        name: req.params.name
    })
})

module.exports = router;