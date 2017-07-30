var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/chapters', function (req, res, next) {
    var chapters = mocks.chapters;
    console.log("Hello");
    res.json(chapters);
});



module.exports = router;
