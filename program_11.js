var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response)	{
	//
	//
	var parsedUrl = url.parse(request.url, true)
	var time = new Date();
	var result ;

	if(parsedUrl.pathname == '/api/parsetime')	{
		result = parseTime(time);
	}
	else if(parsedUrl.pathname == '/api/unixtime')	{
		result = getUnixTime(time);
	}
	else{
		// do nothing
	}

	if(result != null)	{
		response.writeHead(200,{'content-type' : 'application/josn'});
		response.write(JSON.stringify( result ));
		response.end();
	}
	else	{
		response.writeHead(404);
		response.end();
	}
});

function parseTime(time)	{
 return {hour:time.getHours(), minute:time.getMinutes(), second: time.getSeconds()}
}
function getUnixTime(time)	{
	return {unixtime:time.getTime()}
}

server.listen(Number(process.argv[2]), function()	{
	console.log('Started server on port '+process.argv[2]);
})

