'use strict';

var express = require('express'); // do not change this line


var server = express();

server.get('/',function(req, res){
	res.status(200);
	res.set({
		'Content-Type': 'text/html'
	});
	res.send('root');

});

server.get('/lorem',function(req, res){
	res.status(200);
	res.set({
		'Content-Type': 'text/html'
	});
	res.send('<!DOCTYPE html><html><body>lorem ipsum</body></html>');

});

server.listen(process.env.PORT||8080);
// http://localhost:8080/lorem should return '<!DOCTYPE html><html><body>lorem ipsum</body></html>' as html
