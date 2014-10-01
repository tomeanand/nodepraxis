var httpm = require('./httpModule.js');
var port = process.argv[2];
var fname = process.argv[3];

if(port != undefined || fname == undefined)	{
	var server = httpm(port, fname);
}
else	{
	console.log('Enter port number to listen and file to read.');
}