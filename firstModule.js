var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExtn, callback)	{
	fs.readdir(dirName, function(err, list)	{
		if(err)	{
			return callback(err);
		}

		list = list.filter(function(file)	{
			return path.extname(file) == '.'+fileExtn
		});
		callback(null,list);
	});
}

