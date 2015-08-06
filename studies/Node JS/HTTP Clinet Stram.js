// console.log(process.argv)

var bl = require('bl');
var http = require('http');

// console.log(process.argv[2]);

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8');
//   // response.on('data', console.log)
//   response.on('error', console.error);
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err);

//     console.log(data.length);
//     console.log(data.toString());
//   }));
// });

var hyperquest = require('hyperquest'),
bl = require('bl'),
url = process.argv[2];

hyperquest(url).pipe(bl(function (err, data) {
    console.log(data.length);
    console.log(data.toString());
}));
