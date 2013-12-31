describe ('Interface', function () {

    var types = require('../types');
    var Type = types.Type;
    var Interface = types.Interface;

    it ('should be a type', function () {
        var i = new Interface();
        i.should.be.an.instanceOf(Type);
    });

    it ('should add an interface', function () {
        var i = new Interface();
        var i2 = new Interface();
        i.implements(i2);
    });

    it ('should implement an interface', function () {
        var i = new Interface();
        var i2 = new Interface();
        i.implements(i2);
        i.isA(i2).should.be.ok;
        i2.isA(i).should.not.be.ok;
    });
});