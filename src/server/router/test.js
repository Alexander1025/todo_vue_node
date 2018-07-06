var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.post('/haha', function(req, res, next) {
    res.send("这里是router");
});

module.exports = router;