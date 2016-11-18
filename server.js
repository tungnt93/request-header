var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
	var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	res.send('User-Agent: ' + ip);
});


app.listen(app.get('port'), function(){
  console.log('App listening on', app.get('port'));
});