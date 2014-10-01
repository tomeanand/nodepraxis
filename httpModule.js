var http = require('http');
var fs = require('fs');

module.exports = function(pname,fname)	{
	var port = pname;
	var server = http.createServer(function(request, response)	{
		response.writeHead(200,{'content-type':'text/plan'});
		fs.createReadStream(fname).pipe(response);
	})
	server.listen(port, function()	{
		console.log('Opened port : '+port);
	})
}	