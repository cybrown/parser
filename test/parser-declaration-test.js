var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe ('Parser Declaration', function () {

    it ('should return a class declaration', function () {
        var prg = 'class Foo { i : int;}';
        var t = parser.parse(prg, 'declaration_class');
        t.should.be.an.instanceOf(expressions.DeclarationClass);
        t.name.should.eql('Foo');
        t.members[0].should.be.an.instanceOf(expressions.DeclarationAttribute);
        t.members[0].name.should.eql('i');
        t.members[0].type.should.eql('int');
    });

    it ('should return an interface declaration', function () {
        var prg = 'interface IFoo { i : int;}';
        var t = parser.parse(prg, 'declaration_class');
        t.should.be.an.instanceOf(expressions.DeclarationClass);
        t.name.should.eql('Foo');
        t.members[0].should.be.an.instanceOf(expressions.DeclarationAttribute);
        t.members[0].name.should.eql('i');
        t.members[0].type.should.eql('int');
    });
});
