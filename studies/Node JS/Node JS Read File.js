// console.log(process.argv)

var fs = require('fs')
var path = process.argv[2];

// var buffer = fs.readFileSync(path);
// var str = buffer.toString();
var str = fs.readFileSync(path, 'utf8');

var filearray = str.split('\n');

console.log(filearray.length - 1);


/*
var fs = require('fs')

var path = process.argv[2];

// var buffer = fs.readFileSync(path);
// var str = buffer.toString();
var str = fs.readFile(path, 'utf8', function callback (err, data) {
 	var filearray = data.split('\n');
 	console.log(filearray.length - 1);
});

*/