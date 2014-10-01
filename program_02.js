var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName, function(err, contents)	{
	var lines = contents.toString().split("\n").length - 1;
	console.log(lines);
});