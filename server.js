var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.listen(1234);
console.log('Express server started on port %s', 1234);

