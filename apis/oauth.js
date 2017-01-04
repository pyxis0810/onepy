var express = require('express');
var router = express.Router();
var passport = require('passport');

module.exports = (function() {
  router.get('/', passport.authenticate('instagram', { failureRedirect: '/' }), function(req, res) {
    res.redirect('/apis/instagram');
  });
  return router;
})();
