var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extension, tocall) {
  fs.readdir(dirPath, function callback (err, list) {
    if (err)
      return tocall(err);

    list = list.filter(function (file) {
      return path.extname(file) === '.' + extension;
    });

    tocall(null, list);
  });
};