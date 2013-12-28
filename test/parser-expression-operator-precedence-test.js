var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe ('Operator precedence', function () {

    it ('should return * before +', function () {
        var t = parser.parse('1+2*3', 'expression');
        t.operator.should.eql('+');
        t.right.operator.should.eql('*');
    });

    it ('should return < before |', function () {
        var t = parser.parse('1|2<3', 'expression');
        t.operator.should.eql('|');
        t.right.operator.should.eql('<');
    });

    describe ('Dot and Array operators', function () {

        it ('should return operators left ro right 1', function () {
            var t = parser.parse('foo.bar[abc]', 'expression');
            t.operator.should.eql('[]');
                t.left.operator.should.eql('.');
                    t.left.left.repr.should.eql('foo');
                    t.left.right.repr.should.eql('bar');
                t.right.repr.should.eql('abc');
        });

        it ('should return index expression before dot operator', function () {
            var t = parser.parse('foo[bar].abc', 'expression');
            t.operator.should.eql('.');
                t.left.operator.should.eql('[]');
                    t.left.left.repr.should.eql('foo');
                    t.left.right.repr.should.eql('bar');
                t.right.repr.should.eql('abc');
        });

        it ('should return + before []', function () {
            var t = parser.parse('foo[bar+abc]', 'expression');
            t.operator.should.eql('[]');
            t.left.repr.should.eql('foo');
            t.right.operator.should.eql('+');
            t.right.left.repr.should.eql('bar');
            t.right.right.repr.should.eql('abc');
        });

        it ('should return operators left ro right 2', function () {
            var t = parser.parse('foo[bar].abc', 'expression');
            t.operator.should.eql('.');
            t.left.operator.should.eql('[]');
            t.left.left.repr.should.eql('foo');
            t.left.right.repr.should.eql('bar');
            t.right.repr.should.eql('abc');
        });

        it ('should return index operator before add operator', function () {
            var t = parser.parse('foo[bar]+abc', 'expression');
            t.operator.should.eql('+');
            t.left.operator.should.eql('[]');
            t.left.left.repr.should.eql('foo');
            t.left.right.repr.should.eql('bar');
            t.right.repr.should.eql('abc');
        });

        it ('should return operators left ro right 3', function () {
            var t = parser.parse('foo[bar][abc]', 'expression');
            t.operator.should.eql('[]');
            t.left.operator.should.eql('[]');
            t.left.left.repr.should.eql('foo');
            t.left.right.repr.should.eql('bar');
            t.right.repr.should.eql('abc');
        });
    });

    describe ('same level precedence', function () {

        it ('should return operators left ro right for same precedence operators level 7 1', function () {
            var t = parser.parse('1+2+3', 'expression');
            t.operator.should.eql('+');
                t.left.operator.should.eql('+');
                    t.left.left.repr.should.eql('1');
                    t.left.right.repr.should.eql('2');
                t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 7 2', function () {
            var t = parser.parse('1-2+3', 'expression');
            t.operator.should.eql('+');
                t.left.operator.should.eql('-');
                    t.left.left.repr.should.eql('1');
                    t.left.right.repr.should.eql('2');
                t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 7 3', function () {
            var t = parser.parse('1+2-3', 'expression');
            t.operator.should.eql('-');
                t.left.operator.should.eql('+');
                    t.left.left.repr.should.eql('1');
                    t.left.right.repr.should.eql('2');
                t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 1', function () {
            var t = parser.parse('1|2|3', 'expression');
            t.operator.should.eql('|');
            t.left.operator.should.eql('|');
            t.left.left.repr.should.eql('1');
            t.left.right.repr.should.eql('2');
            t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 2', function () {
            var t = parser.parse('1^2^3', 'expression');
            t.operator.should.eql('^');
            t.left.operator.should.eql('^');
            t.left.left.repr.should.eql('1');
            t.left.right.repr.should.eql('2');
            t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 3', function () {
            var t = parser.parse('1&2&3', 'expression');
            t.operator.should.eql('&');
            t.left.operator.should.eql('&');
            t.left.left.repr.should.eql('1');
            t.left.right.repr.should.eql('2');
            t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 4', function () {
            var t = parser.parse('1<2>3', 'expression');
            t.operator.should.eql('>');
            t.left.operator.should.eql('<');
            t.left.left.repr.should.eql('1');
            t.left.right.repr.should.eql('2');
            t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 5', function () {
            var t = parser.parse('1==2!=3', 'expression');
            t.operator.should.eql('!=');
            t.left.operator.should.eql('==');
            t.left.left.repr.should.eql('1');
            t.left.right.repr.should.eql('2');
            t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 6', function () {
            var t = parser.parse('1:-2::3', 'expression');
            t.operator.should.eql('::');
            t.left.operator.should.eql(':-');
            t.left.left.repr.should.eql('1');
            t.left.right.repr.should.eql('2');
            t.right.repr.should.eql('3');
        });

        it ('should return operators left ro right for same precedence operators level 8', function () {
            var t = parser.parse('1/2*3', 'expression');
            t.operator.should.eql('*');
                t.left.operator.should.eql('/');
                    t.left.left.repr.should.eql('1');
                    t.left.right.repr.should.eql('2');
                t.right.repr.should.eql('3');
        });
    })
});
