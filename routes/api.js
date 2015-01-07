/**
 * New node file
 */
var express = require('express');
var http = require('http'),
url = require('url'),
path = require('path'),
fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	 //request to /api
    var query = url.parse(req.url, true).query;
    var options = {
        hostname: "api.steampowered.com",
        method: query.httpmethod,
        path: query.api + "/" + query.method + "/v000" + query.version + "/"
    };

    //Building the request path
    var pathKeys = Object.keys(query).filter(function(key) {
        return key !== "method" && key !== "api" && key !== "httpmethod" && key !== "version";
    });
    if (pathKeys.length > 0) {
        var firstKey = pathKeys.pop();
        options.path += "?" + firstKey + "=" + query[firstKey];
        pathKeys.forEach(function(key) {
            options.path += "&" + key + "=" + query[key];
        });
    }
    // end request path
    
    //Use Options to make the Steam API request
    /*
	var request = http.request(options, function(response) {
		console.log('STATUS: ' + response.statusCode);
		console.log('HEADERS: ' + JSON.stringify(response.headers));
		response.setEncoding('utf8');
		response.on('data', function(chunk) {
			res.write(chunk);
		});
	});
	
	request.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});
	request.end();
	*/
	//End Steam API Request
    res.set('Content-type', 'application/json');
    res.write(JSON.stringify(options));
    res.end();
    return; // end request to /api
    
  //res.render('index', { title: 'Express' });
});

module.exports = router;
