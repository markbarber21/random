// console.log(process.argv)

var mymodule = require('./directoryfilter');

var dirPath = process.argv[2];
var extension = process.argv[3];

mymodule.filter(dirPath, extension);
mymodule.sayHello();