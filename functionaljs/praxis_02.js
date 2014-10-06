
var area = function(width, height)	{
	return width * height;
}

function repeat(operation, num)	{
	for(var i=0; i<num; i++)	{
		operation(i, (i*2 ))
	}
}

module.exports = repeat;
