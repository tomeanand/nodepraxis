var fs = require('fs');
var fileName = process.argv[2];

var contents = fs.readFileSync(fileName);
var lines = contents.toString().split('\n').length -1;

console.log(lines);