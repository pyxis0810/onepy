var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

module.exports = (function() {
  router.get('/', function(req, res) {
    console.log(config.accessToken);
    request.get({
      uri: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + config.accessToken
    }, function(error, response, body) {
      var json = JSON.parse(body);
      console.log(json.data);
      res.json(json.data);
    });
  });

  return router;
})();
