var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe('parser expression', function () {

    it ('should manage spaces around an expression', function () {
        var t = parser.parse(' 42 ');
        t.type.should.eql(expressions.ValueType.I32);
        t.repr.should.eql('42');
    });

    it ('should return the tree for 42', function () {
        var t = parser.parse('42');
        t.type.should.eql(expressions.ValueType.I32);
        t.repr.should.eql('42');
    });

    it ('should return the tree for expression 12+34', function () {
        var t = parser.parse('12+34');
        t.operator.should.eql('+');
        t.left.type.should.eql(expressions.ValueType.I32);
        t.left.repr.should.eql('12');
        t.right.type.should.eql(expressions.ValueType.I32);
        t.right.repr.should.eql('34');
    });
});
