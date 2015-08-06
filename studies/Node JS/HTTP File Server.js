// console.log(process.argv)

var port = process.argv[2];
var filepath = process.argv[3];


var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' });

	var src = fs.createReadStream(filepath, {
		encoding: 'utf8',
		autoClose: true
	});

	src.pipe(response);
});

server.listen(+port);

