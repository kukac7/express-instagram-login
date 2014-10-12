var express = require('express');
var router = express.Router();

var ig = require('instagram-node').instagram();

ig.use({
    client_id: '1a94b0a8ce554ee08c54aa8fc7648633',
    client_secret: '70a317af5ca94f02962f335643035671'
});

/* GET home page. */
router.get('/', function(req, res) {
	ig.user('175948269', function(err, result, remaining, limit) {
	    if (err) {
	        console.log(err);
	        res.send('HIBA');
	    }
	    else {
	        console.log('YO: ' + result);
	        res.render('index', { user: result });
	        //res.send('MUXIK');
	    }
	});
});

module.exports = router;
