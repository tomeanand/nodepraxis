var http = require('http');

var urlPassed = process.argv[2];
if(urlPassed == undefined)	{
	console.log('None passed')
}
http.get(urlPassed, function(response)	{
	response.setEncoding('utf8');
	response.on('data', function(data)	{
		console.log(data);
	})
})