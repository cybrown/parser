var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe('parser expression for unary operators', function () {

    it ('should return symbol -', function () {
        var t = parser.parse('- 1', 'expression');
        t.should.be.an.instanceOf(expressions.Op1);
        t.operator.should.eql('-');
    });

    it ('should return symbol +', function () {
        var t = parser.parse('+ 1', 'expression');
        t.should.be.an.instanceOf(expressions.Op1);
        t.operator.should.eql('+');
    });

    it ('should return symbol ++', function () {
        var t = parser.parse('++ 1', 'expression');
        t.should.be.an.instanceOf(expressions.Op1);
        t.operator.should.eql('++');
    });

    it ('should return symbol !', function () {
        var t = parser.parse('! 1', 'expression');
        t.should.be.an.instanceOf(expressions.Op1);
        t.operator.should.eql('!');
    });

    it ('should return symbol ~', function () {
        var t = parser.parse('~ 1', 'expression');
        t.should.be.an.instanceOf(expressions.Op1);
        t.operator.should.eql('~');
    });

    it ('should return symbol - with sub expression', function () {
        var t = parser.parse('- ( 1 + 5 )', 'expression');
        t.should.be.an.instanceOf(expressions.Op1);
        t.operator.should.eql('-');
    });

    it ('should return multiple unary operators', function () {
        var t = parser.parse('! - 1', 'expression');
        t.should.be.an.instanceOf(expressions.Op1);
        t.operator.should.eql('!');
        t.operand.should.be.an.instanceOf(expressions.Op1);
        t.operand.operator.should.eql('-');
        t.operand.operand.should.be.an.instanceOf(expressions.Value);
        t.operand.operand.repr.should.eql('1');
    });
});

describe('parser expression for binary operators', function () {

    it ('should return symbol |-', function () {
        var t = parser.parse('1|-1', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('|-');
    });

    it ('should return symbol ^', function () {
        var t = parser.parse('1^1', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('^');
    });

    it ('should return symbol &', function () {
        var t = parser.parse('1&1', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('&');
    });

    it ('should return symbol <>', function () {
        var t = parser.parse('1<>1', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('<>');
    });

    it ('should return symbol ==!', function () {
        var t = parser.parse('1==!1', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('==!');
    });

    it ('should return symbol :+*', function () {
        var t = parser.parse('foo:+$bar', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql(':+');
    });

    it ('should return symbol +*/', function () {
        var t = parser.parse('31.4e-1+*/pi', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('+*/');
    });

    it ('should return symbol **', function () {
        var t = parser.parse('foo**foo', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('**');
    });

    it ('should return symbol .', function () {
        var t = parser.parse('foo.bar', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('.');
    });

    it ('should return symbol []', function () {
        var t = parser.parse('foo[bar]', 'expression');
        t.should.be.an.instanceOf(expressions.Op2);
        t.operator.should.eql('[]');
    });
});
