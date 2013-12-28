var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe('parser expression', function () {

    it ('should not manage spaces around an expression', function () {
        (function () {
            var t = parser.parse(' 42 ', 'expression');
        }).should.throw();
    });

    it ('should return the tree for 42', function () {
        var t = parser.parse('42', 'expression');
        t.type.should.eql(expressions.ValueType.I32);
        t.repr.should.eql('42');
    });

    it ('should return the tree for expression 12+34', function () {
        var t = parser.parse('12+34', 'expression');
        t.operator.should.eql('+');
        t.left.type.should.eql(expressions.ValueType.I32);
        t.left.repr.should.eql('12');
        t.right.type.should.eql(expressions.ValueType.I32);
        t.right.repr.should.eql('34');
    });
});
