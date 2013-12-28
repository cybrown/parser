var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe('parser expression for symbols', function () {

    it ('should return symbol foo', function () {
        var t = parser.parse('foo', 'expression');
        t.type.should.eql(expressions.ValueType.SYMBOL);
        t.repr.should.eql('foo');
    });

    it ('should return symbol $if', function () {
        var t = parser.parse('$if', 'expression');
        t.type.should.eql(expressions.ValueType.SYMBOL);
        t.repr.should.eql('if');
    });

    it ('should return symbol a', function () {
        var t = parser.parse('a', 'expression');
        t.type.should.eql(expressions.ValueType.SYMBOL);
        t.repr.should.eql('a');
    });

    it ('should return symbol b', function () {
        var t = parser.parse('$b', 'expression');
        t.type.should.eql(expressions.ValueType.SYMBOL);
        t.repr.should.eql('b');
    });
});
