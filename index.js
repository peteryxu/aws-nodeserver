var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/hello', function (req, res) {
  res.send('Hello World! 0903');
});


app.listen(8080, '0.0.0.0', function () {
  console.log('Example app listening on port 8080!');
});
