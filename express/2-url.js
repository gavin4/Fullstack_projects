'use strict';

var express = require('express'); // do not change this line

var server = express();

server.get('/',function(req, res){
	res.status(200);
	res.set({
		'Content-Type': 'text/plain'
	});
	res.send('you have accessed the root');

});

server.get('/test/:parameter',function(req, res){
	res.status(200);
	res.set({
		'Content-Type': 'text/plain'
	});
	res.send('you have accessed "' + req.params.parameter +'" within test');

});

server.get('/attributes',function(req, res){
	res.status(200);
	res.set({
		'Content-Type': 'text/html'
	});
	var htmlStr = '<!DOCTYPE html><html><body><table border="1">';
	for(var key in req.query)
		htmlStr = htmlStr.concat('<tr><td>' + key  + '</td><td>' + req.query[key] + '</td></tr>');
	htmlStr = htmlStr.concat('</table></body></html>');
	res.send(htmlStr);

});

server.get('/unexpected',function(req, res){
	res.status(200);
	res.set({
		'Content-Type': 'text/plain'
	});
	res.send('');

});
server.listen(process.env.PORT||8080);
// http://localhost:8080/ should return 'you have accessed the root' in plain text

// http://localhost:8080/test/hello should return 'you have accessed "hello" within test' in plain text

// http://localhost:8080/test/world should return 'you have accessed "world" within test' in plain text

// http://localhost:8080/attributes?hello=world&lorem=ipsum should return the following as html (row order might differ)
//   <!DOCTYPE html>
//   <html>
//     <body>
//       <table border="1">
//         <tr><td>hello</td><td>world</td></tr>
//         <tr><td>lorem</td><td>ipsum</td></tr>
//       </table>
//     </body>
//   </html>

// http://localhost:8080/attributes?first=1&second=2&third=3 should return the following as html (row order might differ)
//   <!DOCTYPE html>
//   <html>
//     <body>
//       <table border="1">
//         <tr><td>first</td><td>1</td></tr>
//         <tr><td>second</td><td>2</td></tr>
//         <tr><td>third</td><td>3</td></tr>
//       </table>
//     </body>
//   </html>
