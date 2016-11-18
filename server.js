var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
	var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	var lan = req.headers['accept-language'];
	res.send({
		ipaddress: ip,
		language: lan
	});
});


app.listen(app.get('port'), function(){
  console.log('App listening on', app.get('port'));
});