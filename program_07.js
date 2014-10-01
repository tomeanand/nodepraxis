var http = require('http');
var bl = require('bl');

var results = [];
var index = 0;

function getHttp()	{
	for(var i=2; i<process.argv.length; i++)	{
		
		http.get(process.argv[i], function(response)	{
			response.pipe(bl(function(error, data)	{
				if(error)	{ console.error('Error : ',error)}
				
				results[index] = data.toString();
				index ++;
				if(index == process.argv.length-2)	{
					printResult();
				} 
			}));
		})
	}
}

function printResult()	{
	for(var i=0; i<results.length; i++)	{
		console.log(results[i]);
	}
}



getHttp();