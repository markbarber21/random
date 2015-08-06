// console.log(process.argv)

var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = process.argv[3];

// var buffer = fs.readFileSync(path);
// var str = buffer.toString();
var str = fs.readdir(dirPath, function callback (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + extension) {
      console.log(file);
    }
  });
});


// var total = 0;
// for (i = 2; i < process.argv.length; i++) { 
//     total += +process.argv[i];
// }


