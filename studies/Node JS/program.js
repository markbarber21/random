// console.log(process.argv)

var fs = require('fs')

var port = process.argv[2];
var filepath = process.argv[3];

var bl = require('bl');
var http = require('http')

var server = http.createServer(function (request, response) {
	
	var src = fs.createReadStream(filepath, {
		encoding: 'utf8',
		autoClose: true
	});

	src.pipe(response);
});

server.listen(+port);

