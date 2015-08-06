// console.log(process.argv)

var bl = require('bl');
var http = require('http');

var results = [];
var count = 0;

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i]);
}

// console.log(process.argv[2]);

var getter = function(argloc) {
  http.get(process.argv[2 + argloc], function (response) {
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);

      results[argloc] = data.toString();
      count++;

      if (count == 3)
        printResults();

    }));
  });
};

for (var i = 0; i < 3; i++)
  getter(i);

// var hyperquest = require('hyperquest'),
// bl = require('bl'),
// url = process.argv[2];

// hyperquest(url).pipe(bl(function (err, data) {
//     console.log(data.length);
//     console.log(data.toString());
// }));
