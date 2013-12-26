var parser = require('./parser');
var expressions = require('./nodes/expressions');

console.log(parser.parse("1+1"));

console.log(expressions.Op2(expressions.OP2.ADD, 1, 1));
