var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

function doCreateServers()	{
var server = net.createServer(function(socket)	{
	var time = strftime('%F %T', new Date());
	socket.write(time.substring(0,time.length-3)+'\n');
	socket.end();
});

server.listen(port, function()	{
	var time = strftime('%F %T', new Date());
	console.log('Listening to port : '+time);

});
}

if(port != undefined)	{
	doCreateServers();
}
else	{
	console.log("Please assign port");
}