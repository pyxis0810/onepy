'use strict';

var express = require('express');
var router = express.Router();

var locale = require('./locale');
var blog = require('./blog');
var instagram = require('./instagram');

module.exports = (function() {
    router.use('/locale', locale);
    router.use('/blog', blog);
    router.use('/instagram', instagram);

    return router;
})();
