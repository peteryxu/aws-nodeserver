var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/hello', function (req, res) {
  res.send('Hello World API: Modified on 09/18');
});

app.get('/bands', function (req, res) {
  let json={"bands":[
    {"name":"Ten Times Pointless", "tours":10},            
    {"name":"Scotland Thunder Brains", "tours":9},
    {"name":"Pointlessknot", "tours":7},
    {"name":"Torch, Ladies and Koalas", "tours":5},
    {"name":"My Heart, Your Brains", "tours":6},
    {"name":"Scotland State of Mind", "tours":3},
    {"name":"Our Pointless Torch Love", "tours":8}]}; 

    res.contentType('application/json');
    res.send(json);
});




app.listen(8080, '0.0.0.0', function () {
  console.log('Example app listening on port 8080!');
});
