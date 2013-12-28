var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe ('Statement parser', function () {

    /*
    it ('should return statements tree', function () {
        var prg = 'a + 1\n'
                + '    foo.bar\n'
                + '    1+1';
        var t = parser.parse(prg, 'program');
        t.should.be.an.instanceOf(expressions.StatementIf);
        t.condition.should.be.an.instanceOf(expressions.Op2);
    });
    */

    it ('should return an if statement and block', function () {
        var prg = 'if z == 4\n'
            + '    foo.bsr\n'
            + '    1+1\n'
            + '    3-3\n';
        var t = parser.parse(prg, 'program');
        t[0].should.be.an.instanceOf(expressions.StatementIf);
        t[0].condition.should.be.an.instanceOf(expressions.Op2);
        t[0].block[0].should.be.an.instanceOf(expressions.Op2);
        t[0].block[1].should.be.an.instanceOf(expressions.Op2);
        t[0].block[2].should.be.an.instanceOf(expressions.Op2);
    });

    it ('should return a while statement and block', function () {
        var prg = 'while z == 4\n'
            + '    foo.bsr\n'
            + '    1+1\n'
            + '    3-3\n';
        var t = parser.parse(prg, 'program');
        t[0].should.be.an.instanceOf(expressions.StatementWhile);
        t[0].condition.should.be.an.instanceOf(expressions.Op2);
        t[0].block[0].should.be.an.instanceOf(expressions.Op2);
        t[0].block[1].should.be.an.instanceOf(expressions.Op2);
        t[0].block[2].should.be.an.instanceOf(expressions.Op2);
    });
});
