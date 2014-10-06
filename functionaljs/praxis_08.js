function duckCount ()	{
	return Array.prototype.slice.call(arguments).filter(function(obj)	{
		//console.log(Object.prototype.hasOwnProperty.call(obj,'quack'));
		return Object.prototype.hasOwnProperty.call(obj,'quack');
	}).length;
}

module.exports = duckCount;