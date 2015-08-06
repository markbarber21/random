// console.log(process.argv)

var url = require('url');

module.exports = {
  get: function (req, res) {
    var urlObject = url.parse(req.url, true);
    var input = urlObject.query.iso;
    var date = new Date(input);
    var obj = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    };

    res.json(obj);
  },
  put: function (req, res) {
    res.send('Got a PUT request at ' + this.api);
  },

  post: function (req, res) {
    res.send('Got a POST request at '  + this.api);
  },

  del: function (req, res) {
    res.send('Got a DELETE request at ' + this.api);
  },

  api: "/api/parsetime"
};
