var fs = require('fs');
var path = require('path');

module.exports = {
  filter: function(dirPath, extension) {
    var str = fs.readdir(dirPath, function callback (err, list) {
      if (err)
        return;

      list.forEach(function (file) {
        if (path.extname(file) === '.' + extension) {
          console.log(file);
        }
      });
    });
  },
  sayHello: function() {
    console.log("Well, Hello There!");
  }
};
