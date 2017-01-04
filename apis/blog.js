var express = require('express');
var router = express.Router();
var request = require('request');
var parseString = require('xml2js').parseString;

module.exports = (function() {
  router.get('/', function(req, res) {
    request.get({
      uri: 'http://blog.rss.naver.com/hsmskim.xml'
    }, function(error, response, body) {
      var xml = body;
      var json = null;
      parseString(xml, function(err, result) {
        json = result.rss.channel[0];
      })
      res.send(json);
    });
  });

  return router;
})();
