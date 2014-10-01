var fileFilter = require('./firstModule.js');
var dirName = process.argv[2];
var fExtn = process.argv[3];

fileFilter(dirName, fExtn, function(err, list)	{
	if(err)	{
		return console.error('Error getting the file list :: ',err);
	}
	list.forEach(function(file)	{
		console.log(file);
	})	
})