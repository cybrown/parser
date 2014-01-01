describe ('Interface', function () {

    var types = require('../types');
    var Type = types.Type;
    var Interface = types.Interface;

    it ('should be a type', function () {
        var i = new Interface();
        i.should.be.an.instanceOf(Type);
    });

    it ('should implement an interface', function () {
        var i = new Interface();
        var i2 = new Interface();
        i.implements(i2);
        i.isA(i2).should.be.ok;
        i2.isA(i).should.not.be.ok;
    });

    it ('should not implement an already implemented interface', function () {
        var i = new Interface();
        var i2 = new Interface();
        i.implements(i2);
        (function () {
            i2.implements(i);
        }).should.throw();
    });

    it ('should calculate the distance with itself', function () {
        var i1 = new Interface();
        i1.distance(i1).should.eql(0);
    });

    it ('should calculate the distance with a parent type', function () {
        var i1 = new Interface();
        var c2 = new Interface();
        i1.extends(i2);
        i1.distance(c2).should.eql(1);
    });

    it ('should only return distance with an interface', function () {
        var i1 = new Interface();
        var o = {};
        i1.distance(o).should.eql(-1);
    });

    it ('should return -1 when another type is not a subtype', function () {
        var i1 = new Interface();
        var i2 = new Interface();
        i1.extends(i2);
        i2.distance(i1).should.eql(-1);
    });
});