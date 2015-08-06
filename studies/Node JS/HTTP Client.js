// console.log(process.argv)

var http = require('http');

// var url = "http://www.google.com/index.html";
var url = process.argv[2];

/*
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
*/


http.get(url, function(response) {
  // console.log("Got response: " + response.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(response.headers));

  response.setEncoding('utf8');
  response.on("data", function (data) {
    console.log(data);
  });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});



