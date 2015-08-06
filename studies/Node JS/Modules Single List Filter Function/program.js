// console.log(process.argv)

var mymodule = require('./directoryfilter');

var dirPath = process.argv[2];
var extension = process.argv[3];

mymodule(dirPath, extension, function (error, list) {
  if (error)
    return console.error('There was an error:', error);
  
  list.forEach(function (term) {
    console.log(term);
  });
});
// mymodule.sayHello();