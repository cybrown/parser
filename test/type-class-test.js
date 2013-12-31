describe ('Class', function () {

    var types = require('../types');
    var Type = types.Type;
    var Class = types.Class;
    var Interface = types.Interface;

    it ('should be a type', function () {
        var c = new Class();
        c.should.be.an.instanceOf(Type);
    });

    it ('should set a superclass', function () {
        var parent = new Class();
        var c = new Class();
        c.extends(parent);
        c.parent.should.eql(parent);
    });

    it ('should add an interface', function () {
        var c = new Class();
        var i = new Interface();
        c.implements(i);
    });

    it ('should be a subclass of itself', function () {
        var c = new Class();
        c.isA(c).should.be.ok;
    });

    it ('should be a sub class of a parent', function () {
        var parent = new Class();
        var c = new Class();
        c.extends(parent);
        c.isA(parent).should.be.ok;
    });

    it ('should be a sub class of a parent', function () {
        var parent1 = new Class();
        var parent2 = new Class();
        parent1.extends(parent2);
        var c = new Class();
        c.extends(parent1);
        c.isA(parent2).should.be.ok;
        parent2.isA(c).should.not.be.ok;
    });

    it ('should be an implemented interface', function () {
        var parent1 = new Class();
        var parent2 = new Class();
        var inter = new Interface();
        parent1.extends(parent2);
        parent2.implements(inter);
        var c = new Class();
        c.extends(parent1);
        c.isA(inter).should.be.ok;
        inter.isA(c).should.not.be.ok;
    });
});