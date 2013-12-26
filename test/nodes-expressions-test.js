var expressions = require('../nodes/expressions');

describe('expressions', function () {

    it ('should return smth', function () {
        var e = new expressions.Op2(expressions.OP2.ADD, '1', '2');
        e.operator.should.eql(expressions.OP2.ADD);
        e.left.should.eql('1');
        e.right.should.eql('2');
    });
})