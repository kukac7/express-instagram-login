var express = require('express');
var router = express.Router();

var ig = require('instagram-node').instagram();

ig.use({
    client_id: '1a94b0a8ce554ee08c54aa8fc7648633',
    client_secret: '70a317af5ca94f02962f335643035671'
});

var redirect_uri = 'http://localhost:3000/auth/instagram/callback';

/* GET /auth/instagram/callback */
router.get('/', function(req, res) {
	ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
		if (err) {
			console.log(err.body);
			res.send('HIBA');
		}
		else {
			console.log('YO: ' + result.access_token);
			res.redirect('/');
		}
	});
});

module.exports = router;