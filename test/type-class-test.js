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

    it ('should extend another class', function () {
        var parent1 = new Class();
        var parent2 = new Class();
        parent1.extends(parent2);
        var c = new Class();
        c.extends(parent1);
        c.isA(parent2).should.be.ok;
        parent2.isA(c).should.not.be.ok;
    });

    it ('should be an interface implemented by a superclass', function () {
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

    it ('should not extend multiple times the same class', function () {
        var c = new Class();
        var cc = new Class();
        c.extends(cc);
        (function () {
            c.extends(cc);
        }).should.throw();
    });

    it ('should not extend a subtype', function () {
        var c = new Class();
        var c1 = new Class();
        c.extends(c1);
        (function () {
            c1.extends(c);
        }).should.throw();
    });

    it ('should calculate the distance with itself', function () {
        var c1 = new Class();
        c1.distance(c1).should.eql(0);
    });

    it ('should calculate the distance with a parent type', function () {
        var c1 = new Class();
        var c2 = new Class();
        c1.extends(c2);
        c1.distance(c2).should.eql(1);
    });

    it ('should only return distance with a class or an interface', function () {
        var c1 = new Class();
        var o = {};
        c1.distance(o).should.eql(-1);
    });

    it ('should return -1 when another type is not a subtype', function () {
        var c1 = new Class();
        var c2 = new Class();
        c1.extends(c2);
        c2.distance(c1).should.eql(-1);
    });
});