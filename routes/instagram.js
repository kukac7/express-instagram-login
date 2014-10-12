var express = require('express');
var router = express.Router();

var ig = require('instagram-node').instagram();

ig.use({
    client_id: '1a94b0a8ce554ee08c54aa8fc7648633',
    client_secret: '70a317af5ca94f02962f335643035671'
});

var redirect_uri = 'http://localhost:3000/auth/instagram/callback';

/* GET /auth/instagram */
router.get('/', function(req, res) {
  res.redirect(ig.get_authorization_url(redirect_uri, { scope: ['likes', 'comments', 'relationships'], state: 'a state' }));
});

module.exports = router;