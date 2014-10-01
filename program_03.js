var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var extn = process.argv[3];

fs.readdir(folder,function(err, list){
	list.forEach(function(file){
		if(path.extname(file) == '.'+extn)	{
			console.log(file);
		}
	});
});