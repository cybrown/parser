var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe ('Statement parser', function () {

    it ('should return an expression statement', function () {
        var prg = '3 - 3 ;';
        var t = parser.parse(prg, 'statement_expression');
        t.should.be.an.instanceOf(expressions.StatementExpression);
        t.expression.should.be.an.instanceOf(expressions.Op2);
    });

    it ('should return an if statement and block', function () {
        var prg = 'if z == 4 {\n'
            + '    foo.bsr;\n'
            + '    1+1;\n'
            + '    3-3;\n'
            + '}';
        var t = parser.parse(prg, 'statement_if');
        t.should.be.an.instanceOf(expressions.StatementIf);
        t.condition.should.be.an.instanceOf(expressions.Op2);
        t.block[0].expression.should.be.an.instanceOf(expressions.Op2);
        t.block[1].expression.should.be.an.instanceOf(expressions.Op2);
        t.block[2].expression.should.be.an.instanceOf(expressions.Op2);
    });

    it ('should return a while statement and block', function () {
        var prg = 'while z == 4 {\n'
            + '    foo.bsr;\n'
            + '    1+1;\n'
            + '    3-3;}';
        var t = parser.parse(prg, 'statement_while');
        t.should.be.an.instanceOf(expressions.StatementWhile);
        t.condition.should.be.an.instanceOf(expressions.Op2);
        t.block[0].expression.should.be.an.instanceOf(expressions.Op2);
        t.block[1].expression.should.be.an.instanceOf(expressions.Op2);
        t.block[2].expression.should.be.an.instanceOf(expressions.Op2);
    });
});
