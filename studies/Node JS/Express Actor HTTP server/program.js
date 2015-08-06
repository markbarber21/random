// console.log(process.argv)

var port = process.argv[2];
var express = require('express');
var url = require('url');
var app = express();

var parseActor = require('./actor_parsetime');
var unixTimeActor = require('./actor_unixtime');


app.get('/', function (req, res) {
  console.log(req);
  res.send('Root Hello World!');
});

//  Actor Mappings
app.get(parseActor.api, parseActor.get);
app.put(parseActor.api, parseActor.put);
app.post(parseActor.api, parseActor.post);
app.delete(parseActor.api, parseActor.del);

app.get(unixTimeActor.api, unixTimeActor.get);
app.put(unixTimeActor.api, unixTimeActor.put);
app.post(unixTimeActor.api, unixTimeActor.post);
app.delete(unixTimeActor.api, unixTimeActor.del);


var server = app.listen(+port, function () {
  var host = server.address().address;
  var listenport = server.address().port;

  console.log('My app listening at http://%s:%s', host, listenport);
});